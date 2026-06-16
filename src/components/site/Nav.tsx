import { useEffect, useState } from "react";

const links = [
  { href: "#inventory", label: "Inventory" },
  { href: "#search", label: "Search" },
  { href: "#upload", label: "Upload" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div className="fixed top-0 inset-x-0 z-[60] bg-gradient-to-r from-primary via-accent to-primary text-primary-foreground text-[11px] sm:text-xs tracking-[0.25em] uppercase text-center py-1.5 font-medium">
        Dprime Motors
      </div>
      <header className={`fixed top-7 inset-x-0 z-50 transition-all duration-300 ${scrolled ? "py-2" : "py-4"}`}>
      <div className="mx-auto max-w-7xl px-4">
        <nav className={`flex items-center justify-between rounded-2xl px-4 sm:px-6 py-3 ${scrolled ? "glass-strong" : "glass"}`}>
          <a href="#top" className="flex items-center gap-2 font-display font-semibold">
            <span className="relative inline-flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-accent shadow-[0_0_20px_-2px_var(--primary)]">
              <span className="text-primary-foreground text-sm font-bold">D</span>
            </span>
            <span className="hidden sm:block">
              <span className="text-foreground">Dprime</span><span className="text-gradient"> autos</span>
            </span>
          </a>

          <ul className="hidden md:flex items-center gap-1">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-white/5">{l.label}</a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <a href="https://wa.me/2349075359143" target="_blank" rel="noreferrer" className="hidden sm:inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-primary to-accent px-4 py-2 text-sm font-medium text-primary-foreground shadow-[0_0_24px_-6px_var(--primary)] hover:shadow-[0_0_36px_-4px_var(--primary)] transition-all">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 pulse-glow" />
              Talk to Sales
            </a>
            <button onClick={() => setOpen(!open)} aria-label="Menu" className="md:hidden h-10 w-10 rounded-xl glass grid place-items-center">
              <div className="space-y-1.5">
                <span className={`block h-px w-5 bg-foreground transition-transform ${open ? "translate-y-[6px] rotate-45" : ""}`} />
                <span className={`block h-px w-5 bg-foreground transition-opacity ${open ? "opacity-0" : ""}`} />
                <span className={`block h-px w-5 bg-foreground transition-transform ${open ? "-translate-y-[6px] -rotate-45" : ""}`} />
              </div>
            </button>
          </div>
        </nav>

        {open && (
          <div className="md:hidden mt-2 glass-strong rounded-2xl p-2 animate-in fade-in slide-in-from-top-2">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block px-4 py-3 text-sm text-foreground hover:bg-white/5 rounded-xl">{l.label}</a>
            ))}
          </div>
        )}
      </div>
    </header>
    </>
  );
}
