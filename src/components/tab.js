import React from "react";
import { motion, LayoutGroup } from "framer-motion";

const Tab = ({ tabItems = [], currentTab, setTab, additionalStyle = "" }) => {
  return (
    <LayoutGroup id="tabs" initial={false}>
      <div
        role="tablist"
        className={`flex self-stretch p-0.5 lg:p-1 justify-center items-center gap-0.5 lg:gap-1 rounded-full bg-Overlays-Black-9 backdrop-blur-lg ${additionalStyle}`}
        style={{
          boxShadow:
            "0 1px 0 0 rgba(255, 255, 255, 0.04) inset, 0 0 0 1px rgba(255, 255, 255, 0.08) inset",
        }}
      >
        {tabItems?.map((item, index) => {
          const selected = currentTab === item?.value;
          return (
            <motion.button
              key={item?.value ?? index}
              type="button"
              role="tab"
              aria-selected={selected}
              onClick={() => setTab(item?.value)}
              className={`relative w-full text-center cursor-pointer font-semibold rounded-full text-xs leading-4 px-5 py-3 lg:text-base lg:leading-6 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40 ${
                selected
                  ? "text-backgroundDarkGray"
                  : "text-action-buttons-tertiary-content-default-hover"
              }`}
              layout
              whileTap={{ scale: 0.98 }}
              transition={{
                type: "spring",
                stiffness: 500,
                damping: 42,
                mass: 0.6,
              }}
            >
              {selected && (
                <motion.span
                  layoutId="tabPill"
                  className="absolute inset-0 rounded-full bg-Action-Buttons-Primary-Default-Background-Default backdrop-blur-lg"
                  style={{
                    boxShadow:
                      "0 2px 0 0 var(--black-white-white-5, #FFF) inset, 0 0 0 2px rgba(255, 255, 255, 0.40) inset",
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 500,
                    damping: 40,
                    mass: 0.6,
                  }}
                />
              )}
              <motion.span
                className="relative z-[1]"
                animate={{ opacity: selected ? 1 : 0.85 }}
              >
                {item?.label}
              </motion.span>
            </motion.button>
          );
        })}
      </div>
    </LayoutGroup>
  );
};

export default Tab;
