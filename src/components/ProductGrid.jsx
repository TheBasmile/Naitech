import ProductCard from './ProductCard';

export default function ProductGrid({ products, emptyMessage = 'لا توجد منتجات مطابقة حالياً.' }) {
  if (!products.length) {
    return (
      <div className="rounded-card border border-dashed border-line bg-surface py-16 text-center text-sm text-ink-soft">
        {emptyMessage}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 gap-4 sm:gap-5 md:grid-cols-3 lg:grid-cols-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
