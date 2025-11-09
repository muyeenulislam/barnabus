import React from "react";

import SectionStartingGradient from "@/components/section-starting-gradient";
import BAAIntro from "@/components/baa-common/intro";
import BAAPageInfo from "@/components/baa-common/page-info";
import BAASections from "@/components/baa-common/sections";

import { TERMS } from "@/utils/arrays";

const Page = () => {
  return (
    <SectionStartingGradient>
      <div className="gray-gradient-bg">
        <section>
          <BAAIntro />
          <BAAPageInfo
            title="Terms of Use"
            subTitle={`These Terms of Use ("Terms") apply to your use of the websites, mobile applications, and services provided by Barnabus Inc., a company incorporated under the laws of Ontario, Canada, ("Barnabus," "we," "our," or "us") intended for use by licensed healthcare professionals. These platforms, resources, and tools are collectively referred to as the "Barnabus Platform" and include medical reference content, diagnostic support tools, workflow automation systems, personalized insights, research features, continuing education opportunities, communication features, and other content or applications (collectively, the "Services").\nBy using the Services, you agree to these Terms, which form a binding legal agreement. If you do not agree to these Terms, do not use the Services.`}
            topRightText="Last Updated:"
            date="Aug 27, 2025"
          />
          <BAASections list={TERMS} />
        </section>
      </div>
    </SectionStartingGradient>
  );
};

export default Page;
