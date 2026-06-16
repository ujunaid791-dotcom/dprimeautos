import heroImg from "@/assets/hero-car.jpg";

const stats = [
  { v: "500+", l: "Cars Sold" },
  { v: "36", l: "States Delivered" },
  { v: "100%", l: "Verified Vehicles" },
  { v: "24/7", l: "Concierge" },
];

export function Hero() {
  return (
    <section id="top" className="relative min-h-[100svh] overflow-hidden pt-24">
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Luxury sedan parked in Lagos at night with neon city lights"
          width={1920}
          height={1080}
          className="h-full w-full object-cover object-center opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/40 to-background" />
        <div className="absolute inset-0 grid-bg opacity-40" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 pt-12 pb-24">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full glass px-3 py-1.5 text-xs text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--neon)] pulse-glow" />
            Now delivering nationwide across Nigeria
          </div>

          <h1 className="mt-6 text-5xl sm:text-6xl lg:text-7xl font-semibold leading-[1.02]">
            Drive the <span className="text-gradient">Future of Luxury</span><br className="hidden sm:block" /> in Nigeria
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-xl">
            Premium cars. Verified imports. Trusted nationwide delivery — curated by Dprime autos for Nigeria's most discerning drivers.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#inventory" className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-primary to-accent px-6 py-3.5 text-sm font-medium text-primary-foreground shadow-[0_0_30px_-6px_var(--primary)] hover:shadow-[0_0_48px_-4px_var(--primary)] transition-all">
              Browse Cars
              <span className="transition-transform group-hover:translate-x-0.5">→</span>
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-xl glass-strong px-6 py-3.5 text-sm font-medium hover:bg-white/10 transition-colors">
              Book Inspection
            </a>
            <a href="#financing" className="inline-flex items-center gap-2 rounded-xl px-6 py-3.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Finance Options →
            </a>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-4xl">
          {stats.map((s, i) => (
            <div key={s.l} className="glass glow-border rounded-2xl p-5 float" style={{ animationDelay: `${i * 0.3}s` }}>
              <div className="text-2xl sm:text-3xl font-display font-semibold text-gradient">{s.v}</div>
              <div className="mt-1 text-xs sm:text-sm text-muted-foreground">{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
