import React, { useEffect, useState } from "react";
import { Github, Instagram, Linkedin, Mail } from "@geist-ui/react-icons";
import "./SideBar.css";
import sectionColors from "../../constants/sectionColors";
import { debounce } from "lodash";

const SideBars = ({ color, scrollToSection }) => {
  const [activeSection, setActiveSection] = useState("");
  const [isHovered, setIsHovered] = useState(false);

  const defaultColor = sectionColors[activeSection]?.default || "#2a363b";
  const hoverColor = sectionColors[activeSection]?.hover || defaultColor;
  const defaultSectionColor = sectionColors[activeSection]?.defaultSectionColor;
  const iconColor = isHovered ? hoverColor : defaultColor;
  const [hoveredComponent, setHoveredComponent] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const getComponentColor = (componentName) =>
    hoveredComponent === componentName ? hoverColor : defaultColor;

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const sections = ["home", "projects", "skills", "experience", "contact"];
  //     let current = "";
  //     const middle = window.innerHeight / 2;
  //     sections.forEach((section) => {
  //       const element = document.getElementById(section);
  //       if (element) {
  //         const rect = element.getBoundingClientRect();
  //         if (rect.top <= 80 && rect.bottom >= 0) {
  //           current = section;
  //         }
  //         if (rect.top <= middle && rect.bottom >= middle) {
  //           current = section;
  //         }
  //       }
  //     });
  //     setActiveSection(current);
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   handleScroll();
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  useEffect(() => {
    const handleScroll = debounce(() => {
      const sections = ["home", "projects", "skills", "experience", "contact"];
      const middle = window.innerHeight / 2;
      let current = "";

      sections.forEach((section) => {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= middle && rect.bottom >= middle) {
            current = section;
          }
        }
      });

      setActiveSection(current);
    }, 100); // Adjust debounce delay as needed

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* <nav
        className="navbar"
        style={{
          "--icon-color": defaultColor,
          "--hover-color": hoverColor,
          "--defaultSectionColor": defaultSectionColor,
        }}
      >
        <style>
          {`
          .navbar a {
            color: var(--defaultSectionColor);
            text-decoration: none;
            transition: color 0.3s, transform 0.3s;
          }

          .navbar a:hover {
            color: var(--hover-color);
            transform: translateY(-2px);
          }

          .navbar a.active {
            border-bottom: 2px solid var(--icon-color); 
            padding-bottom: 2px;
            color: var(--icon-color); 
          }`}
        </style>

        <div>
          <div className="menu-toggle" onClick={toggleMobileMenu}>
            <div
              className={`hamburger ${isMobileMenuOpen ? "open" : ""}`}
            ></div>
          </div>
          <ul className={`menu ${isMobileMenuOpen ? "menu-open" : ""}`}>
            {["home", "projects", "skills", "experience", "contact"].map(
              (section) => (
                <li key={section}>
                  <a
                    href={`#${section}`}
                    className={activeSection === section ? "active" : ""}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </a>
                </li>
              )
            )}
          </ul> */}
      {/* <ul>
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
          </ul> */}
      {/* </div>
      </nav> */}

      {/* Left Social Icons */}
      <div className="left-bar">
        <ul>
          <li>
            <a
              rel="noreferrer"
              target="_blank"
              href="https://github.com/bpurohit17"

              // onMouseEnter={() => setIsHovered(true)}
              // onMouseLeave={() => setIsHovered(false)}
            >
              <Github
                color={iconColor}
                className="mb-6"
                strokeWidth={2}
                size={20}
              />
            </a>
          </li>
          {/* <li>
            <a
              rel="noreferrer"
              target="_blank"
              href="https://www.instagram.com/bpurohit17"
              // onMouseEnter={() => setIsHovered(true)}
              // onMouseLeave={() => setIsHovered(false)}
            >
              <Instagram
                color={iconColor}
                className="mb-6"
                strokeWidth={2}
                size={20}
              />
            </a>
          </li> */}
          <li>
            <a
              rel="noreferrer"
              target="_blank"
              href="https://www.linkedin.com/in/bpurohit17/"
              // onMouseEnter={() => setIsHovered(true)}
              // onMouseLeave={() => setIsHovered(false)}
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
              href="mailto:bhagyashrip830@gmail.com"
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
        <div
          className="vertical-line"
          style={{ backgroundColor: defaultColor }}
        />
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
              // onMouseEnter={() => setIsHovered(true)}
              // onMouseLeave={() => setIsHovered(false)}
            >
              bhagyashrip830@gmail.com
            </a>
          </div>
          <div
            className="vertical-line"
            style={{ backgroundColor: defaultColor }}
          />
        </div>
      </div>
    </>
  );
};

export default SideBars;
