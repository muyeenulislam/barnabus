import React, { Suspense } from "react";

import TeamAndPartnership from "@/components/team/team-and-partnerships";
import JoinRnd from "@/components/home/join-rnd";
import { generateMetadata } from "@/utils/metadata";

export const metadata = generateMetadata({
  title: "Barnabus Team & Partnerships",
  description:
    "Meet the cross-domain Barnabus team and partnerships building agentic intelligence across healthcare, semiconductors, cybersecurity, and automation.",
  path: "/team",
});

const Page = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <TeamAndPartnership />
      <JoinRnd />
    </Suspense>
  );
};

export default Page;
