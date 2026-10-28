import React, { useEffect } from "react";
import ProjectItem from "./projectItem";
import { useInView } from "react-intersection-observer";
import Lightfall from "../../component/Lightfall.jsx";
import ScrollReveal from "../../component/ScrollReveal.jsx";
import AnimatedText, { RevealLine } from "../../component/AnimatedText.jsx";
import FlexCarousel from "../../component/FlexCarousel.jsx";
import ScrollStack, { ScrollStackItem } from "../../component/ScrollStack.jsx";

const Projects = ({ setColor }) => {
  const { ref, inView } = useInView({
    threshold: 0.1,
  });

  const projects = [
    {
      title: "JLDC",
      description: [
        "JLDC is a digital platform for Jakob's Legacy Data Centers, presenting its data center infrastructure and services through a professional web experience designed to communicate the company's offerings, establish its digital presence, and provide visitors with relevant business information.",
        "Developed a responsive website with a structured interface and cohesive visual design, enabling visitors to explore the company's services, understand its infrastructure-focused offerings, and navigate key business information through an intuitive browsing experience.",
      ],
      techStack: "React JS | Tailwind CSS",
      flipData: true,
      link: "https://jldc.co/",
      media: [
        {
          src: `${process.env.PUBLIC_URL}/videos/JLDC-final.mp4`,
          alt: "JLDC",
          title: "JLDC",
          type: "video",
          autoplay: false,
        },
      ],
    },
    {
      title: "JAP",
      description: [
        "Just About Placements (JAP) is a global recruitment and offshore workforce platform connecting businesses with skilled talent and streamlining hiring operations.",
        "Developed a full-stack platform featuring a public website and role-based CRM for managing jobs, candidates, blogs, and outsourced recruitment workflows.",
        "Built recruiter and candidate portals with job requests, approval workflows, advanced search and filtering, and applications tracking with implemented SEO metadata and recruitment dashboards.",
      ],
      techStack: "React JS | Tailwind CSS | ASP.NET Web APIs | SQL Server",
      media: [
        {
          src: `${process.env.PUBLIC_URL}/videos/JAP_final.mp4`,
          alt: "Just About Placements platform walkthrough",
          title: "Platform Demo",
          type: "video",
          autoplay: false,
        },
      ],

      flipData: true,
      link: "https://justaboutplacements.com/",
      additionalPortalLinks: [
        {
          link: "https://crm.justaboutplacements.com/",
          iconName: "BsWindowDock",
          label: "JAP CRM",
        },
        {
          link: "https://justaboutplacements.com/login",
          iconName: "TbUserScan",
          label: "JAP Employee Portal",
        },
        {
          link: "https://recruite.justaboutplacements.com/",
          iconName: "LuMonitorCog",
          label: "JAP Recruiter Portal",
        },
      ],
    },
    {
      title: "BioTradX",
      description: [
        "A clean-tech B2B marketplace connecting biomass and biofuel suppliers with businesses to enable transparent, sustainable, and efficient green trade.",
        "Engineered a tiered B2B platform with real-time order management, geolocation-based buyer-seller discovery (Firebase Authenticated), and WebSocket-powered price negotiations, improving transaction efficiency by 40% with real-time notifications using Firebase Cloud Messaging (FCM).",
        // "Integrated Firebase Authentication and Firebase Cloud Messaging (FCM) for secure login and real-time notifications, reducing authentication drop-off by 30%.",
        "Implemented seamless wallet transaction workflows across L1-L3 user tiers and deployed the application to production with zero critical post-launch issues.",
      ],
      techStack:
        "Flutter | Dart | GetX | Firebase | Maps API | WebSocket | Cashfree | Java Spring Boot | MySQL | REST API",
      imageUrl: `${process.env.PUBLIC_URL}/images/biotradx-img.png`,
      media: [
        {
          src: `${process.env.PUBLIC_URL}/images/biotradx-img.png`,
          alt: "BioTradX application preview",
          title: "BioTradX",
          type: "image",
        },
        {
          src: `${process.env.PUBLIC_URL}/images/biotradx-screen-2.png`,
          alt: "BioTradX application screen",
          title: "Application Screen",
          type: "image",
        },
      ],
      link: "https://biotradx.com/",
      playstoreLink:
        "https://play.google.com/store/apps/details?id=com.bioplanet.biotradx",
      appStoreLink: "https://apps.apple.com/in/app/biotradx/id6754695624",
      additionalPortalLinks: [
        {
          link: "https://webapp.biotradx.com/",
          iconName: "BsWindowDock",
          label: "BioTradX Web Portal",
        },
      ],
    },
    {
      title: "GWRE Indian Solar Website",
      description: [
        "GWRE is a digital platform for a renewable energy platform showcasing solar solutions for residential, commercial, and industrial customers.",
        "Built dynamic service listings, blog management, and informative content to improve customer engagement",
        "Integrated an LLM-powered chatbot delivering context-grounded responses to customer queries.",
        "Developed a dedicated CRM to manage website content, publish blogs, and centralize customer enquiries.",
      ],
      techStack: "React JS | REST APIs | SQL Server",
      // imageUrl: `${process.env.PUBLIC_URL}/videos/gwre_indian_solar_website.mp4`,
      media: [
        {
          src: `${process.env.PUBLIC_URL}/videos/gwre_indian_solar_website.mp4`,
          alt: "Indian Solar",
          title: "Indian Solar",
          type: "video",
          autoplay: false,
        },
      ],
      flipData: true,
      link: "https://greenworld-energy.in/",
      additionalPortalLinks: [
        {
          link: "https://gwrewebsitebackend.gwrepermit.com/",
          iconName: "BsWindowDock",
          label: "GWRE indian solar CRM",
        },
      ],
    },
    {
      title: "Green Force App",
      description: [
        "Green Force is a platform that connects solar companies and independent surveyors. It provides a technology-enabled service for solar site surveys, which are essential for evaluating rooftop or ground-mounted solar panel installations.",
      ],
      techStack: "Flutter | Hybrid Mobile App | Android | iOS",
      imageUrl: `${process.env.PUBLIC_URL}/images/tgf-img.png`,
      link: "https://play.google.com/store/apps/developer?id=TEAM+GREEN+FORCE+INC.&hl=en_IN",
      playstoreLink:
        "https://play.google.com/store/apps/developer?id=TEAM+GREEN+FORCE+INC.&hl=en_IN",
      appStoreLink:
        "https://apps.apple.com/in/developer/team-green-force-inc/id1719754974",
    },
    // {
    //   title: "Bulko App",
    //   description: [
    //     "Bulko is a modern grocery delivery app that brings fresh produce, pantry staples, and household items directly to customers' doors. It features a user-friendly interface, secure authentication, smart search, seamless cart management, and real-time order tracking — all designed to make grocery shopping fast and convenient.",
    //   ],
    //   techStack: "Flutter | Hybrid Mobile App | Android | iOS",
    //   imageUrl: `${process.env.PUBLIC_URL}/images/bulko-img.png`,
    //   flipData: true,
    //   link: "https://bulko.in/",
    //   playstoreLink:
    //     "https://play.google.com/store/apps/details?id=com.lookatclay.bulko.user&pli=1",
    // },
    {
      title: "GWRE CRM and Training Dashboard",
      description: [
        "GWRE CRM and Training Dashboard is a portal for internal business operations, consolidating project intelligence, operational workflows, and structured employee onboarding within a unified system.",
        "Developed a full-stack platform implementing a timeline-driven dashboard providing granular visibility into daily project insights and operational performance, enabling users to examine the trends across different reporting periods.",
        "Incorporated in the same, a modular training ecosystem supporting video, PDF, and text-based lessons, comprehensive quizzes, and trainee performance tracking, enabling structured knowledge delivery and detailed monitoring of training progress.",
      ],
      techStack: "React JS | ASP.NET Web APIs | SQL Server | Tailwind CSS",
      flipData: true,
      link: "https://gwrecrm.gwrepermit.com/",
      additionalPortalLinks: [
        {
          link: "https://gwre-training.gwrepermit.com/",
          iconName: "BsWindowDock",
          label: "Training Dashboard",
        },
      ],
      media: [
        {
          src: `${process.env.PUBLIC_URL}/videos/gwre_crm_dashboard.mp4`,
          alt: "GWRE CRM Dashboard",
          title: "GWRE CRM",
          type: "video",
        },
        {
          src: `${process.env.PUBLIC_URL}/videos/training_portal.mp4`,
          alt: "Training Dashboard",
          title: "GWRE CRM Training Dashboard",
          type: "video",
        },
      ],
    },
  ];

  return (
    <section
      id="projects"
      ref={ref}
      className="relative isolate min-h-screen w-full overflow-x-clip bg-black text-white"
      // className="relative isolate min-h-screen w-full overflow-hidden bg-black text-white"
    >
      <div className="relative z-10 ">
        <FlexCarousel
          preset="liquid"
          intro="rise"
          cardHeight={0.5}
          gap={12}
          squeeze={0.2}
          focusOnClick
          captions
          fit="natural"
          radius={0}
          lensWidth={0.74}
          lensHeight={1.18}
          tilt={62}
          roundness={1}
          bend={0.34}
          reach={0.38}
          curl="twist"
          dispersion={0.45}
          liquid={0}
          followCursor={false}
          autoplay={false}
          interval={4}
          captureWheel
        />
      </div>

      {/* Projects content above the background */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12">
        {/* Section heading */}
        <div className="text-center">
          <AnimatedText
            as="p"
            text="My Portfolio"
            stagger={0.12}
            className="mt-16 mb-4 text-[11px] md:text-sm font-medium md:font-semibold uppercase tracking-[0.3em] text-purple-300"
          />

          <h2 className="text-2xl font-bold leading-tight tracking-tight sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
            <AnimatedText
              as="span"
              text="Things I've Worked On,"
              className="block"
              delay={0.1}
            />
            <AnimatedText
              as="span"
              text="Some of Them"
              shimmer
              delay={0.45}
              className="mt-2 block"
            />
          </h2>

          <RevealLine className="mx-auto mt-6 h-1 w-24 rounded-full bg-purple-400" />

          <AnimatedText
            as="p"
            text="From pixels to prototypes, the skills behind every detail. A mix of creative thinking, problem-solving, and hands-on craft, developed through experimentation and shaped by real-world projects."
            stagger={0.025}
            duration={0.7}
            delay={0.6}
            className="mx-auto max-w-[340px] xs:max-w-full md:max-w-2xl lg:max-w-3xl xl:max-w-4xl px-2 sm:px-4 text-center text-sm leading-6 sm:leading-7 xl:leading-8 text-white/70 xs:text-base md:text-lg xl:text-xl mt-4 xs:mt-5 sm:mt-6 lg:mt-7"
          />
        </div>
        <div className="mt-4 md:mt-6 lg:mt-10 h-auto w-full md:h-[850px]">
          <ScrollStack>
            {projects.map((project) => (
              <ScrollStackItem key={project.title}>
                <ProjectItem {...project} />
              </ScrollStackItem>
            ))}
          </ScrollStack>
        </div>
      </div>
    </section>
  );
};

export default Projects;
