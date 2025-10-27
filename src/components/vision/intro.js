import React, { memo } from "react";
import Link from "next/link";
import Image from "next/image";

import Button from "../button";
import { BlackCardDefault } from "../cards";

const CTAS = [
  {
    href: "#",
    label: "Explore Future Updates",
    variant: "Secondary",
    icon: "/icons/circle-arrow-right.svg",
  },
  {
    href: "#",
    label: "Join R&D Cohort",
    variant: "Primary-Accent",
    icon: "/icons/join-rnd-btn.svg",
  },
];

function CTAGroup({ size, containerClass, fullWidth = false }) {
  return (
    <div className={`my-6 md:my-8 lg:my-10 ${containerClass}`}>
      {CTAS.map((c, i) => (
        <Link key={i} href={c.href} className={fullWidth ? "w-full" : ""}>
          <Button
            label={c.label}
            variant={c.variant}
            size={size}
            trailingIcon={c.icon}
            additionalStyle={fullWidth ? "w-full" : undefined}
          />
        </Link>
      ))}
    </div>
  );
}

const VisionIntro = memo(function VisionIntro() {
  return (
    <section className="page-intro">
      <div className="page-intro-inner z-101">
        <h1 className="page-intro-heading">
          Not Just Intelligence.
          <br />
          <span className="text-Action-Buttons-Primary-Accent-Content-Default">
            Direction.
          </span>
        </h1>

        <p className="page-intro-subheading">
          Barnabus isn’t built to complete tasks. It’s built to grow, learn, and
          understand — with purpose.
        </p>

        <CTAGroup
          size="2XL"
          containerClass="hidden lg:flex md:flex-row gap-4"
        />
        <CTAGroup
          size="XL"
          containerClass="hidden md:flex lg:hidden flex-row justify-center items-center gap-4"
        />
        <CTAGroup
          size="L"
          containerClass="w-full flex flex-col md:hidden justify-center items-center gap-4"
          fullWidth
        />
      </div>

      <BlackCardDefault>
        <div className="flex flex-col lg:flex-row justify-between gap-5 md:gap-6 lg:gap-16">
          <div className="flex flex-col gap-3 md:gap-6 lg:w-1/2 lg:pr-[10rem]">
            <h3 className="content-heading">
              Built for Human-Centered Intelligence
            </h3>
            <p className="content-subheading">
              Barnabus is an evolving ecosystem of modular agents — designed to
              amplify human decision-making, not replace it. We believe
              intelligence isn’t just automation — it’s reflection, context, and
              ethical alignment.
            </p>
          </div>

          <figure className="bg-Surface1 shadow-boxPrimary p-4 rounded-2xl md:p-5 md:rounded-3xl lg:p-6 lg:w-[40%]">
            <Image
              src="/icons/quotation.svg"
              height={64}
              width={64}
              alt="quotation"
              aria-hidden="true"
              loading="lazy"
              decoding="async"
              className="h-[3rem] w-[3rem] md:h-[4rem] md:w-[4rem] rotate-180"
            />
            <blockquote className="space-y-1.5 py-2 md:space-y-2 md:py-3 lg:space-y-3">
              <h3 className="card-heading">
                Human data isn’t just a resource. It’s a responsibility.
              </h3>
            </blockquote>
            <figcaption className="font-semibold text-Content-Brand-Accent text-xs leading-4 md:text-sm md:leading-5 lg:text-lg lg:leading-6.5">
              Emad Masoud, 2025
            </figcaption>
            <div className="flex w-full justify-end">
              <Image
                src="/icons/quotation.svg"
                height={64}
                width={64}
                alt="quotation"
                aria-hidden="true"
                loading="lazy"
                decoding="async"
                className="h-[3rem] w-[3rem] md:h-[4rem] md:w-[4rem]"
              />
            </div>
          </figure>
        </div>
      </BlackCardDefault>
    </section>
  );
});

export default VisionIntro;
