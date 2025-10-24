"use client";

import React, { memo, useMemo } from "react";
import Image from "next/image";
import Tooltip from "../tooltip";

import useTooltipPlacement from "@/utils/use-tooltip-placement";
import {
  KEY_ENTERPRISE_DOMAINS,
  RUN_ANYWHERE,
  SAFE_BY_DESIGN,
  EVOLUTION_PATH,
} from "@/utils/arrays";
import { IconBadge } from "@/utils/common-styles";

const CARD_BASE = "bg-Overlays-Black-9 shadow-boxPrimary text-Content-Primary";

const SMALL_CARD = `${CARD_BASE} flex flex-col gap-5 md:gap-6 lg:gap-12 p-4 md:p-5 lg:p-8 rounded-[1.25rem] md:rounded-3xl lg:rounded-4xl`;

const BIG_CARD = `${CARD_BASE} flex flex-col justify-between gap-6 md:gap-8 lg:gap-12 p-6 md:p-8 lg:p-12 rounded-[1.5rem] md:rounded-[2rem] lg:rounded-[3rem]`;

const H_LINE =
  "bg-[linear-gradient(90deg,rgba(255,255,255,0.01)_0%,#3BF5FF_30%,#3BF5FF_70%,rgba(255,255,255,0.01)_100%)]";
const V_LINE =
  "bg-[linear-gradient(180deg,rgba(255,255,255,0.01)_0%,#3BF5FF_30%,#3BF5FF_70%,rgba(255,255,255,0.01)_100%)]";

const SectionHeading = memo(function SectionHeading({ title, subtitle }) {
  return (
    <div className="flex flex-col gap-1 lg:gap-3">
      <h3 className="content-heading">{title}</h3>
      <p className="content-subheading">{subtitle}</p>
    </div>
  );
});

const DomainCard = memo(function DomainCard({ icon, title, subtitle }) {
  return (
    <div className={SMALL_CARD}>
      <IconBadge src={icon} />
      <div className="flex flex-col gap-1.5 md:gap-2 lg:gap-4">
        <h6 className="font-semibold text-base leading-6 md:text-lg md:leading-6.5 lg:text-2xl lg:leading-8">
          {title}
        </h6>
        <p className="text-Content-Secondary text-sm leading-5 lg:text-base lg:leading-6">
          {subtitle}
        </p>
      </div>
    </div>
  );
});

const SafetyCard = memo(function SafetyCard({ title, subtitle }) {
  return (
    <div className="bg-Surface1 shadow-boxPrimary flex flex-col gap-1 lg:gap-2 p-4 rounded-[1.25rem] md:p-5 md:rounded-3xl lg:p-6 lg:rounded-3xl">
      <h6 className="text-Content-Primary font-semibold leading-6 md:text-lg md:leading-6.5 lg:text-xl lg:leading-7">
        {title}
      </h6>
      <p className="text-Content-Secondary text-sm leading-5 lg:text-base lg:leading-6">
        {subtitle}
      </p>
    </div>
  );
});

const InfraLogo = memo(function InfraLogo({ src, alt = "icon" }) {
  return (
    <Image
      src={src}
      height={32}
      width={80}
      alt={alt}
      className="h-8 lg:h-[3.5rem] w-max grayscale hover:grayscale-0 transition"
    />
  );
});

