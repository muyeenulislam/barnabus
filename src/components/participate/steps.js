import React from "react";

import Image from "next/image";

const Steps = () => {
  return (
    <section className="py-4 md:py-[2rem] lg:py-[4rem] !pt-0 flex flex-col items-center gap-[2.5rem] md:gap-[3rem] lg:gap-[4rem]">
      <Image
        src="/images/participate-steps.svg"
        height={100}
        width={250}
        className="w-full h-max"
        alt="pointer"
      />
    </section>
  );
};

export default Steps;
