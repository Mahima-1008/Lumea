import { Link } from 'react-router-dom';
import { Home, Search, Heart, ShoppingBag, User } from 'lucide-react';
import { useCart } from '../../context/CartContext.jsx';
import { useWishlist } from '../../context/WishlistContext.jsx';

export default function MobileBottomNav({ onCartClick, onSearchClick }) {
  const { count } = useCart();
  const { count: wCount } = useWishlist();
  return (
    <nav className="md:hidden fixed bottom-0 inset-x-0 z-30 bg-ivory border-t border-espresso/10">
      <div className="grid grid-cols-5">
        <Link to="/" className="flex flex-col items-center gap-1 py-3 text-espresso">
          <Home size={18} />
          <span className="font-mono text-[9px] tracking-widest uppercase">Home</span>
        </Link>
        <button onClick={onSearchClick} className="flex flex-col items-center gap-1 py-3 text-espresso">
          <Search size={18} />
          <span className="font-mono text-[9px] tracking-widest uppercase">Search</span>
        </button>
        <Link to="/wishlist" className="flex flex-col items-center gap-1 py-3 text-espresso relative">
          <Heart size={18} />
          {wCount > 0 && <span className="absolute top-2 right-1/2 translate-x-4 min-w-[14px] h-[14px] px-1 rounded-full bg-burgundy text-ivory text-[8px] font-mono flex items-center justify-center">{wCount}</span>}
          <span className="font-mono text-[9px] tracking-widest uppercase">Wishlist</span>
        </Link>
        <button onClick={onCartClick} className="flex flex-col items-center gap-1 py-3 text-espresso relative">
          <ShoppingBag size={18} />
          {count > 0 && <span className="absolute top-2 right-1/2 translate-x-4 min-w-[14px] h-[14px] px-1 rounded-full bg-burgundy text-ivory text-[8px] font-mono flex items-center justify-center">{count}</span>}
          <span className="font-mono text-[9px] tracking-widest uppercase">Bag</span>
        </button>
        <Link to="/journal" className="flex flex-col items-center gap-1 py-3 text-espresso">
          <User size={18} />
          <span className="font-mono text-[9px] tracking-widest uppercase">More</span>
        </Link>
      </div>
    </nav>
  );
}
