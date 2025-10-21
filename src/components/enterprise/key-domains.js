import React, { memo } from "react";
import Image from "next/image";
import { KEY_ENTERPRISE_DOMAINS } from "@/utils/arrays";

const ICON_PANEL_STYLE = Object.freeze({
  background:
    "radial-gradient(66.22% 86.87% at 50% 100%, rgba(255, 255, 255, 0.08) 0%, rgba(18, 19, 20, 0.19) 100%), rgba(255, 255, 255, 0.03)",
  boxShadow:
    "0 0.5px 0 0.5px rgba(255, 255, 255, 0.12) inset, 0 0 1.5px 1.5px rgba(247, 247, 248, 0.12) inset",
});

const ProgressTracker = memo(function ProgressTracker() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-1.5 md:gap-3 lg:gap-4">
      <div className="flex flex-col gap-8 lg:gap-10 pb-4 md:pb-0">
        <div className="flex flex-col gap-1 lg:gap-3">
          <h3 className="content-heading">AGI Pillar Progress Tracker</h3>
          <p className="content-subheading">
            Improving semiconductor manufacturing throughput
          </p>
        </div>
      </div>
      {KEY_ENTERPRISE_DOMAINS?.map((item, index) => (
        <div
          key={index}
          className="bg-Overlays-Black-9 shadow-boxPrimary text-Content-Primary flex flex-col gap-5 md:gap-6 lg:gap-12 p-4 md:p-5 lg:p-8 rounded-[1.25rem] md:rounded-3xl lg:rounded-4xl"
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
            <p className="text-Content-Secondary text-sm leading-5 lg:text-base lg:leading-6">
              {item.subtitle}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
});

const KeyEnterpriseDomains = () => {
  return (
    <div className="bg-backgroundDarkGray py-[2rem] px-[1.5rem] md:py-[3rem] md:px-[2.5rem] lg:py-[4rem] lg:px-[16rem] flex flex-col gap-[3.5rem] md:gap-[4rem] lg:gap-[6rem]">
      <ProgressTracker />
    </div>
  );
};

export default KeyEnterpriseDomains;
