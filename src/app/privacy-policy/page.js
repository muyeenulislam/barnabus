import React from "react";

import SectionStartingGradient from "@/components/section-starting-gradient";
import BAAIntro from "@/components/baa-common/intro";
import BAASections from "@/components/baa-common/sections";

import { PRIVACY } from "@/utils/arrays";

const Page = () => {
  return (
    <SectionStartingGradient>
      <BAAIntro />
      <BAASections list={PRIVACY} />
    </SectionStartingGradient>
  );
};

export default Page;
