import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import SectionHeading from '../common/SectionHeading.jsx';
import { categories } from '../../data/categories.js';

export default function CategorySection() {
  return (
    <section className="container-x py-16 md:py-24">
      <SectionHeading eyebrow="Explore" title="Shop by category" viewAll="/shop" />
      <div className="flex md:grid md:grid-cols-6 gap-4 md:gap-5 overflow-x-auto hide-scrollbar snap-x snap-mandatory -mx-5 px-5 md:mx-0 md:px-0">
        {categories.map((c) => (
          <Link key={c.slug} to={c.path} className="group snap-start shrink-0 w-40 md:w-auto">
            <div className="aspect-[4/5] overflow-hidden bg-cream">
              <img src={c.image} alt={c.name} className="w-full h-full object-cover group-hover:scale-105 transition duration-700 ease-soft" />
            </div>
            <div className="mt-3 flex items-center justify-between">
              <span className="text-sm md:text-[15px]">{c.name}</span>
              <ArrowUpRight size={16} className="text-espresso/60 group-hover:text-burgundy group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition" />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
