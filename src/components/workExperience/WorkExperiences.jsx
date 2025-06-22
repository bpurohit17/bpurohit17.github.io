import React, { useEffect } from "react";
import MediaQuery from "react-responsive";
import "./work_experience.css";
// import { faCheckCircle, faStar } from "react-icons/fa";
import { faCheckCircle, faStar } from "@fortawesome/free-solid-svg-icons";
import { tr } from "framer-motion/client";
import { useInView } from "react-intersection-observer";

// import { canvas } from "../../../public/images/canvas.svg";
// import { canvas_2 } from "../../../public/images/canvas_2.svg";

// const Contact = ({ setCurrActive }) => {

const experiences = [
  {
    company: "Team Green Force Inc.",
    iconClass: "novo",
    roles: [
      {
        title: "Senior IT Developer",
        date: "June 2025 – Present ", // (3 m)
        location: "Navi Mumbai, India",
        type: "Full-Time",
        isVerified: true,
        isStarred: false,
        faded: false,
        hasMultipleRoles: false,
      },
      {
        title: "Lead Developer",
        date: "May 2024 – May 2025",
        location: "Navi Mumbai, India",
        type: "",
        isVerified: true,
        isStarred: false,
        faded: false,
        hasMultipleRoles: false,
      },
    ],
  },
  {
    company: "Alphonsol Pvt. Ltd.",
    iconClass: "postman",
    roles: [
      {
        title: "Flutter Developer",
        date: "May 2023 – May 2024 (1 yr)",
        location: "Mumbai, India",
        type: "Full-Time",
        isVerified: true,
        isStarred: true,
        faded: true,
        hasMultipleRoles: true,
      },

      //   {
      //     title: "Software Engineer II",
      //     date: "May 2021 – Aug 2023 (2 yr, 3 m)",
      //     location: "Bengaluru, India",
      //     type: "Full-Time",
      //     isVerified: true,
      //     isStarred: true,
      //     faded: false,
      //     hasMultipleRoles: true,
      //   },
      //   {
      //     title: "Software Engineer",
      //     date: "Jul 2019 – Apr 2021 (1 yr, 9 m)",
      //     location: "Bengaluru, India",
      //     isVerified: true,
      //     isStarred: false,
      //     // faded: true,
      //     faded: false,
      //     hasMultipleRoles: true,
      //   },
      //   {
      //     title: "Software Engineering Intern",
      //     date: "Dec 2018 – Jun 2019 (6 m)",
      //     location: "Bengaluru, India",
      //     isVerified: true,
      //     isStarred: false,
      //     // faded: true,
      //     faded: false,
      //     hasMultipleRoles: true,
      //   },
    ],
  },
];

const WorkExperiences = ({ setColor }) => {
  const { ref, inView } = useInView({ threshold: 0.5 });

  useEffect(() => {
    if (inView) {
      setColor("#fff7ae");
    }
  }, [inView, setColor]);

  //   useEffect(() => {
  //     setCurrActive("contact");
  //   }, [setCurrActive]);

  //   const totalRoles = experiences.reduce(
  //     (acc, company) => acc + company.roles.length,
  //     0
  //   );
  //   const hasMultipleRoles = experiences.some(
  //     (company) => company.roles.length > 1
  //   );
  //   //   const hasMultipleRoles = experiences.roles > 1;

  //   console.log(hasMultipleRoles);
  return (
    <section id="experience" ref={ref}>
      <div className="experience-container">
        <h2>Experience</h2>
        <div className="timeline">
          {/* <div className={`timeline ${hasMultipleRoles > 1 ? "with-border" : ""}`}> */}
          {experiences.map((company, companyIndex) => (
            <div className="company-group" key={companyIndex}>
              <div className="timeline-icon">
                <div className={`company-icon ${company.iconClass}`} />
              </div>

              <div className="company-roles">
                <h3 className="company-name">{company.company}</h3>

                {company.roles.map((role, roleIndex) => (
                  <div
                    key={roleIndex}
                    className={`timeline-item ${role.faded ? "faded" : ""}`}
                  >
                    <div className="timeline-content">
                      {roleIndex < company.company.length && (
                        <div className="job-curve">
                          <svg
                            width="25"
                            height="32"
                            viewBox="0 0 25 32"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M25 31H17.8C8.512 31 0.999999 21.297 0.999999 9.3V6.2V9.53674e-07"
                              stroke="#E3E5E6"
                              stroke-width="1.5"
                              stroke-linejoin="round"
                            />
                          </svg>
                        </div>
                      )}
                      <h3>
                        {role.title}

                        {role.isVerified && (
                          <faCheckCircle className="verified-icon" />
                        )}

                        {role.isStarred && <faStar className="star-icon" />}
                      </h3>
                      <p className="date">
                        {role.date}
                        {role.location && ` • ${role.location}`}
                        {role.type && ` • ${role.type}`}
                      </p>
                    </div>

                    {/* Show job-curve only between items */}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    ///////////////////////////////////////////////////////////

    // <div>
    //   <img
    //     src="/images/canvas_2.svg"
    //     width={100}
    //     alt="canvas 2"
    //     style={{ width: "100%", display: "block" }}
    //   />
    //   <div className="container-work" style={{ backgroundColor: "#F96353" }}>
    //     <div style={{ maxWidth: "600px" }}>
    //       <div class="txt">Experience</div>
    //       <div class="title">Let's Work Together</div>
    //       <div class="txt" style={{ color: "#faebcd" }}>
    //         I'm open for new opportunities - especially ambitious or large
    //         projects. However, my inbox is always open. Whether you have a
    //         question or just want to say hi, I'll try my best to get back to
    //         you!.
    //       </div>
    //     </div>
    //     <div class="contact_btn">Say Hello</div>
    //     <div class="contact_git_section"></div>
    //   </div>
    //   <img
    //     src="/images/canvas.svg"
    //     alt="canvas"
    //     style={{ width: "100%", display: "block" }}
    //   />
    // </div>
    // <svg
    //   width="41"
    //   height="52"
    //   viewBox="0 0 41 52"
    //   fill="none"
    //   xmlns="http://www.w3.org/2000/svg"
    // >
    //   <path
    //     d="M41 49H29.6C14.894 49 3 33.663 3 14.7V9.8V0"
    //     stroke="#292D32"
    //     strokeWidth="5"
    //     strokeLinejoin="round"
    //   />
    // </svg>
  );
};

export default WorkExperiences;
