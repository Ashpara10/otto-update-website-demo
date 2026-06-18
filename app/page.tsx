import { Footer } from "@/components/landing/footer";
import Hero from "@/components/landing/hero";
import { Stats } from "@/components/landing/stats";
import { ProblemSection } from "@/components/landing/problem-section";
import { HowItWorks } from "@/components/landing/how-it-works";
import { Brain } from "@/components/landing/brain";
import { Positioning } from "@/components/landing/positioning";
import { Workflow } from "@/components/landing/workflow";
import { Manager } from "@/components/landing/manager";
import { Coordinator } from "@/components/landing/coordinator";
import { QuoteRisk } from "@/components/landing/quote-risk";
import { Adoption } from "@/components/landing/adoption";
import { BeforeAfter } from "@/components/landing/before-after";
import { Integrations } from "@/components/landing/integrations";
import { ICP } from "@/components/landing/icp";
import { Trust } from "@/components/landing/trust";
import { Knowledge } from "@/components/landing/knowledge";
import { Industries } from "@/components/landing/industries";
import { FinalCTA } from "@/components/landing/final-cta";
import { Nav } from "@/components/landing/nav";

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <Stats />
      <ProblemSection />
      <HowItWorks />
      <Brain />
      <Positioning />
      <Workflow />
      <Manager />
      <Coordinator />
      <QuoteRisk />
      <Adoption />
      <BeforeAfter />
      <Integrations />
      <Industries />
      <Trust />
      <FinalCTA />
      <Footer />
    </>
  );
}
