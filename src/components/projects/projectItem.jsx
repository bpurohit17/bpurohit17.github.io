import React, { useEffect, useRef } from "react";
import "./ProjectItem.css";
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
  const descriptionRef = useRef(null);
  const imageWrapperRef = useRef(null);
  const techStackRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.innerWidth <= 768;
      const descriptionEl = descriptionRef.current;
      const imageEl = imageWrapperRef.current;
      const techEl = techStackRef.current;

      if (isMobile && descriptionEl && imageEl && techEl) {
        // Move image below description and above tech stack
        if (!techEl.parentNode.contains(imageEl)) {
          techEl.parentNode.insertBefore(imageEl, techEl);
        }
      }
      /*
      else {
        // On larger screens, move image back to the left section
        const leftContainer = document.querySelector(
          ".image-wrapper-container"
        );
        if (leftContainer && !leftContainer.contains(imageEl)) {
          leftContainer.appendChild(imageEl);
        }
      }
      */
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      className="project-item-container"
      style={{
        transform: flipData ? "scaleX(-1)" : "none",
      }}
    >
      <div
        className="image-wrapper-container"
        style={{
          transform: flipData ? "scaleX(-1)" : "none",
        }}
      >
        <div
          className="image-wrapper"
          ref={imageWrapperRef}
          style={{
            background: `url(${imageUrl}?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=564&q=80)`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
            ...(flipData && window.innerWidth <= 768
              ? { transform: "scaleX(-1)" }
              : {}),
          }}
        >
          <div className="left"></div>
        </div>
      </div>

      <div className="data">
        <div className="projects-text-side">
          <div
            className="projects-text-featured"
            style={{
              transform: flipData ? "scaleX(-1)" : "none",
            }}
          >
            {featuredText}
          </div>

          <div
            className="projects-text-title flex flex-row"
            style={{
              transform: flipData ? "scaleX(-1)" : "none",
            }}
          >
            <a href={link} target="_blank" rel="noreferrer">
              {title}
            </a>
          </div>

          <div
            className="right"
            style={{
              transform: flipData ? "scaleX(-1)" : "none",
            }}
          >
            <div className="projects-text-description" ref={descriptionRef}>
              {description}
            </div>
          </div>

          {/* Image will be inserted below description and above techStack on mobile */}
          <div ref={techStackRef}></div>

          <div
            className="projects-text-tech"
            style={{
              transform: flipData ? "scaleX(-1)" : "none",
              paddingBottom: "4px",
            }}
          >
            {techStack}
          </div>

          <div
            className="social"
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
                <FaGooglePlay color="white" className="mb-6" size={18} />
              </a>
            )}

            {appStoreLink && (
              <a rel="noreferrer" target="_blank" href={appStoreLink}>
                <FaAppStore color="white" className="mb-6" size={20} />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;

/*
import React, { useEffect, useRef } from "react";
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
  const descriptionRef = useRef(null);
  const imageWrapperRef = useRef(null);
  const techStackRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.innerWidth <= 768;
      const descriptionEl = descriptionRef.current;
      const imageEl = imageWrapperRef.current;
      const techEl = techStackRef.current;

      if (isMobile && descriptionEl && imageEl && techEl) {
        // Move image below description and above tech stack
        if (!techEl.parentNode.contains(imageEl)) {
          techEl.parentNode.insertBefore(imageEl, techEl);
        }
      } else {
        // On larger screens, move image back to the left section
        const leftContainer = document.querySelector(
          ".image-wrapper-container"
        );
        if (leftContainer && !leftContainer.contains(imageEl)) {
          leftContainer.appendChild(imageEl);
        }
      }
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      class="project-item-container"
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
*/
