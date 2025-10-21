import React, { Suspense } from "react";

import TeamAndPartnership from "@/components/team/team-and-partnerships";
import JoinRnd from "@/components/home/join-rnd";

const Page = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <TeamAndPartnership />
      <JoinRnd />
    </Suspense>
  );
};

export default Page;
