"use client";

import React, { useState, useEffect } from "react";
import { Select, MultiSelect } from "../select";
import {
  TIER_LIST,
  DOMAIN_LIST,
  REGION_LIST,
  PARTNERSHIP_LIST,
} from "@/utils/arrays";

const Partnership = () => {
  const [filters, setFilters] = useState({
    tier: null,
    domain: null,
    region: null,
    status: null,
  });
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
          onChange={(e) => setFilters({ ...filters, tier: e })}
          placeholder="Select tier"
          searchable
          clearable
        />
        <Select
          label="Domain"
          options={DOMAIN_LIST?.map((item) => ({
            label: item.name,
            value: item.value,
          }))}
          value={filters.domain}
          onChange={(e) => setFilters({ ...filters, domain: e })}
          placeholder="All"
          searchable
          clearable
        />
      </div>
    </div>
  );
};

export default Partnership;
