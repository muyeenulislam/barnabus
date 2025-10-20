export default function ProgressBar({ value = 0, label = true }) {
  const pct = Math.max(0, Math.min(100, value));

  return (
    <div className="flex items-center gap-8 w-full justify-between py-[0.2rem] ">
      <div
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={pct}
        className="relative h-2 lg:h-3 w-full rounded-full overflow-hidden bg-[#2B2C2D]"
      >
        <div className="pointer-events-none absolute inset-0 ring-1 ring-black/30" />

        <div
          className="h-full rounded-full bg-Content-Tertiary"
          style={{ width: `${pct}%` }}
        />
      </div>

      {label && (
        <span className="text-[0.65rem] lg:text-sm text-white/80 tabular-nums">
          {pct}%
        </span>
      )}
    </div>
  );
}
