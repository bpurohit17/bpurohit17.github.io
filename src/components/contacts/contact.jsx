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
            href="https://mail.google.com/mail/?view=cm&fs=1&to=bhagyashrip830@gmail.com&su=Opportunity%20to%20Connect&body=Hi%20Bhagyashri%2C%0A%0AI%20came%20across%20your%20portfolio%20and%20wanted%20to%20connect%20with%20you%20regarding%20an%20opportunity.%0A%0ABest%20regards%2C%0A[Your%20Name]"
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
