import React, { memo } from "react";
import Image from "next/image";

import { BlackCardDefault } from "../cards";

import { SOLUTIONS_POINTS } from "@/utils/arrays";
import { IconBadge } from "@/utils/common-styles";
import addLineBreaks from "@/utils/add-line-break";

const SolutionsImage = memo(function SolutionsImage() {
  return (
    <div className="space-y-[2.5rem] md:space-y-[3rem] lg:space-y-[4rem] py-[4rem] md:py-[6rem] lg:py-[8rem] !pt-[2rem]">
      <div className="flex flex-col gap-2 md:gap-5 lg:gap-6 justify-center items-center text-center ">
        <h2 className="h2-title md:max-w-[55rem]">
          Transforming How Every Domain Thinks, Acts, and Learns
        </h2>

        <p className="p-subtitle md:max-w-[45rem]">
          Barnabus is built to serve industries where intelligence must be
          accurate, explainable, and resilient.
        </p>
      </div>
      <Image
        src="/images/solutions.png"
        height={1800}
        width={1800}
        className="w-full h-max"
        priority
        alt="pointer"
      />
      <BlackCardDefault additionalStyle="!bg-Overlays-Black-9">
        <div className="flex flex-col lg:flex-row gap-5 md:gap-12 lg:gap-16">
          <h3 className="content-heading lg:w-1/2">
            Barnabus - Where Intelligence Become a Foundation, Not Just a Tool
          </h3>

          <p className="content-subheading lg:w-1/2">
            Built with Boundaries. Open with Purpose. Barnabus operates through
            a modular, agentic architecture. Each agent is defined by role,
            protocol layer, and memory boundary, allowing coordination without
            chaos, and learning without risk.
            <br />
            <br />
            The agents shown here represent the surface layer. Deeper layers,
            including internal reasoning flows, security logic, and escalation
            protocols, are confidential by design, ensuring safety, compliance,
            and resilience across high-stakes domains. Where modular agents,
            ethical alignment, and domain expertise converge to create
            responsible systems.
          </p>
        </div>
      </BlackCardDefault>
    </div>
  );
});

const SolutionsPoints = memo(function SolutionsPoints() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 md:gap-3 lg:gap-4 pb-[4rem]">
      {SOLUTIONS_POINTS?.map((item, index) => (
        <BlackCardDefault
          key={index}
          additionalStyle="!bg-Overlays-Black-9 !p-8 md:!p-10 lg:!p-16"
        >
          <div className="flex flex-col gap-6 md:gap-8 lg:gap-12">
            <IconBadge src={item.icons} />
            <div className="space-y-6 md:space-y-8 lg:space-y-12">
              <div>
                <h4 className="text-Content-Primary font-semibold text-lg leading-6.5 md:text-xl md:leading-7 lg:text-[2rem] lg:leading-10">
                  {item.title}
                </h4>
                <p className="p-subtitle">{addLineBreaks(item.subtitle)}</p>
              </div>
              <p className="content-subheading">{addLineBreaks(item.desc)}</p>
              {item.useCases && item.useCases?.length > 0 && (
                <div className="space-y-1.5 md:space-y-2 lg:space-y-3">
                  <h4 className="text-Content-Primary font-semibold text-base leading-6 md:text-lg md:leading-6.5 lg:text-[1.5rem] lg:leading-8">
                    Use cases include:
                  </h4>
                  <ul>
                    {item.useCases?.map((item, index) => (
                      <li key={index} className="content-subheading list-disc">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {item.closingStatement && (
                <div className="space-y-1.5 md:space-y-2 lg:space-y-3">
                  <h4 className="text-Content-Brand-Accent font-semibold text-base leading-6 md:text-lg md:leading-6.5 lg:text-[1.5rem] lg:leading-8">
                    Built on Trust
                  </h4>
                  <p className="content-subheading">
                    {addLineBreaks(item.closingStatement)}
                  </p>
                </div>
              )}
            </div>
          </div>
        </BlackCardDefault>
      ))}
    </div>
  );
});

const SolutionsSteps = () => {
  return (
    <>
      <section>
        <SolutionsImage />
      </section>
      <div className="gray-gradient-bg">
        <section className="section-wrapper">
          <SolutionsPoints />
        </section>
      </div>
    </>
  );
};

export default SolutionsSteps;
