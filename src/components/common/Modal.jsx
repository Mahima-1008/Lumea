import { useEffect } from 'react';
import { X } from 'lucide-react';

export default function Modal({ open, onClose, children, maxWidth = 'max-w-3xl' }) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 animate-fadeIn">
      <div className="absolute inset-0 bg-espresso/50" onClick={onClose} aria-hidden="true" />
      <div className={`relative bg-ivory w-full ${maxWidth} max-h-[92vh] overflow-y-auto animate-scaleIn`}>
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute right-4 top-4 z-10 w-9 h-9 flex items-center justify-center bg-ivory/80 hover:bg-cream transition"
        >
          <X size={18} />
        </button>
        {children}
      </div>
    </div>
  );
}
