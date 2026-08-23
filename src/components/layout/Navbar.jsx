import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Search, User, Heart, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '../../context/CartContext.jsx';
import { useWishlist } from '../../context/WishlistContext.jsx';

const NAV = [
  { label: 'New', to: '/shop?filter=new' },
  { label: 'Makeup', to: '/makeup' },
  { label: 'Skincare', to: '/skincare' },
  { label: 'Haircare', to: '/haircare' },
  { label: 'Fragrance', to: '/fragrance' },
  { label: 'Body', to: '/shop?category=Body' },
  { label: 'Wellness', to: '/shop?category=Wellness' },
  { label: 'Brands', to: '/shop' },
  { label: 'Offers', to: '/offers' },
];

export default function Navbar({ onCartClick, onSearchClick }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { count } = useCart();
  const { count: wCount } = useWishlist();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <header className={`sticky top-0 z-40 bg-ivory transition-shadow ${scrolled ? 'shadow-[0_1px_0_rgba(33,26,24,0.08)]' : ''}`}>
      <div className="container-x">
        {/* Top row */}
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Mobile menu */}
          <button
            className="md:hidden w-10 h-10 -ml-2 flex items-center justify-center"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={22} />
          </button>

          {/* Logo */}
          <Link to="/" className="font-display text-2xl md:text-[26px] tracking-[0.18em] text-espresso md:mr-auto">
            LUMÉA
          </Link>

          {/* Right icons */}
          <div className="flex items-center gap-1 md:gap-2">
            <button aria-label="Search" onClick={onSearchClick} className="w-10 h-10 flex items-center justify-center hover:text-burgundy transition">
              <Search size={19} />
            </button>
            <Link to="/wishlist" aria-label="Wishlist" className="hidden md:flex w-10 h-10 items-center justify-center hover:text-burgundy transition relative">
              <Heart size={19} />
              {wCount > 0 && <CountBubble n={wCount} />}
            </Link>
            <button aria-label="Account" className="hidden md:flex w-10 h-10 items-center justify-center hover:text-burgundy transition">
              <User size={19} />
            </button>
            <button aria-label="Bag" onClick={onCartClick} className="w-10 h-10 flex items-center justify-center hover:text-burgundy transition relative">
              <ShoppingBag size={19} />
              {count > 0 && <CountBubble n={count} />}
            </button>
          </div>
        </div>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center justify-center gap-8 h-12 border-t border-espresso/10">
          {NAV.map((item) => (
            <NavLink
              key={item.label}
              to={item.to}
              className={({ isActive }) =>
                `font-sans text-[13px] tracking-wide transition-colors ${isActive ? 'text-burgundy' : 'text-espresso hover:text-burgundy'}`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>

      {/* Mobile drawer */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div className="absolute inset-0 bg-espresso/40" onClick={() => setMenuOpen(false)} />
          <div className="absolute left-0 top-0 h-full w-[86%] max-w-sm bg-ivory animate-slideInLeft flex flex-col">
            <div className="flex items-center justify-between h-16 px-5 border-b border-espresso/10">
              <span className="font-display text-xl tracking-[0.18em]">LUMÉA</span>
              <button onClick={() => setMenuOpen(false)} aria-label="Close menu" className="w-9 h-9 flex items-center justify-center">
                <X size={20} />
              </button>
            </div>
            <nav className="flex-1 overflow-y-auto py-4">
              {NAV.map((item) => (
                <NavLink
                  key={item.label}
                  to={item.to}
                  onClick={() => setMenuOpen(false)}
                  className="block px-5 py-4 font-display text-2xl text-espresso border-b border-espresso/5 hover:bg-cream"
                >
                  {item.label}
                </NavLink>
              ))}
              <Link to="/wishlist" onClick={() => setMenuOpen(false)} className="block px-5 py-4 font-mono text-[11px] tracking-widest uppercase border-b border-espresso/5">
                Wishlist {wCount > 0 && `(${wCount})`}
              </Link>
              <Link to="/journal" onClick={() => setMenuOpen(false)} className="block px-5 py-4 font-mono text-[11px] tracking-widest uppercase">
                Beauty Journal
              </Link>
            </nav>
            <div className="px-5 py-6 border-t border-espresso/10">
              <p className="font-serif italic text-espresso/70 text-lg">Beauty, thoughtfully curated.</p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

function CountBubble({ n }) {
  return (
    <span className="absolute -top-0.5 -right-0.5 min-w-[16px] h-[16px] px-1 rounded-full bg-burgundy text-ivory text-[9px] font-mono flex items-center justify-center">
      {n}
    </span>
  );
}
