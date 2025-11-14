import React from "react";

import SectionStartingGradient from "@/components/section-starting-gradient";
import ParticipateIntro from "@/components/participate/intro";
import CompleteFreeRegistration from "@/components/participate/complete-free-reg";
import Steps from "@/components/participate/steps";
import { createMetadata } from "@/utils/metadata";

export const metadata = createMetadata({
  title: "Participate | Clinical Agentic AI Program",
  description:
    "Join the Barnabus participation program to co-develop agentic clinical decision support and access step-by-step onboarding guidance.",
  path: "/participate",
});

const Page = () => {
  return (
    <SectionStartingGradient>
      <ParticipateIntro />
      <Steps />
      <CompleteFreeRegistration />
    </SectionStartingGradient>
  );
};

export default Page;
