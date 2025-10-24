import React from "react";

import AgentTables from "./agent-tables";
import InputCards from "./input-cards";

const SupportedIntelligentInputs = () => {
  return (
    <div className="py-[2rem] px-[1.5rem] md:py-[3rem] md:px-[2.5rem] lg:py-[8rem] lg:px-[16rem] flex flex-col gap-[2.5rem] md:gap-[3rem] lg:gap-[4rem] bg-[linear-gradient(180deg, #121314 0%, #1F2021 50%)]">
      <AgentTables />
      <InputCards />
    </div>
  );
};

export default SupportedIntelligentInputs;
