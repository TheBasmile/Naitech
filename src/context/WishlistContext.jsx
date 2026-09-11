import { createContext, useContext } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';

const WishlistContext = createContext(null);

export function WishlistProvider({ children }) {
  const [slugs, setSlugs] = useLocalStorage('naitech_wishlist', []);

  const isWishlisted = (slug) => slugs.includes(slug);

  const toggle = (slug) => {
    setSlugs((prev) =>
      prev.includes(slug) ? prev.filter((s) => s !== slug) : [...prev, slug]
    );
  };

  const remove = (slug) => setSlugs((prev) => prev.filter((s) => s !== slug));

  const value = { slugs, isWishlisted, toggle, remove };

  return <WishlistContext.Provider value={value}>{children}</WishlistContext.Provider>;
}

export function useWishlist() {
  const ctx = useContext(WishlistContext);
  if (!ctx) throw new Error('useWishlist must be used within WishlistProvider');
  return ctx;
}