const StepTooltipContent = memo(function StepTooltipContent({ item }) {
  const { phase, title, summary, steps = [] } = item || {};
  return (
    <div className="space-y-4 md:space-y-6 lg:space-y-8">
      <div className="space-y-1 md:space-y-3">
        <div className="space-y-1">
          <p className="text-Content-Secondary text-xs leading-4 md:text-sm md:leading-5 lg:text-base lg:leading-6">
            Phase {phase}
          </p>
          <h5 className="text-Content-Brand-Accent font-semibold text-xs leading-4 md:text-base md:leading-6 lg:text-xl lg:leading-7">
            {title}
          </h5>
        </div>
        <p className="text-Content-Secondary text-xs leading-4 md:text-sm md:leading-5 lg:text-base lg:leading-6">
          {summary}
        </p>
      </div>

      {!!steps.length && (
        <div className="space-y-3">
          {steps.map((step) => (
            <div className="flex gap-1 md:gap-3" key={step.code ?? step.title}>
              <Image
                src="/icons/circle-check-neon.svg"
                alt="circle check"
                height={32}
                width={32}
                className="h-6 w-6 md:h-9.5 md:w-9.5 shrink-0"
              />
              <div className="space-y-1">
                <h6 className="text-Content-Primary text-sm leading-5 md:text-base md:leading-6">
                  {step.code}: {step.title}
                </h6>
                <p className="text-Content-Secondary text-xs leading-4 md:text-sm md:leading-5 lg:text-base lg:leading-6">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
});

const EvolutionNode = memo(function EvolutionNode({ item }) {
  const { icon, phase, title } = item || {};

  const placement = useTooltipPlacement();
  const arrowSide =
    placement === "top" ? "bottom" : placement === "left" ? "right" : "left";

  return (
    <div className="flex lg:flex-col gap-6 md:gap-8 lg:gap-12 items-center lg:justify-center">
      <Tooltip
        trigger="click"
        placement={placement}
        offset={12}
        arrowSide={arrowSide}
        content={<StepTooltipContent item={item} />}
      >
        <div
          className="shrink-0 h-max w-max flex justify-center items-center rounded-[1.125rem] lg:rounded-3xl p-2 lg:p-3 glowyBoxBg hover:scale-125 transition-all cursor-pointer"
          aria-hidden="true"
        >
          <Image
            src={icon}
            alt=""
            height={32}
            width={32}
            className="shrink-0 h-[1.875rem] w-[1.875rem] lg:h-[2.5rem] lg:w-[2.5rem]"
          />
        </div>
      </Tooltip>

      <div className="flex flex-col gap-1 md:gap-2 lg:text-center">
        <p className="text-Content-Tertiary text-xs leading-4 md:text-sm md:leading-5 lg:text-base lg:leading-5">
          Phase {phase}
        </p>
        <h6 className="text-Content-Primary text-sm leading-5 md:text-base md:leading-6 lg:text-xl lg:leading-7">
          {title}
        </h6>
      </div>
    </div>
  );
});

const FirstPart = memo(function FirstPart() {
  const domains = useMemo(() => KEY_ENTERPRISE_DOMAINS || [], []);
  const safety = useMemo(() => SAFE_BY_DESIGN || [], []);
  const infra = useMemo(() => RUN_ANYWHERE || [], []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-1.5 md:gap-3 lg:gap-4">
      <div className="flex flex-col gap-8 lg:gap-10 pb-4 md:pb-0">
        <SectionHeading
          title="Key Enterprise Domains"
          subtitle="From Data to Understanding"
        />
      </div>

      {domains.map((d) => (
        <DomainCard
          key={d.title ?? d.subtitle}
          icon={d.icon}
          title={d.title}
          subtitle={d.subtitle}
        />
      ))}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-1.5 md:gap-3 lg:gap-4 col-span-full">
        <div className={BIG_CARD}>
          <div className="flex flex-col gap-1.5 md:gap-2 lg:gap-3">
            <h4 className="text-Content-Primary font-semibold text-xl leading-7 md:text-2xl md:leading-8 lg:text-[2rem] lg:leading-10">
              We’re ethical & safe by design.
            </h4>
            <p className="text-Content-Secondary leading-6 lg:text-lg lg:leading-6.5">
              Transparency and Control at Every Level
            </p>
          </div>

          <div className="flex flex-col gap-1 md:gap-2 lg:gap-3">
            {safety.map((s) => (
              <SafetyCard key={s.title ?? s.subtitle} {...s} />
            ))}
          </div>
        </div>

        <div className={BIG_CARD}>
          <div className="flex flex-col gap-1.5 md:gap-2 lg:gap-3">
            <h4 className="text-Content-Primary font-semibold text-xl leading-7 md:text-2xl md:leading-8 lg:text-[2rem] lg:leading-10">
              We run anywhere, on infra you already trust.
            </h4>
            <p className="text-Content-Secondary leading-6 lg:text-lg lg:leading-6.5">
              Infrastructure-Ready
            </p>
          </div>

          <div className="flex items-center flex-wrap gap-x-6 gap-y-5 md:gap-x-8 md:gap-y-6 lg:gap-x-12 lg:gap-y-8">
            {infra.map((src, i) => (
              <InfraLogo key={`${src}-${i}`} src={src} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
});

const EvolutionPath = memo(function EvolutionPath() {
  const path = useMemo(() => EVOLUTION_PATH || [], []);

  return (
    <div className="flex flex-col md:flex-row lg:flex-col pt-[2.5rem] md:pt-[3rem] lg:pt-[4rem] gap-[2.5rem] md:gap-[3rem] lg:gap-[4rem]">
      <div className="flex flex-col gap-2 md:gap-5 lg:gap-6 text-center md:text-left lg:text-center md:w-1/2 lg:w-full">
        <h2 className="text-Content-Primary text-[2rem] md:text-[2.5rem] lg:text-[3.5rem] font-semibold leading-10 md:leading-12 lg:leading-16">
          The Evolution Path
        </h2>
        <p className="text-Content-Secondary text-base md:text-[1.125rem] lg:text-[1.25rem] leading-6 md:leading-[1.625rem] lg:leading-7">
          Your Systems Today. Smarter Tomorrow.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 md:w-1/2 lg:w-full relative">
        {/* Guiding lines */}
        <div
          className={`absolute h-[0.1875rem] w-full top-[2rem] hidden lg:block ${H_LINE}`}
        />
        <div
          className={`absolute w-[0.1875rem] h-full left-[1.4rem] lg:hidden ${V_LINE}`}
        />

        {path.map((p) => (
          <EvolutionNode key={p.title ?? p.phase} item={p} />
        ))}
      </div>
    </div>
  );
});

function KeyEnterpriseDomains() {
  return (
    <section
      className="py-[2rem] px-[1.5rem] md:py-[3rem] md:px-[2.5rem] lg:py-[8rem] lg:px-[16rem] flex flex-col gap-[2.5rem] md:gap-[3rem] lg:gap-[4rem] bg-[linear-gradient(180deg,#121314_0%,#1F2021_50%)]"
      aria-labelledby="key-domains-heading"
    >
      <FirstPart />
      <EvolutionPath />
    </section>
  );
}

export default memo(KeyEnterpriseDomains);
