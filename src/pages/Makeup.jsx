import { Link } from 'react-router-dom';
import EditorialBanner from '../components/home/EditorialBanner.jsx';
import ProductGrid from '../components/products/ProductGrid.jsx';
import SectionHeading from '../components/common/SectionHeading.jsx';
import { products, getProductsByCategory } from '../data/products.js';

const SUBCATS = ['Face', 'Eyes', 'Lips', 'Cheeks', 'Tools', 'Brushes'];

export default function Makeup() {
  const makeup = getProductsByCategory('Makeup');
  const bestsellers = makeup.filter((p) => p.isBestseller).concat(makeup.filter((p) => !p.isBestseller));

  return (
    <>
      <section className="bg-blush/40">
        <div className="container-x py-16 md:py-28 text-center">
          <div className="eyebrow mb-4">The makeup edit</div>
          <h1 className="font-display text-5xl md:text-7xl leading-[1.02]">
            Makeup, <em className="font-serif italic font-normal text-burgundy">your way.</em>
          </h1>
          <p className="font-serif italic text-lg md:text-xl text-espresso/75 mt-5">
            From barely-there glow to statement lips.
          </p>
        </div>
      </section>

      <section className="container-x py-14">
        <div className="grid grid-cols-3 md:grid-cols-6 gap-3 md:gap-4">
          {SUBCATS.map((s) => (
            <Link
              key={s}
              to={`/shop?category=Makeup`}
              className="text-center border border-espresso/15 py-5 hover:bg-espresso hover:text-ivory transition"
            >
              <span className="font-mono text-[11px] tracking-widest uppercase">{s}</span>
            </Link>
          ))}
        </div>
      </section>

      <EditorialBanner
        eyebrow="Editorial"
        title="Soft focus, all day."
        body="Skin-first, blurred edges, quiet colour. The new mood in makeup."
        cta="Shop the look"
        ctaTo="/shop?category=Makeup"
        image="https://images.unsplash.com/photo-1583241800698-9c2e8b3b3f13?auto=format&fit=crop&w=1200&q=80"
        reverse
      />

      <section className="container-x py-16">
        <SectionHeading eyebrow="Loved most" title="Bestselling makeup" />
        <ProductGrid products={bestsellers} />
      </section>
    </>
  );
}
