const items = [
  { n: "Chinedu Eze", r: "Businessman, Lagos", q: "Seamless from inspection to delivery. My GLE arrived in Lekki within 48 hours — spotless, exactly as advertised." },
];

export function Testimonials() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4">
        <div className="max-w-2xl mb-12">
          <div className="text-xs uppercase tracking-[0.2em] text-[color:var(--neon)]">Owners' Stories</div>
          <h2 className="mt-3 text-4xl sm:text-5xl font-semibold">Trusted by Nigeria's <span className="text-gradient">finest drivers</span></h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((t) => (
            <figure key={t.n} className="glass rounded-3xl p-6">
              <div className="flex items-center gap-1 text-[color:var(--neon)]">
                {"★★★★★".split("").map((s, j) => <span key={j}>{s}</span>)}
              </div>
              <blockquote className="mt-4 text-sm text-foreground/90 leading-relaxed">
                "{t.q}"
              </blockquote>
              <figcaption className="mt-5 flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-gradient-to-br from-primary to-accent grid place-items-center text-primary-foreground text-sm font-semibold">
                  {t.n.split(" ").map((w) => w[0]).join("").slice(0,2)}
                </div>
                <div>
                  <div className="text-sm font-medium flex items-center gap-1.5">
                    {t.n}
                    <span className="text-[10px] bg-primary/15 text-[color:var(--neon)] border border-primary/30 rounded-full px-1.5 py-0.5">Verified</span>
                  </div>
                  <div className="text-xs text-muted-foreground">{t.r}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
