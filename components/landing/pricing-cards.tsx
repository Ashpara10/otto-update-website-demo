"use client";

import { useState } from "react";
import { BookDemoButton } from "@/components/book-demo-button";

const GreenCheck = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="shrink-0 mt-0.5"
  >
    <path
      d="M3.33334 8L6.66668 11.3333L13.3333 4.66667"
      stroke="#10B981"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

type Plan = {
  name: string;
  nameClass: string;
  price: string;
  priceSuffix: string;
  cadence: string;
  features: string[];
  ctaLabel: string;
  ctaClass: string;
  highlighted?: boolean;
};

function PlanCard({ plan, isAnnual }: { plan: Plan; isAnnual: boolean }) {
  return (
    <div
      className={`relative flex w-full flex-col rounded-2xl border border-neutral-300/80 bg-white p-5 shadow-sm md:p-8 ${
        plan.highlighted ? "shadow-lg" : ""
      }`}
    >
      {plan.highlighted && (
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -inset-1.5 -z-10 rounded-3xl bg-gradient-to-r from-mint via-brand to-mint"
        />
      )}
      <div className={`mb-2 text-sm font-semibold tracking-wider ${plan.nameClass}`}>
        {plan.name}
      </div>
      <div className="mb-4 flex items-end gap-2">
        <span className="text-4xl font-bold text-neutral-900">
          {plan.price}
        </span>
        <span className="text-base text-neutral-500">{plan.priceSuffix}</span>
      </div>
      <div className="mb-6 text-sm text-neutral-500">
        {isAnnual ? "Billed annually" : plan.cadence}
      </div>

      <ul className="mb-6 flex-1 space-y-3">
        {plan.features.map((feature) => (
          <li key={feature} className="flex items-start gap-3">
            <GreenCheck />
            <span className="text-sm font-medium text-neutral-800">
              {feature}
            </span>
          </li>
        ))}
      </ul>

      <BookDemoButton
        className={`mt-auto w-full py-3 rounded-xl font-semibold transition-opacity hover:opacity-90 ${plan.ctaClass}`}
      >
        {plan.ctaLabel}
      </BookDemoButton>
    </div>
  );
}

const ottoPlan: Plan = {
  name: "Otto",
  nameClass: "text-green-contrast",
  price: "$99",
  priceSuffix: "/user/month",
  cadence: "Billed monthly",
  highlighted: true,
  features: [
    "Morning briefing call",
    "Pre-meeting prep",
    "Post-sales call coach",
    "CRM auto-updation",
    "Otto memory",
    "Note taker",
    "Prospect signals",
    "Auto follow-ups and email drafts",
  ],
  ctaLabel: "Get Started",
  ctaClass: "bg-neutral-900 text-white",
};

const enterprisePlan: Plan = {
  name: "Enterprise",
  nameClass: "text-green-contrast uppercase",
  price: "Custom",
  priceSuffix: "For large scaling teams",
  cadence: "Tailored specifically to your needs",
  features: [
    "Everything in Otto plan",
    "Unlimited users",
    "Dedicated Success Manager",
    "Custom integrations",
    "Priority support",
  ],
  ctaLabel: "Contact Sales",
  ctaClass: "bg-brand text-neutral-900",
};

export function PricingCards() {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <div className="flex w-full flex-col items-center">
      <div className="mb-10 flex items-center gap-4">
        <span
          className={`text-lg font-medium ${
            !isAnnual ? "text-neutral-900" : "text-neutral-500"
          }`}
        >
          Monthly
        </span>
        <button
          type="button"
          onClick={() => setIsAnnual(!isAnnual)}
          aria-label="Toggle annual billing"
          className="relative inline-flex h-8 w-14 items-center rounded-full bg-neutral-200 transition-colors focus:outline-none focus:ring-2 focus:ring-brand focus:ring-offset-2"
        >
          <span
            className={`${
              isAnnual ? "translate-x-7" : "translate-x-1"
            } inline-block h-6 w-6 transform rounded-full bg-white transition-transform`}
          />
        </button>
        <span
          className={`text-lg font-medium ${
            isAnnual ? "text-neutral-900" : "text-neutral-500"
          }`}
        >
          Annually
        </span>
      </div>

      <div className="w-full md:py-6">
        <div className="flex gap-4 w-full snap-x snap-mandatory overflow-x-auto scroll-smooth overscroll-x-contain px-[max(1rem,calc(50vw-10.5rem))] py-6 md:hidden">
          <div className="w-[21rem] shrink-0 snap-center">
            <PlanCard plan={ottoPlan} isAnnual={isAnnual} />
          </div>
          <div className="w-[21rem] shrink-0 snap-center">
            <PlanCard plan={enterprisePlan} isAnnual={isAnnual} />
          </div>
        </div>

        <div className="mx-auto hidden w-full max-w-4xl grid-cols-2 gap-6 md:grid">
          <PlanCard plan={ottoPlan} isAnnual={isAnnual} />
          <PlanCard plan={enterprisePlan} isAnnual={isAnnual} />
        </div>
      </div>
    </div>
  );
}
