import React, { memo } from "react";
import Image from "next/image";

import { BlackCardDefault } from "../cards";

import { CAPABILITIES_POINTS } from "@/utils/arrays";
import { IconBadge } from "@/utils/common-styles";
import addLineBreaks from "@/utils/add-line-break";

const CapabilitiesImage = memo(function CapabilitiesImage() {
  return (
    <div className="space-y-[2rem] py-[4rem] md:py-[6rem] lg:py-[8rem] !pt-0">
      <Image
        src="/images/capabilities.png"
        height={1200}
        width={1200}
        className="w-full h-max"
        priority
        alt="pointer"
      />
      <div className="w-full md:w-max mx-auto bg-Surface2 text-Content-Brand-Accent rounded-full p-2 md:px-[0.6rem] md:py-[0.4rem] lg:px-5.5 lg:py-3.5 text-sm md:text-base leading-4.5 md:leading-6 lg:text-2xl lg:leading-7 text-center">
        Barnabus is not just AI. It is the first living architecture of
        intelligence - the bridge to AGI
      </div>
    </div>
  );
});

const CapabilitiesPoints = memo(function CapabilitiesPoints() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-3 lg:gap-4 pb-[4rem]">
      {CAPABILITIES_POINTS?.map((item, index) => (
        <BlackCardDefault key={index} additionalStyle="!bg-Overlays-Black-9">
          <div className="flex flex-col gap-6 md:gap-8 lg:gap-12">
            <IconBadge src={item.icons} />
            <div className="space-y-1 lg:space-y-2">
              <h4 className="text-Content-Primary font-semibold leading-6 md:text-lg md:leading-6.5 lg:text-2xl lg:leading-8">
                {item.title}
              </h4>
              <p className="p-subtitle">{addLineBreaks(item.subtitle)}</p>
              <p className="text-Content-Brand-Accent font-semibold text-sm leading-5 lg:text-base lg:leading-6">
                {item.neonText}
              </p>
            </div>
          </div>
        </BlackCardDefault>
      ))}
    </div>
  );
});

const CapabilitiesSteps = () => {
  return (
    <>
      <section>
        <CapabilitiesImage />
      </section>
      <div className="gray-gradient-bg">
        <section className="section-wrapper">
          <CapabilitiesPoints />
        </section>
      </div>
    </>
  );
};

export default CapabilitiesSteps;
