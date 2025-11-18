"use client";

import React, { memo } from "react";
import Image from "next/image";
import Link from "next/link";

import ProgressBar from "../progress-bar";
import { Tags } from "../tags";
import Button from "../button";
import { BlackCardDefault } from "../cards";

import {
  DEFINE_NEW_CATEGORY_TABLE_CONTENT,
  HUMAN_UX_ITEMS,
  CLINICAL_FEED,
  CLINICAL_FEED_SUMMARY,
} from "@/utils/arrays";
import useScreenSize from "@/utils/usescreensize";

import {
  DefineCategoryCard,
  DefineCategoryCardRound,
  DomainMemoryInnerCard,
} from "./define-category-card-items";

const ICON_PANEL_STYLE = Object.freeze({
  background:
    "radial-gradient(53.06% 69.61% at 50% 100%, var(--Overlays-White-3, rgba(255, 255, 255, 0.01)) 0%, var(--Overlays-Black-9, rgba(18, 19, 20, 0.19)) 100%), var(--Overlays-White-3, rgba(255, 255, 255, 0.03))",
  boxShadow:
    "0 0.4px 0 0.4px var(--Overlays-White-6, rgba(255, 255, 255, 0.12)) inset, 0 0 1.2px 1.2px var(--Overlays-White-6, rgba(247, 247, 248, 0.12)) inset",
});

const pct = (n) => `w-[${n}%]`;

const SectionIntro = memo(function SectionIntro() {
  return (
    <div className="flex flex-col gap-2 md:gap-5 lg:gap-6 justify-center items-center text-center mb-10 md:mb-12 lg:mb-16">
      <h2 className="h2-title">Barnabus Define a New Category</h2>
      <p className="p-subtitle">
        “Barnabus is different, we don’t build GenAI. We build Agentic AI.”
        <br />
        That alone separates us from 90% of the GenAI tools trying to act smart.
        Now own the phrase: <br />
        “Agentic AI that Thinks, Acts, and Learns, Just Like a Human Team
        Would.”
      </p>
    </div>
  );
});

const ComparisonTable = memo(function ComparisonTable({ rows }) {
  return (
    <div className="rounded-xl lg:rounded-3xl bg-Surface0 shadow-homeTableShadow p-[1px]">
      <div className="flex gap-4 p-2 md:p-3 lg:p-4">
        <p className="flex-1 text-left text-sm leading-5 md:text-base md:leading-6 lg:text-xl lg:leading-7">
          Static & Reactive
        </p>
        <p className="flex-1 text-left text-sm leading-5 md:text-base md:leading-6 lg:text-xl lg:leading-7">
          Adaptive & Evolving
        </p>
      </div>

      {rows?.map(({ left, right }, i) => {
        const isLast = i === rows.length - 1;
        return (
          <div key={`${left}→${right}`} className="flex">
            <p
              className={[
                "w-full lg:w-[47%] p-2 md:p-3 lg:p-4 text-left bg-Surface1 text-Content-Secondary text-sm leading-5 lg:text-base lg:leading-6",
                !isLast && "border-b border-white/30",
                isLast && "rounded-bl-xl lg:rounded-bl-3xl",
              ]
                .filter(Boolean)
                .join(" ")}
            >
              {left}
            </p>
            <p
              className={[
                "w-full lg:w-[53%] p-2 md:p-3 lg:p-4 text-left text-black bg-white text-sm leading-5 lg:text-base lg:leading-6",
                !isLast && "border-b border-gray/30",
                isLast && "rounded-br-xl lg:rounded-br-3xl",
              ]
                .filter(Boolean)
                .join(" ")}
            >
              {right}
            </p>
          </div>
        );
      })}
    </div>
  );
});

