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
const ProjectItem = ({
  title,
  link,
  gitLink,
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

  // Convert every media item to the format MorphSlider expects.
  const sliderItems = useMemo(() => {
    const sourceItems = Array.isArray(media) ? media : [];

    const normalizedItems = sourceItems
      .map((item, index) => {
        const mediaObject = typeof item === "string" ? { src: item } : item;

        const src =
          mediaObject?.src || mediaObject?.image || mediaObject?.video;

        if (!src) return null;

        const type = mediaObject.type || (isVideoFile(src) ? "video" : "image");

        return {
          src,
          type,
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

    if (normalizedItems.length > 0) return normalizedItems;

    if (imageUrl) {
      return [
        {
          src: imageUrl,
          type: "image",
          caption: `${title} preview`,
        },
      ];
    }

    return [];
  }, [media, imageUrl, title]);

  const actionClass =
    "grid size-9 shrink-0 place-items-center rounded-lg border border-white/15 bg-white/[0.04] text-white/80 transition duration-200 hover:-translate-y-0.5 hover:border-[#8B3CD6]/70 hover:bg-[#8B3CD6]/15 hover:text-[#DFD1FC] motion-reduce:transition-none";

  return (
    <article
      className={`group relative isolate grid w-full min-w-0 grid-cols-1 items-center gap-6 overflow-hidden rounded-xl border border-[#DFD1FC]/15 bg-gradient-to-br from-[#6F2AA5]/15 via-[#100d16]/95 to-[#08080b]/95 p-[13px] shadow-[0_24px_70px_rgba(0,0,0,0.2)] transition duration-300 hover:border-[#8B3CD6]/35 hover:shadow-[0_28px_80px_rgba(0,0,0,0.34),0_0_36px_rgba(139,60,214,0.12)] motion-reduce:transition-none md:grid-cols-2 md:gap-7 md:rounded-2xl md:p-5 lg:gap-10 lg:p-7 xl:gap-[clamp(2rem,5vw,5.5rem)] ${
        flipData ? "md:[&_.project-visual]:order-2" : ""
      }`}
    >
      {/* Project media */}
      <div className="project-visual relative min-w-0">
        <div className="relative isolate aspect-[1/1.2] overflow-hidden rounded-xl border border-white/15 bg-[#111014] shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_18px_45px_rgba(0,0,0,0.25)] md:aspect-[1.68/1]">
          <div className="pointer-events-none absolute -inset-[15%] -z-10 bg-[#8B3CD6]/30 blur-[45px]" />

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
            <div className="grid size-full place-items-center text-center text-2xl font-bold text-[#DFD1FC]">
              {title}
            </div>
          )}

          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/25 via-transparent via-30% to-black/15" />

          {/* <span className="pointer-events-none absolute left-3 top-3 z-[4] rounded-md border border-white/20 bg-[#0c0b0f]/65 px-2.5 py-2 text-[8px] font-semibold tracking-[0.15em] text-white/90 backdrop-blur-xl sm:left-4 sm:top-4 sm:text-[9px]">
            {featuredText || "PROJECT / PORTFOLIO"}
          </span> */}
        </div>
      </div>

      {/* Project information */}
      <div
        className={`project-content min-w-0 py-1 md:py-2 ${
          flipData ? "md:order-1" : ""
        }`}
      >
        <div className="mb-4 flex flex-wrap items-start justify-between gap-3">
          <h3 className="min-w-0 break-words text-lg font-semibold leading-tight tracking-[-0.045em] text-white">
            <a
              className="text-white transition-colors duration-200 hover:text-[#DFD1FC]"
              href={link || undefined}
              target={link ? "_blank" : undefined}
              rel={link ? "noopener noreferrer" : undefined}
            >
              {title}
            </a>
          </h3>

          <div className="flex flex-wrap items-center gap-2">
            {playstoreLink && (
              <a
                className={actionClass}
                href={playstoreLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${title} on Google Play`}
                title="Google Play"
              >
                <FaGooglePlay size={15} />
              </a>
            )}

            {appStoreLink && (
              <a
                className={actionClass}
                href={appStoreLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${title} on the App Store`}
                title="App Store"
              >
                <FaAppStore size={20} />
              </a>
            )}

            {additionalPortalLinks.map((portal, index) => {
              const Icon = portalIconMap[portal.iconName] || FaExternalLinkAlt;

              if (!portal.link) return null;

              return (
                <a
                  key={`${portal.iconName}-${index}`}
                  className={actionClass}
                  href={portal.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={portal.label || `${title} portal ${index + 1}`}
                  title={portal.label || portal.iconName}
                >
                  <Icon size={17} />
                </a>
              );
            })}

            {link && (
              <a
                className="inline-flex h-fit items-center justify-center rounded-lg border border-[#8B3CD6]/45 bg-[#6F2AA5]/15 px-3 py-2 text-xs font-semibold text-[#DFD1FC] transition duration-200 hover:-translate-y-0.5 hover:border-[#DFD1FC]/70 hover:bg-[#8B3CD6]/25 motion-reduce:transition-none"
                href={link}
                target="_blank"
                rel="noopener noreferrer"
              >
                Explore project
              </a>
            )}
          </div>
        </div>

        <div className="relative rounded-r-xl border border-white/[0.09] border-l-2 border-l-[#8B3CD6]/80 bg-white/[0.035] p-4">
          {descriptions.length === 1 ? (
            <p className="m-0 text-[13px] leading-[1.8] text-[#f2eff7]/80 md:text-sm md:leading-[1.85]">
              {descriptions[0]}
            </p>
          ) : descriptions.length > 1 ? (
            <ul className="flex flex-col gap-3">
              {descriptions.map((item, index) => (
                <li
                  key={`${title}-description-${index}`}
                  className="relative pl-5 text-[13px] leading-7 text-white/75 sm:text-sm"
                >
                  <span className="absolute left-0 top-[11px] size-1.5 rounded-full bg-[#b497cf] shadow-[0_0_10px_rgba(180,151,207,0.4)]" />
                  {item}
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-sm text-white/50">
              Project details coming soon.
            </p>
          )}
        </div>

        {technologies.length > 0 && (
          <div className="mt-[22px] md:mt-[27px]">
            <span className="mb-3 block text-[9px] font-bold tracking-[0.2em] text-white/45">
              BUILT WITH
            </span>

            <div className="flex flex-wrap gap-2">
              {technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-md border border-[#8B3CD6]/25 bg-[#6F2AA5]/10 px-2.5 py-[7px] text-[11px] font-medium leading-snug text-[#DFD1FC] transition-colors duration-200 hover:border-[#8B3CD6]/60 hover:bg-[#8B3CD6]/20 hover:text-white motion-reduce:transition-none"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </article>
  );
};

export default ProjectItem;
