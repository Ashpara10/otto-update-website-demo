import { Footer } from "@/components/landing/footer";
import Hero from "@/components/landing/hero";
import { Industries } from "@/components/landing/industries";
import { Knowledge } from "@/components/landing/knowledge";
import { Nav } from "@/components/landing/nav";
import { QuoteRisk } from "@/components/landing/quote-risk";
import { Stats } from "@/components/landing/stats";
import { Manager } from "@/components/landing/manager";
import { ProblemSection } from "@/components/landing/problem-section";

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <Stats />
      <ProblemSection />
      <Manager />
      <QuoteRisk />
      <Knowledge />
      <Industries />
      <Footer />
    </>
  );
}
