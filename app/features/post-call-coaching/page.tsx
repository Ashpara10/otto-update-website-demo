import { Nav } from "@/components/landing/nav";
import { Footer } from "@/components/landing/footer";
import { BookDemoButton } from "@/components/book-demo-button";

export const metadata = {
  title: "Post-Visit Coach · Otto",
  description:
    "After a visit, Otto turns the conversation into a clear report. What changed, what the customer cared about, what needs follow-up, and what to do next.",
};

const heroBullets = [
  "What changed.",
  "What the customer cared about.",
  "What needs follow-up.",
  "What risks showed up.",
  "What to do next.",
];

const theProblem = [
  "Did they ask for revised pricing?",
  "Did they mention another supplier?",
  "Was there an expansion project?",
  "Who promised what?",
  "Was there real interest, or were they just being polite?",
];

const withOtto = [
  "What mattered.",
  "Questions that came up.",
  "Competitors mentioned.",
  "Risks raised.",
  "Follow-ups required.",
  "Quote actions.",
  "Next steps.",
  "Manager updates.",
  "Coaching opportunities.",
];

const whatMattered = [
  "Delivery delays from the previous order are still a concern.",
  "Condition monitoring generated interest.",
  "Expansion plans for another facility were mentioned.",
];

const risks = [
  "Competitor pricing came up during the conversation.",
  "Customer expects a revised quote this week.",
  "No timeline was discussed for the expansion project.",
];

const nextSteps = [
  "Send revised pricing by Friday.",
  "Follow up next Tuesday.",
  "Include condition monitoring in the proposal.",
  "Inform manager about expansion plans.",
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
                Post-Visit Coach
              </span>
            </div>

            <h1 className="mt-8 text-3xl font-semibold tracking-[-0.04em] text-heading md:text-5xl">
              Every Customer Conversation
              <br />
              <span className="text-brand">Moves The Deal Forward.</span>
            </h1>

            <p className="mt-6 text-lg leading-relaxed text-muted-foreground md:text-xl">
              After a visit, Otto turns the conversation into a clear report.
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
              No vague notes.
              <br />
              No trying to remember the conversation tomorrow.
              <br />
              No wondering whether the opportunity is moving.
            </p>

            <p className="mt-6 max-w-2xl text-base font-medium leading-relaxed text-heading">
              Just a clear review while the conversation is still fresh.
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
              The visit is over.
              <br />
              You&rsquo;re driving to the next customer.
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-relaxed text-foreground/85">
              You remember most of the conversation.
              <br />
              But not all of it.
            </p>

            <ul className="mt-6 max-w-2xl space-y-3 text-base leading-relaxed text-foreground/85">
              {theProblem.map((line) => (
                <li key={line} className="flex items-start gap-3">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-muted-foreground" />
                  <span>{line}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10 max-w-2xl space-y-4 text-base leading-relaxed text-muted-foreground">
              <p>By the end of the day, details fade.</p>
              <p>
                The problem is not activity.
                <br />
                The problem is losing what happened.
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
              After the visit, Otto turns the conversation into a report.
            </h2>

            <ul className="mt-8 max-w-2xl space-y-3 text-base leading-relaxed text-foreground/85">
              {withOtto.map((line) => (
                <li key={line} className="flex items-start gap-3">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-brand" />
                  <span>{line}</span>
                </li>
              ))}
            </ul>

            <p className="mt-10 max-w-2xl text-base font-medium leading-relaxed text-heading">
              So every conversation becomes the starting point for the next
              one.
            </p>
          </div>
        </section>

        {/* Sample review visual */}
        <section className="border-b border-light-dark">
          <div className="mx-auto w-full max-w-7xl px-5 md:px-10 py-16 md:py-24">
            <h2 className="text-2xl font-semibold tracking-tight text-heading md:text-4xl">
              Here&rsquo;s What Your Review
              <br />
              <span className="text-brand">Might Look Like.</span>
            </h2>

            <div className="mt-10 max-w-3xl rounded-2xl border border-light-dark bg-light-dark/40 p-5 md:p-8">
              <div className="flex flex-wrap items-baseline justify-between gap-3">
                <p className="text-lg font-semibold text-heading md:text-xl">
                  Northgate Industrial
                </p>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">
                  Call Outcome · Positive
                </p>
              </div>
              <p className="mt-3 text-base leading-relaxed text-foreground/85">
                Customer requested revised pricing by Friday.
              </p>

              <div className="mt-8 space-y-6">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                    What Mattered
                  </p>
                  <ul className="mt-3 space-y-2 text-base leading-relaxed text-foreground/85">
                    {whatMattered.map((line) => (
                      <li key={line} className="flex items-start gap-3">
                        <span className="mt-2 size-1.5 shrink-0 rounded-full bg-brand" />
                        <span>{line}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                    Risks
                  </p>
                  <ul className="mt-3 space-y-2 text-base leading-relaxed text-foreground/85">
                    {risks.map((line) => (
                      <li key={line} className="flex items-start gap-3">
                        <span className="mt-2 size-1.5 shrink-0 rounded-full bg-amber-400" />
                        <span>{line}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                    Next Steps
                  </p>
                  <ul className="mt-3 space-y-2 text-base leading-relaxed text-foreground/85">
                    {nextSteps.map((line) => (
                      <li key={line} className="flex items-start gap-3">
                        <span className="mt-0.5 text-brand">✓</span>
                        <span>{line}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                    Coaching Note
                  </p>
                  <p className="mt-2 text-base leading-relaxed text-foreground/85">
                    When the customer mentioned the expansion project, there was
                    an opportunity to ask about timing and budget. Bring that up
                    during the next visit.
                  </p>
                </div>
              </div>
            </div>

            <p className="mt-10 max-w-2xl text-base font-medium leading-relaxed text-heading">
              Nothing gets lost.
              <br />
              Every conversation becomes the starting point for the next one.
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
