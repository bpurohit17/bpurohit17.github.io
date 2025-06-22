import React, { useEffect } from "react";
import MediaQuery from "react-responsive";
import "./ProjectItem.css";

const ProjectItem = ({
  title,
  description,
  techStack,
  imageUrl,
  featuredText = "Featured Project",
  flipData = false,
}) => {
  return (
    <div
      class="project-container"
      style={{
        transform: flipData ? "scaleX(-1)" : "none",
      }}
    >
      <div
        class="image-wrapper"
        style={{
          transform: flipData ? "scaleX(-1)" : "none",
        }}
      >
        <div
          class="left"
          style={{
            background: `url(${imageUrl}?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=564&q=80)`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        ></div>
      </div>
      <div class="data">
        <div className="projects-text-side">
          <div
            class="projects-text-featured"
            style={{
              transform: flipData ? "scaleX(-1)" : "none",
            }}
          >
            {featuredText}
          </div>
          <div
            class="projects-text-title"
            style={{
              transform: flipData ? "scaleX(-1)" : "none",
            }}
          >
            {title}
          </div>

          <div
            class="right"
            style={{
              transform: flipData ? "scaleX(-1)" : "none",
            }}
          >
            <div class="projects-text-description">{description}</div>
          </div>
          <div
            class="projects-text-tech"
            style={{
              transform: flipData ? "scaleX(-1)" : "none",
            }}
          >
            {techStack}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
