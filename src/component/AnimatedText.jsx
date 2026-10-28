import { useEffect, useRef, useState } from "react";

const css = `
@keyframes at-shimmer { to { background-position: 200% center; } }
.at-shimmer {
  background-size: 200% auto;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: at-shimmer 4s linear infinite;
}
@media (prefers-reduced-motion: reduce) { .at-shimmer { animation: none; } }
`;

export const useReveal = ({ once = true, threshold = 0.2 } = {}) => {
  const ref = useRef(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) {
      setShow(true);
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShow(true);
          if (once) io.disconnect();
        } else if (!once) {
          setShow(false);
        }
      },
      { threshold, rootMargin: "0px 0px -40px 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [once, threshold]);

  return [ref, show];
};

const AnimatedText = ({
  text,
  as: Tag = "span",
  className = "",
  stagger = 0.07,
  delay = 0,
  duration = 0.9,
  shimmer = false,
  gradient = "linear-gradient(90deg,#c4b5fd,#ffffff,#a855f7,#c4b5fd)",
  once = true,
}) => {
  const [ref, show] = useReveal({ once });
  const words = text.split(" ");
  const ease = "cubic-bezier(0.16, 1, 0.3, 1)";

  return (
    <Tag ref={ref} className={className} aria-label={text}>
      {shimmer && <style>{css}</style>}
      {words.map((word, i) => {
        const d = delay + i * stagger;
        return (
          <span key={i}>
            <span
              aria-hidden="true"
              className="inline-block overflow-hidden align-bottom"
              style={{ paddingBottom: "0.15em", marginBottom: "-0.15em" }}
            >
              <span
                className={`inline-block will-change-transform ${
                  shimmer ? "at-shimmer" : ""
                }`}
                style={{
                  transformOrigin: "0% 100%",
                  transform: show
                    ? "translateY(0) rotate(0deg)"
                    : "translateY(115%) rotate(6deg)",
                  opacity: show ? 1 : 0,
                  filter: show ? "blur(0px)" : "blur(8px)",
                  transition: `transform ${duration}s ${ease} ${d}s, opacity ${duration}s ${ease} ${d}s, filter ${duration}s ${ease} ${d}s`,
                  ...(shimmer ? { backgroundImage: gradient } : {}),
                }}
              >
                {word}
              </span>
            </span>
            {i < words.length - 1 ? " " : null}
          </span>
        );
      })}
    </Tag>
  );
};

export const RevealLine = ({ className = "", delay = 0.4 }) => {
  const [ref, show] = useReveal();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        transformOrigin: "center",
        transform: show ? "scaleX(1)" : "scaleX(0)",
        opacity: show ? 1 : 0,
        transition: `transform 0.9s cubic-bezier(0.16,1,0.3,1) ${delay}s, opacity 0.6s ease ${delay}s`,
      }}
    />
  );
};

export default AnimatedText;
