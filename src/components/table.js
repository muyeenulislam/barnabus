"use client";

import React, { useMemo, useRef, useEffect, useState } from "react";

function cx(...xs) {
  return xs.filter(Boolean).join(" ");
}

function toPx(v) {
  if (v == null) return 0;
  if (typeof v === "number") return v;
  const m = /^(\d+(\.\d+)?)(px|rem)?$/i.exec(String(v).trim());
  if (!m) return 0;
  const num = parseFloat(m[1]);
  const unit = (m[3] || "px").toLowerCase();
  return unit === "rem" ? num * 16 : num;
}

/**
 * SmartTable
 * Props:
 * - columns: [
 *     { key, header, width?, minWidth?, fixed?: 'left'|'right'|true, headerClassName?, cellClassName?, render?(value,row), accessor?(row) }
 *   ]
 * - data: array of row objects
 * - rowKey?: string (default "id")
 * - className?: string
 * - striped?: boolean (default true)
 * - compact?: boolean (default false)
 * - edgeFade?: boolean (default true)
 * - edgeFadeWidthRem?: number (default 0.75)
 * - edgeFadeOpacity?: number (default 0.35)
 */
const DefaultTable = ({
  columns = [],
  data = [],
  rowKey = "id",
  className = "",
  striped = true,
  compact = false,
  edgeFade = true,
  edgeFadeWidthRem = 0.75,
  edgeFadeOpacity = 0.35,
}) => {
  const computed = useMemo(() => {
    const cols = columns.map((c) => {
      const widthPx = toPx(c.width) || toPx(c.minWidth) || 220;
      return {
        ...c,
        _widthPx: widthPx,
        _fixed: c.fixed === true ? "left" : c.fixed,
      };
    });

    let leftAcc = 0;
    const leftOffsets = {};
    cols.forEach((c) => {
      if (c._fixed === "left") {
        leftOffsets[c.key] = leftAcc;
        leftAcc += c._widthPx;
      }
    });

    let rightAcc = 0;
    const rightOffsets = {};
    [...cols].reverse().forEach((c) => {
      if (c._fixed === "right") {
        rightOffsets[c.key] = rightAcc;
        rightAcc += c._widthPx;
      }
    });

    const tableWidth = cols.reduce((s, c) => s + c._widthPx, 0);
    const lastLeftIdx = [...cols].reduce(
      (acc, c, i) => (c._fixed === "left" ? i : acc),
      -1
    );
    const firstRightIdx = cols.findIndex((c) => c._fixed === "right");

    return {
      cols,
      leftOffsets,
      rightOffsets,
      tableWidth,
      lastLeftIdx,
      firstRightIdx,
    };
  }, [columns]);

  const {
    cols,
    leftOffsets,
    rightOffsets,
    tableWidth,
    lastLeftIdx,
    firstRightIdx,
  } = computed;

  const padX = compact ? "px-3" : "px-4";
  const padYHead = compact ? "py-2.5" : "py-3";
  const padYCell = compact ? "py-3" : "py-4";

  // Fade config
  const fadeW = `${edgeFadeWidthRem}rem`;
  const rightFade = `linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,${edgeFadeOpacity}) 100%)`;
  const leftFade = `linear-gradient(to left, rgba(0,0,0,0) 0%, rgba(0,0,0,${edgeFadeOpacity}) 100%)`;

  // Overflow + scroll state
  const scrollRef = useRef(null);
  const [scrollState, setScrollState] = useState({
    overflow: false,
    atStart: true,
    atEnd: true,
  });

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const update = () => {
      const { scrollWidth, clientWidth, scrollLeft } = el;
      const overflow = scrollWidth > clientWidth + 1; // tolerance
      const atStart = scrollLeft <= 0;
      const atEnd = scrollLeft + clientWidth >= scrollWidth - 1;
      setScrollState({ overflow, atStart, atEnd });
    };

    update();
    el.addEventListener("scroll", update, { passive: true });

    const ro = new ResizeObserver(update);
    ro.observe(el);
    // observe table too in case columns change widths
    const tableEl = el.querySelector("table");
    if (tableEl) ro.observe(tableEl);

    window.addEventListener("resize", update);
    return () => {
      el.removeEventListener("scroll", update);
      ro.disconnect();
      window.removeEventListener("resize", update);
    };
  }, [tableWidth]);

  return (
    <div className={cx("relative w-full", className)}>
      <div
        ref={scrollRef}
        className="overflow-x-auto rounded-2xl md:rounded-3xl bg-Overlays-Black-9 shadow-table"
      >
        <table
          className="w-full border-collapse table-fixed"
          style={{ minWidth: tableWidth }}
        >
          <thead>
            <tr className="text-Content-Primary text-sm leading-5 md:text-base md:leading-6 lg:text-xl lg:leading-7 bg-Surface0">
              {cols.map((c, i) => {
                const isLeft = c._fixed === "left";
                const isRight = c._fixed === "right";
                const sticky = isLeft || isRight;
                const stickyStyle = sticky
                  ? isLeft
                    ? {
                        position: "sticky",
                        left: leftOffsets[c.key],
                        zIndex: 2,
                      }
                    : {
                        position: "sticky",
                        right: rightOffsets[c.key],
                        zIndex: 2,
                      }
                  : {};

                // borders removed
                const dividerClass = "";

                const showRightEdgeFade =
                  edgeFade &&
                  i === lastLeftIdx &&
                  scrollState.overflow &&
                  !scrollState.atEnd;

                const showLeftEdgeFade =
                  edgeFade &&
                  firstRightIdx !== -1 &&
                  i === firstRightIdx &&
                  scrollState.overflow &&
                  !scrollState.atStart;

                return (
                  <th
                    key={c.key}
                    className={cx(
                      "top-0 bg-Surface0 font-medium text-left",
                      padX,
                      padYHead,
                      "whitespace-nowrap",
                      sticky && "relative",
                      dividerClass,
                      c.headerClassName
                    )}
                    style={{
                      width: c._widthPx,
                      minWidth: c._widthPx,
                      ...stickyStyle,
                    }}
                  >
                    <div className="flex items-center gap-2">{c.header}</div>

                    {showRightEdgeFade && (
                      <span
                        aria-hidden
                        className="pointer-events-none absolute top-0 bottom-0"
                        style={{
                          right: `-${fadeW}`,
                          width: fadeW,
                          background: leftFade,
                          zIndex: 3,
                        }}
                      />
                    )}
                    {showLeftEdgeFade && (
                      <span
                        aria-hidden
                        className="pointer-events-none absolute top-0 bottom-0"
                        style={{
                          left: `-${fadeW}`,
                          width: fadeW,
                          background: rightFade,
                          zIndex: 3,
                        }}
                      />
                    )}
                  </th>
                );
              })}
            </tr>
          </thead>

          <tbody className="text-Content-Secondary">
            {data.map((row, rIdx) => (
              <tr
                key={row[rowKey] ?? rIdx}
                className={cx(
                  "border-t border-Surface0 bg-Surface1",
                  striped && rIdx % 2 === 1 ? "bg-Surface1/90" : ""
                )}
              >
                {cols.map((c, i) => {
                  const isLeft = c._fixed === "left";
                  const isRight = c._fixed === "right";
                  const sticky = isLeft || isRight;
                  const stickyStyle = sticky
                    ? isLeft
                      ? {
                          position: "sticky",
                          left: leftOffsets[c.key],
                          zIndex: 1,
                        }
                      : {
                          position: "sticky",
                          right: rightOffsets[c.key],
                          zIndex: 1,
                        }
                    : {};

                  // borders removed
                  const dividerClass = "";

                  const value =
                    typeof c.accessor === "function"
                      ? c.accessor(row)
                      : row[c.key];

                  const showRightEdgeFade =
                    edgeFade &&
                    i === lastLeftIdx &&
                    scrollState.overflow &&
                    !scrollState.atEnd;

                  const showLeftEdgeFade =
                    edgeFade &&
                    firstRightIdx !== -1 &&
                    i === firstRightIdx &&
                    scrollState.overflow &&
                    !scrollState.atStart;

                  return (
                    <td
                      key={c.key}
                      className={cx(
                        padX,
                        padYCell,
                        "align-top bg-Surface1",
                        "text-sm leading-5 lg:text-base lg:leading-6",
                        "whitespace-normal",
                        sticky && "relative",
                        dividerClass,
                        c.cellClassName
                      )}
                      style={{
                        width: c._widthPx,
                        minWidth: c._widthPx,
                        ...stickyStyle,
                      }}
                    >
                      {c.render ? c.render(value, row) : value}

                      {showRightEdgeFade && (
                        <span
                          aria-hidden
                          className="pointer-events-none absolute top-0 bottom-0"
                          style={{
                            right: `-${fadeW}`,
                            width: fadeW,
                            background: leftFade,
                            zIndex: 2,
                          }}
                        />
                      )}
                      {showLeftEdgeFade && (
                        <span
                          aria-hidden
                          className="pointer-events-none absolute top-0 bottom-0"
                          style={{
                            left: `-${fadeW}`,
                            width: fadeW,
                            background: rightFade,
                            zIndex: 2,
                          }}
                        />
                      )}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export { DefaultTable };
