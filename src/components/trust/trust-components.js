"use client";

import React, { memo } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import { BlackCardXS } from "../cards";

import { IconBadge } from "@/utils/common-styles";

const SectionHeading = memo(function SectionHeading({ title, subtitle }) {
  return (
    <div className="flex flex-col gap-1 lg:gap-3 lg:max-w-[30rem]">
      <h3 className="content-heading">{title}</h3>
      <p className="content-subheading">{subtitle}</p>
    </div>
  );
});
const DomainCard = memo(function DomainCard({ icon, title, subtitle }) {
  return (
    <BlackCardXS>
      <div className="flex flex-col gap-5 md:gap-6 lg:gap-12">
        <IconBadge src={icon} />
        <div className="flex flex-col gap-1.5 md:gap-2 lg:gap-4">
          <h6 className="font-semibold text-base leading-6 md:text-lg md:leading-6.5 lg:text-2xl lg:leading-8">
            {title}
          </h6>
          <p className="text-Content-Secondary text-sm leading-5 lg:text-base lg:leading-6">
            {subtitle}
          </p>
        </div>
      </div>
    </BlackCardXS>
  );
});
const FluidBeam = () => {
  return (
    <div className="pointer-events-none absolute left-0 top-1/2 -translate-y-1/2 w-full h-[0.75rem]">
      <div className="relative w-full h-full">
        <div className="absolute inset-0 h-1 rounded-full opacity-60 blur-[4px] bg-Brand-Accent-Alpha-200" />

        <motion.div
          className="absolute top-1/2 -translate-y-1/2 h-[1.5rem] w-[40%] rounded-full bg-linear-to-r from-transparent via-Content-Brand-Accent to-transparent blur-[6px]"
          initial={{ left: "-10%", opacity: 0 }}
          animate={{ left: ["-10%", "30%"], opacity: [0, 0.5, 1, 0] }}
          transition={{ duration: 2.6, ease: "easeInOut", repeat: Infinity }}
        />

        <motion.div
          className="absolute top-1/2 -translate-y-1/2 h-[1.5rem] w-[40%] rounded-full bg-linear-to-r from-transparent via-Content-Brand-Accent to-transparent blur-[6px]"
          initial={{ right: "-10%", opacity: 0 }}
          animate={{ right: ["-10%", "30%"], opacity: [0, 0.5, 1, 0] }}
          transition={{ duration: 2.6, ease: "easeInOut", repeat: Infinity }}
        />
      </div>
    </div>
  );
};

const FluidAnimationComponent = () => {
  return (
    <div className="pb-12">
      <div className="relative w-full flex justify-between items-center px-6 md:px-12 lg:px-[8rem]">
        <Image
          src="/icons/human-oversight.svg"
          height={400}
          width={400}
          alt="human oversight"
          className="h-[5rem] w-[5rem] md:h-[8.75rem] md:w-[8.75rem] lg:h-[12.5rem] lg:w-[12.5rem] z-10"
        />

        {/* replace the old <svg> with this */}
        <FluidBeam />

        <Image
          src="/icons/agentic-network.svg"
          height={400}
          width={400}
          alt="agentic network"
          className="h-[5rem] w-[5rem] md:h-[8.75rem] md:w-[8.75rem] lg:h-[12.5rem] lg:w-[12.5rem] z-10"
        />

        <p className="absolute left-1 md:left-14 lg:left-[9.375rem] bottom-[-1.75rem] text-Content-Secondary text-s leading-5 md:text-base md:leading-6 lg:text-xl lg:leading-7">
          Human Oversight
        </p>
        <p className="absolute right-3 md:right-14 lg:right-[9.5rem] bottom-[-1.75rem] text-Content-Secondary text-sm leading-5 md:text-base md:leading-6 lg:text-xl lg:leading-7">
          Agentic Network
        </p>
      </div>
    </div>
  );
};

export { SectionHeading, DomainCard, FluidAnimationComponent };
