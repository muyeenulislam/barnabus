import React from "react";
import Link from "next/link";
import Image from "next/image";

import {
  FOOTER_NAV_ITEMS,
  FOOTER_SOCIAL_LINKS,
  FOOTER_OTHER_LINKS,
} from "@/utils/arrays";

const Footer = () => {
  return (
    <div
      className="pb-[2.5rem] pt-[2.5rem] px-[1.5rem] md:pb-[4rem] md:pt-[8rem] md:px-[8rem] bg-no-repeat bg-top bg-cover flex flex-col gap-[4rem] relative"
      style={{
        backgroundImage:
          "linear-gradient(to bottom, #121314, rgba(0,0,0,0)), url('/images/footer-bg.png')",
        backgroundRepeat: "no-repeat, no-repeat",
        backgroundSize: "100% 100%, cover",
        backgroundPosition: "top, top",
      }}
    >
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 h-[5rem] w-[60%] rounded-full blur-[6rem] bg-white/15 z-10"></div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 z-[50]">
        <div className="flex flex-col gap-4 md:gap-6">
          <h1 className="text-[2rem] md:text-[3rem] font-semibold text-Content-Primary leading-10 md:leading-14">
            Let&apos;s Talk
          </h1>
          <Link
            href="mailto:hey@barnabus.ai"
            target="_blank"
            className="md:text-lg text-[#CACED5] !underline !underline-offset-[25%] leading-6 md:leading-7 hover:text-Content-Brand-Accent transition-all duration-200"
          >
            hey@barnabus.ai
          </Link>
          <div className="flex gap-4">
            {FOOTER_SOCIAL_LINKS?.map((item, index) => (
              <Link key={index} href={item.link}>
                <Image
                  src={item.icon}
                  height={32}
                  width={32}
                  alt="social"
                  className="h-8 w-8 hover:scale-110 transition-all duration-200"
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
          © 2016 - {new Date().getFullYear()} Barnabus
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
          © 2016 - {new Date().getFullYear()} Barnabus
        </p>
      </div>
    </div>
  );
};

export default Footer;
