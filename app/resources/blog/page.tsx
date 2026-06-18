import { Nav } from "@/components/landing/nav";
import { Footer } from "@/components/landing/footer";
import IndexHero from "@/components/resources/blog/index-hero";
import IndexList from "@/components/resources/blog/index-list";

export const metadata = {
  title: "Otto Blog",
  description:
    "Insights on Sales, CRM, and AI. Why traditional CRMs fail reps, how AI is changing sales, and what voice-first productivity actually looks like.",
};

export default function BlogIndexPage() {
  return (
    <div className="min-h-screen bg-dark text-heading flex flex-col">
      <Nav />
      <main>
        <IndexHero />
        <IndexList />
      </main>
      <Footer />
    </div>
  );
}
