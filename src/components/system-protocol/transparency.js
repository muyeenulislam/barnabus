import React, { memo } from "react";
import Image from "next/image";
import Link from "next/link";

import { BlackCardDefault } from "../cards";

const Transparency = memo(function Transparency() {
  return (
    <BlackCardDefault additionalStyle="!bg-Overlays-Black-9">
      <div className="flex flex-col md:flex-row gap-8 md:gap-16 lg:gap-[16rem] justify-between">
        <div className="space-y-1.5 md:space-y-2 lg:space-y-3 md:w-1/2 lg:w-max">
          <h3 className="content-heading">Transparency, Without Compromise</h3>
          <p className="content-subheading">
            Every agent is independently auditable, monitorable, and
            interruptible — without disrupting the larger system.
            <br />
            <br />
            Our architecture complies with modern governance principles, and is
            designed for HIPAA, GDPR, and other regulatory frameworks.
            <br />
            <br />A technical whitepaper is available upon request under NDA for
            qualified partners.
          </p>
        </div>
        <div className="space-y-1.5 md:space-y-2 lg:space-y-3 md:w-1/2 lg:w-max">
          <h3 className="content-heading">Think You Can Build Better?</h3>
          <p className="content-subheading">
            We’re always looking for minds who can expand the Barnabus stack.
            <br />
            <br />
            If you see an agent you’d reimagine, or one that’s missing, let’s
            talk:
          </p>
          <Link
            href="mailto:engineering@barnabus.ai"
            className="flex gap-1 md:gap-2 lg:gap-3"
          >
            <span className="text-Action-Buttons-Link-Content-Default font-semibold text-base leading-6 lg:text-lg lg:leading-6.5">
              engineering@barnabus.ai
            </span>
            <Image
              src="/icons/circle-arrow-right.svg"
              height={32}
              width={32}
              className="h-6.5 w-6.5"
              alt="arrow right"
            />
          </Link>
        </div>
      </div>
    </BlackCardDefault>
  );
});

export default Transparency;
