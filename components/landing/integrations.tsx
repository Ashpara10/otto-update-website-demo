const CELLS = [
  "CRM", "ERP", "Email", "Calendar",
  "Phone & text", "CPQ / quoting", "Service systems", "Spreadsheets",
];

export function Integrations() {
  return (
    <section id="integrations" className="relative py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="text-[15px] font-medium flex items-center justify-center gap-3 text-brand">
          <span className="w-0.5 rounded-full h-4 bg-brand" /> Works with your tools
        </div>
        <h2 className="mx-auto mt-4 max-w-2xl text-center text-3xl font-semibold text-neutral-100 md:text-3xl">
          It works with what you already use.
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-center text-base text-neutral-400 leading-relaxed">
          Nothing to switch. Otto reads from and writes to your existing
          tools.
        </p>

        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4">
          {CELLS.map((c) => (
            <div
              key={c}
              className="flex min-h-[84px] items-center justify-center gap-2.5 rounded-2xl border border-light-dark/60  bg-light-dark/40 px-6 py-6 text-center text-base font-medium text-neutral-300 transition-colors hover:border-brand/30 hover:text-brand cursor-pointer"
            >
              <span className="size-1.5 rounded-full bg-brand/60" />
              {c}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
