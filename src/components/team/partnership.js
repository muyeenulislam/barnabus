"use client";

import React, { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";

import { Select } from "../select";
import Modal from "../modal";
import BottomSheet from "../bottom-sheet";
import { buildTagMap, TagChips } from "@/utils/tag-utils";

import {
  TIER_LIST,
  DOMAIN_LIST,
  REGION_LIST,
  PARTNERSHIP_LIST,
  TAGS_LIST,
} from "@/utils/arrays";
import { useIsMobile } from "@/utils/useismobile";

const PartnerDetailsContent = React.memo(function PartnerDetailsContent({
  partner,
  tagMap,
  tierMap,
  domainMap,
  compact = false,
}) {
  if (!partner) return null;
  return (
    <>
      <div className="flex flex-col gap-1">
        <Image
          src={partner.icon}
          alt="LinkedIn"
          height={32}
          width={32}
          className="h-[4rem] w-max mb-2"
        />
        <div className="flex gap-4 justify-between items-center">
          <div className="flex gap-3 items-center">
            <h1
              className={[
                "text-Content-Primary font-semibold",
                compact
                  ? "text-lg leading-6.5"
                  : "text-lg leading-6.5 md:text-[1.25] md:leading-[1.75rem] lg:text-[2rem] lg:leading-[2.5rem]",
              ].join(" ")}
            >
              {partner?.name}
            </h1>
            <TagChips tags={[partner?.tier]} tagMap={tierMap} responsive />
          </div>
          <Link href={partner?.link || "#"} target="_blank">
            <Image
              src="/icons/link-square.svg"
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
          {partner?.region}
        </p>
        <p
          className={[
            "text-[#9DA1A8]",
            compact
              ? "text-[0.875rem] leading-5"
              : "text-[0.875rem] leading-5 lg:text-base lg:leading-6",
          ].join(" ")}
        >
          {partner?.headline}
        </p>
        <TagChips tags={partner?.domain} tagMap={domainMap} responsive />
      </div>

      <div className="h-px w-full my-2 md:my-6 lg:my-8 bg-Overlays-White-7 shrink-0" />

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
            {partner?.bio}
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
            {partner?.currentContributions}
          </p>
        </div>
      </div>

      {Array.isArray(partner?.publications) &&
        partner.publications.length > 0 && (
          <>
            <div className="h-px w-full my-2 md:my-6 lg:my-8 bg-Overlays-White-7 shrink-0" />
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
                {partner.publications.map((pub, i) => (
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

const getVal = (x) => (x && typeof x === "object" ? x.value : x) || null;

const Partnership = () => {
  const isMobile = useIsMobile();

  const tagMap = useMemo(() => buildTagMap(TAGS_LIST), []);
  const tierMap = useMemo(() => buildTagMap(TIER_LIST), []);
  const domainMap = useMemo(() => buildTagMap(DOMAIN_LIST), []);

  const [filters, setFilters] = useState({
    tier: null,
    domain: null,
    region: null,
    status: null,
  });
  const [partners, setPartners] = useState(PARTNERSHIP_LIST);
  const [partnerDetails, setPartnerDetails] = useState(null);

  const [drawerOpen, setDrawerOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const tier = getVal(filters.tier);
    const domain = getVal(filters.domain);
    const region = getVal(filters.region);
    const status = getVal(filters.status);

    const next = PARTNERSHIP_LIST.filter((p) => {
      const tierOk = !tier || p.tier === tier;
      const domainOk =
        !domain ||
        (Array.isArray(p.domain)
          ? p.domain.includes(domain)
          : p.domain === domain);
      const regionOk = !region || p.region === region;
      const statusOk = !status || p.status === status;

      return tierOk && domainOk && regionOk && statusOk;
    });

    setPartners(next);
  }, [filters]);

  useEffect(() => {
    if (isMobile && modalOpen) {
      setModalOpen(false);
      setDrawerOpen(true);
    } else if (!isMobile && drawerOpen) {
      setDrawerOpen(false);
      setModalOpen(true);
    }
  }, [isMobile, modalOpen, drawerOpen]);

  const openDetails = (name) => {
    setPartnerDetails(PARTNERSHIP_LIST?.find((item) => item.name === name));
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

  return (
    <div className="flex flex-col gap-6 md:gap-8 lg:gap-12">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Select
          label="Tier"
          options={TIER_LIST?.map((item) => ({
            label: item.name,
            value: item.value,
          }))}
          value={filters.tier}
          onChange={(e) => setFilters((f) => ({ ...f, tier: e }))}
          placeholder="Select tier"
          searchable={false}
          clearable
        />
        <Select
          label="Domain"
          options={DOMAIN_LIST?.map((item) => ({
            label: item.name,
            value: item.value,
          }))}
          value={filters.domain}
          onChange={(e) => setFilters((f) => ({ ...f, domain: e }))}
          placeholder="All"
          searchable={false}
          clearable
        />
        <Select
          label="Region"
          options={REGION_LIST?.map((item) => ({
            label: item.name,
            value: item.value,
          }))}
          value={filters.region}
          onChange={(e) => setFilters((f) => ({ ...f, region: e }))}
          placeholder="All"
          searchable
          clearable
        />
        <Select
          label="Status"
          options={[
            { label: "Active", value: "active" },
            { label: "Inactive", value: "inactive" },
          ]}
          value={filters.status}
          onChange={(e) => setFilters((f) => ({ ...f, status: e }))}
          placeholder="All"
          searchable={false}
          clearable
        />
      </div>

      {partners.length === 0 ? (
        <p className="text-sm text-Content-Tertiary">
          No partners match your filters.
        </p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6 md:gap-8 lg:gap-10 place-items-left">
          {partners.map((item) => (
            <div
              key={Math.random()}
              className="group flex items-center justify-left overflow-hidden"
              onClick={() => openDetails(item.name)}
            >
              <Image
                src={item.icon}
                alt={item.name}
                width={160}
                height={64}
                className="p-3 w-[10rem] h-max object-contain grayscale transition duration-300 ease-out group-hover:grayscale-0 group-hover:scale-105 transform motion-reduce:transform-none cursor-pointer"
              />
            </div>
          ))}
        </div>
      )}
      <BottomSheet
        open={isMobile && drawerOpen}
        onClose={closeDetails}
        title="Partner Details"
        className="md:hidden"
        contentClassName="px-[1.5rem] py-[1.25rem] bg-Surface2 flex flex-col gap-4 max-h-[80vh] overflow-y-auto"
      >
        <PartnerDetailsContent
          partner={partnerDetails}
          tagMap={tagMap}
          domainMap={domainMap}
          tierMap={tierMap}
          compact
        />
      </BottomSheet>
      <Modal
        open={!isMobile && modalOpen}
        onClose={closeDetails}
        title="Partner Details"
        panelClassName="md:!max-w-[40rem] lg:!max-w-[50rem]"
      >
        <PartnerDetailsContent
          partner={partnerDetails}
          tagMap={tagMap}
          domainMap={domainMap}
          tierMap={tierMap}
        />
      </Modal>
    </div>
  );
};

export default Partnership;
