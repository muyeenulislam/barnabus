import React from "react";

import SectionStartingGradient from "@/components/section-starting-gradient";
import TrustIntro from "@/components/trust/intro";
import TrustByDesign from "@/components/trust/trust-by-design";
import TrustPillars from "@/components/trust/trust-pillars";
import TrustArchitecture from "@/components/trust/trust-architecture";
import DemandProof from "@/components/trust/demand-proof";
import SecurityPractices from "@/components/trust/security-practices";
import ResponsibleIntelligence from "@/components/trust/responsible-intelligence";
import BuiltForAccountability from "@/components/trust/built-for-accountability";
import JoinRnd from "@/components/home/join-rnd";

const Page = () => {
  return (
    <SectionStartingGradient>
      <TrustIntro />
      <div className="gray-gradient-bg section-wrapper">
        <TrustByDesign />
        <TrustPillars />
        <TrustArchitecture />
        <DemandProof />
        <SecurityPractices />
        <ResponsibleIntelligence />
        <BuiltForAccountability />
      </div>
      <JoinRnd />
    </SectionStartingGradient>
  );
};

export default Page;
