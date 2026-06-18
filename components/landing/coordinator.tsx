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
  <span className="grid size-5 shrink-0 place-items-center rounded-md bg-brand/15 text-sm font-bold text-brand">
    ✓
  </span>
);

export function Coordinator() {
  return (
    <section id="coordinator" className="relative py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="flex flex-col text-left md:text-center items-start md:items-center md:mx-auto justify-between">
          <div className=" flex flex-col items-center">

            <div className="text-[15px] font-medium flex items-start md:items-center justify-center gap-3 text-brand">
              <span className="w-0.5 rounded-full h-4 bg-brand" /> For sales coordinators
            </div>
            <h2 className="mt-4 text-2xl sm:text-3xl  font-semibold text-neutral-100">
              Otto does not replace your  <br /> coordinator. It gives them better information.
            </h2>
          </div>
          <p className="mt-5 md:max-w-2xl text-base text-neutral-400 leading-relaxed">
            Instead of chasing reps for what happened, coordinators get clean
            visit summaries, customer requests, pending follow-ups, and quote
            updates, ready to act on.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 rounded-2xl border border-light-dark bg-dark p-6 sm:p-10 md:grid-cols-2">
          <div>
            <h4 className="mb-5 text-xs font-semibold tracking-[0.08em] text-neutral-500">
              Today
            </h4>
            <div className="divide-y divide-light-dark">
              {OLD.map((c) => (
                <div key={c} className="flex items-center gap-3 py-3 text-base text-neutral-300">
                  <Cross />
                  {c}
                </div>
              ))}
            </div>
          </div>
          <div>
            <h4 className="mb-5 text-xs font-semibold tracking-[0.08em] text-brand">
              With Otto
            </h4>
            <div className="divide-y divide-brand/15">
              {NEW.map((c) => (
                <div key={c} className="flex items-center gap-3 py-3 text-base text-neutral-300">
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
