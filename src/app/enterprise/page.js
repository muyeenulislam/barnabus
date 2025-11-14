import React from "react";

import SectionStartingGradient from "@/components/section-starting-gradient";
import EnterpriseIntro from "@/components/enterprise/intro";
import KeyEnterpriseDomains from "@/components/enterprise/key-domains";
import JoinRnd from "@/components/home/join-rnd";
import { generateMetadata } from "@/utils/metadata";

export const metadata = generateMetadata({
  title: "Barnabus Enterprise | Agentic Infrastructure for Complex Domains",
  description:
    "See how Grade Intelligence combines modular agents, governance, and domain expertise to support enterprise-scale security, clinical, and industrial systems.",
  path: "/enterprise",
});

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
