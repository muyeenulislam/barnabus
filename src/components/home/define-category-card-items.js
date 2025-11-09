import React, { memo } from "react";
import Image from "next/image";

import {
  DOMAIN_MEMORY_HEADER_ITEMS,
  DOMAIN_MEMORY_CHIPS,
} from "@/utils/arrays";

const Icon = ({ src, alt, className = "h-6 w-6", size = 24 }) => (
  <Image
    src={src}
    alt={alt}
    width={size}
    height={size}
    sizes="(min-width:1024px) 28px, 24px"
    className={className}
  />
);

const Chip = memo(function Chip({
  icon,
  text,
  position = "",
  variant = "default",
}) {
  const base = "absolute flex rounded-full z-100 p-3 gap-3 shadow-boxPrimary";
  const variants = {
    default: `${base} bg-Surface0`,
    accent: `${base} bg-Brand-Accent-Alpha-100 shadow-AccentButton`,
  };
  const textCls =
    variant === "accent"
      ? "text-Action-Buttons-Primary-Accent-Content-Default"
      : "text-Content-Secondary";

  return (
    <div className={`${variants[variant]} ${position}`}>
      <Icon src={icon} alt="chip-icon" className="h-[1.5rem] w-[1.5rem]" />
      <p className={`${textCls} text-ellipsis text-sm leading-5`}>{text}</p>
    </div>
  );
});

const DefineCategoryCard = memo(function DefineCategoryCard({
  children,
  className = "",
}) {
  return (
    <div
      className={`p-4 md:p-5 lg:p-12 rounded-[1.25rem] md:rounded-[1.5rem] lg:rounded-[3rem] bg-Overlays-Black-9 shadow-container relative overflow-hidden min-h-[26rem] lg:min-h-[35rem] ${className}`}
    >
      {children}
    </div>
  );
});

const DefineCategoryCardRound = memo(function DefineCategoryCardRound({
  children,
  className = "",
}) {
  return (
    <div
      className={`h-[6rem] w-[6rem] lg:h-[7.4rem] lg:w-[7.4rem] shadow-boxPrimary rounded-full bg-Surface1 flex flex-col justify-center items-center gap-1.5 lg:gap-2 z-[200] p-1 ${className}`}
    >
      {children}
    </div>
  );
});

const DomainMemoryInnerCard = memo(function DomainMemoryInnerCard() {
  return (
    <div className="flex flex-col p-[1.3rem] lg:p-[1.5rem] gap-2.5 lg:gap-3 rounded-[1.3rem] lg:rounded-3xl bg-Surface0 shadow-boxPrimary max-w-[90%] lg:max-w-[75%] relative">
      {DOMAIN_MEMORY_CHIPS?.map((c, i) => (
        <Chip key={i} {...c} />
      ))}

      <Icon
        src="/icons/sky-cursor-filled.svg"
        alt="cursor"
        size={40}
        className="h-[2.5rem] w-[2.5rem] absolute right-[4.5rem] bottom-[6.5rem]"
      />

      <div className="flex gap-2 items-center">
        <div className="flex justify-center items-center bg-Badge-Brand-Accent-Subtle-Background rounded-full p-1">
          <Icon
            src="/icons/barnabus-logo-neon.svg"
            alt="Barnabus logo"
            size={16}
            className="h-[0.9rem] w-[0.9rem] lg:h-[1rem] lg:w-[1rem]"
          />
        </div>
        <p className="text-Content-Primary text-[0.8rem] lg:text-sm font-semibold leading-4">
          Barnabus
        </p>
      </div>

      <div className="flex flex-col shadow-boxPrimary rounded-xl lg:rounded-2xl p-[1px]">
        <div className="bg-Surface1 rounded-t-xl lg:rounded-t-2xl">
          {DOMAIN_MEMORY_HEADER_ITEMS?.map(({ title, titleCls, desc }, idx) => (
            <div
              key={title}
              className={`flex flex-col gap-1 p-4 ${idx > 0 ? "pt-0" : ""}`}
            >
              <h5
                className={`${titleCls} font-semibold text-[0.79rem] leading-[0.9rem] lg:text-sm lg:leading-4`}
              >
                {title}
              </h5>
              <p className="text-Content-Tertiary text-[0.68rem] lg:text-xs leading-[0.8rem] lg:leading-3.5">
                {desc}
              </p>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-1 p-4">
          <h5 className="text-Content-Secondary font-semibold text-[0.79rem] leading-[0.9rem] lg:text-sm lg:leading-4">
            A personalized note
          </h5>
          <p className="text-Content-Quartiary text-[0.68rem] lg:text-xs leading-[0.8rem] lg:leading-3.5 text-wrap">
            Patient had elevated risk score last quarter and is currently on
            dual antiplatelet therapy. Recommend holding X drug before surgery.
          </p>
          <h5 className="text-Brand-Accent-Alpha-200 font-semibold text-[0.79rem] leading-[0.9rem] lg:text-sm lg:leading-4 mt-2">
            Emad Masoud
          </h5>
        </div>
      </div>
    </div>
  );
});

export { DefineCategoryCard, DefineCategoryCardRound, DomainMemoryInnerCard };
