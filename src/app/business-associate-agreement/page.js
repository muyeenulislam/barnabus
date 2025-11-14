import React from "react";

import SectionStartingGradient from "@/components/section-starting-gradient";
import BAAIntro from "@/components/baa-common/intro";
import BAAPageInfo from "@/components/baa-common/page-info";
import BAASections from "@/components/baa-common/sections";

import { BAA } from "@/utils/arrays";
import { createMetadata } from "@/utils/metadata";

export const metadata = createMetadata({
  title: "Barnabus Business Associate Agreement (BAA)",
  description:
    "Review Barnabus' HIPAA-aligned Business Associate Agreement outlining safeguards, permitted uses, and shared responsibilities for PHI.",
  path: "/business-associate-agreement",
});

const Page = () => {
  return (
    <SectionStartingGradient>
      <div className="gray-gradient-bg">
        <section>
          <BAAIntro />
          <BAAPageInfo
            title={`Business Associate\nAgreement (BAA)`}
            topRightText="Effective Date"
            date="Aug 27, 2025"
          />
          <BAASections list={BAA} />
        </section>
      </div>
    </SectionStartingGradient>
  );
};

export default Page;
