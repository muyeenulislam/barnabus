import React from "react";

import addLineBreaks from "@/utils/add-line-break";

const BAAPageInfo = ({
  title = "",
  subTitle = "",
  topRightText = "",
  date = "",
}) => {
  return (
    <div className="py-6 md:py-10 lg:py-[4rem]">
      <div className="flex flex-col md:flex-row justify-between gap-4 md:gap-5 lg:gap-6">
        <div className="flex-1 space-y-2 md:space-y-4 lg:space-y-8">
          <h3 className="text-Content-Primary font-semibold text-xl md:text-2xl leading-7 md:leading-8 lg:text-[2.5rem] lg:leading-12">
            {addLineBreaks(title)}
          </h3>
          <p className="p-subtitle md:max-w-[90%] lg:max-w-[70%]">
            {addLineBreaks(subTitle)}
          </p>
        </div>
        <div className="space-y-1 lg:space-y-2 w-max md:text-right">
          <p className="text-Content-Secondary text-sm leading-5 md:text-base md:leading-6 lg:text-xl lg:leading-7">
            {addLineBreaks(topRightText)}
          </p>
          <p className="text-Content-Secondary font-semibold text-base leading-6 md:text-lg md:leading-6.5 lg:text-2xl lg:leading-8">
            {date}
          </p>
        </div>
      </div>
    </div>
  );
};

export default BAAPageInfo;
