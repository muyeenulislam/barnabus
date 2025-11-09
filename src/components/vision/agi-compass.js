import React, { memo } from "react";
import Image from "next/image";

import { BlackCardSmall, GrayCard } from "../cards";

import { AGI_COMPASS } from "@/utils/arrays";

const SectionIntro = memo(function SectionIntro() {
  return (
    <div className="flex flex-col gap-2 md:gap-5 lg:gap-6 justify-center items-center text-center">
      <h2 className="h2-title">Our North Star — The AGI Compass</h2>
      <p className="p-subtitle lg:max-w-[50rem]">
        We are building the infrastructure for general intelligence — one that
        reflects, adapts, and self-improves. Barnabus is designed with the
        principles of alignment, continuity, and evolution. This isn’t a
        marketing goal. It’s a system blueprint.
      </p>
    </div>
  );
});
const NorthStarImage = memo(function NorthStarImage() {
  return (
    <Image
      src="/images/north-star.svg"
      height={100}
      width={250}
      className="w-full h-max md:pb-10"
      alt="pointer"
    />
  );
});
const PointCards = memo(function PointCards() {
  return (
    <div className="flex flex-col md:flex-row gap-2 md:gap-3 lg:gap-4">
      {AGI_COMPASS?.map((item, index) => (
        <BlackCardSmall key={index} additionalStyle="w-full">
          <div className="flex flex-col gap-6 md:gap-8 lg:gap-12">
            <div className="space-y-1.5 md:space-y-2 lg:space-y-3">
              <h4 className="text-Content-Primary font-semibold text-xl leading-7 md:text-2xl md:leading-8 lg:text-[2rem] lg:leading-10">
                {item.title}
              </h4>
              <p className="text-Content-Secondary text-base leading-6">
                {item.subtitle}
              </p>
            </div>
            <div className="flex flex-col gap-1 lg:gap-2">
              {item?.list?.map((listItem, index) => (
                <GrayCard key={index}>
                  <div className="space-y-1 md:space-y-2 lg:space-y-3">
                    <h4 className="p-subtitle !text-Content-Primary !font-semibold ">
                      {listItem.listTitle}
                    </h4>
                    <p className="card-subheading">{listItem.listSubtitle}</p>
                  </div>
                </GrayCard>
              ))}
            </div>
          </div>
        </BlackCardSmall>
      ))}
    </div>
  );
});

const AGICompass = () => {
  return (
    <div className="gray-gradient-bg-50">
      <section className="section-wrapper">
        <SectionIntro />
        <NorthStarImage />
        <PointCards />
      </section>
    </div>
  );
};

export default AGICompass;
