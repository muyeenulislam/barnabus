import React, { memo } from "react";
import Image from "next/image";

import { BlackCardDefault } from "../cards";

const DataEngine = memo(function DataEngine() {
  return (
    <div className="flex flex-col gap-12 md:gap-16">
      <div className="flex flex-col gap-2 md:gap-5 lg:gap-6 justify-center items-center text-center lg:max-w-[55rem] mx-auto">
        <h2 className="h2-title">
          Barnabus Data Engine from Raw Data to Trusted Intelligence
        </h2>
        <p className="p-subtitle">
          The Barnabus Data Engine transforms raw inputs into actionable,
          reliable intelligence. Built for the most demanding enterprises and
          government systems, it ensures data is not just collected but curated,
          validated, and continuously improved. Trusted by Leaders in Critical
          Domains Healthcare. Semiconductors. Public Sector. The Barnabus Data
          Engine underpins mission-critical systems where accuracy, trust, and
          adaptability are non-negotiable.
        </p>
      </div>
      <Image
        src="/images/data-engine.svg"
        height={1500}
        width={2500}
        className="w-full h-max"
        alt="data engine"
      />
      <BlackCardDefault additionalStyle="!bg-Overlays-Black-9 !p-8 md:!p-10 lg:!p-16">
        <div className="flex flex-col lg:flex-row gap-8 md:gap-12 lg:gap-[8rem] justify-between">
          <div className="space-y-1.5 md:space-y-2 lg:space-y-3 lg:w-3/5">
            <h3 className="content-heading">Our Core Strengths</h3>
            <p className="content-subheading">
              Quality You Can Trust. Every annotation is reviewed with domain
              expertise from clinical specialists to semiconductor engineers.
              Barnabus doesn’t just label data; it produces evidence you can
              rely on for safety-critical decisions.
              <br />
              <br />
              Cost-Effective Intelligence. Our engine pinpoints where models
              fail and why, then corrects them with curated, high-value data.
              The result: fewer errors, better outcomes, and lower long-term
              cost of ownership. Scalable by Design from pilot projects to
              national-scale deployments, Barnabus adapts.
              <br />
              <br />
              The same engine that supports small research teams can power
              large-scale healthcare systems, fabs, and secure government
              networks. Diversity That Delivers Barnabus integrates data across
              domains, structured logs, clinical devices, sensors, and legacy
              systems, ensuring models work in the real world, not just the lab.
            </p>
          </div>
          <div className="space-y-1.5 md:space-y-2 lg:space-y-3 lg:w-2/5">
            <h3 className="content-heading">Why Barnabus Is Different</h3>
            <p className="content-subheading">
              Most platforms create static datasets. Barnabus builds living data
              pipelines. Every action feeds into a feedback loop, improving
              quality, refining context, and strengthening intelligence over
              time. This isn’t just a data engine. It’s a foundation of trust
              for enterprises and governments seeking intelligence that grows
              stronger with every cycle. Tagline Options
            </p>
            <ul className="list-disc font-normal text-Content-Brand-Accent text-base leading-6 md:text-lg md:leading-6.5">
              <li>Barnabus Data Engine: Trusted Data. Living Intelligence.</li>
              <li>From raw input to mission-critical decisions.</li>
              <li>The intelligence backbone for enterprise and government.</li>
            </ul>
          </div>
        </div>
      </BlackCardDefault>
    </div>
  );
});

export default DataEngine;
