import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, CheckCircle2 } from 'lucide-react';
import { useCart } from '../context/CartContext.jsx';
import CartItem from '../components/cart/CartItem.jsx';
import CartSummary from '../components/cart/CartSummary.jsx';
import Modal from '../components/common/Modal.jsx';

export default function Cart() {
  const { items, clearCart } = useCart();
  const [checkoutOpen, setCheckoutOpen] = useState(false);

  return (
    <div className="container-x py-12 md:py-16">
      <h1 className="font-display text-4xl md:text-6xl mb-10">Your bag</h1>

      {items.length === 0 ? (
        <div className="max-w-lg mx-auto text-center py-20">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-cream mb-6">
            <ShoppingBag size={22} strokeWidth={1.5} className="text-burgundy" />
          </div>
          <h2 className="font-display text-3xl">Your bag is empty.</h2>
          <p className="font-serif italic text-espresso/70 text-lg mt-3">
            A little something is waiting to be discovered.
          </p>
          <Link to="/shop" className="btn-primary mt-8">Start shopping</Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-10">
          <div>
            <div className="border-t border-espresso/10">
              {items.map((i) => <CartItem key={i.id} item={i} />)}
            </div>
            <div className="mt-6 flex items-center justify-between">
              <Link to="/shop" className="font-mono text-[11px] tracking-widest uppercase link-underline">← Continue shopping</Link>
              <button onClick={clearCart} className="font-mono text-[11px] tracking-widest uppercase text-espresso/60 hover:text-burgundy">
                Clear bag
              </button>
            </div>
          </div>
          <div>
            <CartSummary onCheckout={() => setCheckoutOpen(true)} />
          </div>
        </div>
      )}

      <Modal open={checkoutOpen} onClose={() => setCheckoutOpen(false)} maxWidth="max-w-lg">
        <div className="p-10 md:p-12 text-center">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-blush/60 mb-5">
            <CheckCircle2 size={24} className="text-burgundy" strokeWidth={1.5} />
          </div>
          <h3 className="font-display text-3xl">Checkout preview</h3>
          <p className="font-serif italic text-espresso/75 text-lg mt-3">
            This is a frontend demonstration — no payment is processed.
          </p>
          <p className="text-sm text-espresso/60 mt-4 leading-relaxed">
            In a real store, this is where you'd enter shipping details, choose delivery and complete payment.
          </p>
          <button onClick={() => setCheckoutOpen(false)} className="btn-primary mt-8">Close</button>
        </div>
      </Modal>
    </div>
  );
}
