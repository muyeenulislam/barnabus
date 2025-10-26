import React from "react";

import SectionStartingGradient from "@/components/section-starting-gradient";
import BAAIntro from "@/components/baa-common/intro";
import BAAPageInfo from "@/components/baa-common/page-info";
import BAASections from "@/components/baa-common/sections";

import { BAA } from "@/utils/arrays";

const Page = () => {
  return (
    <SectionStartingGradient>
      <BAAIntro />
      <BAAPageInfo
        title={`Business Associate\nAgreement (BAA)`}
        topRightText="Effective Date"
        date="Aug 27, 2025"
      />
      <BAASections list={BAA} />
    </SectionStartingGradient>
  );
};

export default Page;
