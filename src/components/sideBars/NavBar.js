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
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

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
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // useEffect(() => {
  //   const handleScroll = debounce(() => {
  //     const sections = ["home", "projects", "skills", "experience", "contact"];
  //     const middle = window.innerHeight / 2;
  //     let current = "";

  //     sections.forEach((section) => {
  //       const el = document.getElementById(section);
  //       if (el) {
  //         const rect = el.getBoundingClientRect();
  //         if (rect.top <= middle && rect.bottom >= middle) {
  //           current = section;
  //         }
  //       }
  //     });

  //     setActiveSection(current);
  //   }, 100); // Adjust debounce delay as needed

  //   window.addEventListener("scroll", handleScroll);
  //   handleScroll();

  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

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
        </div>
      </nav> */}

      <nav
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

        <div className="menu-toggle" onClick={toggleMenu}>
          <div className={`hamburger ${menuOpen ? "open" : ""}`} />
        </div>

        <ul
          className={`menu ${
            menuOpen ? "block" : "hidden"
          } md:flex flex-col md:flex-row md:gap-8 bg-white md:bg-transparent absolute md:static top-12 left-0 w-full md:w-auto shadow-md md:shadow-none z-50`}
        >
          {["home", "projects", "skills", "experience", "contact"].map(
            (section) => (
              <li key={section}>
                <a
                  href={`#${section}`}
                  onClick={() => setMenuOpen(false)}
                  className={`block px-4 py-2 text-center capitalize ${
                    activeSection === section
                      ? "text-red-500 font-bold"
                      : "text-gray-700"
                  }`}
                >
                  {section}
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
/////////////////////////////////////

* {
  /* box-sizing: border-box; */
  transition: background-color 1s cubic-bezier(0.18, 0.89, 0.32, 1.28);
}

.left-bar ul {
  list-style: none;
  padding: 0;
  margin: 0 0 20px 0;
}

.left-bar li {
  margin: 15px 0;
}

.right-bar .email {
  color: #8892b0;
  text-decoration: none;
  font-size: 16px;
  font-weight: 500;
  transition: color 0.3s ease;
}

.left-bar a:hover,
.right-bar .email:hover {
  color: #64ffda;
}

.vertical-line {
  display: block;
  width: 1px;
  height: 90px;
  margin: 10px auto 0;
}

.left-bar {
  position: fixed;
  bottom: 0;
  left: 2.5%;
  z-index: 100;
  color: #8892b0;
}

.right-bar {
  position: fixed;
  bottom: 0;
  right: 2.5%;
  z-index: 100;
  color: #8892b0;
}

.email-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  transform: rotate(-90);
}

.email-container .email {
  writing-mode: vertical-rl;
  text-orientation: mixed;
  color: #8892b0;
  text-decoration: none;
  font-size: 18px;
  transition: color 0.3s ease;
  transform: rotate(180deg);
}

.email-container .email:hover {
  color: #64ffda;
}

/* NAVBAR */

.navbar {
  position: fixed;
  height: 90px;
  top: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  z-index: 2 !important;
  align-items: center;
  overflow-x: clip;
  padding-top: 5px;
  box-shadow: none !important;
  background: rgba(255, 255, 255, 0.1) !important;
  /* backdrop-filter: blur(3px) !important; */
  -webkit-backdrop-filter: blur(3px) !important;
}

.menu {
  list-style: none;
  display: flex;
  gap: 20px;
}

.menu li {
  padding: 8px 0;
}

.menu-toggle {
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  height: 40px;
  width: 40px;
  z-index: 200;
}

.hamburger,
.hamburger::before,
.hamburger::after {
  content: "";
  height: 3px;
  width: 25px;
  background-color: var(--icon-color);
  display: block;
  transition: all 0.3s ease-in-out;
  position: relative;
}

.hamburger::before,
.hamburger::after {
  position: absolute;
}

.hamburger::before {
  top: -8px;
}

.hamburger::after {
  top: 8px;
}

.hamburger.open {
  background-color: transparent;
}

.hamburger.open::before {
  transform: rotate(45deg);
  top: 0;
}

.hamburger.open::after {
  transform: rotate(-45deg);
  top: 0;
}


@keyframes fadeDown {
  0% {
    opacity: 0;
    transform: translateY(-10px);
  }

  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.navbar ul {
  display: flex;
  gap: 2rem;
  list-style: none;
  margin: 0;
  padding: 0;
}

.navbar a {
  text-decoration: none;
  font-weight: 500;
  font-size: 17px;
  transition: color 0.3s ease, transform 0.3s ease;
}

/* Hide left & right bars on mobile */
@media (max-width: 768px) {

  .left-bar,
  .right-bar {
    display: none;
  }

  .navbar {
    height: 50px;
    padding: 0 1rem;
  }

  .navbar ul {
    display: none;
    /* <-- This hides the menu */
    flex-direction: column;
    position: absolute;
    top: 60px;
    left: 0;
    width: 100%;
    background-color: white;
    padding: 20px 0;
    z-index: 100;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  .navbar ul.menu-open {
    display: flex;
    /* <-- This shows it when menu is toggled */
  }

  .menu {
    display: flex !important;
    position: static !important;
    flex-direction: row !important;
    background-color: transparent !important;
    box-shadow: none !important;
  }

  .menu-toggle {
    display: flex;
    position: absolute;
    top: 15px;
    right: 20px;
  }

  .navbar {
    position: relative;
  }


  /* .menu-toggle {
    display: flex;
    position: absolute;
    top: 15px;
    right: 20px;
  }

  .navbar ul {
    display: none;
  }

  .navbar ul.menu-open {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 50px;
    left: 0;
    width: 100%;
    background-color: rgba(255, 255, 255, 0.95);
    padding: 20px 0;
    z-index: 100;
  }

  .navbar li {
    text-align: center;
    margin: 10px 0;
  } */
}