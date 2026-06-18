const STEPS = [
  { n: 1, h: "Morning", p: "Which accounts to see today, and why." },
  { n: 2, h: "Before a visit", p: "The last order, any open quote, the history." },
  { n: 3, h: "After a visit", p: "One call. Everything logged, follow-ups set." },
  { n: 4, h: "On quotes", p: "Which quotes went quiet and need a nudge." },
  { n: 5, h: "For the manager", p: "Which accounts and deals need attention." },
];

export function Workflow() {
  return (
    <section id="workflow" className="relative py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="text-[15px] font-medium flex items-center justify-start gap-3 text-brand">
          <span className="w-0.5 rounded-full h-4 bg-brand" /> Through the day
        </div>
        <h2 className="mt-4 text-2xl md:text-3xl font-semibold text-neutral-100">
          Otto runs the whole day.
        </h2>
        <ol className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5 lg:gap-0">
          {STEPS.map((s, i) => (
            <li
              key={s.n}
              className={
                i === 0
                  ? "lg:pr-5"
                  : "lg:border-l lg:border-light-dark lg:pl-5 lg:pr-5"
              }
            >
              <div className="mb-4 grid size-8 place-items-center rounded-lg border border-brand/25 bg-brand/10 text-sm font-bold text-brand">
                {s.n}
              </div>
              <h3 className="text-base font-medium tracking-[-0.02em] text-neutral-100">
                {s.h}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-400">
                {s.p}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
