import React, { memo, useMemo } from "react";
import Image from "next/image";

const VARIANTS = {
  teal: {
    accent: "#11C2CC",
    detail: "#CCFCFF",
    bg: "rgba(12, 126, 132, 0.05)",
  },
  purple: {
    accent: "#BE37D2",
    detail: "#CF90D8",
    bg: "rgba(148, 42, 164, 0.05)",
  },
  yellow: {
    accent: "#EBBB01",
    detail: "#E3CA6B",
    bg: "rgba(148, 105, 0, 0.05)",
  },
  violet: {
    accent: "#8C5CEB",
    detail: "#B2A5F5",
    bg: "rgba(109, 69, 187, 0.05)",
  },
  default: { accent: "#FFFFFF", detail: "#FFFFFF", bg: null },
};

function buildInsetShadow(hex, small = 1.175, big = 5.873) {
  const s = `0 0 ${small}px 0 ${hex} inset`;
  const l = `0 0 ${big}px 0 ${hex} inset`;
  return [s, s, s, s, l].join(", ");
}

const InputCards = memo(function InputCards({
  icon,
  title,
  variant = "default",
  items = [],
}) {
  const { accent, detail, bg } = VARIANTS[variant] ?? VARIANTS.default;

  const styles = useMemo(
    () => ({
      "--acc": accent,
      "--detail": detail,
      background: bg ?? undefined,
      boxShadow: bg ? buildInsetShadow(accent) : undefined,
    }),
    [accent, detail, bg]
  );

  return (
    <div
      className="flex flex-col items-center justify-center gap-6 p-6 rounded-[1.25rem] md:gap-8 md:p-8 md:rounded-4xl lg:gap-[4rem] backdrop-blur-[30px]"
      style={styles}
    >
      {icon && (
        <Image
          src={icon}
          width={96}
          height={96}
          alt={title}
          className="h-[3.75rem] w-[3.75rem] md:h-[5rem] md:w-[5rem] lg:h-[6rem] lg:w-[6rem]"
        />
      )}

      <div className="flex flex-col gap-5 md:gap-8 w-full">
        <h2
          className="font-bold text-Content-Primary text-xl leading-7 md:text-2xl md:leading-8 lg:text-[2rem] lg:leading-10 pb-3 lg:pb-4 border-b-[0.073rem]"
          style={{ borderColor: "var(--acc)" }}
        >
          {title}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4 md:gap-y-3 md:gap-x-12 lg:gap-4">
          {items.map((item, idx) => {
            const { icon: ItemIcon, label, detail: desc, id } = item || {};
            const key = id ?? idx;

            return (
              <div
                key={key}
                className="flex gap-3 pb-1.5 md:pb-2 lg:pb-3 border-b-[0.043rem]
                           last:border-b-0
                           md:[&:nth-last-child(-n+2)]:border-b-0
                           lg:!border-b-[0.043rem] lg:last:!border-b-0"
                style={{ borderColor: "var(--acc)" }}
              >
                {ItemIcon ? (
                  <div className="h-[2.5rem] w-[2.5rem] shrink-0">
                    {ItemIcon}
                  </div>
                ) : (
                  <div className="h-[2.5rem] w-[2.5rem] shrink-0" />
                )}

                <div className="space-y-3">
                  {label && (
                    <h3 className="font-medium text-base leading-4 lg:text-lg">
                      {label}
                    </h3>
                  )}
                  {desc && (
                    <p
                      className="text-xs leading-4 lg:text-sm lg:leading-5"
                      style={{ color: "var(--detail)" }}
                    >
                      {desc}
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
});

export default InputCards;
