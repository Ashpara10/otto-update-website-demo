const OLD = [
  "Chasing reps for visit details",
  "Piecing updates together from messages",
  "Quotes moving slowly",
  "Missed commitments",
];
const NEW = [
  "Clean handoff after every visit",
  "Customer requests already captured",
  "Quotes moving faster",
  "Nothing falls through",
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

export function Coordinator() {
  return (
    <section id="coordinator" className="bg-white py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <p className="text-xs font-semibold tracking-[0.15em] text-green-contrast">
          For sales coordinators
        </p>
        <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-[-0.01em] text-neutral-900 sm:text-4xl">
          Otto does not replace your coordinator. It gives them better information.
        </h2>
        <p className="mt-5 max-w-2xl text-base leading-7 text-neutral-600 sm:text-lg">
          Instead of chasing reps for what happened, coordinators get clean
          visit summaries, customer requests, pending follow-ups, and quote
          updates, ready to act on.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-5 rounded-2xl border border-neutral-200 bg-white p-6 sm:p-10 md:grid-cols-2">
          <div>
            <h4 className="mb-5 text-xs font-semibold tracking-[0.08em] text-neutral-500">
              Today
            </h4>
            <div className="divide-y divide-neutral-200">
              {OLD.map((c) => (
                <div key={c} className="flex items-center gap-3 py-3 text-base text-neutral-700">
                  <Cross />
                  {c}
                </div>
              ))}
            </div>
          </div>
          <div>
            <h4 className="mb-5 text-xs font-semibold tracking-[0.08em] text-green-contrast">
              With Otto
            </h4>
            <div className="divide-y divide-green-contrast/15">
              {NEW.map((c) => (
                <div key={c} className="flex items-center gap-3 py-3 text-base text-neutral-700">
                  <Check />
                  {c}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
