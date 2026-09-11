import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import QuantitySelector from './QuantitySelector';
import ProductImagePlaceholder from './ProductImagePlaceholder';
import { getProductBySlug } from '../data/products';
import { storeConfig } from '../config/store';

export default function CartItem({ item }) {
  const { updateQuantity, removeItem } = useCart();
  const product = getProductBySlug(item.slug);
  const category = product?.category ?? 'earbuds';

  return (
    <div className="flex items-center gap-4 border-b border-line py-5 last:border-0">
      <Link to={`/product/${item.slug}`} className="h-20 w-20 flex-none overflow-hidden rounded-xl bg-surface">
        {item.image ? (
          <img src={item.image} alt={item.name} className="h-full w-full object-cover" />
        ) : (
          <ProductImagePlaceholder category={category} />
        )}
      </Link>

      <div className="flex-1 min-w-0">
        <span className="text-[11px] font-semibold text-brandblue">{item.brand}</span>
        <Link to={`/product/${item.slug}`}>
          <h3 className="truncate text-sm font-bold text-ink hover:text-brandblue">{item.name}</h3>
        </Link>
        <p className="mt-1 text-sm text-ink-soft">
          {item.price} {storeConfig.currency}
        </p>
      </div>

      <div className="flex flex-none flex-col items-end gap-2">
        <QuantitySelector
          quantity={item.quantity}
          onChange={(q) => updateQuantity(item.slug, q)}
        />
        <div className="flex items-center gap-3">
          <span className="text-sm font-bold text-ink">
            {item.price * item.quantity} {storeConfig.currency}
          </span>
          <button
            type="button"
            onClick={() => removeItem(item.slug)}
            className="text-xs font-medium text-red-500 hover:underline"
          >
            إزالة
          </button>
        </div>
      </div>
    </div>
  );
}
