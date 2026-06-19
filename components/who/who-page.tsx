"use client";

import Image from "next/image";
import Link from "next/link";
import { Nav } from "@/components/landing/nav";
import { Footer } from "@/components/landing/footer";
import { BookDemoButton } from "@/components/book-demo-button";
import { HugeiconsIcon } from "@hugeicons/react";
import type { IconSvgElement } from "@hugeicons/react";
import {
  ArrowRight01Icon,
  CheckmarkCircle01Icon,
  CrownIcon,
  GroupIcon,
  HatIcon,
  Shield01Icon,
  SparklesIcon,
} from "@hugeicons/core-free-icons";

export type Benefit = {
  title: string;
  description: string;
  icon: IconSvgElement;
};

export type TimelineEntry = {
  time: string;
  title: string;
  body: string;
  description: string;
  icon: IconSvgElement;
  image?: string;
};

export type Stat = {
  value: string;
  label: string;
};

export type WhoPageProps = {
  eyebrow: string;
  role: "reps" | "managers" | "cros";
  headline: string;
  highlight: string;
  subtitle: string;
  problemEyebrow: string;
  problemHeading: string;
  problemLead: string;
  problemPoints: string[];
  problemClose: string;
  timelineEyebrow: string;
  timelineHeading: string;
  timelineEntries: TimelineEntry[];
  benefitEyebrow: string;
  benefitHeading: string;
  benefits: Benefit[];
  stats: Stat[];
  ctaHeading: string;
  ctaBody: string;
  relatedRoles: { label: string; href: string; icon: IconSvgElement }[];
};

const ROLE_META: Record<
  WhoPageProps["role"],
  { icon: IconSvgElement; gradient: string; accent: string }
> = {
  reps: {
    icon: HatIcon,
    gradient: "from-[#00b386] via-[#CBFD40] to-[#00b386]",
    accent: "text-brand",
  },
  managers: {
    icon: GroupIcon,
    gradient: "from-[#3b82f6] via-[#CBFD40] to-[#3b82f6]",
    accent: "text-brand",
  },
  cros: {
    icon: CrownIcon,
    gradient: "from-[#a855f7] via-[#CBFD40] to-[#a855f7]",
    accent: "text-brand",
  },
};

function GridPattern() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 opacity-[0.06] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]"
      style={{
        backgroundImage:
          "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
        backgroundSize: "44px 44px",
        color: "var(--color-foreground)",
      }}
    />
  );
}

