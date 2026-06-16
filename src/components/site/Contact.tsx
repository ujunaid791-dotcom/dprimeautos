export function Contact() {
  return (
    <section id="contact" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="text-xs uppercase tracking-[0.2em] text-[color:var(--neon)]">Visit / Connect</div>
          <h2 className="mt-3 text-4xl sm:text-5xl font-semibold">Step inside our <span className="text-gradient">showroom</span></h2>
          <p className="mt-3 text-muted-foreground">1 Meadowhall Way, Ikate, Elegushi, Lagos · Open daily by appointment.</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-5">
          {[
            { t: "WhatsApp", v: "+234 907 535 9143", a: "Chat instantly", href: "https://wa.me/2349075359143" },
            { t: "Email", v: "promiseubaka@gmail.com", a: "Reply within 1 hour", href: "mailto:promiseubaka@gmail.com" },
            { t: "Phone", v: "+234 907 535 9143", a: "Mon–Sat · 8am–8pm", href: "tel:+2349075359143" },
          ].map((c) => (

            <a key={c.t} href={c.href} className="glass glow-border rounded-3xl p-6 hover:-translate-y-1 transition-transform">
              <div className="text-xs uppercase tracking-wider text-[color:var(--neon)]">{c.t}</div>
              <div className="mt-2 text-lg font-display font-semibold">{c.v}</div>
              <div className="mt-1 text-xs text-muted-foreground">{c.a}</div>
            </a>
          ))}
        </div>

        <div className="mt-10 grid lg:grid-cols-2 gap-5">
          <div className="glass-strong rounded-3xl p-6 sm:p-8">
            <h3 className="text-xl font-semibold">Book an inspection</h3>
            <p className="mt-1 text-sm text-muted-foreground">Tell us what you're looking for. We'll prepare it for your visit.</p>
            <form className="mt-6 grid gap-4" onSubmit={(e) => e.preventDefault()}>
              <Input placeholder="Full name" />
              <Input placeholder="Phone or WhatsApp" type="tel" />
              <Input placeholder="Email" type="email" />
              <textarea placeholder="Which vehicle are you interested in?" rows={4}
                className="w-full bg-secondary/60 border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--ring)]" />
              <button className="rounded-xl bg-gradient-to-r from-primary to-accent text-primary-foreground py-3.5 text-sm font-medium shadow-[0_0_28px_-6px_var(--primary)]">
                Request Callback
              </button>
            </form>
          </div>

          <div className="rounded-3xl overflow-hidden glow-border min-h-[400px] relative">
            <iframe
              title="Dprime autos Showroom Lagos"
              src="https://www.openstreetmap.org/export/embed.html?bbox=3.4100%2C6.4200%2C3.4500%2C6.4500&layer=mapnik&marker=6.4350%2C6.4350"
              className="absolute inset-0 h-full w-full grayscale contrast-110"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent pointer-events-none" />
            <div className="absolute bottom-4 left-4 right-4 glass-strong rounded-2xl p-4">
              <div className="text-sm font-medium">Dprime autos Flagship Showroom</div>
              <div className="text-xs text-muted-foreground">1 Meadowhall Way, Ikate, Elegushi, Lagos, Nigeria</div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return <input {...props} className="w-full bg-secondary/60 border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--ring)]" />;
}
