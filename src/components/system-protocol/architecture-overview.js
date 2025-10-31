import React, { memo } from "react";
import Image from "next/image";

import { BlackCardSmall } from "../cards";

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
        src="/images/architecture-overview.svg"
        height={100}
        width={250}
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
    </div>
  );
};

export default ArchitectureOverview;
