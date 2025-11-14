import React from "react";

import SectionStartingGradient from "@/components/section-starting-gradient";
import ProtocolIntro from "@/components/system-protocol/intro";
import ArchitectureOverview from "@/components/system-protocol/architecture-overview";
import JoinRnd from "@/components/home/join-rnd";
import { createMetadata } from "@/utils/metadata";

export const metadata = createMetadata({
  title: "Barnabus System Protocol | Self-Organizing Intelligence Stack",
  description:
    "Learn how Barnabus routes decisions through modular agents, layered memory boundaries, and escalation protocols to stay safe as it scales.",
  path: "/system-protocol",
});

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
