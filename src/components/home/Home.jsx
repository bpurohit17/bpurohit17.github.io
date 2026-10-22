import React, { useEffect } from "react";
import "../home/home.css";
import MediaQuery from "react-responsive";
// import Global from './Globalstyles';
import TypingEffect from "./TypingEffect";
// import Contact from "./contact";
// import WorkExperiences from "./workExperience/WorkExperiences";
import { useInView } from "react-intersection-observer";
import LiquidEther from "../../component/LiquidEther.jsx";
import TechText from "../../component/TechText";

const Home = ({ setColor, scrollToSection }) => {
  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  function download(url) {
    const a = document.createElement("a");
    a.href = url;
    a.download = url.split("/").pop();
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }

  // useEffect(() => {
  //   if (inView) {
  //     setColor("#ffffff");
  //   }
  // }, [inView, setColor]);

  return (
    <section id="home" ref={ref} className="home-section">
      <div className="home__background" aria-hidden="true">
        <LiquidEther
          colors={["#6f2aa5", "#8b3cd6", "#dfd1fc"]}
          mouseForce={41}
          cursorSize={55}
          persistence={0.75}
          autoDemo={true}
          autoSpeed={0.55}
          autoIntensity={3.2}
          viscosity={0.34}
          intensity={0.55}
        />
      </div>

      <div className="home__content top-56">
        <div className="text-start mx-36 text-2xl font-semibold">
          <div>G'day, I'm</div>
        </div>
        <TechText
          text="Bhagyashri Purohit"
          fontWeight={600}
          fontSize={150}
          reveal="letter"
          dashLength={4}
          dashGap={2}
          specks={15}
          intro="none"
          introDuration={2}
          clickKick
          guides={false}
          fontFamily=""
          letterSpacing={-0.05}
          accentColor="currentColor"
          reach={200}
          softness={0.7}
          lineStyle="dashed"
          strokeWidth={1.5}
          speed={1}
          bounce={0.4}
          selection
          labels
          color="currentColor"
          align="center"
          draggable
          sweep
        />
        <div className="mx-36">
          <TypingEffect />
          <div class="text-md font-medium max-w-xl">
            I build fast, scalable, and user-focused apps—from backend logic to
            pixel-perfect frontends. Let's code something amazing.
          </div>
          <a
            href="https://drive.google.com/uc?export=download&id=1QAgIsoZ5cPs5--6plIFW8YsX0bo1-xvu"
            target="_blank"
            rel="noreferrer"
            className="inline-block border border-[#6b3cd6] w-fit px-4 py-3 rounded-md text-[#6b3cd6] text-md font-medium mt-6 hover:bg-[#6b3cd6] hover:text-white transition-colors duration-200"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
