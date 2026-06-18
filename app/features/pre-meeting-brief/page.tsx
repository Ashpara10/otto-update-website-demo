import { Nav } from "@/components/landing/nav";
import { Footer } from "@/components/landing/footer";
import { BookDemoButton } from "@/components/book-demo-button";

export const metadata = {
  title: "Pre-Visit Brief · Otto",
  description:
    "Thirty minutes before the visit, Otto sends a brief with the who and the what of the meeting. Walk into every visit already knowing where you left off.",
};

const heroBullets = [
  "Recent orders.",
  "Open quotes.",
  "Service issues.",
  "Renewals.",
  "Account history.",
  "Things worth bringing up.",
];

const theProblem = [
  "You know you've spoken before.",
  "You know there was a quote.",
  "You remember a service issue came up.",
  "You remember promising something.",
  "You just don't remember the details.",
];

const withOtto = [
  "Last order.",
  "Open quotes.",
  "Outstanding issues.",
  "Recent conversations.",
  "Upcoming renewals.",
  "Product lines they already buy.",
  "Product lines they don't buy from you yet.",
  "Things worth bringing up.",
];

const worthBringingUp = [
  "Follow up on the open quote.",
  "Ask whether the delivery issue has been resolved.",
  "Discuss their expansion plans.",
  "Introduce condition monitoring during the conversation.",
];

export default function Page() {
  return (
    <div className="mx-auto flex min-h-screen w-full max-w-[1920px] flex-col bg-dark text-heading">
      <Nav />

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden border-b border-light-dark pt-32 sm:pt-36">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_12%,rgba(203,253,64,0.08),transparent_46%)]" />
          <div className="mx-auto w-full max-w-7xl px-5 md:px-10 pb-20">
            <div className="inline-flex items-center gap-2 rounded-full border border-light-dark bg-dark px-3 py-1 text-xs font-medium text-foreground/85">
              <span className="rounded-full bg-brand/15 px-2 py-0.5 font-semibold text-brand">
                Pre-Visit Brief
              </span>
            </div>

            <h1 className="mt-8 text-3xl font-semibold tracking-[-0.04em] text-heading md:text-5xl">
              Show Up To Every Visit
              <br />
              <span className="text-brand">Prepared.</span>
            </h1>

            <p className="mt-6 text-lg leading-relaxed text-muted-foreground md:text-xl">
              Thirty minutes before the visit, Otto sends a brief with the who
              and the what of the meeting.
            </p>

            <ul className="mt-6 max-w-2xl space-y-2 text-base leading-relaxed text-foreground/85">
              {heroBullets.map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-brand" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>

            <p className="mt-6 max-w-2xl text-base leading-relaxed text-foreground/85">
              No digging through dashboards.
              <br />
              No trying to remember what happened last time.
            </p>

            <p className="mt-2 max-w-2xl text-base font-medium leading-relaxed text-heading">
              Just one clear brief before you walk through the door.
            </p>

            <div className="mt-8">
              <BookDemoButton className="btn-primary inline-flex h-12 items-center rounded-full px-6 text-base font-semibold">
                Book a Demo
              </BookDemoButton>
            </div>
          </div>
        </section>

        {/* The Problem */}
        <section className="border-b border-light-dark">
          <div className="mx-auto w-full max-w-7xl px-5 md:px-10 py-16 md:py-24">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">
              The Problem
            </p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-heading md:text-4xl">
              The next customer is expecting you.
            </h2>

            <ul className="mt-8 max-w-2xl space-y-3 text-base leading-relaxed text-foreground/85">
              {theProblem.map((line) => (
                <li key={line} className="flex items-start gap-3">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-muted-foreground" />
                  <span>{line}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10 max-w-2xl space-y-4 text-base leading-relaxed text-muted-foreground">
              <p>The information exists.</p>
              <p>
                It&rsquo;s spread across emails, CRM, notebooks, and memory.
              </p>
              <p>
                The problem is not information.
                <br />
                The problem is walking in without context.
              </p>
            </div>
          </div>
        </section>

        {/* With Otto */}
        <section className="border-b border-light-dark">
          <div className="mx-auto w-full max-w-7xl px-5 md:px-10 py-16 md:py-24">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">
              With Otto
            </p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-heading md:text-4xl">
              Thirty minutes before the meeting, Otto sends the brief.
            </h2>

            <ul className="mt-8 max-w-2xl space-y-3 text-base leading-relaxed text-foreground/85">
              {withOtto.map((line) => (
                <li key={line} className="flex items-start gap-3">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-brand" />
                  <span>{line}</span>
                </li>
              ))}
            </ul>

            <p className="mt-6 max-w-2xl text-base leading-relaxed text-foreground/85">
              Need more detail? Call Otto and ask.
            </p>

            <p className="mt-2 max-w-2xl text-base font-medium leading-relaxed text-heading">
              So you walk in knowing where you left off.
            </p>
          </div>
        </section>

        {/* Sample brief visual */}
        <section className="border-b border-light-dark">
          <div className="mx-auto w-full max-w-7xl px-5 md:px-10 py-16 md:py-24">
            <h2 className="text-2xl font-semibold tracking-tight text-heading md:text-4xl">
              Here&rsquo;s What Your Brief
              <br />
              <span className="text-brand">Might Look Like.</span>
            </h2>

            <div className="mt-10 max-w-3xl rounded-2xl border border-light-dark bg-light-dark/40 p-5 md:p-8">
              <div className="flex flex-wrap items-baseline justify-between gap-3">
                <p className="text-lg font-semibold text-heading md:text-xl">
                  Northgate Industrial
                </p>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">
                  Meeting · Mike Turner · 10:30 AM
                </p>
              </div>

              <div className="mt-8 space-y-6">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                    Last Order
                  </p>
                  <p className="mt-2 text-base leading-relaxed text-foreground/85">
                    Compressed air system delivered three weeks ago.
                  </p>
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                    Open Quote
                  </p>
                  <p className="mt-2 text-base leading-relaxed text-foreground/85">
                    Replacement compressor quote has been open for 12 days.
                  </p>
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                    Service Issue
                  </p>
                  <p className="mt-2 text-base leading-relaxed text-foreground/85">
                    Delivery delays were raised during the last visit.
                  </p>
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                    Renewal
                  </p>
                  <p className="mt-2 text-base leading-relaxed text-foreground/85">
                    Service contract renews next month.
                  </p>
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                    Opportunity
                  </p>
                  <p className="mt-2 text-base leading-relaxed text-foreground/85">
                    Northgate buys compressors from you but not condition
                    monitoring. Three similar customers recently added
                    monitoring systems.
                  </p>
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                    Worth Bringing Up
                  </p>
                  <ul className="mt-3 space-y-2 text-base leading-relaxed text-foreground/85">
                    {worthBringingUp.map((line) => (
                      <li key={line} className="flex items-start gap-3">
                        <span className="mt-0.5 text-brand">✓</span>
                        <span>{line}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <p className="mt-10 max-w-2xl text-base font-medium leading-relaxed text-heading">
              Walk in knowing where you left off.
              <br />
              Not hoping you&rsquo;ll remember.
            </p>

            <div className="mt-8">
              <BookDemoButton className="btn-primary inline-flex h-12 items-center rounded-full px-6 text-base font-semibold">
                Book a Demo
              </BookDemoButton>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
