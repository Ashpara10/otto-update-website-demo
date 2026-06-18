import { BookDemoButton } from "@/components/book-demo-button";

export function FinalCTA() {
  return (
    <section id="book" className="relative overflow-hidden bg-dark py-24 lg:py-32">
      <div className="pointer-events-none absolute blur-[250px] -left-[10%] -bottom-[10%] size-[400px] rounded-full bg-linear-to-b from-emerald-600  to-brand " />
      <div className="pointer-events-none absolute blur-[250px] -right-[20%] -top-[20%] size-[400px] rounded-full bg-linear-to-b from-emerald-600  to-brand " />
      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold tracking-[-0.04em] text-neutral-100 ">
          A coordinator for every rep.
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-neutral-400 sm:text-lg">
          The rep finishes a visit and calls Otto. Otto updates the CRM, sets
          the follow-ups, and tracks the quote. The rep goes to the next
          visit. That is the loop, after every call.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-5">
          <BookDemoButton className="inline-flex h-14 items-center gap-2 rounded-full bg-brand px-8 text-base font-semibold text-neutral-900 transition hover:bg-brand-soft">
            Book a Demo
          </BookDemoButton>
        </div>
        <p className="mt-5 text-sm text-subheading">
          15 minutes. We run it on a visit that looks like yours.
        </p>
      </div>
    </section>
  );
}
