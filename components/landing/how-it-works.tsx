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
    <section id="how" className="bg-white py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <p className="text-xs font-semibold tracking-[0.15em] text-green-contrast">
          How it works
        </p>
        <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-[-0.01em] text-neutral-900 sm:text-4xl">
          The rep talks.{" "}
          <span className="text-green-contrast">Otto does the work.</span>
        </h2>
        <p className="mt-5 max-w-2xl text-base leading-7 text-neutral-600 sm:text-lg">
          The rep does what they are good at, the visit. Then they call Otto and
          say what happened. Otto handles the rest.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2">
          <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-8">
            <p className="mb-6 text-sm font-semibold tracking-[0.1em] text-neutral-500">
              You say
            </p>
            <div className="space-y-3">
              {SAYS.map((line) => (
                <p key={line} className="pl-5 text-base text-neutral-700 relative before:absolute before:left-0 before:top-[19px] before:size-2 before:rounded-full before:bg-neutral-300">
                  &ldquo;{line}&rdquo;
                </p>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-neutral-200 bg-green-contrast/5 p-8">
            <p className="mb-6 text-sm font-semibold tracking-[0.1em] text-green-contrast">
              Otto then does this for you
            </p>
            <div className="divide-y divide-neutral-200">
              {DOES.map((item) => (
                <div key={item} className="flex items-center gap-3 py-3 text-base text-neutral-700">
                  <span className="grid size-5 shrink-0 place-items-center rounded-md bg-green-contrast/10 text-green-contrast">
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
