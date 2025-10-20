"use client";
import React, { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

const Chevron = ({ open }) => (
  <Image
    src="/icons/arrow-down.svg"
    height={24}
    width={24}
    className={`h-6 w-6 transition-transform ${open ? "rotate-180" : ""}`}
    alt="arrow down"
  />
);

const XIcon = () => (
  <Image
    src="/icons/cancel.svg"
    height={24}
    width={24}
    className={`h-4 w-4 transition-transform`}
    alt="arrow down"
  />
);

function classNames(...xs) {
  return xs.filter(Boolean).join(" ");
}

/**
 * BaseSelect
 * Props:
 * - options: [{ value, label, disabled?, icon? }]
 * - value: single value OR array (when multiple=true)
 * - onChange: fn(nextValue)
 * - label?: string (field label above)
 * - placeholder?: string (default "Select...")
 * - multiple?: boolean
 * - searchable?: boolean
 * - disabled?: boolean
 * - clearable?: boolean
 * - maxMenuHeight?: number (px)
 * - className?: string (extra classes for the control)
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
}) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);
  const controlRef = useRef(null);
  const menuRef = useRef(null);
  const inputRef = useRef(null);

  const byValue = useMemo(
    () => new Map(options.map((o) => [o.value, o])),
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

  const controlBase =
    "w-full px-3 py-2 md:py-3 md:px-4 rounded-[0.75rem] bg-Overlays-Black-9 border border-Badge-Gray-Subtle-Background text-Content-Primary " +
    "placeholder:text-[#9DA1A8] flex items-center justify-between gap-1.5 md:gap-2 lg:gap-3";

  return (
    <div className="flex flex-col gap-2">
      {label && (
        <p className="text-Content-Primary font-semibold text-xs leading-4 lg:text-sm lg:leading-5">
          {label}
        </p>
      )}

      {/* Control */}
      <button
        type="button"
        ref={controlRef}
        className={classNames(
          controlBase,
          disabled
            ? "opacity-50 cursor-not-allowed"
            : "cursor-pointer hover:border-white/20",
          className
        )}
        onClick={() => !disabled && setOpen((s) => !s)}
        onKeyDown={onKeyDown}
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        {/* Left: value/chips/placeholder */}
        <div className="min-w-0 flex-1 flex items-center gap-2">
          {multiple ? (
            selectedValues.length ? (
              <div className="flex flex-wrap items-center gap-1.5">
                {selectedValues.map((v) => {
                  const o = byValue.get(v);
                  if (!o) return null;
                  return (
                    <span
                      key={v}
                      className="group inline-flex items-center gap-1 rounded-xl border border-white/10 bg-white/5 px-2 py-1 text-xs text-[#E5E7EB]"
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
                        <XIcon />
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
          {clearable && selectedValues.length > 0 && !disabled && (
            <button
              type="button"
              onClick={clearSelection}
              className="rounded-md p-1 hover:bg-white/5"
              aria-label="Clear selection"
            >
              <XIcon />
            </button>
          )}
          <Chevron open={open} />
        </div>
      </button>

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
            <div className="absolute left-0 right-0 mt-2 overflow-hidden rounded-2xl border border-white/10 bg-[#0F1113] shadow-xl">
              {/* Search */}
              {searchable && (
                <div className="p-2 border-b border-white/10">
                  <div className="flex items-center gap-2 rounded-xl bg-white/5 px-3 py-2">
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
                      className="w-full bg-transparent text-sm outline-none placeholder:text-[#9DA1A8]"
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
                  <div className="px-3 py-3 text-sm text-[#9DA1A8]">
                    No results
                  </div>
                ) : (
                  filtered.map((opt, i) => {
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
                          "mx-1 flex cursor-pointer items-center gap-2 rounded-xl px-3 py-2 text-sm",
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
                              "grid h-4 w-4 place-items-center rounded border",
                              selected
                                ? "border-white/60 bg-white/20"
                                : "border-white/20"
                            )}
                          >
                            {selected && (
                              <svg
                                className="h-3 w-3"
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
                          <span className="h-4 w-4" />
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

/** Public wrappers for clarity */
export function Select(props) {
  return <BaseSelect {...props} multiple={false} />;
}
export function MultiSelect(props) {
  return <BaseSelect {...props} multiple />;
}
