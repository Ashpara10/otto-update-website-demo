"use client";

import { useState } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import { Nav } from "@/components/landing/nav";
import { Footer } from "@/components/landing/footer";
import { BookDemoButton } from "@/components/book-demo-button";

export type FeatureCapability = {
  title: string;
  description: string;
  icon: any;
};

export type FeatureWorkflowStep = {
  step: string;
  title: string;
  description: string;
};

export type FeatureComparisonRow = {
  withoutOtto: string;
  withOtto: string;
};

export type FeaturePageShellProps = {
  eyebrow: string;
  headline: string;
  highlight: string;
  subtitle: string;
  workflowHeading: string;
  workflowHeadline: string;
  workflow: FeatureWorkflowStep[];
  capabilitiesHeading: string;
  capabilitiesHeadline: string;
  capabilities: FeatureCapability[];
  comparisonHeading: string;
  comparisonIntro: string;
  comparisonRows: FeatureComparisonRow[];
  closeHeading: string;
  closeBody: string;
};

const primaryCtaClass =
  "btn-primary inline-flex h-12 items-center justify-center rounded-full px-6 text-base font-semibold";

const secondaryCtaClass =
  "inline-flex h-12 items-center justify-center rounded-full border border-light-dark bg-dark px-6 text-base font-semibold text-heading transition-colors hover:bg-light-dark/40";

function SectionLabel({ children, centered = false }: { children: React.ReactNode; centered?: boolean }) {
  return (
    <div
      className={`text-[15px] font-medium flex items-center ${centered ? "justify-center" : "justify-start"} gap-3 text-brand`}
    >
      <span className="w-0.5 rounded-full h-4 bg-brand" /> {children}
    </div>
  );
}

