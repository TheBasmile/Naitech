import { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import Breadcrumb from '../components/Breadcrumb';
import ProductGrid from '../components/ProductGrid';
import SearchBar from '../components/SearchBar';
import { storeConfig } from '../config/store';
import { products } from '../data/products';

const SORT_OPTIONS = [
  { value: 'relevance', label: 'الأكثر ملاءمة' },
  { value: 'newest', label: 'الأحدث' },
  { value: 'price_asc', label: 'السعر: من الأقل للأعلى' },
  { value: 'price_desc', label: 'السعر: من الأعلى للأقل' },
];

export default function Products() {
  const [params, setParams] = useSearchParams();
  const category = params.get('category') || '';
  const brand = params.get('brand') || '';
  const query = (params.get('q') || '').trim().toLowerCase();
  const onSale = params.get('onSale') === '1';
  const sort = params.get('sort') || 'relevance';

  const updateParam = (key, value) => {
    const next = new URLSearchParams(params);
    if (value) next.set(key, value);
    else next.delete(key);
    setParams(next, { replace: true });
  };

  const filtered = useMemo(() => {
    let list = [...products];

    if (category) list = list.filter((p) => p.category === category);
    if (brand) list = list.filter((p) => p.brandSlug === brand);
    if (onSale) list = list.filter((p) => p.isOnSale);
    if (query) {
      list = list.filter((p) =>
        `${p.name} ${p.brand} ${p.description}`.toLowerCase().includes(query)
      );
    }

    switch (sort) {
      case 'newest':
        list.sort((a, b) => Number(b.isNew) - Number(a.isNew));
        break;
      case 'price_asc':
        list.sort((a, b) => a.price - b.price);
        break;
      case 'price_desc':
        list.sort((a, b) => b.price - a.price);
        break;
      default:
        break;
    }

    return list;
  }, [category, brand, query, onSale, sort]);

  const activeCategoryName = storeConfig.categories.find((c) => c.slug === category)?.name;
  const activeBrandName = storeConfig.brands.find((b) => b.slug === brand)?.name;

  return (
    <div className="container-page py-8">
      <Breadcrumb items={[{ label: 'جميع المنتجات' }]} />

      <div className="mt-4 mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="text-2xl">
            {activeCategoryName || activeBrandName || 'جميع المنتجات'}
          </h1>
          <p className="mt-1 text-sm text-ink-soft">{filtered.length} منتوج</p>
        </div>
        <SearchBar initialValue={params.get('q') || ''} className="sm:w-64" />
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-[220px_1fr]">
        {/* Filters sidebar */}
        <aside className="space-y-6">
          <div>
            <h2 className="mb-3 text-sm font-bold text-ink">الفئة</h2>
            <div className="flex flex-wrap gap-2 lg:flex-col lg:gap-1">
              <FilterChip
                active={!category}
                label="كل الفئات"
                onClick={() => updateParam('category', '')}
              />
              {storeConfig.categories.map((c) => (
                <FilterChip
                  key={c.slug}
                  active={category === c.slug}
                  label={c.name}
                  onClick={() => updateParam('category', c.slug)}
                />
              ))}
            </div>
          </div>

          <div>
            <h2 className="mb-3 text-sm font-bold text-ink">الماركة</h2>
            <div className="flex flex-wrap gap-2 lg:flex-col lg:gap-1">
              <FilterChip
                active={!brand}
                label="كل الماركات"
                onClick={() => updateParam('brand', '')}
              />
              {storeConfig.brands.map((b) => (
                <FilterChip
                  key={b.slug}
                  active={brand === b.slug}
                  label={b.name}
                  onClick={() => updateParam('brand', b.slug)}
                />
              ))}
            </div>
          </div>

          <div>
            <h2 className="mb-3 text-sm font-bold text-ink">الترتيب</h2>
            <select
              value={sort}
              onChange={(e) => updateParam('sort', e.target.value)}
              className="input-field text-sm"
            >
              {SORT_OPTIONS.map((opt) => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
              ))}
            </select>
          </div>
        </aside>

        <div>
          <ProductGrid products={filtered} />
        </div>
      </div>
    </div>
  );
}

function FilterChip({ active, label, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={`rounded-full px-4 py-2 text-xs font-semibold transition lg:rounded-lg lg:text-right ${
        active ? 'bg-ink text-white' : 'bg-surface text-ink-soft hover:text-ink'
      }`}
    >
      {label}
    </button>
  );
}
