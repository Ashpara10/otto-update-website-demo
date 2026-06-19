import { Nav } from "@/components/landing/nav";
import { Footer } from "@/components/landing/footer";
import { BookDemoButton } from "@/components/book-demo-button";

export const metadata = {
  title: "CRM Updates · Otto",
  description:
    "Otto captures every customer visit, phone call, follow-up, quote, and next step and updates your CRM automatically. Finish the day without admin.",
};

const heroBullets = [
  "Customer visits.",
  "Phone calls.",
  "Follow-ups.",
  "Quotes.",
  "Next steps.",
];

const theProblem = [
  "Meeting notes.",
  "CRM updates.",
  "Follow-ups.",
  "Quote requests.",
  "Next steps.",
];

const withOtto = [
  "Meeting logged.",
  "CRM updated.",
  "Follow-ups drafted.",
  "Quote actions flagged.",
  "Opportunity updated.",
  "Competitor intel captured.",
  "Manager informed.",
];

const nothingGetsLeftBehind = [
  "Customer visits.",
  "Meeting notes.",
  "Open opportunities.",
  "Follow-ups.",
  "Quote requests.",
  "Competitor mentions.",
  "Service issues.",
  "New contacts.",
  "Account history.",
  "Manager summaries.",
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
                CRM Updates
              </span>
            </div>

            <h1 className="mt-8 text-3xl font-semibold tracking-[-0.04em] text-heading md:text-5xl">
              Finish The Day
              <br />
              <span className="text-brand">Without Admin.</span>
            </h1>

            <p className="mt-6 text-lg leading-relaxed text-muted-foreground md:text-xl">
              Customer visits. Phone calls. Follow-ups. Quotes. Next steps.
            </p>

            <p className="mt-4 max-w-2xl text-base leading-relaxed text-foreground/85">
              Otto captures it all and updates your CRM automatically.
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
              So reps can stay where they thrive most.
              <br />
              <span className="text-heading font-medium">
                In the field. Not behind a desk.
              </span>
            </p>

            <div className="mt-8">
              <BookDemoButton sourcePage="feature_crm_updates" className="btn-primary inline-flex h-12 items-center rounded-full px-6 text-base font-semibold">
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
              The customer visit is over.
              <br />
              The work isn&rsquo;t.
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
              <p>Everything waits until later.</p>
              <p>Then tomorrow. Then Friday. Then pipeline review.</p>
              <p>Nothing is forgotten on purpose.</p>
              <p>People are busy.</p>
              <p className="text-heading font-medium">
                That&rsquo;s when opportunities slip.
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
              Otto updates after every visit.
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
              Before you reach the next stop, the admin is already moving.
            </p>
          </div>
        </section>

        {/* Nothing gets left behind */}
        <section className="border-b border-light-dark">
          <div className="mx-auto w-full max-w-7xl px-5 md:px-10 py-16 md:py-24">
            <h2 className="text-2xl font-semibold tracking-tight text-heading md:text-4xl">
              <span className="text-brand">Nothing</span> Gets Left Behind.
            </h2>

            <ul className="mt-8 max-w-2xl space-y-3 text-base leading-relaxed text-foreground/85">
              {nothingGetsLeftBehind.map((line) => (
                <li key={line} className="flex items-start gap-3">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-brand" />
                  <span>{line}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10 max-w-2xl space-y-4 text-base leading-relaxed text-muted-foreground">
              <p>Nothing disappears into notebooks.</p>
              <p>Nothing waits for Friday.</p>
              <p>Nothing depends on memory.</p>
              <p className="text-heading font-medium pt-2">
                Because sales happens in the field.
                <br />
                Not behind a desk.
              </p>
            </div>

            <div className="mt-10">
              <BookDemoButton sourcePage="feature_crm_updates" className="btn-primary inline-flex h-12 items-center rounded-full px-6 text-base font-semibold">
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
