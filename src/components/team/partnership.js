"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

import { Select } from "../select";
import Modal from "../modal";
import BottomSheet from "../bottom-sheet";

import {
  TIER_LIST,
  DOMAIN_LIST,
  REGION_LIST,
  PARTNERSHIP_LIST,
} from "@/utils/arrays";
import { useIsMobile } from "@/utils/useismobile";

const Partnership = () => {
  const isMobile = useIsMobile();

  const [filters, setFilters] = useState({
    tier: null,
    domain: null,
    region: null,
    status: null,
  });
  const [partners, setPartners] = useState(PARTNERSHIP_LIST);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const getVal = (x) => (x && typeof x === "object" ? x.value : x) || null;

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
              onClick={openDetails}
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
        contentClassName="px-[1.5rem] py-[1.25rem] bg-Surface2 flex flex-col gap-4"
      >
        hello
      </BottomSheet>
      <Modal
        open={!isMobile && modalOpen}
        onClose={closeDetails}
        title="Partner Details"
      >
        hello
      </Modal>
    </div>
  );
};

export default Partnership;
