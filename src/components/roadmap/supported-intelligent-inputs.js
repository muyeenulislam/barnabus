import React, { memo } from "react";
import Image from "next/image";

import AgentTables from "./agent-tables";
import InputCards from "./input-cards";
import { INTELLIGENCE_INPUTS, ROADMAP_TABLES_CONTENT } from "@/utils/arrays";
import { IconBadge } from "@/utils/common-styles";

const SupportedIntelligentInputs = () => {
  return (
    <div className="py-[2rem] px-[1.5rem] md:py-[3rem] md:px-[2.5rem] lg:py-[8rem] lg:px-[16rem] flex flex-col gap-[2.5rem] md:gap-[3rem] lg:gap-[4rem] bg-[linear-gradient(180deg, #121314 0%, #1F2021 50%)]">
      <div className="space-y-10 md:space-y-12 lg:space-y-[4rem]">
        <div className="flex flex-col gap-4 md:gap-5 lg:gap-6 text-center justify-center items-center">
          <h1 className="text-Content-Primary font-semibold text-[2rem] md:text-[2.5rem] lg:text-[3.5rem] leading-[2.5rem] md:leading-[3rem] lg:leading-[4rem]">
            Barnabus Supported Intelligence Inputs
          </h1>
          <p className="text-Content-Secondary text-base leading-6 lg:text-lg lg:leading-6.5">
            Barnabus ingests multi-modal intelligence — not just data, but
            context that compounds into understanding.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-2 md:gap-3 lg:gap-4">
          {INTELLIGENCE_INPUTS?.map((item, index) => (
            <InputCards
              key={index}
              variant={item.variant}
              title={item.title}
              icon={item.icon}
              items={item.items}
            />
          ))}
        </div>
        <div className="w-full md:w-max mx-auto bg-Surface2 text-Content-Brand-Accent rounded-2xl md:rounded-full p-4 md:px-5.5 md:py-3.5 text-base md:text-lg leading-6 md:leading-6.6 lg:text-xl lg:leading-7">
          From multi-modal data → to agentic intelligence → to aligned human
          decisions.
        </div>
      </div>
      <div className="mt-10 md:mt-12 lg:mt-16 space-y-4 md:space-y-5 lg:space-y-6">
        {ROADMAP_TABLES_CONTENT?.map((table, idx) => (
          <div
            key={idx}
            className="bg-Overlays-Black-9 shadow-boxPrimary space-y-4 p-5 rounded-[1.25rem] md:space-y-5 md:p-8 md:rounded-4xl lg:space-y-8 lg:p-[4rem] lg:rounded-[4rem]"
          >
            <div className="flex flex-col md:items-center md:flex-row gap-2 md:gap-3 lg:gap-4">
              <IconBadge src={table.icon} />
              <div>
                <h2 className="text-Content-Primary font-semibold text-xl leading-7 md:text-2xl md:leading-8 lg:text-[2rem] lg:leading-10">
                  {table.title}
                </h2>
                <p className="text-Content-Secondary text-base leading-6 lg:text-lg lg:leading-6.5">
                  {table.subtitle}
                </p>
              </div>
            </div>
            <AgentTables rows={table.rows} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SupportedIntelligentInputs;
