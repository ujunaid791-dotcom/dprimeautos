import camry from "@/assets/car-camry.jpg";
import lexusRx from "@/assets/car-lexus-rx.jpg";
import gle from "@/assets/car-gle.jpg";
import corolla from "@/assets/car-corolla.jpg";
import velar from "@/assets/car-velar.jpg";
import es350 from "@/assets/car-es350.jpg";
import prado from "@/assets/car-prado.jpg";
import x5 from "@/assets/car-x5.jpg";
import { useLocalStore } from "@/hooks/use-local-store";
import type { UploadedCar } from "./AdminUpload";

type Car = {
  id: string;
  img: string;
  name: string;
  year: number;
  price: number; // Naira
  trans: string;
  mileage: string;
  fuel: string;
  tag: string;
  tagTone: "blue" | "green" | "amber" | "violet";
};

const cars: Car[] = [
  { id: "d-camry", img: camry, name: "Toyota Camry XSE", year: 2024, price: 52_000_000, trans: "Automatic", mileage: "8,200 km", fuel: "Petrol", tag: "Brand New", tagTone: "green" },
  { id: "d-rx", img: lexusRx, name: "Lexus RX 350 F Sport", year: 2023, price: 98_000_000, trans: "Automatic", mileage: "14,500 km", fuel: "Petrol", tag: "Foreign Used", tagTone: "blue" },
  { id: "d-gle", img: gle, name: "Mercedes-Benz GLE 450", year: 2022, price: 145_000_000, trans: "Automatic", mileage: "22,300 km", fuel: "Petrol", tag: "Certified Clean Title", tagTone: "violet" },
  { id: "d-corolla", img: corolla, name: "Toyota Corolla LE", year: 2024, price: 34_000_000, trans: "Automatic", mileage: "5,100 km", fuel: "Petrol", tag: "Brand New", tagTone: "green" },
  { id: "d-velar", img: velar, name: "Range Rover Velar", year: 2023, price: 165_000_000, trans: "Automatic", mileage: "16,800 km", fuel: "Petrol", tag: "Limited Offer", tagTone: "amber" },
  { id: "d-es", img: es350, name: "Lexus ES 350", year: 2022, price: 68_000_000, trans: "Automatic", mileage: "28,400 km", fuel: "Petrol", tag: "Tokunbo", tagTone: "blue" },
  { id: "d-prado", img: prado, name: "Toyota Prado", year: 2024, price: 118_000_000, trans: "Automatic", mileage: "3,900 km", fuel: "Petrol", tag: "Brand New", tagTone: "green" },
  { id: "d-x5", img: x5, name: "BMW X5 M Sport", year: 2023, price: 155_000_000, trans: "Automatic", mileage: "12,700 km", fuel: "Petrol", tag: "Foreign Used", tagTone: "blue" },
];

const toneClasses: Record<Car["tagTone"], string> = {
  blue: "bg-primary/15 text-[color:var(--neon)] border-primary/30",
  green: "bg-emerald-500/15 text-emerald-300 border-emerald-400/30",
  amber: "bg-amber-500/15 text-amber-300 border-amber-400/30",
  violet: "bg-violet-500/15 text-violet-300 border-violet-400/30",
};

const naira = (n: number) => "₦" + n.toLocaleString("en-NG");
const monthly = (n: number) => naira(Math.round((n * 0.04) / 1_000) * 1_000); // rough est

const WHATSAPP = "2349075359143";

