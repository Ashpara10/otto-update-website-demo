import { Nav } from "@/components/landing/nav";
import { Footer } from "@/components/landing/footer";
import { BookDemoButton } from "@/components/book-demo-button";

export const metadata = {
  title: "Trade Show Companion · Otto",
  description:
    "Trade Show Companion helps you capture every conversation while it is still fresh. Scan a LinkedIn QR code, get context before the talk, remember what happened afterwards.",
};

const heroBullets = [
  "Trade shows move fast.",
  "Conversations blur together.",
  "Business cards pile up.",
  "Good opportunities disappear.",
];

const theProblem = [
  "Who was evaluating?",
  "Who already has a supplier?",
  "Who wanted pricing?",
  "Who mentioned an expansion project?",
  "Who said “call me next month”?",
];

const withOttoBefore = [
  "Who they are.",
  "What their company does.",
  "Whether they fit your business.",
  "Likely talking points.",
  "Their existing technology stack.",
  "Questions worth asking.",
];

const withOttoAfter = [
  "Conversation notes.",
  "Follow-ups.",
  "Opportunities.",
  "Manager visibility.",
];

const companyContext = [
  "Opening a new facility next year.",
  "Uses Siemens PLCs.",
  "Currently buying from a regional distributor.",
  "Good fit for automation products.",
];

const worthTalkingAbout = [
  "Ask about expansion plans.",
  "Discuss lead times and local support.",
  "Mention similar manufacturing customers.",
];

const conversationNotes = [
  "Interested in VFD upgrades.",
  "Requested pricing.",
  "Looking at Q1 implementation.",
  "Follow up next week.",
];

const nextSteps = [
  "Opportunity created",
  "Follow-up drafted",
  "Manager notified",
  "Reminder set",
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
                Trade Show Companion
              </span>
            </div>

            <h1 className="mt-8 text-3xl font-semibold tracking-[-0.04em] text-heading md:text-5xl">
              Leave The Event With
              <br />
              <span className="text-brand">
                Opportunities. Not Business Cards.
              </span>
            </h1>

            <p className="mt-6 text-lg leading-relaxed text-muted-foreground md:text-xl">
              Trade shows move fast. Conversations blur together. Business
              cards pile up. Good opportunities disappear.
            </p>

            <p className="mt-4 max-w-2xl text-base leading-relaxed text-foreground/85">
              Trade Show Sidekick helps you capture every conversation while
              it&rsquo;s still fresh.
            </p>

            <ul className="mt-6 max-w-2xl space-y-2 text-base leading-relaxed text-foreground/85">
              {heroBullets.map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-brand" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6 max-w-2xl space-y-3 text-base leading-relaxed text-foreground/85">
              <p>
                Scan someone&rsquo;s LinkedIn QR code. Otto learns who they are
                and who they work for.
              </p>
              <p>
                Then it gives you context before the conversation and remembers
                what happened afterwards.
              </p>
            </div>

            <p className="mt-6 max-w-2xl text-base font-medium leading-relaxed text-heading">
              So you leave the event with opportunities, not just contacts.
            </p>

            <div className="mt-8">
              <BookDemoButton sourcePage="feature_sales_brain" className="btn-primary inline-flex h-12 items-center rounded-full px-6 text-base font-semibold">
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
              By the second day, names start blending together.
            </h2>

            <div className="mt-6 max-w-2xl space-y-4 text-base leading-relaxed text-foreground/85">
              <p>You remember the conversation.</p>
              <p>You forget the details.</p>
            </div>

            <ul className="mt-6 max-w-2xl space-y-3 text-base leading-relaxed text-foreground/85">
              {theProblem.map((line) => (
                <li key={line} className="flex items-start gap-3">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-muted-foreground" />
                  <span>{line}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10 max-w-2xl space-y-2 text-base leading-relaxed text-muted-foreground">
              <p>The problem is not activity.</p>
              <p className="text-heading font-medium">
                The problem is losing context.
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
              Scan their LinkedIn QR code.
            </h2>
            <p className="mt-3 text-2xl font-semibold tracking-tight text-heading md:text-4xl">
              Otto identifies the person and their company.
            </p>
            <p className="mt-3 text-2xl font-semibold tracking-tight text-heading md:text-4xl">
              Then it builds context for the conversation.
            </p>

            <ul className="mt-8 max-w-2xl space-y-3 text-base leading-relaxed text-foreground/85">
              {withOttoBefore.map((line) => (
                <li key={line} className="flex items-start gap-3">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-brand" />
                  <span>{line}</span>
                </li>
              ))}
            </ul>

            <p className="mt-10 max-w-2xl text-base leading-relaxed text-foreground/85">
              After the conversation, tell Otto what happened.
            </p>
            <p className="mt-2 max-w-2xl text-base font-medium leading-relaxed text-heading">
              Everything stays connected.
            </p>

            <ul className="mt-6 max-w-2xl space-y-3 text-base leading-relaxed text-foreground/85">
              {withOttoAfter.map((line) => (
                <li key={line} className="flex items-start gap-3">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-brand" />
                  <span>{line}</span>
                </li>
              ))}
            </ul>

            <p className="mt-10 max-w-2xl text-base font-medium leading-relaxed text-heading">
              So when the event ends, the work is already moving.
            </p>
          </div>
        </section>

        {/* Sample mobile view */}
        <section className="border-b border-light-dark">
          <div className="mx-auto w-full max-w-7xl px-5 md:px-10 py-16 md:py-24">
            <h2 className="text-2xl font-semibold tracking-tight text-heading md:text-4xl">
              Here&rsquo;s What It
              <br />
              <span className="text-brand">Looks Like.</span>
            </h2>

            <div className="mt-10 max-w-3xl rounded-2xl border border-light-dark bg-light-dark/40 p-5 md:p-8">
              <div>
                <p className="text-lg font-semibold text-heading md:text-xl">
                  Sarah Mitchell
                </p>
                <p className="text-sm text-muted-foreground">
                  Operations Manager
                </p>
                <p className="text-sm text-muted-foreground">
                  Westline Manufacturing
                </p>
              </div>

              <div className="mt-8 space-y-6">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                    Company Context
                  </p>
                  <ul className="mt-3 space-y-2 text-base leading-relaxed text-foreground/85">
                    {companyContext.map((line) => (
                      <li key={line} className="flex items-start gap-3">
                        <span className="mt-2 size-1.5 shrink-0 rounded-full bg-brand" />
                        <span>{line}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                    Worth Talking About
                  </p>
                  <ul className="mt-3 space-y-2 text-base leading-relaxed text-foreground/85">
                    {worthTalkingAbout.map((line) => (
                      <li key={line} className="flex items-start gap-3">
                        <span className="mt-2 size-1.5 shrink-0 rounded-full bg-brand" />
                        <span>{line}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                    Conversation Notes
                  </p>
                  <ul className="mt-3 space-y-2 text-base leading-relaxed text-foreground/85">
                    {conversationNotes.map((line) => (
                      <li key={line} className="flex items-start gap-3">
                        <span className="mt-2 size-1.5 shrink-0 rounded-full bg-brand" />
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
              </div>
            </div>

            <p className="mt-10 max-w-2xl text-base font-medium leading-relaxed text-heading">
              Every conversation captured.
              <br />
              Every opportunity remembered.
            </p>
            <p className="mt-2 max-w-2xl text-base leading-relaxed text-foreground/85">
              Nothing gets lost when the event ends.
            </p>

            <div className="mt-8">
              <BookDemoButton sourcePage="feature_sales_brain" className="btn-primary inline-flex h-12 items-center rounded-full px-6 text-base font-semibold">
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
