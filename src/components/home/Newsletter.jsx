import { useState } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    if (!email.includes('@')) return;
    setSent(true);
    setEmail('');
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section className="bg-burgundy text-ivory">
      <div className="container-x py-16 md:py-24">
        <div className="max-w-2xl mx-auto text-center">
          <div className="font-mono text-[11px] tracking-widest uppercase text-blush mb-4">The list</div>
          <h2 className="font-display text-3xl md:text-5xl">A little beauty in your inbox.</h2>
          <p className="font-serif italic text-lg md:text-xl text-ivory/80 mt-5 leading-snug">
            New launches, beauty notes, exclusive offers and things worth knowing.
          </p>

          <form onSubmit={submit} className="mt-8 flex flex-col sm:flex-row gap-2 max-w-lg mx-auto">
            <input
              type="email"
              required
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 bg-transparent border border-ivory/40 focus:border-ivory outline-none px-4 py-3.5 text-sm text-ivory placeholder:text-ivory/50 transition"
            />
            <button type="submit" className="btn bg-ivory text-burgundy hover:bg-blush transition">
              Subscribe
            </button>
          </form>

          {sent && (
            <p className="font-serif italic text-ivory/90 mt-5 animate-fadeIn">
              Thank you — you're on the list.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
