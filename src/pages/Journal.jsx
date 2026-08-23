import { Link } from 'react-router-dom';
import { articles } from '../data/articles.js';

const CATEGORIES = ['All', 'Skincare', 'Makeup', 'Hair', 'Fragrance', 'Wellness', 'Trends'];

export default function Journal() {
  const [featured, ...rest] = articles;
  return (
    <div className="container-x py-12 md:py-16">
      <header className="mb-12 md:mb-16 max-w-2xl">
        <div className="eyebrow mb-4">The journal</div>
        <h1 className="font-display text-4xl md:text-6xl leading-[1.05]">The beauty journal</h1>
        <p className="font-serif italic text-espresso/70 text-lg md:text-xl mt-4">
          Ideas, rituals, recommendations and everything we're currently loving.
        </p>
      </header>

      <div className="flex flex-wrap gap-2 mb-10 pb-6 border-b border-espresso/10">
        {CATEGORIES.map((c, i) => (
          <button
            key={c}
            className={`px-4 py-2 font-mono text-[11px] tracking-widest uppercase border transition ${
              i === 0 ? 'bg-espresso text-ivory border-espresso' : 'border-espresso/20 hover:bg-espresso hover:text-ivory'
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      {/* Featured */}
      {featured && (
        <Link to={`/journal/${featured.slug}`} className="group block mb-16 md:mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 items-center">
            <div className="aspect-[4/5] lg:aspect-[5/6] overflow-hidden bg-cream">
              <img src={featured.image} alt={featured.title} className="w-full h-full object-cover group-hover:scale-105 transition duration-700 ease-soft" />
            </div>
            <div>
              <p className="font-mono text-[10.5px] tracking-widest uppercase text-rose">Featured · {featured.category}</p>
              <h2 className="font-display text-3xl md:text-5xl mt-3 leading-tight group-hover:text-burgundy transition">
                {featured.title}
              </h2>
              <p className="font-serif italic text-espresso/75 text-lg mt-5 leading-snug">{featured.excerpt}</p>
              <p className="font-mono text-[11px] tracking-widest uppercase mt-6 link-underline inline-block">Read article →</p>
            </div>
          </div>
        </Link>
      )}

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
        {rest.map((a) => (
          <Link key={a.slug} to={`/journal/${a.slug}`} className="group">
            <div className="aspect-[4/5] overflow-hidden bg-cream">
              <img src={a.image} alt={a.title} className="w-full h-full object-cover group-hover:scale-105 transition duration-700 ease-soft" />
            </div>
            <div className="mt-5">
              <p className="font-mono text-[10.5px] tracking-widest uppercase text-espresso/60">{a.category}</p>
              <h3 className="font-display text-xl md:text-2xl mt-2 leading-snug group-hover:text-burgundy transition">{a.title}</h3>
              <p className="text-sm text-espresso/70 mt-3 leading-relaxed">{a.excerpt}</p>
              <p className="font-mono text-[11px] tracking-widest uppercase mt-4 link-underline inline-block">Read more →</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
