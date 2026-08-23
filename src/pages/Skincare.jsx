import { Link } from 'react-router-dom';
import ProductGrid from '../components/products/ProductGrid.jsx';
import SectionHeading from '../components/common/SectionHeading.jsx';
import { getProductsByCategory } from '../data/products.js';
import { concerns } from '../data/categories.js';

const SUBCATS = ['Cleansers', 'Toners', 'Serums', 'Moisturizers', 'Sunscreen', 'Masks', 'Eye Care'];

const RITUAL = [
  { step: '01', title: 'Cleanse', text: 'Softly remove impurities. Skin should feel comfortable, never tight.' },
  { step: '02', title: 'Treat', text: 'One considered active — for the concern that matters most, right now.' },
  { step: '03', title: 'Hydrate', text: 'Layer humectants and lipids. Damp skin, absorbent formulas.' },
  { step: '04', title: 'Protect', text: 'Broad-spectrum SPF in the morning. Every single day.' },
];

export default function Skincare() {
  const skincare = getProductsByCategory('Skincare');

  return (
    <>
      <section className="bg-cream">
        <div className="container-x py-16 md:py-28">
          <div className="max-w-2xl">
            <div className="eyebrow mb-4">Skincare</div>
            <h1 className="font-display text-5xl md:text-7xl leading-[1.02]">
              Skin, <em className="font-serif italic font-normal text-burgundy">but better.</em>
            </h1>
            <p className="font-serif italic text-lg md:text-xl text-espresso/75 mt-5">
              Build a ritual that works for you.
            </p>
          </div>
        </div>
      </section>

      <section className="container-x py-14">
        <div className="flex flex-wrap gap-2">
          {SUBCATS.map((s) => (
            <Link key={s} to="/shop?category=Skincare" className="px-5 py-2.5 border border-espresso/20 hover:bg-espresso hover:text-ivory transition font-mono text-[11px] tracking-widest uppercase">
              {s}
            </Link>
          ))}
        </div>
      </section>

      <section className="container-x py-14">
        <SectionHeading eyebrow="Personalised" title="Shop by skin concern" />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {concerns.slice(0, 4).map((c) => (
            <Link key={c.slug} to={`/shop?concern=${encodeURIComponent(c.slug)}`} className="group relative aspect-square overflow-hidden bg-cream">
              <img src={c.image} alt={c.name} className="w-full h-full object-cover group-hover:scale-105 transition duration-700 ease-soft" />
              <div className="absolute inset-0 bg-espresso/30 group-hover:bg-espresso/55 transition" />
              <div className="absolute inset-0 flex items-end p-5">
                <p className="font-display text-lg md:text-2xl text-ivory">{c.name}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-blush/30">
        <div className="container-x py-16 md:py-24">
          <SectionHeading eyebrow="Method" title="Build your skincare ritual" align="center" />
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-6">
            {RITUAL.map((r) => (
              <div key={r.step} className="text-center md:text-left">
                <p className="font-mono text-[11px] tracking-widest text-rose">{r.step}</p>
                <h3 className="font-display text-3xl mt-2">{r.title}</h3>
                <p className="text-sm text-espresso/70 mt-3 leading-relaxed">{r.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-x py-16 md:py-20">
        <SectionHeading eyebrow="Shop" title="Skincare essentials" />
        <ProductGrid products={skincare} />
      </section>
    </>
  );
}
