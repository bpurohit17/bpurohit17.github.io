"use client";

import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import FolderFloat from "../../component/FolderFloat";

const Skills = ({ setColor }) => {
  const { ref } = useInView({ threshold: 0.5 });

  const [screen, setScreen] = useState({
    width: 1024,
    spread: 180,
  });

  useEffect(() => {
    const updateScreen = () => {
      const width = window.innerWidth;

      setScreen({
        width,
        spread: width < 380 ? 80 : width < 640 ? 95 : width < 1024 ? 150 : 180,
      });
    };

    updateScreen();
    window.addEventListener("resize", updateScreen);

    return () => window.removeEventListener("resize", updateScreen);
  }, []);

  const isMobile = screen.width < 640;

  const folderProps = {
    trigger: "hover",
    closeOnSelect: false,
    physics: true,
    folderColor: "#3f3f46",
    frontColor: "#3f3f46",
    paperColor: "#f5f5f5",
    itemColor: "#dfd1fc",
    itemTextColor: "#3a1358",
    labelColor: "#f5f5f5",

    // Smaller folders on mobile; desktop remains unchanged.
    width: isMobile ? 180 : 200,
    height: isMobile ? 132 : 148,
    spread: screen.spread,
    lift: isMobile ? 18 : 26,
  };

  return (
    <section
      id="skills"
      ref={ref}
      className="relative box-border min-h-[500px] w-full overflow-visible bg-black px-4 pb-16 pt-12 sm:px-7 sm:pb-24 sm:pt-16 lg:px-10 lg:pb-28 lg:pt-20"
    >
      <div className="mx-auto flex w-full max-w-[1250px] flex-col items-center gap-8 overflow-visible sm:gap-20 lg:gap-24">
        {/* Heading */}
        <div className="flex w-full flex-col items-center">
          <h2 className="m-0 text-center text-[28px] font-bold leading-tight text-[#eeeeee] sm:text-4xl lg:text-[44px]">
            Tech Stack &amp; Tools
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-center text-sm leading-6 text-white/70 sm:mt-6 sm:text-base sm:leading-7 lg:text-lg">
            The skills I bring to the table and the tools I use to turn ideas
            into working experiences.
          </p>
        </div>

        {/* Responsive folder grid */}
        <div className="w-full overflow-visible px-0 pb-16 pt-16 sm:px-2 sm:pb-20 sm:pt-20 lg:pb-24 lg:pt-14">
          <div className="grid w-full grid-cols-1 justify-items-center gap-x-6 gap-y-48 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-36 lg:gap-x-12 xl:grid-cols-4 xl:gap-x-6">
            <FolderFloat
              {...folderProps}
              trigger="hover"
              items={[
                "HTML5",
                "CSS3",
                "JavaScript",
                "React JS",
                "Tailwind CSS",
              ]}
              label="Frontend Development"
              sublabel="5 skills"
            />

            <FolderFloat
              {...folderProps}
              trigger="hover"
              items={["Flutter", "Dart"]}
              label="Mobile Development"
              sublabel="2 skills"
            />

            <FolderFloat
              {...folderProps}
              trigger="hover"
              items={[
                "SQL Server",
                "MySQL",
                "Firebase",
                "SupaBase",
                "Java Spring Boot",
                "ASP.NET",
              ]}
              label="Database & Backend"
              sublabel="6 skills"
            />

            <FolderFloat
              {...folderProps}
              trigger="hover"
              items={[
                "Git",
                "GitHub",
                "AWS",
                "CI/CD",
                "Postman",
                "Figma",
                "Notion",
              ]}
              label="Tools & Workflow"
              sublabel="7 tools"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
