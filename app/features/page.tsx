import Link from "next/link";
import { Nav } from "@/components/landing/nav";
import { Footer } from "@/components/landing/footer";
import { BookDemoButton } from "@/components/book-demo-button";

const features = [
  {
    title: "Morning Briefing",
    description:
      "Start every rep's day with the accounts that matter, the signals that changed, and the move worth making next.",
    href: "/features/morning-briefing",
  },
  {
    title: "Pre-Meeting Brief",
    description:
      "Walk into every visit already knowing the buyer, the deal, and the questions that move it forward.",
    href: "/features/pre-meeting-brief",
  },
  {
    title: "CRM Updates",
    description:
      "Every call, quote, and note lands in the CRM automatically. Otto writes your CRM so you don't have to.",
    href: "/features/crm-updates",
  },
  {
    title: "Conference Bot",
    description:
      "Otto listens on industry calls and surfaces what changed, tagged by account and competitor.",
    href: "/features/conference-bot",
  },
  {
    title: "Post Call Coaching",
    description:
      "Feedback within an hour of every customer conversation, with the actions and next steps already captured.",
    href: "/features/post-call-coaching",
  },
  {
    title: "Product Inquiry",
    description:
      "Reps ask, Otto answers from your real product catalog. No more guessing specs on a customer call.",
    href: "/features/product-inquiry",
  },
];

export default function Page() {
  return (
    <div className="mx-auto flex min-h-screen w-full max-w-[1920px] flex-col bg-white text-neutral-900">
      <Nav />

      <main>
        <section className="border-b border-neutral-200 px-5 pb-20 pt-32 sm:px-8 sm:pt-36">
          <div className="mx-auto w-full max-w-7xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-3 py-1 text-xs font-medium text-neutral-700">
              <span>Features</span>
              <span className="h-1 w-1 rounded-full bg-neutral-400" />
              <span className="rounded-full bg-green-contrast/10 px-2 py-0.5 font-semibold text-green-contrast">
                Six capabilities
              </span>
            </div>

            <h1 className="mt-8 text-3xl font-semibold tracking-[-0.04em] md:text-5xl">
              Six capabilities,
              <span className="block text-green-contrast">one connected workflow.</span>
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-neutral-600 sm:text-lg">
              Otto runs the field end to end. From the morning briefing to the
              last follow-up of the day, every step is captured, summarised, and
              routed to the right person.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <BookDemoButton className="inline-flex h-12 items-center justify-center rounded-full bg-green-contrast px-6 text-base font-semibold text-neutral-900 transition-opacity hover:opacity-90">
                Book a Demo
              </BookDemoButton>
            </div>
          </div>
        </section>

        <section className="px-5 py-16 sm:px-8 sm:py-20">
          <div className="mx-auto w-full max-w-7xl">
            <div className="grid gap-5 md:grid-cols-2">
              {features.map((feature) => (
                <Link
                  key={feature.href}
                  href={feature.href}
                  className="group block rounded-xl border border-neutral-200 bg-white p-6 transition-colors hover:border-green-contrast/40 hover:bg-neutral-50"
                >
                  <h2 className="text-xl font-semibold text-neutral-900 transition-colors group-hover:text-green-contrast">
                    {feature.title}
                  </h2>
                  <p className="mt-3 text-base leading-7 text-neutral-600">
                    {feature.description}
                  </p>
                  <p className="mt-5 text-sm font-medium text-green-contrast">
                    Learn more →
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
