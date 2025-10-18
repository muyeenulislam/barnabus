import React from "react";
import Image from "next/image";
import PropTypes from "prop-types";

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
    "hover:bg-Action-Buttons-Primary-Default-Background-Hover",
    "active:bg-Action-Buttons-Primary-Default-Background-Pressed",
    "focus:outline-none focus:ring-2 focus:ring-offset-0",
    "focus:ring-Action-Buttons-Primary-Default-Background-Hover",
  ].join(" "),
  "Primary-Accent": [
    "bg-Action-Buttons-Primary-Accent-Background-Default",
    "text-Action-Buttons-Primary-Accent-Content-Default",
    "shadow-AccentButton",
    "hover:bg-Action-Buttons-Primary-Accent-Background-Hover",
    "active:bg-Action-Buttons-Primary-Accent-Background-Pressed",
    "focus:outline-none focus:ring-2 focus:ring-offset-0",
    "focus:ring-Action-Buttons-Primary-Accent-Background-Hover",
  ].join(" "),
  Secondary: [
    "bg-Action-Buttons-Secondary-Background-Default",
    "text-action-buttons-secondary-content-default-pressed-hover",
    "shadow-SecondaryButton",
    "hover:bg-Action-Buttons-Secondary-Background-Hover",
    "active:bg-Action-Buttons-Secondary-Background-Pressed",
    "focus:outline-none focus:ring-2 focus:ring-offset-0",
    "focus:ring-action-buttons-secondary-border",
  ].join(" "),
};

const Button = ({
  label = "",
  leadingIcon = null,
  trailingIcon = null,
  leadingBadge = null,
  trailingBadge = null,
  size = "L",
  variant = "Primary-Default",
  className = "",
  additionalStyle = "",
  type,
  ...rest
}) => {
  const s = SIZE_STYLES[size] || SIZE_STYLES.L;
  const v = VARIANT_STYLES[variant] || VARIANT_STYLES["Primary-Default"];
  const iconSize = s.icon;

  return (
    <button
      type={type || "button"}
      className={[
        "inline-flex items-center justify-center rounded-full font-semibold text-center cursor-pointer",
        s.text,
        s.padding,
        s.gap,
        v,
        "backdrop-blur-lg",
        className,
        additionalStyle,
      ].join(" ")}
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
};

export default Button;
