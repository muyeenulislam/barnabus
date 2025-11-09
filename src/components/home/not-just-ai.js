import React, { memo } from "react";
import Image from "next/image";

import { Tags } from "../tags";

import { NOT_JUST_AI_LIST } from "@/utils/arrays";

const SectionIntro = memo(function SectionIntro() {
  return (
    <div className="flex flex-col gap-2 md:gap-5 lg:gap-6 justify-center items-center text-center">
      <h2 className="h2-title">
        Not Just AI. A Thinking Layer
        <br /> for the Future.
      </h2>
      <p className="p-subtitle">
        We believe in intelligence that remembers, reasons, and evolves with
        you.
        <br /> Not a chatbot. A living system.
      </p>
    </div>
  );
});

const NotJustAI = () => {
  return (
    <section className="py-[4rem] md:py-[6rem] lg:py-[16rem] flex flex-col gap-[4rem] md:gap-[6rem] lg:gap-[6rem]">
      <SectionIntro />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-1.5 md:gap-2 lg:gap-4">
        {NOT_JUST_AI_LIST?.map((item, index) => (
          <div
            key={index}
            className={`relative overflow-hidden flex flex-col gap-1.5 md:gap-2 lg:gap-3 p-4 md:p-5 lg:p-12 rounded-2xl md:rounded-3xl lg:rounded-[3rem] shadow-boxPrimary bg-Overlays-White-3 ${
              index === NOT_JUST_AI_LIST?.length - 1 &&
              "lg:col-span-3 flex-col md:flex-row lg:flex-col"
            }`}
          >
            {item.bg && (
              <div
                className="h-[21rem] w-[21rem] absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2"
                style={{ background: item.bg }}
              ></div>
            )}
            <p className="text-Content-Primary font-semibold text-lg md:text-xl lg:text-[2rem] leading-6.5 md:leading-7 lg:leading-10">
              {item.title}
            </p>
            {item?.subtitle && (
              <p className="text-Content-Secondary font-normal text-sm md:text-base lg:text-lg leading-4 md:leading-6 lg:leading-6.5">
                {item.subtitle}
              </p>
            )}
            {item.list && (
              <div className="flex flex-col lg:flex-row gap-2 items-center justify-around w-full pt-[1rem] md:pt-0 lg:pt-[2rem]">
                {item.list?.map((value, index) => (
                  <React.Fragment key={index}>
                    <Tags
                      label={value?.point}
                      size="L"
                      variant={value?.color}
                      additionalStyle="w-max"
                    />

                    {/* Arrow between tags (not after the last) */}
                    {index < item.list.length - 1 && (
                      <Image
                        src="/icons/arrow-right.svg"
                        alt="arrow"
                        width={16}
                        height={16}
                        aria-hidden="true"
                        className="h-[2rem] w-[2rem] rotate-90 lg:rotate-0 opacity-80"
                      />
                    )}
                  </React.Fragment>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default NotJustAI;
