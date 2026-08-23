import { Link, useParams, Navigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { getArticleBySlug, articles } from '../data/articles.js';

export default function JournalArticle() {
  const { slug } = useParams();
  const article = getArticleBySlug(slug);
  if (!article) return <Navigate to="/404" replace />;

  const related = articles.filter((a) => a.slug !== slug).slice(0, 3);

  return (
    <article>
      {/* Hero */}
      <div className="container-x pt-8 md:pt-12">
        <Link to="/journal" className="inline-flex items-center gap-2 font-mono text-[11px] tracking-widest uppercase text-espresso/60 hover:text-burgundy">
          <ArrowLeft size={14} /> Back to journal
        </Link>
        <div className="max-w-3xl mx-auto text-center mt-10 md:mt-14">
          <p className="font-mono text-[11px] tracking-widest uppercase text-rose">{article.category}</p>
          <h1 className="font-display text-4xl md:text-6xl leading-[1.05] mt-4">{article.title}</h1>
          <p className="font-serif italic text-espresso/70 text-lg md:text-xl mt-5">{article.excerpt}</p>
        </div>
      </div>

      <div className="container-x mt-10 md:mt-14">
        <div className="aspect-[16/9] md:aspect-[21/9] overflow-hidden bg-cream">
          <img src={article.image} alt={article.title} className="w-full h-full object-cover" />
        </div>
      </div>

      <div className="container-x py-14 md:py-20">
        <div className="max-w-2xl mx-auto">
          {article.body.split('\n\n').map((para, i) => (
            <p key={i} className="text-base md:text-lg text-espresso/85 leading-[1.85] mb-6 font-sans">
              {para}
            </p>
          ))}
          <div className="mt-10 pt-8 border-t border-espresso/10 text-center">
            <p className="font-serif italic text-espresso/70">— The LUMÉA editors</p>
          </div>
        </div>
      </div>

      {/* Related */}
      <section className="bg-cream">
        <div className="container-x py-16 md:py-20">
          <div className="mb-10 md:mb-12">
            <div className="eyebrow mb-3">Keep reading</div>
            <h2 className="font-display text-3xl md:text-4xl">More from the journal</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {related.map((a) => (
              <Link key={a.slug} to={`/journal/${a.slug}`} className="group">
                <div className="aspect-[4/5] overflow-hidden bg-ivory">
                  <img src={a.image} alt={a.title} className="w-full h-full object-cover group-hover:scale-105 transition duration-700 ease-soft" />
                </div>
                <div className="mt-4">
                  <p className="font-mono text-[10.5px] tracking-widest uppercase text-espresso/60">{a.category}</p>
                  <h3 className="font-display text-xl mt-2 leading-snug group-hover:text-burgundy transition">{a.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </article>
  );
}
