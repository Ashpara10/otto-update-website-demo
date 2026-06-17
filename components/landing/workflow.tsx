const STEPS = [
  { n: 1, h: "Morning", p: "Which accounts to see today, and why." },
  { n: 2, h: "Before a visit", p: "The last order, any open quote, the history." },
  { n: 3, h: "After a visit", p: "One call. Everything logged, follow-ups set." },
  { n: 4, h: "On quotes", p: "Which quotes went quiet and need a nudge." },
  { n: 5, h: "For the manager", p: "Which accounts and deals need attention." },
];

export function Workflow() {
  return (
    <section id="workflow" className="bg-white py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <p className="text-xs font-semibold tracking-[0.15em] text-green-contrast">
          Through the day
        </p>
        <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-[-0.01em] text-neutral-900 sm:text-4xl">
          Otto runs the whole day.
        </h2>

        <ol className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5 lg:gap-0">
          {STEPS.map((s, i) => (
            <li
              key={s.n}
              className={
                i === 0
                  ? "lg:pr-5"
                  : "lg:border-l lg:border-neutral-200 lg:pl-5 lg:pr-5"
              }
            >
              <div className="mb-4 grid size-10 place-items-center rounded-xl border border-green-contrast/25 bg-green-contrast/10 text-sm font-bold text-green-contrast">
                {s.n}
              </div>
              <h3 className="text-base font-semibold tracking-[-0.02em] text-neutral-900">
                {s.h}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-500">
                {s.p}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
