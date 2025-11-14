import React from "react";
import Link from "next/link";

import {
  FOOTER_NAV_ITEMS,
  FOOTER_SOCIAL_LINKS,
  FOOTER_OTHER_LINKS,
} from "@/utils/arrays";

const Footer = () => {
  return (
    <div className="pb-[2.5rem] pt-[2.5rem] px-[1.5rem] md:pb-[4rem] md:pt-[8rem] md:px-[8rem] bg-[url('/images/footer-bg.svg')] bg-no-repeat bg-center bg-cover flex flex-col gap-[4rem] relative">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 z-[50]">
        <div className="flex flex-col gap-4 md:gap-6">
          <h1 className="text-[2rem] md:text-[3rem] font-semibold text-Content-Primary leading-10 md:leading-14">
            Let&apos;s Talk
          </h1>
          <Link
            href="mailto:contact@barnabus.ai"
            target="_blank"
            className="w-max md:text-lg text-[#CACED5] !underline !underline-offset-[25%] leading-6 md:leading-7 hover:text-Content-Brand-Accent hover:[text-shadow:0_0_16px_rgba(59,245,255,0.9)] hover:scale-102 transition-all duration-200"
          >
            contact@barnabus.ai
          </Link>

          <div className="flex gap-4">
            {FOOTER_SOCIAL_LINKS?.map(({ Icon, link }, index) => (
              <Link key={index} href={link} className="group inline-flex">
                <Icon
                  className="h-8 w-8 text-[#CACED5] transition-all duration-200 hover:scale-105
                   group-hover:text-Content-Brand-Accent
                   group-hover:drop-shadow-[0_0_8px_rgba(59,245,255)]"
                />
              </Link>
            ))}
          </div>
        </div>
        <div className="flex flex-wrap gap-3 md:gap-6 items-start h-max">
          {FOOTER_NAV_ITEMS?.map((item, index) => (
            <Link
              key={index}
              href={item.route}
              className="md:text-lg text-[#CACED5] !underline !underline-offset-[25%] leading-6 uppercase hover:text-Content-Brand-Accent hover:scale-105 transition-all duration-200"
            >
              {item.title}
            </Link>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 z-[50]">
        <p className="text-[#9DA1A8] leading-6 hidden md:block">
          © 2016 - {new Date().getFullYear()} Barnabus. All rights reserved.
        </p>
        <div className="flex justify-between items-center">
          {FOOTER_OTHER_LINKS?.map((item, index) => (
            <Link
              key={index}
              href={item.route}
              className="text-[#CACED5] !underline !underline-offset-[25%] leading-7 text-sm md:text-base hover:text-Content-Brand-Accent hover:scale-105 transition-all duration-200"
            >
              {item.title}
            </Link>
          ))}
        </div>
        <p className="text-sm md:text-base text-[#9DA1A8] leading-6 md:hidden text-center">
          © 2016 - {new Date().getFullYear()} Barnabus. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
