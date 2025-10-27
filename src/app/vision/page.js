import React from "react";

import SectionStartingGradient from "@/components/section-starting-gradient";
import VisionIntro from "@/components/vision/intro";
import AGICompass from "@/components/vision/agi-compass";
import JoinRnd from "@/components/home/join-rnd";

const Page = () => {
  return (
    <SectionStartingGradient>
      <VisionIntro />
      <AGICompass />
      <JoinRnd />
    </SectionStartingGradient>
  );
};

export default Page;
