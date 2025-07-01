import React, { useEffect, useState } from "react";
import { Github, Instagram, Linkedin, Mail } from "@geist-ui/react-icons";
import "./SideBar.css";
import sectionColors from "../../constants/sectionColors";

const SideBars = ({ color, scrollToSection }) => {
  const [activeSection, setActiveSection] = useState("");
  const iconColor = sectionColors[activeSection] || "#2a363b";

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "projects", "skills", "experience", "contact"];
      let current = "";
      const middle = window.innerHeight / 2;
      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 80 && rect.bottom >= 0) {
            current = section;
          }
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
    <>
      <nav className="navbar" style={{ "--hover-color": iconColor }}>
        <style>
          {`
          .navbar a:hover {
            color: var(--hover-color);
            transform: translateY(-2px);
          }

          .navbar a.active {
            border-bottom: 2px solid var(--hover-color); 
            padding-bottom: 2px;
            color: var(--hover-color); 
          }`}
        </style>

        <ul>
          {["home", "projects", "skills", "experience", "contact"].map(
            (section) => (
              <li key={section}>
                <a
                  href={`#${section}`}
                  className={activeSection === section ? "active" : ""}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </a>
              </li>
            )
          )}
        </ul>
      </nav>

      {/* Left Social Icons */}
      <div className="left-bar">
        <ul>
          <li>
            <a
              rel="noreferrer"
              target="_blank"
              href="https://github.com/bpurohit17"
            >
              <Github
                color={iconColor}
                className="mb-6"
                strokeWidth={2}
                size={20}
              />
            </a>
          </li>
          <li>
            <a
              rel="noreferrer"
              target="_blank"
              href="https://www.instagram.com/"
            >
              <Instagram
                color={iconColor}
                className="mb-6"
                strokeWidth={2}
                size={20}
              />
            </a>
          </li>
          <li>
            <a
              rel="noreferrer"
              target="_blank"
              href="https://www.linkedin.com/in/bpurohit17/"
            >
              <Linkedin
                color={iconColor}
                className="mb-6"
                strokeWidth={2}
                size={20}
              />
            </a>
          </li>
          <li>
            <a
              rel="noreferrer"
              target="_blank"
              href="https://www.instagram.com/"
            >
              <Mail
                color={iconColor}
                className="mb-6"
                strokeWidth={2}
                size={20}
              />
            </a>
          </li>
        </ul>
        <div className="vertical-line" style={{ backgroundColor: iconColor }} />
      </div>

      {/* Right Email Text */}
      <div className="right-bar">
        <div className="fixed bottom-0 right-6 z-40 hidden md:flex flex-col items-center">
          <div
            className="flex flex-col mb-6"
            style={{
              writingMode: "vertical-rl",
              letterSpacing: "2px",
              color: iconColor,
            }}
          >
            <a
              className="email"
              href="mailto:bhagyashrip830@gmail.com"
              style={{ color: iconColor }}
            >
              bhagyashrip830@gmail.com
            </a>
          </div>
          <div
            className="vertical-line"
            style={{ backgroundColor: iconColor }}
          />
        </div>
      </div>
    </>
  );
};

export default SideBars;
