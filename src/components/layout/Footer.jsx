import { Link } from 'react-router-dom';
import { Instagram, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-espresso text-ivory mt-24">
      <div className="container-x py-16 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-8">
          <div className="col-span-2 md:col-span-1">
            <div className="font-display text-2xl tracking-[0.18em]">LUMÉA</div>
            <p className="font-serif italic text-ivory/70 mt-4 text-lg leading-snug">
              Beauty, thoughtfully curated.
            </p>
          </div>

          <FooterCol title="Shop" links={[
            ['New', '/shop'],
            ['Makeup', '/makeup'],
            ['Skincare', '/skincare'],
            ['Haircare', '/haircare'],
            ['Fragrance', '/fragrance'],
            ['Offers', '/offers'],
          ]} />

          <FooterCol title="About" links={[
            ['Our Story', '/'],
            ['Beauty Journal', '/journal'],
            ['Contact', '/'],
            ['Shipping', '/'],
            ['Returns', '/'],
            ['FAQs', '/'],
          ]} />

          <div>
            <h4 className="font-mono text-[11px] tracking-widest uppercase text-ivory/60 mb-5">Follow</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm text-ivory/85 hover:text-ivory link-underline inline-flex items-center gap-2"><Instagram size={14} /> Instagram</a></li>
              <li><a href="#" className="text-sm text-ivory/85 hover:text-ivory link-underline">TikTok</a></li>
              <li><a href="#" className="text-sm text-ivory/85 hover:text-ivory link-underline">Pinterest</a></li>
              <li><a href="#" className="text-sm text-ivory/85 hover:text-ivory link-underline inline-flex items-center gap-2"><Youtube size={14} /> YouTube</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-ivory/15 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="font-mono text-[10.5px] tracking-widest uppercase text-ivory/60">
            © 2026 LUMÉA — All rights reserved.
          </p>
          <div className="flex gap-6 font-mono text-[10.5px] tracking-widest uppercase text-ivory/60">
            <a href="#" className="hover:text-ivory">Privacy</a>
            <a href="#" className="hover:text-ivory">Terms</a>
            <a href="#" className="hover:text-ivory">Shipping</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }) {
  return (
    <div>
      <h4 className="font-mono text-[11px] tracking-widest uppercase text-ivory/60 mb-5">{title}</h4>
      <ul className="space-y-3">
        {links.map(([label, to]) => (
          <li key={label}>
            <Link to={to} className="text-sm text-ivory/85 hover:text-ivory link-underline">{label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
