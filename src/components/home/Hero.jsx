import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="bg-ivory">
      <div className="container-x pt-8 md:pt-14 pb-14 md:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          <div className="lg:col-span-5 order-2 lg:order-1 animate-fadeUp">
            <div className="eyebrow mb-6">The new beauty edit</div>
            <h1 className="font-display text-[42px] leading-[1.02] sm:text-6xl lg:text-[76px] lg:leading-[0.98] text-espresso">
              Your beauty,<br />
              <em className="font-serif italic font-normal text-burgundy">your ritual.</em>
            </h1>
            <p className="mt-6 text-base md:text-lg text-espresso/75 max-w-md leading-relaxed">
              Thoughtfully chosen beauty essentials for every version of you.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/shop" className="btn-primary">Shop now</Link>
              <Link to="/journal" className="btn-outline">Explore the edit</Link>
            </div>
          </div>

          <div className="lg:col-span-7 order-1 lg:order-2 relative">
            <div className="relative aspect-[4/5] md:aspect-[5/6] lg:aspect-[6/7] overflow-hidden bg-cream">
              <img
                src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=1400&q=80"
                alt="Editorial beauty portrait"
                className="w-full h-full object-cover animate-[scaleIn_1.2s_ease-out_both]"
                style={{ transform: 'scale(1.02)' }}
              />
              <div className="absolute left-5 bottom-5 md:left-8 md:bottom-8 bg-ivory/95 backdrop-blur-sm px-5 py-4">
                <p className="font-mono text-[10px] tracking-widest uppercase text-espresso/60">Limited edit</p>
                <p className="font-display text-2xl md:text-3xl text-burgundy mt-1">Up to 30% off</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
