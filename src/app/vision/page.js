import React from "react";

import SectionStartingGradient from "@/components/section-starting-gradient";
import VisionIntro from "@/components/vision/intro";
import AGICompass from "@/components/vision/agi-compass";
import JoinRnd from "@/components/home/join-rnd";
import { generateMetadata } from "@/utils/metadata";

export const metadata = generateMetadata({
  title: "Barnabus Vision | Human-Centered Agentic Intelligence",
  description:
    "See how Barnabus pairs self-organizing agent stacks with human-centered governance to give AGI purpose, context, and ethical direction.",
  path: "/vision",
});

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
