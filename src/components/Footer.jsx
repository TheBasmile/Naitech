import { Link } from 'react-router-dom';
import { storeConfig } from '../config/store';
import { WhatsAppIcon } from './Icons';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-surface">
      <div className="container-page grid grid-cols-2 gap-8 py-12 sm:grid-cols-2 lg:grid-cols-4">
        <div className="col-span-2 lg:col-span-1">
          <h3 className="text-lg font-extrabold text-ink">{storeConfig.storeName}</h3>
          <p className="mt-2 max-w-xs text-sm text-ink-soft">{storeConfig.tagline}</p>
          <a
            href={`https://wa.me/${storeConfig.whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp mt-4 text-xs"
          >
            <WhatsAppIcon />
            راسلنا على واتساب
          </a>
        </div>

        <div>
          <h4 className="text-sm font-bold text-ink">روابط</h4>
          <ul className="mt-3 space-y-2 text-sm text-ink-soft">
            <li><Link to="/" className="hover:text-brandblue">الرئيسية</Link></li>
            <li><Link to="/products" className="hover:text-brandblue">جميع المنتجات</Link></li>
            <li><Link to="/products?onSale=1" className="hover:text-brandblue">العروض</Link></li>
            <li><Link to="/faq" className="hover:text-brandblue">الأسئلة الشائعة</Link></li>
            <li><Link to="/about" className="hover:text-brandblue">من نحن</Link></li>
            <li><Link to="/contact" className="hover:text-brandblue">تواصل معنا</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-bold text-ink">التصنيفات</h4>
          <ul className="mt-3 space-y-2 text-sm text-ink-soft">
            {storeConfig.categories.map((c) => (
              <li key={c.slug}>
                <Link to={`/products?category=${c.slug}`} className="hover:text-brandblue">
                  {c.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-bold text-ink">الماركات</h4>
          <ul className="mt-3 space-y-2 text-sm text-ink-soft">
            {storeConfig.brands.map((b) => (
              <li key={b.slug}>
                <Link to={`/brand/${b.slug}`} className="hover:text-brandblue">
                  {b.name}
                </Link>
              </li>
            ))}
          </ul>
          <h4 className="mt-5 text-sm font-bold text-ink">خدمة الزبناء</h4>
          <p className="mt-3 text-sm text-ink-soft">{storeConfig.whatsappDisplay}</p>
        </div>
      </div>

      <div className="border-t border-line py-5">
        <p className="container-page text-center text-xs text-ink-soft">
          © {year} {storeConfig.storeName}. جميع الحقوق محفوظة.
        </p>
      </div>
    </footer>
  );
}
