import { Nav } from "@/components/landing/nav";
import { Footer } from "@/components/landing/footer";
import { BookDemoButton } from "@/components/book-demo-button";

export const metadata = {
  title: "Morning Briefing · Otto",
  description:
    "Start every rep's day with the accounts that matter. Otto calls before your first customer visit with the quotes to follow up, customers that have gone quiet, and renewals coming up.",
};

const briefingBullets = [
  "Quotes that need follow-up.",
  "Customers that have gone quiet.",
  "Renewals coming up.",
  "Competitor activity.",
  "New opportunities in your territory.",
];

const withoutOtto = [
  "A quote needs attention.",
  "A renewal is coming up.",
  "A customer has stopped responding.",
  "A competitor is active in an account.",
  "A new facility has opened in your territory.",
];

const withOtto = [
  "Quotes that need follow-up.",
  "Customers showing buying signals.",
  "Renewals coming up.",
  "Competitor activity.",
  "New facilities opening nearby.",
  "Cross-sell opportunities inside existing accounts.",
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
                Morning Briefing
              </span>
            </div>

            <h1 className="mt-8 text-3xl font-semibold tracking-[-0.04em] text-heading md:text-5xl">
              The First Sales Call Of The Day
              <br />
              <span className="text-brand">Comes From Otto.</span>
            </h1>

            <p className="mt-6 text-lg leading-relaxed text-muted-foreground md:text-xl">
              Morning Briefing is your daily call from Otto.
            </p>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
              Before your first customer visit, Otto tells you what needs
              attention today.
            </p>

            <ul className="mt-6 max-w-2xl space-y-2 text-base leading-relaxed text-foreground/85">
              {briefingBullets.map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-brand" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>

            <p className="mt-6 max-w-2xl text-base leading-relaxed text-foreground/85">
              The same briefing lands in your inbox for later.
            </p>

            <p className="mt-6 max-w-2xl text-base font-medium leading-relaxed text-heading">
              No CRM digging. No inbox searching. No guessing where to start.
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
              The day starts before the first customer visit.
            </h2>

            <ul className="mt-8 max-w-2xl space-y-3 text-base leading-relaxed text-foreground/85">
              {withoutOtto.map((line) => (
                <li key={line} className="flex items-start gap-3">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-muted-foreground" />
                  <span>{line}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10 max-w-2xl space-y-4 text-base leading-relaxed text-muted-foreground">
              <p>The information exists.</p>
              <p>
                It&rsquo;s just scattered across emails, CRM, customer
                conversations, and whatever you can remember from yesterday.
              </p>
              <p>
                The problem is not information.
                <br />
                The problem is knowing where to focus first.
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
              Before your day begins, Otto checks what&rsquo;s happening across
              your accounts, quotes, customers, and territory.
            </h2>
            <p className="mt-3 text-2xl font-semibold tracking-tight text-heading md:text-4xl">
              Then it calls with the actions worth taking today.
            </p>

            <ul className="mt-8 max-w-2xl space-y-3 text-base leading-relaxed text-foreground/85">
              {withOtto.map((line) => (
                <li key={line} className="flex items-start gap-3">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-brand" />
                  <span>{line}</span>
                </li>
              ))}
            </ul>

            <p className="mt-10 max-w-2xl text-base leading-relaxed text-muted-foreground">
              So instead of figuring out what to do next, you can get on with
              it.
            </p>
          </div>
        </section>

        {/* The call (visual block) */}
        <section className="border-b border-light-dark">
          <div className="mx-auto grid w-full max-w-7xl gap-10 px-5 py-16 md:px-10 md:py-24 lg:grid-cols-2 lg:gap-16">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight text-heading md:text-4xl">
                The First Sales Call Of The Day
                <br />
                <span className="text-brand">Comes From Otto.</span>
              </h2>

              <div className="mt-10 max-w-md rounded-2xl border border-light-dark bg-light-dark/40 p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                  7:00 AM
                </p>
                <p className="mt-3 text-base text-foreground/85">
                  Good morning. Here are today&rsquo;s priorities.
                </p>

                <div className="mt-5 space-y-4">
                  <div>
                    <p className="text-sm font-semibold text-heading">
                      Northgate Industrial
                    </p>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      Your compressed air quote has been sitting for 12 days.
                      Call them today.
                    </p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-heading">
                      Apex Food Processing
                    </p>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      A new production facility has been announced in your
                      territory. Add them to your prospecting list.
                    </p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-heading">
                      Westbrook Manufacturing
                    </p>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      Three similar customers recently purchased condition
                      monitoring systems. Bring it up during today&rsquo;s visit.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">
                Recommended Actions
              </p>
              <ul className="mt-4 space-y-3 text-base leading-relaxed text-foreground/85">
                <li className="flex items-start gap-3">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-brand" />
                  <span>Follow up on the Northgate quote</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-brand" />
                  <span>Add Apex to your prospecting list</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-brand" />
                  <span>
                    Discuss condition monitoring during today&rsquo;s Westbrook
                    visit
                  </span>
                </li>
              </ul>

              <p className="mt-8 text-base leading-relaxed text-muted-foreground">
                Otto calls while you&rsquo;re on the road. The same briefing is
                waiting in your inbox when you need it.
              </p>

              <div className="mt-8">
                <BookDemoButton className="btn-primary inline-flex h-12 items-center rounded-full px-6 text-base font-semibold">
                  Book a Demo
                </BookDemoButton>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
