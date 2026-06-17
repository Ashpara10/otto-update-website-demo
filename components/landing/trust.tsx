const CELLS = [
  {
    label: "Secure data handling",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="size-4">
        <path d="M12 3l8 4v5c0 5-3.5 7.5-8 9-4.5-1.5-8-4-8-9V7z" />
      </svg>
    ),
  },
  {
    label: "Role-based access",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="size-4">
        <rect x="5" y="11" width="14" height="9" rx="2" />
        <path d="M8 11V7a4 4 0 0 1 8 0v4" />
      </svg>
    ),
  },
  {
    label: "CRM & ERP integration",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="size-4">
        <path d="M4 7h16M4 12h16M4 17h10" />
      </svg>
    ),
  },
  {
    label: "Email & calendar context",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="size-4">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </svg>
    ),
  },
  {
    label: "Human-approved actions",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="size-4">
        <path d="M5 12l4 4L19 6" />
      </svg>
    ),
  },
  {
    label: "Audit-ready history",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="size-4">
        <path d="M4 4h16v16H4z" />
        <path d="M8 9h8M8 13h5" />
      </svg>
    ),
  },
];

export function Trust() {
  return (
    <section id="trust" className="bg-white py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <p className="text-center text-xs font-semibold tracking-[0.15em] text-green-contrast">
          Security
        </p>
        <h2 className="mx-auto mt-4 max-w-3xl text-center text-3xl font-semibold tracking-[-0.01em] text-neutral-900 sm:text-4xl">
          How Otto handles your data.
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-center text-base leading-7 text-neutral-600 sm:text-lg">
          Otto works with customer and account data, so here is how it is
          kept and controlled.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {CELLS.map((c) => (
            <div
              key={c.label}
              className="flex items-center gap-3 rounded-2xl border border-neutral-200 bg-neutral-50 px-5 py-4 text-base text-neutral-700"
            >
              <span className="grid size-5 shrink-0 place-items-center text-neutral-500">
                {c.icon}
              </span>
              {c.label}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
