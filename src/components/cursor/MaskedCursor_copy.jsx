// import React, { useEffect, useState } from "react";
// import { motion, useSpring, useMotionValue } from "framer-motion";
// import "./MaskedCursor.css";

// const CometCursor = () => {
//   // Number of trailing circles
//   const TRAIL_COUNT = 15;
//   const trails = Array.from({ length: TRAIL_COUNT });

//   // Motion values for the cursor
//   const cursorX = useMotionValue(-100);
//   const cursorY = useMotionValue(-100);

//   // State to store trail positions
//   const [trailPositions, setTrailPositions] = useState(
//     trails.map(() => ({ x: -100, y: -100 }))
//   );

//   // Update cursor positions on mouse move
//   useEffect(() => {
//     const moveCursor = (e) => {
//       cursorX.set(e.clientX);
//       cursorY.set(e.clientY);
//     };
//     window.addEventListener("mousemove", moveCursor);
//     return () => window.removeEventListener("mousemove", moveCursor);
//   }, [cursorX, cursorY]);

//   // Animate the trail
//   useEffect(() => {
//     const updateTrail = () => {
//       setTrailPositions((prev) => {
//         const newPositions = [...prev];
//         newPositions[0] = { x: cursorX.get(), y: cursorY.get() };
//         for (let i = 1; i < TRAIL_COUNT; i++) {
//           newPositions[i] = {
//             x: prev[i - 1].x,
//             y: prev[i - 1].y,
//           };
//         }
//         return newPositions;
//       });
//       requestAnimationFrame(updateTrail);
//     };
//     updateTrail();
//   }, [cursorX, cursorY]);

//   return (
//     <div className="comet-cursor-container">
//       {trailPositions.map((pos, index) => (
//         <motion.div
//           key={index}
//           className="comet-dot"
//           style={{
//             translateX: pos.x - 10,
//             translateY: pos.y - 10,
//             scale: 1 - index * 0.05,
//             opacity: 1 - index * 0.06,
//             background: `hsl(${(index / TRAIL_COUNT) * 50 + 20}, 100%, 60%)`,
//           }}
//         />
//       ))}
//     </div>
//   );
// };

// export default CometCursor;
import React, { useEffect, useRef } from "react";
import "./MaskedCursor.css";

const MaskedCursor = () => {
  const cursorRef = useRef(null);
  // const cursorInnerRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    // const cursorInner = cursorInnerRef.current;

    const onMouseMove = (e) => {
      cursor.style.left = e.clientX + "px";
      cursor.style.top = e.clientY + "px";
      // cursorInner.style.left = e.clientX + "px";
      // cursorInner.style.top = e.clientY + "px";
    };

    document.addEventListener("mousemove", onMouseMove);

    const links = document.querySelectorAll("a, button, .hover-target");

    links.forEach((el) => {
      el.addEventListener("mouseenter", () => {
        cursor.classList.add("hovered");
      });
      el.addEventListener("mouseleave", () => {
        cursor.classList.remove("hovered");
      });
    });

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      links.forEach((el) => {
        el.removeEventListener("mouseenter", () => {});
        el.removeEventListener("mouseleave", () => {});
      });
    };
  }, []);

  return (
    <>
      <div className="ball" ref={cursorRef}></div>
      {/* <div className="cursor-inner" ref={cursorInnerRef}></div> */}

      {/* SVG Filter for gooey effect */}
      <svg style={{ display: "none" }}>
        <filter id="gooey">
          <feGaussianBlur in="SourceGraphic" stdDeviation="6" result="blur" />
          <feColorMatrix
            in="blur"
            mode="matrix"
            values="
              1 0 0 0 0  
              0 1 0 0 0  
              0 0 1 0 0  
              0 0 0 20 -10"
            result="gooey"
          />
          <feComposite in="SourceGraphic" in2="gooey" operator="atop" />
        </filter>
      </svg>
    </>
  );
};

export default MaskedCursor;

// // // import React, { useEffect, useState } from "react";
// // // import { motion, useSpring, useMotionValue } from "framer-motion";
// // // import "./MaskedCursor.css";

// // // const AnimatedCursor = () => {
// // //   const cursorX = useMotionValue(-100); // Initial off-screen
// // //   const cursorY = useMotionValue(-100);

// // //   const springConfig = { damping: 30, stiffness: 300, mass: 1 };
// // //   const cursorXSpring = useSpring(cursorX, springConfig);
// // //   const cursorYSpring = useSpring(cursorY, springConfig);

// // //   useEffect(() => {
// // //     const moveCursor = (e) => {
// // //       cursorX.set(e.clientX);
// // //       cursorY.set(e.clientY);
// // //     };

// // //     window.addEventListener("mousemove", moveCursor);
// // //     return () => window.removeEventListener("mousemove", moveCursor);
// // //   }, [cursorX, cursorY]);

// // //   return (
// // //     <motion.div
// // //       className="animated-cursor"
// // //       style={{
// // //         translateX: cursorXSpring,
// // //         translateY: cursorYSpring,
// // //       }}
// // //     />
// // //   );
// // // };

// // // export default AnimatedCursor;

// // // // const MaskedCursor = () => {
// // // //   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

// // // //   // Springs for smooth animation
// // // //   const cursorX = useSpring(0, { stiffness: 150, damping: 20 });
// // // //   const cursorY = useSpring(0, { stiffness: 150, damping: 20 });

