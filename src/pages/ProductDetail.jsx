import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Breadcrumb from '../components/Breadcrumb';
import ProductGrid from '../components/ProductGrid';
import ProductImagePlaceholder from '../components/ProductImagePlaceholder';
import QuantitySelector from '../components/QuantitySelector';
import WishlistButton from '../components/WishlistButton';
import { WhatsAppIcon } from '../components/Icons';
import { storeConfig } from '../config/store';
import { getProductBySlug, getProductsByCategory } from '../data/products';
import { useCart } from '../context/CartContext';
import { openWhatsappQuickOrder } from '../utils/whatsapp';
import NotFound from './NotFound';

export default function ProductDetail() {
  const { slug } = useParams();
  const product = getProductBySlug(slug);
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);
  const { addItem } = useCart();

  if (!product) return <NotFound />;

  const related = getProductsByCategory(product.category)
    .filter((p) => p.slug !== product.slug)
    .slice(0, 4);

  const category = storeConfig.categories.find((c) => c.slug === product.category);

  return (
    <div className="container-page py-8">
      <Breadcrumb
        items={[
          { label: category?.name || 'المنتجات', to: `/products?category=${product.category}` },
          { label: product.name },
        ]}
      />

      <div className="mt-5 grid grid-cols-1 gap-10 lg:grid-cols-2">
        {/* Gallery */}
        <div>
          <div className="aspect-square overflow-hidden rounded-card border border-line bg-surface">
            {product.images[activeImage] ? (
              <img
                src={product.images[activeImage]}
                alt={`${product.brand} ${product.name}`}
                className="h-full w-full object-cover"
              />
            ) : (
              <ProductImagePlaceholder category={product.category} />
            )}
          </div>
          {product.images.length > 1 && (
            <div className="mt-3 flex gap-2">
              {product.images.map((img, i) => (
                <button
                  key={img}
                  type="button"
                  onClick={() => setActiveImage(i)}
                  className={`h-16 w-16 overflow-hidden rounded-lg border ${
                    activeImage === i ? 'border-brandblue' : 'border-line'
                  }`}
                  aria-label={`صورة ${i + 1}`}
                >
                  <img src={img} alt="" className="h-full w-full object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Info */}
        <div>
          <span className="text-xs font-semibold uppercase tracking-wide text-brandblue">
            {product.brand}
          </span>
          <h1 className="mt-2 text-2xl font-extrabold text-ink sm:text-3xl">{product.name}</h1>
          <p className="mt-1 text-sm text-ink-soft">{product.categoryLabel}</p>

          <div className="mt-4 flex items-baseline gap-2">
            <span className="text-3xl font-extrabold text-ink">{product.price}</span>
            <span className="text-sm text-ink-soft">{storeConfig.currency}</span>
            {product.oldPrice && (
              <span className="text-sm text-ink-soft/60 line-through">
                {product.oldPrice} {storeConfig.currency}
              </span>
            )}
          </div>

          <p className="mt-2 text-xs font-semibold text-green-600">متوفر حالياً</p>

          <p className="mt-5 text-sm leading-relaxed text-ink-soft">{product.description}</p>

          {product.specifications.length > 0 && (
            <div className="mt-6">
              <h2 className="text-sm font-bold text-ink">المواصفات</h2>
              <ul className="mt-3 space-y-2">
                {product.specifications.map((spec) => (
                  <li key={spec} className="flex items-start gap-2 text-sm text-ink-soft">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-none rounded-full bg-brandblue" />
                    {spec}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="mt-7 flex items-center gap-4">
            <QuantitySelector quantity={quantity} onChange={setQuantity} />
            <WishlistButton slug={product.slug} className="static" />
          </div>

          <div className="mt-5 flex flex-col gap-3 sm:flex-row">
            <button
              type="button"
              onClick={() => addItem(product, quantity)}
              className="btn-secondary flex-1 py-3.5"
            >
              أضف إلى السلة
            </button>
            <button
              type="button"
              onClick={() => openWhatsappQuickOrder(product, quantity)}
              className="btn-whatsapp flex-1 py-3.5"
            >
              <WhatsAppIcon />
              اطلب عبر واتساب
            </button>
          </div>
        </div>
      </div>

      {related.length > 0 && (
        <section className="mt-16">
          <h2 className="mb-6 text-xl">منتجات مشابهة</h2>
          <ProductGrid products={related} />
        </section>
      )}

      <p className="mt-10 text-center text-xs text-ink-soft">
        غير متأكد من الاختيار؟{' '}
        <Link to="/contact" className="font-semibold text-brandblue hover:underline">
          تواصل معنا
        </Link>
      </p>
    </div>
  );
}
