import { Heart } from 'lucide-react';
import { useWishlist } from '../../context/WishlistContext.jsx';

export default function WishlistButton({ id, className = '' }) {
  const { toggle, has } = useWishlist();
  const active = has(id);
  return (
    <button
      onClick={(e) => { e.preventDefault(); e.stopPropagation(); toggle(id); }}
      aria-label={active ? 'Remove from wishlist' : 'Add to wishlist'}
      className={`w-9 h-9 flex items-center justify-center bg-ivory/90 backdrop-blur-sm hover:bg-ivory transition ${className}`}
    >
      <Heart
        size={16}
        className={`transition ${active ? 'fill-burgundy text-burgundy scale-110' : 'text-espresso'}`}
      />
    </button>
  );
}
