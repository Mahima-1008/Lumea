const img = (id, w = 900) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export const articles = [
  {
    slug: 'simple-skincare-ritual',
    title: 'How to build a simple skincare ritual',
    category: 'Skincare',
    excerpt: 'Four steps, five minutes, and skin that feels like yours. Our editors on the case for less, done well.',
    image: img('photo-1620916566398-39f1143ab7be'),
    body: `A good skincare ritual is not about doing more. It is about doing a few things with intention, and letting your skin catch up to the care.

Start with a gentle cleanser — one that leaves your skin feeling comfortable rather than tight. Follow with a hydrating layer while the skin is still damp: a lightweight serum, or a mist you can layer.

Treat the concern that matters most to you right now. It might be brightness, texture, or simply calm. Choose one active, and stay consistent with it for eight weeks before evaluating.

Seal in with a moisturiser suited to the season. And in the mornings, always sunscreen — the single most protective step in any routine.`,
  },
  {
    slug: 'soft-blurred-makeup',
    title: 'The return of soft, blurred makeup',
    category: 'Makeup',
    excerpt: 'Sharp lines, out. Soft focus, in. The lived-in beauty look defining this season.',
    image: img('photo-1583241800698-9c2e8b3b3f13'),
    body: `The new mood in makeup is quiet. Skin that reads as skin, a flush that sits high on the cheek, a lip that looks bitten rather than drawn on.

The tools are softer, too. Cream blush pressed in with fingertips. A tinted balm instead of a full lipstick. A little concealer where you need it, and nothing where you don't.

It is a permission slip, in a way. To spend less time at the mirror, and to trust that a lighter hand looks more expensive than a heavier one.`,
  },
  {
    slug: 'signature-fragrance',
    title: 'Finding your signature fragrance',
    category: 'Fragrance',
    excerpt: 'A quiet guide to the scent that becomes yours — and how to know when you have found it.',
    image: img('photo-1594035910387-fea47794261f'),
    body: `A signature fragrance is less about the notes on the bottle and more about the way it settles on your skin.

Try three, at most, in a single visit. Wear each one for a full day before you decide. The scent you keep reaching for — the one you notice on the collar of a jacket a week later and smile — that is the one.`,
  },
  {
    slug: 'winter-hair-shift',
    title: 'The winter hair shift, explained',
    category: 'Hair',
    excerpt: 'Why your hair feels different in colder months, and the three small changes that help.',
    image: img('photo-1526045478516-99145907023c'),
    body: `Colder air holds less moisture, and indoor heating pulls more of it away. The result: hair that feels drier at the ends, and a scalp that behaves differently than it does in June.

Three shifts help. Wash a little less often. Use a weekly mask instead of a daily conditioner. And massage a lightweight oil into the ends before you sleep.`,
  },
  {
    slug: 'glass-skin-guide',
    title: 'Glass skin, explained in plain language',
    category: 'Skincare',
    excerpt: 'What it actually is, what it is not, and the ingredients that get you there.',
    image: img('photo-1608248543803-ba4f8c70ae0b'),
    body: `Glass skin is a look — smooth, hydrated, softly reflective. It is not a skin type, and it is not achievable in a week.

Get there by layering hydration. Humectants like hyaluronic acid pull water in. Ceramides and squalane keep it there. Consistent, gentle exfoliation smooths the surface so light bounces off it evenly. That is really all it is.`,
  },
  {
    slug: 'wellness-morning',
    title: 'A morning routine that actually feels good',
    category: 'Wellness',
    excerpt: 'Fifteen minutes of quiet, before the day starts asking things of you.',
    image: img('photo-1608248597279-f99d160bfcbc'),
    body: `The best morning routine is the one you actually do. For most people, that means short, low-friction and repeatable.

A glass of water before coffee. Five minutes of sunlight, if you can find it. A face washed with attention rather than urgency. Something warm to eat, sitting down. That is often enough.`,
  },
];

export const getArticleBySlug = (slug) => articles.find((a) => a.slug === slug);
