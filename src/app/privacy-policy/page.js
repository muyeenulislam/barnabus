import React from "react";

import SectionStartingGradient from "@/components/section-starting-gradient";
import BAAIntro from "@/components/baa-common/intro";
import BAAPageInfo from "@/components/baa-common/page-info";
import BAASections from "@/components/baa-common/sections";

import { PRIVACY } from "@/utils/arrays";
import { generateMetadata } from "@/utils/metadata";

export const metadata = generateMetadata({
  title: "Barnabus Privacy Policy",
  description:
    "Understand how Barnabus collects, uses, and safeguards personal information under Canadian privacy legislation including PIPEDA and PHIPA.",
  path: "/privacy-policy",
});

const Page = () => {
  return (
    <SectionStartingGradient>
      <div className="gray-gradient-bg">
        <section>
          <BAAIntro />
          <BAAPageInfo
            title="Privacy policy"
            subTitle={`Barnabus Inc. ("Barnabus," "we," "our," or "us") is committed to protecting the privacy and confidentiality of our users’ personal and professional information. This Privacy Policy explains how we collect, use, disclose, and protect your information when you access or use our website, platform, and services (collectively, the "Services").\nBarnabus Inc. is a company incorporated under the laws of Ontario, Canada, and operates under the jurisdiction of Canadian privacy laws, including the Personal Information Protection and Electronic Documents Act (PIPEDA) and, where applicable, Personal Health Information Protection Act (PHIPA) for Ontario-based users.\nBarnabus provides services to healthcare professionals in Canada, the United States, and globally.`}
            topRightText="Last Updated:"
            date="Aug 27, 2025"
          />
          <BAASections list={PRIVACY} />
        </section>
      </div>
    </SectionStartingGradient>
  );
};

export default Page;
