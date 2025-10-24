import React from "react";

import RoadmapIntro from "@/components/roadmap/intro";
import SupportedIntelligentInputs from "@/components/roadmap/supported-intelligent-inputs";
import JoinRnd from "@/components/home/join-rnd";

const Page = () => {
  return (
    <div className="relative overflow-hidden">
      <div
        className="blur-[210px] w-[120rem] h-[25rem] absolute top-[0rem] left-1/2 -translate-x-1/2 z-101"
        style={{
          background:
            "radial-gradient(80.98% 117.04% at 50% -17.04%, rgba(255, 255, 255, 0.09) 1.56%, rgba(255, 255, 255, 0.39) 15.05%, rgba(255, 255, 255, 0.00) 77.94%)",
        }}
      ></div>

      <RoadmapIntro />
      <SupportedIntelligentInputs />
      <JoinRnd />
    </div>
  );
};

export default Page;
