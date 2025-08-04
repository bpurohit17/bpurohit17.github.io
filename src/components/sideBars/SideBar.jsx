import React, { useEffect, useState } from "react";
import { Github, Instagram, Linkedin, Mail } from "@geist-ui/react-icons";
import "./SideBar.css";
import sectionColors from "../../constants/sectionColors";

const SideBars = () => {
  const [activeSection, setActiveSection] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const [hoveredIcon, setHoveredIcon] = useState(null);

  const defaultColor = sectionColors[activeSection]?.default || "#2a363b";
  const hoverColor = sectionColors[activeSection]?.hover || "#2a363b";
  const defaultSectionColor = sectionColors[activeSection]?.defaultSectionColor;

  const iconColor = (iconName) =>
    hoveredIcon === iconName ? hoverColor : defaultColor;

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
    console.log(menuOpen);
  };

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
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className="navbar"
        style={{
          "--icon-color": defaultColor,
          "--hover-color": hoverColor,
          "--defaultSectionColor": defaultSectionColor,
        }}
      >
        <div className="menu-toggle" onClick={toggleMenu}>
          <div className={`hamburger ${menuOpen ? "open" : ""}`}></div>
        </div>

        <ul className={`menu ${menuOpen ? "menu-open" : ""}`}>
          {["home", "projects", "skills", "experience", "contact"].map(
            (section) => (
              <li key={section}>
                <a
                  href={`#${section}`}
                  onClick={() => {
                    setMenuOpen(false);
                    console.log(menuOpen);
                  }}
                  className={`block px-4 py-2 text-center capitalize ${
                    activeSection === section ? "active" : ""
                  } ${
                    activeSection === section ? "font-bold" : "text-gray-700"
                  }`}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}

                  {/* {section} */}
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
              onMouseEnter={() => setHoveredIcon("github")}
              onMouseLeave={() => setHoveredIcon(null)}
            >
              <Github
                color={iconColor("github")}
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
              onMouseEnter={() => setHoveredIcon("linkedin")}
              onMouseLeave={() => setHoveredIcon(null)}
            >
              <Linkedin
                color={iconColor("linkedin")}
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
              href="https://mail.google.com/mail/?view=cm&fs=1&to=bhagyashrip830@gmail.com&su=Opportunity%20to%20Connect&body=Hi%20Bhagyashri%2C%0A%0AI%20came%20across%20your%20portfolio%20and%20wanted%20to%20connect%20with%20you%20regarding%20an%20opportunity.%0A%0ABest%20regards%2C%0A[Your%20Name]"
              onMouseEnter={() => setHoveredIcon("mail")}
              onMouseLeave={() => setHoveredIcon(null)}
            >
              <Mail
                color={iconColor("mail")}
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
              rel="noreferrer"
              target="_blank"
              href="https://mail.google.com/mail/?view=cm&fs=1&to=bhagyashrip830@gmail.com&su=Opportunity%20to%20Connect&body=Hi%20Bhagyashri%2C%0A%0AI%20came%20across%20your%20portfolio%20and%20wanted%20to%20connect%20with%20you%20regarding%20an%20opportunity.%0A%0ABest%20regards%2C%0A[Your%20Name]"
              style={{ color: iconColor("gmail") }}
              onMouseEnter={() => setHoveredIcon("gmail")}
              onMouseLeave={() => setHoveredIcon(null)}
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
