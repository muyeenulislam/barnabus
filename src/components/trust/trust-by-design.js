import React from "react";

import { BlackCardXS } from "../cards";

import { TRUST_BY_DESIGN } from "@/utils/arrays";
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

        <div className="flex flex-col items-center">
          {TRUST_BY_DESIGN?.map((item, index) => {
            const widthPct = Math.max(100 - index * 10, 0);
            const z = TRUST_BY_DESIGN.length - index;

            return (
              <div
                key={index}
                className="relative"
                style={{
                  width: `${widthPct}%`,
                  maxWidth: `${widthPct}%`,
                  marginTop: index > 0 ? -16 : 0,
                  zIndex: z,
                }}
              >
                <BlackCardXS
                  additionalStyle={`${index > 0 ? "!rounded-t-none" : ""}`}
                >
                  <div className="flex flex-col items-center text-center md:flex-row gap-6 md:gap-8 lg:gap-12">
                    <IconBadge src={item.icon} />
                    <div className="space-y-1 lg:space-y-2">
                      <h4 className="text-Content-Primary font-semibold leading-6 md:text-lg md:leading-6.5 lg:text-2xl lg:leading-8">
                        {item.title}
                      </h4>
                      <p className="p-subtitle">{item.subtitle}</p>
                    </div>
                  </div>
                </BlackCardXS>
              </div>
            );
          })}
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
