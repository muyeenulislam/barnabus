import React from "react";

import SectionStartingGradient from "@/components/section-starting-gradient";
import CapabilitiesIntro from "@/components/capabilities/intro";
import CapabilitiesSteps from "@/components/capabilities/steps";
import JoinRnd from "@/components/home/join-rnd";
import { createMetadata } from "@/utils/metadata";

export const metadata = createMetadata({
  title: "Barnabus Capabilities | Architecture of Living Intelligence",
  description:
    "Explore the agentic capabilities and AGI foundations that let Barnabus think, act, learn, and align with purpose across domains.",
  path: "/capabilities",
});

const Page = () => {
  return (
    <SectionStartingGradient>
      <CapabilitiesIntro />
      <CapabilitiesSteps />
      <JoinRnd />
    </SectionStartingGradient>
  );
};

export default Page;
