import { BookDemoButton } from "@/components/book-demo-button";

export function FinalCTA() {
  return (
    <section id="book" className="relative overflow-hidden bg-white py-24 lg:py-32">
      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <h2 className="text-3xl font-semibold tracking-[-0.04em] text-neutral-900 sm:text-5xl">
          A coordinator <br /> for every rep.
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-neutral-600 sm:text-lg">
          The rep finishes a visit and calls Otto. Otto updates the CRM, sets
          the follow-ups, and tracks the quote. The rep goes to the next
          visit. That is the loop, after every call.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-5">
          <BookDemoButton className="inline-flex h-14 items-center gap-2 rounded-full bg-brand px-8 text-base font-semibold text-neutral-900 transition-opacity hover:opacity-90">
            Book a demo
          </BookDemoButton>
        </div>
        <p className="mt-5 text-sm text-neutral-500">
          15 minutes. We run it on a visit that looks like yours.
        </p>
      </div>
    </section>
  );
}
