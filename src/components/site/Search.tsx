import { useState } from "react";

const brands = ["All", "Toyota", "Lexus", "Mercedes-Benz", "BMW", "Range Rover", "Honda"];
const types = ["All", "Sedan", "SUV", "Coupe", "Pickup"];
const conditions = ["All", "Brand New", "Foreign Used", "Nigerian Used"];

export function Search() {
  const [price, setPrice] = useState(150);

  return (
    <section id="search" className="relative py-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="text-center mb-10">
          <div className="text-xs uppercase tracking-[0.2em] text-[color:var(--neon)]">Smart Search</div>
          <h2 className="mt-3 text-4xl sm:text-5xl font-semibold">Find your <span className="text-gradient">perfect match</span></h2>
          <p className="mt-3 text-muted-foreground">AI-powered filters narrow 500+ listings in seconds.</p>
        </div>

        <div className="glass-strong glow-border rounded-3xl p-6 sm:p-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <Field label="Brand">
              <Select options={brands} />
            </Field>
            <Field label="Vehicle Type">
              <Select options={types} />
            </Field>
            <Field label="Condition">
              <Select options={conditions} />
            </Field>
            <Field label="Year">
              <Select options={["Any", "2024", "2023", "2022", "2021", "2020"]} />
            </Field>
            <Field label="Location">
              <Select options={["Anywhere", "Lagos", "Abuja", "Port Harcourt", "Kano", "Ibadan"]} />
            </Field>
            <Field label="Transmission">
              <Select options={["Any", "Automatic", "Manual"]} />
            </Field>
          </div>

          <div className="mt-6">
            <div className="flex justify-between text-xs text-muted-foreground mb-2">
              <span>Max Budget</span>
              <span className="text-[color:var(--neon)] font-medium">₦{price.toLocaleString()}M</span>
            </div>
            <input
              type="range" min={10} max={300} step={5}
              value={price} onChange={(e) => setPrice(+e.target.value)}
              className="w-full accent-[var(--neon)]"
            />
          </div>

          <div className="mt-6 flex flex-wrap gap-3 justify-between items-center">
            <div className="text-xs text-muted-foreground">
              <span className="inline-flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--neon)] pulse-glow" />
                AI suggests: <span className="text-foreground">Lexus RX 350</span>, <span className="text-foreground">Toyota Prado</span>
              </span>
            </div>
            <button className="rounded-xl bg-gradient-to-r from-primary to-accent text-primary-foreground px-6 py-3 text-sm font-medium shadow-[0_0_24px_-6px_var(--primary)]">
              Search Inventory →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="text-[11px] uppercase tracking-wider text-muted-foreground">{label}</span>
      <div className="mt-1.5">{children}</div>
    </label>
  );
}

function Select({ options }: { options: string[] }) {
  return (
    <div className="relative">
      <select className="w-full appearance-none bg-secondary/60 border border-border rounded-xl px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-[var(--ring)]">
        {options.map((o) => <option key={o} className="bg-background">{o}</option>)}
      </select>
      <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground">▾</span>
    </div>
  );
}
