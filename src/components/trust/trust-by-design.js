import React from "react";

import { BlackCardDefault } from "../cards";

import { INTELLIGENCE_INPUTS } from "@/utils/arrays";
import { IconBadge } from "@/utils/common-styles";

const TrustByDesign = () => {
  return (
    <div className="gray-gradient-bg">
      <section className="section-wrapper space-y-10 md:space-y-12 lg:space-y-[4rem]">
        <div className="flex flex-col gap-4 md:gap-5 lg:gap-6 text-center justify-center items-center">
          <h1 className="text-Content-Primary font-semibold text-[2rem] md:text-[2.5rem] lg:text-[3.5rem] leading-[2.5rem] md:leading-[3rem] lg:leading-[4rem]">
            Trust by Design
          </h1>
          <p className="text-Content-Secondary text-base leading-6 lg:text-lg lg:leading-6.5">
            Trust in Barnabus isn't an afterthought. It's embedded at every
            layer of the ecosystem.
          </p>
        </div>

        <div className="w-full md:w-max mx-auto bg-Surface2 text-Content-Brand-Accent rounded-full p-4 md:px-5.5 md:py-3.5 text-base md:text-lg leading-6 md:leading-6.6 lg:text-xl lg:leading-7">
          Each layer authenticates the one above it — forming a continuous trust
          loop.
        </div>
        <div id="future-updates"></div>
      </section>
    </div>
  );
};

export default TrustByDesign;
