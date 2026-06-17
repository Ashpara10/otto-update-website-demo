const CELLS = [
  "CRM", "ERP", "Email", "Calendar",
  "Phone & text", "CPQ / quoting", "Service systems", "Spreadsheets",
];

export function Integrations() {
  return (
    <section id="integrations" className="bg-white py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <p className="text-center text-xs font-semibold tracking-[0.15em] text-green-contrast">
          Works with your tools
        </p>
        <h2 className="mx-auto mt-4 max-w-3xl text-center text-3xl font-semibold tracking-[-0.01em] text-neutral-900 sm:text-4xl">
          It works with what you already use.
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-center text-base leading-7 text-neutral-600 sm:text-lg">
          Nothing to switch. Otto reads from and writes to your existing
          tools.
        </p>

        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4">
          {CELLS.map((c) => (
            <div
              key={c}
              className="flex min-h-[84px] items-center justify-center gap-2.5 rounded-2xl border border-neutral-200 bg-neutral-50 px-6 py-6 text-center text-base font-medium text-neutral-700 transition-colors hover:border-green-contrast/30 hover:text-green-contrast"
            >
              <span className="size-1.5 rounded-full bg-green-contrast/60" />
              {c}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
