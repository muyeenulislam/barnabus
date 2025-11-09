import React, { memo } from "react";

import { CompleteFreeRegistrationForm } from "../forms";

import { VERIFICATION_HELP } from "@/utils/arrays";
import Link from "next/link";

const VerificationCard = memo(function VerificationCard({
  title,
  subtitle,
  link,
  linkText,
}) {
  return (
    <div className="bg-Overlays-White-3 shadow-boxPrimary flex flex-col gap-1 lg:gap-1.5 p-4 rounded-[1.25rem] md:p-5 md:rounded-3xl lg:p-4 lg:rounded-2xl">
      <h6 className="text-Content-Primary font-semibold leading-6 md:text-lg md:leading-6.5 lg:text-xl lg:leading-7">
        {title}
      </h6>
      <p className="text-Content-Secondary text-sm leading-5 lg:text-base lg:leading-6">
        {subtitle}{" "}
        <Link
          href={link}
          target="_blank"
          className="text-Action-Buttons-Link-Content-Default"
        >
          {linkText}
        </Link>
      </p>
    </div>
  );
});

const SectionIntro = memo(function SectionIntro() {
  return (
    <div className="flex flex-col md:flex-row lg:flex-col gap-6 md:gap-8 lg:gap-[4rem] lg:w-[35%]">
      <div className="flex flex-col gap-2 md:gap-5 lg:gap-6 text-left">
        <h2 className="h2-title">Complete Your Free Registration</h2>
        <p className="p-subtitle">
          Exclusively for licensed medical professionals in the U.S. and Canada.
          Access is by invitation only during our limited launch cohort.
        </p>
      </div>
      <div className="space-y-4 md:space-y-5 lg:space-y-6">
        <div className="flex flex-col gap-0.5 md:gap-1 lg:gap-1.5 text-left">
          <h2 className="text-Content-Primary text-[1.25rem] md:text-[1.5rem] lg:text-[2rem] font-semibold leading-7 md:leading-8 lg:leading-10">
            Verification Help
          </h2>
          <p className="p-subtitle">
            Barnabus is free for verified healthcare professionals. We use
            licensing identifiers to ensure clinical-grade access.
          </p>
        </div>
        <div className="flex flex-col gap-1 md:gap-2 lg:gap-3">
          {VERIFICATION_HELP.map((s) => (
            <VerificationCard key={s.title ?? s.subtitle} {...s} />
          ))}
        </div>
      </div>
    </div>
  );
});

const CompleteFreeRegistration = () => {
  return (
    <section className="py-[4rem] md:py-[6rem] lg:py-[8rem] flex flex-col lg:flex-row gap-[2rem] lg:gap-[6rem]">
      <SectionIntro />
      <div className="lg:w-[65%]">
        <CompleteFreeRegistrationForm />
      </div>
    </section>
  );
};

export default CompleteFreeRegistration;
