import { Instagram } from 'lucide-react';

const IMGS = [
  'photo-1596462502278-27bfdc403348',
  'photo-1583241800698-9c2e8b3b3f13',
  'photo-1620916566398-39f1143ab7be',
  'photo-1594035910387-fea47794261f',
  'photo-1526045478516-99145907023c',
  'photo-1522337360788-8b13dee7a37e',
];

export default function InstagramSection() {
  return (
    <section className="container-x py-16 md:py-24">
      <div className="text-center mb-8 md:mb-12">
        <div className="eyebrow mb-3">Follow along</div>
        <h2 className="font-display text-3xl md:text-5xl">@lumeabeauty</h2>
        <p className="font-serif italic text-espresso/70 text-lg mt-3">Beauty moments, rituals & inspiration.</p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-6 gap-2 md:gap-3">
        {IMGS.map((id, i) => (
          <a key={i} href="#" className="group relative aspect-square overflow-hidden bg-cream">
            <img
              src={`https://images.unsplash.com/${id}?auto=format&fit=crop&w=500&q=80`}
              alt=""
              loading="lazy"
              className="w-full h-full object-cover group-hover:scale-105 transition duration-700 ease-soft"
            />
            <div className="absolute inset-0 bg-espresso/0 group-hover:bg-espresso/40 transition duration-500 flex items-center justify-center">
              <Instagram size={22} className="text-ivory opacity-0 group-hover:opacity-100 transition duration-300" />
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
