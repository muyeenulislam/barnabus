import React, { useId } from "react";
import { motion, LayoutGroup } from "framer-motion";

function BaseTabs({
  tabItems = [],
  currentTab,
  setTab,
  additionalStyle = "",
  variant = "primary",
  tabItemFullWidth = false,
  groupId,
}) {
  const autoId = useId();
  const scopeId = groupId ?? autoId;
  const pillLayoutId = `tabPill-${scopeId}`;
  const isPrimary = variant === "primary";

  return (
    <LayoutGroup>
      <div
        className={
          isPrimary
            ? `relative w-full rounded-full bg-Overlays-Black-9 backdrop-blur-lg overflow-hidden ${additionalStyle}`
            : `relative w-full border-b border-b-Content-Tertiary overflow-hidden ${additionalStyle}`
        }
        style={
          isPrimary
            ? {
                boxShadow:
                  "0 1px 0 0 rgba(255, 255, 255, 0.04) inset, 0 0 0 1px rgba(255, 255, 255, 0.08) inset",
              }
            : undefined
        }
      >
        <div
          className={`w-full overflow-x-auto lg:overflow-visible no-scrollbar ${
            isPrimary ? "p-0.5 lg:p-1" : "p-0"
          }  overscroll-x-contain touch-pan-x`}
        >
          <div
            role="tablist"
            aria-orientation="horizontal"
            className={
              isPrimary
                ? `flex ${
                    tabItemFullWidth ? "w-full" : "w-max"
                  } flex-nowrap items-center gap-0.5 lg:gap-1 lg:mx-auto`
                : "flex w-full lg:w-max flex-nowrap items-center"
            }
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
                  className={
                    isPrimary
                      ? `relative ${
                          tabItemFullWidth ? "w-full" : "w-max"
                        } shrink-0 text-center cursor-pointer font-semibold rounded-full text-xs leading-4 px-5 py-3 lg:text-base lg:leading-6 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40 ${
                          selected
                            ? "text-backgroundDarkGray"
                            : "text-action-buttons-tertiary-content-default-hover"
                        }`
                      : `relative shrink-0 text-center cursor-pointer rounded-t-2xl text-xs leading-4 px-6 py-3 lg:text-base lg:leading-6 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40 ${
                          selected
                            ? "text-Content-Primary font-semibold"
                            : "text-Content-Secondary"
                        }`
                  }
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
                      layoutId={pillLayoutId}
                      className={
                        isPrimary
                          ? "absolute inset-0 rounded-full bg-Action-Buttons-Primary-Default-Background-Default backdrop-blur-lg"
                          : "absolute inset-0 rounded-t-2xl bg-Action-Buttons-Secondary-Background-Default backdrop-blur-lg"
                      }
                      style={
                        isPrimary
                          ? {
                              boxShadow:
                                "0 2px 0 0 var(--black-white-white-5, #FFF) inset, 0 0 0 2px rgba(255, 255, 255, 0.40) inset",
                            }
                          : undefined
                      }
                      transition={{
                        type: "spring",
                        stiffness: 500,
                        damping: 40,
                        mass: 0.6,
                      }}
                    />
                  )}
                  <motion.span
                    className="relative z-[1] whitespace-nowrap"
                    animate={{ opacity: selected ? 1 : 0.85 }}
                  >
                    {item?.label}
                  </motion.span>
                </motion.button>
              );
            })}
          </div>
        </div>
      </div>
    </LayoutGroup>
  );
}

export const Tab = (props) => <BaseTabs {...props} variant="primary" />;
export const TabSecondary = (props) => (
  <BaseTabs {...props} variant="secondary" />
);
