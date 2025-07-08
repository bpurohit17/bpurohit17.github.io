import React, { useEffect } from "react";
import MediaQuery from "react-responsive";
import "./projects.css";
import ProjectItem from "./projectItem";
import { useInView } from "react-intersection-observer";

const Projects = ({ setColor }) => {
  const { ref, inView } = useInView({ threshold: 0.5 });

  useEffect(() => {
    if (inView) {
      setColor("#fff7ae");
    }
  }, [inView, setColor]);

  return (
    <section id="projects" ref={ref}>
      <div style={{}}>
        <div className="container-projects">
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              width: "-webkit-fill-available",
              padding: "0 260px",
            }}
          >
            <div className="title-text">
              Things I've Worked on, Some of Them
            </div>
            <div className="title-line-container">
              <div className="title-line"></div>
            </div>
          </div>
          <ProjectItem
            title="Bulko App"
            description="Bulko is a modern grocery delivery app that brings fresh produce, pantry staples, and household items directly to customers' doors. It features a user-friendly interface, secure authentication, smart search, seamless cart management, and real-time order tracking — all designed to make grocery shopping fast and convenient."
            techStack="Flutter | Hybrid Mobile App | Android | iOS"
            // imageUrl={process.env.PUBLIC_URL + "images/bulko-img.png"}
            imageUrl={`${process.env.PUBLIC_URL}/images/bulko-img.png`}
            featuredText="Featured Project"
            flipData={true}
            link="https://bulko.in/"
            // gitLink="https://github.com/look-at-clay/bulko-user-app"
            playstoreLink="https://play.google.com/store/apps/details?id=com.lookatclay.bulko.user&pli=1"
          />
          <ProjectItem
            title="Green Force App"
            description="Green Force is platform that connects solar companies and independent surveyors. It provides a tech-enabled service to facilitate solar site surveys, which are essential for evaluating rooftop or ground-mounted solar panel installations."
            techStack="Flutter | Hybrid Mobile App | Android | iOS"
            // imageUrl={process.env.PUBLIC_URL + "images/tgf-img.png"}
            imageUrl={`${process.env.PUBLIC_URL}/images/tgf-img.png`}
            featuredText="Featured Project"
            link="https://play.google.com/store/apps/developer?id=TEAM+GREEN+FORCE+INC.&hl=en_IN"
            // gitLink="https://github.com/look-at-clay/bulko-user-app"
            playstoreLink="https://play.google.com/store/apps/developer?id=TEAM+GREEN+FORCE+INC.&hl=en_IN"
            appStoreLink="https://apps.apple.com/in/developer/team-green-force-inc/id1719754974"
          />
          <ProjectItem
            title="Permit Planset Project"
            description="Permit is India’s first automated platform for generating solar permit plans. It streamlines the traditionally manual 8–12 hour process into an automated, one-hour workflow. Designed for solar companies, it produces ready-to-submit permit documents—including layouts and electrical line diagrams—tailored to local authority requirements. The platform improves efficiency, ensures compliance, and accelerates solar project timelines."
            techStack="React Js | Web App | Rest API | SQL"
            // imageUrl={process.env.PUBLIC_URL + "images/planset-img.png"}
            imageUrl={`${process.env.PUBLIC_URL}/images/planset-img.png`}
            featuredText="Featured Project"
            flipData={true}
            link="https://software.gwrepermit.com/"
            // gitLink="https://github.com/look-at-clay/bulko-user-app"
          />
          <ProjectItem
            title="BioTradX"
            description="This project is currently in progress. It aims to solve a real-world problem through innovative design and technology. More details will be added soon as development progresses."
            techStack="Flutter | Hybrid Mobile App | Android | iOS"
            imageUrl={`${process.env.PUBLIC_URL}/images/biotradx-img.png`}
            featuredText="Featured Project"
            link="https://devportfolio.biotradx.com/"
            // gitLink="https://github.com/look-at-clay/bulko-user-app"
            // playstoreLink="https://play.google.com/store/apps/developer?id=TEAM+GREEN+FORCE+INC.&hl=en_IN"
            // appStoreLink="https://apps.apple.com/in/developer/team-green-force-inc/id1719754974"
          />
        </div>
      </div>
    </section>
  );
};

export default Projects;
