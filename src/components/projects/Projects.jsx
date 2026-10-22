import React, { useEffect } from "react";
import "./projects.css";
import ProjectItem from "./projectItem";
import { useInView } from "react-intersection-observer";
import Lightfall from "../../component/Lightfall.jsx";

const Projects = ({ setColor }) => {
  const { ref, inView } = useInView({
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView && setColor) {
      setColor("#fff7ae");
    }
  }, [inView, setColor]);

  const projects = [
    {
      title: "Bulko App",
      description:
        "Bulko is a modern grocery delivery app that brings fresh produce, pantry staples, and household items directly to customers' doors. It features a user-friendly interface, secure authentication, smart search, seamless cart management, and real-time order tracking — all designed to make grocery shopping fast and convenient.",
      techStack: "Flutter | Hybrid Mobile App | Android | iOS",
      imageUrl: `${process.env.PUBLIC_URL}/images/bulko-img.png`,
      featuredText: "Featured Project",
      flipData: true,
      link: "https://bulko.in/",
      playstoreLink:
        "https://play.google.com/store/apps/details?id=com.lookatclay.bulko.user&pli=1",
    },
    {
      title: "Green Force App",
      description:
        "Green Force is a platform that connects solar companies and independent surveyors. It provides a technology-enabled service for solar site surveys, which are essential for evaluating rooftop or ground-mounted solar panel installations.",
      techStack: "Flutter | Hybrid Mobile App | Android | iOS",
      imageUrl: `${process.env.PUBLIC_URL}/images/tgf-img.png`,
      featuredText: "Featured Project",
      link: "https://play.google.com/store/apps/developer?id=TEAM+GREEN+FORCE+INC.&hl=en_IN",
      playstoreLink:
        "https://play.google.com/store/apps/developer?id=TEAM+GREEN+FORCE+INC.&hl=en_IN",
      appStoreLink:
        "https://apps.apple.com/in/developer/team-green-force-inc/id1719754974",
    },
    {
      title: "Permit Planset Project",
      description:
        "Permit is India's first automated platform for generating solar permit plans. It streamlines the traditionally manual 8–12 hour process into an automated, one-hour workflow. It generates ready-to-submit permit documents, including layouts and electrical line diagrams, tailored to local authority requirements.",
      techStack: "React JS | Web App | REST API | SQL",
      imageUrl: `${process.env.PUBLIC_URL}/images/planset-img.png`,
      featuredText: "Featured Project",
      flipData: true,
      link: "https://planset.gwrepermit.com/",
    },
    {
      title: "BioTradX",
      description:
        "This project is currently in progress. It aims to solve a real-world problem through innovative design and technology. More details will be added soon as development progresses.",
      techStack: "Flutter | Hybrid Mobile App | Android | iOS",
      imageUrl: `${process.env.PUBLIC_URL}/images/biotradx-img.png`,
      featuredText: "Featured Project",
      link: "https://devportfolio.biotradx.com/",
    },
    {
      title: "Indian Solar GWRE Website",
      description:
        "GWRE offers solar EPC services, sustainable infrastructure design, and project planning with a focus on solar mini-grids, solar PV systems, energy-efficient infrastructure, and resource conservation.",
      techStack: "React JS | Tailwind CSS",
      imageUrl: `${process.env.PUBLIC_URL}/images/indian-solar-img.png`,
      featuredText: "Featured Project",
      flipData: true,
      link: "https://india.greenworld-energy.com/",
    },
  ];

  return (
    <section
      id="projects"
      ref={ref}
      className="relative isolate min-h-screen w-full overflow-hidden bg-black text-white"
    >
      {/* Animated background restricted to Projects */}
      <div className="projects-background" aria-hidden="true">
        <Lightfall
          colors={["#dfd1fc", "#b497cf", "#8b3cd6"]}
          backgroundColor="#000000"
          speed={0.85}
          streakCount={2}
          streakWidth={0.6}
          twinkle={0.3}
          backgroundGlow={0.1}
          headGlow={0.55}
          bloom={0.3}
          mouseInteraction={true}
          holdToWarp={true}
          intro={true}
          streakLength={1}
          density={0.6}
          glow={0.75}
          depth={0.55}
          zoom={2}
          mouseStrength={0.4}
          mouseRadius={0.25}
          lens={0.65}
          fade={0.5}
          lightMode={false}
          className="h-full w-full"
        />
      </div>

      {/* Projects content above the background */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 py-24 sm:px-8 lg:px-12">
        {/* Section heading */}
        <div className="mb-16 text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-purple-300">
            My Portfolio
          </p>

          <h2 className="text-3xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            Things I've Worked On,
            <span className="mt-2 block bg-gradient-to-r from-purple-300 to-white bg-clip-text text-transparent">
              Some of Them
            </span>
          </h2>

          <div className="mx-auto mt-6 h-1 w-24 rounded-full bg-purple-400" />

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-white/70 sm:text-lg">
            From pixels to prototypes, the skills behind every detail.
            <br /> A mix of creative thinking, problem-solving, and hands-on
            craft, developed through experimentation and shaped by real-world
            projects.
          </p>
        </div>

        {/* Project cards */}
        <div className="relative z-10 space-y-16 sm:space-y-24">
          {projects.map((project) => (
            <div key={project.title} className="relative z-10">
              <ProjectItem {...project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
