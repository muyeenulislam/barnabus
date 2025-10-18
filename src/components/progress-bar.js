// ProgressBar.jsx
export default function ProgressBar({ value = 0, label = true }) {
  const pct = Math.max(0, Math.min(100, value));

  return (
    <div className="flex items-center gap-3 w-full justify-between">
      <div
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={pct}
        className="relative h-3 w-full rounded-full overflow-hidden bg-black/40"
      >
        {/* subtle inner shadow on the track */}
        <div className="pointer-events-none absolute inset-0 ring-1 ring-black/30" />
        {/* fill */}
        <div
          className="h-full rounded-full bg-neutral-300"
          style={{ width: `${pct}%` }}
        />
      </div>

      {label && (
        <span className="text-sm text-white/80 tabular-nums">{pct}%</span>
      )}
    </div>
  );
}
