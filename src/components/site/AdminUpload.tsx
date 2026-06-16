import { useState } from "react";
import { useLocalStore, fileToDataUrl } from "@/hooks/use-local-store";

export type UploadedCar = {
  id: string;
  img: string;
  name: string;
  year: number;
  price: number;
  trans: string;
  mileage: string;
  fuel: string;
  tag: string;
};

const MAX_BYTES = 2_500_000; // ~2.5MB to keep localStorage happy

export function AdminUpload() {
  const [cars, setCars] = useLocalStore<UploadedCar[]>("dprime:cars", []);

  const [draft, setDraft] = useState({
    name: "",
    year: new Date().getFullYear(),
    price: 0,
    trans: "Automatic",
    mileage: "",
    fuel: "Petrol",
    tag: "Brand New",
  });
  const [imgPreview, setImgPreview] = useState<string | null>(null);
  const [msg, setMsg] = useState<string | null>(null);

  const onPickCarImg = async (file: File | undefined) => {
    if (!file) return;
    if (file.size > MAX_BYTES) return setMsg("Image too large (max 2.5MB).");
    const url = await fileToDataUrl(file);
    setImgPreview(url);
    setMsg(null);
  };


  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!imgPreview || !draft.name || !draft.price) {
      return setMsg("Add an image, name and price.");
    }
    const car: UploadedCar = {
      id: crypto.randomUUID(),
      img: imgPreview,
      name: draft.name,
      year: Number(draft.year),
      price: Number(draft.price),
      trans: draft.trans,
      mileage: draft.mileage || "—",
      fuel: draft.fuel,
      tag: draft.tag,
    };
    setCars([car, ...cars]);
    setDraft({ ...draft, name: "", price: 0, mileage: "" });
    setImgPreview(null);
    setMsg("Car added to inventory.");
  };

  const removeCar = (id: string) => setCars(cars.filter((c) => c.id !== id));

  return (
    <section id="upload" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="text-xs uppercase tracking-[0.2em] text-[color:var(--neon)]">Dealer Portal</div>
          <h2 className="mt-3 text-4xl sm:text-5xl font-semibold">Upload <span className="text-gradient">new vehicles</span></h2>
          <p className="mt-3 text-muted-foreground">Add new cars to the showroom. Saved locally on this device.</p>
        </div>

        <div className="max-w-3xl mx-auto">
          {/* New car form */}
          <form onSubmit={submit} className="glass-strong rounded-3xl p-6 sm:p-8">
            <h3 className="text-xl font-semibold">Add a vehicle</h3>
            <p className="mt-1 text-sm text-muted-foreground">Upload a clean studio shot and the listing details.</p>

            <div className="mt-6 grid sm:grid-cols-2 gap-4">
              <label className="sm:col-span-2 rounded-2xl border-2 border-dashed border-border bg-secondary/50 p-5 grid place-items-center cursor-pointer hover:bg-secondary transition-colors aspect-[16/7] relative overflow-hidden">
                {imgPreview ? (
                  <img src={imgPreview} alt="preview" className="absolute inset-0 h-full w-full object-cover" />
                ) : (
                  <div className="text-center">
                    <div className="text-sm font-medium">Click to upload car photo</div>
                    <div className="text-xs text-muted-foreground mt-1">JPG / PNG · up to 2.5MB</div>
                  </div>
                )}
                <input type="file" accept="image/*" className="hidden" onChange={(e) => onPickCarImg(e.target.files?.[0])} />
              </label>

              <Input placeholder="Car name (e.g. Lexus LX 600)" value={draft.name} onChange={(v) => setDraft({ ...draft, name: v })} />
              <Input placeholder="Year" type="number" value={String(draft.year)} onChange={(v) => setDraft({ ...draft, year: Number(v) })} />
              <Input placeholder="Price in Naira (e.g. 85000000)" type="number" value={draft.price ? String(draft.price) : ""} onChange={(v) => setDraft({ ...draft, price: Number(v) })} />
              <Input placeholder="Mileage (e.g. 12,500 km)" value={draft.mileage} onChange={(v) => setDraft({ ...draft, mileage: v })} />
              <Select value={draft.trans} onChange={(v) => setDraft({ ...draft, trans: v })} options={["Automatic", "Manual"]} />
              <Select value={draft.fuel} onChange={(v) => setDraft({ ...draft, fuel: v })} options={["Petrol", "Diesel", "Hybrid", "Electric"]} />
              <Select value={draft.tag} onChange={(v) => setDraft({ ...draft, tag: v })} options={["Brand New", "Foreign Used", "Tokunbo", "Certified Clean Title", "Limited Offer"]} />
            </div>

            {msg && <div className="mt-4 text-xs text-[color:var(--neon)]">{msg}</div>}

            <button type="submit" className="mt-6 w-full rounded-xl bg-gradient-to-r from-primary to-accent text-primary-foreground py-3.5 text-sm font-medium shadow-[0_0_28px_-6px_var(--primary)]">
              Publish to Inventory
            </button>
          </form>
        </div>

        {/* Uploaded cars list */}
        {cars.length > 0 && (
          <div className="mt-10">
            <div className="text-sm text-muted-foreground mb-3">Your uploaded vehicles</div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {cars.map((c) => (
                <div key={c.id} className="glass rounded-2xl overflow-hidden group">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img src={c.img} alt={c.name} className="h-full w-full object-cover" />
                  </div>
                  <div className="p-4">
                    <div className="text-sm font-medium truncate">{c.name}</div>
                    <div className="text-xs text-muted-foreground">{c.year} · ₦{c.price.toLocaleString("en-NG")}</div>
                    <button onClick={() => removeCar(c.id)} className="mt-3 text-xs text-destructive hover:underline">Remove</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

function Input({ value, onChange, ...rest }: { value: string; onChange: (v: string) => void } & Omit<React.InputHTMLAttributes<HTMLInputElement>, "value" | "onChange">) {
  return (
    <input
      {...rest}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full bg-secondary/60 border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--ring)]"
    />
  );
}

function Select({ value, onChange, options }: { value: string; onChange: (v: string) => void; options: string[] }) {
  return (
    <select value={value} onChange={(e) => onChange(e.target.value)} className="w-full bg-secondary/60 border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--ring)]">
      {options.map((o) => <option key={o} value={o}>{o}</option>)}
    </select>
  );
}