const ResponsiveTag = memo(function ResponsiveTag({ label, variant }) {
  return (
    <>
      <Tags
        label={label}
        size="M"
        variant={variant}
        additionalStyle="!hidden lg:!inline-flex"
      />
      <Tags
        label={label}
        size="S"
        variant={variant}
        additionalStyle="lg:!hidden"
      />
    </>
  );
});

const HumanUXList = memo(function HumanUXList({ items }) {
  return (
    <div className="flex flex-col gap-2 lg:gap-8 lg:pb-10">
      {items?.map(({ title, icon }) => (
        <div key={title} className="flex gap-4 lg:gap-6">
          <div
            className="shrink-0 h-max flex justify-center items-center rounded-[1.125rem] lg:rounded-3xl p-2 lg:p-3"
            style={ICON_PANEL_STYLE}
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
          <p className="flex-1 text-Content-Secondary font-semibold text-sm leading-5 lg:text-xl lg:leading-7">
            {title}
          </p>
        </div>
      ))}
    </div>
  );
});

const ClinicalFeedRow = memo(function ClinicalFeedRow({ item, isLast }) {
  return (
    <div
      className={[
        "flex gap-2 p-[0.4rem] lg:p-3 text-Content-Primary font-semibold text-[0.4rem] lg:text-sm bg-Surface1",
        isLast
          ? "rounded-b-[0.33rem] lg:rounded-b-xl"
          : "border-b border-b-Border-Secondary",
      ].join(" ")}
    >
      <div className={pct(14.285)} /* 1/7 */>
        <div
          className={`mx-auto flex rounded-full justify-center items-center p-[0.3rem] lg:p-2 h-max ${item.bgColor}`}
        >
          <Image
            src={item.icon}
            alt=""
            height={28}
            width={28}
            className="h-[1rem] w-[1rem] lg:h-[1.75rem] lg:w-[1.75rem]"
          />
        </div>
      </div>

      <div
        className={[
          pct(57.142),
          "text-[0.4rem] leading-2 lg:text-sm lg:leading-4 space-y-0.5 lg:space-y-2",
        ].join(" ")}
      >
        <p className="text-Content-Primary font-semibold">{item.title}</p>
        <p className="text-Content-Tertiary font-normal">
          {item.desc}{" "}
          {item.span && (
            <span className="font-bold text-Content-Error-Bold text-[0.45rem] leading-2 lg:text-base lg:leading-5">
              {item.span}
            </span>
          )}
        </p>
        <p className="text-Content-Tertiary font-normal">{item.time}</p>
      </div>

      <div className={[pct(28.571), "text-right"].join(" ")}>
        <ResponsiveTag label={item.status} variant={item.accent} />
      </div>
    </div>
  );
});

const ClinicalFeed = memo(function ClinicalFeed({ items }) {
  return (
    <div className="flex flex-col rounded-[0.33rem] lg:rounded-xl border border-Border-Secondary bg-Border-Secondary">
      <div className="flex gap-2 p-[0.4rem] lg:p-3 text-Content-Primary font-semibold text-[0.4rem] lg:text-sm">
        <p className={pct(14.285)}>Type</p>
        <p className={pct(57.142)}>Reasoning Trace</p>
        <p className={[pct(28.571), "text-right"].join(" ")}>Status</p>
      </div>

      {items?.map((it, idx) => (
        <ClinicalFeedRow
          key={`${it.title}-${idx}`}
          item={it}
          isLast={idx === items.length - 1}
        />
      ))}
    </div>
  );
});

