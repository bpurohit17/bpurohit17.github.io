import React from "react";
import { useInView } from "react-intersection-observer";
import TypingEffect from "./TypingEffect";
import LiquidEther from "../../component/LiquidEther.jsx";
import TechText from "../../component/TechText";

const Home = ({ setColor, scrollToSection }) => {
  const { ref } = useInView({ threshold: 0.5 });

  return (
    <section
      id="home"
      ref={ref}
      className="relative isolate flex min-h-screen w-full items-center overflow-hidden bg-black text-white"
    >
      {/* Interactive animated background */}
      <div
        className="pointer-events-auto absolute inset-0 z-0 h-full w-full"
        aria-hidden="true"
      >
        <div className="absolute inset-0 h-full w-full">
          <LiquidEther
            colors={["#6f2aa5", "#8b3cd6", "#dfd1fc"]}
            mouseForce={41}
            cursorSize={55}
            persistence={0.75}
            autoDemo
            autoSpeed={0.55}
            autoIntensity={3.2}
            viscosity={0.34}
            intensity={0.55}
          />
        </div>
      </div>
      {/* Left-aligned content */}
      <div className="relative z-10 flex min-h-screen w-full items-center overflow-hidden px-5 py-24 text-left sm:px-8 md:px-12 lg:px-16 xl:px-20">
        <div className="w-full max-w-5xl text-left">
          <p className="mb-3 text-left text-lg font-semibold sm:text-xl md:text-2xl">
            G&apos;day, I&apos;m
          </p>

          <div className="w-full text-left">
            <TechText
              text="Bhagyashri Purohit"
              fontWeight={600}
              fontSize={150}
              align="left"
              letterSpacing={-0.05}
              color="currentColor"
              accentColor="currentColor"
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

          <div className="mt-5 w-full max-w-2xl text-left sm:mt-6">
            <div className="mb-3 text-left text-base font-medium sm:text-lg md:text-xl">
              <TypingEffect />
            </div>

            <p className="max-w-xl text-left text-sm leading-6 text-white/85 sm:text-base sm:leading-7">
              I build fast, scalable, and user-focused apps—from backend logic
              to pixel-perfect frontends. Let&apos;s code something amazing.
            </p>

            <a
              href="https://drive.google.com/uc?export=download&id=1oyfTrvaJwIfXBuAoj6vE14vdSCO-QW54"
              target="_blank"
              rel="noreferrer"
              className="pointer-events-auto mt-6 inline-flex items-center rounded-md border border-[#6b3cd6] px-4 py-3 text-left text-sm font-medium text-[#dfd1fc] transition-colors hover:bg-[#6b3cd6] hover:text-white sm:text-base"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>{" "}
    </section>
  );
};

export default Home;
