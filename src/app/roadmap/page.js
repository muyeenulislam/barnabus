import React from "react";

import SectionStartingGradient from "@/components/section-starting-gradient";
import RoadmapIntro from "@/components/roadmap/intro";
import SupportedIntelligentInputs from "@/components/roadmap/supported-intelligent-inputs";
import JoinRnd from "@/components/home/join-rnd";

const Page = () => {
  return (
    <SectionStartingGradient>
      <RoadmapIntro />
      <SupportedIntelligentInputs />
      <JoinRnd />
    </SectionStartingGradient>
  );
};

export default Page;
