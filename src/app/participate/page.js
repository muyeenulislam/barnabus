import React from "react";

import SectionStartingGradient from "@/components/section-starting-gradient";
import ParticipateIntro from "@/components/participate/intro";
import CompleteFreeRegistration from "@/components/participate/complete-free-reg";
import Steps from "@/components/participate/steps";

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
