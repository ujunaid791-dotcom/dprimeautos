export function WhatsAppFab() {
  return (
    <a
      href="https://wa.me/2349075359143?text=Hi%20Dprime%20autos%2C%20I%27d%20like%20to%20learn%20more."
      target="_blank" rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-40 group"
    >
      <span className="absolute inset-0 rounded-full bg-emerald-500/40 blur-xl pulse-glow" />
      <span className="relative grid place-items-center h-14 w-14 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 text-white shadow-[0_10px_30px_-5px_oklch(0.6_0.18_150/0.6)]">
        <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor"><path d="M20.5 3.5A11.9 11.9 0 0 0 12 0C5.4 0 .1 5.3.1 11.9c0 2.1.6 4.1 1.6 5.9L0 24l6.4-1.7a11.9 11.9 0 0 0 5.6 1.4h.01c6.6 0 11.9-5.3 11.9-11.9 0-3.2-1.2-6.2-3.4-8.3z"/></svg>
      </span>
    </a>
  );
}
