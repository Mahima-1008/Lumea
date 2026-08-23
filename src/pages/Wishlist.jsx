import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';
import { useWishlist } from '../context/WishlistContext.jsx';
import { products } from '../data/products.js';
import ProductGrid from '../components/products/ProductGrid.jsx';

export default function Wishlist() {
  const { ids, clear } = useWishlist();
  const items = products.filter((p) => ids.includes(p.id));

  return (
    <div className="container-x py-12 md:py-16">
      <header className="mb-10 flex items-end justify-between gap-4">
        <div>
          <h1 className="font-display text-4xl md:text-6xl">Your wishlist</h1>
          <p className="font-serif italic text-espresso/70 text-lg mt-3">
            {items.length > 0 ? `${items.length} thoughtfully saved.` : 'A quiet place for the things you love.'}
          </p>
        </div>
        {items.length > 0 && (
          <button onClick={clear} className="font-mono text-[11px] tracking-widest uppercase text-espresso/60 hover:text-burgundy">
            Clear all
          </button>
        )}
      </header>

      {items.length === 0 ? (
        <div className="max-w-lg mx-auto text-center py-20">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-cream mb-6">
            <Heart size={22} strokeWidth={1.5} className="text-burgundy" />
          </div>
          <h2 className="font-display text-3xl">Your wishlist is waiting.</h2>
          <p className="font-serif italic text-espresso/70 text-lg mt-3">
            Save the beauty you love and come back whenever you're ready.
          </p>
          <Link to="/shop" className="btn-primary mt-8">Explore beauty</Link>
        </div>
      ) : (
        <ProductGrid products={items} />
      )}
    </div>
  );
}
