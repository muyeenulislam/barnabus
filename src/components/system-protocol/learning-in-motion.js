import React, { memo } from "react";
import Image from "next/image";

import { BlackCardDefault, BlackCardSmall } from "../cards";

import { IconBadge } from "@/utils/common-styles";
import { LEARNING_IN_MOTION } from "@/utils/arrays";

const LearningInMotion = memo(function LearningInMotion() {
  const alignmentItems = [
    "Value-aligned architecture from design layer",
    "Persistent self-calibration with feedback",
    "Transparent memory access",
    "Human-in-the-loop supervision by default",
  ];

  return (
    <div className="space-y-5 md:space-y-6 lg:space-y-8">
      <div className="space-y-1.5 md:space-y-2 lg:space-y-3">
        <h2 className="content-heading">Learning in Motion</h2>
        <p className="content-subheading">Human-Aware Protocols</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-1.5 md:gap-2 lg:gap-4">
        {LEARNING_IN_MOTION?.map((item, index) => (
          <BlackCardSmall key={index}>
            <div className="space-y-6 md:space-y-8 lg:space-y-12">
              <IconBadge src={item.icon} />
              <h5 className="text-[#CACED5] font-semibold leading-6 md:text-lg md:leading-6.5 lg:text-2xl lg:leading-8">
                {item.title}
              </h5>
            </div>
          </BlackCardSmall>
        ))}
        <BlackCardDefault additionalStyle="!bg-Overlays-Black-9 col-span-full">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-[16rem]">
            <div className="space-y-1.5 md:space-y-2 lg:space-y-3">
              <h6 className="content-heading">Alignment as Architecture</h6>
              <p className="content-subheading">Built with Ethical Memory</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-x-8 md:gap-y-5 lg:gap-x-12 lg:gap-y-6">
              {alignmentItems?.map((item, index) => (
                <div key={index} className="flex gap-3 lg:gap-4">
                  <Image
                    src="/icons/circle-arrow-right-neon.svg"
                    height={32}
                    width={32}
                    className="h-8 w-8 md:h-10 md:w-10"
                    alt="arrow right"
                  />
                  <p className="text-Content-Secondary text-base leading-6 md:text-lg md:leading-6.5 lg:text-xl lg:leading-7">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </BlackCardDefault>
      </div>
    </div>
  );
});

export default LearningInMotion;
