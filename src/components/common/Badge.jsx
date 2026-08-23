export default function Badge({ children, tone = 'ivory' }) {
  const tones = {
    ivory: 'bg-ivory text-espresso',
    burgundy: 'bg-burgundy text-ivory',
    rose: 'bg-rose text-ivory',
    espresso: 'bg-espresso text-ivory',
  };
  return (
    <span className={`inline-block font-mono text-[10px] tracking-widest uppercase px-2.5 py-1 ${tones[tone]}`}>
      {children}
    </span>
  );
}
