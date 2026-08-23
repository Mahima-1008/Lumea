import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="container-x py-24 md:py-40 text-center">
      <p className="font-mono text-[11px] tracking-widest uppercase text-rose">Error 404</p>
      <h1 className="font-display text-6xl md:text-8xl mt-5">Lost in beauty.</h1>
      <p className="font-serif italic text-espresso/70 text-lg md:text-xl mt-5 max-w-md mx-auto">
        The page you're looking for has wandered off. Let's get you back to something lovely.
      </p>
      <div className="mt-10 flex flex-wrap gap-3 justify-center">
        <Link to="/" className="btn-primary">Back home</Link>
        <Link to="/shop" className="btn-outline">Shop everything</Link>
      </div>
    </div>
  );
}
