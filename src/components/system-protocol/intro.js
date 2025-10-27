import React, { memo } from "react";
import Link from "next/link";

import Button from "../button";
import { BlackCardDefault } from "../cards";

const CTAS = [
  {
    href: "#",
    label: "See Agent Stack",
    variant: "Secondary",
    icon: "/icons/circle-arrow-right.svg",
  },
];

function CTAGroup({ size, containerClass, fullWidth = false }) {
  return (
    <div className={`my-6 md:my-8 lg:my-10 ${containerClass}`}>
      {CTAS.map((c, i) => (
        <Link key={i} href={c.href} className={fullWidth ? "w-full" : ""}>
          <Button
            label={c.label}
            variant={c.variant}
            size={size}
            trailingIcon={c.icon}
            additionalStyle={fullWidth ? "w-full" : undefined}
          />
        </Link>
      ))}
    </div>
  );
}

const ProtocolIntro = memo(function ProtocolIntro() {
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

        <CTAGroup
          size="2XL"
          containerClass="hidden lg:flex md:flex-row gap-4"
        />
        <CTAGroup
          size="XL"
          containerClass="hidden md:flex lg:hidden flex-row justify-center items-center gap-4"
        />
        <CTAGroup
          size="L"
          containerClass="w-full flex flex-col md:hidden justify-center items-center gap-4"
          fullWidth
        />
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
