import React from "react";
import Image from "next/image";

import {
  DefineCategoryCard,
  DefineCategoryCardRound,
  DomainMemoryInnerCard,
} from "./define-category-card-items";

import ProgressBar from "../progress-bar";
import Tags from "../tags";
import Button from "../button";

const DefineNewCategory = () => {
  const tableContent = [
    {
      left: "Predicts outcomes",
      right: "Predicts, decides, and acts on outcomes",
    },
    {
      left: "Needs retraining to learn",
      right: "Learns in real time, in context",
    },
    {
      left: "Operates in narrow, predefined workflows",
      right: "Adapts to roles, tasks, and change",
    },
    {
      left: "Built for coders, not real users",
      right: "Designed for real-world collaboration with humans",
    },
    {
      left: "Gives one-off answers, not lasting intelligence",
      right: "Acts, adapts, and improves with every use",
    },
  ];
  const humanUXContent = [
    {
      title: "Barnabus doesn’t just respond. It comprehends.",
      icon: "/icons/voice.svg",
    },
    {
      title: "It learns your world—not just your inputs.",
      icon: "/icons/keyboard.svg",
    },
    {
      title: "Trust isn’t built on speed. It’s earned through clarity.",
      icon: "/icons/safe.svg",
    },
  ];
  const clinicalFeedContent = [
    {
      title: "Risk Scoring",
      desc: "RCRI Score Calculated",
      span: 3.2,
      time: "6:17:35 AM",
      icon: "/icons/setting-error.svg",
      status: "Elevated Risk",
      accent: "red",
      bgColor: "bg-Badge-Red-Subtle-Background",
    },
    {
      title: "Medication Review",
      desc: "Clopidogrel detected, recommend hold 5 days pre-op",
      span: null,
      time: "6:17:35 AM",
      icon: "/icons/medicine1.svg",
      status: "Complete",
      accent: "green",
      bgColor: "bg-Badge-Yellow-Subtle-Background",
    },
    {
      title: "Clinical Summary",
      desc: "Drafted clearance note",
      span: null,
      time: "6:17:35 AM",
      icon: "/icons/clinic.svg",
      status: "Complete",
      accent: "green",
      bgColor: "bg-Badge-Teal-Subtle-Background",
    },
  ];
  const clinicalFeedContent2 = [
    {
      title:
        "Diagnostic Context: Accurate diagnostics are essential for identifying the underlying issues affecting the patient's health.",
      desc: "Problem framing",
      status: "Success",
      accent: "green",
      percentage: 87,
      confidence: 77,
    },
    {
      title:
        "Therapeutic Context: The therapeutic approach must align with the patient's preferences and values to ensure adherence and satisfaction.",
      desc: "Problem framing",
      status: "In Progress",
      accent: "yellow",
      percentage: 87,
      confidence: 77,
    },
  ];
  return (
    <div
      className="py-[2rem] px-[1.5rem] md:py-[3rem] md:px-[5rem] lg:py-[8rem] lg:px-[16rem] flex flex-col"
      style={{
        background: "linear-gradient(180deg, #121314 0%, #1F2021 50%)",
      }}
    >
      <div className="flex flex-col gap-2 md:gap-5 lg:gap-6 justify-center items-center text-center mb-10 md:mb-12 lg:mb-16">
        <h2 className="text-Content-Primary text-[2rem] md:text-[2.5rem] lg:text-[3.5rem] font-semibold leading-10 md:leading-12 lg:leading-16">
          Barnabus Define a New Category
        </h2>
        <p className="text-Content-Secondary text-base md:text-[1.125rem] lg:text-[1.25rem] leading-6 md:leading-[1.625rem] lg:leading-7">
          “Barnabus is different, we don’t build GenAI. We build Agentic AI.”
          <br />
          That alone separates us from 90% of the GenAI tools trying to act
          smart. Now own the phrase: <br />
          “Agentic AI that Thinks, Acts, and Learns, Just Like a Human Team
          Would.”
        </p>
      </div>
      <div className="flex flex-col lg:flex-row gap-5 md:gap-6 lg:gap-16 p-5 md:p-6 lg:p-16 rounded-3xl md:rounded-4xl lg:rounded-[4rem] bg-Overlays-Black-9 shadow-boxPrimary">
        <div className="flex flex-col gap-3 md:gap-6 w-3/4 lg:w-1/3">
          <h3 className="content-heading">
            Comparison Between Barnabus’s Value Proposition and Key
            Differentiators
          </h3>
          <p className="content-subheading">
            Barnabus replaces dashboards, chatbots, and pipelines with living,
            thinking agents.
          </p>
        </div>
        <div className="lg:w-2/3 flex flex-col text-center justify-between gap-2 md:gap-3">
          <div className="rounded-xl lg:rounded-3xl bg-Surface0 shadow-homeTableShadow p-[1px]">
            <div className="flex gap-4 p-2 md:p-3 lg:p-4">
              <p className="flex-1 text-left text-sm leading-5 md:text-base md:leading-6 lg:text-xl lg:leading-7">
                Static & Reactive
              </p>
              <p className="flex-1 text-left text-sm leading-5 md:text-base md:leading-6 lg:text-xl lg:leading-7">
                Adaptive & Evolving
              </p>
            </div>
            {tableContent?.map((item, index) => (
              <div key={index} className="flex ">
                <p
                  className={`w-full lg:w-[47%] p-2 md:p-3 lg:p-4 text-left bg-Surface1 text-Content-Secondary text-sm leading-5 lg:text-base lg:leading-6 ${
                    index !== tableContent?.length - 1 &&
                    "border-b border-white/30"
                  } ${
                    index === tableContent?.length - 1 &&
                    "rounded-bl-xl lg:rounded-bl-3xl"
                  }`}
                >
                  {item.left}
                </p>
                <p
                  className={`w-full lg:w-[53%] p-2 md:p-3 lg:p-4 text-left text-black bg-white text-sm leading-5 lg:text-base lg:leading-6 ${
                    index !== tableContent?.length - 1 &&
                    "border-b border-gray/30"
                  } ${
                    index === tableContent?.length - 1 &&
                    "rounded-br-xl lg:rounded-br-3xl"
                  }`}
                >
                  {item.right}
                </p>
              </div>
            ))}
          </div>
          <p className="font-semibold text-Brand-Accent-Alpha-200 text-xs leading-4 md:text-sm md:leading-5 lg:text-lg lg:leading-6">
            Agentic AI doesn’t just answer — it collaborates, adapts, and grows
            with you.
          </p>
        </div>
      </div>
      <div className="pt-[4rem] lg:pt-[6rem]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-x-2 md:gap-y-6 lg:gap-4">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center lg:flex-col lg:justify-start lg:items-start gap-8 lg:gap-10 md:col-span-2 lg:col-span-1 pb-4 md:pb-0">
            <div className="flex flex-col gap-1 lg:gap-3">
              <h3 className="content-heading">Why Barnabus Is Different</h3>
              <p className="content-subheading">
                Improving semiconductor manufacturing throughput
              </p>
            </div>
            <Button
              size="XL"
              variant="Secondary"
              label="See the Difference"
              trailingIcon="/icons/arrow-right.svg"
              additionalStyle="!hidden lg:!flex"
            />
            <Button
              size="L"
              variant="Secondary"
              label="See the Difference"
              trailingIcon="/icons/arrow-right.svg"
              additionalStyle="lg:!hidden w-full md:w-max"
            />
          </div>
          <DefineCategoryCard>
            <div className="h-[33rem] w-[24rem] rounded-[33rem] absolute left-[-16rem] bottom-[-14.75rem] bg-Brand-Accent-Alpha-200/25 blur-[50px]"></div>

            <div className="flex flex-col gap-1 lg:gap-3 mb-4">
              <h3 className="card-heading">Think → Act → Learn loop</h3>
              <p className="card-subheading">
                Every agent has a feedback loop, decisions aren’t static.
              </p>
            </div>
            <div className="grid grid-cols-3 w-max mx-auto">
              <div className="p-3 flex justify-end items-end w-full">
                <Image
                  src="/icons/arrow-top-right.svg"
                  alt="arrow top right"
                  height={35}
                  width={35}
                  className="h-[2rem] w-[2rem] lg:h-[3rem] lg:w-[3rem]"
                />
              </div>
              <DefineCategoryCardRound>
                <div className="flex rounded-full justify-center items-center p-2 bg-Badge-Crimson-Subtle-Background">
                  <Image
                    src="/icons/ai-brain.svg"
                    alt="ai brain"
                    height={35}
                    width={35}
                    className="h-[1.1rem] w-[1.1rem] lg:h-[1.4rem] lg:w-[1.4rem]"
                  />
                </div>
                <h4 className="text-Content-Primary text-[0.68rem] lg:text-[0.9] font-semibold leading-2.5">
                  AI Agent
                </h4>
              </DefineCategoryCardRound>
              <div className="p-3 flex justify-start items-end w-full">
                <Image
                  src="/icons/arrow-bottom-right.svg"
                  alt="arrow top right"
                  height={35}
                  width={35}
                  className="h-[2rem] w-[2rem] lg:h-[3rem] lg:w-[3rem]"
                />
              </div>{" "}
              <DefineCategoryCardRound>
                <div className="flex rounded-full justify-center items-center p-2 bg-Badge-Yellow-Subtle-Background">
                  <Image
                    src="/icons/book-open.svg"
                    alt="book open"
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
              <div></div>
              <DefineCategoryCardRound>
                <div className="flex rounded-full justify-center items-center p-2 bg-Badge-Blue-Subtle-Background">
                  <Image
                    src="/icons/brain.svg"
                    alt="brain"
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
              <div className="p-3 flex justify-end items-start w-full">
                <Image
                  src="/icons/arrow-top-left.svg"
                  alt="arrow top right"
                  height={35}
                  width={35}
                  className="h-[2rem] w-[2rem] lg:h-[3rem] lg:w-[3rem]"
                />
              </div>{" "}
              <DefineCategoryCardRound>
                <div className="flex rounded-full justify-center items-center p-2 bg-Badge-Green-Subtle-Background">
                  <Image
                    src="/icons/zap.svg"
                    alt="zap"
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
              <div className="p-3 flex justify-start items-start w-full">
                <Image
                  src="/icons/arrow-bottom-left.svg"
                  alt="arrow top right"
                  height={35}
                  width={35}
                  className="h-[2rem] w-[2rem] lg:h-[3rem] lg:w-[3rem]"
                />
              </div>
            </div>
          </DefineCategoryCard>
          <DefineCategoryCard>
            <div className="flex flex-col gap-1 lg:gap-3">
              <h3 className="card-heading">Domain Memory</h3>
              <p className="card-subheading">
                Barnabus remembers what matters, adapts across time and tasks,
                not only the prompt.
              </p>
            </div>
            <div className="h-[33rem] w-[30rem] rounded-[33rem] absolute right-[-5rem] bottom-[-16.75rem] bg-Brand-Accent-Alpha-200/40 blur-[50px]"></div>
            <div className="absolute bottom-[-2.2rem] ">
              <DomainMemoryInnerCard />
            </div>
          </DefineCategoryCard>
          <div className="md:col-span-2 lg:col-span-3 rounded-[1.25rem] md:rounded-[1.5rem] lg:rounded-[3rem] bg-Overlays-Black-9 shadow-boxPrimary relative overflow-hidden p-4 md:p-5 lg:p-12 !pb-0">
            <div className="h-[25rem] w-[33rem] rounded-[33rem] absolute right-[-22rem] bottom-[-14rem] lg:right-0 lg:bottom-[-10.75rem] bg-Brand-Accent-Alpha-200/25 blur-[50px] z-[100]"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 items-end">
              <div className="flex flex-col lg:gap-[1rem] lg:max-w-[50%]">
                <div className="flex flex-col gap-1 lg:gap-3 mb-4">
                  <h3 className="card-heading">Human UX</h3>
                  <p className="card-subheading">
                    Designed for real interaction, not backend workflows.
                  </p>
                </div>
                <div className="flex flex-col gap-2 lg:gap-8 lg:pb-10">
                  {humanUXContent?.map((item, index) => (
                    <div key={index} className="flex gap-4 lg:gap-6">
                      <div
                        className="shrink-0 h-max flex justify-center items-center rounded-[1.125rem] lg:rounded-3xl p-2 lg:p-3"
                        style={{
                          background:
                            "radial-gradient(53.06% 69.61% at 50% 100%, var(--Overlays-White-3, rgba(255, 255, 255, 0.01)) 0%, var(--Overlays-Black-9, rgba(18, 19, 20, 0.19)) 100%), var(--Overlays-White-3, rgba(255, 255, 255, 0.03))",
                          boxShadow:
                            "0 0.4px 0 0.4px var(--Overlays-White-6, rgba(255, 255, 255, 0.12)) inset, 0 0 1.2px 1.2px var(--Overlays-White-6, rgba(247, 247, 248, 0.12)) inset",
                        }}
                      >
                        <Image
                          src={item.icon}
                          alt="icon"
                          height={32}
                          width={32}
                          className="shrink-0 h-[1.875rem] w-[1.875rem] lg:h-[2.5rem] lg:w-[2.5rem]"
                        />
                      </div>
                      <p className="flex-1 text-Content-Secondary font-semibold text-sm leading-5 lg:text-xl lg:leading-7">
                        {item.title}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
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
                <div className="flex flex-col rounded-[0.33rem] lg:rounded-xl border border-Border-Secondary bg-Border-Secondary">
                  <div className="flex gap-2 p-[0.4rem] lg:p-3 text-Content-Primary font-semibold text-[0.4rem] lg:text-sm">
                    <p className="w-1/7">Type</p>
                    <p className="w-4/7">Reasoning Trace</p>
                    <p className="w-2/7 text-right">Status</p>
                  </div>
                  {clinicalFeedContent?.map((item, index) => (
                    <div
                      className={`flex gap-2 p-[0.4rem] lg:p-3 text-Content-Primary font-semibold text-[0.4rem] lg:text-sm bg-Surface1 ${
                        index === clinicalFeedContent?.length - 1 &&
                        "rounded-b-[0.33rem] lg:rounded-b-xl"
                      } ${
                        index !== clinicalFeedContent?.length - 1 &&
                        "border-b border-b-Border-Secondary"
                      }`}
                      key={index}
                    >
                      <div className="w-1/7 flex justify-center">
                        <div
                          className={`flex rounded-full justify-center items-center p-[0.3rem] lg:p-2 h-max ${item.bgColor}`}
                        >
                          <Image
                            src={item?.icon}
                            alt="ai brain"
                            height={35}
                            width={35}
                            className="h-[1rem] w-[1rem] lg:h-[1.75rem] lg:w-[1.75rem]"
                          />
                        </div>
                      </div>
                      <div className="w-4/7 text-[0.4rem] leading-2 lg:text-sm lg:leading-4 space-y-0.5 lg:space-y-2">
                        <p className="text-Content-Primary font-semibold">
                          {item.title}
                        </p>
                        <p className="text-Content-Tertiary font-normal">
                          {item.desc}{" "}
                          {item?.span && (
                            <span className="font-bold text-Content-Error-Bold text-[0.45rem] leading-2 lg:text-base lg:leading-5">
                              {item?.span}
                            </span>
                          )}
                        </p>
                        <p className="text-Content-Tertiary font-normal">
                          {item.time}
                        </p>
                      </div>
                      <div className="w-2/7 text-right">
                        <Tags
                          label={item.status}
                          size="M"
                          variant={item.accent}
                          additionalStyle="!hidden lg:!inline-flex"
                        />
                        <Tags
                          label={item.status}
                          size="S"
                          variant={item.accent}
                          additionalStyle="lg:!hidden"
                        />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col gap-2 absolute max-w-[20rem] lg:max-w-[25rem] bottom-[-2rem] lg:bottom-[-6rem] right-[-14rem] lg:right-[-9rem] z-[100]">
                  {clinicalFeedContent2?.map((item, index) => (
                    <div
                      key={index}
                      className="flex flex-col lg:gap-[1.75rem] p-[0.5rem] lg:p-[1.25rem] bg-Surface1 shadow-boxPrimary rounded-[0.5rem] lg:rounded-[0.9rem]"
                    >
                      <div className="flex justify-between items-start lg:gap-[0.65rem]">
                        <div className="flex flex-col lg:gap-1 w-2/3">
                          <div className="text-[0.4rem] leading-2 lg:text-sm lg:leading-4 space-y-0.5 lg:space-y-2">
                            <p className="text-Content-Primary font-semibold line-clamp-1 text-ellipsis flex-1">
                              {item.title}
                            </p>
                            <p className="text-Content-Tertiary font-normal">
                              {item.desc}
                            </p>
                          </div>
                        </div>
                        <div className="w-1/3 text-right">
                          <Tags
                            label={item.status}
                            size="M"
                            variant={item.accent}
                            additionalStyle="!hidden lg:!inline-flex"
                          />
                          <Tags
                            label={item.status}
                            size="S"
                            variant={item.accent}
                            additionalStyle="lg:!hidden"
                          />
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
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DefineNewCategory;
