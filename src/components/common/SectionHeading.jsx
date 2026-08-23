import { Link } from 'react-router-dom';

export default function SectionHeading({ eyebrow, title, viewAll, align = 'between' }) {
  return (
    <div className={`flex ${align === 'between' ? 'items-end justify-between' : 'flex-col items-center text-center'} gap-4 mb-8 md:mb-12`}>
      <div>
        {eyebrow && <div className="eyebrow mb-3">{eyebrow}</div>}
        <h2 className="font-display text-3xl md:text-5xl text-espresso">{title}</h2>
      </div>
      {viewAll && (
        <Link to={viewAll} className="font-mono text-[11px] tracking-widest uppercase text-espresso link-underline">
          View all →
        </Link>
      )}
    </div>
  );
}
