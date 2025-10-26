import React from "react";

import SectionStartingGradient from "@/components/section-starting-gradient";
import EnterpriseIntro from "@/components/enterprise/intro";
import KeyEnterpriseDomains from "@/components/enterprise/key-domains";
import JoinRnd from "@/components/home/join-rnd";

const Page = () => {
  return (
    <SectionStartingGradient>
      <EnterpriseIntro />
      <KeyEnterpriseDomains />
      <JoinRnd />
    </SectionStartingGradient>
  );
};

export default Page;
