import React from "react";

import { BlackCardSmall } from "../cards";

import { FluidAnimationComponent } from "./trust-components";

const ResponsibleIntelligence = () => {
  return (
    <section>
      <BlackCardSmall>
        <div className="space-y-[2.5rem] md:space-y-12 lg:space-y-16">
          <div className="space-y-0.5 md:space-y-1 lg:space-y-1.5">
            <h4 className="card-heading">Responsible Intelligence</h4>
            <p className="content-subheading lg:max-w-[60%]">
              Accountability is not optional.
              <br />
              <br /> Barnabus enforces human oversight, bias detection, and
              ethical validation in every reasoning loop. No agent operates in
              isolation — every decision can be inspected, challenged, or
              reversed.
              <br />
              <br />
              <span className="text-Content-Brand-Accent">
                This is how we ensure that intelligence serves humanity, not the
                other way around.
              </span>
            </p>
          </div>
          <div>
            <FluidAnimationComponent />
            <div className="w-full md:w-max mx-auto bg-Surface2 text-Content-Brand-Accent rounded-[1.25rem] md:rounded-full p-4 md:px-5.5 md:py-3.5 text-base md:text-lg leading-6 md:leading-6.6 lg:text-xl lg:leading-7">
              Every decision remains open to human review, override, and
              annotation.
            </div>
          </div>
        </div>
      </BlackCardSmall>
    </section>
  );
};

export default ResponsibleIntelligence;
