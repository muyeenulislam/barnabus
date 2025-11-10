import React from "react";
import Image from "next/image";

import { BlackCardSmall } from "../cards";

const BuiltForAccountability = () => {
  return (
    <section>
      <BlackCardSmall>
        <div className="flex flex-col lg:flex-row gap-12 justify-between">
          <div className="space-y-2 md:space-y-3 lg:space-y-4 md:max-w-[80%] lg:max-w-[50%]">
            <h1 className="h2-title flex flex-row md:flex-col">
              Barnabus. Built for accountability, not opacity.
            </h1>
            <p className="p-subtitle">
              We prove it — through architecture, governance, and integrity.
            </p>
          </div>
          <div className="w-full lg:w-max flex justify-center items-center">
            <div className="space-y-6.5 lg:space-y-8 max-w-[20rem] flex flex-col justify-center items-center">
              <Image
                src="/icons/logo-chrome.svg"
                alt="logo chrome"
                height={200}
                width={200}
                className="aspect-square w-max h-[12.5rem] md:h-[16.25rem] lg:h-[22.5rem]"
              />
              <p className="text-Content-Brand-Accent text-center font-semibold text-xl leading-6.5 lg:text-[2rem] lg:leading-10">
                We don’t ask for trust. We prove it.
              </p>
            </div>
          </div>
        </div>
      </BlackCardSmall>
    </section>
  );
};

export default BuiltForAccountability;
