import { Link } from 'react-router-dom';
import ProductGrid from '../components/ProductGrid';
import CategoryCard from '../components/CategoryCard';
import BrandCard from '../components/BrandCard';
import Newsletter from '../components/Newsletter';
import { storeConfig } from '../config/store';
import {
  featuredProducts,
  newProducts,
  onSaleProducts,
  getProductsByCategory,
  getProductsByBrand,
} from '../data/products';
import { CashIcon, ShieldIcon, TruckIcon, WhatsAppIcon } from '../components/Icons';
import ProductImagePlaceholder from '../components/ProductImagePlaceholder';

const benefits = [
  {
    icon: TruckIcon,
    title: 'توصيل داخل المغرب',
    text: 'نوصل طلبك إلى مختلف المدن المغربية.',
  },
  {
    icon: CashIcon,
    title: 'الدفع عند الاستلام',
    text: 'ادفع عند استلام طلبك، بدون أي مخاطرة.',
  },
  {
    icon: ShieldIcon,
    title: 'علامات موثوقة',
    text: 'منتجات من علامات تقنية معروفة عالمياً.',
  },
  {
    icon: WhatsAppIcon,
    title: 'الطلب عبر واتساب',
    text: 'اطلب بسهولة وتواصل معنا مباشرة.',
  },
];

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="border-b border-line bg-surface">
        <div className="container-page grid grid-cols-1 items-center gap-10 py-14 lg:grid-cols-2 lg:py-20">
          <div>
            <span className="section-eyebrow">{storeConfig.storeName}</span>
            <h1 className="mt-3 text-3xl font-extrabold leading-tight text-ink sm:text-4xl lg:text-5xl">
              {storeConfig.tagline}
            </h1>
            <p className="mt-4 max-w-md text-base text-ink-soft">
              اكتشف منتجات تقنية مختارة بعناية من علامات عالمية موثوقة: SOUNDPEATS، UGREEN وKIESLECT.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link to="/products" className="btn-primary px-7 py-3.5">تسوق الآن</Link>
              <Link to="/products?category=earbuds" className="btn-secondary px-7 py-3.5">
                اكتشف المنتجات
              </Link>
            </div>
            <div className="mt-8 flex gap-8">
              <div>
                <p className="text-2xl font-extrabold text-ink">29</p>
                <p className="text-xs text-ink-soft">منتوج مختار</p>
              </div>
              <div>
                <p className="text-2xl font-extrabold text-ink">3</p>
                <p className="text-xs text-ink-soft">علامات موثوقة</p>
              </div>
              <div>
                <p className="text-2xl font-extrabold text-ink">🇲🇦</p>
                <p className="text-xs text-ink-soft">توصيل داخل المغرب</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {featuredProducts.slice(0, 4).map((p) => (
              <div key={p.id} className="aspect-square overflow-hidden rounded-card border border-line bg-white shadow-softer">
                {p.images[0] ? (
                  <img src={p.images[0]} alt={p.name} className="h-full w-full object-cover" />
                ) : (
                  <ProductImagePlaceholder category={p.category} />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="container-page py-12">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {benefits.map((b) => (
            <div key={b.title} className="card-surface flex flex-col items-start gap-3 p-5">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-brandblue-soft text-brandblue">
                <b.icon className="h-5 w-5" />
              </span>
              <h3 className="text-sm font-bold text-ink">{b.title}</h3>
              <p className="text-xs text-ink-soft">{b.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="container-page py-8">
        <div className="mb-6 flex items-end justify-between">
          <div>
            <span className="section-eyebrow">تسوق حسب الفئة</span>
            <h2 className="mt-1 text-2xl">الفئات</h2>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {storeConfig.categories.map((c) => (
            <CategoryCard
              key={c.slug}
              slug={c.slug}
              name={c.name}
              count={getProductsByCategory(c.slug).length}
            />
          ))}
        </div>
      </section>

      {/* Featured */}
      {featuredProducts.length > 0 && (
        <section className="container-page py-8">
          <div className="mb-6 flex items-end justify-between">
            <div>
              <span className="section-eyebrow">مختارات المتجر</span>
              <h2 className="mt-1 text-2xl">منتجات مميزة</h2>
            </div>
            <Link to="/products" className="text-sm font-semibold text-brandblue hover:underline">
              عرض الكل
            </Link>
          </div>
          <ProductGrid products={featuredProducts} />
        </section>
      )}

      {/* New arrivals */}
      {newProducts.length > 0 && (
        <section className="container-page py-8">
          <div className="mb-6 flex items-end justify-between">
            <div>
              <span className="section-eyebrow">آخر الإضافات</span>
              <h2 className="mt-1 text-2xl">وصل حديثاً</h2>
            </div>
          </div>
          <ProductGrid products={newProducts} />
        </section>
      )}

      {/* Promotions — only rendered when a real discount exists */}
      {onSaleProducts.length > 0 && (
        <section className="bg-surface py-8">
          <div className="container-page">
            <div className="mb-6">
              <span className="section-eyebrow">لفترة محدودة</span>
              <h2 className="mt-1 text-2xl">عروض حالية</h2>
            </div>
            <ProductGrid products={onSaleProducts} />
          </div>
        </section>
      )}

      {/* Brands */}
      <section className="container-page py-8">
        <div className="mb-6">
          <span className="section-eyebrow">علامات نثق بها</span>
          <h2 className="mt-1 text-2xl">الماركات</h2>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {storeConfig.brands.map((b) => (
            <BrandCard key={b.slug} slug={b.slug} name={b.name} count={getProductsByBrand(b.slug).length} />
          ))}
        </div>
      </section>

      {/* Why NAITECH */}
      <section className="border-y border-line bg-ink py-14 text-white">
        <div className="container-page grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="text-xs font-semibold text-brandblue">لماذا NAITECH</span>
            <h2 className="mt-2 text-2xl font-extrabold text-white sm:text-3xl">
              تجربة تسوق تقنية تستحق ثقتك
            </h2>
            <p className="mt-3 max-w-md text-sm text-white/70">
              نختار منتجاتنا بعناية من علامات عالمية معروفة، ونسهّل عليك الطلب من الألف إلى الياء.
            </p>
          </div>
          <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {[
              'منتجات تقنية مختارة بعناية',
              'علامات موثوقة عالمياً',
              'توصيل داخل المغرب',
              'الدفع عند الاستلام',
              'طلب سهل عبر واتساب',
              'دعم ومتابعة للزبناء',
            ].map((point) => (
              <li key={point} className="flex items-start gap-2 text-sm text-white/90">
                <span className="mt-1 h-1.5 w-1.5 flex-none rounded-full bg-brandblue" />
                {point}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Newsletter />
    </div>
  );
}
