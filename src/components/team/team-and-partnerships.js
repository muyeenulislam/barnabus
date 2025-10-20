"use client";

import React, { useState } from "react";

import { TabSecondary } from "../tabs";

import Team from "./team";
import Partnership from "./partnership";

const TeamAndPartnership = () => {
  const [tab, setTab] = useState("team");

  return (
    <div className="bg-Surface1 py-[2rem] px-[1.5rem] md:py-[3rem] md:px-[2.5rem] lg:py-[4rem] lg:px-[16rem] flex flex-col gap-[2.5rem] md:gap-[3rem] lg:gap-[4rem] relative">
      <div className="flex flex-col gap-[1.5rem] text-center">
        <h1 className="text-Content-Primary font-semibold text-[2.5rem] md:text-[3rem] lg:text-[4rem] leading-[3rem] md:leading-[3.5rem] lg:leading-[4.5rem]">
          Barnabus Team and{" "}
          <span className="text-Action-Buttons-Primary-Accent-Content-Default">
            Partnerships
          </span>
        </h1>
        <p className="text-Content-Secondary text-xl leading-7 max-w-[36rem] mx-auto">
          The Barnabus Team is dedicated to innovation and collaboration. We
          create impactful solutions that benefit our community.
        </p>
      </div>
      <TabSecondary
        tabItems={[
          { value: "team", label: "Team" },
          { value: "partners", label: "Partnerships" },
        ]}
        currentTab={tab}
        setTab={setTab}
      />
      <h1 className="lg:max-w-[50rem] text-Content-Primary font-semibold text-lg leading-6.5 md:text-xl md:leading-7 lg:text-[2rem] lg:leading-10">
        Cross-domain Team across Healthcare, Semiconductor, Cybersecurity, and
        Automation.
      </h1>
      {tab === "team" ? <Team /> : <Partnership />}
    </div>
  );
};

export default TeamAndPartnership;
