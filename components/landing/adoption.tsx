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
    <section id="adoption" className="relative py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between">
          <div className="flex flex-col items-start">

            <div className="text-[15px] font-medium flex items-center justify-start gap-3 text-brand">
              <span className="w-0.5 rounded-full h-4 bg-brand" /> Why reps use it
            </div>
            <h2 className="mt-4 text-2xl md:text-3xl font-semibold text-heading">
              Reps already do <br /> this part out loud.
            </h2>
          </div>
          <p className="mt-5 max-w-md text-base text-muted-foreground leading-relaxed">
            After a visit, reps already talk it through, to a coordinator, a
            teammate, or themselves. Otto listens to that same debrief and
            turns it into the CRM update and follow-ups.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {CARDS.map((c) => (
            <div
              key={c.title}
              className="rounded-2xl border border-light-dark bg-light-dark/20 cursor-pointer p-6 transition-colors hover:border-brand/30 hover:bg-brand/5"
            >
              <div className="mb-4 grid size-10 place-items-center rounded-md bg-brand/10 text-brand">
                {c.icon}
              </div>
              <h3 className="text-base font-medium tracking-[-0.02em] text-heading">
                {c.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-subheading">
                {c.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
