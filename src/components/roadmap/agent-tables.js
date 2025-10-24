import React from "react";
import Image from "next/image";
import { DefaultTable } from "../table";

const columns = [
  { key: "type", header: "Type", width: 160, fixed: "left" },
  { key: "agent", header: "Agent Name", width: 150 },
  { key: "problem", header: "Problem Solved", width: 200 },
  { key: "value", header: "Barnabus Value", width: 360 },
  { key: "stage", header: "Stage", width: 150, fixed: "right" },
];

const Pill = ({ text = "MVP", tone = "green" }) => {
  const toneMap = {
    green: "bg-[#0B2E26] text-[#3BF5FF]", // tweak to your tokens
    blue: "bg-[#0B1F2E] text-[#84CAFF]",
    purple: "bg-[#1D1130] text-[#BFA6FF]",
  };
  return (
    <span
      className={`inline-flex items-center h-6 px-3 rounded-full text-xs ${
        toneMap[tone] || toneMap.green
      }`}
    >
      {text}
    </span>
  );
};

const rows = [
  {
    id: 1,
    type: (
      <div className="flex items-center gap-2">
        <Image src="/icons/book.svg" width={16} height={16} alt="" />
        <span>Knowledge</span>
      </div>
    ),
    agent: "Shadow Knowledge",
    problem: "Tacit knowledge is lost or siloed",
    value: "Captures tribal behavior, formalizes SOPs",
    stage: <Pill text="MVP" tone="green" />,
  },
  {
    id: 2,
    type: (
      <div className="flex items-center gap-2">
        <Image src="/icons/memory.svg" width={16} height={16} alt="" />
        <span>Memory</span>
      </div>
    ),
    agent: "Memory Bridge",
    problem: <>Learnings not reused across projects</>,
    value: "Enables cross-domain transfer learning",
    stage: <Pill text="FUTURE" tone="blue" />,
  },
  {
    id: 3,
    type: (
      <div className="flex items-center gap-2">
        <Image src="/icons/context.svg" width={16} height={16} alt="" />
        <span>Context</span>
      </div>
    ),
    agent: "Thought Trace",
    problem: "No trace of why past decisions were made",
    value: "Stores contextual breadcrumbs for explainability",
    stage: <Pill text="MOONSHOT" tone="purple" />,
  },
];

const AgentTables = () => {
  return (
    <div className="z-[200]">
      <DefaultTable
        columns={columns}
        data={rows}
        className="text-Content-Primary"
      />
    </div>
  );
};

export default AgentTables;