export function FeaturePageShell({
  eyebrow,
  headline,
  highlight,
  subtitle,
  workflowHeading,
  workflowHeadline,
  workflow,
  capabilitiesHeading,
  capabilitiesHeadline,
  capabilities,
  comparisonHeading,
  comparisonIntro,
  comparisonRows,
  closeHeading,
  closeBody,
}: FeaturePageShellProps) {
  const [activeIndex, setActiveIndex] = useState(workflow.length - 1);
  const progress =
    workflow.length > 1 ? (activeIndex / (workflow.length - 1)) * 100 : 100;

  return (
    <div className="mx-auto flex min-h-screen w-full max-w-[1920px] flex-col bg-dark text-heading">
      <Nav />

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden border-b border-light-dark px-5 pb-20 pt-32 sm:px-8 sm:pt-36">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_12%,rgba(203,253,64,0.08),transparent_46%)]" />
          <div className="mx-auto w-full max-w-7xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-light-dark bg-dark px-3 py-1 text-xs font-medium text-foreground/85">
              <span>Features</span>
              <span className="h-1 w-1 rounded-full bg-neutral-400" />
              <span className="rounded-full bg-brand/15 px-2 py-0.5 font-semibold text-brand">
                {eyebrow}
              </span>
            </div>

            <div className="mt-8 flex w-full flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <h1 className="max-w-3xl text-3xl font-semibold tracking-[-0.04em] text-heading md:text-5xl">
                <span className="block">{headline}</span>
                <span className="block text-brand">{highlight}</span>
              </h1>
              <p className="max-w-xl text-base leading-relaxed text-muted-foreground">
                {subtitle}
              </p>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <BookDemoButton className={primaryCtaClass}>
                Book a Demo
              </BookDemoButton>
            </div>
          </div>
        </section>

        {/* Workflow */}
        <section className="px-5 py-16 sm:px-8 sm:py-20">
          <div className="mx-auto w-full max-w-7xl">
            <SectionLabel>{workflowHeading}</SectionLabel>
            <h2 className="mt-3 text-2xl font-semibold text-heading md:text-3xl">
              {workflowHeadline}
            </h2>

            <div
              className="relative mt-10"
              onMouseLeave={() => setActiveIndex(workflow.length - 1)}
            >
              <div className="h-0.5 w-full overflow-hidden rounded-full bg-light-dark/40">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-brand to-brand-soft transition-all duration-300 ease-out"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <span
                className="absolute top-1/2 size-2 -translate-y-1/2 rounded-full bg-heading border border-light-dark shadow transition-all duration-300 ease-out"
                style={{ left: `calc(${progress}% - 4px)` }}
              />
            </div>

            <ol className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-4 md:gap-0">
              {workflow.map((item, index) => (
                <li
                  key={item.step}
                  onMouseEnter={() => setActiveIndex(index)}
                  onFocus={() => setActiveIndex(index)}
                  tabIndex={0}
                  className={
                    index === 0
                      ? "md:pr-8"
                      : "md:border-l md:border-light-dark md:pl-8 md:pr-8"
                  }
                >
                  <p className="text-lg font-semibold text-brand">
                    {item.title}
                  </p>
                  <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Capabilities */}
        <section className="px-5 py-12 sm:px-8 sm:py-24">
          <div className="mx-auto w-full max-w-7xl">
            <SectionLabel>{capabilitiesHeading}</SectionLabel>
            <h2 className="mt-3 text-2xl font-semibold text-heading md:text-3xl">
              {capabilitiesHeadline}
            </h2>

            <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-3">
              {capabilities.map((item, index) => {
                const isFirst = index === 0;
                const isLast = index === capabilities.length - 1;
                const spanClass =
                  capabilities.length === 5 && isLast
                    ? "md:col-span-2"
                    : capabilities.length === 7 && isFirst
                      ? "md:col-span-2"
                      : capabilities.length === 7 && isLast
                        ? "md:col-span-2"
                        : "";

                return (
                  <article
                    key={item.title}
                    className={`w-full rounded-xl border border-light-dark bg-light-dark/40 p-5 ${spanClass}`}
                  >
                    <HugeiconsIcon
                      icon={item.icon}
                      className="size-5 text-foreground/85"
                    />
                    <p className="mt-3 text-base font-medium text-heading">
                      {item.title}
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {item.description}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* Comparison */}
        <section className="px-5 py-16 sm:px-8 sm:py-20">
          <div className="mx-auto w-full max-w-7xl">
            <SectionLabel>{comparisonHeading}</SectionLabel>
            <h2 className="mt-3 text-2xl font-semibold text-heading md:text-3xl">
              How it used to work vs. now.
            </h2>
            {comparisonIntro && (
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
                {comparisonIntro}
              </p>
            )}

            <div className="mt-8 overflow-hidden rounded-xl border border-light-dark">
              <div className="grid grid-cols-2 border-b border-light-dark text-sm font-semibold">
                <div className="bg-light-dark/40 px-5 py-3 text-foreground/85">
                  Without Otto
                </div>
                <div className="bg-brand/10 px-5 py-3 text-brand">
                  With Otto
                </div>
              </div>

              {comparisonRows.map((row, index) => (
                <div
                  key={row.withoutOtto}
                  className="grid grid-cols-2 border-b border-light-dark text-sm last:border-b-0 md:text-base"
                >
                  <div
                    className={
                      index % 2 === 0
                        ? "bg-dark px-5 py-3.5 text-foreground/85"
                        : "bg-light-dark/40 px-5 py-3.5 text-foreground/85"
                    }
                  >
                    {row.withoutOtto}
                  </div>
                  <div
                    className={
                      index % 2 === 0
                        ? "bg-brand/5 px-5 py-3.5 text-muted-foreground"
                        : "bg-brand/10 px-5 py-3.5 text-muted-foreground"
                    }
                  >
                    {row.withOtto}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Close */}
        <section className="px-5 pb-24 pt-6 sm:px-8">
          <div className="mx-auto w-full max-w-7xl text-center">
            <h2 className="text-2xl font-semibold text-heading md:text-3xl">
              {closeHeading}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
              {closeBody}
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <BookDemoButton className={primaryCtaClass}>
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
