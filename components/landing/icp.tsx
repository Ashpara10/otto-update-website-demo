const TAGS = [
  "Industrial equipment",
  "Manufacturing supplies",
  "Material handling",
  "Electrical & mechanical components",
  "Packaging & automation",
  "Building materials",
  "Industrial gases & chemicals",
  "Industrial services",
  "B2B distribution",
];

export function ICP() {
  return (
    <section id="icp" className="relative py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
<div className="text-[15px] font-medium flex items-center justify-center gap-3 text-brand">
          <span className="w-0.5 rounded-full h-4 bg-brand" /> Who it is for
        </div>
                <h2 className="mx-auto mt-4 max-w-3xl text-center text-3xl font-semibold tracking-[-0.01em] text-neutral-100 sm:text-4xl">
          Built for field-heavy industrial sales.
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-center text-base leading-7 text-neutral-600 sm:text-lg">
          If your reps spend the day in the field and your revenue depends on
          follow-up, Otto fits.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {TAGS.map((t) => (
            <span
              key={t}
              className="rounded-full border border-light-dark bg-light-dark px-5 py-2.5 text-base text-neutral-300 transition-colors hover:border-brand/30 hover:text-brand"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
