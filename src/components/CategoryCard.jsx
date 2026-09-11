import { Link } from 'react-router-dom';
import ProductImagePlaceholder from './ProductImagePlaceholder';

export default function CategoryCard({ slug, name, count }) {
  return (
    <Link
      to={`/products?category=${slug}`}
      className="group card-surface flex flex-col overflow-hidden transition hover:shadow-lift"
    >
      <div className="aspect-[4/3] overflow-hidden">
        <div className="h-full w-full transition duration-300 group-hover:scale-[1.04]">
          <ProductImagePlaceholder category={slug} />
        </div>
      </div>
      <div className="flex items-center justify-between p-4">
        <h3 className="text-sm font-bold text-ink">{name}</h3>
        <span className="text-xs text-ink-soft">{count} منتوج</span>
      </div>
    </Link>
  );
}
