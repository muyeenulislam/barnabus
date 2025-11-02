import React, { memo } from "react";
import Image from "next/image";

import { BlackCardSmall } from "../cards";

import AgentStackDetails from "./agent-stack-details";
import DataEngine from "./data-engine";
import Transparency from "./transparency";
import LearningInMotion from "./learning-in-motion";

const SectionIntro = memo(function SectionIntro() {
  return (
    <div className="flex flex-col gap-2 md:gap-5 lg:gap-6 justify-center items-center text-center">
      <h2 className="h2-title">Architecture Overview</h2>
      <p className="p-subtitle">Layers of Reasoning and Action</p>
    </div>
  );
});

const ArchitectureOverviewImage = memo(function ArchitectureOverviewImage() {
  return (
    <BlackCardSmall>
      <Image
        src="/images/architecture-overview.png"
        height={1500}
        width={2500}
        className="w-full h-max md:pb-10"
        alt="pointer"
      />
    </BlackCardSmall>
  );
});

const ArchitectureOverview = () => {
  return (
    <div className="section-wrapper border-t border-t-Overlays-White-4">
      <SectionIntro />
      <ArchitectureOverviewImage />
      <AgentStackDetails />
      <div className="space-y-10 md:space-y-16 lg:space-y-[6rem]">
        <Transparency />
        <DataEngine />
        <LearningInMotion />
      </div>
    </div>
  );
};

export default ArchitectureOverview;
