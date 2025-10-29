import React from "react";

import SectionStartingGradient from "@/components/section-starting-gradient";
import SolutionsIntro from "@/components/solutions/intro";
import SolutionsSteps from "@/components/solutions/steps";
import JoinRnd from "@/components/home/join-rnd";

const Page = () => {
  return (
    <SectionStartingGradient>
      <SolutionsIntro />
      <SolutionsSteps />
      <JoinRnd />
    </SectionStartingGradient>
  );
};

export default Page;
