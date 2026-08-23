import { Star } from 'lucide-react';

export default function ProductRating({ rating, reviews, size = 12 }) {
  return (
    <div className="flex items-center gap-1.5 text-espresso/70">
      <Star size={size} className="fill-burgundy text-burgundy" />
      <span className="font-mono text-[11px]">{rating.toFixed(1)}</span>
      {reviews != null && (
        <span className="font-mono text-[11px] text-espresso/50">({reviews})</span>
      )}
    </div>
  );
}
