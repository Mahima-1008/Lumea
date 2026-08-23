import { Link } from 'react-router-dom';

export default function EditorialBanner({
  eyebrow = 'Skin edit',
  title = 'The art of glowing skin',
  body = 'A simple ritual. A little consistency. Skin that feels like you.',
  cta = 'Shop skincare',
  ctaTo = '/skincare',
  image = 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=1200&q=80',
  reverse = false,
}) {
  return (
    <section className="container-x py-16 md:py-24">
      <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center ${reverse ? 'lg:[&>*:first-child]:order-2' : ''}`}>
        <div className="aspect-[4/5] lg:aspect-[5/6] overflow-hidden bg-cream">
          <img src={image} alt={title} className="w-full h-full object-cover" />
        </div>
        <div className="lg:pl-8">
          <div className="eyebrow mb-5">{eyebrow}</div>
          <h2 className="font-display text-4xl md:text-6xl leading-[1.05] text-espresso">{title}</h2>
          <p className="mt-6 font-serif italic text-lg md:text-xl text-espresso/75 max-w-md leading-snug">{body}</p>
          <Link to={ctaTo} className="btn-outline mt-8">{cta}</Link>
        </div>
      </div>
    </section>
  );
}
