import React from "react";

const DefineNewCategory = () => {
  const tableContent = [
    {
      left: "Predicts outcomes",
      right: "Predicts, decides, and acts on outcomes",
    },
    {
      left: "Needs retraining to learn",
      right: "Learns in real time, in context",
    },
    {
      left: "Operates in narrow, predefined workflows",
      right: "Adapts to roles, tasks, and change",
    },
    {
      left: "Built for coders, not real users",
      right: "Designed for real-world collaboration with humans",
    },
    {
      left: "Gives one-off answers, not lasting intelligence",
      right: "Acts, adapts, and improves with every use",
    },
  ];
  return (
    <div
      className="py-[2rem] px-[1.5rem] md:py-[3rem] md:px-[5rem] lg:py-[8rem] lg:px-[16rem] flex flex-col"
      style={{
        background: "linear-gradient(180deg, #121314 0%, #1F2021 50%)",
      }}
    >
      <div className="flex flex-col gap-2 md:gap-5 lg:gap-6 justify-center items-center text-center mb-10 md:mb-12 lg:mb-16">
        <h2 className="text-Content-Primary text-[2rem] md:text-[2.5rem] lg:text-[3.5rem] font-semibold leading-10 md:leading-12 lg:leading-16">
          Barnabus Define a New Category
        </h2>
        <p className="text-Content-Secondary text-base md:text-[1.125rem] lg:text-[1.25rem] leading-6 md:leading-[1.625rem] lg:leading-7">
          “Barnabus is different, we don’t build GenAI. We build Agentic AI.”
          <br />
          That alone separates us from 90% of the GenAI tools trying to act
          smart. Now own the phrase: <br />
          “Agentic AI that Thinks, Acts, and Learns, Just Like a Human Team
          Would.”
        </p>
      </div>
      <div className="flex flex-col lg:flex-row gap-5 md:gap-6 lg:gap-16 p-5 md:p-6 lg:p-16 rounded-3xl md:rounded-4xl lg:rounded-[4rem] bg-Overlays-Black-9 shadow-boxPrimary">
        <div className="flex flex-col gap-3 md:gap-6 w-3/4 lg:w-1/3">
          <h3 className="font-semibold text-Content-Primary text-[1.5rem] leading-8 lg:text-[2.5rem] lg:leading-12">
            Comparison Between Barnabus’s Value Proposition and Key
            Differentiators
          </h3>
          <p className="text-Content-Secondary text-base leading-6 lg:text-[1.125rem] lg:leading-[1.625rem]">
            Barnabus replaces dashboards, chatbots, and pipelines with living,
            thinking agents.
          </p>
        </div>
        <div className="lg:w-2/3 flex flex-col text-center justify-between gap-2 md:gap-3">
          <div className="rounded-xl lg:rounded-3xl bg-Surface0 shadow-homeTableShadow">
            <div className="flex gap-4 p-2 md:p-3 lg:p-4">
              <p className="flex-1 text-left text-sm leading-5 md:text-base md:leading-6 lg:text-xl lg:leading-7">
                Static & Reactive
              </p>
              <p className="flex-1 text-left text-sm leading-5 md:text-base md:leading-6 lg:text-xl lg:leading-7">
                Adaptive & Evolving
              </p>
            </div>
            {tableContent?.map((item, index) => (
              <div key={index} className="flex ">
                <p
                  className={`w-full lg:w-[45%] p-2 md:p-3 lg:p-4 text-left bg-Surface1 text-Content-Secondary text-sm leading-5 lg:text-base lg:leading-6 ${
                    index !== tableContent?.length - 1 &&
                    "border-b border-white/30"
                  } ${
                    index === tableContent?.length - 1 &&
                    "rounded-bl-xl lg:rounded-bl-3xl"
                  }`}
                >
                  {item.left}
                </p>
                <p
                  className={`w-full lg:w-[55%] p-2 md:p-3 lg:p-4 text-left text-black bg-white text-sm leading-5 lg:text-base lg:leading-6 ${
                    index !== tableContent?.length - 1 &&
                    "border-b border-gray/30"
                  } ${
                    index === tableContent?.length - 1 &&
                    "rounded-br-xl lg:rounded-br-3xl"
                  }`}
                >
                  {item.right}
                </p>
              </div>
            ))}
          </div>
          <p className="font-semibold text-Brand-Accent-Alpha-200 text-xs leading-4 md:text-sm md:leading-5 lg:text-lg lg:leading-6">
            Agentic AI doesn’t just answer — it collaborates, adapts, and grows
            with you.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DefineNewCategory;
