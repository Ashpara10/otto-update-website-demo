import {
  AnalyticsUpIcon,
  Brain01Icon,
  CalendarCheckIn01Icon,
  ChartLineData01Icon,
  Database01Icon,
  Flag01Icon,
  Mic01Icon,
  Task01Icon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

type Item = { text: string; icon: typeof Mic01Icon };

const ITEMS: Item[] = [
  { text: "Prepares every rep before customer visits.", icon: CalendarCheckIn01Icon },
  { text: "Captures every conversation after the visit.", icon: Mic01Icon },
  { text: "Updates CRM without reps typing.", icon: Database01Icon },
  { text: "Drafts follow-ups and quote next steps.", icon: Task01Icon },
  { text: "Remembers customer history.", icon: Brain01Icon },
  { text: "Flags stuck quotes, renewals, and cold accounts.", icon: Flag01Icon },
  { text: "Gives managers visibility without chasing reps.", icon: ChartLineData01Icon },
  { text: "Turns field activity into revenue movement.", icon: AnalyticsUpIcon },
];

export function WhatOttoDoes() {
  return (
    <section
      id="v2-what-otto-does"
      className="relative py-20 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="max-w-3xl">
          <div className="text-[15px] font-medium flex items-center justify-start gap-3 text-brand">
            <span className="w-0.5 rounded-full h-4 bg-brand" /> What Otto does
          </div>
          <h2 className="mt-6 text-3xl sm:text-4xl lg:text-4xl font-semibold tracking-tight text-heading">
            What Otto Does For Your Team
          </h2>
        </div>

        <ul className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {ITEMS.map((item) => (
            <li
              key={item.text}
              className="group relative flex flex-col gap-4 rounded-2xl border border-light-dark bg-light-dark/30 p-6 transition-colors hover:border-brand/40 hover:bg-light-dark/50"
            >
              <span className="grid size-11 shrink-0 place-items-center rounded-xl border border-light-dark bg-dark text-brand">
                <HugeiconsIcon icon={item.icon} size={22} strokeWidth={1.6} />
              </span>
              <p className="text-base sm:text-lg text-foreground/85 leading-relaxed">
                {item.text}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
