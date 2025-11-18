import React, { memo } from "react";

const HomeHeroTwo = memo(function HomeHeroTwo({
  headlineClass,
  subtitleClass,
  actionButtons,
}) {
  return (
    <div
      aria-labelledby="home-hero-title"
      className="relative py-[2rem] md:py-[3rem] lg:py-[12rem] w-full overflow-hidden bg-black"
    >
      {/* Video background for mobile */}
      <video
        className="absolute bottom-15 left-0 w-full h-[20rem] md:hidden object-cover fade-bottom-25 fade-top-25"
        autoPlay
        muted
        loop
      >
        <source src="/videos/hero-two.webm" type="video/mp4" />
      </video>

      {/* Video background for desktop */}
      <video
        className="hidden md:block absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
      >
        <source src="/videos/hero-two.webm" type="video/mp4" />
      </video>

      {/* Overlay for desktop */}
      <div className="hidden md:block absolute top-0 left-0 w-full h-full bg-black opacity-50 z-10" />

      {/* Content Section */}
      <section className="flex flex-col items-center justify-center gap-[10rem] md:gap-[4rem] flex-1 relative z-100 text-center">
        <div className="flex flex-col gap-[2rem] items-center">
          {/* Headline */}
          <h1 id="home-hero-title" className={headlineClass}>
            AI that doesn’t just generate — it
            <br />
            <span className="text-Action-Buttons-Primary-Accent-Content-Default">
              thinks, acts, and learns.
            </span>
          </h1>

          {/* Subtitle */}
          <p className={subtitleClass}>
            Barnabus is Agentic AI. It doesn’t just predict or respond — it
            thinks like a team, acts like a co-founder, and learns like a living
            system.
            <br />
            <br />
            No dashboards. Just intelligence that grows with you.
          </p>
        </div>

        {/* Action Buttons */}
        {actionButtons}
      </section>
    </div>
  );
});

export default HomeHeroTwo;
