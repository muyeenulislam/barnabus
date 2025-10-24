import React from "react";

import AgentTables from "./agent-tables";
import InputCards from "./input-cards";

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
        <div className="grid grid-cols-1 lg:grid-cols-4">
          <InputCards />
        </div>
        <div className="w-full md:w-max mx-auto bg-Surface2 text-Content-Brand-Accent rounded-2xl md:rounded-full p-4 md:px-5.5 md:py-3.5 text-base md:text-lg leading-6 md:leading-6.6 lg:text-xl lg:leading-7">
          From multi-modal data → to agentic intelligence → to aligned human
          decisions.
        </div>
      </div>
      <AgentTables />
    </div>
  );
};

export default SupportedIntelligentInputs;