export function Inventory() {
  const [uploaded, setUploaded] = useLocalStore<UploadedCar[]>("dprime:cars", []);
  const [hidden, setHidden] = useLocalStore<string[]>("dprime:hidden-cars", []);

  const merged: Car[] = [
    ...uploaded.map((u) => ({
      id: u.id, img: u.img, name: u.name, year: u.year, price: u.price,
      trans: u.trans, mileage: u.mileage, fuel: u.fuel, tag: u.tag,
      tagTone: "blue" as const,
    })),
    ...cars,
  ];
  const allCars = merged.filter((c) => !hidden.includes(c.id));

  const remove = (id: string) => {
    if (!confirm("Remove this vehicle from the inventory?")) return;
    if (uploaded.some((u) => u.id === id)) {
      setUploaded(uploaded.filter((u) => u.id !== id));
    } else {
      setHidden([...hidden, id]);
    }
  };

  return (
    <section id="inventory" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div>
            <div className="text-xs uppercase tracking-[0.2em] text-[color:var(--neon)]">Featured Inventory</div>
            <h2 className="mt-3 text-4xl sm:text-5xl font-semibold">Curated for the <span className="text-gradient">discerning few</span></h2>
            <p className="mt-3 text-muted-foreground max-w-xl">Hand-picked imports, verified VINs, and clean title histories. Every vehicle inspected before listing.</p>
          </div>
          <div className="flex items-center gap-4">
            {hidden.length > 0 && (
              <button onClick={() => setHidden([])} className="text-xs text-muted-foreground hover:text-foreground underline underline-offset-4">
                Restore {hidden.length} removed
              </button>
            )}
            <a href="#search" className="inline-flex items-center gap-2 text-sm text-foreground hover:text-[color:var(--neon)] transition-colors">
              View full inventory →
            </a>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {allCars.map((c) => (
            <article key={c.id} className="group glass rounded-3xl overflow-hidden hover:-translate-y-1 transition-all duration-500 hover:shadow-[0_30px_60px_-20px_oklch(0.65_0.22_230/0.35)]">

              <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-secondary to-background">
                <img
                  src={c.img}
                  alt={`${c.year} ${c.name}`}
                  loading="lazy"
                  width={1024}
                  height={1024}
                  className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-3 left-3">
                  <span className={`text-[10px] uppercase tracking-wider border rounded-full px-2.5 py-1 backdrop-blur ${toneClasses[c.tagTone]}`}>{c.tag}</span>
                </div>
                <button
                  onClick={() => remove(c.id)}
                  aria-label="Delete vehicle"
                  title="Delete vehicle"
                  className="absolute top-3 right-3 h-8 w-8 rounded-full glass-strong grid place-items-center text-destructive opacity-0 group-hover:opacity-100 hover:bg-destructive/10 transition-opacity"
                >
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 6h18M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2m3 0v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6h14zM10 11v6M14 11v6"/></svg>
                </button>
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-card to-transparent" />
              </div>

              <div className="p-5">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="font-display font-semibold leading-tight">{c.name}</h3>
                    <p className="text-xs text-muted-foreground mt-0.5">{c.year} · {c.trans} · {c.fuel}</p>
                  </div>
                </div>

                <div className="mt-4 flex items-baseline justify-between">
                  <div>
                    <div className="text-lg font-semibold text-gradient">{naira(c.price)}</div>
                    <div className="text-[11px] text-muted-foreground">from {monthly(c.price)}/mo</div>
                  </div>
                  <div className="text-right text-[11px] text-muted-foreground">
                    <div>{c.mileage}</div>
                  </div>
                </div>

                <div className="mt-5 flex gap-2">
                  <button className="flex-1 rounded-xl bg-gradient-to-r from-primary to-accent text-primary-foreground py-2.5 text-xs font-medium hover:shadow-[0_0_24px_-6px_var(--primary)] transition-shadow">
                    View Details
                  </button>
                  <a
                    href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(`Hi Dprime autos, I'm interested in the ${c.year} ${c.name}.`)}`}
                    target="_blank" rel="noreferrer"
                    aria-label="Chat on WhatsApp"
                    className="rounded-xl glass-strong px-3 grid place-items-center text-emerald-400 hover:bg-emerald-500/10 transition-colors"
                  >
                    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor"><path d="M20.5 3.5A11.9 11.9 0 0 0 12 0C5.4 0 .1 5.3.1 11.9c0 2.1.6 4.1 1.6 5.9L0 24l6.4-1.7a11.9 11.9 0 0 0 5.6 1.4h.01c6.6 0 11.9-5.3 11.9-11.9 0-3.2-1.2-6.2-3.4-8.3zM12 21.4c-1.8 0-3.5-.5-5-1.4l-.4-.2-3.8 1 1-3.7-.2-.4a9.5 9.5 0 1 1 17.9-4.8c0 5.2-4.3 9.5-9.5 9.5z"/></svg>
                  </a>
                  <button
                    onClick={() => remove(c.id)}
                    aria-label="Delete vehicle"
                    className="rounded-xl glass-strong px-3 grid place-items-center text-destructive hover:bg-destructive/10 transition-colors"
                  >
                    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 6h18M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2m3 0v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6h14z"/></svg>
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
