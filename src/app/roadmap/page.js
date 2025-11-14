import React from "react";

import SectionStartingGradient from "@/components/section-starting-gradient";
import RoadmapIntro from "@/components/roadmap/intro";
import SupportedIntelligentInputs from "@/components/roadmap/supported-intelligent-inputs";
import JoinRnd from "@/components/home/join-rnd";
import { createMetadata } from "@/utils/metadata";

export const metadata = createMetadata({
  title: "Barnabus Roadmap | Evolution of Strategic Agents",
  description:
    "Track upcoming milestones as Barnabus grows from MVP releases to a moonshot ecosystem of strategic, thinking agents.",
  path: "/roadmap",
});

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
