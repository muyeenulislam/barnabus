"use client";

import React, { useMemo } from "react";

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
 * - compact?: boolean (default false) — tighter paddings
 *
 * Notes:
 * - For sticky columns, provide explicit widths (number = px or "rem"/"px" string).
 * - Any column with fixed:true is treated as fixed:'left'.
 */
const DefaultTable = ({
  columns = [],
  data = [],
  rowKey = "id",
  className = "",
  striped = true,
  compact = false,
}) => {
  const computed = useMemo(() => {
    const cols = columns.map((c) => {
      const widthPx = toPx(c.width) || toPx(c.minWidth) || 220;
      return {
        ...c,
        _widthPx: widthPx,
        _fixed: c.fixed === true ? "left" : c.fixed, // normalize
      };
    });

    // Left offsets
    let leftAcc = 0;
    const leftOffsets = {};
    cols.forEach((c) => {
      if (c._fixed === "left") {
        leftOffsets[c.key] = leftAcc;
        leftAcc += c._widthPx;
      }
    });

    // Right offsets
    let rightAcc = 0;
    const rightOffsets = {};
    [...cols].reverse().forEach((c) => {
      if (c._fixed === "right") {
        rightOffsets[c.key] = rightAcc;
        rightAcc += c._widthPx;
      }
    });

    const tableWidth = cols.reduce((s, c) => s + c._widthPx, 0);

    // For drawing dividers on the last fixed-left / first fixed-right columns
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

  return (
    <div className={cx("relative w-full", className)}>
      <div className="overflow-x-auto rounded-2xl md:rounded-3xl bg-Overlays-Black-9 shadow-table">
        <table
          className="w-full border-collapse table-fixed"
          style={{ minWidth: tableWidth }}
        >
          <thead>
            <tr className="text-Content-Secondary text-sm bg-Surface0">
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

                const dividerClass =
                  i === lastLeftIdx
                    ? "border-r border-Overlays-White-5"
                    : i === firstRightIdx && firstRightIdx !== -1
                    ? "border-l border-Overlays-White-5"
                    : "";

                return (
                  <th
                    key={c.key}
                    className={cx(
                      "top-0 bg-Surface0 font-medium text-left",
                      padX,
                      padYHead,
                      "whitespace-nowrap",
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
                  </th>
                );
              })}
            </tr>
          </thead>

          <tbody className="text-Content-Primary">
            {data.map((row, rIdx) => (
              <tr
                key={row[rowKey] ?? rIdx}
                className={cx("border-t border-Surface0 bg-Surface1")}
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

                  const dividerClass =
                    i === lastLeftIdx
                      ? "border-r border-Overlays-White-7/50"
                      : i === firstRightIdx && firstRightIdx !== -1
                      ? "border-l border-Overlays-White-7/50"
                      : "";

                  const value =
                    typeof c.accessor === "function"
                      ? c.accessor(row)
                      : row[c.key];

                  return (
                    <td
                      key={c.key}
                      className={cx(
                        padX,
                        padYCell,
                        "align-top bg-Surface1",
                        "text-sm leading-6",
                        "whitespace-normal",
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
