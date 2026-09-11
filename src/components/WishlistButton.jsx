import { useWishlist } from '../context/WishlistContext';
import { HeartIcon } from './Icons';

export default function WishlistButton({ slug, className = '' }) {
  const { isWishlisted, toggle } = useWishlist();
  const active = isWishlisted(slug);

  return (
    <button
      type="button"
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        toggle(slug);
      }}
      aria-label={active ? 'إزالة من المفضلة' : 'أضف إلى المفضلة'}
      aria-pressed={active}
      className={`flex h-9 w-9 items-center justify-center rounded-full border border-line bg-white/90 backdrop-blur transition hover:border-brandblue ${
        active ? 'text-red-500' : 'text-ink-soft'
      } ${className}`}
    >
      <HeartIcon filled={active} className="h-4 w-4" />
    </button>
  );
}
