const KEEPS = [
  "Visits", "Calls", "Emails", "Quotes", "Orders", "ERP activity",
  "Service issues", "Competitor mentions", "Rep notes", "CRM history",
];
const TELLS = [
  "Pre-visit briefs", "Follow-up reminders", "Quote-risk alerts",
  "Reorder signals", "Manager summaries", "Next best action",
];

export function Brain() {
  return (
    <section id="brain" className="bg-white py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <p className="text-center text-xs font-semibold tracking-[0.15em] text-green-contrast">
          What Otto knows
        </p>
        <h2 className="mx-auto mt-4 max-w-3xl text-center text-3xl font-semibold tracking-[-0.01em] text-neutral-900 sm:text-4xl">
          Otto knows each account.
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-center text-base leading-7 text-neutral-600 sm:text-lg">
          A CRM can only hold what someone has time to type in. Otto keeps
          track of what actually happens across the account, and hands the
          rep the next step.
        </p>

        <div className="mt-12 grid grid-cols-1 items-stretch gap-5 md:grid-cols-[1fr_auto_1fr]">
          <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-7">
            <h4 className="mb-5 text-xs font-semibold tracking-[0.1em] text-neutral-500">
              Otto keeps track of
            </h4>
            <div className="flex flex-wrap gap-2">
              {KEEPS.map((c) => (
                <span
                  key={c}
                  className="inline-flex items-center rounded-md border border-neutral-200 bg-white px-3.5 py-1.5 text-sm font-medium text-neutral-700"
                >
                  {c}
                </span>
              ))}
            </div>
          </div>

          <div className="hidden md:flex items-center justify-center">
            <div className="grid size-24 place-items-center rounded-2xl border border-green-contrast/30 bg-white/80 shadow-xl backdrop-blur-xl">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/otto-logo.png" alt="Otto" className="size-14" />
            </div>
          </div>

          <div className="rounded-2xl border border-green-contrast/25 bg-green-contrast/5 p-7">
            <h4 className="mb-5 text-xs font-semibold tracking-[0.1em] text-green-contrast">
              So it can tell you
            </h4>
            <div className="flex flex-wrap gap-2">
              {TELLS.map((c) => (
                <span
                  key={c}
                  className="inline-flex items-center rounded-md border border-green-contrast/25 bg-green-contrast/10 px-3.5 py-1.5 text-sm font-medium text-green-contrast"
                >
                  {c}
                </span>
              ))}
            </div>
          </div>
        </div>

        <p className="mx-auto mt-12 max-w-2xl text-center text-base text-neutral-600 sm:text-lg">
          A CRM shows last week.{" "}
          <span className="text-green-contrast">Otto shows now.</span>
        </p>
      </div>
    </section>
  );
}
