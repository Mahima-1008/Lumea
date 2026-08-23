import { Link } from 'react-router-dom';
import EditorialBanner from '../components/home/EditorialBanner.jsx';
import ProductGrid from '../components/products/ProductGrid.jsx';
import SectionHeading from '../components/common/SectionHeading.jsx';
import { getProductsByCategory } from '../data/products.js';

const SUBCATS = ['Shampoo', 'Conditioner', 'Hair Masks', 'Hair Oils', 'Styling', 'Treatments'];

export default function Haircare() {
  const haircare = getProductsByCategory('Haircare');
  return (
    <>
      <section className="bg-cream">
        <div className="container-x py-16 md:py-28">
          <div className="max-w-2xl">
            <div className="eyebrow mb-4">Haircare</div>
            <h1 className="font-display text-5xl md:text-7xl leading-[1.02]">
              Good hair days,<br />
              <em className="font-serif italic font-normal text-burgundy">curated.</em>
            </h1>
          </div>
        </div>
      </section>

      <section className="container-x py-14">
        <div className="flex flex-wrap gap-2">
          {SUBCATS.map((s) => (
            <Link key={s} to="/shop?category=Haircare" className="px-5 py-2.5 border border-espresso/20 hover:bg-espresso hover:text-ivory transition font-mono text-[11px] tracking-widest uppercase">
              {s}
            </Link>
          ))}
        </div>
      </section>

      <EditorialBanner
        eyebrow="The routine"
        title="Shine that lasts."
        body="Considered formulas for scalp, strand and ends. A weekly mask goes further than you think."
        cta="Shop haircare"
        ctaTo="/shop?category=Haircare"
        image="https://images.unsplash.com/photo-1526045478516-99145907023c?auto=format&fit=crop&w=1200&q=80"
      />

      <section className="container-x py-16">
        <SectionHeading eyebrow="Shop" title="Haircare essentials" />
        <ProductGrid products={haircare} />
      </section>
    </>
  );
}
