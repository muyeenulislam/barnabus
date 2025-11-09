import React, { useState, useRef, useEffect, useId } from "react";
import { motion, LayoutGroup } from "framer-motion";
import Image from "next/image";
import BottomSheet from "./bottom-sheet";
import { useIsMobile } from "@/utils/useismobile";

function BaseTabs({
  tabItems = [],
  currentTab,
  setTab,
  additionalStyle = "",
  variant = "primary",
  tabItemFullWidth = false,
  groupId,
  showBottomSheet = false,
}) {
  const containerRef = useRef(null);
  const autoId = useId();
  const isMobile = useIsMobile();

  const scopeId = groupId ?? autoId;
  const pillLayoutId = `tabPill-${scopeId}`;
  const isPrimary = variant === "primary";

  const [drawerOpen, setDrawerOpen] = useState(false);

  const selectedTabLabel = tabItems.find(
    (item) => item.value === currentTab
  )?.label;

  return (
    <>
      <LayoutGroup>
        <div
          ref={containerRef}
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
            className={`w-full ${
              isMobile && showBottomSheet ? "hidden" : "block"
            } ${
              variant === "primary" && "p-0.5 lg:p-1"
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
                          } text-center cursor-pointer font-semibold rounded-full text-xs leading-4 px-5 py-3 lg:text-base lg:leading-6 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40 ${
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

          {/* Show the current tab's label and arrow button if overflow */}
          {isMobile && showBottomSheet && (
            <div className="flex flex-row justify-between items-center w-full p-0.5 lg:p-1">
              <motion.button
                type="button"
                role="tab"
                aria-selected={selectedTabLabel}
                onClick={() => setTab(currentTab)}
                className={
                  isPrimary
                    ? `relative ${
                        tabItemFullWidth ? "w-full" : "w-max"
                      } text-center cursor-pointer font-semibold rounded-full text-xs leading-4 px-5 py-3 lg:text-base lg:leading-6 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40 ${
                        selectedTabLabel
                          ? "text-backgroundDarkGray"
                          : "text-action-buttons-tertiary-content-default-hover"
                      }`
                    : `relative shrink-0 text-center cursor-pointer rounded-t-2xl text-xs leading-4 px-6 py-3 lg:text-base lg:leading-6 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40 ${
                        selectedTabLabel
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
                {selectedTabLabel && (
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
                  animate={{ opacity: selectedTabLabel ? 1 : 0.85 }}
                >
                  {selectedTabLabel}
                </motion.span>
              </motion.button>
              <motion.button
                className="flex justify-center items-center text-center p-2"
                onClick={() => setDrawerOpen(true)}
              >
                <Image
                  src="/icons/circle-arrow-down.svg"
                  alt="more tabs"
                  height={24}
                  width={24}
                  className="h-5 w-5"
                />
              </motion.button>
            </div>
          )}
        </div>
      </LayoutGroup>

      <BottomSheet
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        title="Select"
        className="md:hidden"
        contentClassName="px-[1.5rem] py-[1.25rem] bg-Surface2 flex flex-col gap-4"
      >
        {tabItems.map((item, idx) => (
          <motion.button
            key={idx}
            onClick={() => setTab(item.value)}
            className={`block w-full text-center px-4 py-5 rounded-full text-action-buttons-tertiary-content-default-hover font-semibold text-sm hover:bg-Action-Buttons-Tertiary-Background-Hover ${
              currentTab === item.value
                ? "bg-Action-Buttons-Tertiary-Background-Hover"
                : ""
            }`}
          >
            {item.label}
          </motion.button>
        ))}
      </BottomSheet>
    </>
  );
}

export const Tab = (props) => <BaseTabs {...props} variant="primary" />;
export const TabSecondary = (props) => (
  <BaseTabs {...props} variant="secondary" />
);
