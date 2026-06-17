const BEFORE = [
  "Notes stay in the rep's head",
  "CRM updated late, or not at all",
  "Coordinators chase for details",
  "Quotes go cold",
  "Follow-ups slip",
  "Managers work off gut feel",
];
const AFTER = [
  "Every visit becomes a clean update",
  "CRM stays current",
  "Coordinators get clean handoffs",
  "Quote risks are visible",
  "Follow-ups are set automatically",
  "Managers see account movement",
];

const Cross = () => (
  <span className="grid size-5 shrink-0 place-items-center rounded-md bg-rose-500/10 text-sm font-bold text-rose-600">
    ×
  </span>
);
const Check = () => (
  <span className="grid size-5 shrink-0 place-items-center rounded-md bg-green-contrast/15 text-sm font-bold text-green-contrast">
    ✓
  </span>
);

export function BeforeAfter() {
  return (
    <section id="beforeafter" className="bg-white py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <p className="text-xs font-semibold tracking-[0.15em] text-green-contrast">
          The difference
        </p>
        <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-[-0.01em] text-neutral-900 sm:text-4xl">
          What changes when the visit gets captured.
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2">
          <div className="rounded-2xl border border-rose-200 bg-rose-500/[0.04] p-7">
            <h4 className="mb-5 text-xs font-semibold tracking-[0.08em] text-rose-600">
              Before Otto
            </h4>
            <div className="divide-y divide-rose-200/60">
              {BEFORE.map((b) => (
                <div key={b} className="flex items-center gap-3 py-3 text-base text-neutral-700">
                  <Cross />
                  {b}
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-2xl border border-green-contrast/25 bg-green-contrast/5 p-7">
            <h4 className="mb-5 text-xs font-semibold tracking-[0.08em] text-green-contrast">
              After Otto
            </h4>
            <div className="divide-y divide-green-contrast/15">
              {AFTER.map((b) => (
                <div key={b} className="flex items-center gap-3 py-3 text-base text-neutral-700">
                  <Check />
                  {b}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
