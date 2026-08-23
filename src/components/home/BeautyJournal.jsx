import { Link } from 'react-router-dom';
import SectionHeading from '../common/SectionHeading.jsx';
import { articles } from '../../data/articles.js';

export default function BeautyJournal() {
  const featured = articles.slice(0, 3);
  return (
    <section className="container-x py-16 md:py-24">
      <SectionHeading eyebrow="Read" title="From the beauty journal" viewAll="/journal" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {featured.map((a) => (
          <Link key={a.slug} to={`/journal/${a.slug}`} className="group">
            <div className="aspect-[4/5] overflow-hidden bg-cream">
              <img src={a.image} alt={a.title} className="w-full h-full object-cover group-hover:scale-105 transition duration-700 ease-soft" />
            </div>
            <div className="mt-5">
              <p className="font-mono text-[10.5px] tracking-widest uppercase text-espresso/60">{a.category}</p>
              <h3 className="font-display text-xl md:text-2xl mt-2 leading-snug group-hover:text-burgundy transition">{a.title}</h3>
              <p className="text-sm text-espresso/70 mt-3 leading-relaxed">{a.excerpt}</p>
              <p className="font-mono text-[11px] tracking-widest uppercase mt-4 link-underline inline-block">Read article →</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
