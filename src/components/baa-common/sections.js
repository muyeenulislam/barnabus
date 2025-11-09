import React from "react";
import Image from "next/image";

import addLineBreaks from "@/utils/add-line-break";
import { BlackCardDefault } from "../cards";

const ListSection = ({ list = [] }) => {
  return (
    <div className="flex flex-col gap-1.5 md:gap-2 lg:gap-3">
      {list?.map((listItem, index) => (
        <div key={index} className="flex gap-4">
          <Image
            src="/icons/circle-check-neon.svg"
            height={32}
            width={32}
            className="h-6 w-6 shrink-0"
            alt="circle check"
          />
          <p className="p-subtitle">{addLineBreaks(listItem)}</p>
        </div>
      ))}
    </div>
  );
};

const BAASections = ({ list = [] }) => {
  return (
    <div className="section-wrapper !pt-0">
      <div className="flex flex-col gap-3 md:gap-4 lg:gap-6">
        {list?.map((item, index) => (
          <BlackCardDefault key={index} additionalStyle="!bg-Overlays-Black-9">
            <div className="flex flex-col gap-5 md:gap-6 lg:gap-8">
              <h2 className="card-heading">{item.title}</h2>
              {item.desc1 && (
                <p className="p-subtitle">{addLineBreaks(item.desc1)}</p>
              )}
              {item.list1?.length > 0 && <ListSection list={item.list1} />}
              {item.desc2 && (
                <p className="p-subtitle">{addLineBreaks(item.desc2)}</p>
              )}
              {item.list2?.length > 0 && <ListSection list={item.list2} />}
            </div>
          </BlackCardDefault>
        ))}
      </div>
    </div>
  );
};

export default BAASections;
