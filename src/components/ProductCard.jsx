import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import ProductImagePlaceholder from './ProductImagePlaceholder';
import WishlistButton from './WishlistButton';
import { storeConfig } from '../config/store';

export default function ProductCard({ product }) {
  const { addItem } = useCart();
  const image = product.images?.[0];

  return (
    <div className="group card-surface flex flex-col overflow-hidden transition hover:shadow-lift">
      <Link to={`/product/${product.slug}`} className="relative block aspect-square overflow-hidden bg-surface">
        {image ? (
          <img
            src={image}
            alt={`${product.brand} ${product.name}`}
            loading="lazy"
            className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.04]"
          />
        ) : (
          <ProductImagePlaceholder category={product.category} />
        )}

        <div className="absolute top-3 right-3 flex flex-col gap-1.5 items-end">
          {product.isNew && (
            <span className="rounded-full bg-ink px-2.5 py-1 text-[10px] font-bold text-white">جديد</span>
          )}
          {product.isOnSale && (
            <span className="rounded-full bg-red-500 px-2.5 py-1 text-[10px] font-bold text-white">تخفيض</span>
          )}
        </div>

        <WishlistButton slug={product.slug} className="absolute top-3 left-3" />
      </Link>

      <div className="flex flex-1 flex-col gap-2 p-4">
        <span className="text-[11px] font-semibold uppercase tracking-wide text-brandblue">
          {product.brand}
        </span>
        <Link to={`/product/${product.slug}`}>
          <h3 className="line-clamp-1 text-sm font-bold text-ink hover:text-brandblue transition">
            {product.name}
          </h3>
        </Link>
        <p className="line-clamp-2 text-xs text-ink-soft">{product.shortDescription}</p>

        <div className="mt-auto flex items-center justify-between pt-2">
          <div className="flex items-baseline gap-1.5">
            <span className="text-base font-extrabold text-ink">{product.price}</span>
            <span className="text-xs text-ink-soft">{storeConfig.currency}</span>
            {product.oldPrice && (
              <span className="text-xs text-ink-soft/60 line-through">
                {product.oldPrice} {storeConfig.currency}
              </span>
            )}
          </div>
        </div>

        <button
          type="button"
          onClick={() => addItem(product, 1)}
          className="btn-secondary mt-1 w-full py-2.5 text-xs"
        >
          أضف إلى السلة
        </button>
      </div>
    </div>
  );
}
