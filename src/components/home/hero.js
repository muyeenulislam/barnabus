import React from "react";
import Image from "next/image";

import Button from "../button";

const HomeHero = () => {
  return (
    <div
      className="py-[2rem] px-[1.5rem] md:py-[3rem] md:px-[5rem] lg:py-[8rem] lg:px-[16rem] flex flex-col-reverse lg:flex-row md:gap-[2.5rem] lg:gap-[6rem] relative"
      style={{
        backgroundImage:
          "linear-gradient(to top, #121314, rgba(0,0,0,0)), url('/images/hero-bg.png')",
        backgroundRepeat: "no-repeat, no-repeat",
        backgroundSize: "100% 100%, cover",
        backgroundPosition: "top, top",
      }}
    >
      <div className="flex flex-col gap-[2rem] lg:gap-[4rem] flex-1">
        <div className="flex flex-col gap-[2rem] text-center lg:text-left">
          <h1 className="text-Content-Primary font-semibold text-[2.5rem] md:text-[3.5rem] lg:text-[4.5rem] leading-[3rem] md:leading-[3.5rem] lg:leading-[4.5rem]">
            AI that doesn’t just generate — it
            <br />
            <span className="text-Action-Buttons-Primary-Accent-Content-Default">
              thinks, acts, and learns.
            </span>
          </h1>
          <p className="lg:pr-[8rem] text-Content-Secondary text-xl leading-7">
            Barnabus is Agentic AI. It doesn’t just predict or respond — it
            thinks like a team, acts like a co-founder, and learns like a living
            system.
            <br />
            <br />
            No dashboards. Just intelligence that grows with you.
          </p>
        </div>
        <div className="hidden lg:flex flex-col md:flex-row gap-4">
          <Button
            label="Explore Future Updates"
            variant="Secondary"
            size="2XL"
            trailingIcon="/icons/circle-arrow-right.svg"
          />
          <Button
            label="Join R&D Cohort"
            variant="Primary-Accent"
            size="2XL"
            trailingIcon="/icons/join-rnd-btn.svg"
          />
        </div>
        <div className="hidden md:flex justify-center items-center lg:hidden flex-col md:flex-row gap-4">
          <Button
            label="Explore Future Updates"
            variant="Secondary"
            size="XL"
            trailingIcon="/icons/circle-arrow-right.svg"
          />
          <Button
            label="Join R&D Cohort"
            variant="Primary-Accent"
            size="XL"
            trailingIcon="/icons/join-rnd-btn.svg"
          />
        </div>
        <div className="flex md:hidden justify-center items-center lg:hidden flex-col md:flex-row gap-4">
          <Button
            label="Join R&D Cohort"
            variant="Primary-Accent"
            size="XL"
            trailingIcon="/icons/join-rnd-btn.svg"
            additionalStyle="w-full"
          />
          <Button
            label="Explore Future Updates"
            variant="Secondary"
            size="XL"
            trailingIcon="/icons/circle-arrow-right.svg"
            additionalStyle="w-full"
          />
        </div>
      </div>
      <div className="flex-1 flex items-center justify-center">
        <Image
          src="/images/hero-home.gif"
          alt="hero"
          height={800}
          width={800}
          className="object-cover h-full w-full"
        />
      </div>
    </div>
  );
};

export default HomeHero;
