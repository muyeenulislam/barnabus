import React from "react";

import ArchitectureOfTrust from "../../../public/images/architecture-of-trust";

const TrustArchitecture = () => {
  return (
    <section className=" py-[3rem] md:py-[4rem] lg:py-[8rem] space-y-10 md:space-y-12 lg:space-y-[4rem]">
      <div className="flex flex-col gap-4 md:gap-5 lg:gap-6 text-center justify-center items-center">
        <h1 className="text-Content-Primary font-semibold text-[2rem] md:text-[2.5rem] lg:text-[3.5rem] leading-[2.5rem] md:leading-[3rem] lg:leading-[4rem]">
          The Architecture of Trust
        </h1>
        <p className="text-Content-Brand-Accent text-base leading-6 lg:text-lg lg:leading-6.5">
          Trust is a circuit, not a statement.
        </p>
        <p className="text-Content-Secondary text-base leading-6 lg:text-lg lg:leading-6.5">
          A continuous verification system for living intelligence
        </p>
      </div>
      <div className="mx-auto h-full w-full md:max-w-[40rem] lg:max-w-[60rem]">
        <ArchitectureOfTrust />
      </div>
    </section>
  );
};

export default TrustArchitecture;