const ClinicalSummaryCard = memo(function ClinicalSummaryCard({ item }) {
  return (
    <div className="flex flex-col lg:gap-[1.75rem] p-[0.5rem] lg:p-[1.25rem] bg-Surface1 shadow-boxPrimary rounded-[0.5rem] lg:rounded-[0.9rem]">
      <div className="flex justify-between items-start lg:gap-[0.65rem]">
        <div className="flex flex-col lg:gap-1 w-2/3">
          <div className="text-[0.4rem] leading-2 lg:text-sm lg:leading-4 space-y-0.5 lg:space-y-2">
            <p className="text-Content-Primary font-semibold line-clamp-1 text-ellipsis">
              {item.title}
            </p>
            <p className="text-Content-Tertiary font-normal">{item.desc}</p>
          </div>
        </div>
        <div className="w-1/3 text-right">
          <ResponsiveTag label={item.status} variant={item.accent} />
        </div>
      </div>

      <div>
        <p className="text-Content-Primary text-[0.4rem] lg:text-[0.9rem]">
          Working... {item.percentage}%
        </p>
        <ProgressBar value={item.percentage} />
        <div className="text-Content-Tertiary font-normal flex justify-between text-[0.4rem] leading-2 lg:text-sm lg:leading-4">
          <p>Confidence</p>
          <p>{item.confidence}%</p>
        </div>
      </div>
    </div>
  );
});

const ThinkActLearn = memo(function ThinkActLearn() {
  return (
    <DefineCategoryCard>
      <div
        className="h-[33rem] w-[24rem] rounded-[33rem] absolute left-[-16rem] bottom-[-14.75rem] bg-Brand-Accent-Alpha-200/25 blur-[50px] pointer-events-none"
        aria-hidden="true"
      />
      <div className="flex flex-col gap-1 lg:gap-3 mb-4">
        <h3 className="card-heading">Think → Act → Learn loop</h3>
        <p className="card-subheading">
          Every agent has a feedback loop, decisions aren’t static.
        </p>
      </div>

      <div className="grid grid-cols-3 w-max mx-auto">
        {/* top-left arrow */}
        <div
          className="p-3 flex justify-end items-end w-full"
          aria-hidden="true"
        >
          <Image
            src="/icons/arrow-top-right.svg"
            alt=""
            height={35}
            width={35}
            className="h-[2rem] w-[2rem] lg:h-[3rem] lg:w-[3rem]"
          />
        </div>

        {/* AI Agent */}
        <DefineCategoryCardRound>
          <div className="flex rounded-full justify-center items-center p-2 bg-Badge-Crimson-Subtle-Background">
            <Image
              src="/icons/ai-brain.svg"
              alt=""
              height={35}
              width={35}
              className="h-[1.1rem] w-[1.1rem] lg:h-[1.4rem] lg:w-[1.4rem]"
            />
          </div>
          <h4 className="text-Content-Primary text-[0.68rem] lg:text-[0.9] font-semibold leading-2.5">
            AI Agent
          </h4>
        </DefineCategoryCardRound>

        {/* top-right arrow */}
        <div
          className="p-3 flex justify-start items-end w-full"
          aria-hidden="true"
        >
          <Image
            src="/icons/arrow-bottom-right.svg"
            alt=""
            height={35}
            width={35}
            className="h-[2rem] w-[2rem] lg:h-[3rem] lg:w-[3rem]"
          />
        </div>

        {/* Learn */}
        <DefineCategoryCardRound>
          <div className="flex rounded-full justify-center items-center p-2 bg-Badge-Yellow-Subtle-Background">
            <Image
              src="/icons/book-open.svg"
              alt=""
              height={35}
              width={35}
              className="h-[1.1rem] w-[1.1rem] lg:h-[1.4rem] lg:w-[1.4rem]"
            />
          </div>
          <div className="flex justify-center items-center flex-col">
            <h4 className="text-Content-Primary text-[0.68rem] lg:text-[0.9] font-semibold leading-2.5">
              Learn
            </h4>
            <p className="text-Content-Tertiary text-[0.46rem] lg:text-[0.61rem] text-center leading-3 px-2">
              loop feedback, evaluation
            </p>
          </div>
        </DefineCategoryCardRound>

        <div />

        {/* Think */}
        <DefineCategoryCardRound>
          <div className="flex rounded-full justify-center items-center p-2 bg-Badge-Blue-Subtle-Background">
            <Image
              src="/icons/brain.svg"
              alt=""
              height={35}
              width={35}
              className="h-[1.1rem] w-[1.1rem] lg:h-[1.4rem] lg:w-[1.4rem]"
            />
          </div>
          <div className="flex justify-center items-center flex-col">
            <h4 className="text-Content-Primary text-[0.68rem] lg:text-[0.9] font-semibold leading-2.5">
              Think
            </h4>
            <p className="text-Content-Tertiary text-[0.46rem] lg:text-[0.61rem] text-center leading-3 px-2">
              Reasoning, AI Agent / decision making
            </p>
          </div>
        </DefineCategoryCardRound>

        {/* arrow */}
        <div
          className="p-3 flex justify-end items-start w-full"
          aria-hidden="true"
        >
          <Image
            src="/icons/arrow-top-left.svg"
            alt=""
            height={35}
            width={35}
            className="h-[2rem] w-[2rem] lg:h-[3rem] lg:w-[3rem]"
          />
        </div>

        {/* Act */}
        <DefineCategoryCardRound>
          <div className="flex rounded-full justify-center items-center p-2 bg-Badge-Green-Subtle-Background">
            <Image
              src="/icons/zap.svg"
              alt=""
              height={35}
              width={35}
              className="h-[1.1rem] w-[1.1rem] lg:h-[1.4rem] lg:w-[1.4rem]"
            />
          </div>
          <div className="flex justify-center items-center flex-col">
            <h4 className="text-Content-Primary text-[0.68rem] lg:text-[0.9] font-semibold leading-2.5">
              Act
            </h4>
            <p className="text-Content-Tertiary text-[0.46rem] lg:text-[0.61rem] text-center leading-3 px-2">
              Prospecting, sequence, real-world execution
            </p>
          </div>
        </DefineCategoryCardRound>

        {/* arrow */}
        <div
          className="p-3 flex justify-start items-start w-full"
          aria-hidden="true"
        >
          <Image
            src="/icons/arrow-bottom-left.svg"
            alt=""
            height={35}
            width={35}
            className="h-[2rem] w-[2rem] lg:h-[3rem] lg:w-[3rem]"
          />
        </div>
      </div>
    </DefineCategoryCard>
  );
});

