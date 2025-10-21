import React from "react";
import AgentInfrastrusture from "@/components/enterprise/agent-infrastructure";
import JoinRnd from "@/components/home/join-rnd";

const Page = () => {
  return (
    <div className="relative overflow-hidden">
      <div
        className="blur-[210px] w-[120rem] h-[33rem] absolute top-0 left-1/2 -translate-x-1/2 z-100"
        style={{
          background:
            "radial-gradient(80.98% 117.04% at 50% -17.04%, rgba(255, 255, 255, 0.09) 1.56%, rgba(255, 255, 255, 0.39) 15.05%, rgba(255, 255, 255, 0.00) 77.94%)",
        }}
      ></div>

      <AgentInfrastrusture />
      <JoinRnd />
    </div>
  );
};

export default Page;
