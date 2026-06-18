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
  <span className="grid size-5 shrink-0 place-items-center rounded-md bg-rose-500/10 text-sm font-bold text-rose-500/80">
    ×
  </span>
);
const Check = () => (
  <span className="grid size-5 shrink-0 place-items-center rounded-md bg-brand/15 text-sm font-bold text-brand">
    ✓
  </span>
);

export function BeforeAfter() {
  return (
    <section id="beforeafter" className="relative py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        {/* <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between"> */}
        <div>
          <div className="text-[15px] font-medium flex items-center justify-start gap-3 text-brand">
            <span className="w-0.5 rounded-full h-4 bg-brand" /> The difference
          </div>
          <h2 className="mt-3 text-2xl sm:text-3xl tracking-tight font-semibold text-heading">
            What changes when <br /> the visit gets captured.

          </h2>
          {/* </div>
          <p className="text-base leading-relaxed text-muted-foreground max-w-md">
            When Otto captures the visit, the data lands in the system before
            it disappears. The rep stays on the phone. The manager sees the
            account move. Everyone stops chasing.
          </p> */}
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2">
          <div className="rounded-2xl border border-rose-500/20 bg-rose-500/[0.04] p-5 md:p-7">
            <h4 className="mb-5 text-xs font-semibold tracking-[0.08em] text-rose-500/80">
              Before Otto
            </h4>
            <div className="divide-y divide-rose-500/15">
              {BEFORE.map((b) => (
                <div key={b} className="flex items-center gap-3 py-3 text-[15px] text-foreground/85">
                  <Cross />
                  {b}
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-2xl border border-brand/25 bg-brand/5 p-5 md:p-7">
            <h4 className="mb-5 text-xs font-semibold tracking-[0.08em] text-brand">
              After Otto
            </h4>
            <div className="divide-y divide-brand/15">
              {AFTER.map((b) => (
                <div key={b} className="flex items-center gap-3 py-3 text-[15px] text-foreground/85">
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
