import { Nav } from "@/components/landing/nav";
import { Footer } from "@/components/landing/footer";
import HeroSection from "@/components/resources/manifesto/hero-section";
import BodySection from "@/components/resources/manifesto/body-section";
import CtaSection from "@/components/resources/manifesto/cta-section";

export const metadata = {
  title: "The Anti-CRM Manifesto",
  description:
    "Why Otto believes sales teams need an anti-CRM that removes admin work and lets reps sell.",
};

export default function ManifestoPage() {
  return (
    <div className="min-h-screen bg-dark text-neutral-100 flex flex-col">
      <Nav />
      <main>
        <HeroSection />
        <BodySection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}
