import { Nav } from "@/components/landing/nav";
import { Footer } from "@/components/landing/footer";
import { BookDemoButton } from "@/components/book-demo-button";

export const metadata = {
  title: "Sales Intelligence · Otto",
  description:
    "Ask Otto and get an answer. Product, specs, stock, lead times, previous orders, or what to do next. The information you need, when you need it.",
};

const heroBullets = [
  "About products.",
  "Specifications.",
  "Stock.",
  "Lead times.",
  "Previous orders.",
  "Or what to do next.",
];

const sources = [
  "ERP.",
  "CRM.",
  "Product manuals.",
  "Quotes.",
  "Emails.",
  "Previous visits.",
  "Service tickets.",
  "Customer conversations.",
  "Rep memory.",
];

const contextTypes = [
  "Product context.",
  "Inventory context.",
  "Account context.",
  "Customer context.",
  "Deal context.",
];

const askOtto = [
  "Will this fit their application?",
  "Do we have stock?",
  "What did they say during the last visit?",
  "Why is this quote still open?",
  "Have we sold this to similar customers?",
  "What should I bring up before I leave?",
  "Have they mentioned competitors before?",
];

const exchanges = [
  {
    question: "Will the VFD-400 fit their current setup?",
    answer: [
      "Yes. Northgate currently runs the VFD-300.",
      "The VFD-400 is compatible and offers 20% more capacity.",
      "Inventory shows 18 units in stock.",
      "Lead time is two days.",
      "An open quote from February is still pending.",
      "Three similar customers upgraded last year.",
      "Worth bringing that up while you’re there.",
    ],
  },
  {
    question: "They mentioned another supplier. Have we seen them before?",
    answer: [
      "Yes.",
      "The same competitor came up with Westline Manufacturing in March.",
      "They chose your premium package because of delivery times and local support.",
      "That may be worth discussing.",
    ],
  },
  {
    question: "Before I leave, what else should I ask?",
    answer: [
      "During the last visit, they mentioned expanding a second facility.",
      "You may want to ask whether that project is still moving forward.",
      "Customers with similar installations often add condition monitoring during expansion projects.",
    ],
  },
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
                Sales Intelligence
              </span>
            </div>

            <h1 className="mt-8 text-3xl font-semibold tracking-[-0.04em] text-heading md:text-5xl">
              <span className="text-brand">Answers</span> When You
              <br />
              Need Them.
            </h1>

            <p className="mt-6 text-lg leading-relaxed text-muted-foreground md:text-xl">
              You&rsquo;re with the customer. Questions come up.
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
              <p className="text-heading font-medium">Ask Otto. Get an answer.</p>
              <p>
                No searching. No calling back later. No &ldquo;I&rsquo;ll get
                back to you.&rdquo;
              </p>
            </div>

            <p className="mt-6 max-w-2xl text-base font-medium leading-relaxed text-heading">
              Just the information you need, when you need it.
            </p>

            <div className="mt-8">
              <BookDemoButton sourcePage="feature_product_inquiry" className="btn-primary inline-flex h-12 items-center rounded-full px-6 text-base font-semibold">
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
              Industrial sales runs on information.
              <br />
              But information lives everywhere.
            </h2>

            <ul className="mt-8 grid max-w-3xl grid-cols-1 gap-x-8 gap-y-2 text-base leading-relaxed text-foreground/85 sm:grid-cols-2">
              {sources.map((line) => (
                <li key={line} className="flex items-start gap-3">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-muted-foreground" />
                  <span>{line}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10 max-w-2xl space-y-4 text-base leading-relaxed text-muted-foreground">
              <p>Nothing is missing.</p>
              <p>Nothing is connected.</p>
              <p>So reps spend time searching.</p>
              <p>Or worse, relying on memory.</p>
              <p className="pt-2 text-heading font-medium">
                The problem is not information.
                <br />
                The problem is context.
              </p>
            </div>
          </div>
        </section>

        {/* Otto Connects The Dots */}
        <section className="border-b border-light-dark">
          <div className="mx-auto w-full max-w-7xl px-5 md:px-10 py-16 md:py-24">
            <h2 className="text-2xl font-semibold tracking-tight text-heading md:text-4xl">
              <span className="text-brand">Otto</span> Connects The Dots.
            </h2>

            <p className="mt-4 max-w-2xl text-base leading-relaxed text-foreground/85">
              Otto brings together what your business already knows.
            </p>

            <ul className="mt-6 max-w-2xl space-y-3 text-base leading-relaxed text-foreground/85">
              {contextTypes.map((line) => (
                <li key={line} className="flex items-start gap-3">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-brand" />
                  <span>{line}</span>
                </li>
              ))}
            </ul>

            <p className="mt-8 max-w-2xl text-base leading-relaxed text-foreground/85">
              So when you ask a question, Otto doesn&rsquo;t just search.
            </p>

            <div className="mt-4 max-w-2xl space-y-1 text-base leading-relaxed text-heading">
              <p>It understands.</p>
              <p>It remembers.</p>
              <p>
                And it gives you an answer based on everything it knows.
                <br />
                <span className="text-muted-foreground font-normal">
                  Not just what&rsquo;s in one system.
                </span>
              </p>
            </div>

            <p className="mt-10 max-w-2xl text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              Ask Otto:
            </p>

            <ul className="mt-4 max-w-2xl space-y-3 text-base leading-relaxed text-foreground/85">
              {askOtto.map((line) => (
                <li
                  key={line}
                  className="flex items-start gap-3 italic text-foreground/90"
                >
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-brand" />
                  <span>&ldquo;{line}&rdquo;</span>
                </li>
              ))}
            </ul>

            <div className="mt-10 max-w-2xl space-y-2 text-base leading-relaxed text-heading">
              <p>So every answer comes with context.</p>
              <p>And every conversation moves forward.</p>
            </div>
          </div>
        </section>

        {/* Voice / chat interface visual */}
        <section className="border-b border-light-dark">
          <div className="mx-auto w-full max-w-7xl px-5 md:px-10 py-16 md:py-24">
            <h2 className="text-2xl font-semibold tracking-tight text-heading md:text-4xl">
              Here&rsquo;s What It
              <br />
              <span className="text-brand">Looks Like.</span>
            </h2>

            <div className="mt-10 max-w-3xl space-y-6">
              {exchanges.map((ex) => (
                <div
                  key={ex.question}
                  className="rounded-2xl border border-light-dark bg-light-dark/40 p-5 md:p-6"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                    You
                  </p>
                  <p className="mt-2 text-base font-medium leading-relaxed text-heading">
                    {ex.question}
                  </p>

                  <p className="mt-5 text-xs font-semibold uppercase tracking-[0.2em] text-brand">
                    Otto
                  </p>
                  <div className="mt-2 space-y-1.5 text-base leading-relaxed text-foreground/85">
                    {ex.answer.map((line) => (
                      <p key={line}>{line}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <p className="mt-10 max-w-2xl text-base font-medium leading-relaxed text-heading">
              Everything Otto knows.
              <br />
              Available when you need it.
            </p>

            <div className="mt-8">
              <BookDemoButton sourcePage="feature_product_inquiry" className="btn-primary inline-flex h-12 items-center rounded-full px-6 text-base font-semibold">
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
