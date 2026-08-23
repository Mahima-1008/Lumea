import { useState } from 'react';
import { X, ChevronDown } from 'lucide-react';
import { brands } from '../../data/brands.js';

const CATEGORIES = ['Makeup', 'Skincare', 'Haircare', 'Fragrance', 'Body', 'Wellness'];
const PRICE_RANGES = [
  { label: 'Under ₹500', min: 0, max: 500 },
  { label: '₹500 – ₹1,000', min: 500, max: 1000 },
  { label: '₹1,000 – ₹2,000', min: 1000, max: 2000 },
  { label: '₹2,000+', min: 2000, max: Infinity },
];
const RATINGS = [4, 3];
const SKIN = ['Dry', 'Oily', 'Combination', 'Normal', 'Sensitive'];
const CONCERNS = ['Acne', 'Dryness', 'Dullness', 'Pigmentation', 'Frizz', 'Hair fall'];

function Section({ title, children, defaultOpen = true }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border-b border-espresso/10 py-5">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between">
        <span className="font-mono text-[11px] tracking-widest uppercase">{title}</span>
        <ChevronDown size={16} className={`transition ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && <div className="mt-4 space-y-2.5">{children}</div>}
    </div>
  );
}

function Check({ label, checked, onChange }) {
  return (
    <label className="flex items-center gap-3 text-sm cursor-pointer group">
      <span className={`w-4 h-4 border transition flex items-center justify-center ${checked ? 'bg-espresso border-espresso' : 'border-espresso/30 group-hover:border-espresso'}`}>
        {checked && <span className="w-2 h-2 bg-ivory" />}
      </span>
      <input type="checkbox" checked={checked} onChange={onChange} className="sr-only" />
      <span className="text-espresso/80">{label}</span>
    </label>
  );
}

export default function FilterSidebar({ filters, setFilters, onClose, isMobile = false }) {
  const toggle = (key, value) => {
    setFilters((f) => {
      const arr = f[key];
      return { ...f, [key]: arr.includes(value) ? arr.filter((v) => v !== value) : [...arr, value] };
    });
  };
  const setPrice = (range) => setFilters((f) => ({ ...f, price: f.price?.label === range.label ? null : range }));
  const setRating = (r) => setFilters((f) => ({ ...f, rating: f.rating === r ? null : r }));
  const reset = () => setFilters({ categories: [], brands: [], skin: [], concerns: [], price: null, rating: null });

  return (
    <aside className={isMobile ? 'p-6' : ''}>
      {isMobile && (
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-display text-2xl">Filters</h3>
          <button onClick={onClose} aria-label="Close filters"><X size={20} /></button>
        </div>
      )}
      <div className="flex items-center justify-between mb-2">
        <span className="eyebrow">Refine</span>
        <button onClick={reset} className="font-mono text-[10px] tracking-widest uppercase text-espresso/60 hover:text-burgundy">Reset</button>
      </div>

      <Section title="Category">
        {CATEGORIES.map((c) => (
          <Check key={c} label={c} checked={filters.categories.includes(c)} onChange={() => toggle('categories', c)} />
        ))}
      </Section>

      <Section title="Price">
        {PRICE_RANGES.map((r) => (
          <Check key={r.label} label={r.label} checked={filters.price?.label === r.label} onChange={() => setPrice(r)} />
        ))}
      </Section>

      <Section title="Rating">
        {RATINGS.map((r) => (
          <Check key={r} label={`${r}★ & above`} checked={filters.rating === r} onChange={() => setRating(r)} />
        ))}
      </Section>

      <Section title="Skin Type">
        {SKIN.map((s) => (
          <Check key={s} label={s} checked={filters.skin.includes(s)} onChange={() => toggle('skin', s)} />
        ))}
      </Section>

      <Section title="Concern">
        {CONCERNS.map((c) => (
          <Check key={c} label={c} checked={filters.concerns.includes(c)} onChange={() => toggle('concerns', c)} />
        ))}
      </Section>

      <Section title="Brand" defaultOpen={false}>
        {brands.map((b) => (
          <Check key={b.name} label={b.name} checked={filters.brands.includes(b.name)} onChange={() => toggle('brands', b.name)} />
        ))}
      </Section>

      {isMobile && (
        <button onClick={onClose} className="btn-primary w-full mt-6">Show results</button>
      )}
    </aside>
  );
}
