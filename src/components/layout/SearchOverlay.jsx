import { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, X } from 'lucide-react';
import { products } from '../../data/products.js';

const TRENDING = ['Serum', 'Sunscreen', 'Lipstick', 'Foundation', 'Perfume', 'Hair mask'];

export default function SearchOverlay({ open, onClose }) {
  const [q, setQ] = useState('');

  useEffect(() => {
    if (!open) return;
    setQ('');
    document.body.style.overflow = 'hidden';
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', onKey);
    };
  }, [open, onClose]);

  const results = useMemo(() => {
    const query = q.trim().toLowerCase();
    if (!query) return [];
    return products.filter((p) =>
      p.name.toLowerCase().includes(query) ||
      p.brand.toLowerCase().includes(query) ||
      p.category.toLowerCase().includes(query) ||
      p.subcategory.toLowerCase().includes(query)
    ).slice(0, 8);
  }, [q]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[90] animate-fadeIn">
      <div className="absolute inset-0 bg-espresso/40" onClick={onClose} />
      <div className="relative bg-ivory max-h-[92vh] overflow-y-auto">
        <div className="container-x py-6">
          <div className="flex items-center justify-between mb-6">
            <span className="font-display text-xl tracking-[0.18em]">LUMÉA</span>
            <button onClick={onClose} aria-label="Close search" className="w-10 h-10 flex items-center justify-center">
              <X size={20} />
            </button>
          </div>

          <div className="flex items-center gap-3 border-b border-espresso pb-4">
            <Search size={20} className="text-espresso/60" />
            <input
              autoFocus
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search beauty, skincare, makeup..."
              className="flex-1 bg-transparent outline-none font-display text-2xl md:text-3xl placeholder:text-espresso/30"
            />
          </div>

          {!q && (
            <div className="mt-10">
              <div className="eyebrow mb-4">Trending searches</div>
              <div className="flex flex-wrap gap-2">
                {TRENDING.map((t) => (
                  <button
                    key={t}
                    onClick={() => setQ(t)}
                    className="px-4 py-2 border border-espresso/20 hover:bg-espresso hover:text-ivory transition text-sm"
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>
          )}

          {q && (
            <div className="mt-8">
              <div className="eyebrow mb-4">{results.length} result{results.length !== 1 ? 's' : ''}</div>
              {results.length === 0 ? (
                <p className="font-serif italic text-espresso/60 text-lg">
                  Nothing found for "{q}" — try a different word.
                </p>
              ) : (
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {results.map((p) => (
                    <Link
                      key={p.id}
                      to={`/product/${p.id}`}
                      onClick={onClose}
                      className="group block"
                    >
                      <div className="aspect-square bg-cream overflow-hidden">
                        <img src={p.image} alt={p.name} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition duration-500 ease-soft" />
                      </div>
                      <div className="mt-3">
                        <p className="font-mono text-[10px] tracking-widest uppercase text-espresso/60">{p.brand}</p>
                        <p className="text-sm mt-1">{p.name}</p>
                        <p className="text-sm mt-1">₹{p.price.toLocaleString('en-IN')}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
