// Elegant, category-appropriate placeholder — used only when a product
// has no real photo yet in its `images` array. Swap in a real photo by
// adding it to src/assets/products and referencing it in src/data/products.js;
// this placeholder disappears automatically once `images` is non-empty.
const ICONS = {
  earbuds: (
    <path d="M9 13v-2.5a3 3 0 0 1 6 0V13M6.5 13h1.8a1.7 1.7 0 0 1 1.7 1.7v2.6a1.7 1.7 0 0 1-1.7 1.7H6.5a1.7 1.7 0 0 1-1.7-1.7v-2.6A1.7 1.7 0 0 1 6.5 13Zm9.2 0h1.8A1.7 1.7 0 0 1 19.2 14.7v2.6a1.7 1.7 0 0 1-1.7 1.7h-1.8a1.7 1.7 0 0 1-1.7-1.7v-2.6a1.7 1.7 0 0 1 1.7-1.7Z" />
  ),
  watches: (
    <>
      <rect x="8" y="8" width="8" height="8" rx="2.4" />
      <path d="M9.6 8V5.6h4.8V8M9.6 16v2.4h4.8V16M12 11v1.8l1.2.8" />
    </>
  ),
  trackers: (
    <>
      <circle cx="12" cy="12" r="6.2" />
      <circle cx="12" cy="12" r="2.2" />
      <path d="M12 3.2v2.1M12 18.7v2.1M3.2 12h2.1M18.7 12h2.1" />
    </>
  ),
  chargers: <path d="M13.2 3 5.6 13.4h5l-.9 7.6 8.7-11.3h-5.4l1.2-6.7Z" />,
};

const LABELS = {
  earbuds: 'سماعات',
  watches: 'ساعة ذكية',
  trackers: 'جهاز تتبع',
  chargers: 'شاحن / كابل',
};

export default function ProductImagePlaceholder({ category, className = '' }) {
  const icon = ICONS[category] ?? ICONS.earbuds;
  const label = LABELS[category] ?? '';
  return (
    <div
      className={`flex h-full w-full flex-col items-center justify-center gap-2 bg-gradient-to-br from-surface to-brandblue-soft/60 ${className}`}
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="#2E5EFF"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-12 w-12 opacity-70"
        aria-hidden="true"
      >
        {icon}
      </svg>
      <span className="text-[11px] font-medium text-ink-soft/70">{label}</span>
    </div>
  );
}
