import React from "react";

import SectionStartingGradient from "@/components/section-starting-gradient";
import TechnologyIntro from "@/components/technology/intro";
import TechnologySections from "@/components/technology/sections";
import JoinRnd from "@/components/home/join-rnd";
import { generateMetadata } from "@/utils/metadata";

export const metadata = generateMetadata({
  title: "Barnabus Technology | Living Intelligence Fabric",
  description:
    "Dive into the modular agents, reasoning memory, and governance fabric that make Barnabus a continuously evolving intelligence system.",
  path: "/technology",
});

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
