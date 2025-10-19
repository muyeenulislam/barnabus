import React, { memo } from "react";
import { EarlyAccessForm } from "../forms";

const SectionIntro = memo(function SectionIntro() {
  return (
    <div className="flex flex-col gap-2 md:gap-5 lg:gap-6  text-left lg:w-[35%]">
      <h2 className="text-Content-Primary text-[2rem] md:text-[2.5rem] lg:text-[3.5rem] font-semibold leading-10 md:leading-12 lg:leading-16">
        Join the R&D: Be Part of the Future of Agentic Intelligence
      </h2>
      <p className="text-Content-Secondary text-base md:text-[1.125rem] lg:text-[1.25rem] leading-6 md:leading-[1.625rem] lg:leading-7">
        Barnabus is built for those who think deeply, move fast, and refuse to
        settle for shallow AI.
        <br />
        <br /> We’re not building another assistant. We’re building an
        intelligence layer, one that thinks, acts, and learns alongside you.
        This phase is for engineers, analysts, researchers, and systems
        thinkers.
        <br />
        <br /> If that’s you, we’d love to build with you.
      </p>
    </div>
  );
});

const JoinRnd = () => {
  return (
    <div className="py-[4rem] px-[1.5rem] md:py-[6rem] md:px-[2.5rem] lg:py-[8rem] lg:px-[16rem] flex flex-col lg:flex-row gap-[2rem] lg:gap-[6rem]">
      <SectionIntro />
      <div className="lg:w-[65%]">
        <EarlyAccessForm />
      </div>
    </div>
  );
};

export default JoinRnd;
