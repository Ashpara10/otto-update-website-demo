const CARDS = [
  {
    title: "It is a phone call",
    body: "No dashboard to open and no login. The rep dials a number.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="size-5">
        <rect x="3" y="4" width="18" height="14" rx="2" />
        <path d="M8 21h8M12 18v3" />
      </svg>
    ),
  },
  {
    title: "Nothing typed later",
    body: "The visit is captured as the rep speaks, not from memory hours after.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="size-5">
        <path d="M4 4h16v12H4z" />
        <path d="M2 20h20" />
      </svg>
    ),
  },
  {
    title: "It happens in the car",
    body: "The rep calls between visits, while the details are still fresh.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="size-5">
        <circle cx="12" cy="12" r="9" />
        <path d="M8 12l3 3 5-6" />
      </svg>
    ),
  },
  {
    title: "One each, not one shared",
    body: "Every rep gets their own, instead of waiting on a shared coordinator.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="size-5">
        <path d="M15 5l4 4M3 21l4-1L19 8l-4-4L3 16z" />
      </svg>
    ),
  },
];

export function Adoption() {
  return (
    <section id="adoption" className="bg-white py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <p className="text-xs font-semibold tracking-[0.15em] text-green-contrast">
          Why reps use it
        </p>
        <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-[-0.01em] text-neutral-900 sm:text-4xl">
          Reps already do this part out loud.
        </h2>
        <p className="mt-5 max-w-2xl text-base leading-7 text-neutral-600 sm:text-lg">
          After a visit, reps already talk it through, to a coordinator, a
          teammate, or themselves. Otto listens to that same debrief and
          turns it into the CRM update and follow-ups. The rep does not
          change what they do.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {CARDS.map((c) => (
            <div
              key={c.title}
              className="rounded-2xl border border-neutral-200 bg-neutral-50 p-6 transition-colors hover:border-green-contrast/30 hover:bg-green-contrast/5"
            >
              <div className="mb-4 grid size-10 place-items-center rounded-xl bg-green-contrast/10 text-green-contrast">
                {c.icon}
              </div>
              <h3 className="text-base font-semibold tracking-[-0.02em] text-neutral-900">
                {c.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-500">
                {c.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
