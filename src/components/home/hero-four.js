import React, { memo } from "react";

const HomeHeroFour = memo(function HomeHeroFour({
  headlineClass,
  subtitleClass,
  actionButtons,
}) {
  return (
    <div
      aria-labelledby="home-hero-title"
      className="relative py-[2rem] md:py-[3rem] lg:py-[13rem] w-full overflow-hidden bg-[#00151E]"
    >
      <video
        className="absolute top-0 left-0 w-full h-[20rem] lg:h-full object-cover fade-bottom-teal-25"
        autoPlay
        muted
        loop
      >
        <source src="/videos/hero-four.webm" type="video/mp4" />
      </video>
      <div className="absolute top-0 left-0 w-full h-full hero-four-gradient z-10" />
      <section className="flex flex-col md:items-center md:text-center lg:items-start lg:text-left gap-[2rem] relative z-100 pt-[15rem] md:pt-[18rem] lg:pt-0">
        <div className="flex flex-col gap-[2rem]">
          <h1 id="home-hero-title" className={headlineClass}>
            AI that doesn’t just generate — it
            <br />
            <span className="text-Action-Buttons-Primary-Accent-Content-Default">
              thinks, acts, and learns.
            </span>
          </h1>

          <p className={subtitleClass}>
            Barnabus is Agentic AI. It doesn’t just predict or respond — it
            thinks like a team, acts like a co-founder, and learns like a living
            system.
            <br />
            <br />
            No dashboards. Just intelligence that grows with you.
          </p>
        </div>

        {actionButtons}
      </section>
    </div>
  );
});

export default HomeHeroFour;
