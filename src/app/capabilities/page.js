import React from "react";

import SectionStartingGradient from "@/components/section-starting-gradient";
import CapabilitiesIntro from "@/components/capabilities/intro";
import CapabilitiesSteps from "@/components/capabilities/steps";
import JoinRnd from "@/components/home/join-rnd";

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
