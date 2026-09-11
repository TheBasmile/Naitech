import { useParams } from 'react-router-dom';
import Breadcrumb from '../components/Breadcrumb';
import ProductGrid from '../components/ProductGrid';
import { storeConfig } from '../config/store';
import { getProductsByBrand } from '../data/products';
import NotFound from './NotFound';

export default function Brand() {
  const { brandSlug } = useParams();
  const brand = storeConfig.brands.find((b) => b.slug === brandSlug);

  if (!brand) return <NotFound />;

  const items = getProductsByBrand(brandSlug);

  return (
    <div className="container-page py-8">
      <Breadcrumb items={[{ label: brand.name }]} />
      <div className="mt-4 mb-8">
        <span className="section-eyebrow">ماركة</span>
        <h1 className="mt-1 text-3xl">{brand.name}</h1>
        <p className="mt-1 text-sm text-ink-soft">{items.length} منتوج متوفر</p>
      </div>
      <ProductGrid products={items} />
    </div>
  );
}
