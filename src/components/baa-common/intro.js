"use client";
import React, { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { Tab } from "../tabs";

const BAAIntro = () => {
  const pathname = usePathname();
  const router = useRouter();

  // Initialize the tab state directly from the pathname
  const [tab, setTab] = useState(pathname);

  // Effect hook to update tab when pathname changes
  useEffect(() => {
    setTab(pathname);
  }, [pathname]);

  // Effect hook to update URL when the tab changes
  useEffect(() => {
    if (tab !== pathname) {
      router.push(tab);
    }
  }, [tab, pathname, router]);

  return (
    <div className="page-intro">
      <div className="page-intro-inner z-101">
        <h1 className="page-intro-heading !max-w-full">
          Business Associate Agreement (BAA), Terms of Use, and Privacy Policy -{" "}
          <br />
          <span className="text-Action-Buttons-Primary-Accent-Content-Default">
            Barnabus Inc.
          </span>
        </h1>
      </div>
      <Tab
        tabItems={[
          {
            value: "/business-associate-agreement",
            label: "Business Associate Agreement",
          },
          { value: "/terms-of-use", label: "Terms of Use" },
          { value: "/privacy-policy", label: "Privacy Policy" },
        ]}
        currentTab={tab}
        setTab={setTab}
        additionalStyle="z-101"
        tabItemFullWidth={true}
      />
    </div>
  );
};

export default BAAIntro;
