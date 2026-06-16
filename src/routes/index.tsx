import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { Inventory } from "@/components/site/Inventory";
import { Search } from "@/components/site/Search";
import { AdminUpload } from "@/components/site/AdminUpload";
import { About } from "@/components/site/About";
import { Testimonials } from "@/components/site/Testimonials";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { WhatsAppFab } from "@/components/site/WhatsAppFab";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dprime autos — Premium Luxury Cars, Verified Imports" },
      { name: "description", content: "Drive the future of luxury in Nigeria. Verified imports, nationwide delivery, transparent financing from Dprime autos." },
      { property: "og:title", content: "Dprime autos — Premium Luxury Cars" },
      { property: "og:description", content: "Verified imports. Nationwide delivery. Trusted by Nigeria's most discerning drivers." },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Space+Grotesk:wght@500;600;700&display=swap" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="relative min-h-screen overflow-x-clip">
      <Nav />
      <main>
        <Hero />
        <Inventory />
        <Search />
        <AdminUpload />
        <About />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFab />
    </div>
  );
}
