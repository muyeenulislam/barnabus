import React from "react";

import SectionStartingGradient from "@/components/section-starting-gradient";
import TechnologyIntro from "@/components/technology/intro";
import TechnologySections from "@/components/technology/sections";
import JoinRnd from "@/components/home/join-rnd";

const Page = () => {
  return (
    <SectionStartingGradient>
      <TechnologyIntro />
      <TechnologySections />
      <JoinRnd />
    </SectionStartingGradient>
  );
};

export default Page;
