import React from "react";
import Image from "next/image";

import { BlackCardDefault, BlackCardXS } from "../cards";

import { SECURITY_PRACTICES, COMPLIANCE_READY } from "@/utils/arrays";
import { IconBadge } from "@/utils/common-styles";

const SecurityPractices = () => {
  return (
    <section className="flex flex-col lg:flex-row gap-2 md:gap-3 lg:gap-4">
      <BlackCardDefault additionalStyle="!bg-Overlays-Black-9 w-full">
        <div className="space-y-5 md:space-y-6 lg:space-y-12">
          <div className="space-y-0.5 md:space-y-1 lg:space-y-1.5">
            <h4 className="card-heading">Security Practices</h4>
            <p className="content-subheading">
              Enterprise-grade security at every layer
            </p>
          </div>
          <div className="space-y-3">
            {SECURITY_PRACTICES?.map((item, index) => (
              <div className="flex gap-4 items-center" key={index}>
                <Image
                  src="/icons/circle-check-neon.svg"
                  alt="check"
                  height={24}
                  width={24}
                  className="h-6 w-6 shrink-0"
                />
                <p className="content-subheading">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </BlackCardDefault>
      <BlackCardDefault additionalStyle="!bg-Overlays-Black-9 w-full">
        <div className="space-y-5 md:space-y-6 lg:space-y-12">
          <h4 className="card-heading">Compliance-Ready</h4>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-x-3 gap-y-4 md:gap-x-2 lg:gap-x-3">
            {COMPLIANCE_READY?.map((item, index) => (
              <BlackCardXS key={index}>
                <div className="flex flex-col items-center justify-center gap-4 md:gap-5 lg:gap-6">
                  <IconBadge src="/icons/ai-security2.svg" />
                  <p className="text-Content-Brand-Accent uppercase font-semibold text-sm leading-5 md:text-base md:leading-6 lg:text-lg lg:leading-6.5">
                    {item}
                  </p>
                </div>
              </BlackCardXS>
            ))}
          </div>
        </div>
      </BlackCardDefault>
    </section>
  );
};

export default SecurityPractices;
