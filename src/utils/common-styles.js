import React, { memo } from "react";
import Image from "next/image";

const ICON_PANEL_BOX =
  "shrink-0 h-max w-max flex justify-center items-center rounded-[1.125rem] lg:rounded-3xl p-2 lg:p-3";

const ICON_PANEL_STYLE = Object.freeze({
  background:
    "radial-gradient(66.22% 86.87% at 50% 100%, rgba(255, 255, 255, 0.08) 0%, rgba(18, 19, 20, 0.19)) 100%, rgba(255, 255, 255, 0.03)",
  boxShadow:
    "0 0.5px 0 0.5px rgba(255, 255, 255, 0.12) inset, 0 0 1.5px 1.5px rgba(247, 247, 248, 0.12) inset",
});

const IconBadge = memo(function IconBadge({ src, alt = "" }) {
  return (
    <div className={ICON_PANEL_BOX} style={ICON_PANEL_STYLE} aria-hidden="true">
      <Image
        src={src}
        alt={alt}
        height={32}
        width={32}
        className="shrink-0 h-[1.875rem] w-[1.875rem] lg:h-[2.5rem] lg:w-[2.5rem]"
      />
    </div>
  );
});

const SECTION_GAPS = "gap-6 md:gap-8 lg:gap-12";

export { IconBadge, SECTION_GAPS };
