import Logo from "../logo";

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
    <section id="brain" className="relative py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="text-[15px] font-medium flex items-center justify-center gap-3 text-brand">
          <span className="w-0.5 rounded-full h-4 bg-brand" /> What Otto knows
        </div>
        <h2 className="mx-auto mt-4 max-w-3xl text-center text-3xl font-semibold text-heading sm:text-4xl">
          Otto knows each account.
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-center text-base text-muted-foreground leading-relaxed">
          A CRM can only hold what someone has time to type in. Otto keeps
          track of what actually happens across the account, and hands the
          rep the next step.
        </p>

        <div className="mt-12 grid grid-cols-1 items-stretch gap-5 md:grid-cols-[1fr_auto_1fr]">
          <div className="rounded-2xl border border-light-dark bg-light-dark/40 p-7">
            <h4 className="mb-5 text-xs font-semibold tracking-[0.1em] text-subheading">
              Otto keeps track of
            </h4>
            <div className="flex flex-wrap gap-2">
              {KEEPS.map((c) => (
                <span
                  key={c}
                  className="inline-flex items-center rounded-md border border-light-dark bg-dark px-3.5 py-1.5 text-sm font-medium text-foreground/85"
                >
                  {c}
                </span>
              ))}
            </div>
          </div>

          <div className="hidden md:flex items-center justify-center">
            <div className="grid size-24 place-items-center rounded-2xl border border-light-dark bg-dark shadow-xl backdrop-blur-xl">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <Logo onlyIcon className="size-14" />
            </div>
          </div>

          <div className="rounded-2xl border border-brand/25 bg-brand/5 p-7">
            <h4 className="mb-5 text-xs font-semibold tracking-[0.1em] text-brand">
              So it can tell you
            </h4>
            <div className="flex flex-wrap gap-2">
              {TELLS.map((c) => (
                <span
                  key={c}
                  className="inline-flex items-center rounded-md border border-brand/25 bg-brand/10 px-3.5 py-1.5 text-sm font-medium text-brand"
                >
                  {c}
                </span>
              ))}
            </div>
          </div>
        </div>

        <p className="mx-auto mt-12 max-w-2xl text-center text-base text-muted-foreground leading-relaxed">
          A CRM shows last week.{" "}
          <span className="text-brand">Otto shows now.</span>
        </p>
      </div>
    </section>
  );
}
