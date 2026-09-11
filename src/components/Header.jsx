import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import AnnouncementBar from './AnnouncementBar';
import SearchBar from './SearchBar';
import { storeConfig } from '../config/store';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import { CartIcon, ChevronIcon, CloseIcon, HeartIcon, MenuIcon, SearchIcon } from './Icons';

const navLinkClass = ({ isActive }) =>
  `text-sm font-medium transition hover:text-brandblue ${isActive ? 'text-brandblue' : 'text-ink'}`;

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [brandsOpen, setBrandsOpen] = useState(false);
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);
  const { totalItems } = useCart();
  const { slugs } = useWishlist();

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-line">
      <AnnouncementBar />

      <div className="container-page flex h-16 items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <button
            type="button"
            className="lg:hidden -mr-2 flex h-10 w-10 items-center justify-center text-ink"
            onClick={() => setMobileOpen(true)}
            aria-label="فتح القائمة"
          >
            <MenuIcon />
          </button>

          <Link to="/" className="flex items-center gap-1.5" onClick={() => setMobileOpen(false)}>
            <span className="text-xl font-extrabold tracking-tight text-ink">{storeConfig.storeName}</span>
          </Link>
        </div>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-7 lg:flex" aria-label="التصفح الرئيسي">
          <NavLink to="/" end className={navLinkClass}>الرئيسية</NavLink>
          <NavLink to="/products" className={navLinkClass}>جميع المنتجات</NavLink>
          <NavLink to="/products?category=earbuds" className={navLinkClass}>السماعات</NavLink>
          <NavLink to="/products?category=chargers" className={navLinkClass}>الشواحن والكابلات</NavLink>
          <NavLink to="/products?category=watches" className={navLinkClass}>الساعات الذكية</NavLink>
          <NavLink to="/products?category=trackers" className={navLinkClass}>أجهزة التتبع</NavLink>

          <div
            className="relative"
            onMouseEnter={() => setBrandsOpen(true)}
            onMouseLeave={() => setBrandsOpen(false)}
          >
            <button
              type="button"
              className="flex items-center gap-1 text-sm font-medium text-ink transition hover:text-brandblue"
              onClick={() => setBrandsOpen((v) => !v)}
              aria-expanded={brandsOpen}
            >
              الماركات
              <ChevronIcon direction={brandsOpen ? 'up' : 'down'} className="h-3.5 w-3.5" />
            </button>
            {brandsOpen && (
              <div className="absolute top-full right-0 mt-2 w-44 overflow-hidden rounded-xl border border-line bg-white shadow-soft">
                {storeConfig.brands.map((b) => (
                  <Link
                    key={b.slug}
                    to={`/brand/${b.slug}`}
                    className="block px-4 py-3 text-sm text-ink transition hover:bg-surface"
                  >
                    {b.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </nav>

        {/* Desktop actions */}
        <div className="hidden items-center gap-4 lg:flex">
          <SearchBar className="w-56" />
          <Link to="/wishlist" className="relative text-ink transition hover:text-brandblue" aria-label="المفضلة">
            <HeartIcon />
            {slugs.length > 0 && (
              <span className="absolute -top-2 -left-2 flex h-4 w-4 items-center justify-center rounded-full bg-brandblue text-[10px] font-bold text-white">
                {slugs.length}
              </span>
            )}
          </Link>
          <Link to="/cart" className="relative text-ink transition hover:text-brandblue" aria-label="السلة">
            <CartIcon />
            {totalItems > 0 && (
              <span className="absolute -top-2 -left-2 flex h-4 w-4 items-center justify-center rounded-full bg-brandblue text-[10px] font-bold text-white">
                {totalItems}
              </span>
            )}
          </Link>
        </div>

        {/* Mobile actions */}
        <div className="flex items-center gap-1 lg:hidden">
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center text-ink"
            onClick={() => setMobileSearchOpen((v) => !v)}
            aria-label="بحث"
          >
            <SearchIcon />
          </button>
          <Link to="/cart" className="relative flex h-10 w-10 items-center justify-center text-ink" aria-label="السلة">
            <CartIcon />
            {totalItems > 0 && (
              <span className="absolute top-1 left-1 flex h-4 w-4 items-center justify-center rounded-full bg-brandblue text-[9px] font-bold text-white">
                {totalItems}
              </span>
            )}
          </Link>
        </div>
      </div>

      {mobileSearchOpen && (
        <div className="border-t border-line px-4 py-3 lg:hidden">
          <SearchBar autoFocus />
        </div>
      )}

      {/* Mobile menu drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <button
            className="absolute inset-0 bg-ink/40"
            aria-label="إغلاق القائمة"
            onClick={() => setMobileOpen(false)}
          />
          <div className="absolute top-0 right-0 h-full w-[82%] max-w-xs overflow-y-auto bg-white p-5 shadow-lift">
            <div className="mb-6 flex items-center justify-between">
              <span className="text-lg font-extrabold text-ink">{storeConfig.storeName}</span>
              <button
                type="button"
                onClick={() => setMobileOpen(false)}
                aria-label="إغلاق"
                className="flex h-9 w-9 items-center justify-center text-ink"
              >
                <CloseIcon />
              </button>
            </div>

            <nav className="flex flex-col gap-1" aria-label="القائمة">
              {[
                ['الرئيسية', '/'],
                ['جميع المنتجات', '/products'],
                ['السماعات', '/products?category=earbuds'],
                ['الشواحن والكابلات', '/products?category=chargers'],
                ['الساعات الذكية', '/products?category=watches'],
                ['أجهزة التتبع', '/products?category=trackers'],
              ].map(([label, to]) => (
                <Link
                  key={label}
                  to={to}
                  onClick={() => setMobileOpen(false)}
                  className="rounded-lg px-3 py-3 text-sm font-medium text-ink transition hover:bg-surface"
                >
                  {label}
                </Link>
              ))}

              <div className="mt-2 border-t border-line pt-2">
                <p className="px-3 py-2 text-xs font-semibold text-ink-soft">الماركات</p>
                {storeConfig.brands.map((b) => (
                  <Link
                    key={b.slug}
                    to={`/brand/${b.slug}`}
                    onClick={() => setMobileOpen(false)}
                    className="block rounded-lg px-3 py-3 text-sm font-medium text-ink transition hover:bg-surface"
                  >
                    {b.name}
                  </Link>
                ))}
              </div>

              <Link
                to="/wishlist"
                onClick={() => setMobileOpen(false)}
                className="mt-2 flex items-center justify-between rounded-lg border-t border-line px-3 py-3 text-sm font-medium text-ink"
              >
                المفضلة {slugs.length > 0 && <span className="text-brandblue">{slugs.length}</span>}
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
