"use client";

import React, { memo, useState } from "react";

import useScreenSize from "@/utils/usescreensize";

import BottomSheet from "../bottom-sheet";
import Button from "../button";
import { GrayCard, ColorCard } from "../cards";

import { CORE_INTELLIGENCE, AGENT_STACK_DETAILS } from "@/utils/arrays";

const H_LINE =
  "bg-[linear-gradient(90deg,rgba(255,255,255,0.01)_0%,#3BF5FF_30%,#3BF5FF_70%,rgba(255,255,255,0.01)_100%)]";

const AgentStackContent = memo(function AgentStackContent() {
  return (
    <div className="space-y-6 lg:space-y-8">
      {CORE_INTELLIGENCE?.map((item, index) => (
        <div className="space-y-3 lg:space-y-4" key={index}>
          <h2 className="content-heading">{item.sectionTitle}</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-1 md:gap-2 lg:gap-3">
            {item.items.map((list, idx) => (
              <ColorCard key={idx} variant={list.color}>
                <div className="space-y-2">
                  <h6 className="font-semibold text-base lg:text-2xl lg:leading-8">
                    {list.title}
                  </h6>
                  <p className="text-Content-Primary lg:text-base lg:leading-6">
                    {list.subTitle}
                  </p>
                </div>
              </ColorCard>
            ))}
          </div>
        </div>
      ))}

      {AGENT_STACK_DETAILS?.map((item, index) => (
        <div className="space-y-3 lg:space-y-4" key={index}>
          <h2 className="content-heading">{item.sectionTitle}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1 md:gap-2 lg:gap-3">
            {item.items.map((list, idx) => (
              <GrayCard key={idx}>
                <div className="space-y-2">
                  <h6 className="text-Content-Primary font-semibold text-base lg:text-2xl lg:leading-8">
                    {list.title}
                  </h6>
                  <p className="text-Content-Tertiary lg:text-base lg:leading-6">
                    {list.subTitle}
                  </p>
                </div>
              </GrayCard>
            ))}
          </div>
        </div>
      ))}

      <div className={`h-[0.1875rem] w-full hidden md:block ${H_LINE}`} />
    </div>
  );
});

const AgentStackDetails = memo(function AgentStackDetails() {
  const screenSize = useScreenSize();
  const isMobile = screenSize.width < 768;

  const [showAgentStack, setShowAgentStack] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const isOpen = isMobile ? drawerOpen : showAgentStack;

  return (
    <div>
      <div className="relative w-full py-[2rem] flex justify-center items-center">
        <div
          className={`absolute h-[0.1875rem] w-full top-1/2 block ${H_LINE}`}
        />
        <Button
          label={
            isOpen
              ? "Click to Hide Agent Stack Details"
              : "Click to Show Agent Stack Details"
          }
          size={
            screenSize.width < 768
              ? "L"
              : screenSize.width >= 768 && screenSize.width < 1024
              ? "XL"
              : "2XL"
          }
          variant="Primary-Default"
          trailingIcon={
            isOpen
              ? "/icons/circle-arrow-up-black.svg"
              : "/icons/circle-arrow-down-black.svg"
          }
          onClick={() => {
            if (isMobile) {
              setDrawerOpen(true);
            } else {
              setShowAgentStack((v) => !v);
            }
          }}
        />
      </div>

      {!isMobile && showAgentStack && <AgentStackContent />}

      <BottomSheet
        open={isMobile && drawerOpen}
        onClose={() => setDrawerOpen(false)}
        title="Agent Stack"
        className="md:hidden"
        contentClassName="px-[1.25rem] bg-Surface2 flex flex-col gap-4"
      >
        <div className="pt-2 pb-4  max-h-[80vh] overflow-y-auto">
          <AgentStackContent />
        </div>
      </BottomSheet>
    </div>
  );
});

export default AgentStackDetails;
