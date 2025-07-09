import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useSpring } from "framer-motion";
import SideBars from "./components/sideBars/SideBar.jsx";
import MaskedCursor from "./components/cursor/MaskedCursor.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MediaQuery from "react-responsive";
import Loading from "./components/preloader/Loading";
import logo from "./logo.svg";
import "./App.css";
import Home from "./components/home/Home.jsx";
import Contact from "./components/contacts/contact";
import NavBar from "./components/navBar/NavBar.js";
import WorkExperiences from "./components/workExperience/WorkExperiences";
import Projects from "./components/projects/Projects.jsx";
import Skills from "./components/skills/Skills.jsx";
import "./components/css/ScrollProgress.css";
import { ArrowUp } from "@geist-ui/react-icons";
import sectionColors from "./constants/sectionColors.js";

/*
function ScrollProgressAndArrow({ progressColor = "#00adb5" }) {
  const [showArrow, setShowArrow] = useState(false);
  useEffect(() => {
    const onScroll = () => {
      const scrolled = window.scrollY;
      const progress =
        (scrolled / (document.body.scrollHeight - window.innerHeight)) * 100;
      const progressBar = document.querySelector(".progress");
      if (progressBar) {
        progressBar.style.width = `${progress}vw`;
        progressBar.style.backgroundColor = progressColor;
      }
      setShowArrow(scrolled > 300);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [progressColor]);

  const scrollToTop = () =>
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

  return (
    <>
      <div className="progress" />
      {showArrow && (
        <button
          onClick={scrollToTop}
          style={{
            position: "fixed",
            bottom: "1.5rem",
            right: "3.5rem",
            backgroundColor: "#ffffff",
            border: "none",
            borderRadius: "50%",
            padding: "0.6rem",
            boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
            cursor: "pointer",
            zIndex: 1000,
          }}
        >
          <ArrowUp style={{ fontSize: "2rem", color: "#3a3f45" }} />
        </button>
      )}
    </>
  );
}
*/

function ScrollProgressAndArrow({ progressColor = "#00adb5" }) {
  const [showArrow, setShowArrow] = useState(false);
  const progressRef = useRef(null);

  useEffect(() => {
    const onScroll = () => {
      const scrolled = window.scrollY;
      const progress =
        (scrolled / (document.body.scrollHeight - window.innerHeight)) * 100;

      if (progressRef.current) {
        progressRef.current.style.width = `${progress}vw`;
        progressRef.current.style.backgroundColor = progressColor;
      }

      setShowArrow(scrolled > 300);
    };

    window.addEventListener("scroll", onScroll);
    // Fire once on mount
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, [progressColor]);

  const scrollToTop = () =>
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

  return (
    <>
      <div className="progress" ref={progressRef} />
      {showArrow && (
        <button
          onClick={scrollToTop}
          style={{
            position: "fixed",
            bottom: "1.5rem",
            right: "3.5rem",
            backgroundColor: "#ffffff",
            border: "none",
            borderRadius: "50%",
            padding: "0.6rem",
            boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
            cursor: "pointer",
            zIndex: 1000,
          }}
        >
          <ArrowUp style={{ fontSize: "2rem", color: "#3a3f45" }} />
        </button>
      )}
    </>
  );
}

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const [color, setColor] = useState("#ffffff");
  const [activeSection, setActiveSection] = useState("");

  const iconColor = sectionColors[activeSection] || "#2a363b";

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;

      if (y > 250 && y < 2800) {
        // if (window.scrollY > 200) {
        setDarkMode(true);
      } else {
        setDarkMode(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [currActive, setCurrActive] = useState(
    window.location.hash.split("#/")[1]
  );

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "projects", "skills", "experience", "contact"];
      let current = "";
      const middle = window.innerHeight / 2;

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= middle && rect.bottom >= middle) {
            current = section;
          }
        }
      });

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={darkMode ? "app_dark" : "app"}>
      <>
        <SideBars setColor={setColor} />
        <Home setColor={setColor} />
        <Projects setColor={setColor} />
        <Skills setColor={setColor} />

        <WorkExperiences setColor={setColor} />
        <Contact setColor={setColor} />
        <div
          style={{
            backgroundColor: "#434343",
            textAlign: "center",
            paddingBottom: "10px",
            fontFamily: "'Space Mono', monospace",
            color: "white",
            fontSize: "12px",
          }}
        >
          Design inspired by{" "}
          <a
            href="https://www.muhammadaamirmalik.com/"
            rel="noreferrer"
            target="_blank"
            style={{ color: "#f1ce5f" }}
          >
            Muhammad Aamir's Portfolio
          </a>
        </div>
        <ScrollProgressAndArrow progressColor={iconColor} />
        <MaskedCursor />
      </>
    </div>
  );
}

export default App;
