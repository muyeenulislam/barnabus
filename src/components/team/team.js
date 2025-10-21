"use client";

import React, { useCallback, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import BottomSheet from "../bottom-sheet";
import { Tab } from "../tabs";
import { SolidTags } from "../tags";
import Modal from "../modal";

import { TEAM_LIST, ROLE_LIST, TAGS_LIST } from "@/utils/arrays";
import { useIsMobile } from "@/utils/useismobile";
import { ddmmmyyyy } from "@/utils/date-formatter";

const TAB_ITEMS = [
  { value: "core-team", label: "Core Team" },
  { value: "team-members", label: "Team Members" },
  { value: "advisors", label: "Advisors" },
  { value: "contributors", label: "Contributors" },
];

const FILTER_ALL = "All";

const CoreLeaderBadge = React.memo(function CoreLeaderBadge() {
  return (
    <div className="flex items-center justify-center gap-0.5 lg:gap-1 px-2 py-1 rounded-full bg-Badge-Gold-Solid-Background text-Badge-Gold-Solid-Content font-semibold text-xs lg:text-sm leading-4 lg:leading-5">
      <p>Core Leader</p>
      <Image
        src="/icons/stars-filled.svg"
        alt="stars"
        height={32}
        width={32}
        className="h-4 w-4"
      />
    </div>
  );
});

function buildTagMap(list) {
  const map = Object.create(null);
  for (const t of list || []) map[t.name] = t;
  return map;
}

const TagChips = React.memo(function TagChips({
  tags = [],
  tagMap,
  responsive = true,
  size = "M",
}) {
  if (!tags?.length) return null;
  return (
    <div className="flex gap-1 flex-wrap">
      {tags.map((name, idx) => {
        const t = tagMap[name];
        if (!t) return null;
        if (responsive) {
          return (
            <React.Fragment key={`${name}-${idx}`}>
              <SolidTags
                size="S"
                variant={t.accent}
                label={t.name}
                additionalStyle="md:!hidden"
              />
              <SolidTags
                size="M"
                variant={t.accent}
                label={t.name}
                additionalStyle="!hidden md:!inline-flex"
              />
            </React.Fragment>
          );
        }
        return (
          <SolidTags
            key={`${name}-${idx}`}
            size={size}
            variant={t.accent}
            label={t.name}
          />
        );
      })}
    </div>
  );
});

const FeaturedCard = React.memo(function FeaturedCard({
  item,
  onOpen,
  tagMap,
}) {
  return (
    <div
      className="flex flex-col bg-Overlays-White-2 shadow-boxPrimary p-4 rounded-[1.25rem] gap-1 md:p-5 md:rounded-3xl lg:p-6 lg:gap-1.5 cursor-pointer"
      onClick={() => onOpen(item.name)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && onOpen(item.name)}
    >
      <div className="flex gap-4 justify-between items-center">
        <div className="flex gap-3 items-center">
          <h1 className="text-Content-Primary font-semibold text-lg leading-6.5 md:text-xl md:leading-7 lg:text-2xl lg:leading-8">
            {item?.name}
          </h1>
          <CoreLeaderBadge />
        </div>
        <Link href={item?.linkedin || "#"} target="_blank">
          <Image
            src="/icons/linkedin.svg"
            alt="LinkedIn"
            height={32}
            width={32}
            className="h-10 w-10"
          />
        </Link>
      </div>
      <p className="text-[#9DA1A8] text-[0.875rem] leading-5 lg:text-base lg:leading-6">
        {item?.headline}
      </p>
      <TagChips tags={item?.tags} tagMap={tagMap} responsive />
    </div>
  );
});

const MemberCard = React.memo(function MemberCard({ item, onOpen, tagMap }) {
  return (
    <div
      className="space-y-2 cursor-pointer md:p-2 rounded-xl transition duration-300 ease-out hover:bg-Overlays-White-4"
      onClick={() => onOpen(item.name)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && onOpen(item.name)}
    >
      <div>
        <p className="text-lg leading-6.5 md:text-xl lg:text-2xl md:leading-7 lg:leading-8 font-semibold text-[#CACED5]">
          {item?.name}
        </p>
        <p className="text-[#9DA1A8] mt-2 text-xs lg:text-sm leading-5">
          {item?.headline}
        </p>
      </div>
      <TagChips tags={item?.tags} tagMap={tagMap} responsive />
      {item?.linkedin && (
        <Link href={item.linkedin} target="_blank">
          <Image
            src="/icons/linkedin.svg"
            height={32}
            width={32}
            alt="LinkedIn"
            className="h-[1.5rem] w-[1.5rem]"
          />
        </Link>
      )}
    </div>
  );
});

const MemberDetailsContent = React.memo(function MemberDetailsContent({
  member,
  tagMap,
  compact = false,
}) {
  if (!member) return null;
  return (
    <>
      <div className="flex flex-col gap-2">
        <div className="flex gap-4 justify-between items-center">
          <div className="flex gap-3 items-center">
            <h1
              className={[
                "text-Content-Primary font-semibold",
                compact
                  ? "text-lg leading-6.5"
                  : "text-lg leading-6.5 md:text-xl md:leading-7 lg:text-2xl lg:leading-8",
              ].join(" ")}
            >
              {member?.name}
            </h1>
            {member?.featured && <CoreLeaderBadge />}
          </div>
          <Link href={member?.linkedin || "#"} target="_blank">
            <Image
              src="/icons/linkedin.svg"
              alt="LinkedIn"
              height={32}
              width={32}
              className={
                compact
                  ? "h-8 w-8 p-1 hover:bg-Action-Buttons-Tertiary-Background-Hover rounded-full transition-all"
                  : "h-10 w-10 p-2 hover:bg-Action-Buttons-Tertiary-Background-Hover rounded-full transition-all"
              }
            />
          </Link>
        </div>
        <p
          className={[
            "text-[#9DA1A8]",
            compact
              ? "text-[0.875rem] leading-5"
              : "text-[0.875rem] leading-5 lg:text-base lg:leading-6",
          ].join(" ")}
        >
          {member?.headline}
        </p>
        <TagChips tags={member?.tags} tagMap={tagMap} responsive />
      </div>

      <div className="h-px w-full my-2 md:my-6 lg:my-12 bg-Overlays-White-7 shrink-0" />

      <div className="flex flex-col gap-5 lg:gap-6">
        <div className="flex flex-col gap-1 lg:gap-2">
          <h4
            className={
              compact
                ? "text-Content-Primary font-semibold text-base leading-6"
                : "text-Content-Primary font-semibold text-base leading-6 lg:text-xl lg:leading-7"
            }
          >
            Bio
          </h4>
          <p
            className={
              compact
                ? "text-[#9DA1A8] text-sm leading-5"
                : "text-[#9DA1A8] text-sm leading-5 lg:text-base lg:leading-6"
            }
          >
            {member?.bio}
          </p>
        </div>

        <div className="flex flex-col gap-1 lg:gap-2">
          <h4
            className={
              compact
                ? "text-Content-Primary font-semibold text-base leading-6"
                : "text-Content-Primary font-semibold text-base leading-6 lg:text-xl lg:leading-7"
            }
          >
            Current Barnabus Contributions
          </h4>
          <p
            className={
              compact
                ? "text-[#9DA1A8] text-sm leading-5"
                : "text-[#9DA1A8] text-sm leading-5 lg:text-base lg:leading-6"
            }
          >
            {member?.currentContributions}
          </p>
        </div>
      </div>

      {Array.isArray(member?.publications) &&
        member.publications.length > 0 && (
          <>
            <div className="h-px w-full my-2 md:my-6 lg:my-12 bg-Overlays-White-7 shrink-0" />
            <div className="flex flex-col gap-2 lg:gap-3">
              <h4
                className={
                  compact
                    ? "text-Content-Primary font-semibold text-base leading-6"
                    : "text-Content-Primary font-semibold text-base leading-6 lg:text-xl lg:leading-7"
                }
              >
                Publications
              </h4>
              <div className="flex flex-col gap-1">
                {member.publications.map((pub, i) => (
                  <div
                    key={`${pub?.name || "pub"}-${i}`}
                    className={
                      compact
                        ? "flex flex-col bg-Surface1 shadow-boxPrimary p-2 rounded-2xl gap-1"
                        : "flex flex-col bg-Surface1 shadow-boxPrimary p-3 rounded-2xl gap-1 lg:p-4 lg:gap-1.5"
                    }
                  >
                    <div className="flex gap-4 justify-between items-center">
                      <div className="flex gap-3 items-center">
                        <h1 className="text-Content-Primary font-semibold text-sm leading-5 lg:text-lg lg:leading-6.5">
                          {pub?.name}
                        </h1>
                      </div>
                      <Link href={pub?.link || "#"} target="_blank">
                        <Image
                          src="/icons/link-square.svg"
                          alt="Open link"
                          height={32}
                          width={32}
                          className={compact ? "h-5 w-5" : "h-6 w-6"}
                        />
                      </Link>
                    </div>
                    <p className="text-[#9DA1A8] text-[0.875rem] leading-5 lg:text-base lg:leading-6">
                      Published: {ddmmmyyyy(pub?.publishDate)}
                    </p>
                    <TagChips
                      tags={pub?.tags}
                      tagMap={tagMap}
                      responsive={false}
                      size="S"
                    />
                  </div>
                ))}
              </div>
            </div>
          </>
        )}
    </>
  );
});

export default function Team() {
  const isMobile = useIsMobile();
  const [roleFilter, setRoleFilter] = useState(FILTER_ALL);
  const [tab, setTab] = useState(TAB_ITEMS[0].value);
  const [memberDetails, setMemberDetails] = useState(null);

  const tagMap = useMemo(() => buildTagMap(TAGS_LIST), []);

  const featured = useMemo(
    () => (TEAM_LIST || []).filter((m) => m?.featured),
    []
  );

  const matchesTab = useCallback(
    (m) => {
      switch (tab) {
        case "core-team":
          return !!m?.coreTeam;
        case "team-members":
          return !!m?.teamMember;
        case "advisors":
          return !!m?.advisor;
        case "contributors":
          return !!m?.contributor;
        default:
          return true;
      }
    },
    [tab]
  );

  const filteredMembers = useMemo(() => {
    const list = TEAM_LIST || [];
    return list.filter((m) => {
      if (m?.featured) return false;
      const rolePass =
        roleFilter === FILTER_ALL || (m?.roles || []).includes(roleFilter);
      return rolePass && matchesTab(m);
    });
  }, [roleFilter, matchesTab]);

  const openDetails = useCallback((name) => {
    const m = (TEAM_LIST || []).find((it) => it?.name === name);
    setMemberDetails(m || null);
  }, []);

  const closeDetails = useCallback(() => setMemberDetails(null), []);

  const resetFilter = useCallback(() => setRoleFilter(FILTER_ALL), []);

  const sheetOpen = isMobile && !!memberDetails;
  const modalOpen = !isMobile && !!memberDetails;

  return (
    <div className="flex flex-col gap-6 md:gap-8 lg:gap-12">
      <div className="flex flex-col gap-4 md:gap-5 lg:gap-6">
        <div className="flex gap-4 justify-between items-center">
          <Tab
            tabItems={TAB_ITEMS}
            currentTab={tab}
            setTab={setTab}
            additionalStyle="w-max"
          />
          <button
            type="button"
            className="flex justify-center items-center rounded-full bg-Action-Buttons-Secondary-Background-Default text-action-buttons-secondary-content-default-pressed-hover font-semibold gap-1 lg:gap-2 py-2 px-5 lg:py-3 lg:px-5 text-xs lg:text-base leading-4 lg:leading-6 cursor-pointer"
            onClick={resetFilter}
          >
            <p>Filter</p>
            <Image
              src="/icons/filter-remove.svg"
              alt="Clear filter"
              height={24}
              width={24}
              className="h-5 w-5"
            />
          </button>
        </div>

        <div className="flex flex-wrap gap-2">
          {(ROLE_LIST || []).map((role) => (
            <button
              type="button"
              key={role}
              className={[
                "rounded-full font-semibold backdrop-blur-lg px-3 py-2 text-xs lg:text-[0.875rem] leading-4 lg:leading-5 cursor-pointer",
                role === roleFilter
                  ? "bg-Action-Buttons-Primary-Default-Background-Default text-backgroundDarkGray"
                  : "bg-Action-Buttons-Secondary-Background-Default",
              ].join(" ")}
              onClick={() => setRoleFilter(role)}
              aria-pressed={role === roleFilter}
            >
              {role}
            </button>
          ))}
        </div>
      </div>

      {!!featured.length && (
        <div className="flex flex-col gap-4">
          {featured.map((item) => (
            <FeaturedCard
              key={item?.name}
              item={item}
              onOpen={openDetails}
              tagMap={tagMap}
            />
          ))}
        </div>
      )}

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-[1.25rem] md:gap-x-[1.5rem] lg:gap-x-[2rem]">
        {filteredMembers.map((item, index) => (
          <React.Fragment key={item?.name || index}>
            <MemberCard item={item} onOpen={openDetails} tagMap={tagMap} />

            {index % 2 === 1 && index < filteredMembers.length - 1 && (
              <div
                aria-hidden="true"
                className="col-span-2 my-3 border-t border-white/10 block md:hidden"
              />
            )}
            {index % 3 === 2 && index < filteredMembers.length - 1 && (
              <div
                aria-hidden="true"
                className="hidden md:block lg:hidden md:col-span-3 my-6 border-t border-white/10"
              />
            )}
            {index % 4 === 3 && index < filteredMembers.length - 1 && (
              <div
                aria-hidden="true"
                className="hidden lg:block lg:col-span-4 my-8 border-t border-white/10"
              />
            )}
          </React.Fragment>
        ))}
      </div>

      <BottomSheet
        open={sheetOpen}
        onClose={closeDetails}
        title="Member Details"
        className="md:hidden"
        contentClassName="px-[1.5rem] py-[1.25rem] bg-Surface2 flex flex-col gap-4 max-h-[80vh] overflow-y-auto"
      >
        <MemberDetailsContent member={memberDetails} tagMap={tagMap} compact />
      </BottomSheet>

      <Modal
        open={modalOpen}
        onClose={closeDetails}
        title="Member Details"
        panelClassName="md:!max-w-[40rem] lg:!max-w-[50rem]"
      >
        <MemberDetailsContent member={memberDetails} tagMap={tagMap} />
      </Modal>
    </div>
  );
}
