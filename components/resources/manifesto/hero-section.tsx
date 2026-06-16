export default function HeroSection() {
  return (
    <section className="relative bg-white border-b border-neutral-200">
      <div className="mx-auto max-w-5xl px-5 flex flex-col items-center justify-center text-center sm:px-8 pt-28 pb-16 sm:pt-36 sm:pb-20">
        <p className="inline-flex rounded-full border border-green-contrast/20 bg-green-contrast/10 px-3 py-1 text-green-contrast">
          The Anti-CRM Manifesto
        </p>
        <h1 className="mt-8 text-4xl font-semibold tracking-tight text-neutral-900 sm:text-6xl">
          We are
          <span className="block text-green-contrast">Sales people.</span>
        </h1>
        <p className="mt-5 text-base text-neutral-600 sm:text-lg max-w-2xl">
          The Sales Tribe. This is what we believe.
        </p>
      </div>
    </section>
  );
}
