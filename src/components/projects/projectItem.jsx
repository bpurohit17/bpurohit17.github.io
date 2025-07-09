import React, { useEffect } from "react";
import MediaQuery from "react-responsive";
import "./ProjectItem.css";
import { ArrowUpRight } from "@geist-ui/react-icons";
import { Github, ExternalLink } from "@geist-ui/react-icons";
import { FaGooglePlay, FaAppStore } from "react-icons/fa";

const ProjectItem = ({
  title,
  link,
  gitLink,
  playstoreLink,
  appStoreLink,
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
            class="projects-text-title flex flex-row"
            style={{
              transform: flipData ? "scaleX(-1)" : "none",
            }}
          >
            <a href={link} target="_blank">
              {title}
              {/* <ArrowUpRight size={16} style={{ marginLeft: "8px" }} /> */}
            </a>
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
              paddingBottom: "4px",
            }}
          >
            {techStack}
          </div>
          <div
            class="flex flex-row gap-4 pt-4"
            style={{
              transform: flipData ? "scaleX(-1)" : "none",
            }}
          >
            {gitLink && (
              <a rel="noreferrer" target="_blank" href={gitLink}>
                <Github
                  color="white"
                  className="mb-6"
                  strokeWidth={2}
                  size={20}
                />
              </a>
            )}

            <a rel="noreferrer" target="_blank" href={link}>
              <ExternalLink
                color="white"
                className="mb-6"
                strokeWidth={2}
                size={20}
              />
            </a>
            {playstoreLink && (
              <a rel="noreferrer" target="_blank" href={playstoreLink}>
                <FaGooglePlay
                  color="white"
                  className="mb-6"
                  strokeWidth={2}
                  size={18}
                />
              </a>
            )}
            {appStoreLink && (
              <a rel="noreferrer" target="_blank" href={appStoreLink}>
                <FaAppStore
                  color="white"
                  className="mb-6"
                  strokeWidth={2}
                  size={20}
                />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
