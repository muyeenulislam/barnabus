import React from "react";
import Image from "next/image";

const SIZE_STYLES = {
  S: {
    text: "text-[0.5rem] leading-[0.45rem]",
    iconSize: "h-[0.625rem] w-[0.625rem]",
    padding: "py-[0.06rem] px-[0.22rem]",
    gap: "gap-[0.05rem]",
    icon: 16,
  },
  M: {
    text: "text-[0.875rem] leading-[1.25rem]",
    iconSize: "h-[1.625rem] w-[1.625rem]",
    padding: "py-[0.125rem] px-[0.75rem]",
    gap: "gap-[0.125rem]",
    icon: 20,
  },
  L: {
    text: "text-sm leading-[1.25rem]",
    iconSize: "h-[1.5rem] w-[1.5rem]",
    padding: "py-2 px-4",
    gap: "gap-4",
    icon: 24,
  },
};

const VARIANT_STYLES = {
  red: [
    "bg-Badge-Red-Outline-Background",
    "text-Badge-Red-Outline-Content",
    "border border-Badge-Red-Outline-Border",
  ].join(" "),
  yellow: [
    "bg-Badge-Yellow-Outline-Background",
    "text-Badge-Yellow-Outline-Content",
    "border border-Badge-Yellow-Outline-Border",
  ].join(" "),
  green: [
    "bg-Badge-Green-Outline-Background",
    "text-Badge-Green-Outline-Content",
    "border border-Badge-Green-Outline-Border",
  ].join(" "),
};

const Tags = ({
  size = "M",
  variant = "green",
  label = "",
  leadingDot = null,
  trailingDot = null,
  leadingIcon = null,
  trailingIcon = null,
  className = "",
  additionalStyle = "",
  ...rest
}) => {
  const s = SIZE_STYLES[size] || SIZE_STYLES.L;
  const v = VARIANT_STYLES[variant] || VARIANT_STYLES["Primary-Default"];
  const iconSize = s.icon;

  return (
    <div
      className={[
        "inline-flex items-center justify-center rounded-full font-semibold text-center",
        s.text,
        s.padding,
        s.gap,
        v,
        className,
        additionalStyle,
      ].join(" ")}
      {...rest}
    >
      {leadingDot && (
        <Image
          src={leadingDot}
          alt="leading badge"
          height={iconSize}
          width={iconSize}
          aria-hidden="true"
          className={s.iconSize}
        />
      )}

      {leadingIcon && (
        <Image
          src={leadingIcon}
          alt="leading icon"
          height={iconSize}
          width={iconSize}
          aria-hidden="true"
          className={s.iconSize}
        />
      )}

      {label}

      {trailingIcon && (
        <Image
          src={trailingIcon}
          alt="trailing icon"
          height={iconSize}
          width={iconSize}
          aria-hidden="true"
          className={s.iconSize}
        />
      )}

      {trailingDot && (
        <Image
          src={trailingDot}
          alt="trailing badge"
          height={iconSize}
          width={iconSize}
          aria-hidden="true"
          className={s.iconSize}
        />
      )}
    </div>
  );
};

export default Tags;
