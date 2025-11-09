import React, { memo } from "react";

import { IconBadge } from "@/utils/common-styles";

import { BlackCardXS } from "../cards";

import { TRUST_FRAMEWORK_PILLARS } from "@/utils/arrays";

const SectionHeading = memo(function SectionHeading({ title, subtitle }) {
  return (
    <div className="flex flex-col gap-1 lg:gap-3 lg:max-w-[30rem]">
      <h3 className="content-heading">{title}</h3>
      <p className="content-subheading">{subtitle}</p>
    </div>
  );
});

const DomainCard = memo(function DomainCard({ icon, title, subtitle }) {
  return (
    <BlackCardXS>
      <div className="flex flex-col gap-5 md:gap-6 lg:gap-12">
        <IconBadge src={icon} />
        <div className="flex flex-col gap-1.5 md:gap-2 lg:gap-4">
          <h6 className="font-semibold text-base leading-6 md:text-lg md:leading-6.5 lg:text-2xl lg:leading-8">
            {title}
          </h6>
          <p className="text-Content-Secondary text-sm leading-5 lg:text-base lg:leading-6">
            {subtitle}
          </p>
        </div>
      </div>
    </BlackCardXS>
  );
});

const TrustPillars = () => {
  return (
    <section className="space-y-8">
      <SectionHeading
        title="Pillars of the Barnabus Trust Framework"
        subtitle="Six foundational principles that govern every aspect of our system"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1.5 md:gap-3 lg:gap-4">
        {TRUST_FRAMEWORK_PILLARS?.map((d) => (
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

export default TrustPillars;
