const Arrow = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-5">
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

const RepIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className="size-5">
    <circle cx="12" cy="8" r="4" />
    <path d="M4 21c0-4 4-6 8-6s8 2 8 6" />
  </svg>
);

const OttoIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className="size-5">
    <path d="M7 4h10a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-4l-4 3v-3H7a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z" />
  </svg>
);

const CrmIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className="size-5">
    <ellipse cx="12" cy="6" rx="8" ry="3" />
    <path d="M4 6v12c0 1.7 3.6 3 8 3s8-1.3 8-3V6M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3" />
  </svg>
);

const STEPS = [
  {
    n: "01",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className="size-6">
        <path d="M12 2a3 3 0 0 0-3 3v6a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3z" />
        <path d="M5 11a7 7 0 0 0 14 0M12 18v3" />
      </svg>
    ),
    title: "Captures the field",
    body: "The rep talks. Otto listens and gets every detail of the visit.",
  },
  {
    n: "02",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className="size-6">
        <path d="M4 6h16M4 12h16M4 18h10" />
      </svg>
    ),
    title: "Structures the update",
    body: "Turns the conversation into clean notes, fields, and next steps.",
  },
  {
    n: "03",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className="size-6">
        <rect x="4" y="5" width="16" height="16" rx="2" />
        <path d="M8 3v4M16 3v4M4 10h16M9 14l2 2 4-4" />
      </svg>
    ),
    title: "Creates the follow-up",
    body: "Sets the tasks, reminders, and quote nudges automatically.",
  },
  {
    n: "04",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className="size-6">
        <path d="M3 12h4l3-8 4 16 3-8h4" />
      </svg>
    ),
    title: "Keeps the account moving",
    body: "Everyone knows what happened and what needs to happen next.",
  },
];

export function Positioning() {
  return (
    <section id="positioning" className="bg-white py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <p className="text-xs font-semibold tracking-[0.15em] text-green-contrast">
          Where Otto fits
        </p>
        <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-[-0.01em] text-neutral-900 sm:text-4xl">
          Not another CRM. Not another dashboard.
        </h2>
        <p className="mt-5 max-w-2xl text-base leading-7 text-neutral-600 sm:text-lg">
          You already have a CRM. The problem was never where the data goes.
          It is getting what happened in the field into the system before
          it disappears. Otto sits between the field and the tools you
          already run.
        </p>

        <div className="mt-12 flex flex-col items-stretch gap-3 md:flex-row md:items-stretch">
          <div className="flex flex-1 flex-col items-center gap-3 rounded-2xl border border-neutral-200 bg-neutral-50 px-5 py-6 text-center">
            <span className="grid size-12 place-items-center rounded-xl border border-neutral-200 bg-white text-neutral-500">
              <RepIcon />
            </span>
            <p className="text-base font-medium text-neutral-700">The rep</p>
            <p className="text-sm text-neutral-500">In the field</p>
          </div>

          <div className="flex items-center justify-center text-green-contrast/60 md:px-2">
            <Arrow />
          </div>

          <div className="flex flex-[1.15] flex-col items-center gap-3 rounded-2xl border border-green-contrast/30 bg-green-contrast/5 px-5 py-6 text-center shadow-[0_0_40px_-14px_rgba(139,180,27,0.45)]">
            <span className="grid size-12 place-items-center rounded-xl bg-green-contrast/10 text-green-contrast">
              <OttoIcon />
            </span>
            <p className="text-base font-semibold text-green-contrast">Otto</p>
            <p className="text-sm text-neutral-500">Captures &amp; structures the visit</p>
          </div>

          <div className="flex items-center justify-center text-green-contrast/60 md:px-2">
            <Arrow />
          </div>

          <div className="flex flex-1 flex-col items-center gap-3 rounded-2xl border border-neutral-200 bg-neutral-50 px-5 py-6 text-center">
            <span className="grid size-12 place-items-center rounded-xl border border-neutral-200 bg-white text-neutral-500">
              <CrmIcon />
            </span>
            <p className="text-base font-medium text-neutral-700">CRM &amp; ERP</p>
            <p className="text-sm text-neutral-500">Always current</p>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((s) => (
            <div
              key={s.n}
              className="rounded-2xl border border-neutral-200 bg-white p-6 transition-colors hover:border-green-contrast/30"
            >
              <p className="text-xs font-bold tracking-[0.14em] text-green-contrast">
                {s.n}
              </p>
              <div className="mt-4 mb-4 grid size-12 place-items-center rounded-xl bg-green-contrast/10 text-green-contrast">
                {s.icon}
              </div>
              <p className="text-base font-semibold tracking-[-0.02em] text-neutral-900">
                {s.title}
              </p>
              <p className="mt-1.5 text-sm leading-relaxed text-neutral-500">
                {s.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
