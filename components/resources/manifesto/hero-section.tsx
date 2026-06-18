export default function HeroSection() {
  return (
    <section className="relative bg-dark border-b border-light-dark">
      <div className="mx-auto max-w-5xl px-5 flex flex-col items-center justify-center text-center sm:px-8 pt-28 pb-16 sm:pt-36 sm:pb-20">
        <p className="inline-flex rounded-full border border-brand/20 bg-brand/10 px-3 py-1 text-brand">
          The Anti-CRM Manifesto
        </p>
        <h1 className="mt-8 text-4xl font-semibold tracking-tight text-heading sm:text-6xl">
          We are
          <span className="block text-brand">Sales people.</span>
        </h1>
        <p className="mt-5 text-base text-muted-foreground sm:text-lg max-w-2xl">
          The Sales Tribe. This is what we believe.
        </p>
      </div>
    </section>
  );
}
