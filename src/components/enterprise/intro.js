import React from "react";
import Button from "../button";
import Link from "next/link";
import Image from "next/image";

import { GRADE_INTELLIGENCE } from "@/utils/arrays";

const EnterpriseIntro = () => {
  return (
    <div className="bg-backgroundDarkGray py-[2rem] px-[1.5rem] md:py-[3rem] md:px-[2.5rem] lg:py-[4rem] lg:px-[16rem] flex flex-col gap-[3.5rem] md:gap-[4rem] lg:gap-[6rem]">
      <div className="flex flex-col gap-[1.5rem] text-center justify-center items-center z-101">
        <h1 className="text-Content-Primary font-semibold text-[2.5rem] md:text-[3rem] lg:text-[4rem] leading-[3rem] md:leading-[3.5rem] lg:leading-[4.5rem] lg:max-w-[60rem]">
          Agentic Infrastructure for the{" "}
          <span className="text-Action-Buttons-Primary-Accent-Content-Default">
            Real World
          </span>
        </h1>
        <p className="text-Content-Secondary text-xl leading-7 lg:max-w-[40rem] mx-auto">
          Whether you&apos;re securing a network, managing clinical workflows,
          or simulating industrial systems — Barnabus adapts to your world.
        </p>
        <Link href={"#"} className="lg:my-8 w-full">
          <Button
            label="See Use Cases"
            trailingIcon="/icons/circle-arrow-right.svg"
            variant="Secondary"
            size="2XL"
            additionalStyle="w-full md:w-max"
          />
        </Link>
      </div>
      <div className="flex flex-col lg:flex-row gap-5 md:gap-6 lg:gap-16 p-5 md:p-6 lg:p-16 rounded-3xl md:rounded-4xl lg:rounded-[4rem] bg-Overlays-Black-2 shadow-boxPrimary z-101">
        <div className="flex flex-col gap-3 md:gap-6 lg:w-1/2 lg:pr-[10rem]">
          <h3 className="content-heading">
            Grade Intelligence™ - built not just to scale, but to think with
            accountability
          </h3>
          <p className="content-subheading">
            Where modular agents, ethical alignment, and domain expertise
            converge to create responsible systems.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-5 lg:gap-x-12 lg:w-1/2 h-max">
          {GRADE_INTELLIGENCE?.map((item, index) => (
            <div
              key={index}
              className="flex gap-2 md:gap-3 lg:gap-4 items-center lg:items-start"
            >
              <Image
                src="/icons/circle-arrow-right-neon.svg"
                alt="arrow right"
                height={32}
                width={32}
                className="shrink-0 h-8 md:h-10 w-8 md:w-10"
              />
              <p className="text-Content-Secondary text-base leading-6 md:text-lg md:leading-6.5 lg:text-xl lg:leading-7">
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EnterpriseIntro;
