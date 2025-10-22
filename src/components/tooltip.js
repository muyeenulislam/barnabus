"use client";

import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

/** ---------- utils ---------- */

const parsePlacement = (p = "top") => {
  const s = String(p).toLowerCase().replace(/\s+/g, "");
  const map = {
    top: ["top", "center"],
    "top-left": ["top", "start"],
    topleft: ["top", "start"],
    "top-right": ["top", "end"],
    topright: ["top", "end"],

    bottom: ["bottom", "center"],
    "bottom-left": ["bottom", "start"],
    bottomleft: ["bottom", "start"],
    "bottom-right": ["bottom", "end"],
    bottomright: ["bottom", "end"],

    left: ["left", "center"],
    "left-top": ["left", "start"],
    lefttop: ["left", "start"],
    "left-bottom": ["left", "end"],
    leftbottom: ["left", "end"],

    right: ["right", "center"],
    "right-top": ["right", "start"],
    righttop: ["right", "start"],
    "right-bottom": ["right", "end"],
    rightbottom: ["right", "end"],
  };
  return map[s] ?? map.top;
};

const getVariants = (placement) => {
  const [side] = parsePlacement(placement);
  const dir =
    side === "top"
      ? { y: 6, x: 0 }
      : side === "bottom"
      ? { y: -6, x: 0 }
      : side === "left"
      ? { x: 6, y: 0 }
      : { x: -6, y: 0 }; // right

  return {
    initial: { opacity: 0, scale: 0.98, ...dir },
    animate: {
      opacity: 1,
      scale: 1,
      x: 0,
      y: 0,
      transition: { type: "spring", stiffness: 420, damping: 28, mass: 0.6 },
    },
    exit: { opacity: 0, scale: 0.98, ...dir, transition: { duration: 0.12 } },
  };
};

const placementClasses = (placement) => {
  const [side, align] = parsePlacement(placement);

  if (side === "top") {
    if (align === "start") return "bottom-full left-0";
    if (align === "end") return "bottom-full right-0";
    return "bottom-full left-1/2 -translate-x-1/2";
  }
  if (side === "bottom") {
    if (align === "start") return "top-full left-0";
    if (align === "end") return "top-full right-0";
    return "top-full left-1/2 -translate-x-1/2";
  }
  if (side === "left") {
    if (align === "start") return "right-full top-0";
    if (align === "end") return "right-full bottom-0";
    return "right-full top-1/2 -translate-y-1/2";
  }
  // right
  if (align === "start") return "left-full top-0";
  if (align === "end") return "left-full bottom-0";
  return "left-full top-1/2 -translate-y-1/2";
};

const marginFromSide = (side, offset) => {
  switch (side) {
    case "top":
      return { marginBottom: offset };
    case "bottom":
      return { marginTop: offset };
    case "left":
      return { marginRight: offset };
    case "right":
    default:
      return { marginLeft: offset };
  }
};

const arrowClasses = (side, align) => {
  // positions the diamond on an edge and aligns along that edge
  if (side === "top") {
    const along =
      align === "start"
        ? "left-3"
        : align === "end"
        ? "right-3"
        : "left-1/2 -translate-x-1/2";
    return `top-0 -translate-y-1/2 ${along}`;
  }
  if (side === "bottom") {
    const along =
      align === "start"
        ? "left-3"
        : align === "end"
        ? "right-3"
        : "left-1/2 -translate-x-1/2";
    return `bottom-0 translate-y-1/2 ${along}`;
  }
  if (side === "left") {
    const along =
      align === "start"
        ? "top-3"
        : align === "end"
        ? "bottom-3"
        : "top-1/2 -translate-y-1/2";
    return `left-0 -translate-x-1/2 ${along}`;
  }
  // right
  const along =
    align === "start"
      ? "top-3"
      : align === "end"
      ? "bottom-3"
      : "top-1/2 -translate-y-1/2";
  return `right-0 translate-x-1/2 ${along}`;
};

/** ---------- component ---------- */

export default function Tooltip({
  trigger = "hover", // "hover" | "click"
  placement = "top", // extended placements supported
  content,
  children,
  className = "",
  offset = 10,
  open: controlledOpen,
  onOpenChange,

  // arrow options
  withArrow = true,
  arrowSide, // "top" | "bottom" | "left" | "right" (default: same as placement's side)
  arrowAlign, // "center" | "start" | "end" (default: same as placement's align)
  arrowSize = 8,
  arrowClassName = "",
}) {
  const [uncontrolledOpen, setUncontrolledOpen] = useState(false);
  const open = controlledOpen ?? uncontrolledOpen;

  const [side, align] = parsePlacement(placement);
  const aSide = arrowSide || side; // default: same as placement (per request)
  const aAlign = arrowAlign || align;

  const anchorRef = useRef(null);
  const panelRef = useRef(null);
  const hoverTimer = useRef(null);

  const setOpen = (val) => {
    if (typeof onOpenChange === "function") onOpenChange(val);
    else setUncontrolledOpen(val);
  };

  const clearHoverTimer = () => {
    if (hoverTimer.current) {
      window.clearTimeout(hoverTimer.current);
      hoverTimer.current = null;
    }
  };

  useEffect(() => {
    if (!open) return;
    const onDocPointer = (e) => {
      const a = anchorRef.current;
      const p = panelRef.current;
      if (!a || !p) return;
      if (a.contains(e.target) || p.contains(e.target)) return;
      setOpen(false);
    };
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onDocPointer, true);
    document.addEventListener("keydown", onKey, true);
    return () => {
      document.removeEventListener("mousedown", onDocPointer, true);
      document.removeEventListener("keydown", onKey, true);
    };
  }, [open]);

  const handleMouseEnter = () => {
    if (trigger !== "hover") return;
    clearHoverTimer();
    setOpen(true);
  };
  const handleMouseLeave = () => {
    if (trigger !== "hover") return;
    clearHoverTimer();
    hoverTimer.current = window.setTimeout(() => setOpen(false), 120);
  };
  const handleClick = () => {
    if (trigger !== "click") return;
    setOpen(!open);
  };

  const marginStyle = marginFromSide(side, offset);

  return (
    <span
      ref={anchorRef}
      className="relative inline-flex"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      aria-haspopup="dialog"
      aria-expanded={open}
    >
      {children}

      <AnimatePresence>
        {open && (
          <motion.div
            ref={panelRef}
            role="tooltip"
            initial="initial"
            animate="animate"
            exit="exit"
            variants={getVariants(placement)}
            style={marginStyle}
            className={`pointer-events-auto absolute z-50 ${placementClasses(
              placement
            )}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            data-side={side}
            data-align={align}
          >
            {/* Panel */}
            <div
              className={[
                "relative w-max max-w-[20rem] md:max-w-[25rem] lg:max-w-[27.5rem]",
                "p-3 md:p-5 lg:p-6 rounded-2xl md:rounded-[1.25rem] lg:rounded-3xl",
                "bg-Surface0",
                "shadow-boxPrimary",
                className,
              ].join(" ")}
            >
              {withArrow && (
                <span
                  aria-hidden
                  className={[
                    "pointer-events-none absolute block rotate-45",
                    "bg-Surface0",
                    arrowClasses(aSide, aAlign),
                    arrowClassName,
                  ].join(" ")}
                  style={{
                    width: arrowSize,
                    height: arrowSize,
                  }}
                />
              )}
              {content}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </span>
  );
}
