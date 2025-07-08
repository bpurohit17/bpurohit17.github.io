import React, { useEffect, useRef, useState } from "react";
import "./MaskedCursor.css";
import sectionColors from "../../constants/sectionColors";

const MaskedCursor = () => {
  const outerRef = useRef(null);
  // const middleRef = useRef(null);
  const innerRef = useRef(null);

  const [cursorColor, setCursorColor] = useState("#cf4647");
  useEffect(() => {
    const outer = outerRef.current;
    // const middle = middleRef.current;
    const inner = innerRef.current;

    let mouseX = 0,
      mouseY = 0;
    let innerX = 0,
      innerY = 0;
    let middleX = 0,
      middleY = 0;

    const onMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      outer.style.left = `${mouseX}px`;
      outer.style.top = `${mouseY}px`;
    };

    const animate = () => {
      innerX += (mouseX - innerX) * 0.15;
      innerY += (mouseY - innerY) * 0.15;
      inner.style.left = `${innerX}px`;
      inner.style.top = `${innerY}px`;

      middleX += (mouseX - middleX) * 0.1;
      middleY += (mouseY - middleY) * 0.1;
      // middle.style.left = `${middleX}px`;
      // middle.style.top = `${middleY}px`;

      requestAnimationFrame(animate);
    };

    animate();

    document.addEventListener("mousemove", onMouseMove);

    const links = document.querySelectorAll("a, button, .hover-target");
    links.forEach((el) => {
      el.addEventListener("mouseenter", () => {
        outer.classList.add("hovered");
        // middle.classList.add("hovered");
        inner.classList.add("hovered");
      });
      el.addEventListener("mouseleave", () => {
        outer.classList.remove("hovered");
        // middle.classList.remove("hovered");
        inner.classList.remove("hovered");
      });
    });

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <>
      <div
        className="outer-circle"
        ref={outerRef}
        style={{ borderColor: cursorColor }}
      ></div>
      {/* <div className="middle-circle" ref={middleRef}></div> */}
      <div
        className="inner-circle"
        ref={innerRef}
        style={{ background: cursorColor }}
      ></div>
    </>
  );
};

export default MaskedCursor;
