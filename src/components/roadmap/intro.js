import React from "react";

const RoadmapIntro = () => {
  return (
    <div className="bg-backgroundDarkGray py-[2rem] px-[1.5rem] md:py-[3rem] md:px-[2.5rem] lg:py-[8rem] lg:px-[16rem] flex flex-col justify-center items-center gap-[3.5rem] md:gap-[4rem] lg:gap-[6rem]">
      <div className="flex flex-col gap-[1.5rem] text-center justify-center items-center md:max-w-[40rem] lg:max-w-[50rem]">
        <h1 className="text-Content-Primary font-semibold text-[2.5rem] md:text-[3rem] lg:text-[4rem] leading-[3rem] md:leading-[3.5rem] lg:leading-[4.5rem] lg:max-w-[60rem]">
          Barnabus Strategic Agent <br />
          <span className="text-Action-Buttons-Primary-Accent-Content-Default">
            Roadmap
          </span>
        </h1>
        <p className="text-Content-Secondary text-xl leading-7 lg:max-w-[40rem] mx-auto">
          From MVP to Moonshot: Our evolving ecosystem of thinking agents.
        </p>
      </div>
    </div>
  );
};

export default RoadmapIntro;
