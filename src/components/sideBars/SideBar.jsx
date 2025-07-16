import React, { useEffect, useState } from "react";
import sectionColors from "../../constants/sectionColors";
import "./SideBar.css";

const SideBars = ({ color, scrollToSection }) => {
  const [activeSection, setActiveSection] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  const defaultColor = sectionColors[activeSection]?.default || "#2a363b";
  const hoverColor = sectionColors[activeSection]?.hover || defaultColor;
  const defaultSectionColor = sectionColors[activeSection]?.defaultSectionColor;

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
                }} // auto-close on click
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
  );
};

export default SideBars;
