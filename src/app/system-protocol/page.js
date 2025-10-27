import React from "react";

import SectionStartingGradient from "@/components/section-starting-gradient";
import ProtocolIntro from "@/components/system-protocol/intro";
import JoinRnd from "@/components/home/join-rnd";

const Page = () => {
  return (
    <SectionStartingGradient>
      <ProtocolIntro />
      <JoinRnd />
    </SectionStartingGradient>
  );
};

export default Page;
