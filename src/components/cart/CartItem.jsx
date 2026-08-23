import { X, Minus, Plus } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext.jsx';

export default function CartItem({ item, compact = false }) {
  const { updateQty, removeItem } = useCart();
  return (
    <div className={`flex gap-4 py-5 border-b border-espresso/10 ${compact ? '' : 'md:gap-6'}`}>
      <Link to={`/product/${item.id}`} className={`shrink-0 bg-cream overflow-hidden ${compact ? 'w-20 h-24' : 'w-24 h-28 md:w-28 md:h-32'}`}>
        <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
      </Link>
      <div className="flex-1 min-w-0">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <p className="font-mono text-[10.5px] tracking-widest uppercase text-espresso/60">{item.brand}</p>
            <Link to={`/product/${item.id}`} className="block text-sm md:text-base mt-1 truncate hover:text-burgundy">
              {item.name}
            </Link>
          </div>
          <button onClick={() => removeItem(item.id)} aria-label="Remove" className="text-espresso/60 hover:text-burgundy p-1">
            <X size={16} />
          </button>
        </div>
        <div className="flex items-center justify-between mt-3">
          <div className="inline-flex items-center border border-espresso/20">
            <button onClick={() => updateQty(item.id, item.qty - 1)} className="w-8 h-8 flex items-center justify-center" aria-label="Decrease">
              <Minus size={12} />
            </button>
            <span className="w-8 text-center text-sm">{item.qty}</span>
            <button onClick={() => updateQty(item.id, item.qty + 1)} className="w-8 h-8 flex items-center justify-center" aria-label="Increase">
              <Plus size={12} />
            </button>
          </div>
          <span className="text-sm">₹{(item.price * item.qty).toLocaleString('en-IN')}</span>
        </div>
      </div>
    </div>
  );
}
