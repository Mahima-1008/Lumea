import { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import SectionHeading from '../common/SectionHeading.jsx';
import ProductCard from '../products/ProductCard.jsx';

export default function ProductCarousel({ eyebrow, title, viewAll, products }) {
  const ref = useRef(null);
  const scroll = (dir) => {
    if (!ref.current) return;
    const w = ref.current.clientWidth * 0.8;
    ref.current.scrollBy({ left: dir * w, behavior: 'smooth' });
  };
  return (
    <section className="container-x py-16 md:py-24">
      <div className="flex items-end justify-between mb-8 md:mb-12">
        <div>
          {eyebrow && <div className="eyebrow mb-3">{eyebrow}</div>}
          <h2 className="font-display text-3xl md:text-5xl">{title}</h2>
        </div>
        <div className="flex items-center gap-4">
          {viewAll && (
            <a href={viewAll} className="hidden md:inline-block font-mono text-[11px] tracking-widest uppercase link-underline">View all →</a>
          )}
          <div className="hidden md:flex gap-2">
            <button onClick={() => scroll(-1)} aria-label="Previous" className="w-10 h-10 border border-espresso/20 hover:bg-espresso hover:text-ivory transition flex items-center justify-center">
              <ChevronLeft size={16} />
            </button>
            <button onClick={() => scroll(1)} aria-label="Next" className="w-10 h-10 border border-espresso/20 hover:bg-espresso hover:text-ivory transition flex items-center justify-center">
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>

      <div ref={ref} className="flex gap-4 md:gap-6 overflow-x-auto hide-scrollbar snap-x snap-mandatory -mx-5 px-5 md:mx-0 md:px-0">
        {products.map((p) => (
          <div key={p.id} className="snap-start shrink-0 w-[46%] sm:w-[32%] md:w-[24%] lg:w-[23%]">
            <ProductCard product={p} />
          </div>
        ))}
      </div>
    </section>
  );
}
