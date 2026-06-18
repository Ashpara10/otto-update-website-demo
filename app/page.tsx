import { Adoption } from "@/components/landing/adoption";
import { AnswersInField } from "@/components/landing/answers-in-field";
import { BeforeAfter } from "@/components/landing/before-after";
import { Brain } from "@/components/landing/brain";
import { Coordinator } from "@/components/landing/coordinator";
import { FinalCTA } from "@/components/landing/final-cta";
import { Footer } from "@/components/landing/footer";
import Hero from "@/components/landing/hero";
import { HowItWorks } from "@/components/landing/how-it-works";
import { Industries } from "@/components/landing/industries";
import { Integrations } from "@/components/landing/integrations";
import { Manager } from "@/components/landing/manager";
import { Nav } from "@/components/landing/nav";
import { Positioning } from "@/components/landing/positioning";
import { ProblemSection } from "@/components/landing/problem-section";
import { QuoteRisk } from "@/components/landing/quote-risk";
import { Trust } from "@/components/landing/trust";
import { WhatOttoDoes } from "@/components/landing/what-otto-does";
import { Workflow } from "@/components/landing/workflow";

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <div className="sections">
        <ProblemSection />
        <HowItWorks />
        <AnswersInField />
        <WhatOttoDoes />
        {/* <Brain /> */}
        {/* <Positioning /> */}
        {/* <Workflow /> */}
        {/* <Manager /> */}
        {/* <Coordinator /> */}
        {/* <QuoteRisk /> */}
        {/* <Adoption /> */}
        {/* <BeforeAfter /> */}
        <Integrations />
        <Industries />
        {/* <Trust /> */}
        <FinalCTA />
      </div>
      <Footer />
    </>
  );
}
