"use client";

import { Nav } from "@/components/landing/nav";
import { Footer } from "@/components/landing/footer";
import { BookDemoButton } from "@/components/book-demo-button";

export type TimelineEntry = {
  time: string;
  description: string;
};

export type Benefit = {
  title: string;
  description: string;
};

export type WhoPageProps = {
  eyebrow: string;
  headline: string;
  highlight: string;
  subtitle: string;
  beforeHeading: string;
  beforeIntro: string;
  beforeItems: string[];
  dayHeading: string;
  dayEntries: TimelineEntry[];
  benefitHeading: string;
  benefits: Benefit[];
};

function SectionLabel({
  children,
  centered = false,
}: {
  children: React.ReactNode;
  centered?: boolean;
}) {
  return (
    <div
      className={`text-[15px] font-medium flex items-center ${centered ? "justify-center" : "justify-start"} gap-3 text-brand`}
    >
      <span className="w-0.5 rounded-full h-4 bg-brand" /> {children}
    </div>
  );
}

export function WhoPage({
  eyebrow,
  headline,
  highlight,
  subtitle,
  beforeHeading,
  beforeIntro,
  beforeItems,
  dayHeading,
  dayEntries,
  benefitHeading,
  benefits,
}: WhoPageProps) {
  return (
    <div className="min-h-screen bg-dark text-heading">
      <Nav />

      <main>
        {/* Hero */}
        <section className="relative py-20 lg:py-28">
          <div className="mx-auto max-w-4xl px-6 md:px-10 text-center">
            <SectionLabel centered>{eyebrow}</SectionLabel>
            <h1 className="mt-4 text-2xl md:text-3xl font-semibold tracking-tight text-heading">
              {headline}
              <br />
              <span className="text-brand">{highlight}</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground">
              {subtitle}
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <BookDemoButton className="btn-primary inline-flex h-12 items-center justify-center rounded-full px-6 text-base font-semibold">
                Book a Demo
              </BookDemoButton>
            </div>
          </div>
        </section>

        {/* Before Otto */}
        <section className="bg-dark px-5 py-16 sm:px-8 sm:py-20 border-t border-light-dark">
          <div className="mx-auto max-w-4xl">
            <SectionLabel>{beforeHeading}</SectionLabel>
            <h2 className="mt-3 text-2xl md:text-3xl font-semibold tracking-tight text-heading">
              {beforeIntro}
            </h2>

            <ul className="mt-8 space-y-3">
              {beforeItems.map((line) => (
                <li
                  key={line}
                  className="flex items-start gap-3 rounded-xl border border-rose-500/20 bg-rose-500/[0.04] px-5 py-3 text-base leading-relaxed text-foreground/85"
                >
                  <span className="grid size-5 shrink-0 place-items-center rounded-md bg-rose-500/10 text-sm font-bold text-rose-500/80">
                    ×
                  </span>
                  {line}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* A Day With Otto */}
        <section className="bg-dark px-5 py-16 sm:px-8 sm:py-20 border-t border-light-dark">
          <div className="mx-auto max-w-4xl">
            <SectionLabel>{dayHeading}</SectionLabel>

            <ol className="mt-8 space-y-3">
              {dayEntries.map((entry) => (
                <li
                  key={entry.time + entry.description}
                  className="rounded-2xl border border-light-dark bg-light-dark/40 p-5 md:p-6"
                >
                  <p className="text-sm font-semibold tracking-[0.1em] text-brand uppercase">
                    {entry.time}
                  </p>
                  <p className="mt-3 text-base leading-relaxed text-foreground/85">
                    {entry.description}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Benefits */}
        <section className="bg-dark px-5 py-16 sm:px-8 sm:py-20 border-t border-light-dark">
          <div className="mx-auto max-w-4xl">
            <SectionLabel>{benefitHeading}</SectionLabel>

            <div className="mt-8 grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
              {benefits.map((b) => (
                <article
                  key={b.title}
                  className="rounded-2xl border border-light-dark bg-light-dark/40 p-5"
                >
                  <p className="text-base font-semibold tracking-[-0.02em] text-heading">
                    {b.title}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {b.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
