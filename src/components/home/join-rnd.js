import React, { memo } from "react";

import { EarlyAccessForm } from "../forms";

const SectionIntro = memo(function SectionIntro() {
  return (
    <div className="flex flex-col gap-2 md:gap-5 lg:gap-6  text-left lg:w-[35%]">
      <h2 className="h2-title">
        Join the R&D: Be Part of the Future of Agentic Intelligence
      </h2>
      <p className="p-subtitle">
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
    <>
      <div id="join-rnd"></div>
      <section className="py-[4rem] md:py-[6rem] lg:py-[8rem] flex flex-col lg:flex-row gap-[2rem] lg:gap-[6rem]">
        <SectionIntro />
        <div className="lg:w-[65%]">
          <EarlyAccessForm />
        </div>
      </section>
    </>
  );
};

export default JoinRnd;
