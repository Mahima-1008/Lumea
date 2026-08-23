const img = (id, w = 600) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export const categories = [
  { name: 'Makeup', slug: 'makeup', path: '/makeup', image: img('photo-1522337360788-8b13dee7a37e') },
  { name: 'Skincare', slug: 'skincare', path: '/skincare', image: img('photo-1620916566398-39f1143ab7be') },
  { name: 'Haircare', slug: 'haircare', path: '/haircare', image: img('photo-1526045478516-99145907023c') },
  { name: 'Fragrance', slug: 'fragrance', path: '/fragrance', image: img('photo-1594035910387-fea47794261f') },
  { name: 'Body Care', slug: 'body', path: '/shop?category=Body', image: img('photo-1571781926291-c477ebfd024b') },
  { name: 'Wellness', slug: 'wellness', path: '/shop?category=Wellness', image: img('photo-1608248597279-f99d160bfcbc') },
];

export const concerns = [
  { name: 'Acne & Breakouts', slug: 'Acne', image: img('photo-1570194065650-d99fb4bedf0a') },
  { name: 'Dry Skin', slug: 'Dryness', image: img('photo-1571781926291-c477ebfd024b') },
  { name: 'Dullness', slug: 'Dullness', image: img('photo-1620916566398-39f1143ab7be') },
  { name: 'Pigmentation', slug: 'Pigmentation', image: img('photo-1556228578-8c89e6adf883') },
  { name: 'Hair Fall', slug: 'Hair fall', image: img('photo-1526045478516-99145907023c') },
  { name: 'Frizz', slug: 'Frizz', image: img('photo-1522337360788-8b13dee7a37e') },
  { name: 'Sensitive Skin', slug: 'Sensitive Skin', image: img('photo-1556228720-195a672e8a03') },
  { name: 'Uneven Texture', slug: 'Uneven Texture', image: img('photo-1608248543803-ba4f8c70ae0b') },
];

export const trending = [
  { name: 'Glass Skin', image: img('photo-1620916566398-39f1143ab7be') },
  { name: 'Lip Oils', image: img('photo-1586495777744-4413f21062fa') },
  { name: 'SPF Essentials', image: img('photo-1556228578-8c89e6adf883') },
  { name: 'Cream Blush', image: img('photo-1583241800698-9c2e8b3b3f13') },
  { name: 'Hair Serums', image: img('photo-1526045478516-99145907023c') },
  { name: 'Fragrance Layering', image: img('photo-1594035910387-fea47794261f') },
];
