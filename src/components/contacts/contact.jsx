import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import Ballpit from "../../component/Ballpit";
import "../contacts/contact.css";

const Contact = ({ setColor }) => {
  const { ref, inView } = useInView({
    threshold: 0.2,
  });

  useEffect(() => {
    if (inView) {
      setColor?.("#fff7ae");
    }
  }, [inView, setColor]);

  return (
    <section id="contact" ref={ref} className="contact-section">
      <div className="container-contact">
        {/* Animated background */}
        <div className="contact-ballpit">
          <Ballpit
            count={120}
            colors={["#dfd1fc"]}
            material="matte"
            gravity={0}
            drift={1.1}
            followCursor
            grab
            clickEffect="burst"
            minSize={0.7}
            maxSize={1}
            friction={0.996}
            wallBounce={0.85}
            bounce={0.85}
            depth={2}
            cursorSize={1}
            lightColor="#6f2aa5"
            lightIntensity={0}
            exposure={1}
            shadows={0}
            intro
          />
        </div>

        {/* Foreground content */}
        <div className="contact-content">
          <div className="txt">Get in touch</div>

          <h2 className="title">Let's Work Together</h2>

          <p className="txt contact-description">
            I'm open to new opportunities, especially ambitious projects. My
            inbox is always open, whether you have a question, a project idea,
            or just want to say hi. I'll do my best to get back to you!
          </p>

          <a
            className="contact_btn"
            href="https://mail.google.com/mail/?view=cm&fs=1&to=bhagyashrip830@gmail.com&su=Opportunity%20to%20Connect"
            target="_blank"
            rel="noopener noreferrer"
          >
            Say Hello
          </a>
        </div>

        <div className="contact_git_section" />
      </div>
    </section>
  );
};

export default Contact;

// import React, { useEffect } from "react";
// import MediaQuery from "react-responsive";
// // import "./contacts/contact.css";
// import "../contacts/contact.css";
// import Ballpit from "../../component/Ballpit";
// import { useInView } from "react-intersection-observer";

// const Contact = ({ setColor }) => {
//   //   useEffect(() => {
//   //     setCurrActive("contact");
//   //   }, [setCurrActive]);

//   const { ref, inView } = useInView({ threshold: 0.5 });

//   useEffect(() => {
//     if (inView) {
//       setColor("#fff7ae");
//     }
//   }, [inView, setColor]);

//   return (
//     <section id="contact" ref={ref}>
//       <div>
//         <div className="container-contact">
//           <Ballpit
//             count={120}
//             colors={["#dfd1fc"]}
//             material="matte"
//             gravity={0}
//             drift={1.1}
//             followCursor
//             grab
//             clickEffect="burst"
//             minSize={0.7}
//             maxSize={1}
//             friction={0.996}
//             wallBounce={0.85}
//             bounce={0.85}
//             depth={2}
//             cursorSize={1}
//             lightColor="#6f2aa5"
//             lightIntensity={0}
//             exposure={1}
//             shadows={0}
//             intro
//           />

//           <div style={{ maxWidth: "600px" }}>
//             <div class="txt">Get in touch</div>
//             <div class="title">Let's Work Together</div>
//             <div class="txt" style={{ color: "#faebcd" }}>
//               I'm open for new opportunities - especially ambitious or large
//               projects. However, my inbox is always open. Whether you have a
//               question or just want to say hi, I'll try my best to get back to
//               you!.
//             </div>
//           </div>
//           <a
//             rel="noreferrer"
//             target="_blank"
//             href="https://mail.google.com/mail/?view=cm&fs=1&to=bhagyashrip830@gmail.com&su=Opportunity%20to%20Connect&body=Hi%20Bhagyashri%2C%0A%0AI%20came%20across%20your%20portfolio%20and%20wanted%20to%20connect%20with%20you%20regarding%20an%20opportunity.%0A%0ABest%20regards%2C%0A[Your%20Name]"
//           >
//             <div class="contact_btn">Say Hello</div>{" "}
//           </a>

//           <div class="contact_git_section"></div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;