const DomainMemory = memo(function DomainMemory() {
  return (
    <DefineCategoryCard>
      <div className="flex flex-col gap-1 lg:gap-3">
        <h3 className="card-heading">Domain Memory</h3>
        <p className="card-subheading">
          Barnabus remembers what matters, adapts across time and tasks, not
          only the prompt.
        </p>
      </div>

      <div
        className="h-[33rem] w-[30rem] rounded-[33rem] absolute right-[-5rem] bottom-[-16.75rem] bg-Brand-Accent-Alpha-200/40 blur-[50px] pointer-events-none"
        aria-hidden="true"
      />
      <div className="absolute bottom-[-2.2rem]">
        <DomainMemoryInnerCard />
      </div>
    </DefineCategoryCard>
  );
});

const DefineNewCategory = () => {
  const screenSize = useScreenSize();

  return (
    <div className="gray-gradient-bg">
      <section className="section-wrapper">
        <SectionIntro />

        {/* Comparison */}
        <BlackCardDefault additionalStyle="!bg-Overlays-Black-9">
          <div className="flex flex-col lg:flex-row gap-5 md:gap-6 lg:gap-16 ">
            <div className="flex flex-col gap-3 md:gap-6 w-3/4 lg:w-1/3">
              <h3 className="content-heading">
                Comparison Between Barnabus’s Value Proposition and Key
                Differentiators
              </h3>
              <p className="content-subheading">
                Barnabus replaces dashboards, chatbots, and pipelines with
                living, thinking agents.
              </p>
            </div>

            <div className="lg:w-2/3 flex flex-col text-center justify-between gap-2 md:gap-3">
              <ComparisonTable rows={DEFINE_NEW_CATEGORY_TABLE_CONTENT} />
              <p className="font-semibold text-Brand-Accent-Alpha-200 text-xs leading-4 md:text-sm md:leading-5 lg:text-lg lg:leading-6">
                Agentic AI doesn’t just answer — it collaborates, adapts, and
                grows with you.
              </p>
            </div>
          </div>
        </BlackCardDefault>

        {/* Cards grid */}
        <div className="pt-[4rem] lg:pt-[6rem]" id="future-updates">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-x-2 md:gap-y-6 lg:gap-4">
            {/* Left column with CTA */}
            <div className="flex flex-col md:flex-row md:justify-between md:items-center lg:flex-col lg:justify-start lg:items-start gap-8 lg:gap-10 md:col-span-2 lg:col-span-1 pb-4 md:pb-0">
              <div className="flex flex-col gap-1 lg:gap-3">
                <h3 className="content-heading">Why Barnabus Is Different</h3>
                <p className="content-subheading">
                  Improving semiconductor manufacturing throughput
                </p>
              </div>
              <Link href="/system-protocol" className="w-full md:w-max">
                <Button
                  size={screenSize.width >= 1024 ? "XL" : "L"}
                  variant="Secondary"
                  label="See the Difference"
                  trailingIcon="/icons/arrow-right.svg"
                  additionalStyle="w-full md:w-max"
                />
              </Link>
            </div>

            <ThinkActLearn />
            <DomainMemory />

            {/* Human UX + Clinical */}
            <div className="md:col-span-2 lg:col-span-3 rounded-[1.25rem] md:rounded-[1.5rem] lg:rounded-[3rem] bg-Overlays-Black-9 shadow-container relative overflow-hidden p-4 md:p-5 lg:p-12 !pb-0">
              <div
                className="h-[25rem] w-[33rem] rounded-[33rem] absolute right-[-22rem] bottom-[-14rem] lg:right-0 lg:bottom-[-10.75rem] bg-Brand-Accent-Alpha-200/25 blur-[50px] z-[100] pointer-events-none"
                aria-hidden="true"
              />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 items-end">
                {/* Human UX */}
                <div className="flex flex-col lg:gap-[1rem] lg:max-w-[50%]">
                  <div className="flex flex-col gap-1 lg:gap-3 mb-4">
                    <h3 className="card-heading">Human UX</h3>
                    <p className="card-subheading">
                      Designed for real interaction, not backend workflows.
                    </p>
                  </div>
                  <HumanUXList items={HUMAN_UX_ITEMS} />
                </div>

                {/* Clinical feed panel */}
                <div className="flex flex-col p-[1rem] lg:p-[1.5rem] gap-2.5 lg:gap-3 rounded-t-[1.3rem] lg:rounded-t-3xl bg-Surface0 shadow-boxPrimary max-w-[90%] lg:max-w-[75%] relative h-max">
                  <div className="flex flex-col gap-2">
                    <h6 className="text-Content-Primary font-semibold text-[0.56rem] leading-[0.6rem] lg:text-base lg:leading-[1.18rem]">
                      Healthcare Clinical Feed
                    </h6>
                    <p className="text-Content-Tertiary text-[0.4rem] leading-2 lg:text-[0.75rem] lg:leading-4">
                      Agents run in parallel with a shared context layer for the
                      selected goal.
                    </p>
                  </div>

                  <ClinicalFeed items={CLINICAL_FEED} />

                  <div className="flex flex-col gap-2 absolute max-w-[20rem] lg:max-w-[25rem] bottom-[-2rem] lg:bottom-[-6rem] right-[-14rem] lg:right-[-9rem] z-[100]">
                    {CLINICAL_FEED_SUMMARY?.map((it, i) => (
                      <ClinicalSummaryCard key={`${it.title}-${i}`} item={it} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
            {/* /Human UX + Clinical */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default DefineNewCategory;
