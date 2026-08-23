import SectionHeading from '../common/SectionHeading.jsx';

const TESTIMONIALS = [
  {
    text: 'Everything arrived beautifully packaged, and the serum has become part of my everyday routine.',
    name: 'Aanya',
    city: 'Mumbai',
  },
  {
    text: 'The recommendations felt genuinely thought through. My skin has never felt this calm through winter.',
    name: 'Priya',
    city: 'Bengaluru',
  },
  {
    text: 'Every order feels like a small ritual. The details — the paper, the notes — make it feel considered.',
    name: 'Ishaan',
    city: 'Delhi',
  },
];

export default function Testimonials() {
  return (
    <section className="bg-blush/40">
      <div className="container-x py-16 md:py-24">
        <SectionHeading eyebrow="Notes from you" title="Loved by our community" align="center" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {TESTIMONIALS.map((t, i) => (
            <figure key={i} className="text-center">
              <p className="text-burgundy tracking-widest text-sm">★★★★★</p>
              <blockquote className="font-serif italic text-xl md:text-2xl text-espresso mt-5 leading-snug max-w-sm mx-auto">
                "{t.text}"
              </blockquote>
              <figcaption className="font-mono text-[10.5px] tracking-widest uppercase text-espresso/60 mt-5">
                — {t.name}, {t.city}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
