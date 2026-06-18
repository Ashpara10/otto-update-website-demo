const CHECK = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-4">
    <path d="M5 12l4 4L19 6" />
  </svg>
);

const SAYS = [
  "Just left Apex Welding.",
  "They need revised pricing by Friday.",
  "They care more about delivery than discount.",
  "Competitor quoted lower on the argon mix.",
  "Follow up Tuesday, update the CRM, send my manager a summary.",
];

const DOES = [
  "CRM updated with the visit",
  "Follow-up task set for Tuesday",
  "Quote flagged, pricing due Friday",
  "Competitor intel logged to the account",
  "Manager summary sent",
  "Account memory updated",
];

export function HowItWorks() {
  return (
    <section id="how" className="relative py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="flex flex-col md:flex-row items-start md:items-end md:justify-between">

          <div>
            <div className="text-[15px] font-medium flex items-center justify-start gap-3 text-brand">
              <span className="w-0.5 rounded-full h-4 bg-brand" /> How it works
            </div>
            <h2 className="mt-4 text-2xl md:text-3xl font-semibold text-neutral-100">
              The rep talks.
              <br />
              <span className="text-brand-soft">Otto does the work.</span>
            </h2>
          </div>
          <p className="mt-5 max-w-md text-base text-neutral-400 leading-relaxed">
            The rep does what they are good at, the visit. Then they call Otto and
            say what happened. Otto handles the rest.
          </p>

        </div>
        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2">
          <div className="rounded-2xl border border-light-dark bg-light-dark/40 p-8">
            <p className="mb-6 text-sm font-semibold text-neutral-500">
              You say
            </p>
            <ul className="list-decimal space-y-3">
              {SAYS.map((line) => (
                <li key={line} className="flex items-center gap-3 py-3 text-base text-neutral-300">
                  &ldquo;{line}&rdquo;
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-light-dark bg-brand/5 p-8">
            <p className="mb-6 text-sm font-semibold tracking-[0.1em] text-brand">
              Otto then does this for you
            </p>
            <div className="divide-y divide-light-dark">
              {DOES.map((item) => (
                <div key={item} className="flex items-center gap-3 py-3 text-base text-neutral-300">
                  <span className="grid size-5 shrink-0 place-items-center rounded-md bg-brand/10 text-brand">
                    {CHECK}
                  </span>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
