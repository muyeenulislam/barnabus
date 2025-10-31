import React from "react";

import SectionStartingGradient from "@/components/section-starting-gradient";
import ProtocolIntro from "@/components/system-protocol/intro";
import ArchitectureOverview from "@/components/system-protocol/architecture-overview";
import JoinRnd from "@/components/home/join-rnd";

const Page = () => {
  return (
    <SectionStartingGradient>
      <ProtocolIntro />
      <ArchitectureOverview />
      <JoinRnd />
    </SectionStartingGradient>
  );
};

export default Page;
