"use client";

import {
  Children,
  Fragment,
  isValidElement,
  useLayoutEffect,
  useRef,
} from "react";

const resolveOffset = (value, size) => {
  if (typeof value === "number") return value;

  const text = String(value).trim();

  if (text.endsWith("%")) {
    return (parseFloat(text) / 100) * size;
  }

  return parseFloat(text) || 0;
};

const scrollsInside = (node, stop, delta) => {
  for (
    let element = node;
    element && element !== stop;
    element = element.parentElement
  ) {
    if (element.scrollHeight <= element.clientHeight + 1) continue;

    const overflow = getComputedStyle(element).overflowY;

    if (overflow !== "auto" && overflow !== "scroll") continue;

    if (
      delta > 0
        ? element.scrollTop + element.clientHeight < element.scrollHeight - 1
        : element.scrollTop > 0
    ) {
      return true;
    }
  }

  return false;
};

export const ScrollStackItem = ({ children, itemClassName = "", style }) => (
  <div
    className={`relative box-border w-full origin-top rounded-[28px] p-10 will-change-transform ${itemClassName}`.trim()}
    style={style}
  >
    {children}

    <span
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 rounded-[inherit] bg-black opacity-[var(--scroll-stack-dim,0)]"
    />
  </div>
);

const ScrollStack = ({
  children,
  className = "",
  itemDistance = 100,
  itemStackDistance = 24,
  stackPosition = "15%",
  itemScale = 0.05,
  baseScale = 0.8,
  dimAmount = 0.2,
  blurAmount = 0,
  tiltAmount = 0,
  rotationAmount = 0,
  holdDistance = 200,
  smoothScroll = true,
  snap = false,
  useWindowScroll = false,
  onStackComplete,
}) => {
  const rootRef = useRef(null);
  const innerRef = useRef(null);
  const endRef = useRef(null);
  const settingsRef = useRef(null);
  const scheduleRef = useRef(null);

  const items = Children.toArray(children);

  useLayoutEffect(() => {
    settingsRef.current = {
      itemDistance,
      itemStackDistance,
      stackPosition,
      itemScale,
      baseScale,
      dimAmount,
      blurAmount,
      tiltAmount,
      rotationAmount,
      holdDistance,
      smoothScroll,
      snap,
      onStackComplete,
    };

    scheduleRef.current?.();
  }, [
    itemDistance,
    itemStackDistance,
    stackPosition,
    itemScale,
    baseScale,
    dimAmount,
    blurAmount,
    tiltAmount,
    rotationAmount,
    holdDistance,
    smoothScroll,
    snap,
    onStackComplete,
  ]);

  useLayoutEffect(() => {
    const root = rootRef.current;
    const inner = innerRef.current;
    const end = endRef.current;

    if (!root || !inner || !end) return undefined;

    const windowed = useWindowScroll;
    const target = windowed ? window : root;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    const cache = new Map();

    let frame = 0;
    let glide = 0;
    let rest = 0;
    let complete = false;
    let gliding = false;
    let pressed = false;
    let current = 0;
    let goal = 0;
    let written = 0;
    let last = 0;
    let points = [];
    let dirty = true;
    let depthsNow = [];
    let reach = 0;

    const readScroll = () => (windowed ? window.scrollY : root.scrollTop);

    const maxScroll = () =>
      windowed
        ? Math.max(
            0,
            document.documentElement.scrollHeight - window.innerHeight
          )
        : Math.max(0, root.scrollHeight - root.clientHeight);

    const writeScroll = (value) => {
      written = value;
      target.scrollTo({ top: value, behavior: "auto" });
    };

    const write = (key, value, apply) => {
      if (cache.get(key) === value) return false;

      cache.set(key, value);
      apply(value);

      return true;
    };

    const schedule = () => {
      if (!frame) {
        frame = requestAnimationFrame(update);
      }
    };

    const equalize = (slots) => {
      const cards = slots.map((slot) => slot.firstElementChild).filter(Boolean);

      // Reset so we measure each card's natural height
      cards.forEach((card) => {
        card.style.minHeight = "";
      });

      const tallest = Math.max(...cards.map((card) => card.offsetHeight));

      cards.forEach((card) => {
        card.style.minHeight = `${tallest}px`;
      });
    };

    function update() {
      frame = 0;

      const settings = settingsRef.current;

      const slots = Array.from(inner.children).filter((child) =>
        child.hasAttribute("data-stack-slot")
      );

      if (!settings || !slots.length) return;

      const scrollPosition = readScroll();

      const viewHeight = windowed ? window.innerHeight : root.clientHeight;

      const viewTop = windowed
        ? 0
        : root.getBoundingClientRect().top + root.clientTop;

      const stackTop = resolveOffset(settings.stackPosition, viewHeight);

      const offset = settings.itemStackDistance;
      const lastIndex = slots.length - 1;

      root.style.setProperty("--scroll-stack-top", `${stackTop}px`);

      if (dirty) {
        dirty = false;
        equalize(slots);
      }

      const heights = slots.map((slot) => slot.offsetHeight);
      const lastHeight = heights[lastIndex];
      const lastPin = stackTop + lastIndex * offset;

      const gaps = Array.from(inner.children).filter((child) =>
        child.hasAttribute("data-stack-gap")
      );

      const pins = heights.map((_, i) => stackTop + i * offset);

      // The bottom edge every card must share, so they all release together.
      const extent = Math.max(...heights.map((h, i) => pins[i] + h));

      const margins = heights.map((h, i) => Math.max(0, extent - pins[i] - h));

      slots.forEach((slot, i) => {
        write(`mb-${i}`, margins[i], (value) => {
          slot.style.marginBottom = `${value}px`;
        });
      });

      // Gap before slot k+1 compensates for slot k's margin,
      // so card-to-card distance stays equal to itemDistance.
      gaps.forEach((gapEl, k) => {
        const gap = settings.itemDistance - margins[k];

        write(`gap-h-${k}`, Math.max(0, gap), (value) => {
          gapEl.style.height = `${value}px`;
        });

        write(`gap-m-${k}`, Math.min(0, gap), (value) => {
          gapEl.style.marginTop = `${value}px`;
        });
      });

      const padTop = windowed ? 0 : stackTop;

      write("padTop", padTop, (value) => {
        inner.style.paddingTop = `${value}px`;
      });

      // Compute each card's scroll position at which it reaches
      // its own sticky pin position.
      let flow =
        inner.getBoundingClientRect().top - viewTop + scrollPosition + padTop;

      points = heights.map((height, index) => {
        const point = flow - stackTop - index * offset;
        flow += height + settings.itemDistance;
        return point;
      });

      reach = Math.max(40, (heights[0] + settings.itemDistance - offset) / 2);

      /*
       * CRITICAL FIX:
       *
       * A sticky card is constrained by the bottom of its
       * containing block. Reserve enough space so every card,
       * including tall cards, can remain pinned until the last
       * card reaches its stacking position.
       *
       * Calculate the required spacer from the real card heights
       * and the final card's scroll position.
       */
      const innerRect = inner.getBoundingClientRect();

      // Content coordinate of the inner bottom, excluding the spacer.
      const contentBottomWithoutSpacer =
        innerRect.bottom - viewTop + scrollPosition - end.offsetHeight;

      const lastCardScrollPoint = points[lastIndex];

      // Scroll position at which the whole stack is allowed to release.
      const releaseScroll = lastCardScrollPoint + settings.holdDistance;

      // The page must be scrollable far enough to reach the release point.
      const spaceToReachLastCard =
        releaseScroll + viewHeight - contentBottomWithoutSpacer;

      // Every sticky slot must stay pinned until releaseScroll.
      // Sticky limits use the MARGIN box, so include each slot's marginBottom.
      const spaceToKeepCardsPinned = Math.max(
        0,
        ...heights.map((height, index) => {
          const cardPin = stackTop + index * offset;

          return (
            releaseScroll +
            cardPin +
            height +
            margins[index] -
            contentBottomWithoutSpacer
          );
        })
      );

      const endHeight = Math.max(
        0,
        spaceToReachLastCard,
        spaceToKeepCardsPinned
      );

      write("endHeight", endHeight, (value) => {
        end.style.height = `${value}px`;
      });

      // Calculate stacking depth for every card.
      const depths = slots.map(() => 0);
      let lastCover = 0;

      for (
        let incomingIndex = 1;
        incomingIndex < slots.length;
        incomingIndex++
      ) {
        const span = Math.max(1, heights[incomingIndex - 1] - offset);

        const start = points[incomingIndex] - span;

        const cover = Math.min(1, Math.max(0, (scrollPosition - start) / span));

        for (let cardIndex = 0; cardIndex < incomingIndex; cardIndex++) {
          depths[cardIndex] += cover;
        }

        lastCover = cover;
      }

      depthsNow = depths;

      slots.forEach((slot, index) => {
        write(
          `cursor-${index}`,
          depths[index] > 0.3 ? "pointer" : "",
          (value) => {
            slot.style.cursor = value;
          }
        );
      });

      const dimStep = Math.min(Math.max(settings.dimAmount, 0), 1);

      slots.forEach((slot, index) => {
        const card = slot.firstElementChild;
        if (!card) return;

        const depth = depths[index];
        const lean = Math.min(depth, 1);

        const scale = Math.max(
          Math.min(settings.baseScale, 1),
          1 - depth * settings.itemScale
        );

        const tilt = -lean * settings.tiltAmount;

        const turn = lean * settings.rotationAmount * (index % 2 ? -1 : 1);

        const blur = depth * settings.blurAmount;

        const dim = 1 - Math.pow(1 - dimStep, depth);

        const transform =
          depth < 0.0005
            ? ""
            : `perspective(1200px) rotateX(${tilt.toFixed(
                2
              )}deg) rotate(${turn.toFixed(2)}deg) scale(${scale.toFixed(4)})`;

        write(`transform-${index}`, transform, (value) => {
          card.style.transform = value;
        });

        write(
          `filter-${index}`,
          blur > 0.01 ? `blur(${blur.toFixed(2)}px)` : "",
          (value) => {
            card.style.filter = value;
          }
        );

        write(`dim-${index}`, dim.toFixed(3), (value) => {
          card.style.setProperty("--scroll-stack-dim", value);
        });
      });

      const done = slots.length > 1 && lastCover >= 0.999;

      if (done !== complete) {
        complete = done;
        if (done) settings.onStackComplete?.();
      }
    }

    const settle = () => {
      rest = 0;

      if (!settingsRef.current?.snap || gliding || pressed || !points.length) {
        return;
      }

      const now = readScroll();

      const nearest = points.reduce((best, point) =>
        Math.abs(point - now) < Math.abs(best - now) ? point : best
      );

      const gap = Math.abs(nearest - now);

      if (gap > 1 && gap < reach) {
        glideTo(nearest);
      }
    };

    const settleSoon = () => {
      window.clearTimeout(rest);
      rest = window.setTimeout(settle, 140);
    };

    const step = (now) => {
      const dt = Math.min(0.05, (now - last) / 1000);
      last = now;

      if (Math.abs(readScroll() - written) > 2) {
        gliding = false;
        glide = 0;
        settleSoon();
        return;
      }

      current += (goal - current) * (1 - Math.pow(0.9, dt * 60));

      if (Math.abs(goal - current) < 0.5) {
        current = goal;
      }

      writeScroll(current);

      if (current === goal) {
        gliding = false;
        glide = 0;
        settleSoon();
        return;
      }

      glide = requestAnimationFrame(step);
    };

    const glideTo = (value) => {
      goal = Math.min(Math.max(value, 0), maxScroll());

      if (reducedMotion.matches) {
        writeScroll(goal);
        return;
      }

      if (gliding) return;

      gliding = true;
      current = readScroll();
      written = current;
      last = performance.now();

      glide = requestAnimationFrame(step);
    };

    const onCardClick = (event) => {
      const slots = Array.from(inner.children).filter((child) =>
        child.hasAttribute("data-stack-slot")
      );

      const slot = event.target.closest?.("[data-stack-slot]");
      const index = slots.indexOf(slot);

      // Only react to cards that are currently covered by later cards.
      if (index < 0 || !(depthsNow[index] > 0.3)) return;

      event.preventDefault();
      event.stopPropagation();
      window.clearTimeout(rest);

      glideTo(points[index]);
    };

    const onScroll = () => {
      schedule();

      if (!gliding) settleSoon();
    };

    const onWheel = (event) => {
      const settings = settingsRef.current;

      if (
        !settings?.smoothScroll ||
        reducedMotion.matches ||
        event.defaultPrevented ||
        event.ctrlKey
      ) {
        return;
      }

      if (Math.abs(event.deltaX) > Math.abs(event.deltaY)) {
        return;
      }

      const page = windowed ? window.innerHeight : root.clientHeight;

      const delta =
        event.deltaY *
        (event.deltaMode === 1 ? 16 : event.deltaMode === 2 ? page : 1);

      if (
        !delta ||
        scrollsInside(event.target, windowed ? document.body : root, delta)
      ) {
        return;
      }

      const base = gliding ? goal : readScroll();

      if (
        (delta < 0 && base <= 0) ||
        (delta > 0 && base >= maxScroll() - 0.5)
      ) {
        return;
      }

      event.preventDefault();
      window.clearTimeout(rest);
      glideTo(base + delta);
    };

    const onPress = () => {
      pressed = true;
      window.clearTimeout(rest);
    };

    const onRelease = () => {
      if (!pressed) return;

      pressed = false;
      settleSoon();
    };

    const markDirty = () => {
      dirty = true;
      schedule();
    };

    const observer = new ResizeObserver(markDirty);
    observer.observe(root);
    observer.observe(inner);

    const observeCards = () => {
      const slots = Array.from(inner.children).filter((child) =>
        child.hasAttribute("data-stack-slot")
      );

      slots.forEach((slot) => {
        observer.observe(slot);

        if (slot.firstElementChild) {
          observer.observe(slot.firstElementChild);
        }
      });
    };

    observeCards();

    target.addEventListener("scroll", onScroll, {
      passive: true,
    });

    target.addEventListener("wheel", onWheel, {
      passive: false,
    });

    target.addEventListener("pointerdown", onPress, {
      passive: true,
    });

    window.addEventListener("pointerup", onRelease, {
      passive: true,
    });

    window.addEventListener("pointercancel", onRelease, {
      passive: true,
    });

    inner.addEventListener("click", onCardClick, true);

    // window.addEventListener("resize", schedule);
    window.addEventListener("resize", markDirty);

    scheduleRef.current = schedule;
    schedule();

    return () => {
      cancelAnimationFrame(frame);
      cancelAnimationFrame(glide);
      window.clearTimeout(rest);

      observer.disconnect();

      target.removeEventListener("scroll", onScroll);
      target.removeEventListener("wheel", onWheel);
      target.removeEventListener("pointerdown", onPress);
      inner.removeEventListener("click", onCardClick, true);
      window.removeEventListener("pointerup", onRelease);
      window.removeEventListener("pointercancel", onRelease);
      window.removeEventListener("resize", schedule);
      window.removeEventListener("resize", markDirty);

      scheduleRef.current = null;
    };
  }, [useWindowScroll]);

  return (
    <div
      ref={rootRef}
      // className={`relative w-full ${
      //   useWindowScroll ? "" : "h-full overflow-x-hidden overflow-y-auto"
      // } ${className}`.trim()}

      className={`scroll-stack-container relative w-full ${
        useWindowScroll ? "" : "h-full overflow-x-hidden overflow-y-auto"
      } ${className}`.trim()}
    >
      <div ref={innerRef} className="relative px-[clamp(1rem,6%,5rem)]">
        {items.map((child, index) => (
          <Fragment key={isValidElement(child) ? child.key ?? index : index}>
            {index > 0 && <div aria-hidden="true" data-stack-gap="" />}

            <div
              data-stack-slot=""
              className="sticky"
              style={{
                top: `calc(var(--scroll-stack-top, 15%) + ${
                  index * itemStackDistance
                }px)`,
                zIndex: index + 1,
              }}
            >
              {child}
            </div>
          </Fragment>
        ))}
        {/* {items.map((child, index) => {
          const gap = itemDistance - (items.length - index) * itemStackDistance;

          return (
            <Fragment key={isValidElement(child) ? child.key ?? index : index}>
              {index > 0 && (
                <div
                  aria-hidden="true"
                  style={{
                    height: Math.max(0, gap),
                    marginTop: Math.min(0, gap),
                  }}
                />
              )}
              {index > 0 && <div aria-hidden="true" data-stack-gap="" />}
              <div
                data-stack-slot=""
                className="sticky"
                style={{
                  top: `calc(var(--scroll-stack-top, 15%) + ${
                    index * itemStackDistance
                  }px)`,
                  zIndex: index + 1,
                }}
              >
                {child}
              </div>
            </Fragment>
          );
        })} */}

        <div ref={endRef} aria-hidden="true" />
      </div>
    </div>
  );
};

export default ScrollStack;
