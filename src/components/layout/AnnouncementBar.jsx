export default function AnnouncementBar() {
  const messages = [
    'FREE SHIPPING ON ORDERS ABOVE ₹999',
    'NEW ARRIVALS EVERY THURSDAY',
    'USE CODE WELCOME15 FOR 15% OFF YOUR FIRST ORDER',
  ];
  return (
    <div className="bg-espresso text-ivory">
      <div className="container-x py-2.5 overflow-hidden">
        <div className="flex items-center justify-center gap-14 font-mono text-[10.5px] tracking-widest uppercase">
          {messages.map((m, i) => (
            <span key={i} className={i === 0 ? '' : 'hidden md:inline'}>{m}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
