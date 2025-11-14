import React from "react";

import SectionStartingGradient from "@/components/section-starting-gradient";
import SolutionsIntro from "@/components/solutions/intro";
import SolutionsSteps from "@/components/solutions/steps";
import JoinRnd from "@/components/home/join-rnd";
import { createMetadata } from "@/utils/metadata";

export const metadata = createMetadata({
  title: "Barnabus Solutions | Composable Agentic Ecosystem",
  description:
    "Discover deployment paths and orchestrated agent stacks that let Barnabus adapt to hospitals, fabs, enterprises, and public institutions.",
  path: "/solutions",
});

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
