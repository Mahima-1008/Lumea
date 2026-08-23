import SectionHeading from '../common/SectionHeading.jsx';
import { trending } from '../../data/categories.js';

export default function TrendingSection() {
  return (
    <section className="container-x py-16 md:py-24">
      <SectionHeading eyebrow="Currently loved" title="Trending now" viewAll="/shop" />
      <div className="flex md:grid md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-5 overflow-x-auto hide-scrollbar snap-x snap-mandatory -mx-5 px-5 md:mx-0 md:px-0">
        {trending.map((t, i) => (
          <a key={t.name} href="/shop" className="group snap-start shrink-0 w-56 md:w-auto relative aspect-[4/5] overflow-hidden bg-cream">
            <img src={t.image} alt={t.name} className="w-full h-full object-cover group-hover:scale-105 transition duration-700 ease-soft" />
            <div className="absolute inset-0 bg-gradient-to-t from-espresso/70 via-espresso/10 to-transparent" />
            <div className="absolute left-4 bottom-4 right-4">
              <p className="font-mono text-[10px] tracking-widest uppercase text-ivory/80">0{i + 1}</p>
              <p className="font-display text-xl md:text-2xl text-ivory mt-1">{t.name}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
