import { useMemo, useState } from "react";

export function Financing() {
  const [price, setPrice] = useState(80);
  const [down, setDown] = useState(30);
  const [term, setTerm] = useState(36);

  const monthly = useMemo(() => {
    const principal = price * 1_000_000 * (1 - down / 100);
    const rate = 0.022; // 2.2% monthly est
    const m = (principal * rate) / (1 - Math.pow(1 + rate, -term));
    return Math.max(0, Math.round(m));
  }, [price, down, term]);

  return (
    <section id="financing" className="relative py-24">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full" style={{ background: "var(--gradient-glow)" }} />
      </div>

      <div className="relative mx-auto max-w-7xl px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="text-xs uppercase tracking-[0.2em] text-[color:var(--neon)]">Financing</div>
            <h2 className="mt-3 text-4xl sm:text-5xl font-semibold">Own your <span className="text-gradient">dream car</span> today</h2>
            <p className="mt-4 text-muted-foreground max-w-md">
              Flexible plans with trusted Nigerian banks. Get pre-approved in minutes — no paperwork queues.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-3 max-w-sm">
              {["GTBank", "Zenith", "Access", "UBA", "First Bank", "Stanbic"].map((b) => (
                <div key={b} className="glass rounded-xl px-3 py-2.5 text-center text-xs font-medium text-muted-foreground">{b}</div>
              ))}
            </div>

            <div className="mt-8 flex items-center gap-4 text-xs text-muted-foreground">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-emerald-400 pulse-glow" />
                Pre-approval in under 5 minutes
              </div>
            </div>
          </div>

          <div className="glass-strong glow-border rounded-3xl p-6 sm:p-8">
            <div className="flex items-center justify-between mb-6">
              <div className="text-sm text-muted-foreground">Loan Calculator</div>
              <span className="text-[10px] uppercase tracking-wider text-[color:var(--neon)] border border-[color:var(--neon)]/30 rounded-full px-2 py-0.5">Live</span>
            </div>

            <Slider label="Vehicle Price" value={`₦${price}M`} min={20} max={250} step={5} v={price} onChange={setPrice} />
            <Slider label="Down Payment" value={`${down}%`} min={10} max={70} step={5} v={down} onChange={setDown} />
            <Slider label="Loan Term" value={`${term} mo`} min={12} max={60} step={6} v={term} onChange={setTerm} />

            <div className="mt-8 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/10 border border-primary/20 p-6">
              <div className="text-xs uppercase tracking-wider text-muted-foreground">Estimated monthly</div>
              <div className="mt-1 text-4xl sm:text-5xl font-display font-semibold text-gradient">
                ₦{monthly.toLocaleString("en-NG")}
              </div>
              <div className="mt-2 flex items-center justify-between text-xs text-muted-foreground">
                <span>at ~26% APR · indicative</span>
                <span className="text-emerald-300">● Eligible</span>
              </div>

              <div className="mt-5 h-1.5 rounded-full bg-white/5 overflow-hidden">
                <div className="h-full w-[78%] rounded-full bg-gradient-to-r from-primary to-accent" />
              </div>
              <div className="mt-1.5 text-[11px] text-muted-foreground">Approval confidence: 78%</div>
            </div>

            <button className="mt-6 w-full rounded-xl bg-gradient-to-r from-primary to-accent text-primary-foreground py-3.5 text-sm font-medium shadow-[0_0_28px_-6px_var(--primary)]">
              Apply for Financing →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function Slider({ label, value, min, max, step, v, onChange }: {
  label: string; value: string; min: number; max: number; step: number; v: number; onChange: (n: number) => void;
}) {
  return (
    <div className="mb-5">
      <div className="flex justify-between text-xs mb-2">
        <span className="text-muted-foreground">{label}</span>
        <span className="text-foreground font-medium">{value}</span>
      </div>
      <input type="range" min={min} max={max} step={step} value={v} onChange={(e) => onChange(+e.target.value)} className="w-full accent-[var(--neon)]" />
    </div>
  );
}
