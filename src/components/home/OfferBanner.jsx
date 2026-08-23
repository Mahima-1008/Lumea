import { Link } from 'react-router-dom';

export default function OfferBanner() {
  return (
    <section className="bg-blush/50">
      <div className="container-x py-16 md:py-24 text-center">
        <div className="eyebrow mb-4">A welcome gift</div>
        <h2 className="font-display text-3xl md:text-5xl text-espresso">A little beauty treat</h2>
        <p className="font-serif italic text-lg md:text-xl text-espresso/75 mt-4">
          Get 15% off your first order
        </p>
        <div className="mt-6 inline-flex items-center gap-3 border border-espresso/25 px-5 py-3">
          <span className="font-mono text-[10px] tracking-widest uppercase text-espresso/60">Code</span>
          <span className="font-display text-xl tracking-[0.15em]">WELCOME15</span>
        </div>
        <div className="mt-8">
          <Link to="/shop" className="btn-primary">Shop now</Link>
        </div>
      </div>
    </section>
  );
}
