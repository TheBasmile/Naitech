import { Link } from 'react-router-dom';
import Breadcrumb from '../components/Breadcrumb';
import CartItem from '../components/CartItem';
import CheckoutForm from '../components/CheckoutForm';
import { useCart } from '../context/CartContext';
import { storeConfig } from '../config/store';

export default function Cart() {
  const { items, totalPrice } = useCart();

  return (
    <div className="container-page py-8">
      <Breadcrumb items={[{ label: 'السلة' }]} />
      <h1 className="mt-4 mb-8 text-2xl">سلة التسوق</h1>

      {items.length === 0 ? (
        <div className="card-surface flex flex-col items-center gap-4 py-16 text-center">
          <p className="text-sm text-ink-soft">سلتك فارغة حالياً.</p>
          <Link to="/products" className="btn-primary px-6 py-3">تصفح المنتجات</Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_380px]">
          <div className="card-surface p-5 sm:p-6">
            {items.map((item) => (
              <CartItem key={item.slug} item={item} />
            ))}
            <div className="mt-4 flex items-center justify-between border-t border-line pt-4">
              <span className="text-sm font-semibold text-ink-soft">مجموع المنتجات</span>
              <span className="text-lg font-extrabold text-ink">
                {totalPrice} {storeConfig.currency}
              </span>
            </div>
          </div>

          <div>
            <CheckoutForm />
          </div>
        </div>
      )}
    </div>
  );
}
