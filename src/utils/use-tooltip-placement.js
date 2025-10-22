"use client";

import { useEffect, useState } from "react";

const useTooltipPlacement = () => {
  const [placement, setPlacement] = useState("right");

  useEffect(() => {
    if (typeof window === "undefined") return;

    const mqLg = window.matchMedia("(min-width: 1024px)");
    const mqMd = window.matchMedia("(min-width: 768px)");

    const compute = () => {
      if (mqLg.matches) return "top";
      if (mqMd.matches) return "left";
      return "right";
    };

    const update = () => setPlacement(compute());
    update();

    if (
      typeof mqLg.addEventListener === "function" &&
      typeof mqMd.addEventListener === "function"
    ) {
      mqLg.addEventListener("change", update);
      mqMd.addEventListener("change", update);
      return () => {
        mqLg.removeEventListener("change", update);
        mqMd.removeEventListener("change", update);
      };
    }

    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return placement;
};

export default useTooltipPlacement;
