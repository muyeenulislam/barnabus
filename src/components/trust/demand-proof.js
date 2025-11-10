import React from "react";

import { DEMAND_PROOF } from "@/utils/arrays";

import { SectionHeading, DomainCard } from "./trust-components";

const DemandProof = () => {
  return (
    <section className="space-y-8">
      <SectionHeading
        title="For Every Audience That Demands Proof"
        subtitle="Built for accountability, designed for everyone who needs verification"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1.5 md:gap-3 lg:gap-4">
        {DEMAND_PROOF?.map((d) => (
          <DomainCard
            key={d.title ?? d.subtitle}
            icon={d.icon}
            title={d.title}
            subtitle={d.subtitle}
          />
        ))}
      </div>
    </section>
  );
};

export default DemandProof;
