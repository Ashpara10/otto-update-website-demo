import { Nav } from "@/components/landing/nav";
import { Footer } from "@/components/landing/footer";
import { PricingComparisonSection } from "@/components/landing/pricing-comparison";
import { PricingCards } from "@/components/landing/pricing-cards";
import { PricingViewTracker } from "@/components/pricing-view-tracker";

export const metadata = {
  title: "Pricing · Otto",
  description:
    "Simple, transparent pricing for every stage of your sales team. One plan with the full briefing room, plus enterprise for large scaling teams.",
};

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-dark text-heading">
      <PricingViewTracker />
      <Nav />
      <main className="px-5 pb-20 pt-32 sm:px-8 sm:pb-24 sm:pt-36">
        <div className="mx-auto mt-8 max-w-4xl px-0 sm:px-4">
          <div className="mb-10 flex w-full flex-col items-center gap-2">
            <h1 className="w-full text-center text-2xl font-semibold tracking-tight sm:w-auto md:text-3xl">
              Pricing Plan Comparison
            </h1>
            <p className="w-full max-w-md text-center text-subheading sm:text-lg sm:w-auto">
              Simple, transparent pricing for every stage of your sales team.
            </p>
          </div>
          <PricingCards />
        </div>

        <PricingComparisonSection />
      </main>
      <Footer />
    </div>
  );
}