function Hero({
  eyebrow,
  role,
  headline,
  highlight,
  subtitle,
}: Pick<WhoPageProps, "eyebrow" | "role" | "headline" | "highlight" | "subtitle">) {
  const meta = ROLE_META[role];
  const RoleIcon = meta.icon;
  return (
    <section className="relative overflow-hidden border-b border-light-dark">
      <GridPattern />
      <div
        aria-hidden
        className={`pointer-events-none absolute -top-40 left-1/2 -z-10 h-[480px] w-[860px] -translate-x-1/2 rounded-full bg-gradient-to-r ${meta.gradient} opacity-20 blur-[120px]`}
      />

      <div className="mx-auto max-w-7xl px-5 md:px-10 pt-28 pb-20 md:pt-36 md:pb-28">
        <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-full border border-light-dark bg-light-dark/40 px-3 py-1 text-xs font-medium text-heading/80">
              <span className="grid size-5 place-items-center rounded-full bg-brand/15 text-brand">
                <HugeiconsIcon icon={RoleIcon} size={12} strokeWidth={2} />
              </span>
              <span>{eyebrow}</span>
            </div>

            <h1 className="mt-6 text-4xl font-semibold tracking-[-0.04em] text-heading sm:text-5xl lg:text-6xl">
              {headline}
              <br />
              <span className="text-brand">{highlight}</span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg md:text-xl">
              {subtitle}
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-3">
              <BookDemoButton
                sourcePage={role === "managers" ? "manager_page" : role === "cros" ? "cro_page" : "rep_page"}
                className="btn-primary inline-flex h-12 items-center rounded-full px-6 text-base font-semibold"
              >
                Book a Demo
              </BookDemoButton>
            </div>
          </div>

          <div className="relative lg:col-span-5">
            <div className="relative rounded-2xl border border-light-dark bg-light-dark/40 p-5 md:p-6 backdrop-blur-sm">
              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <div className="flex items-center gap-1.5">
                  <span className="size-2 rounded-full bg-rose-400/70" />
                  <span className="size-2 rounded-full bg-amber-400/70" />
                  <span className="size-2 rounded-full bg-emerald-400/70" />
                </div>
                <span className="font-mono">otto · live</span>
              </div>

              <div className="mt-5 space-y-3">
                <div className="rounded-xl border border-light-dark bg-dark/60 px-4 py-3 text-sm text-foreground/85">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand">
                    On call
                  </p>
                  <p className="mt-1.5 leading-relaxed">
                    Good morning. Here are today&rsquo;s priorities.
                  </p>
                </div>
                <div className="rounded-xl border border-light-dark bg-dark/60 px-4 py-3 text-sm text-foreground/85">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand">
                    Captured
                  </p>
                  <p className="mt-1.5 leading-relaxed">
                    Meeting notes logged. CRM updated. Follow-up drafted.
                  </p>
                </div>
                <div className="flex items-center gap-2 rounded-xl border border-brand/30 bg-brand/10 px-4 py-3 text-sm text-heading">
                  <span className="grid size-7 place-items-center rounded-full bg-brand text-[#0a0a0a]">
                    <HugeiconsIcon
                      icon={CheckmarkCircle01Icon}
                      size={16}
                      strokeWidth={2.4}
                    />
                  </span>
                  <span className="font-medium">Manager informed.</span>
                </div>
              </div>
            </div>

            <div
              aria-hidden
              className="pointer-events-none absolute -inset-4 -z-10 rounded-3xl bg-gradient-to-br from-brand/15 via-transparent to-transparent blur-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function ProblemSection({
  eyebrow,
  heading,
  lead,
  points,
  close,
}: { eyebrow: string; heading: string; lead: string; points: string[]; close: string }) {
  return (
    <section className="relative overflow-hidden border-b border-light-dark">
      <div className="mx-auto max-w-7xl px-5 md:px-10 py-20 md:py-28">
        <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <div className="text-[15px] font-medium flex items-center justify-start gap-3 text-brand">
              <span className="w-0.5 rounded-full h-4 bg-brand" /> {eyebrow}
            </div>
            <h2 className="mt-5 text-3xl font-semibold tracking-[-0.03em] text-heading md:text-4xl lg:text-5xl">
              {heading}
            </h2>
            <p className="mt-5 max-w-md text-base leading-relaxed text-muted-foreground md:text-lg">
              {lead}
            </p>
            <div className="mt-8 max-w-md rounded-2xl border border-light-dark bg-light-dark/30 p-5">
              <p className="text-base font-medium leading-relaxed text-heading">
                {close}
              </p>
            </div>
          </div>

          <div className="lg:col-span-7">
            <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {points.map((p, i) => (
                <li
                  key={p}
                  className="group relative overflow-hidden rounded-2xl border border-rose-500/15 bg-rose-500/[0.04] p-4 transition-colors hover:border-rose-500/30 hover:bg-rose-500/[0.06]"
                >
                  <div className="flex items-start gap-3">
                    <span className="mt-0.5 grid size-7 shrink-0 place-items-center rounded-full bg-rose-500/10 text-rose-400">
                      <span className="text-sm font-bold leading-none">×</span>
                    </span>
                    <span className="text-sm leading-relaxed text-foreground/85 sm:text-base">
                      {p}
                    </span>
                  </div>
                  <span className="absolute right-3 top-3 text-[10px] font-mono text-rose-400/40">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function StepImage({
  index,
  isReversed,
  src,
  alt,
}: {
  index: number;
  isReversed: boolean;
  src?: string;
  alt?: string;
}) {
  return (
    <div
      className={`relative aspect-square w-full max-w-lg mx-auto rounded-2xl overflow-hidden border border-light-dark bg-light-dark/40 ${isReversed ? "md:order-1" : ""}`}
    >
      {src ? (
        <Image
          src={src}
          alt={alt ?? ""}
          fill
          sizes="(min-width: 768px) 50vw, 90vw"
          className="object-cover"
        />
      ) : (
        <>
          <div className="absolute inset-0 grid place-items-center">
            <div className="flex flex-col items-center gap-3 text-muted-foreground">
              <span className="font-mono text-xs uppercase tracking-[0.2em]">
                Step {String(index + 1).padStart(2, "0")}
              </span>
              <span className="text-sm">Image placeholder</span>
            </div>
          </div>
          <div
            aria-hidden
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage:
                "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
              backgroundSize: "32px 32px",
              color: "var(--color-foreground)",
            }}
          />
        </>
      )}
    </div>
  );
}

function StepBlock({ entry, index }: { entry: TimelineEntry; index: number }) {
  const isReversed = index % 2 === 1;
  const Icon = entry.icon;

  return (
    <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-12 lg:gap-20 items-center">
      <div className={`flex flex-col gap-6 ${isReversed ? "md:order-2" : ""}`}>
        <div className="flex items-center gap-3">
          <span className="grid size-12 place-items-center rounded-xl border border-brand/30 bg-brand/10 text-brand">
            <HugeiconsIcon icon={Icon} size={22} strokeWidth={1.6} />
          </span>
          <span className="text-sm font-semibold uppercase tracking-[0.18em] text-brand">
            {entry.time}
          </span>
        </div>

        <h3 className="text-2xl font-semibold tracking-tight text-heading sm:text-3xl lg:text-4xl">
          {entry.title}
        </h3>

        <p className="text-base leading-relaxed text-foreground/85 sm:text-lg md:text-xl">
          {entry.description}
        </p>

        {entry.body && (
          <p className="text-base font-medium leading-relaxed text-heading sm:text-lg">
            {entry.body}
          </p>
        )}
      </div>

      <StepImage
        index={index}
        isReversed={isReversed}
        src={entry.image}
        alt={entry.title}
      />
    </div>
  );
}

function TimelineSection({
  eyebrow,
  heading,
  entries,
}: {
  eyebrow: string;
  heading: string;
  entries: TimelineEntry[];
}) {
  return (
    <section id="how" className="relative overflow-hidden border-b border-light-dark">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 left-1/2 -z-10 h-[420px] w-[820px] -translate-x-1/2 rounded-full bg-gradient-to-r from-[#00b386] via-[#CBFD40] to-[#00b386] opacity-[0.12] blur-[120px]"
      />

      <div className="mx-auto max-w-7xl px-5 md:px-10 py-20 md:py-28">
        <div className="max-w-3xl">
          <div className="text-[15px] font-medium flex items-center justify-start gap-3 text-brand">
            <span className="w-0.5 rounded-full h-4 bg-brand" /> {eyebrow}
          </div>
          <h2 className="mt-5 text-3xl font-semibold tracking-[-0.03em] text-heading md:text-4xl lg:text-5xl">
            {heading}
          </h2>
        </div>

        <ol className="mt-16 flex flex-col gap-20 md:gap-28">
          {entries.map((entry, i) => (
            <li key={entry.time + i}>
              <StepBlock entry={entry} index={i} />
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function BenefitsSection({
  eyebrow,
  heading,
  benefits,
  stats,
}: {
  eyebrow: string;
  heading: string;
  benefits: Benefit[];
  stats: Stat[];
}) {
  return (
    <section className="relative border-b border-light-dark">
      <div className="mx-auto max-w-7xl px-5 md:px-10 py-20 md:py-28">
        <div className="grid items-end gap-8 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <div className="text-[15px] font-medium flex items-center justify-start gap-3 text-brand">
              <span className="w-0.5 rounded-full h-4 bg-brand" /> {eyebrow}
            </div>
            <h2 className="mt-5 text-3xl font-semibold tracking-[-0.03em] text-heading md:text-4xl lg:text-5xl">
              {heading}
            </h2>
          </div>

          {stats.length > 0 && (
            <dl className="grid grid-cols-2 gap-3 lg:col-span-5 lg:grid-cols-3">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="rounded-2xl border border-light-dark bg-light-dark/30 px-4 py-5 text-center"
                >
                  <dt className="text-[11px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                    {s.label}
                  </dt>
                  <dd className="mt-1.5 text-2xl font-semibold tracking-tight text-heading md:text-3xl">
                    {s.value}
                  </dd>
                </div>
              ))}
            </dl>
          )}
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((b) => {
            const Icon = b.icon;
            return (
              <article
                key={b.title}
                className="group relative overflow-hidden rounded-2xl border border-light-dark bg-light-dark/30 p-6 transition-colors hover:border-brand/40"
              >
                <span className="grid size-11 place-items-center rounded-xl border border-brand/25 bg-brand/10 text-brand transition-transform group-hover:-rotate-3 group-hover:scale-105">
                  <HugeiconsIcon icon={Icon} size={20} strokeWidth={1.6} />
                </span>
                <h3 className="mt-5 text-base font-semibold tracking-tight text-heading md:text-lg">
                  {b.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-foreground/80 md:text-base">
                  {b.description}
                </p>
                <div
                  aria-hidden
                  className="pointer-events-none absolute -bottom-px left-6 right-6 h-px bg-gradient-to-r from-transparent via-brand/30 to-transparent opacity-0 transition-opacity group-hover:opacity-100"
                />
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function RelatedRoles({
  currentRole,
  relatedRoles,
}: {
  currentRole: WhoPageProps["role"];
  relatedRoles: WhoPageProps["relatedRoles"];
}) {
  return (
    <section className="relative border-b border-light-dark">
      <div className="mx-auto max-w-7xl px-5 md:px-10 py-16 md:py-20">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">
              See it for another role
            </p>
            <h3 className="mt-2 text-xl font-semibold tracking-tight text-heading md:text-2xl">
              Otto looks different for every team.
            </h3>
          </div>
          <div className="flex flex-wrap gap-3">
            {relatedRoles.map((r) => {
              const Icon = r.icon;
              const isCurrent = r.href.endsWith(currentRole);
              return (
                <Link
                  key={r.href}
                  href={r.href}
                  className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-colors ${isCurrent
                    ? "border-brand/40 bg-brand/10 text-brand"
                    : "border-light-dark bg-light-dark/30 text-foreground/85 hover:border-brand/30 hover:text-heading"
                    }`}
                >
                  <HugeiconsIcon icon={Icon} size={16} strokeWidth={1.8} />
                  {r.label}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function CtaSection({ heading, body, role }: { heading: string; body: string; role: WhoPageProps["role"] }) {
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]"
      >
        <div className="absolute left-1/2 top-1/2 h-[400px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-[#00b386] via-[#CBFD40] to-[#00b386] opacity-15 blur-[120px]" />
      </div>

      <div className="mx-auto max-w-7xl px-5 md:px-10 py-20 md:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand/10 px-3 py-1 text-xs font-semibold text-brand">
            <HugeiconsIcon icon={SparklesIcon} size={12} strokeWidth={2} />
            Ready to see it live?
          </span>
          <h2 className="mt-6 text-3xl font-semibold tracking-[-0.03em] text-heading md:text-4xl lg:text-5xl">
            {heading}
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
            {body}
          </p>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <BookDemoButton
              sourcePage={role === "managers" ? "manager_page" : role === "cros" ? "cro_page" : "rep_page"}
              className="btn-primary inline-flex h-12 items-center rounded-full px-6 text-base font-semibold"
            >
              Book a Demo
            </BookDemoButton>
          </div>

          <p className="mt-6 text-xs text-muted-foreground">
            <HugeiconsIcon
              icon={Shield01Icon}
              size={12}
              strokeWidth={1.8}
              className="-mt-0.5 mr-1 inline"
            />
            30 minutes. Live with the team. No deck.
          </p>
        </div>
      </div>
    </section>
  );
}

export function WhoPage({
  eyebrow,
  role,
  headline,
  highlight,
  subtitle,
  problemEyebrow,
  problemHeading,
  problemLead,
  problemPoints,
  problemClose,
  timelineEyebrow,
  timelineHeading,
  timelineEntries,
  benefitEyebrow,
  benefitHeading,
  benefits,
  stats,
  ctaHeading,
  ctaBody,
  relatedRoles,
}: WhoPageProps) {
  return (
    <div className="min-h-screen overflow-x-hidden bg-dark text-heading">
      <Nav />
      <main>
        <Hero
          eyebrow={eyebrow}
          role={role}
          headline={headline}
          highlight={highlight}
          subtitle={subtitle}
        />
        <ProblemSection
          eyebrow={problemEyebrow}
          heading={problemHeading}
          lead={problemLead}
          points={problemPoints}
          close={problemClose}
        />
        <TimelineSection
          eyebrow={timelineEyebrow}
          heading={timelineHeading}
          entries={timelineEntries}
        />
        <BenefitsSection
          eyebrow={benefitEyebrow}
          heading={benefitHeading}
          benefits={benefits}
          stats={stats}
        />
        <RelatedRoles currentRole={role} relatedRoles={relatedRoles} />
        <CtaSection heading={ctaHeading} body={ctaBody} role={role} />
      </main>
      <Footer />
    </div>
  );
}

