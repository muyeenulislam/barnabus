"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

const Chevron = ({ open, className = "h-6 w-6" }) => (
  <Image
    src="/icons/arrow-down.svg"
    height={24}
    width={24}
    className={`${className} transition-transform ${open ? "rotate-180" : ""}`}
    alt="arrow down"
  />
);

const XIcon = ({ className = "h-4 w-4" }) => (
  <Image
    src="/icons/cancel.svg"
    height={24}
    width={24}
    className={`${className} transition-transform`}
    alt="close"
  />
);

function classNames(...xs) {
  return xs.filter(Boolean).join(" ");
}

// Size styles
const SIZE_STYLES = {
  S: {
    control: "px-2 py-1.5 rounded-[0.625rem] text-xs gap-1",
    innerGap: "gap-1",
    clearBtnPad: "p-0.5",
    chevron: "h-4 w-4",
    xIcon: "h-3.5 w-3.5",
    chipsWrap: "gap-1",
    chip: "px-1.5 py-0.5 text-[0.75rem] gap-1",
    searchWrap: "px-2 py-1.5",
    searchInput: "text-xs",
    option: "px-2 py-1.5 text-xs",
    checkbox: "h-3.5 w-3.5",
    checkmark: "h-3 w-3",
    labelText: "text-[0.75rem] leading-4",
    labelPb: "pb-1.5",
  },
  M: {
    control: "px-3 py-2 rounded-[0.75rem] text-sm gap-2",
    innerGap: "gap-2",
    clearBtnPad: "p-1",
    chevron: "h-6 w-6",
    xIcon: "h-4 w-4",
    chipsWrap: "gap-1.5",
    chip: "px-2 py-1 text-xs gap-1",
    searchWrap: "px-3 py-2",
    searchInput: "text-sm",
    option: "px-3 py-2 text-sm",
    checkbox: "h-4 w-4",
    checkmark: "h-3 w-3",
    labelText: "text-xs lg:text-sm leading-4 lg:leading-5",
    labelPb: "pb-2",
  },
  L: {
    control: "px-[1.25rem] py-[0.95rem] rounded-[0.75rem] text-[1.25rem] gap-3",
    innerGap: "gap-3",
    clearBtnPad: "p-1.5",
    chevron: "h-7 w-7",
    xIcon: "h-4 w-4",
    chipsWrap: "gap-2",
    chip: "px-2.5 py-1.5 text-sm gap-1.5",
    searchWrap: "px-4 py-3",
    searchInput: "text-base",
    option: "px-4 py-3 text-base",
    checkbox: "h-5 w-5",
    checkmark: "h-3.5 w-3.5",
    labelText: "font-semibold text-base leading-6 lg:text-lg lg:leading-6.5",
    labelPb: "pb-3",
  },
};

/**
 * BaseSelect
 * Props:
 * - options: [{ value, label, disabled?, icon? }]
 * - value: single value OR array (when multiple=true)
 * - onChange: fn(nextValue)
 * - label?: string (field label above)
 * - placeholder?: string (default "Select value")
 * - multiple?: boolean
 * - searchable?: boolean
 * - disabled?: boolean
 * - clearable?: boolean
 * - maxMenuHeight?: number (px)
 * - className?: string (extra classes for the control)
 * - size?: "S" | "M" | "L"  (default "M")
 */
