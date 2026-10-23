import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import TypingEffect from "./TypingEffect";
import LiquidEther from "../../component/LiquidEther.jsx";
import TechText from "../../component/TechText";

const Home = ({ setColor, scrollToSection }) => {
  const { ref } = useInView({ threshold: 0.2 });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const updateScreen = () => {
      setIsMobile(window.innerWidth < 768);
    };

    updateScreen();
    window.addEventListener("resize", updateScreen);

    return () => window.removeEventListener("resize", updateScreen);
  }, []);

  return (
    <section
      id="home"
      ref={ref}
      className="relative isolate flex min-h-screen w-full items-center overflow-hidden bg-[#08070b] text-white"
    >
      {/* Animated background */}
      <div
        className="pointer-events-none absolute inset-0 z-0 overflow-hidden bg-[#08070b]"
        aria-hidden="true"
      >
        <LiquidEther
          colors={["#6f2aa5", "#8b3cd6", "#dfd1fc"]}
          mouseForce={isMobile ? 15 : 41}
          cursorSize={isMobile ? 30 : 55}
          persistence={0.75}
          autoDemo={!isMobile}
          autoSpeed={0.35}
          autoIntensity={isMobile ? 1 : 3.2}
          viscosity={0.34}
          intensity={isMobile ? 0.3 : 0.55}
        />
      </div>

      {/* Hero content */}
      <div className="relative z-10 flex min-h-screen w-full items-center px-5 py-24 text-left sm:px-8 md:px-12 lg:px-16 xl:px-20">
        <div className="w-full max-w-5xl">
          <p className="mb-3 text-lg font-semibold sm:text-xl md:text-2xl">
            G&apos;day, I&apos;m
          </p>

          <div className="w-full min-w-0 overflow-hidden">
            <TechText
              key={isMobile ? "mobile" : "desktop"}
              text="Bhagyashri Purohit"
              fontWeight={600}
              fontSize={isMobile ? 42 : 150}
              align="left"
              letterSpacing={-0.05}
              color="currentColor"
              accentColor="currentColor"
              reveal="letter"
              dashLength={4}
              dashGap={2}
              specks={isMobile ? 5 : 15}
              intro="none"
              introDuration={2}
              clickKick
              guides={false}
              reach={isMobile ? 80 : 200}
              softness={0.7}
              lineStyle="dashed"
              strokeWidth={1.5}
              speed={1}
              bounce={0.4}
              selection
              labels
              draggable={!isMobile}
              sweep
              className="pointer-events-auto"
            />
          </div>

          <div className="mt-5 w-full max-w-2xl sm:mt-6">
            <div className="mb-3 text-base font-medium sm:text-lg md:text-xl">
              <TypingEffect />
            </div>

            <p className="max-w-xl text-sm leading-6 text-white/85 sm:text-base sm:leading-7">
              I build fast, scalable, and user-focused apps—from backend logic
              to pixel-perfect frontends. Let&apos;s code something amazing.
            </p>

            <a
              href="https://drive.google.com/uc?export=download&id=1oyfTrvaJwIfXBuAoj6vE14vdSCO-QW54"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center rounded-md border border-[#6b3cd6] px-4 py-3 text-sm font-medium text-[#dfd1fc] transition-colors hover:bg-[#6b3cd6] hover:text-white sm:text-base"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
