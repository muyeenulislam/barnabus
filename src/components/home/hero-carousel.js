"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

import Button from "../button";
import HomeHero from "./hero";
import HomeHeroTwo from "./hero-two";
import HomeHeroThree from "./hero-three";
import HomeHeroFour from "./hero-four";
import HomeHeroFive from "./hero-five";

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

const actionButtons = (
  <>
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
  </>
);

const slides = [
  HomeHero,
  HomeHeroTwo,
  HomeHeroThree,
  HomeHeroFour,
  HomeHeroFive,
];

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const slideVariants = {
    initial: { opacity: 0, x: 150 },
    animate: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: "easeInOut" },
    },
    exit: {
      opacity: 0,
      x: -150,
      transition: { duration: 0.5, ease: "easeInOut" },
    },
  };

  const SlideComponent = slides[currentSlide];

  return (
    <div className="overflow-hidden">
      <motion.div
        key={currentSlide}
        initial="initial"
        animate="animate"
        exit="exit"
        variants={slideVariants}
      >
        <SlideComponent
          headlineClass={HEADLINE_CLS}
          subtitleClass={SUBTEXT_CLS}
          actionButtons={actionButtons}
        />
      </motion.div>
    </div>
  );
};

export default HeroCarousel;
