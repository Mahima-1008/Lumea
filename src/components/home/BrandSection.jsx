import SectionHeading from '../common/SectionHeading.jsx';
import { brands } from '../../data/brands.js';

export default function BrandSection() {
  return (
    <section className="bg-cream">
      <div className="container-x py-16 md:py-24">
        <SectionHeading eyebrow="The house" title="Brands worth knowing" align="center" />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-espresso/10 border border-espresso/10">
          {brands.map((b) => (
            <div key={b.name} className="bg-cream aspect-[3/2] flex flex-col items-center justify-center group cursor-pointer hover:bg-ivory transition p-4">
              <span className="font-display text-2xl md:text-3xl tracking-[0.15em] text-espresso group-hover:text-burgundy transition">{b.name}</span>
              <span className="font-serif italic text-espresso/60 text-sm mt-2">{b.tagline}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
