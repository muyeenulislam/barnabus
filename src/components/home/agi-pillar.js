"use client";
import React, { memo } from "react";
import Image from "next/image";

import Accordion from "../accordion";
import Button from "../button";
import ProgressBar from "../progress-bar";

import useScreenSize from "@/utils/usescreensize";
import { PROGRESS_TRACKER_POINTS, ECO_BREAKDOWN_POINTS } from "@/utils/arrays";

const ICON_PANEL_STYLE = Object.freeze({
  background:
    "radial-gradient(53.06% 69.61% at 50% 100%, var(--Overlays-White-3, rgba(255, 255, 255, 0.01)) 0%, var(--Overlays-Black-9, rgba(18, 19, 20, 0.19)) 100%), var(--Overlays-White-3, rgba(255, 255, 255, 0.03))",
  boxShadow:
    "0 0.4px 0 0.4px var(--Overlays-White-6, rgba(255, 255, 255, 0.12)) inset, 0 0 1.2px 1.2px var(--Overlays-White-6, rgba(247, 247, 248, 0.12)) inset",
});

const ProgressTracker = memo(function ProgressTracker() {
  const screenSize = useScreenSize();

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-1.5 md:gap-3 lg:gap-4">
      <div className="flex flex-col gap-8 lg:gap-10 pb-4 md:pb-0">
        <div className="flex flex-col gap-1 lg:gap-3">
          <h3 className="content-heading">AGI Pillar Progress Tracker</h3>
          <p className="content-subheading">
            Improving semiconductor manufacturing throughput
          </p>
        </div>
        <Button
          size={screenSize.width >= 1024 ? "XL" : "L"}
          variant="Secondary"
          label="See the Progress"
          trailingIcon="/icons/arrow-right.svg"
          additionalStyle="w-max"
        />
      </div>
      {PROGRESS_TRACKER_POINTS?.map((item, index) => (
        <div
          key={index}
          className="bg-Overlays-White-3 shadow-boxPrimary text-Content-Primary flex flex-col gap-5 md:gap-6 lg:gap-12 p-4 md:p-5 lg:p-8 rounded-[1.25rem] md:rounded-3xl lg:rounded-4xl"
        >
          <div
            className="shrink-0 h-max w-max flex justify-center items-center rounded-[1.125rem] lg:rounded-3xl p-2 lg:p-3"
            style={ICON_PANEL_STYLE}
            aria-hidden="true"
          >
            <Image
              src={item.icon}
              alt=""
              height={32}
              width={32}
              className="shrink-0 h-[1.875rem] w-[1.875rem] lg:h-[2.5rem] lg:w-[2.5rem]"
            />
          </div>
          <div className="flex flex-col gap-1.5 md:gap-2 lg:gap-4">
            <h6 className="font-semibold text-base leading-6 md:text-lg md:leading-6.5 lg:text-2xl lg:leading-8">
              {item.title}
            </h6>
            <div className="flex gap-1">
              {item.tags?.map((tag, index) => (
                <p
                  key={index}
                  className="rounded-full bg-Badge-Gray-Subtle-Background p-1.5 text-[0.75rem] leading-4 md:p-2 lg:px-3 lg:py-2 lg:text-sm lg:leading-5"
                >
                  {tag}
                </p>
              ))}
            </div>
            <ProgressBar value={item.percentage} />
          </div>
        </div>
      ))}
    </div>
  );
});

const Chevron = ({ open = false }) => (
  <svg
    className={`h-[1.5rem] w-[1.5rem] transition-transform duration-300 ${
      open ? "rotate-180" : ""
    }`}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
  >
    <path
      d="M18 9.00005C18 9.00005 13.5811 15 12 15C10.4188 15 6 9 6 9"
      stroke={open ? "#3BF5FF" : "#B7B8B9"}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const EcoBreakdown = memo(function EcoBreakdown() {
  const screenSize = useScreenSize();

  const items = ECO_BREAKDOWN_POINTS.map((p) => ({
    title: p.accordionTitle,
    subtitle: p.accordionSubtitle,
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 pb-3">
        {p.accordionOpen.map((card, i) => (
          <div
            key={i}
            className="bg-Overlays-White-3 shadow-boxPrimary p-3 rounded-2xl lg:p-6 lg:rounded-3xl"
          >
            <p className="text-lg leading-6.5 md:text-xl lg:text-2xl md:leading-7 lg:leading-8 font-semibold text-[#CACED5]">
              {card.title}
            </p>
            <p className="text-[#9DA1A8] mt-2 text-xs lg:text-sm leading-5">
              {card.desc}
            </p>
          </div>
        ))}
      </div>
    ),
  }));

  return (
    <div className="flex flex-col md:flex-row gap-3">
      {/* Left column */}
      <div className="flex flex-col gap-8 lg:gap-10 pb-4 md:pb-0 md:w-1/3">
        <div className="flex flex-col gap-1 lg:gap-3">
          <h3 className="content-heading">Agent Ecosystem Breakdown</h3>
          <p className="content-subheading">
            Improving semiconductor manufacturing throughput
          </p>
        </div>
        <Button
          size={screenSize.width >= 1024 ? "XL" : "L"}
          variant="Secondary"
          label="See the Ecosystem"
          trailingIcon="/icons/arrow-right.svg"
          additionalStyle="w-max"
        />
      </div>

      {/* Right column */}
      <div className="md:w-2/3">
        <Accordion
          items={items}
          defaultOpenIndex={0}
          allowToggle={true}
          ChevronIcon={Chevron}
        />
      </div>
    </div>
  );
});

const AgiPillar = () => {
  return (
    <section className="py-[4rem] md:py-[6rem] lg:py-[16rem] lg:pt-0 flex flex-col gap-[4rem] md:gap-[6rem] lg:gap-[6rem]">
      <ProgressTracker />
      <EcoBreakdown />
    </section>
  );
};

export default AgiPillar;
