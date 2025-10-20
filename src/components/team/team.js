"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

import BottomSheet from "../bottom-sheet";
import { Tab } from "../tabs";
import { SolidTags } from "../tags";
import Modal from "../modal";

import { TEAM_LIST, ROLE_LIST, TAGS_LIST } from "@/utils/arrays";
import { useIsMobile } from "@/utils/useismobile";

const Team = () => {
  const isMobile = useIsMobile();

  const featured = TEAM_LIST?.filter((item) => item.featured);

  const [filter, setFilter] = useState("All");
  const [tab, setTab] = useState("core-team");
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [withoutFeatured, setWithoutFeatured] = useState(
    TEAM_LIST?.filter((item) => !item.featured)
  );

  useEffect(() => {
    if (isMobile && modalOpen) {
      setModalOpen(false);
      setDrawerOpen(true);
    } else if (!isMobile && drawerOpen) {
      setDrawerOpen(false);
      setModalOpen(true);
    }
  }, [isMobile, modalOpen, drawerOpen]);

  useEffect(() => {
    if (filter === "All") {
      setWithoutFeatured(TEAM_LIST?.filter((item) => !item.featured));
    } else {
      const getFilteredList = TEAM_LIST?.filter(
        (item) => !item.featured && item.roles?.includes(filter)
      );
      setWithoutFeatured(getFilteredList);
    }
  }, [filter]);

  useEffect(() => {
    if (tab === "core-team") {
      setWithoutFeatured(
        TEAM_LIST?.filter((item) => !item.featured && item.coreTeam)
      );
    } else if (tab === "team-members") {
      setWithoutFeatured(
        TEAM_LIST?.filter((item) => !item.featured && item.teamMember)
      );
    } else if (tab === "advisors") {
      setWithoutFeatured(
        TEAM_LIST?.filter((item) => !item.featured && item.advisor)
      );
    } else if (tab === "contributors") {
      setWithoutFeatured(
        TEAM_LIST?.filter((item) => !item.featured && item.contributor)
      );
    } else {
      setWithoutFeatured(TEAM_LIST?.filter((item) => !item.featured));
    }
  }, [tab]);

  const openDetails = () => {
    if (isMobile) {
      setDrawerOpen(true);
      setModalOpen(false);
    } else {
      setModalOpen(true);
      setDrawerOpen(false);
    }
  };
  const closeDetails = () => {
    setDrawerOpen(false);
    setModalOpen(false);
  };

  const handleResetFilter = () => {
    setFilter("All");
  };

  return (
    <div className="flex flex-col gap-6 md:gap-8 lg:gap-12">
      <div className="flex flex-col gap-4 md:gap-5 lg:gap-6">
        <div className="flex gap-4 justify-between items-center">
          <Tab
            tabItems={[
              { value: "core-team", label: "Core Team" },
              { value: "team-members", label: "Team Members" },
              { value: "advisors", label: "Advisors" },
              { value: "contributors", label: "Contributors" },
            ]}
            currentTab={tab}
            setTab={setTab}
            additionalStyle="w-max"
          />
          <button
            type="button"
            className="flex justify-center items-center rounded-full bg-Action-Buttons-Secondary-Background-Default text-action-buttons-secondary-content-default-pressed-hover font-semibold gap-1 lg:gap-2 py-2 px-5 lg:py-3 lg:px-5 text-xs lg:text-base leading-4 lg:leading-6 cursor-pointer"
            onClick={handleResetFilter}
          >
            <p>Filter</p>
            <Image
              src="/icons/filter-remove.svg"
              alt="remove filter"
              height={24}
              width={24}
              className="h-5 w-5"
            />
          </button>
        </div>
        <div className="flex flex-wrap gap-2">
          {ROLE_LIST?.map((item, index) => (
            <button
              type="button"
              key={index}
              className={`rounded-full font-semibold backdrop-blur-lg px-3 py-2 text-xs lg:text-[0.875rem] leading-4 lg:leading-5 cursor-pointer ${
                item === filter
                  ? "bg-Action-Buttons-Primary-Default-Background-Default text-backgroundDarkGray"
                  : "bg-Action-Buttons-Secondary-Background-Default"
              }`}
              onClick={() => setFilter(item)}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      {/* Featured list */}
      <div className="flex flex-col gap-4">
        {featured?.map((item, index) => (
          <div
            key={index}
            className="flex flex-col bg-Overlays-White-2 shadow-boxPrimary p-4 rounded-[1.25rem] gap-1 md:p-5 md:rounded-3xl lg:p-6 lg:gap-1.5 cursor-pointer"
            onClick={openDetails}
          >
            <div className="flex gap-4 justify-between items-center">
              <div className="flex gap-3">
                <h1 className="text-Content-Primary font-semibold text-lg leading-6.5 md:text-xl md:leading-7 lg:text-2xl lg:leading-8">
                  {item.name}
                </h1>
              </div>
              <Link href={item.linkedin} target="_blank">
                <Image
                  src="/icons/linkedin.svg"
                  alt="linkdin"
                  height={32}
                  width={32}
                  className="h-10 w-10"
                />
              </Link>
            </div>
            <p className="text-[#9DA1A8] text-[0.875rem] leading-5 lg:text-base lg:leading-6">
              {item.headline}
            </p>
            <div className="flex gap-1 flex-wrap">
              {item.tags?.map((tag, idx) => {
                const getTag = TAGS_LIST?.find((tag2) => tag === tag2.name);
                return (
                  <React.Fragment key={idx}>
                    <SolidTags
                      key={`s-${idx}`}
                      size="S"
                      variant={getTag.accent}
                      label={getTag.name}
                      additionalStyle="md:!hidden"
                    />
                    <SolidTags
                      key={`m-${idx}`}
                      size="M"
                      variant={getTag.accent}
                      label={getTag.name}
                      additionalStyle="!hidden md:!inline-flex"
                    />
                  </React.Fragment>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-[1.25rem] md:gap-x-[1.5rem] lg:gap-x-[2rem]">
        {withoutFeatured?.map((item, index) => (
          <React.Fragment key={index}>
            <div
              className="space-y-2 cursor-pointer md:p-2 rounded-xl transition duration-300 ease-out hover:bg-Overlays-White-4"
              onClick={openDetails}
            >
              <div>
                <p className="text-lg leading-6.5 md:text-xl lg:text-2xl md:leading-7 lg:leading-8 font-semibold text-[#CACED5]">
                  {item.name}
                </p>
                <p className="text-[#9DA1A8] mt-2 text-xs lg:text-sm leading-5">
                  {item.headline}
                </p>
              </div>
              <div className="flex gap-1 flex-wrap">
                {item.tags?.map((tag, idx) => {
                  const getTag = TAGS_LIST?.find((tag2) => tag === tag2.name);
                  return (
                    <React.Fragment key={idx}>
                      <SolidTags
                        key={`s2-${idx}`}
                        size="S"
                        variant={getTag.accent}
                        label={getTag.name}
                        additionalStyle="md:!hidden"
                      />
                      <SolidTags
                        key={`m2-${idx}`}
                        size="M"
                        variant={getTag.accent}
                        label={getTag.name}
                        additionalStyle="!hidden md:!inline-flex"
                      />
                    </React.Fragment>
                  );
                })}
              </div>
              {item.linkedin && (
                <Link href={item.linkedin} target="_blank">
                  <Image
                    src="/icons/linkedin.svg"
                    height={32}
                    width={32}
                    alt="linkedin"
                    className="h-[1.5rem] w-[1.5rem]"
                  />
                </Link>
              )}
            </div>

            {index % 2 === 1 && index < withoutFeatured.length - 1 && (
              <div
                aria-hidden="true"
                className="col-span-2 my-3 border-t border-white/10 block md:hidden"
              />
            )}
            {index % 3 === 2 && index < withoutFeatured.length - 1 && (
              <div
                aria-hidden="true"
                className="hidden md:block lg:hidden md:col-span-3 my-6 border-t border-white/10"
              />
            )}
            {index % 4 === 3 && index < withoutFeatured.length - 1 && (
              <div
                aria-hidden="true"
                className="hidden lg:block lg:col-span-4 my-8 border-t border-white/10"
              />
            )}
          </React.Fragment>
        ))}
      </div>

      <BottomSheet
        open={isMobile && drawerOpen}
        onClose={closeDetails}
        title="Member Details"
        className="md:hidden"
        contentClassName="px-[1.5rem] py-[1.25rem] bg-Surface2 flex flex-col gap-4"
      >
        hello
      </BottomSheet>
      <Modal
        open={!isMobile && modalOpen}
        onClose={closeDetails}
        title="Member Details"
      >
        hello
      </Modal>
    </div>
  );
};

export default Team;
