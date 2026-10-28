import React, { useMemo } from "react";
import MorphSlider from "../../component/MorphSlider";
import {
  FaGooglePlay,
  FaAppStore,
  FaGlobe,
  FaUserTie,
  FaBriefcase,
  FaExternalLinkAlt,
  FaGraduationCap,
  FaReact,
  FaGithub,
} from "react-icons/fa";
import { BsWindowDock } from "react-icons/bs";
import { TbUserScan } from "react-icons/tb";
import { LuMonitorCog } from "react-icons/lu";

const isVideoFile = (src = "") => /\.(mp4|webm|ogg|mov)(\?.*)?$/i.test(src);

const portalIconMap = {
  FaGlobe,
  BsWindowDock,
  FaUserTie,
  FaBriefcase,
  FaExternalLinkAlt,
  FaGraduationCap,
  FaReact,
  FaGithub,
  TbUserScan,
  LuMonitorCog,
};

const glassActionClass =
  "relative grid size-10 shrink-0 place-items-center overflow-hidden rounded-xl border border-white/[0.13] bg-[linear-gradient(145deg,rgba(255,255,255,0.09),rgba(255,255,255,0.015))] text-white/75 shadow-[inset_0_1px_0_rgba(255,255,255,0.12),0_5px_12px_rgba(0,0,0,0.22)]";

const GlassAction = ({ href, label, title, children }) => {
  if (!href) return null;

  return (
    <a
      className={glassActionClass}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      title={title}
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-2 top-0 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent"
      />
      <span className="relative z-[1]">{children}</span>
    </a>
  );
};

