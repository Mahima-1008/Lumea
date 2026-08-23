import ProductCard from './ProductCard.jsx';

export default function ProductGrid({ products, columns = 4 }) {
  const gridCols = {
    2: 'grid-cols-2',
    3: 'grid-cols-2 md:grid-cols-3',
    4: 'grid-cols-2 md:grid-cols-3 lg:grid-cols-4',
  }[columns];

  if (!products.length) {
    return (
      <div className="py-24 text-center">
        <p className="font-serif italic text-espresso/60 text-xl">Nothing matches those filters.</p>
        <p className="text-sm text-espresso/50 mt-2">Try loosening a few, or browse everything.</p>
      </div>
    );
  }

  return (
    <div className={`grid ${gridCols} gap-x-4 gap-y-2 md:gap-x-6 md:gap-y-6`}>
      {products.map((p) => <ProductCard key={p.id} product={p} />)}
    </div>
  );
}
