import React, { memo } from "react";
import Image from "next/image";

const HomeHero = memo(function HomeHero({
  headlineClass,
  subtitleClass,
  actionButtons,
}) {
  return (
    <div
      aria-labelledby="home-hero-title"
      className="relative py-[2rem] md:py-[3rem] lg:py-[8rem] bg-[url('/images/hero-bg.svg')] 2xl:bg-[url('/images/hero-bg-lg.svg')] bg-no-repeat bg-center lg:bg-left bg-cover"
    >
      <section className="flex flex-col-reverse lg:flex-row md:gap-[2.5rem] lg:gap-[6rem]">
        <div className="flex flex-col gap-[2rem] lg:gap-[4rem] flex-1">
          <div className="flex flex-col gap-[2rem] items-center lg:items-start text-center lg:text-left">
            <h1 id="home-hero-title" className={headlineClass}>
              AI that doesn’t just generate — it
              <br />
              <span className="text-Action-Buttons-Primary-Accent-Content-Default">
                thinks, acts, and learns.
              </span>
            </h1>

            <p className={subtitleClass}>
              Barnabus is Agentic AI. It doesn’t just predict or respond — it
              thinks like a team, acts like a co-founder, and learns like a
              living system.
              <br />
              <br />
              No dashboards. Just intelligence that grows with you.
            </p>
          </div>

          {actionButtons}
        </div>

        <div className="flex-1 flex items-center justify-center">
          <Image
            src="/images/hero-home.gif"
            alt="Barnabus agentic AI hero illustration"
            width={800}
            height={800}
            priority
            fetchPriority="high"
            decoding="async"
            draggable={false}
            unoptimized
            className="object-cover h-full w-full"
          />
        </div>
      </section>
    </div>
  );
});

export default HomeHero;
