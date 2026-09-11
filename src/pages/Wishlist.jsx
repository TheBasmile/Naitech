import { Link } from 'react-router-dom';
import Breadcrumb from '../components/Breadcrumb';
import ProductGrid from '../components/ProductGrid';
import { useWishlist } from '../context/WishlistContext';
import { products } from '../data/products';

export default function Wishlist() {
  const { slugs } = useWishlist();
  const items = products.filter((p) => slugs.includes(p.slug));

  return (
    <div className="container-page py-8">
      <Breadcrumb items={[{ label: 'المفضلة' }]} />
      <h1 className="mt-4 mb-8 text-2xl">المفضلة</h1>

      {items.length === 0 ? (
        <div className="card-surface flex flex-col items-center gap-4 py-16 text-center">
          <p className="text-sm text-ink-soft">لم تضف أي منتوج إلى المفضلة بعد.</p>
          <Link to="/products" className="btn-primary px-6 py-3">تصفح المنتجات</Link>
        </div>
      ) : (
        <ProductGrid products={items} />
      )}
    </div>
  );
}
