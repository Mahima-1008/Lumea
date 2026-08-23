import { Link } from 'react-router-dom';
import ProductGrid from '../components/products/ProductGrid.jsx';
import SectionHeading from '../components/common/SectionHeading.jsx';
import { getProductsByCategory } from '../data/products.js';

const SUBCATS = ['Women', 'Men', 'Unisex', 'Eau de Parfum', 'Body Mists', 'Discovery Sets'];

const FAMILIES = [
  { name: 'Floral', note: 'Rose, jasmine, peony', image: 'photo-1591375275624-c04572589dc9' },
  { name: 'Woody', note: 'Cedar, sandalwood, vetiver', image: 'photo-1615634260167-c8cdede054de' },
  { name: 'Fresh', note: 'Citrus, sea, green', image: 'photo-1547887537-6158d64c35b3' },
  { name: 'Amber', note: 'Resin, spice, warmth', image: 'photo-1541643600914-78b084683601' },
  { name: 'Gourmand', note: 'Vanilla, cocoa, caramel', image: 'photo-1615634260167-c8cdede054de' },
  { name: 'Citrus', note: 'Bergamot, lemon, neroli', image: 'photo-1547887537-6158d64c35b3' },
];

export default function Fragrance() {
  const fragrance = getProductsByCategory('Fragrance');

  return (
    <>
      <section className="relative bg-espresso text-ivory overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=1600&q=80"
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-45"
        />
        <div className="relative container-x py-24 md:py-40">
          <div className="max-w-2xl">
            <div className="font-mono text-[11px] tracking-widest uppercase text-blush mb-5">Fragrance</div>
            <h1 className="font-display text-5xl md:text-7xl leading-[1.02]">
              Find a fragrance that <em className="font-serif italic font-normal text-blush">feels like you.</em>
            </h1>
            <p className="font-serif italic text-lg md:text-xl text-ivory/80 mt-6 max-w-lg">
              Considered scents, layered with intention. A house built on quiet character.
            </p>
          </div>
        </div>
      </section>

      <section className="container-x py-14">
        <div className="flex flex-wrap gap-2">
          {SUBCATS.map((s) => (
            <Link key={s} to="/shop?category=Fragrance" className="px-5 py-2.5 border border-espresso/20 hover:bg-espresso hover:text-ivory transition font-mono text-[11px] tracking-widest uppercase">
              {s}
            </Link>
          ))}
        </div>
      </section>

      <section className="container-x py-16">
        <SectionHeading eyebrow="Discover" title="Explore fragrance families" />
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-5">
          {FAMILIES.map((f) => (
            <div key={f.name} className="group relative aspect-[5/6] overflow-hidden bg-cream cursor-pointer">
              <img src={`https://images.unsplash.com/${f.image}?auto=format&fit=crop&w=800&q=80`} alt={f.name} className="w-full h-full object-cover group-hover:scale-105 transition duration-700 ease-soft" />
              <div className="absolute inset-0 bg-gradient-to-t from-espresso/85 via-espresso/20 to-transparent" />
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <p className="font-display text-2xl md:text-3xl text-ivory">{f.name}</p>
                <p className="font-serif italic text-ivory/80 mt-1">{f.note}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="container-x py-16">
        <SectionHeading eyebrow="Shop" title="Fragrance" />
        <ProductGrid products={fragrance} />
      </section>
    </>
  );
}
