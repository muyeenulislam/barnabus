import React from "react";
import PropTypes from "prop-types";
import Image from "next/image";

import { FiLoader } from "react-icons/fi";

const SIZE_STYLES = {
  S: {
    text: "text-xs leading-4",
    iconSize: "h-[1.625rem] w-[1.625rem]",
    padding: "py-1 px-2",
    gap: "gap-2",
    icon: 16,
  },
  M: {
    text: "text-[0.875rem] leading-[1.25rem]",
    iconSize: "h-[1.625rem] w-[1.625rem]",
    padding: "py-[0.5rem] px-[1rem]",
    gap: "gap-3",
    icon: 20,
  },
  L: {
    text: "text-sm leading-[1.25rem]",
    iconSize: "h-[1.5rem] w-[1.5rem]",
    padding: "py-2 px-4",
    gap: "gap-4",
    icon: 24,
  },
  XL: {
    text: "text-[1.125rem] leading-[1.625rem]",
    iconSize: "h-[1.625rem] w-[1.625rem]",
    padding: "py-[1rem] px-[1.5rem]",
    gap: "gap-4",
    icon: 28,
  },
  "2XL": {
    text: "text-[1.125rem] leading-[1.625rem]",
    iconSize: "h-[1.625rem] w-[1.625rem]",
    padding: "py-[1.25rem] px-[2rem]",
    gap: "gap-5",
    icon: 32,
  },
};

const VARIANT_STYLES = {
  "Primary-Default": [
    "bg-Action-Buttons-Primary-Default-Background-Default",
    "text-action-buttons-primary-default-content-default-hover-pressed",
    "shadow-LightGrayButton",
  ].join(" "),
  "Primary-Accent": [
    "bg-Action-Buttons-Primary-Accent-Background-Default",
    "text-Action-Buttons-Primary-Accent-Content-Default",
    "shadow-AccentButton",
  ].join(" "),
  Secondary: [
    "bg-Action-Buttons-Secondary-Background-Default",
    "text-action-buttons-secondary-content-default-pressed-hover",
    "shadow-SecondaryButton",
  ].join(" "),
  Pulse: [
    "bg-backgroundDarkGray",
    "text-Content-Brand-Accent",
    "shadow-pulseButton",
  ].join(" "),
};

const Button = ({
  label = "",
  leadingIcon = null,
  trailingIcon = null,
  trailingIconNeon = null,
  leadingBadge = null,
  trailingBadge = null,
  size = "L",
  variant = "Primary-Default",
  className = "",
  additionalStyle = "",
  type,
  onClick,
  loading = false,
  disabled = false,
  /** NEW: enable subtle pulse animation when true */
  pulse = false,
  ...rest
}) => {
  const s = SIZE_STYLES[size] || SIZE_STYLES.L;
  const v = pulse
    ? VARIANT_STYLES["Pulse"]
    : VARIANT_STYLES[variant] || VARIANT_STYLES["Primary-Default"];
  const iconSize = s.icon;

  return (
    <button
      type={type || "button"}
      className={[
        "inline-flex items-center justify-center rounded-full font-semibold text-center cursor-pointer outline-none disabled:cursor-default",
        s.text,
        s.padding,
        s.gap,
        v,
        "backdrop-blur-lg",
        pulse ? "pulse" : "",
        className,
        additionalStyle,
      ].join(" ")}
      onClick={onClick}
      disabled={disabled}
      {...rest}
    >
      {leadingBadge && (
        <Image
          src={leadingBadge}
          alt="leading badge"
          height={iconSize}
          width={iconSize}
          aria-hidden="true"
          className={s.iconSize}
        />
      )}

      {!loading && leadingIcon && (
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

      {!loading && !pulse && trailingIcon && (
        <Image
          src={trailingIcon}
          alt="trailing icon"
          height={iconSize}
          width={iconSize}
          aria-hidden="true"
          className={s.iconSize}
        />
      )}
      {!loading && pulse && trailingIconNeon && (
        <Image
          src={trailingIconNeon}
          alt="trailing icon neon"
          height={iconSize}
          width={iconSize}
          aria-hidden="true"
          className={s.iconSize}
        />
      )}

      {loading && (
        <FiLoader
          className={`${s.iconSize} motion-safe:animate-[spin_1.6s_linear_infinite]`}
        />
      )}

      {trailingBadge && (
        <Image
          src={trailingBadge}
          alt="trailing badge"
          height={iconSize}
          width={iconSize}
          aria-hidden="true"
          className={s.iconSize}
        />
      )}
    </button>
  );
};

Button.propTypes = {
  label: PropTypes.string,
  leadingIcon: PropTypes.string,
  trailingIcon: PropTypes.string,
  leadingBadge: PropTypes.string,
  trailingBadge: PropTypes.string,
  size: PropTypes.oneOf(["2XL", "XL", "L", "M", "S"]),
  variant: PropTypes.oneOf(["Primary-Accent", "Primary-Default", "Secondary"]),
  className: PropTypes.string,
  additionalStyle: PropTypes.string,
  type: PropTypes.oneOf(["button", "submit", "reset"]),
  pulse: PropTypes.bool,
};

export default Button;