// // // //   useEffect(() => {
// // // //     const handleMouseMove = (e) => {
// // // //       // Update springs directly
// // // //       cursorX.set(e.clientX);
// // // //       cursorY.set(e.clientY);
// // // //     };
// // // //     window.addEventListener("mousemove", handleMouseMove);
// // // //     return () => {
// // // //       window.removeEventListener("mousemove", handleMouseMove);
// // // //     };
// // // //   }, [cursorX, cursorY]);

// // // //   return (
// // // //     <motion.div
// // // //       className="masked-cursor"
// // // //       style={{
// // // //         translateX: cursorX,
// // // //         translateY: cursorY,
// // // //       }}
// // // //     >
// // // //       <div className="mask"></div>
// // // //     </motion.div>
// // // //   );
// // // // };

// // // // export default MaskedCursor;

// // import React, { useEffect, useState } from "react";
// // import { motion, useMotionValue, useSpring } from "framer-motion";
// // import "./MaskedCursor.css";

// // const NUM_TRAILS = 15; // Number of trailing dots
// // const TRAIL_DELAY = 0.04; // Delay factor for the trailing effect

// // const AnimatedCursor = () => {
// //   const cursorX = useMotionValue(-100);
// //   const cursorY = useMotionValue(-100);

// //   const springConfig = { damping: 20, stiffness: 150, mass: 0.3 };
// //   const cursorXSpring = useSpring(cursorX, springConfig);
// //   const cursorYSpring = useSpring(cursorY, springConfig);

// //   // Array of positions for the trails
// //   const [trail, setTrail] = useState(
// //     Array(NUM_TRAILS).fill({ x: -100, y: -100 })
// //   );

// //   useEffect(() => {
// //     const moveCursor = (e) => {
// //       cursorX.set(e.clientX);
// //       cursorY.set(e.clientY);
// //     };

// //     window.addEventListener("mousemove", moveCursor);
// //     return () => window.removeEventListener("mousemove", moveCursor);
// //   }, [cursorX, cursorY]);

// //   useEffect(() => {
// //     const updateTrail = () => {
// //       setTrail((prevTrail) => {
// //         const newTrail = [...prevTrail];
// //         for (let i = newTrail.length - 1; i > 0; i--) {
// //           newTrail[i] = { ...newTrail[i - 1] };
// //         }
// //         newTrail[0] = { x: cursorX.get(), y: cursorY.get() };
// //         return newTrail;
// //       });
// //     };

// //     const interval = setInterval(updateTrail, 1000 * TRAIL_DELAY);
// //     return () => clearInterval(interval);
// //   }, [cursorX, cursorY]);

// //   return (
// //     <div className="trails-container">
// //       {trail.map((pos, index) => (
// //         <motion.div
// //           key={index}
// //           className="trail-dot"
// //           animate={{
// //             x: pos.x - 15, // Center the dot
// //             y: pos.y - 15,
// //             scale: 1 - index / (NUM_TRAILS * 1.2), // Gradual size decrease
// //             opacity: 1 - index / NUM_TRAILS, // Gradual fade-out
// //           }}
// //           transition={{ type: "spring", stiffness: 300, damping: 30 }}
// //         />
// //       ))}
// //     </div>
// //   );
// // };

// // export default AnimatedCursor;

// import React, { useEffect, useState } from "react";
// import { motion, useSpring, useMotionValue } from "framer-motion";
// import "./MaskedCursor.css";

// const AnimatedCursor = () => {
//   // Create multiple trail circles (e.g., 12)
//   const NUM_TRAILS = 12;
//   const trails = Array.from({ length: NUM_TRAILS });

//   // Create motion values for the cursor's X and Y
//   const cursorX = useMotionValue(-100);
//   const cursorY = useMotionValue(-100);

//   // Create an array of X and Y positions for each trail
//   const [trailPositions, setTrailPositions] = useState(
//     trails.map(() => ({ x: -100, y: -100 }))
//   );

//   // Smooth spring animation for the cursor head
//   const springConfig = { damping: 30, stiffness: 300, mass: 1 };
//   const cursorXSpring = useSpring(cursorX, springConfig);
//   const cursorYSpring = useSpring(cursorY, springConfig);

//   useEffect(() => {
//     const moveCursor = (e) => {
//       cursorX.set(e.clientX);
//       cursorY.set(e.clientY);
//     };

//     window.addEventListener("mousemove", moveCursor);
//     return () => window.removeEventListener("mousemove", moveCursor);
//   }, [cursorX, cursorY]);

//   // Update trailing positions
//   useEffect(() => {
//     const updateTrail = () => {
//       setTrailPositions((prev) => {
//         const newPositions = [...prev];
//         newPositions[0] = { x: cursorX.get(), y: cursorY.get() }; // Head of the trail
//         for (let i = 1; i < NUM_TRAILS; i++) {
//           newPositions[i] = {
//             x: prev[i - 1].x,
//             y: prev[i - 1].y,
//           };
//         }
//         return newPositions;
//       });
//       requestAnimationFrame(updateTrail);
//     };
//     updateTrail();
//   }, [cursorX, cursorY]);

//   return (
//     <>
//       {trailPositions.map((pos, index) => (
//         <motion.div
//           key={index}
//           className="cursor-trail"
//           style={{
//             translateX: pos.x - 15, // Center the circle
//             translateY: pos.y - 15,
//             scale: 1 - index * 0.05, // Slightly reduce size for trailing circles
//             opacity: 1 - index * 0.07, // Fade out the tail
//             background: `radial-gradient(circle at center, #ff9a3c 0%, #ff3c7d 100%)`,
//           }}
//         />
//       ))}
//     </>
//   );
// };

// export default AnimatedCursor;
