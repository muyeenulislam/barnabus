import React, { Suspense } from "react";

import SectionStartingGradient from "@/components/section-starting-gradient";
import ParticipateIntro from "@/components/participate/intro";
import CompleteFreeRegistration from "@/components/participate/complete-free-reg";
import Steps from "@/components/participate/steps";
import { generateMetadata } from "@/utils/metadata";

export const metadata = generateMetadata({
  title: "Participate | Clinical Agentic AI Program",
  description:
    "Join the Barnabus participation program to co-develop agentic clinical decision support and access step-by-step onboarding guidance.",
  path: "/participate",
});

const Page = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SectionStartingGradient>
        <ParticipateIntro />
        <Steps />
        <CompleteFreeRegistration />
      </SectionStartingGradient>
    </Suspense>
  );
};

export default Page;
