import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import TypingEffect from "./TypingEffect";
import LiquidEther from "../../component/LiquidEther.jsx";
import TechText from "../../component/TechText";

const Home = ({ setColor, scrollToSection }) => {
  const { ref } = useInView({ threshold: 0.2 });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 767px)");

    const updateScreen = () => setIsMobile(mediaQuery.matches);

    updateScreen();
    mediaQuery.addEventListener("change", updateScreen);

    return () => mediaQuery.removeEventListener("change", updateScreen);
  }, []);

  return (
    <section
      id="home"
      ref={ref}
      className="relative isolate flex min-h-[100svh] w-full items-center overflow-hidden bg-[#08070b] text-white"
    >
      {/* CSS fallback always works, even without WebGL */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 overflow-hidden bg-[#08070b]"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_15%_35%,rgba(111,42,165,0.28),transparent_48%),radial-gradient(ellipse_at_85%_70%,rgba(139,60,214,0.15),transparent_45%)]" />

        {/* GPU-heavy background only on desktop */}
        {/* {!isMobile && (
          <LiquidEther
            colors={["#6f2aa5", "#8b3cd6", "#dfd1fc"]}
            mouseForce={41}
            cursorSize={55}
            persistence={0.75}
            autoDemo
            autoSpeed={0.35}
            autoIntensity={3.2}
            viscosity={0.34}
            intensity={0.55}
          />
        )} */}
        <LiquidEther
          colors={["#6f2aa5", "#8b3cd6", "#dfd1fc"]}
          mouseForce={isMobile ? 30 : 41}
          cursorSize={isMobile ? 40 : 55}
          persistence={0.85}
          autoDemo
          autoSpeed={isMobile ? 0.65 : 0.35}
          autoIntensity={isMobile ? 5 : 3.2}
          viscosity={0.34}
          intensity={isMobile ? 0.8 : 0.55}
        />
      </div>

      {/* Hero content */}
      <div className="relative z-10 flex min-h-[100svh] w-full items-center px-5 py-24 text-left sm:px-8 md:px-12 lg:px-16 xl:px-20">
        <div className="w-full max-w-5xl">
          <p className="md:mb-1 text-lg font-semibold sm:text-xl md:text-2xl">
            G&apos;day, I&apos;m
          </p>

          {isMobile ? (
            /* Reliable mobile heading: no canvas or WebGL dependency */
            <TechText
              text="Bhagyashri Purohit"
              fontWeight={600}
              fontSize={150}
              align="left"
              letterSpacing={-0.05}
              color="#ffffff"
              accentColor="#dfd1fc"
              reveal="letter"
              dashLength={4}
              dashGap={2}
              specks={15}
              sweep
              intro="type"
              respectReducedMotion={false}
              introDuration={2}
              clickKick
              guides={false}
              reach={200}
              softness={0.7}
              lineStyle="dashed"
              strokeWidth={1.5}
              speed={1}
              bounce={0.4}
              selection
              labels
              draggable
              className="pointer-events-auto"
            />
          ) : (
            // <h1 className="m-0 max-w-full break-words text-[clamp(2.25rem,9vw,3.5rem)] font-semibold leading-[1.08] tracking-tight text-[#dfd1fc]">
            //   Bhagyashri Purohit
            // </h1>
            <div className="w-full min-w-0">
              <TechText
                text="Bhagyashri Purohit"
                fontWeight={600}
                fontSize={150}
                align="left"
                letterSpacing={-0.05}
                color="#ffffff"
                accentColor="#dfd1fc"
                reveal="letter"
                dashLength={4}
                dashGap={2}
                specks={15}
                intro="none"
                introDuration={2}
                clickKick
                guides={false}
                reach={200}
                softness={0.7}
                lineStyle="dashed"
                strokeWidth={1.5}
                speed={1}
                bounce={0.4}
                selection
                labels
                draggable
                sweep
                className="pointer-events-auto"
              />
            </div>
          )}

          <div className="w-full max-w-2xl sm:mt-3">
            <div className="text-base font-medium sm:text-lg md:text-xl">
              <TypingEffect />
            </div>

            <p className="max-w-xl mt-2 sm:mt-4 text-sm leading-6 text-white/85 sm:text-base sm:leading-7">
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
