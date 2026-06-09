import { Nav } from "@/components/sections/nav";
import { Hero } from "@/components/sections/hero";
import { StatStrip } from "@/components/sections/stat-strip";
import { Problem } from "@/components/sections/problem";
import { HowItWorks } from "@/components/sections/how-it-works";
import { Brain } from "@/components/sections/brain";
import { Positioning } from "@/components/sections/positioning";
import { Workflow } from "@/components/sections/workflow";
import { QuoteRisk } from "@/components/sections/quote-risk";
import { Manager } from "@/components/sections/manager";
import { Coordinator } from "@/components/sections/coordinator";
import { Adoption } from "@/components/sections/adoption";
import { BeforeAfter } from "@/components/sections/before-after";
import { Integrations } from "@/components/sections/integrations";
import { ICP } from "@/components/sections/icp";
import { Trust } from "@/components/sections/trust";
import { FinalCTA } from "@/components/sections/final-cta";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <StatStrip />
      <Problem />
      <HowItWorks />
      <Brain />
      <Positioning />
      <Workflow />
      <QuoteRisk />
      <Manager />
      <Coordinator />
      <Adoption />
      <BeforeAfter />
      <Integrations />
      <ICP />
      <Trust />
      <FinalCTA />
      <Footer />
    </>
  );
}
