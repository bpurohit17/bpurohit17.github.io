import React from "react";
import { useInView } from "react-intersection-observer";
import Ballpit from "../../component/Ballpit";

const Contact = ({ setColor }) => {
  const { ref } = useInView({
    threshold: 0.2,
  });

  return (
    <section
      id="contact"
      ref={ref}
      className="relative isolate min-h-[100svh] w-full overflow-hidden bg-black"
    >
      {/* Ball animation starts lower to prevent spheres being cut at the top */}
      <div className="pointer-events-auto absolute inset-x-0 bottom-0 top-24 z-0 sm:top-16">
        <Ballpit
          count={120}
          colors={["#dfd1fc"]}
          material="matte"
          gravity={0}
          drift={1.1}
          followCursor
          grab
          clickEffect="burst"
          minSize={0.7}
          maxSize={1}
          friction={0.996}
          wallBounce={0.85}
          bounce={0.85}
          depth={2}
          cursorSize={1}
          lightColor="#6f2aa5"
          lightIntensity={0}
          exposure={1}
          shadows={0}
          intro
        />
      </div>

      {/* Smooth transition from Skills into Contact */}
      <div className="pointer-events-none absolute inset-x-0 top-0 z-[1] h-48 bg-gradient-to-b from-black via-black/80 to-transparent sm:h-56" />

      {/* Subtle bottom fade */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-24 bg-gradient-to-t from-black/50 to-transparent" />

      {/* Foreground content */}
      <div className="relative z-10 flex min-h-[100svh] w-full flex-col items-start justify-center gap-7 overflow-hidden px-[8%] py-24 max-md:min-h-[85svh] max-md:gap-6 max-md:px-[7%] max-md:py-20 max-sm:min-h-[80svh] max-sm:px-[6%] max-sm:py-16">
        <div className="pointer-events-none relative w-full max-w-2xl">
          <p className="mb-3.5 font-['Quicksand',sans-serif] text-base font-medium leading-relaxed text-white max-md:text-[0.95rem]">
            Get in touch
          </p>

          <h2 className="mb-6 font-['Quicksand',sans-serif] text-[clamp(2.5rem,6vw,5rem)] font-bold leading-[1.1] tracking-[-0.04em] text-white max-md:text-[clamp(2.2rem,9vw,3.5rem)] max-md:tracking-[-0.025em] max-sm:text-[2.3rem]">
            Let's Work Together
          </h2>
          <p className="mb-8 font-['Quicksand',sans-serif] text-base leading-[1.8] text-white max-md:text-[0.95rem]">
            I'm open to new opportunities, especially ambitious projects. My
            inbox is always open, whether you have a question, a project idea,
            or just want to say hi. I'll do my best to get back to you!
          </p>

          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=bhagyashrip830@gmail.com&su=Opportunity%20to%20Connect"
            target="_blank"
            rel="noopener noreferrer"
            className="pointer-events-auto mt-6 inline-flex items-center rounded-md border border-[#6b3cd6] px-4 py-3 text-left text-sm font-medium text-[#dfd1fc] transition-colors hover:bg-[#6b3cd6] hover:text-white sm:text-base"
          >
            Say Hello
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
