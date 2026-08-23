import ProductGrid from '../components/products/ProductGrid.jsx';
import SectionHeading from '../components/common/SectionHeading.jsx';
import { products } from '../data/products.js';

const OFFERS = [
  { title: 'Up to 40% off', sub: 'Selected beauty edits', tone: 'bg-burgundy text-ivory' },
  { title: 'Buy 2, get 1', sub: 'On skincare essentials', tone: 'bg-espresso text-ivory' },
  { title: 'First order — 15% off', sub: 'Code WELCOME15', tone: 'bg-blush text-espresso' },
  { title: 'Free shipping above ₹999', sub: 'Across India', tone: 'bg-cream text-espresso' },
];

export default function Offers() {
  const deals = [...products].sort((a, b) => b.discount - a.discount).slice(0, 8);
  return (
    <>
      <section className="bg-blush/50">
        <div className="container-x py-16 md:py-24 text-center">
          <div className="eyebrow mb-4">Offers</div>
          <h1 className="font-display text-4xl md:text-6xl leading-[1.05] max-w-3xl mx-auto">
            Beauty, with a little more reason to <em className="font-serif italic font-normal text-burgundy">indulge.</em>
          </h1>
        </div>
      </section>

      <section className="container-x py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {OFFERS.map((o) => (
            <div key={o.title} className={`${o.tone} p-8 md:p-10 aspect-[4/3] flex flex-col justify-between`}>
              <span className="font-mono text-[10.5px] tracking-widest uppercase opacity-70">Offer</span>
              <div>
                <h3 className="font-display text-2xl md:text-3xl leading-tight">{o.title}</h3>
                <p className="font-serif italic mt-2 opacity-85">{o.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="container-x py-16">
        <SectionHeading eyebrow="Today only" title="Deals of the day" />
        <ProductGrid products={deals} />
      </section>
    </>
  );
}
