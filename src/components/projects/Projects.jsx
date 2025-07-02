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
            imageUrl={process.env.PUBLIC_URL + "images/bulko-img.png"}
            featuredText="Featured Project"
            flipData={true}
            link="https://bulko.in/"
          />
          <ProjectItem
            title="Green Force App"
            description="Green Force is platform that connects solar companies and independent surveyors. It provides a tech-enabled service to facilitate solar site surveys, which are essential for evaluating rooftop or ground-mounted solar panel installations."
            techStack="Flutter | Hybrid Mobile App | Android | iOS"
            imageUrl={process.env.PUBLIC_URL + "images/tgf-img.png"}
            featuredText="Featured Project"
            link="https://play.google.com/store/apps/developer?id=TEAM+GREEN+FORCE+INC.&hl=en_IN"
          />
          <ProjectItem
            title="Planset Project"
            description="Bulko is a modern grocery delivery app that brings fresh produce, pantry staples, and household items directly to customers' doors. It features a user-friendly interface, secure authentication, smart search, seamless cart management, and real-time order tracking — all designed to make grocery shopping fast and convenient."
            techStack="React Js | Web App | Rest API | SQL"
            imageUrl={process.env.PUBLIC_URL + "images/planset-img.png"}
            featuredText="Featured Project"
            flipData={true}
            link="https://planset.gwrepermit.com/"
          />
          <ProjectItem
            title="BioTradX"
            description="Green Force is platform that connects solar companies and independent surveyors. It provides a tech-enabled service to facilitate solar site surveys, which are essential for evaluating rooftop or ground-mounted solar panel installations."
            techStack="Flutter | Hybrid Mobile App | Android | iOS"
            imageUrl={process.env.PUBLIC_URL + "images/tgf-img.png"}
            featuredText="Featured Project"
            link="https://devportfolio.biotradx.com/"
          />
        </div>
      </div>
    </section>
  );
};

export default Projects;
