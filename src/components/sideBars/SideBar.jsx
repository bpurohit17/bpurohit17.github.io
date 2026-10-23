import React, { useEffect, useState } from "react";
import { Github, Linkedin, Mail, Menu, X } from "@geist-ui/react-icons";
import sectionColors from "../../constants/sectionColors";

const THEME = {
  default: "#dfd1fc",
  hover: "#a855f7",
  active: "#c084fc",
  background: "#08070b",
};

const sections = [
  { id: "home", label: "Home" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/bpurohit17",
    Icon: Github,
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/",
    Icon: Linkedin,
  },
  {
    name: "Email",
    url: "mailto:bhagyashrip830@gmail.com",
    Icon: Mail,
  },
];

const SideBars = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let ticking = false;

    const updateActiveSection = () => {
      const scrollPosition = window.scrollY + window.innerHeight * 0.4;

      let currentSection = "home";

      sections.forEach(({ id }) => {
        const element = document.getElementById(id);

        if (
          element &&
          element.getBoundingClientRect().top + window.scrollY <= scrollPosition
        ) {
          currentSection = id;
        }
      });

      setActiveSection(currentSection);
      setScrolled(window.scrollY > 20);
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateActiveSection);
        ticking = true;
      }
    };

    updateActiveSection();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const sectionTheme = sectionColors?.[activeSection] || {};
  const defaultColor = sectionTheme.default || THEME.default;

  const handleNavigation = (id) => {
    setActiveSection(id);
    setIsOpen(false);
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <>
      {/* Main Navbar */}
      <header
        className={`fixed inset-x-0 top-0 z-[70] transition-all duration-300 ${
          scrolled
            ? "border-b border-purple-400/10 bg-[#08070b]/85 shadow-lg shadow-black/10 backdrop-blur-xl"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-12">
          {/* Logo */}
          <a
            href="#home"
            onClick={() => handleNavigation("home")}
            aria-label="Go to home"
            className="group inline-flex shrink-0 items-center gap-3"
          >
            {/* Replace this with your logo image if you have one */}
            <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-purple-400/30 bg-purple-500/10 text-lg font-bold text-purple-300 shadow-[0_0_20px_rgba(168,85,247,0.12)] transition-all duration-300 group-hover:border-purple-400/60 group-hover:bg-purple-500/20">
              B
            </span>

            <span className="text-base font-semibold tracking-wide text-[#dfd1fc] sm:text-lg">
              Bhagyashri
              <span className="text-purple-400">.</span>
            </span>
          </a>

          {/* Desktop navigation */}
          <nav
            aria-label="Main navigation"
            className="hidden items-center gap-7 md:flex lg:gap-9"
          >
            {sections.map(({ id, label }) => {
              const isActive = activeSection === id;

              return (
                <button
                  key={id}
                  type="button"
                  onClick={() => handleNavigation(id)}
                  aria-current={isActive ? "location" : undefined}
                  className={`relative py-2 text-sm transition-colors duration-200 ${
                    isActive
                      ? "text-purple-300"
                      : "text-[#dfd1fc]/75 hover:text-purple-400"
                  }`}
                >
                  {label}

                  <span
                    className={`absolute -bottom-0.5 left-0 h-0.5 rounded-full bg-purple-400 transition-all duration-300 ${
                      isActive ? "w-full" : "w-0"
                    }`}
                  />
                </button>
              );
            })}

            {/* Contact CTA */}
            <button
              type="button"
              onClick={() => handleNavigation("contact")}
              className="rounded-xl border border-purple-400/40 bg-purple-500/10 px-4 py-2 text-sm font-medium text-purple-200 transition-all duration-200 hover:border-purple-400/70 hover:bg-purple-500/20 hover:text-white"
            >
              Let's talk
            </button>
          </nav>

          {/* Mobile menu toggle */}
          <button
            type="button"
            aria-label={isOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={isOpen}
            onClick={() => setIsOpen((previous) => !previous)}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-purple-400/20 bg-purple-500/5 text-[#dfd1fc] transition-colors hover:border-purple-400/50 hover:text-purple-400 md:hidden"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      {/* Mobile backdrop */}
      {isOpen && (
        <button
          type="button"
          aria-label="Close navigation backdrop"
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 z-[80] bg-black/65 backdrop-blur-sm md:hidden"
        />
      )}

      {/* Mobile navigation panel */}
      <nav
        aria-label="Mobile navigation"
        className={`fixed right-0 top-0 z-[90] flex h-dvh w-[min(82vw,340px)] flex-col border-l border-purple-400/15 bg-[#0c0912]/95 px-7 pb-8 pt-28 shadow-2xl backdrop-blur-2xl transition-transform duration-300 md:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        aria-hidden={!isOpen}
      >
        <p className="mb-7 text-xs font-semibold uppercase tracking-[0.3em] text-purple-400/80">
          Navigation
        </p>

        <div className="flex flex-col gap-2">
          {sections.map(({ id, label }, index) => {
            const isActive = activeSection === id;

            return (
              <button
                key={id}
                type="button"
                tabIndex={isOpen ? 0 : -1}
                onClick={() => handleNavigation(id)}
                aria-current={isActive ? "location" : undefined}
                className={`flex items-center gap-4 rounded-xl px-4 py-4 text-left text-base transition-colors duration-200 ${
                  isActive
                    ? "border border-purple-400/20 bg-purple-500/10 text-purple-300"
                    : "border border-transparent text-[#dfd1fc]/75 hover:bg-purple-500/5 hover:text-purple-300"
                }`}
              >
                <span className="font-mono text-xs text-purple-400/70">
                  0{index + 1}
                </span>
                <span>{label}</span>

                {isActive && (
                  <span className="ml-auto h-1.5 w-1.5 rounded-full bg-purple-400 shadow-[0_0_8px_#a855f7]" />
                )}
              </button>
            );
          })}
        </div>

        <div className="mt-auto border-t border-purple-400/15 pt-6">
          <p className="mb-4 text-xs uppercase tracking-[0.2em] text-[#dfd1fc]/45">
            Connect with me
          </p>

          <div className="flex items-center gap-5">
            {socialLinks.map(({ name, url, Icon }) => (
              <a
                key={name}
                href={url}
                target={name === "Email" ? undefined : "_blank"}
                rel={name === "Email" ? undefined : "noopener noreferrer"}
                aria-label={name}
                tabIndex={isOpen ? 0 : -1}
                className="text-[#dfd1fc]/75 transition-colors duration-200 hover:text-purple-400"
              >
                <Icon size={20} />
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Desktop social sidebar */}
      <aside
        aria-label="Social links"
        className="fixed bottom-0 left-7 z-40 hidden flex-col items-center gap-6 md:flex"
      >
        {socialLinks.map(({ name, url, Icon }) => (
          <a
            key={name}
            href={url}
            target={name === "Email" ? undefined : "_blank"}
            rel={name === "Email" ? undefined : "noopener noreferrer"}
            aria-label={name}
            className="text-[#dfd1fc]/75 transition-all duration-200 hover:-translate-y-1 hover:text-purple-400"
          >
            <Icon size={19} />
          </a>
        ))}

        <div className="mt-1 h-20 w-px bg-purple-300/40" />
      </aside>

      {/* Desktop vertical email */}
      <aside className="fixed bottom-0 right-7 z-40 hidden flex-col items-center gap-6 md:flex">
        <a
          href="mailto:bhagyashrip830@gmail.com"
          className="[writing-mode:vertical-rl] text-xs tracking-[0.15em] text-[#dfd1fc]/75 transition-all duration-200 hover:-translate-y-1 hover:text-purple-400"
        >
          bhagyashrip830@gmail.com
        </a>

        <div className="mt-1 h-20 w-px bg-purple-300/40" />
      </aside>
    </>
  );
};

export default SideBars;
