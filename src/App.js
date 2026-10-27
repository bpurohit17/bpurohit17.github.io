import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useSpring } from "framer-motion";
import SideBars from "./components/sideBars/SideBar.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Loading from "./components/preloader/Loading";
import "./App.css";
import Home from "./components/home/Home.jsx";
import Contact from "./components/contacts/contact";
import WorkExperiences from "./components/workExperience/WorkExperiences";
import Projects from "./components/projects/Projects.jsx";
import Skills from "./components/skills/Skills.jsx";
import "./components/css/ScrollProgress.css";
import { ArrowUp } from "@geist-ui/react-icons";
import sectionColors from "./constants/sectionColors.js";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const [color, setColor] = useState("#000000");
  const [activeSection, setActiveSection] = useState("");

  const iconColor = sectionColors[activeSection] || "#2a363b";

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
      {/* <Navbar /> */}
      <Router>
        <SideBars setColor={setColor} />
      </Router>
      <Home setColor={setColor} />
      <Projects setColor={setColor} />
      <Skills setColor={setColor} />
      {/* <WorkExperiences setColor={setColor} /> */}
      <Contact setColor={setColor} />
      {/* <div
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
      </div> */}
      {/* <ScrollProgressAndArrow progressColor={iconColor} /> */}
      {/* <MaskedCursor /> */}
    </div>
  );
}

export default App;
