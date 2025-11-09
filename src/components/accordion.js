"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function Accordion({
  items = [],
  defaultOpenIndex = 0,
  allowToggle = true,
  className = "",
  itemClassName = "",
  ChevronIcon,
}) {
  const [openIndex, setOpenIndex] = useState(defaultOpenIndex);

  const DefaultChevron = ({ open = false }) => (
    <svg
      className={`h-[1.5rem] w-[1.5rem] transition-transform duration-300 ${
        open ? "rotate-180" : ""
      }`}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M18 9.00005C18 9.00005 13.5811 15 12 15C10.4188 15 6 9 6 9"
        stroke={open ? "#3BF5FF" : "#B7B8B9"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  const Chevron = ChevronIcon || DefaultChevron;

  return (
    <div className={`w-full ${className}`}>
      {items.map((item, index) => {
        const isOpen = index === openIndex;
        const panelId = `acc-panel-${index}`;
        const btnId = `acc-btn-${index}`;

        return (
          <div
            key={index}
            className={`${
              index !== 0 ? "border-t border-white/10" : ""
            } ${itemClassName}`}
          >
            <button
              id={btnId}
              aria-controls={panelId}
              aria-expanded={isOpen}
              onClick={() => setOpenIndex(isOpen && allowToggle ? -1 : index)}
              className={`w-full flex items-start justify-between gap-4 pb-5 ${
                index !== 0 ? "pt-5" : ""
              } text-left group`}
            >
              <div className="flex flex-col">
                <h4
                  className={`text-lg leading-6.5 md:text-xl lg:text-2xl md:leading-7 lg:leading-8 font-semibold ${
                    isOpen
                      ? "text-Content-Brand-Accent"
                      : "text-Content-Secondary"
                  }`}
                >
                  {item.title}
                </h4>

                {item.subtitle && (
                  <span
                    className={`text-[#9DA1A8] text-base leading-6 md:text-base
                      transition-all duration-300 ease-out motion-reduce:transition-none
                      ${
                        isOpen
                          ? "opacity-100 h-max translate-y-0"
                          : "opacity-0 h-0 -translate-y-1"
                      }
                    `}
                  >
                    {item.subtitle}
                  </span>
                )}
              </div>

              <span className="mt-1 text-Content-Secondary">
                <Chevron open={isOpen} />
              </span>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={panelId}
                  role="region"
                  aria-labelledby={btnId}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
                  className="overflow-hidden"
                >
                  <motion.div
                    initial={{ opacity: 0, y: -4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -4 }}
                    transition={{ duration: 0.25 }}
                  >
                    {typeof item.content === "function"
                      ? item.content(item, index)
                      : item.content}
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
