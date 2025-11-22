import React, { memo } from "react";
import Image from "next/image";
import Link from "next/link";

import Button from "../button";

const HEADLINE_CLS =
  "text-Content-Primary font-semibold text-[2.5rem] md:text-[3.5rem] lg:text-[4.5rem] leading-[3rem] md:leading-[3.5rem] lg:leading-[4.5rem] md:max-w-[40rem] lg:max-w-[50rem]";
const SUBTEXT_CLS = "text-Content-Secondary text-xl leading-7 max-w-[40rem]";

const BUTTONS = [
  {
    key: "updates",
    label: "Explore Future Updates",
    link: "#future-updates",
    variant: "Secondary",
    trailingIcon: "/icons/circle-arrow-right.svg",
  },
  {
    key: "join",
    label: "Join R&D Cohort",
    link: "#join-rnd",
    variant: "Primary-Accent",
    trailingIcon: "/icons/join-rnd-btn.svg",
  },
];

function ActionButtons({
  order,
  size,
  className = "",
  fullWidthOnMobile = false,
}) {
  const buttonMap = new Map(BUTTONS?.map((b) => [b.key, b]));

  return (
    <div className={className}>
      {order?.map((key) => {
        const button = buttonMap.get(key);
        return (
          <Link
            key={button.key}
            href={button.link}
            className={fullWidthOnMobile ? "w-full md:w-auto" : ""}
          >
            <Button
              label={button.label}
              variant={button.variant}
              size={size}
              trailingIcon={button.trailingIcon}
              additionalStyle={fullWidthOnMobile ? "w-full md:w-auto" : ""}
            />
          </Link>
        );
      })}
    </div>
  );
}

const HomeHeroSecondary = memo(function HomeHeroSecondary() {
  return (
    <div
      aria-labelledby="home-hero-title"
      className="relative py-[2rem] md:py-[3rem] lg:py-[8rem]"
    >
      <section className="flex flex-col-reverse lg:flex-row md:gap-[2.5rem] lg:gap-[6rem]">
        <div className="flex flex-col gap-[2rem] lg:gap-[4rem] flex-1">
          <div className="flex flex-col gap-[2rem] items-center lg:items-start text-center lg:text-left">
            <h1 id="home-hero-title" className={HEADLINE_CLS}>
              AI that doesn’t just generate — it
              <br />
              <span className="text-Action-Buttons-Primary-Accent-Content-Default">
                thinks, acts, and learns.
              </span>
            </h1>

            <p className={SUBTEXT_CLS}>
              Barnabus is Agentic AI. It doesn’t just predict or respond — it
              thinks like a team, acts like a co-founder, and learns like a
              living system.
              <br />
              <br />
              No dashboards. Just intelligence that grows with you.
            </p>
          </div>

          <ActionButtons
            order={["join", "updates"]}
            size="XL"
            fullWidthOnMobile
            className="flex lg:hidden w-full items-center justify-center lg:justify-start gap-4 flex-col md:flex-row-reverse"
          />

          <ActionButtons
            order={["updates", "join"]}
            size="2XL"
            className="hidden lg:flex gap-4"
          />
        </div>

        <div className="flex-1 flex items-center justify-center">
          <Image
            src="/images/hero-home.gif"
            alt="Barnabus agentic AI hero illustration"
            width={800}
            height={800}
            priority
            fetchPriority="high"
            decoding="async"
            draggable={false}
            unoptimized
            className="object-cover h-full w-full"
          />
        </div>
      </section>
    </div>
  );
});

export default HomeHeroSecondary;
