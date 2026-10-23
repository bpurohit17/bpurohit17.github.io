import React, { useEffect } from "react";
import "./projects.css";
import ProjectItem from "./projectItem";
import { useInView } from "react-intersection-observer";
import Lightfall from "../../component/Lightfall.jsx";
import ScrollReveal from "../../component/ScrollReveal.jsx";
import FlexCarousel from "../../component/FlexCarousel.jsx";

const items = [
  { src: "/images/one.jpg", alt: "A chrome sculpture", title: "Iridescence" },
  {
    src: "/images/two.jpg",
    alt: "A figure on a white set",
    title: "White Room",
  },
  {
    src: "/images/three.jpg",
    alt: "A clay bust in profile",
    title: "Clay Study",
    subtitle: "Studio 04",
  },
];

const Projects = ({ setColor }) => {
  const { ref, inView } = useInView({
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView && setColor) {
      setColor("#fff7ae");
    }
  }, [inView, setColor]);

  const projects = [
    {
      title: "Bulko App",
      description: [
        "Bulko is a modern grocery delivery app that brings fresh produce, pantry staples, and household items directly to customers' doors. It features a user-friendly interface, secure authentication, smart search, seamless cart management, and real-time order tracking — all designed to make grocery shopping fast and convenient.",
      ],
      techStack: "Flutter | Hybrid Mobile App | Android | iOS",
      imageUrl: `${process.env.PUBLIC_URL}/images/bulko-img.png`,
      flipData: true,
      link: "https://bulko.in/",
      playstoreLink:
        "https://play.google.com/store/apps/details?id=com.lookatclay.bulko.user&pli=1",
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
    {
      title: "GWRE Indian Solar Website",
      description: [
        "GWRE is a digital platform for a renewable energy platform showcasing solar solutions for residential, commercial, and industrial customers.",
        "Built dynamic service listings, blog management, and informative content to improve customer engagement",
        "Integrated an LLM-powered chatbot delivering context-grounded responses to customer queries.",
        "Developed a dedicated CRM to manage website content, publish blogs, and centralize customer enquiries.",
      ],
      techStack: "React JS | Web App | REST API | SQL",
      // imageUrl: `${process.env.PUBLIC_URL}/videos/gwre_indian_solar_website.mp4`,
      media: [`${process.env.PUBLIC_URL}/videos/gwre_indian_solar_website.mp4`],
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
      title: "GWRE CRM and Training Dashboard",
      description: [
        "GWRE CRM and Training Dashboard is a portal for internal business operations, consolidating project intelligence, operational workflows, and structured employee onboarding within a unified system.",
        "Developed a full-stack platform implementing a timeline-driven dashboard providing granular visibility into daily project insights and operational performance, enabling users to examine the trends across different reporting periods.",
        "Incorporated in the same, a modular training ecosystem supporting video, PDF, and text-based lessons, comprehensive quizzes, and trainee performance tracking, enabling structured knowledge delivery and detailed monitoring of training progress.",
      ],
      techStack: "React JS | Web App | REST API | SQL",
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
    // {
    //   title: "Permit Planset Project",
    //   description: [
    //     "Permit is India's first automated platform for generating solar permit plans. It streamlines the traditionally manual 8–12 hour process into an automated, one-hour workflow. It generates ready-to-submit permit documents, including layouts and electrical line diagrams, tailored to local authority requirements.",
    //   ],
    //   techStack: "React JS | Web App | REST API | SQL",
    //   imageUrl: `${process.env.PUBLIC_URL}/images/planset-img.png`,
    //   flipData: true,
    //   link: "https://planset.gwrepermit.com/",
    // },
    {
      title: "BioTradX",
      description: [
        "A clean-tech B2B marketplace connecting biomass and biofuel suppliers with businesses to enable transparent, sustainable, and efficient green trade.",
        "Engineered a tiered B2B platform with real-time order management, geolocation-based buyer-seller discovery, and WebSocket-powered price negotiations, improving transaction efficiency by 40%.",
        "Integrated Firebase Authentication and Firebase Cloud Messaging (FCM) for secure login and real-time notifications, reducing authentication drop-off by 30%.",
        "Implemented seamless wallet transaction workflows across L1-L3 user tiers and deployed the application to production with zero critical post-launch issues.",
      ],
      techStack:
        "Flutter | Dart | GetX | Firebase | Maps API | WebSocket | Cashfree ",
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
        {
          src: `${process.env.PUBLIC_URL}/videos/biotradx-demo.mp4`,
          alt: "BioTradX app walkthrough",
          title: "App Demo",
          type: "video",
        },
      ],

      link: "https://devportfolio.biotradx.com/",
    },
    {
      title: "Just About Placements",
      description: [
        "Just About Placements (JAP) is a global recruitment and offshore workforce platform connecting businesses with skilled talent and streamlining hiring operations.",
        "Developed a full-stack platform featuring a public website and role-based CRM for managing jobs, candidates, blogs, and outsourced recruitment workflows.",
        "Built recruiter and candidate portals with job requests, approval workflows, advanced search and filtering, and application tracking.",
        "Implemented SEO metadata management and recruitment dashboards to improve content visibility and provide real-time hiring insights.",
      ],
      techStack: "React JS | Tailwind CSS | ASP.NET Web APIs | SQL Server",
      // imageUrl: `${process.env.PUBLIC_URL}/images/indian-solar-img.png`,
      media: [
        {
          src: `${process.env.PUBLIC_URL}/videos/JAP.mp4`,
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
      title: "JLDC",
      description: [
        "JLDC is a digital platform for Jakob's Legacy Data Centers, presenting its data center infrastructure and services through a professional web experience designed to communicate the company's offerings, establish its digital presence, and provide visitors with relevant business information.",
        "Developed a responsive website with a structured interface and cohesive visual design, enabling visitors to explore the company's services, understand its infrastructure-focused offerings, and navigate key business information through an intuitive browsing experience.",
      ],
      techStack: "React JS | Tailwind CSS | SQL",
      flipData: true,
      link: "https://jldc.co/",

      media: [
        {
          src: `${process.env.PUBLIC_URL}/videos/JLDC.mp4`,
          alt: "JLDC",
          title: "JLDC",
          type: "video",
        },
      ],
    },
  ];

  return (
    <section
      id="projects"
      ref={ref}
      className="relative isolate min-h-screen w-full overflow-hidden bg-black text-white"
    >
      {/* Animated background restricted to Projects */}
      {/* <div className="projects-background" aria-hidden="true">
        <Lightfall
          colors={["#dfd1fc", "#b497cf", "#8b3cd6"]}
          backgroundColor="#000000"
          speed={0.85}
          streakCount={2}
          streakWidth={0.6}
          twinkle={0.3}
          backgroundGlow={0.1}
          headGlow={0.55}
          bloom={0.3}
          mouseInteraction={true}
          holdToWarp={true}
          intro={true}
          streakLength={1}
          density={0.6}
          glow={0.75}
          depth={0.55}
          zoom={2}
          mouseStrength={0.4}
          mouseRadius={0.25}
          lens={0.65}
          fade={0.5}
          lightMode={false}
          className="h-full w-full"
        />
      </div> */}

      <div className="relative z-10 ">
        <FlexCarousel
          items={items}
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
      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 py-24 sm:px-8 lg:px-12">
        {/* Section heading */}
        <div className="mb-16 text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-purple-300">
            My Portfolio
          </p>

          <h2 className="text-3xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            Things I've Worked On,
            <span className="mt-2 block text-purple-300">Some of Them</span>
          </h2>

          <div className="mx-auto mt-6 h-1 w-24 rounded-full bg-purple-400" />

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-white/70 sm:text-lg">
            From pixels to prototypes, the skills behind every detail.
            <br /> A mix of creative thinking, problem-solving, and hands-on
            craft, developed through experimentation and shaped by real-world
            projects.
          </p>
        </div>

        {/* Project cards */}
        <div className="relative z-10 space-y-16 sm:space-y-24">
          {projects.map((project) => (
            <div key={project.title} className="relative z-10">
              <ProjectItem {...project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
