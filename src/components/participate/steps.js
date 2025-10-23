import React from "react";

import Image from "next/image";

const Steps = () => {
  return (
    <div className="py-4 px-[1.5rem] md:py-[2rem] md:px-[2.5rem] lg:py-[4rem] lg:px-[16rem] !pt-0 flex flex-col items-center gap-[2.5rem] md:gap-[3rem] lg:gap-[4rem]">
      <Image
        src="/images/participate-steps.svg"
        height={100}
        width={250}
        className="w-full h-max"
        alt="pointer"
      />
    </div>
  );
};

export default Steps;
