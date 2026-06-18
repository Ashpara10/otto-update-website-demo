"use client";

import { BookDemoButton } from "@/components/book-demo-button";


export default function CtaSection() {
  // const { show } = useBookDemo();

  return (
    <section className="bg-dark px-5 pb-20 pt-8 sm:px-8 sm:pb-24">
      <div className="mx-auto max-w-3xl rounded-xl border-t border-light-dark pt-12">
        <div className="flex flex-col items-start gap-6">
          <h2 className="text-4xl font-semibold tracking-tight text-brand sm:text-6xl">
            Sell.
          </h2>
          <p className="text-2xl font-medium text-neutral-100 sm:text-3xl">
            In such a future, we built Otto.
          </p>
          <BookDemoButton
            // onClick={show}
            className="inline-flex rounded-full bg-brand px-8 py-3 text-lg font-semibold text-neutral-900 transition hover:bg-brand-soft"
          >
            Book a Demo
          </BookDemoButton>
          <p className="text-neutral-400">
            Free during beta • No credit card required
          </p>
        </div>
      </div>
    </section>
  );
}
