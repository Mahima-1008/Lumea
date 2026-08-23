import { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Minus, Plus, Truck, RotateCcw, ShieldCheck, ChevronDown } from 'lucide-react';
import { getProductById, products } from '../data/products.js';
import { useCart } from '../context/CartContext.jsx';
import { useWishlist } from '../context/WishlistContext.jsx';
import ProductRating from '../components/products/ProductRating.jsx';
import ProductCarousel from '../components/home/ProductCarousel.jsx';
import Badge from '../components/common/Badge.jsx';

function Accordion({ title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border-b border-espresso/10">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between py-5">
        <span className="font-mono text-[11px] tracking-widest uppercase">{title}</span>
        <ChevronDown size={16} className={`transition ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && <div className="pb-5 text-sm text-espresso/75 leading-relaxed">{children}</div>}
    </div>
  );
}

export default function ProductDetails() {
  const { id } = useParams();
  const product = getProductById(id);
  const { addItem } = useCart();
  const { toggle, has } = useWishlist();
  const [qty, setQty] = useState(1);
  const [activeImg, setActiveImg] = useState(0);

  if (!product) return <Navigate to="/404" replace />;

  const gallery = [product.image, product.secondaryImage, product.image].filter(Boolean);
  const wished = has(product.id);
  const recommended = products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 4);

  return (
    <div className="container-x py-8 md:py-12">
      {/* Breadcrumbs */}
      <nav className="font-mono text-[10.5px] tracking-widest uppercase text-espresso/50 mb-8">
        <Link to="/" className="hover:text-espresso">Home</Link>
        <span className="mx-2">/</span>
        <Link to="/shop" className="hover:text-espresso">Shop</Link>
        <span className="mx-2">/</span>
        <span className="text-espresso">{product.name}</span>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-10 lg:gap-16">
        {/* Gallery */}
        <div>
          <div className="relative aspect-[4/5] bg-cream overflow-hidden">
            <img src={gallery[activeImg]} alt={product.name} className="w-full h-full object-cover" />
            <div className="absolute top-4 left-4 flex flex-col gap-1.5">
              {product.isNew && <Badge tone="ivory">New</Badge>}
              {product.isBestseller && <Badge tone="burgundy">Bestseller</Badge>}
            </div>
          </div>
          <div className="mt-3 grid grid-cols-4 gap-3">
            {gallery.map((src, i) => (
              <button
                key={i}
                onClick={() => setActiveImg(i)}
                className={`aspect-square bg-cream overflow-hidden border transition ${activeImg === i ? 'border-espresso' : 'border-transparent'}`}
              >
                <img src={src} alt="" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        {/* Info */}
        <div className="lg:pt-4">
          <p className="font-mono text-[11px] tracking-widest uppercase text-espresso/60">{product.brand}</p>
          <h1 className="font-display text-3xl md:text-5xl mt-3 leading-tight">{product.name}</h1>
          <div className="mt-4 flex items-center gap-3">
            <ProductRating rating={product.rating} reviews={product.reviews} size={14} />
            <span className="text-espresso/40 text-sm">·</span>
            <span className="font-mono text-[10.5px] tracking-widest uppercase text-espresso/60">
              {product.category}
            </span>
          </div>

          <div className="flex items-baseline gap-3 mt-6">
            <span className="font-display text-3xl text-espresso">₹{product.price.toLocaleString('en-IN')}</span>
            {product.originalPrice > product.price && (
              <>
                <span className="text-espresso/40 line-through">₹{product.originalPrice.toLocaleString('en-IN')}</span>
                <span className="font-mono text-xs text-rose">-{product.discount}% off</span>
              </>
            )}
          </div>
          <p className="font-mono text-[10.5px] tracking-widest uppercase text-espresso/50 mt-1">
            Inclusive of all taxes
          </p>

          <p className="text-base text-espresso/80 leading-relaxed mt-6">{product.description}</p>

          {/* Qty */}
          <div className="mt-8">
            <div className="eyebrow mb-3">Quantity</div>
            <div className="inline-flex items-center border border-espresso/25">
              <button onClick={() => setQty((q) => Math.max(1, q - 1))} className="w-11 h-11 flex items-center justify-center" aria-label="Decrease"><Minus size={14} /></button>
              <span className="w-11 text-center">{qty}</span>
              <button onClick={() => setQty((q) => q + 1)} className="w-11 h-11 flex items-center justify-center" aria-label="Increase"><Plus size={14} /></button>
            </div>
          </div>

          {/* Actions */}
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <button onClick={() => addItem(product, qty)} className="btn-primary flex-1">Add to bag</button>
            <button onClick={() => toggle(product.id)} className="btn-outline flex-1">
              {wished ? 'Saved to wishlist' : 'Add to wishlist'}
            </button>
          </div>

          {/* Trust icons */}
          <div className="mt-8 grid grid-cols-3 gap-4 py-6 border-y border-espresso/10">
            <TrustItem icon={<Truck size={18} />} label="Free shipping" sub="Above ₹999" />
            <TrustItem icon={<RotateCcw size={18} />} label="Easy returns" sub="15 days" />
            <TrustItem icon={<ShieldCheck size={18} />} label="100% authentic" sub="Sourced direct" />
          </div>

          {/* Accordions */}
          <div className="mt-4">
            <Accordion title="Product details" defaultOpen>
              <p>{product.description}</p>
              <p className="mt-3 text-espresso/60">Category: {product.category} · {product.subcategory}</p>
            </Accordion>
            <Accordion title="How to use">
              <p>Apply to clean skin morning and night, or as needed. Start slowly if introducing an active for the first time — every other day for the first week, then daily as tolerated. Always follow with SPF in the morning.</p>
            </Accordion>
            <Accordion title="Ingredients">
              <p>A considered blend of active and supporting ingredients. Full INCI list available on the packaging. Free from parabens, sulphates and mineral oils.</p>
            </Accordion>
            <Accordion title="Delivery & returns">
              <p>Free shipping on all orders above ₹999. Standard delivery in 3–5 business days across India. Easy returns within 15 days of delivery for unopened items.</p>
            </Accordion>
          </div>
        </div>
      </div>

      {/* Recommendations */}
      {recommended.length > 0 && (
        <ProductCarousel eyebrow="Also worth trying" title="You may also like" products={recommended} />
      )}
    </div>
  );
}

function TrustItem({ icon, label, sub }) {
  return (
    <div className="text-center">
      <div className="flex justify-center text-burgundy">{icon}</div>
      <p className="font-mono text-[10.5px] tracking-widest uppercase mt-2">{label}</p>
      <p className="text-xs text-espresso/60 mt-0.5">{sub}</p>
    </div>
  );
}
