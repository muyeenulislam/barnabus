import React, { memo } from "react";
import { INTELLIGENCE_KEYPOINTS } from "@/utils/arrays";

const SectionIntro = memo(function SectionIntro() {
  return (
    <div className="flex flex-col gap-2 md:gap-5 lg:gap-6 justify-center items-center text-center">
      <h2 className="text-Content-Primary text-[2rem] md:text-[2.5rem] lg:text-[3.5rem] font-semibold leading-10 md:leading-12 lg:leading-16">
        The Intelligence the World Needs.
        <br /> The Agentic AI Barnabus Builds.
      </h2>
      <p className="text-Content-Secondary text-base md:text-[1.125rem] lg:text-[1.25rem] leading-6 md:leading-[1.625rem] lg:leading-7">
        Smart isn’t enough — Barnabus makes AI meaningful.
      </p>
    </div>
  );
});
const KeyPoints = memo(function KeyPoints() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[0.375rem] md:gap-2 lg:gap-4">
      {INTELLIGENCE_KEYPOINTS?.map((item, index) => (
        <div
          key={index}
          className="p-4 rounded-2xl md:p-5 md:rounded-3xl lg:px-12 lg:py-8 lg:rounded-4xl shadow-boxPrimary relative overflow-hidden"
          style={{
            background:
              "radial-gradient(53.06% 69.61% at 50% 100%, rgba(255, 255, 255, 0.01) 0%, rgba(18, 19, 20, 0.19) 100%)",
          }}
        >
          <div
            className="h-[21rem] w-[21rem] absolute bottom-[-14rem] md:bottom-[-15rem] lg:bottom-[-12rem] left-1/2 -translate-x-1/2"
            style={{ background: item.bgColor }}
          ></div>
          <p className="text-Content-Secondary text-center font-semibold text-lg leading-6.5 md:text-xl md:leading-7 lg:text-2xl lg:leading-8">
            {item.title}
          </p>
        </div>
      ))}
    </div>
  );
});

const Intelligence = () => {
  return (
    <div className="py-[4rem] px-[2rem] md:py-[6rem] md:px-[2.5rem] lg:p-[16rem] flex flex-col gap-4.5 md:gap-6 lg:gap-[4rem]">
      <SectionIntro />
      <KeyPoints />
    </div>
  );
};

export default Intelligence;
