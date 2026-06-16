"use client";

import { BookDemoButton } from "@/components/book-demo-button";


export default function CtaSection() {
  // const { show } = useBookDemo();

  return (
    <section className="bg-white px-5 pb-20 pt-8 sm:px-8 sm:pb-24">
      <div className="mx-auto max-w-3xl rounded-xl border-t border-neutral-300 pt-12">
        <div className="flex flex-col items-start gap-6">
          <h2 className="text-4xl font-semibold tracking-tight text-green-contrast sm:text-6xl">
            Sell.
          </h2>
          <p className="text-2xl font-medium text-neutral-900 sm:text-3xl">
            In such a future, we built Otto.
          </p>
          <BookDemoButton
            // onClick={show}
            className="inline-flex rounded-full bg-green-contrast px-8 py-3 text-lg font-medium text-neutral-900 transition-opacity hover:opacity-90"
          >
            Book a Demo
          </BookDemoButton>
          <p className="text-neutral-500">
            Free during beta • No credit card required
          </p>
        </div>
      </div>
    </section>
  );
}
