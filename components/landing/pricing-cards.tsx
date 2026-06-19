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
      className="stroke-mint"
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
  usePrimary?: boolean;
};

function PlanCard({ plan, isAnnual }: { plan: Plan; isAnnual: boolean }) {
  const inner = (
    <div className="flex w-full flex-col rounded-2xl bg-dark h-full dark:shadow-lg p-5 md:p-8">
      <div className="text-[15px]  font-medium flex items-center justify-start gap-3 text-brand">
        {plan.name}
      </div>
      <div className="mb-4 mt-4 flex items-end gap-2">
        <span className="text-4xl font-bold text-heading">
          {plan.price}
        </span>
        <span className="text-base text-subheading">{plan.priceSuffix}</span>
      </div>
      <div className="mb-6 text-sm text-subheading">
        {isAnnual ? "Billed annually" : plan.cadence}
      </div>

      <ul className="mb-6 flex-1 space-y-3">
        {plan.features.map((feature) => (
          <li key={feature} className="flex items-start gap-3">
            <GreenCheck />
            <span className="text-sm font-medium text-foreground/85">
              {feature}
            </span>
          </li>
        ))}
      </ul>

      <BookDemoButton
        sourcePage="pricing_page"
        className={`${plan.usePrimary ? "btn-primary" : ""} mt-auto w-full py-3 rounded-lg font-medium ${plan.usePrimary ? "" : "transition-opacity hover:opacity-90 "}${plan.ctaClass}`}
      >
        {plan.ctaLabel}
      </BookDemoButton>
    </div>
  );

  if (plan.highlighted) {
    return (
      <div className="rounded-2xl bg-gradient-to-r from-mint via-brand to-mint p-1 shadow-lg">
        {inner}
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-light-dark  shadow-sm">
      {inner}
    </div>
  );
}

const ottoPlan: Plan = {
  name: "Otto",
  nameClass: "text-brand",
  price: "$99",
  priceSuffix: "/user/month",
  cadence: "Billed monthly",
  highlighted: true,
  usePrimary: true,
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
  ctaClass: "",
};

const enterprisePlan: Plan = {
  name: "Enterprise",
  nameClass: "text-brand uppercase",
  price: "Custom",
  priceSuffix: "For large teams",
  cadence: "Tailored specifically to your needs",
  features: [
    "Everything in Otto plan",
    "Unlimited users",
    "Dedicated Success Manager",
    "Custom integrations",
    "Priority support",
  ],
  ctaLabel: "Contact Sales",
  ctaClass: "bg-heading text-dark",
};

export function PricingCards() {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <div className="flex w-full flex-col items-center">
      <div className="mb-10 flex items-center gap-4">
        <span
          className={`text-lg font-medium ${!isAnnual ? "text-heading" : "text-subheading"
            }`}
        >
          Monthly
        </span>
        <button
          type="button"
          onClick={() => setIsAnnual(!isAnnual)}
          aria-label="Toggle annual billing"
          className="relative inline-flex h-8 w-14 items-center rounded-full bg-light-dark transition-colors focus:outline-none focus:ring-2 focus:ring-brand focus:ring-offset-2"
        >
          <span
            className={`${isAnnual ? "translate-x-7" : "translate-x-1"
              } inline-block h-6 w-6 transform rounded-full bg-dark transition-transform`}
          />
        </button>
        <span
          className={`text-lg font-medium ${isAnnual ? "text-heading" : "text-subheading"
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
