import React from "react";

import SectionStartingGradient from "@/components/section-starting-gradient";
import TrustIntro from "@/components/trust/intro";
import TrustByDesign from "@/components/trust/trust-by-design";
import TrustPillars from "@/components/trust/trust-pillars";
import TrustArchitecture from "@/components/trust/trust-architecture";

const Page = () => {
  return (
    <SectionStartingGradient>
      <TrustIntro />
      <div className="gray-gradient-bg section-wrapper">
        <TrustByDesign />
        <TrustPillars />
        <TrustArchitecture />
      </div>
    </SectionStartingGradient>
  );
};

export default Page;
