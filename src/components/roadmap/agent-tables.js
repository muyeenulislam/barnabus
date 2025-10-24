import React from "react";
import Image from "next/image";

import { DefaultTable } from "../table";

const columns = [
  {
    key: "type",
    header: (
      <div className="flex items-center gap-2">
        <Image
          src="/icons/category-outline-rounded.svg"
          width={24}
          height={24}
          className="h-5 w-5 lg:h-6 lg:w-6"
          alt="knowledge"
        />
        <span className="text-Content-Primary text-sm leading-5 md:text-base md:leading-6 lg:text-xl lg:leading-7">
          Knowledge
        </span>
      </div>
    ),
    width: 130,
    fixed: "left",
  },
  {
    key: "agent",
    header: (
      <div className="flex items-center gap-2">
        <Image
          src="/icons/ai-user.svg"
          width={24}
          height={24}
          className="h-5 w-5 lg:h-6 lg:w-6"
          alt="ai user"
        />
        <span className="text-Content-Primary text-sm leading-5 md:text-base md:leading-6 lg:text-xl lg:leading-7">
          Agent Name
        </span>
      </div>
    ),
    width: 120,
  },
  {
    key: "problem",
    header: (
      <div className="flex items-center gap-2">
        <Image
          src="/icons/puzzle.svg"
          width={24}
          height={24}
          className="h-5 w-5 lg:h-6 lg:w-6"
          alt="puzzle"
        />
        <span className="text-Content-Primary text-sm leading-5 md:text-base md:leading-6 lg:text-xl lg:leading-7">
          Problem Solved
        </span>
      </div>
    ),
    width: 200,
  },
  {
    key: "value",
    header: (
      <div className="flex items-center gap-2">
        <Image
          src="/icons/barnabus-logo-neon.svg"
          width={24}
          height={24}
          className="h-5 w-5 lg:h-6 lg:w-6"
          alt="barnabus logo"
        />
        <span className="text-Content-Primary text-sm leading-5 md:text-base md:leading-6 lg:text-xl lg:leading-7">
          Barnabus Value
        </span>
      </div>
    ),
    width: 200,
  },
  {
    key: "stage",
    header: (
      <div className="flex items-center gap-2">
        <Image
          src="/icons/business-progress-bar.svg"
          width={24}
          height={24}
          className="h-5 w-5 lg:h-6 lg:w-6"
          alt="business progress bar"
        />
        <span className="text-Content-Primary text-sm leading-5 md:text-base md:leading-6 lg:text-xl lg:leading-7">
          Stage
        </span>
      </div>
    ),
    width: 150,
  },
];

const AgentTables = ({ rows }) => {
  return (
    <div className="z-[200]">
      <DefaultTable
        key={Math.random()}
        columns={columns}
        data={rows}
        className="text-Content-Primary"
      />
    </div>
  );
};

export default AgentTables;
