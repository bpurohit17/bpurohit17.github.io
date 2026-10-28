import { useEffect, useRef, useState } from "react";

const ScrollReveal = ({ children }) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.08,
        rootMargin: "0px 0px -30px 0px",
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transform-gpu transition-[opacity,transform,filter] duration-700 ease-out motion-reduce:transition-none ${
        isVisible
          ? "translate-y-0 scale-100 opacity-100 blur-0"
          : "translate-y-16 scale-[0.96] opacity-0 blur-sm"
      }`}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;
