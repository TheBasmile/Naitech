export default function QuantitySelector({ quantity, onChange, min = 1, max = 99 }) {
  return (
    <div className="inline-flex items-center rounded-full border border-line">
      <button
        type="button"
        onClick={() => onChange(Math.max(min, quantity - 1))}
        disabled={quantity <= min}
        aria-label="إنقاص الكمية"
        className="flex h-9 w-9 items-center justify-center text-lg text-ink-soft transition hover:text-ink disabled:opacity-30"
      >
        −
      </button>
      <span className="w-8 text-center text-sm font-semibold" aria-live="polite">
        {quantity}
      </span>
      <button
        type="button"
        onClick={() => onChange(Math.min(max, quantity + 1))}
        disabled={quantity >= max}
        aria-label="زيادة الكمية"
        className="flex h-9 w-9 items-center justify-center text-lg text-ink-soft transition hover:text-ink disabled:opacity-30"
      >
        +
      </button>
    </div>
  );
}
