import founderPhoto from "@/assets/founder-promise.jpg";

export function About() {
  return (
    <section id="about" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 grid lg:grid-cols-2 gap-12 items-center">
        <div className="relative">
          <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-primary/30 to-accent/20 blur-2xl opacity-50" />
          <img
            src={founderPhoto}
            alt="Promise Ubaka, Founder of Dprime autos"
            loading="lazy"
            width={1024}
            height={1024}
            className="relative rounded-3xl glow-border w-full object-cover aspect-square"
          />
          <div className="absolute bottom-4 left-4 right-4 glass-strong rounded-2xl p-4 flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-gradient-to-br from-primary to-accent overflow-hidden">
              <img src={founderPhoto} alt="" className="h-full w-full object-cover" />
            </div>
            <div>
              <div className="text-sm font-medium">Promise Ubaka</div>
              <div className="text-xs text-muted-foreground">Founder & CEO</div>
            </div>
          </div>
        </div>


        <div>
          <div className="text-xs uppercase tracking-[0.2em] text-[color:var(--neon)]">About Dprime autos</div>
          <h2 className="mt-3 text-4xl sm:text-5xl font-semibold">Nigeria's most <span className="text-gradient">trusted</span> luxury auto dealer</h2>
          <p className="mt-5 text-muted-foreground">
            From our Lagos flagship showroom, Dprime autos imports, inspects, and delivers premium vehicles to clients across Nigeria. Every car is VIN-verified, title-checked, and protected by our nationwide after-sales support.
          </p>

          <ul className="mt-6 grid sm:grid-cols-2 gap-3">
            {["Verified imports", "Clean title only", "Nationwide delivery", "After-sales support"].map((f) => (
              <li key={f} className="flex items-center gap-2 text-sm text-foreground">
                <span className="h-5 w-5 rounded-full bg-primary/20 grid place-items-center text-[color:var(--neon)] text-xs">✓</span>
                {f}
              </li>
            ))}
          </ul>

        </div>
      </div>
    </section>
  );
}
