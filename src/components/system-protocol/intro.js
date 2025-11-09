"use client";

import React, { memo } from "react";
import Link from "next/link";

import useScreenSize from "@/utils/usescreensize";
import handleCenterScroll from "@/utils/handle-center-scroll";

import Button from "../button";
import { BlackCardDefault } from "../cards";

const ProtocolIntro = memo(function ProtocolIntro() {
  const screenSize = useScreenSize();

  return (
    <section className="page-intro">
      <div className="page-intro-inner z-101">
        <h1 className="page-intro-heading">
          A System That
          <br />
          <span className="text-Action-Buttons-Primary-Accent-Content-Default">
            Organizes Itself
          </span>
        </h1>

        <p className="page-intro-subheading">
          Barnabus operates through a modular protocol of intelligence agents
          that route, decide, act, and evolve.
        </p>
        <Link
          href="#agent-stack-details"
          className="w-full md:w-max my-6 md:my-8 lg:my-10"
          scroll={false}
          onClick={(e) => handleCenterScroll(e, "agent-stack-details")}
        >
          <Button
            size={
              screenSize.width < 768
                ? "L"
                : screenSize.width >= 768 && screenSize.width < 1024
                ? "XL"
                : "2XL"
            }
            variant="Secondary"
            label="See Agent Stack"
            trailingIcon="/icons/circle-arrow-right.svg"
            additionalStyle="w-full md:w-max"
          />
        </Link>
      </div>

      <BlackCardDefault>
        <div className="flex flex-col lg:flex-row justify-between gap-5 md:gap-6 lg:gap-16">
          <h3 className="h2-title lg:w-1/2 lg:max-w-[30rem]">
            Built with Boundaries. Open with Purpose.
          </h3>

          <p className="content-subheading lg:w-1/2">
            Barnabus operates through a modular, agentic architecture. Each
            agent is defined by role, protocol layer, and memory boundary,
            allowing coordination without chaos, and learning without risk.
            <br />
            <br />
            The agents shown here represent the surface layer. Deeper layers,
            including internal reasoning flows, security logic, and escalation
            protocols, are confidential by design, ensuring safety, compliance,
            and resilience across high-stakes domains.
          </p>
        </div>
      </BlackCardDefault>
    </section>
  );
});

export default ProtocolIntro;
