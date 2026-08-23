import { useMemo, useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, X } from 'lucide-react';
import FilterSidebar from '../components/products/FilterSidebar.jsx';
import ProductGrid from '../components/products/ProductGrid.jsx';
import SortDropdown from '../components/products/SortDropdown.jsx';
import { products } from '../data/products.js';

const DEFAULT_FILTERS = { categories: [], brands: [], skin: [], concerns: [], price: null, rating: null };

export default function Shop({ presetCategory, heading = 'Shop all beauty', subheading = 'Everything you need for your beauty ritual.' }) {
  const [params] = useSearchParams();
  const [filters, setFilters] = useState(DEFAULT_FILTERS);
  const [sort, setSort] = useState('featured');
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const initial = { ...DEFAULT_FILTERS };
    if (presetCategory) initial.categories = [presetCategory];
    const cat = params.get('category');
    const concern = params.get('concern');
    if (cat) initial.categories = [cat];
    if (concern) initial.concerns = [concern];
    setFilters(initial);
  }, [params, presetCategory]);

  const filtered = useMemo(() => {
    let list = [...products];
    if (filters.categories.length) list = list.filter((p) => filters.categories.includes(p.category));
    if (filters.brands.length) list = list.filter((p) => filters.brands.includes(p.brand));
    if (filters.skin.length) list = list.filter((p) => p.skinType?.some((s) => filters.skin.includes(s)));
    if (filters.concerns.length) list = list.filter((p) => p.concern?.some((c) => filters.concerns.includes(c)));
    if (filters.price) list = list.filter((p) => p.price >= filters.price.min && p.price < filters.price.max);
    if (filters.rating) list = list.filter((p) => p.rating >= filters.rating);

    switch (sort) {
      case 'newest': list.sort((a, b) => (b.isNew - a.isNew)); break;
      case 'price-asc': list.sort((a, b) => a.price - b.price); break;
      case 'price-desc': list.sort((a, b) => b.price - a.price); break;
      case 'rating': list.sort((a, b) => b.rating - a.rating); break;
      default: break;
    }
    return list;
  }, [filters, sort]);

  return (
    <div className="container-x py-10 md:py-14">
      <header className="mb-8 md:mb-12">
        <h1 className="font-display text-4xl md:text-6xl">{heading}</h1>
        <p className="font-serif italic text-espresso/70 text-lg md:text-xl mt-3 max-w-xl">{subheading}</p>
      </header>

      {/* Toolbar */}
      <div className="flex items-center justify-between gap-4 pb-5 border-b border-espresso/10 mb-8">
        <button
          onClick={() => setMobileOpen(true)}
          className="lg:hidden inline-flex items-center gap-2 border border-espresso/20 px-4 py-2.5 font-mono text-[11px] tracking-widest uppercase"
        >
          <SlidersHorizontal size={14} /> Filters
        </button>
        <p className="hidden lg:block font-mono text-[11px] tracking-widest uppercase text-espresso/60">
          {filtered.length} product{filtered.length !== 1 ? 's' : ''}
        </p>
        <SortDropdown value={sort} onChange={setSort} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[240px_1fr] gap-10">
        <div className="hidden lg:block">
          <FilterSidebar filters={filters} setFilters={setFilters} />
        </div>
        <div>
          <ProductGrid products={filtered} columns={4} />
        </div>
      </div>

      {/* Mobile filter drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[80] lg:hidden">
          <div className="absolute inset-0 bg-espresso/40" onClick={() => setMobileOpen(false)} />
          <div className="absolute right-0 top-0 h-full w-[90%] max-w-sm bg-ivory overflow-y-auto animate-slideInRight">
            <FilterSidebar filters={filters} setFilters={setFilters} onClose={() => setMobileOpen(false)} isMobile />
          </div>
        </div>
      )}
    </div>
  );
}
