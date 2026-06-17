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
    <section id="icp" className="bg-white py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <p className="text-center text-xs font-semibold tracking-[0.15em] text-green-contrast">
          Who it is for
        </p>
        <h2 className="mx-auto mt-4 max-w-3xl text-center text-3xl font-semibold tracking-[-0.01em] text-neutral-900 sm:text-4xl">
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
              className="rounded-full border border-neutral-200 bg-neutral-50 px-5 py-2.5 text-base text-neutral-700 transition-colors hover:border-green-contrast/30 hover:text-green-contrast"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
