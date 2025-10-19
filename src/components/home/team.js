"use client";
import React, { memo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Button from "../button";

import { Tab } from "../tabs";

import { PARTNERSHIP_LIST, TEAM_LIST } from "@/utils/arrays";

const CTAButtons = memo(function CTAButtons({ text }) {
  return (
    <>
      <Button
        size="XL"
        variant="Secondary"
        label={text}
        trailingIcon="/icons/arrow-right.svg"
        additionalStyle="!hidden lg:!flex w-max"
      />
      <Button
        size="L"
        variant="Secondary"
        label={text}
        trailingIcon="/icons/arrow-right.svg"
        additionalStyle="lg:!hidden w-full md:w-max"
      />
    </>
  );
});

const Team = () => {
  const [tab, setTab] = useState("team");

  return (
    <div className="bg-Surface1 py-[4rem] px-[1.5rem] md:py-[6rem] md:px-[2.5rem] lg:p-[16rem] flex flex-col gap-[4rem] md:gap-[6rem] lg:gap-[6rem]">
      <div className="flex flex-col md:flex-row gap-3">
        {/* Left column */}
        <div className="flex flex-col gap-8 lg:gap-10 pb-4 md:pb-0 md:w-1/3">
          <div className="flex flex-col gap-1 lg:gap-3 md:pr-5 lg:pr-16">
            <h3 className="content-heading">Barnabus Team and Partnerships</h3>
            <p className="content-subheading">
              The Barnabus Team is dedicated to innovation and collaboration. We
              create impactful solutions that benefit our community.
            </p>
          </div>
          <Link href="/team">
            <CTAButtons text="Go To Team Page" />
          </Link>
        </div>

        {/* Right column */}
        <div className="md:w-2/3 flex flex-col gap-5 md:gap-6 lg:gap-12">
          <Tab
            tabItems={[
              { value: "team", label: "Team" },
              { value: "partners", label: "Partnerships" },
            ]}
            currentTab={tab}
            setTab={setTab}
            additionalStyle="md:w-max"
          />

          {/* Panels */}
          <div id={`panel-${tab}`} role="tabpanel" className="mt-4">
            {tab === "team" ? (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-[1.25rem] md:gap-x-[1.5rem] lg:gap-x-[4rem]">
                {TEAM_LIST?.map((item, index) => (
                  <React.Fragment key={index}>
                    <div className="space-y-2">
                      <div>
                        <p className="text-lg leading-6.5 md:text-xl lg:text-2xl md:leading-7 lg:leading-8 font-semibold text-[#CACED5]">
                          {item.name}
                        </p>
                        <p className="text-[#9DA1A8] mt-2 text-xs lg:text-sm leading-5">
                          {item.headline}
                        </p>
                      </div>
                      {item.linkedin && (
                        <Link href={item.linkedin} target="_blank">
                          <Image
                            src="/icons/linkedin.svg"
                            height={32}
                            width={32}
                            alt="linkedin"
                            className="h-[1.5rem] w-[1.5rem]"
                          />
                        </Link>
                      )}
                    </div>

                    {index % 2 === 1 && index < TEAM_LIST.length - 1 && (
                      <div className="col-span-2 my-3 border-t border-white/10 block lg:hidden" />
                    )}

                    {index % 3 === 2 && index < TEAM_LIST.length - 1 && (
                      <div className="hidden lg:block lg:col-span-3 my-6 border-t border-white/10" />
                    )}
                  </React.Fragment>
                ))}
              </div>
            ) : tab === "partners" ? (
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-[1.25rem] md:gap-x-[1.5rem] lg:gap-x-[4rem]">
                {PARTNERSHIP_LIST?.map((item, index) => (
                  <React.Fragment key={index}>
                    <div className="shrink-0 space-y-2">
                      <Image
                        src={item.icon}
                        height={32}
                        width={32}
                        alt="linkedin"
                        className="h-[1.5rem] w-full"
                      />
                    </div>

                    {index % 2 === 1 && index < PARTNERSHIP_LIST.length - 1 && (
                      <div className="col-span-2 my-4 border-t border-white/10 block lg:hidden" />
                    )}

                    {index % 4 === 3 && index < PARTNERSHIP_LIST.length - 1 && (
                      <div className="hidden lg:block lg:col-span-4 my-6 border-t border-white/10" />
                    )}
                  </React.Fragment>
                ))}
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
