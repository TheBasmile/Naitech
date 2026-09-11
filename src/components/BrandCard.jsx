import { Link } from 'react-router-dom';

export default function BrandCard({ slug, name, count }) {
  return (
    <Link
      to={`/brand/${slug}`}
      className="card-surface flex flex-col items-center justify-center gap-2 px-6 py-10 text-center transition hover:shadow-lift hover:border-brandblue"
    >
      <span className="text-xl font-extrabold tracking-tight text-ink">{name}</span>
      <span className="text-xs text-ink-soft">{count} منتوج متوفر</span>
    </Link>
  );
}
