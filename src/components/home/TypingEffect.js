import React, { useEffect, useState } from "react";
import "./TypingEffect.css";

const TypingEffect = () => {
  const strings = [
    "A mobile app developer",
    "I build things for the app",
    "A fullstack hybrid app developer",
    // "A fullstack web developer",
  ];

  const scrambleChars = "<>!{}[]()*&^%$#@~";
  const [displayText, setDisplayText] = useState("");
  const [step, setStep] = useState("typing");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [scrambleCount, setScrambleCount] = useState(0);

  useEffect(() => {
    const currentString = strings[currentIndex];
    let timeout;

    if (step === "typing") {
      if (charIndex <= currentString.length) {
        timeout = setTimeout(() => {
          setDisplayText(currentString.slice(0, charIndex));
          setCharIndex(charIndex + 1);
        }, 100);
      } else {
        timeout = setTimeout(() => {
          setStep("scrambling");
          setScrambleCount(0);
        }, 1000);
      }
    } else if (step === "scrambling") {
      if (scrambleCount < 10) {
        const scrambled = currentString
          .split("")
          .map(
            () =>
              scrambleChars[Math.floor(Math.random() * scrambleChars.length)]
          )
          .join("");
        timeout = setTimeout(() => {
          setDisplayText(scrambled);
          setScrambleCount(scrambleCount + 1);
        }, 60);
      } else {
        timeout = setTimeout(() => {
          setStep("next");
          setCharIndex(0);
        }, 300);
      }
    } else if (step === "next") {
      const nextString = strings[(currentIndex + 1) % strings.length];
      if (charIndex <= nextString.length) {
        const partial = nextString.slice(0, charIndex);
        const rest = nextString
          .slice(charIndex)
          .split("")
          .map(
            () =>
              scrambleChars[Math.floor(Math.random() * scrambleChars.length)]
          )
          .join("");
        timeout = setTimeout(() => {
          setDisplayText(partial + rest);
          setCharIndex(charIndex + 1);
        }, 90);
      } else {
        setStep("typing");
        setCharIndex(nextString.length + 1);
        setCurrentIndex((currentIndex + 1) % strings.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [step, charIndex, scrambleCount]);

  return (
    <div
      className="typing-text"
      // style={{
      //   fontSize: "40px",
      //   lineHeight: "60px",
      //   fontWeight: "600",
      //   color: "#cf4647", // cf4647 5F41B2
      //   paddingBottom: "20px",
      // }}
    >
      {displayText}
    </div>
  );
};

export default TypingEffect;
