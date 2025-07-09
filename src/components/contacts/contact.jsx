import React, { useEffect } from "react";
import MediaQuery from "react-responsive";
// import "./contacts/contact.css";
import "../contacts/contact.css";
import { useInView } from "react-intersection-observer";
// const Contact = ({ setCurrActive }) => {
const Contact = ({ setColor }) => {
  //   useEffect(() => {
  //     setCurrActive("contact");
  //   }, [setCurrActive]);

  const { ref, inView } = useInView({ threshold: 0.5 });

  useEffect(() => {
    if (inView) {
      setColor("#fff7ae");
    }
  }, [inView, setColor]);

  return (
    <section id="contact" ref={ref}>
      <div style={{ backgroundColor: "#434343" }}>
        <div className="container-contact">
          <div style={{ maxWidth: "600px" }}>
            <div class="txt">Get in touch</div>
            <div class="title">Let's Work Together</div>
            <div class="txt" style={{ color: "#faebcd" }}>
              I'm open for new opportunities - especially ambitious or large
              projects. However, my inbox is always open. Whether you have a
              question or just want to say hi, I'll try my best to get back to
              you!.
            </div>
          </div>
          <a
            rel="noreferrer"
            target="_blank"
            href="mailto:bhagyashrip830@gmail.com"
          >
            <div class="contact_btn">Say Hello</div>{" "}
          </a>

          <div class="contact_git_section"></div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