const ProjectItem = ({
  title,
  link,
  playstoreLink,
  appStoreLink,
  additionalPortalLinks = [],
  description,
  techStack,
  imageUrl,
  media = [],
  autoplay,
  featuredText = "Featured Project",
  flipData = false,
}) => {
  const technologies = Array.isArray(techStack)
    ? techStack
    : typeof techStack === "string"
    ? techStack
        .split("|")
        .map((tech) => tech.trim())
        .filter(Boolean)
    : [];

  const descriptions = Array.isArray(description)
    ? description.filter(Boolean)
    : description
    ? [description]
    : [];

  const sliderItems = useMemo(() => {
    const normalizedItems = (Array.isArray(media) ? media : [])
      .map((item, index) => {
        const mediaObject = typeof item === "string" ? { src: item } : item;
        const src =
          mediaObject?.src || mediaObject?.image || mediaObject?.video;

        if (!src) return null;

        return {
          src,
          type: mediaObject.type || (isVideoFile(src) ? "video" : "image"),
          caption:
            mediaObject.caption ||
            mediaObject.title ||
            mediaObject.alt ||
            `${title} preview ${index + 1}`,
          poster: mediaObject.poster,
          autoplay: mediaObject.autoplay,
        };
      })
      .filter(Boolean);

    if (normalizedItems.length) return normalizedItems;

    return imageUrl
      ? [{ src: imageUrl, type: "image", caption: `${title} preview` }]
      : [];
  }, [media, imageUrl, title]);

  const otherLinksCount =
    (playstoreLink ? 1 : 0) +
    (appStoreLink ? 1 : 0) +
    additionalPortalLinks.filter((portal) => portal.link).length;

  return (
    <article
      className={`project-card group relative isolate grid w-full min-w-0 grid-cols-1 items-center gap-6 overflow-hidden rounded-2xl 
        border border-white/[0.13] bg-[#0b0910] p-3 md:grid-cols-2 md:gap-7 md:p-5 lg:gap-10 lg:p-7 xl:gap-[clamp(2rem,5vw,5.5rem)]
        shadow-[inset_0_1px_0_rgba(255,255,255,0.10),inset_0_-1px_0_rgba(0,0,0,0.8),0_24px_65px_rgba(0,0,0,0.38),0_0_45px_rgba(111,42,165,0.07)] `}
      // ${flipData ? "md:[&_.project-visual]:order-2" : ""}
    >
      {/* Static glass material */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 rounded-[inherit] bg-[linear-gradient(145deg,rgba(139,60,214,0.14)_0%,rgba(255,255,255,0.045)_16%,transparent_43%,rgba(139,60,214,0.035)_78%,rgba(0,0,0,0.18)_100%)]"
      />

      {/* Broad, static light reflections */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 rounded-[inherit] bg-[radial-gradient(ellipse_at_0%_0%,rgba(186,139,255,0.13),transparent_42%),radial-gradient(ellipse_at_100%_100%,rgba(111,42,165,0.12),transparent_40%)]"
      />

      {/* Inner glass rim */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 rounded-[inherit] border border-white/[0.035] shadow-[inset_0_1px_0_rgba(255,255,255,0.09),inset_0_0_45px_rgba(255,255,255,0.012)]"
      />

      {/* Top specular highlight */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-8 top-0 z-[2] h-px bg-gradient-to-r from-transparent via-[#E8D8FF]/60 to-transparent"
      />

      {/* Project information */}
      <div
        className={`project-content relative z-[1] order-first min-w-0 py-1 md:order-none md:py-2 ${
          flipData ? "md:order-1" : ""
        }`}
      >
        {/* Heading and external links */}
        <div className="flex flex-row w-full items-center gap-4 justify-between mb-5">
          <h3 className="m-0 break-words text-md lg:text-xl font-semibold leading-tight tracking-[-0.045em] text-white">
            {link ? (
              <a
                className="text-white"
                href={link}
                target="_blank"
                rel="noopener noreferrer"
              >
                {title}
              </a>
            ) : (
              title
            )}
          </h3>
          <div className="flex flex-wrap items-center gap-2">
            {playstoreLink && (
              <GlassAction
                href={playstoreLink}
                label={`${title} on Google Play`}
                title="Google Play"
              >
                <FaGooglePlay size={15} />
              </GlassAction>
            )}
            {appStoreLink && (
              <GlassAction
                href={appStoreLink}
                label={`${title} on the App Store`}
                title="App Store"
              >
                <FaAppStore size={19} />
              </GlassAction>
            )}
            {additionalPortalLinks.map((portal, index) => {
              const Icon = portalIconMap[portal.iconName] || FaExternalLinkAlt;

              return portal.link ? (
                <GlassAction
                  key={`${portal.iconName}-${index}`}
                  href={portal.link}
                  label={portal.label || `${title} portal ${index + 1}`}
                  title={portal.label || portal.iconName}
                >
                  <Icon size={17} />
                </GlassAction>
              ) : null;
            })}
            {/* Primary project link */}
            {/* {link && (
              <div className="">
                <a
                  className="inline-flex min-h-10 items-center gap-3 rounded-xl border border-[#C5A6F5]/30 px-4 py-2.5 
                    text-xs font-semibold text-[#E8D9FF] bg-[linear-gradient(135deg,rgba(139,60,214,0.22),rgba(139,60,214,0.07))] 
                    shadow-[inset_0_1px_0_rgba(255,255,255,0.12),0_5px_14px_rgba(0,0,0,0.15)]"
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Explore project
                </a>
              </div>
            )} */}
          </div>
        </div>
        {/* Description glass panel */}
        <div
          className="relative overflow-hidden rounded-xl p-2 md:p-3 border border-white/[0.105] 
          bg-[linear-gradient(135deg,rgba(255,255,255,0.055),rgba(255,255,255,0.018)_60%,rgba(139,60,214,0.045))]
          shadow-[inset_0_1px_0_rgba(255,255,255,0.055),0_8px_20px_rgba(0,0,0,0.12)]"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute bottom-3 left-0 top-3 w-[2px] rounded-full bg-gradient-to-b from-[#D7BCFF]/75 via-[#8B3CD6]/55 to-transparent"
          />
          {descriptions.length === 1 ? (
            <p className="m-0 pl-1 leading-[1.85] text-[#EAE4F1]/80 text-xs md:text-sm">
              {descriptions[0]}
            </p>
          ) : descriptions.length > 1 ? (
            <ul className="m-0 flex list-none flex-col gap-3 p-0 pl-0.5 sm:pl-1">
              {descriptions.map((item, index) => (
                <li
                  key={`${title}-description-${index}`}
                  className="relative pl-4 md:pl-5 text-xs md:text-sm leading-[1.85] text-[#EAE4F1]/80"
                >
                  <span className="absolute left-0 top-[9px] size-1.5 rounded-full bg-[#C5A6F5]/90" />
                  {item}
                </li>
              ))}
            </ul>
          ) : (
            <p className="m-0 pl-1 text-sm text-white/45">
              Project details coming soon.
            </p>
          )}
        </div>

        {/* Technology stack */}
        {technologies.length > 0 && (
          <div className="mt-6 md:mt-7">
            <div className="mb-3 flex items-center gap-3">
              <span className="text-[9px] font-bold uppercase tracking-[0.22em] text-white/45">
                Built with
              </span>
              <span className="h-px flex-1 bg-gradient-to-r from-white/[0.12] to-transparent" />
            </div>

            <div className="flex flex-wrap gap-2">
              {technologies.map((tech) => (
                <span
                  key={tech}
                  className="inline-flex items-center rounded-lg border border-[#C5A6F5]/20 bg-[linear-gradient(145deg,rgba(139,60,214,0.12),rgba(255,255,255,0.025))] px-3 py-2 text-[11px] font-medium leading-snug text-[#DCCBF6]/90 shadow-[inset_0_1px_0_rgba(255,255,255,0.055)]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Media frame */}
      <div className="project-visual relative z-[1] order-last min-w-0 md:order-none">
        <div className="relative isolate aspect-[4/3] w-full min-w-0 overflow-hidden rounded-xl border border-white/10 bg-[#100d15] shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] sm:rounded-2xl md:aspect-[1.4/1] lg:aspect-[1.55/1] xl:aspect-[1.68/1]">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -inset-[12%] -z-10 bg-[#8B3CD6]/25 blur-[45px]"
          />
          {sliderItems.length > 0 ? (
            <MorphSlider
              items={sliderItems}
              transition="melt"
              intensity={0.55}
              aberration={0.35}
              drift={0.4}
              autoplay={
                sliderItems.length === 1 && sliderItems[0].type === "video"
                  ? sliderItems[0].autoplay !== false
                  : autoplay
              }
              overlayColor="#05060a"
              duration={1.1}
              ease="power2.inOut"
              scale={2.4}
              loop
              radius={16}
              showControls={sliderItems.length > 1}
              showIndicators={sliderItems.length > 1}
              showCaptions={false}
              className="absolute inset-0"
            />
          ) : (
            <div className="grid size-full place-items-center bg-[radial-gradient(ellipse_at_center,rgba(139,60,214,0.15),transparent_70%)] px-6 text-center text-2xl font-semibold tracking-tight text-[#DFD1FC]">
              {title}
            </div>
          )}
          {/* Static cinematic overlay */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.12),transparent_20%,transparent_72%,rgba(0,0,0,0.20))]"
          />
          {/* Media glass rim */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 rounded-[inherit] border border-white/[0.055] shadow-[inset_0_1px_0_rgba(255,255,255,0.14),inset_0_-1px_0_rgba(0,0,0,0.3)]"
          />
          {featuredText && (
            <div className="pointer-events-none absolute left-3 top-3 z-[4] sm:left-4 sm:top-4">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/[0.15] bg-[#100d15]/65 px-3 py-1.5 text-[9px] font-semibold tracking-[0.12em] text-white/85 shadow-[inset_0_1px_0_rgba(255,255,255,0.12),0_4px_12px_rgba(0,0,0,0.2)] backdrop-blur-xl">
                <span className="size-1.5 rounded-full bg-[#C4A1FF] shadow-[0_0_8px_rgba(196,161,255,0.45)]" />
                {featuredText}
              </span>
            </div>
          )}
        </div>
      </div>
    </article>
  );
};

export default ProjectItem;
