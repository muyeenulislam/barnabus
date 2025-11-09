import React from "react";

import SectionStartingGradient from "@/components/section-starting-gradient";
import TrustIntro from "@/components/trust/intro";
import TrustByDesign from "@/components/trust/trust-by-design";

const Page = () => {
  return (
    <SectionStartingGradient>
      <TrustIntro />
      <TrustByDesign />
    </SectionStartingGradient>
  );
};

export default Page;
