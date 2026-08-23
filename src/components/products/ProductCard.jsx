import { useState } from 'react';
import { Link } from 'react-router-dom';
import WishlistButton from './WishlistButton.jsx';
import ProductRating from './ProductRating.jsx';
import Badge from '../common/Badge.jsx';
import QuickView from './QuickView.jsx';
import { useCart } from '../../context/CartContext.jsx';

export default function ProductCard({ product }) {
  const [hover, setHover] = useState(false);
  const [qv, setQv] = useState(false);
  const { addItem } = useCart();

  const openQV = (e) => { e.preventDefault(); e.stopPropagation(); setQv(true); };
  const quickAdd = (e) => { e.preventDefault(); e.stopPropagation(); addItem(product, 1); };

  return (
    <>
      <div
        className="group relative"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <Link to={`/product/${product.id}`} className="block">
          <div className="relative aspect-[4/5] bg-cream overflow-hidden">
            <img
              src={product.image}
              alt={product.name}
              loading="lazy"
              className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-soft ${hover && product.secondaryImage ? 'opacity-0 scale-105' : 'opacity-100 scale-100'}`}
            />
            {product.secondaryImage && (
              <img
                src={product.secondaryImage}
                alt=""
                loading="lazy"
                className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-soft ${hover ? 'opacity-100 scale-105' : 'opacity-0'}`}
              />
            )}

            {/* Badges */}
            <div className="absolute top-3 left-3 flex flex-col gap-1.5">
              {product.isNew && <Badge tone="ivory">New</Badge>}
              {product.isBestseller && <Badge tone="burgundy">Bestseller</Badge>}
              {product.discount >= 15 && <Badge tone="espresso">-{product.discount}%</Badge>}
            </div>

            <WishlistButton id={product.id} className="absolute top-3 right-3" />

            {/* Quick add — hover on desktop, always visible on mobile */}
            <div className={`absolute inset-x-3 bottom-3 flex gap-2 transition-all duration-300 ease-soft
              md:opacity-0 md:translate-y-2 md:group-hover:opacity-100 md:group-hover:translate-y-0`}>
              <button
                onClick={quickAdd}
                className="flex-1 bg-espresso text-ivory font-mono text-[10.5px] tracking-widest uppercase py-3 hover:bg-burgundy transition"
              >
                Quick Add
              </button>
              <button
                onClick={openQV}
                aria-label="Quick view"
                className="w-11 bg-ivory text-espresso font-mono text-[10.5px] tracking-widest uppercase py-3 hover:bg-cream transition hidden sm:block"
              >
                +
              </button>
            </div>
          </div>

          <div className="pt-4 pb-6">
            <p className="font-mono text-[10.5px] tracking-widest uppercase text-espresso/60">{product.brand}</p>
            <h3 className="text-[15px] text-espresso mt-1.5 leading-snug">{product.name}</h3>
            <div className="mt-2"><ProductRating rating={product.rating} reviews={product.reviews} /></div>
            <div className="flex items-baseline gap-2 mt-2.5">
              <span className="text-[15px] text-espresso">₹{product.price.toLocaleString('en-IN')}</span>
              {product.originalPrice > product.price && (
                <>
                  <span className="text-[13px] text-espresso/40 line-through">₹{product.originalPrice.toLocaleString('en-IN')}</span>
                  <span className="font-mono text-[10.5px] text-rose">-{product.discount}%</span>
                </>
              )}
            </div>
          </div>
        </Link>
      </div>
      <QuickView open={qv} onClose={() => setQv(false)} product={product} />
    </>
  );
}
