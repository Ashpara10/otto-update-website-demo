export default function IndexHero() {
  return (
    <section className="border-b border-light-dark bg-dark pb-16 pt-32 sm:pb-20 sm:pt-36">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        {/* <div className="inline-flex rounded-full border border-brand/20 bg-brand/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-brand">
          Otto Blog
        </div> */}
        <h1 className="mt-8 max-w-4xl text-4xl font-semibold tracking-tight text-heading sm:text-6xl">
          Insights on Sales,
          <span className="block text-brand">CRM, and AI.</span>
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
          Why traditional CRMs fail reps, how AI is changing sales, and what
          voice-first productivity actually looks like.
        </p>
      </div>
    </section>
  );
}
