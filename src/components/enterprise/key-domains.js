import React, { memo } from "react";
import Image from "next/image";
import {
  KEY_ENTERPRISE_DOMAINS,
  RUN_ANYWHERE,
  SAFE_BY_DESIGN,
  EVOLUTION_PATH,
} from "@/utils/arrays";

const ICON_PANEL_STYLE = Object.freeze({
  background:
    "radial-gradient(66.22% 86.87% at 50% 100%, rgba(255, 255, 255, 0.08) 0%, rgba(18, 19, 20, 0.19) 100%), rgba(255, 255, 255, 0.03)",
  boxShadow:
    "0 0.5px 0 0.5px rgba(255, 255, 255, 0.12) inset, 0 0 1.5px 1.5px rgba(247, 247, 248, 0.12) inset",
});

const FirstPart = memo(function FirstPart() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-1.5 md:gap-3 lg:gap-4">
      <div className="flex flex-col gap-8 lg:gap-10 pb-4 md:pb-0">
        <div className="flex flex-col gap-1 lg:gap-3">
          <h3 className="content-heading">Key Enterprise Domains</h3>
          <p className="content-subheading">From Data to Understanding</p>
        </div>
      </div>
      {KEY_ENTERPRISE_DOMAINS?.map((item, index) => (
        <div
          key={index}
          className="bg-Overlays-Black-9 shadow-boxPrimary text-Content-Primary flex flex-col gap-5 md:gap-6 lg:gap-12 p-4 md:p-5 lg:p-8 rounded-[1.25rem] md:rounded-3xl lg:rounded-4xl"
        >
          <div
            className="shrink-0 h-max w-max flex justify-center items-center rounded-[1.125rem] lg:rounded-3xl p-2 lg:p-3"
            style={{ ...ICON_PANEL_STYLE }}
            aria-hidden="true"
          >
            <Image
              src={item.icon}
              alt=""
              height={32}
              width={32}
              className="shrink-0 h-[1.875rem] w-[1.875rem] lg:h-[2.5rem] lg:w-[2.5rem]"
            />
          </div>
          <div className="flex flex-col gap-1.5 md:gap-2 lg:gap-4">
            <h6 className="font-semibold text-base leading-6 md:text-lg md:leading-6.5 lg:text-2xl lg:leading-8">
              {item.title}
            </h6>
            <p className="text-Content-Secondary text-sm leading-5 lg:text-base lg:leading-6">
              {item.subtitle}
            </p>
          </div>
        </div>
      ))}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-1.5 md:gap-3 lg:gap-4 col-span-full">
        <div className="bg-Overlays-Black-9 shadow-boxPrimary text-Content-Primary flex flex-col justify-between gap-6 md:gap-8 lg:gap-12 p-6 md:p-8 lg:p-12 rounded-[1.5rem] md:rounded-[2rem] lg:rounded-[3rem]">
          <div className="flex flex-col gap-1.5 md:gap-2 lg:gap-3">
            <h4 className="text-Content-Primary font-semibold text-xl leading-7 md:text-2xl md:leading-8 lg:text-[2rem] lg:leading-10">
              We’re ethical & safe by design.
            </h4>
            <p className="text-Content-Secondary leading-6 lg:text-lg lg:leading-6.5">
              Transparency and Control at Every Level
            </p>
          </div>
          <div className="flex flex-col gap-1 md:gap-2 lg:gap-3">
            {SAFE_BY_DESIGN?.map((item, index) => (
              <div
                key={index}
                className="bg-Surface1 shadow-boxPrimary flex flex-col gap-1 lg:gap-2 p-4 rounded-[1.25rem] md:p-5 md:rounded-3xl lg:p-6 lg:rounded-3xl"
              >
                <h6 className="text-Content-Primary font-semibold leading-6 md:text-lg md:leading-6.5 lg:text-xl lg:leading-7">
                  {item.title}
                </h6>
                <p className="text-Content-Secondary text-sm leading-5 lg:text-base lg:leading-6">
                  {item.subtitle}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-Overlays-Black-9 shadow-boxPrimary text-Content-Primary flex flex-col justify-between gap-6 md:gap-8 lg:gap-12 p-6 md:p-8 lg:p-12 rounded-[1.5rem] md:rounded-[2rem] lg:rounded-[3rem]">
          <div className="flex flex-col gap-1.5 md:gap-2 lg:gap-3">
            <h4 className="text-Content-Primary font-semibold text-xl leading-7 md:text-2xl md:leading-8 lg:text-[2rem] lg:leading-10">
              We run anywhere, on infra you already trust.
            </h4>
            <p className="text-Content-Secondary leading-6 lg:text-lg lg:leading-6.5">
              Infrastructure-Ready
            </p>
          </div>
          <div className="flex items-center flex-wrap gap-x-6 gap-y-5 md:gap-x-8 md:gap-y-6 lg:gap-x-12 lg:gap-y-8">
            {RUN_ANYWHERE?.map((item, index) => (
              <Image
                key={index}
                src={item}
                height={32}
                width={80}
                alt="icon"
                className="h-8 lg:h-[3.5rem] w-max grayscale"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
});

const EvolutionPath = memo(function EvolutionPath() {
  return (
    <div className="flex flex-col md:flex-row lg:flex-col pt-[2.5rem] md:pt-[3rem] lg:pt-[4rem] gap-[2.5rem] md:gap-[3rem] lg:gap-[4rem]">
      <div className="flex flex-col gap-2 md:gap-5 lg:gap-6 text-center  md:text-left lg:text-center md:w-1/2 lg:w-full">
        <h2 className="text-Content-Primary text-[2rem] md:text-[2.5rem] lg:text-[3.5rem] font-semibold leading-10 md:leading-12 lg:leading-16">
          The Evolution Path
        </h2>
        <p className="text-Content-Secondary text-base md:text-[1.125rem] lg:text-[1.25rem] leading-6 md:leading-[1.625rem] lg:leading-7">
          Your Systems Today. Smarter Tomorrow.
        </p>
      </div>
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 md:w-1/2 lg:w-full relative">
        <div
          className="absolute h-[0.1875rem] w-full top-[2rem] hidden lg:block"
          style={{
            background:
              "linear-gradient(90deg, rgba(255, 255, 255, 0.01) 0%, #3BF5FF 30%, #3BF5FF 70%, rgba(255, 255, 255, 0.01) 100%)",
          }}
        ></div>
        <div
          className="absolute w-[0.1875rem] h-full left-[1.4rem] lg:hidden"
          style={{
            background:
              "linear-gradient(180deg, rgba(255, 255, 255, 0.01) 0%, #3BF5FF 30%, #3BF5FF 70%, rgba(255, 255, 255, 0.01) 100%)",
          }}
        ></div>
        {EVOLUTION_PATH?.map((item, index) => (
          <div
            key={index}
            className="flex lg:flex-col gap-6 md:gap-8 lg:gap-12 items-center lg:justify-center"
          >
            <div
              className="shrink-0 h-max w-max flex justify-center items-center rounded-[1.125rem] lg:rounded-3xl p-2 lg:p-3 glowyBoxBg hover:scale-125 transition-all cursor-pointer"
              aria-hidden="true"
            >
              <Image
                src={item.icon}
                alt=""
                height={32}
                width={32}
                className="shrink-0 h-[1.875rem] w-[1.875rem] lg:h-[2.5rem] lg:w-[2.5rem]"
              />
            </div>
            <div className="flex flex-col gap-1 md:gap-2 lg:text-center">
              <p className="text-Content-Tertiary text-xs leading-4 md:text-sm md:leading-5 lg:text-base lg:leading-5">
                Phase {item.phase}
              </p>
              <h6 className="text-Content-Primary text-sm leading-5 md:text-base md:leading-6 lg:text-xl lg:leading-7">
                {item.title}
              </h6>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
});

const KeyEnterpriseDomains = () => {
  return (
    <div
      className="py-[2rem] px-[1.5rem] md:py-[3rem] md:px-[2.5rem] lg:py-[8rem] lg:px-[16rem] flex flex-col gap-[2.5rem] md:gap-[3rem] lg:gap-[4rem]"
      style={{
        background: "linear-gradient(180deg, #121314 0%, #1F2021 50%)",
      }}
    >
      <FirstPart />
      <EvolutionPath />
    </div>
  );
};

export default KeyEnterpriseDomains;
