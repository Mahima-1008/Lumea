import { useState } from 'react';
import { Link } from 'react-router-dom';
import Modal from '../common/Modal.jsx';
import Button from '../common/Button.jsx';
import ProductRating from './ProductRating.jsx';
import WishlistButton from './WishlistButton.jsx';
import { useCart } from '../../context/CartContext.jsx';

export default function QuickView({ open, onClose, product }) {
  const [qty, setQty] = useState(1);
  const { addItem } = useCart();
  if (!product) return null;

  const add = () => { addItem(product, qty); onClose(); };

  return (
    <Modal open={open} onClose={onClose} maxWidth="max-w-4xl">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="relative aspect-square bg-cream">
          <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
          <WishlistButton id={product.id} className="absolute top-4 right-4" />
        </div>
        <div className="p-8 md:p-10 flex flex-col">
          <p className="font-mono text-[11px] tracking-widest uppercase text-espresso/60">{product.brand}</p>
          <h3 className="font-display text-2xl md:text-3xl mt-2">{product.name}</h3>
          <div className="mt-3"><ProductRating rating={product.rating} reviews={product.reviews} size={14} /></div>
          <div className="flex items-baseline gap-3 mt-4">
            <span className="text-xl">₹{product.price.toLocaleString('en-IN')}</span>
            {product.originalPrice > product.price && (
              <>
                <span className="text-espresso/40 line-through">₹{product.originalPrice.toLocaleString('en-IN')}</span>
                <span className="font-mono text-xs text-rose">-{product.discount}%</span>
              </>
            )}
          </div>
          <p className="text-sm text-espresso/75 leading-relaxed mt-5">{product.description}</p>

          <div className="mt-6">
            <div className="eyebrow mb-2">Quantity</div>
            <div className="inline-flex items-center border border-espresso/20">
              <button className="w-10 h-10" onClick={() => setQty((q) => Math.max(1, q - 1))}>−</button>
              <span className="w-10 text-center">{qty}</span>
              <button className="w-10 h-10" onClick={() => setQty((q) => q + 1)}>+</button>
            </div>
          </div>

          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <Button onClick={add} className="flex-1">Add to bag</Button>
            <Link to={`/product/${product.id}`} onClick={onClose} className="btn-outline flex-1 text-center">View details</Link>
          </div>
        </div>
      </div>
    </Modal>
  );
}