export function BaseSelect({
  options = [],
  value,
  onChange,
  label,
  placeholder = "Select value",
  multiple = false,
  searchable = true,
  disabled = false,
  clearable = true,
  maxMenuHeight = 264,
  className = "",
  size = "M",
  error,
  ...rest
}) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);
  const controlRef = useRef(null);
  const menuRef = useRef(null);
  const inputRef = useRef(null);

  const S = SIZE_STYLES[size] ?? SIZE_STYLES.M;

  const byValue = useMemo(
    () => new Map(options?.map((o) => [o.value, o])),
    [options]
  );

  const selectedValues = useMemo(() => {
    if (multiple) return Array.isArray(value) ? value : [];
    return value == null ? [] : [value];
  }, [value, multiple]);

  const selectedSet = useMemo(() => new Set(selectedValues), [selectedValues]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return options;
    return options.filter((o) => o.label.toLowerCase().includes(q));
  }, [options, query]);

  // Close on outside click
  useEffect(() => {
    function onDoc(e) {
      if (
        !controlRef.current?.contains(e.target) &&
        !menuRef.current?.contains(e.target)
      ) {
        setOpen(false);
        setQuery("");
      }
    }
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, []);

  // Focus search when opened
  useEffect(() => {
    if (open && searchable) {
      setTimeout(() => inputRef.current?.focus(), 15);
    }
  }, [open, searchable]);

  // Keyboard navigation
  function onKeyDown(e) {
    if (disabled) return;
    if (["Enter", " "].includes(e.key)) {
      e.preventDefault();
      if (!open) {
        setOpen(true);
      } else {
        const opt = filtered[activeIndex];
        if (opt && !opt.disabled) selectOption(opt.value);
      }
    } else if (e.key === "Escape") {
      if (open) {
        e.preventDefault();
        setOpen(false);
        setQuery("");
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (!open) setOpen(true);
      setActiveIndex((i) => Math.min(i + 1, filtered.length - 1));
      scrollActiveIntoView();
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (!open) setOpen(true);
      setActiveIndex((i) => Math.max(i - 1, 0));
      scrollActiveIntoView();
    } else if (e.key === "Tab") {
      setOpen(false);
      setQuery("");
    }
  }

  function scrollActiveIntoView() {
    requestAnimationFrame(() => {
      const el = menuRef.current?.querySelector('[data-active="true"]');
      el?.scrollIntoView({ block: "nearest" });
    });
  }

  function selectOption(val) {
    if (!multiple) {
      onChange?.(val);
      setOpen(false);
      setQuery("");
      return;
    }
    const next = new Set(selectedSet);
    if (next.has(val)) next.delete(val);
    else next.add(val);
    onChange?.(Array.from(next));
  }

  function clearSelection(e) {
    e?.stopPropagation?.();
    if (disabled) return;
    onChange?.(multiple ? [] : null);
    setQuery("");
  }

  const controlSkeleton =
    "w-full bg-backgroundDarkGray border border-Border-Secondary text-Content-Primary focus:border-Content-Brand-Accent hover:border-Content-Tertiary placeholder:text-[#9DA1A8] flex items-center justify-between transition-all";

  return (
    <div className="flex flex-col">
      {label && (
        <p
          className={classNames(
            "text-Content-Primary font-semibold",
            S.labelText,
            S.labelPb
          )}
        >
          {label}
        </p>
      )}

      {/* Control */}
      <button
        type="button"
        ref={controlRef}
        className={classNames(
          controlSkeleton,
          S.control,
          disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer",
          className
        )}
        onClick={() => !disabled && setOpen((s) => !s)}
        onKeyDown={onKeyDown}
        aria-haspopup="listbox"
        aria-expanded={open}
        {...rest}
      >
        {/* Left: value/chips/placeholder */}
        <div
          className={classNames("min-w-0 flex-1 flex items-center", S.innerGap)}
        >
          {multiple ? (
            selectedValues.length ? (
              <div
                className={classNames(
                  "flex flex-wrap items-center",
                  S.chipsWrap
                )}
              >
                {selectedValues?.map((v) => {
                  const o = byValue.get(v);
                  if (!o) return null;
                  return (
                    <span
                      key={v}
                      className={classNames(
                        "group inline-flex items-center rounded-xl border border-white/10 bg-white/5",
                        S.chip
                      )}
                      onClick={(e) => e.stopPropagation()}
                    >
                      {o.icon}
                      {o.label}
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          selectOption(v);
                        }}
                        className="opacity-70 hover:opacity-100"
                        aria-label={`Remove ${o.label}`}
                      >
                        <XIcon className={S.xIcon} />
                      </button>
                    </span>
                  );
                })}
              </div>
            ) : (
              <span className="truncate text-[#9DA1A8]">{placeholder}</span>
            )
          ) : selectedValues.length ? (
            <span className="truncate">
              {byValue.get(selectedValues[0])?.label}
            </span>
          ) : (
            <span className="truncate text-[#9DA1A8]">{placeholder}</span>
          )}
        </div>

        {/* Right: clear + chevron */}
        <div className="flex items-center gap-2">
          {selectedValues.length > 0 ? (
            clearable &&
            !disabled && (
              <div
                type="button"
                onClick={clearSelection}
                className={classNames(
                  "rounded-md hover:bg-white/5",
                  S.clearBtnPad
                )}
                aria-label="Clear selection"
              >
                <XIcon className={S.xIcon} />
              </div>
            )
          ) : (
            <Chevron open={open} className={S.chevron} />
          )}
        </div>
      </button>
      {error && <p className="text-red-500 pt-2">{error}</p>}
      {/* Dropdown */}
      <AnimatePresence>
        {open && (
          <motion.div
            ref={menuRef}
            initial={{ opacity: 0, y: 8, scale: 0.98 }}
            animate={{ opacity: 1, y: 6, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.98 }}
            transition={{
              type: "spring",
              stiffness: 500,
              damping: 40,
              mass: 0.6,
            }}
            className="relative z-[60]"
          >
            <div className="absolute left-0 right-0 overflow-hidden rounded-2xl border border-white/10 bg-[#0F1113] shadow-xl">
              {/* Search */}
              {searchable && (
                <div
                  className={classNames(
                    "border-b border-white/10",
                    S.searchWrap
                  )}
                >
                  <div
                    className={classNames(
                      "flex items-center gap-2 rounded-xl bg-white/5",
                      S.searchWrap
                    )}
                  >
                    <svg
                      className="h-4 w-4 opacity-70"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <circle
                        cx="11"
                        cy="11"
                        r="7"
                        stroke="currentColor"
                        strokeWidth="1.8"
                      />
                      <path
                        d="M20 20l-3.5-3.5"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                      />
                    </svg>
                    <input
                      ref={inputRef}
                      value={query}
                      onChange={(e) => {
                        setQuery(e.target.value);
                        setActiveIndex(0);
                      }}
                      placeholder="Search…"
                      className={classNames(
                        "w-full bg-transparent outline-none placeholder:text-[#9DA1A8]",
                        S.searchInput
                      )}
                    />
                  </div>
                </div>
              )}

              {/* Options */}
              <div
                role="listbox"
                aria-multiselectable={multiple || undefined}
                style={{ maxHeight: maxMenuHeight }}
                className="no-scrollbar overflow-y-auto py-1"
              >
                {filtered.length === 0 ? (
                  <div
                    className={classNames(
                      "px-3 py-3 text-[#9DA1A8]",
                      S.searchInput
                    )}
                  >
                    No results
                  </div>
                ) : (
                  filtered?.map((opt, i) => {
                    const selected = selectedSet.has(opt.value);
                    const active = i === activeIndex;
                    return (
                      <div
                        key={opt.value}
                        role="option"
                        aria-selected={selected}
                        data-active={active || undefined}
                        onMouseEnter={() => setActiveIndex(i)}
                        onMouseDown={(e) => e.preventDefault()} // keep focus
                        onClick={() => !opt.disabled && selectOption(opt.value)}
                        className={classNames(
                          "mx-1 flex cursor-pointer items-center gap-2 rounded-xl",
                          S.option,
                          opt.disabled
                            ? "opacity-40 cursor-not-allowed"
                            : active
                            ? "bg-white/5"
                            : "hover:bg-white/5",
                          selected ? "text-white" : "text-[#E5E7EB]"
                        )}
                      >
                        {multiple ? (
                          <span
                            className={classNames(
                              "grid place-items-center rounded border",
                              S.checkbox,
                              selected
                                ? "border-white/60 bg-white/20"
                                : "border-white/20"
                            )}
                          >
                            {selected && (
                              <svg
                                className={S.checkmark}
                                viewBox="0 0 24 24"
                                fill="none"
                              >
                                <path
                                  d="M5 13l4 4L19 7"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            )}
                          </span>
                        ) : (
                          <span
                            className={S.checkbox.replace(
                              /h-\S+ w-\S+/,
                              "h-4 w-4"
                            )}
                          />
                        )}

                        {opt.icon && (
                          <span className="shrink-0">{opt.icon}</span>
                        )}
                        <span className="min-w-0 flex-1 truncate">
                          {opt.label}
                        </span>

                        {!multiple && selected && (
                          <svg
                            className="h-4 w-4"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <path
                              d="M5 13l4 4L19 7"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        )}
                      </div>
                    );
                  })
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/** Public wrappers */
export function Select(props) {
  return <BaseSelect {...props} multiple={false} />;
}
export function MultiSelect(props) {
  return <BaseSelect {...props} multiple />;
}
