"use client";

import React, { memo } from "react";
import Image from "next/image";

import { BlackCard } from "../cards";

import { TECHNOLOGY_STACK } from "@/utils/arrays";
import { SECTION_GAPS } from "@/utils/common-styles";
import addLineBreaks from "@/utils/add-line-break";

const cx = (...xs) => xs.filter(Boolean).join(" ");
const slug = (s = "") =>
  s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

const CARD_RADIUS =
  "rounded-[0.35rem] md:rounded-[0.75rem] lg:rounded-[1.2rem]";
const PANEL_BORDER = "border border-Border-Tertiary";
const BLOCK_GAPS = "flex flex-col gap-[4rem] md:gap-[6rem] lg:gap-[16rem]";
const P_DESC =
  "text-Content-Secondary text-sm lg:text-base leading-5 lg:leading-6 lg:max-w-[40rem] md:px-10 lg:px-0";

const SectionHeader = memo(function SectionHeader({
  title,
  subtitle,
  desc,
  anchorId,
}) {
  return (
    <header
      className="flex flex-col gap-2 md:gap-5 lg:gap-6 justify-center items-center text-center"
      aria-labelledby={anchorId}
    >
      <h2 id={anchorId} className="h2-title">
        {addLineBreaks(title)}
      </h2>
      {subtitle ? (
        <p className="p-subtitle">{addLineBreaks(subtitle)}</p>
      ) : null}
      {desc ? <p className={P_DESC}>{addLineBreaks(desc)}</p> : null}
    </header>
  );
});

const SectionImage = memo(function SectionImage({
  src,
  alt,
  priority = false,
  className = "",
}) {
  return (
    <Image
      src={src}
      alt={alt || "illustration"}
      width={1920}
      height={1080}
      priority={priority}
      loading={priority ? undefined : "lazy"}
      decoding="async"
      className={cx(CARD_RADIUS, PANEL_BORDER, "fade-bottom-25", className)}
    />
  );
});

const ListItem = memo(function ListItem({ item, idx }) {
  return (
    <section className="flex flex-col lg:flex-row items-start gap-6 md:gap-8 lg:gap-16">
      <div className="flex flex-col gap-4 md:gap-5 lg:gap-6 justify-center items-center text-center lg:text-left md:max-w-[75%] lg:w-1/3 mx-auto">
        <h3 className="text-Content-Primary text-[1.25rem] md:text-[1.5rem] lg:text-[2.5rem] font-semibold leading-7 md:leading-8 lg:leading-12">
          {addLineBreaks(item.title)}
        </h3>
        {item.subtitle ? (
          <p className="text-Content-Secondary text-sm lg:text-base leading-5 lg:leading-6">
            {addLineBreaks(item.subtitle)}
          </p>
        ) : null}
      </div>

      <figure className="max-w-[80%] lg:w-2/3 mx-auto space-y-4 md:space-y-5 lg:space-y-8">
        <SectionImage src={item.image} alt={item.title} priority={idx === 0} />
        {item.neonText ? (
          <figcaption className="text-center text-Content-Brand-Accent text-xs md:text-sm lg:text-base leading-4 md:leading-5 lg:leading-6 lg:max-w-[42rem] mx-auto">
            {item.neonText}
          </figcaption>
        ) : null}
      </figure>
    </section>
  );
});

const SectionBlock = memo(function SectionBlock({ section, index }) {
  const id = slug(section.title || `section-${index}`);

  return (
    <section className={cx("flex flex-col items-center", SECTION_GAPS)}>
      <SectionHeader
        title={section.title}
        subtitle={section.subtitle}
        desc={section.desc}
        anchorId={id}
      />

      {section.image ? (
        <SectionImage
          src={section.image}
          alt={section.title}
          priority={index === 0}
        />
      ) : null}

      {Array.isArray(section.list) && section.list.length > 0 ? (
        <div className="flex flex-col gap-[3.5rem] md:gap-[4rem] lg:gap-[8rem] mt-[3.5rem] md:mt-[4rem] lg:mt-[8rem]">
          {section.list.map((item, idx) => (
            <ListItem
              key={`${id}-item-${idx}-${slug(item.title)}`}
              item={item}
              idx={idx}
            />
          ))}
        </div>
      ) : null}

      {section.neonText ? (
        <p className="w-full text-center text-Content-Brand-Accent text-xs md:text-sm lg:text-base leading-4 md:leading-5 lg:leading-6 md:px-10 lg:px-0 lg:max-w-[42rem]">
          {section.neonText}
        </p>
      ) : null}
    </section>
  );
});

const TechnologySections = ({ stack = TECHNOLOGY_STACK || [] }) => {
  const safeStack = Array.isArray(stack) ? stack.filter(Boolean) : [];

  return (
    <div className="section-wrapper">
      <div className={cx("flex flex-col", BLOCK_GAPS)}>
        {safeStack.map((section, idx) => (
          <SectionBlock
            key={`${slug(section.title)}-${idx}`}
            section={section}
            index={idx}
          />
        ))}
        <BlackCard additionalStyle="!bg-Overlays-Black-9">
          <div className="flex flex-col md:flex-row gap-5 md:gap-12 lg:gap-16">
            <h3 className="content-heading md:w-1/2">
              A Living System, Not a Static Platform
            </h3>

            <p className="content-subheading md:w-1/2">
              Barnabus redefines what intelligence infrastructure means.It’s not
              a black box — it’s a transparent, adaptive ecosystem designed to
              serve industries where accuracy, governance, and human trust
              define success.
              <br />
              <br /> Every agent built on Barnabus doesn’t just automate.It
              understands. Learns. Evolves.
            </p>
          </div>
        </BlackCard>
      </div>
    </div>
  );
};

export default memo(TechnologySections);
