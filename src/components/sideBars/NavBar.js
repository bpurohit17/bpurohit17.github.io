import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    // <nav className="fixed top-0 left-0 w-full z-50 bg-transparent p-4">
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 
                         ${
                           scrolled
                             ? "bg-gradient-to-r from-gradientStartFrom via-gradientMiddle to-gradientEndTo shadow-md"
                             : "bg-transparent"
                         } p-4`}
    >
      <div className="container mx-auto flex justify-between items-center">
        {/* Hamburger Menu for Mobile */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-textPrimary focus:outline-none md:hidden"
        >
          {isOpen ? (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          )}
        </button>

        {/* Navigation Links */}
        <div
          className={`w-full md:flex md:items-center md:w-auto 
                    md:space-x-4 absolute md:relative top-16 left-0 md:top-0 
                    md:left-0 p-4 md:p-0 bg-black bg-opacity-70 md:bg-transparent 
                    transition-all duration-500 ease-in-out transform ${
                      isOpen ? "translate-x-0" : "translate-x-full"
                    } md:translate-x-0`}
        >
          <a
            href="#home"
            className="block py-2 px-4 text-textPrimary hover:text-gray-200 md:inline-block"
          >
            Home
          </a>
          <a
            href="#about"
            className="block py-2 px-4 text-textPrimary hover:text-gray-200 md:inline-block"
          >
            About
          </a>
          <a
            href="#services"
            className="block py-2 px-4 text-textPrimary hover:text-gray-200 md:inline-block"
          >
            Services
          </a>
          <a
            href="#projects"
            className="block py-2 px-4 text-textPrimary hover:text-gray-200 md:inline-block"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="block py-2 px-4 text-textPrimary hover:text-gray-200 md:inline-block"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
