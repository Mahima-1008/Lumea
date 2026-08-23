import { Link } from 'react-router-dom';
import SectionHeading from '../common/SectionHeading.jsx';
import { concerns } from '../../data/categories.js';

export default function ConcernSection() {
  return (
    <section className="container-x py-16 md:py-24">
      <SectionHeading eyebrow="Personalised" title="Beauty, by concern" />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
        {concerns.map((c) => (
          <Link
            key={c.slug}
            to={`/shop?concern=${encodeURIComponent(c.slug)}`}
            className="group relative aspect-square overflow-hidden bg-cream"
          >
            <img src={c.image} alt={c.name} className="w-full h-full object-cover group-hover:scale-105 transition duration-700 ease-soft" />
            <div className="absolute inset-0 bg-espresso/25 group-hover:bg-espresso/55 transition duration-500" />
            <div className="absolute inset-0 flex items-end p-5">
              <div className="translate-y-1 group-hover:-translate-y-1 transition duration-500 ease-soft">
                <p className="font-display text-lg md:text-2xl text-ivory leading-tight">{c.name}</p>
                <p className="font-mono text-[10px] tracking-widest uppercase text-ivory/70 mt-1 opacity-0 group-hover:opacity-100 transition duration-500">
                  Shop now →
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
