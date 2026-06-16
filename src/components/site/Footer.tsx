export function Footer() {
  const cols = [
    { t: "Company", l: ["About", "Careers", "Press", "Showroom"] },
    { t: "Buy", l: ["Inventory", "Financing", "Importation Guide", "Compare"] },
    { t: "Support", l: ["Contact", "Aftercare", "Warranty", "FAQ"] },
    { t: "Legal", l: ["Privacy Policy", "Financing Policy", "Terms", "Cookies"] },
  ];

  return (
    <footer className="relative border-t border-border mt-10">
      <div className="mx-auto max-w-7xl px-4 py-16">
        <div className="grid lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 font-display font-semibold text-lg">
              <span className="h-8 w-8 rounded-lg bg-gradient-to-br from-primary to-accent grid place-items-center text-primary-foreground">D</span>
              <span>Dprime<span className="text-gradient"> autos</span></span>
            </div>
            <p className="mt-4 text-sm text-muted-foreground max-w-xs">
              Premium imports. Verified vehicles. Nationwide delivery — engineered for Nigeria's most discerning drivers.
            </p>

            <form className="mt-6 flex gap-2 max-w-sm" onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder="Email for new arrivals"
                className="flex-1 bg-secondary/60 border border-border rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--ring)]" />
              <button className="rounded-xl bg-gradient-to-r from-primary to-accent text-primary-foreground px-4 text-sm font-medium">Subscribe</button>
            </form>
          </div>

          {cols.map((c) => (
            <div key={c.t}>
              <div className="text-xs uppercase tracking-wider text-[color:var(--neon)]">{c.t}</div>
              <ul className="mt-4 space-y-2">
                {c.l.map((i) => (
                  <li key={i}><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">{i}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-6 border-t border-border flex flex-col sm:flex-row justify-between gap-4 text-xs text-muted-foreground">
          <div>© {new Date().getFullYear()} Dprime autos. All rights reserved.</div>
          <div className="flex gap-4">
            <a href="https://www.instagram.com/dprime.autosng?igsh=ZjNpY2dxeTBkOTRu&utm_source=qr" target="_blank" rel="noreferrer" className="hover:text-foreground">Instagram</a>
            <a href="#" className="hover:text-foreground">X / Twitter</a>
            <a href="#" className="hover:text-foreground">LinkedIn</a>
            <a href="#" className="hover:text-foreground">YouTube</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
