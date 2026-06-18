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
    <section id="trust" className="relative py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="text-[15px] font-medium flex items-center justify-center  text-brand">
          <span className="w-0.5 rounded-full h-4 bg-brand mr-2" /> Security
        </div>
        <h2 className="mx-auto mt-4 max-w-3xl text-center text-2xl md:text-3xl font-semibold text-heading">
          How Otto handles your data.
        </h2>
        <p className="mx-auto mt-5 max-w-md text-center text-base text-muted-foreground leading-relaxed">
          Otto works with customer and account data, so here is how it is
          kept and controlled.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {CELLS.map((c) => (
            <div
              key={c.label}
              className="flex items-center gap-3 rounded-2xl border border-light-dark bg-light-dark/20 cursor-pointer hover:bg-light-dark/40 px-5 py-4 text-base text-foreground/85 min-h-24"
            >
              <span className="grid size-8 shrink-0 place-items-center text-subheading">
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
