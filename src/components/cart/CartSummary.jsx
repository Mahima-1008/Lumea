import { useCart } from '../../context/CartContext.jsx';

export default function CartSummary({ onCheckout, showButton = true }) {
  const { subtotal } = useCart();
  const shipping = subtotal > 999 || subtotal === 0 ? 0 : 99;
  const discount = 0;
  const total = subtotal + shipping - discount;

  return (
    <div className="bg-cream p-6 md:p-8">
      <h3 className="font-display text-2xl mb-6">Order summary</h3>
      <div className="space-y-3 text-sm">
        <Row label="Subtotal" value={`₹${subtotal.toLocaleString('en-IN')}`} />
        <Row label="Discount" value={`− ₹${discount.toLocaleString('en-IN')}`} />
        <Row label="Shipping" value={shipping === 0 ? 'Free' : `₹${shipping}`} />
      </div>
      <div className="border-t border-espresso/15 my-5" />
      <Row label={<span className="font-display text-lg">Total</span>} value={<span className="font-display text-lg">₹{total.toLocaleString('en-IN')}</span>} />
      {subtotal > 0 && subtotal < 999 && (
        <p className="font-mono text-[10.5px] tracking-widest uppercase text-rose mt-4">
          Add ₹{(999 - subtotal).toLocaleString('en-IN')} more for free shipping
        </p>
      )}
      {showButton && (
        <button
          onClick={onCheckout}
          disabled={subtotal === 0}
          className="btn-primary w-full mt-6 disabled:opacity-40 disabled:cursor-not-allowed"
        >
          Proceed to checkout
        </button>
      )}
    </div>
  );
}

function Row({ label, value }) {
  return (
    <div className="flex items-center justify-between">
      <span className="text-espresso/70">{label}</span>
      <span>{value}</span>
    </div>
  );
}
