import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { X, ShoppingBag } from 'lucide-react';
import { useCart } from '../../context/CartContext.jsx';
import CartItem from './CartItem.jsx';

export default function CartDrawer({ open, onClose }) {
  const { items, subtotal } = useCart();

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = 'hidden';
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', onKey);
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[95]">
      <div className="absolute inset-0 bg-espresso/40 animate-fadeIn" onClick={onClose} />
      <aside className="absolute right-0 top-0 h-full w-full sm:w-[440px] bg-ivory shadow-2xl animate-slideInRight flex flex-col">
        <div className="flex items-center justify-between px-6 h-16 border-b border-espresso/10">
          <h3 className="font-display text-xl">Your bag</h3>
          <button onClick={onClose} aria-label="Close cart" className="w-9 h-9 flex items-center justify-center">
            <X size={20} />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center px-8 text-center">
            <ShoppingBag size={40} strokeWidth={1} className="text-espresso/40" />
            <p className="font-display text-2xl mt-4">Your bag is empty.</p>
            <p className="font-serif italic text-espresso/60 mt-2">A little something is waiting to be discovered.</p>
            <Link to="/shop" onClick={onClose} className="btn-primary mt-6">Explore beauty</Link>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto px-6">
              {items.map((i) => <CartItem key={i.id} item={i} compact />)}
            </div>
            <div className="border-t border-espresso/10 px-6 py-5 space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[11px] tracking-widest uppercase">Subtotal</span>
                <span className="font-display text-xl">₹{subtotal.toLocaleString('en-IN')}</span>
              </div>
              <p className="font-mono text-[10px] tracking-widest uppercase text-espresso/50">
                Shipping calculated at checkout
              </p>
              <div className="flex gap-2">
                <Link to="/cart" onClick={onClose} className="btn-outline flex-1 text-center">View bag</Link>
                <Link to="/cart" onClick={onClose} className="btn-primary flex-1 text-center">Checkout</Link>
              </div>
            </div>
          </>
        )}
      </aside>
    </div>
  );
}
