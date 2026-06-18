"use client";

import Image from "next/image";
import { BookDemoButton } from "../book-demo-button";
import { ProblemBubbles } from "./problem-bubbles";

export function ProblemSection() {

  return (
    <section id="v2-how-it-works" className="relative py-20 lg:py-28 overflow-hidden">
      <div className="hidden md:flex pointer-events-none absolute blur-[250px] -left-[10%] -bottom-[10%] size-[400px] rounded-full bg-linear-to-b from-[var(--color-blob-from)] to-[var(--color-blob-to)] -z-1" />
      <div className="hidden md:flex pointer-events-none absolute blur-[250px] -right-[10%] -top-[10%] size-[400px] rounded-full bg-linear-to-b from-[var(--color-blob-from)] to-[var(--color-blob-to)] -z-1" />
      <div className="mx-auto max-w-7xl z-2 px-6 md:px-10  grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        <div className="flex flex-col h-full justify-between">
          <div className="">

            <div className="text-[15px] font-medium flex items-center justify-start gap-3 text-brand">
              <span className="w-0.5 rounded-full h-4 bg-brand" /> The problem
            </div>
            <h2 className="mt-4 text-3xl sm:text-4xl font-semibold tracking-tight text-heading">
              Field Reps Are Working. <br />Opportunities Are Slipping.
            </h2>
          </div>
          <div className="mt-5 max-w-md">

            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              Industrial reps do not lose deals because they are lazy.
              They lose deals because too much happens between visits.
            </p>

            <ul className="mt-5 space-y-2 list-disc list-inside text-base sm:text-lg text-muted-foreground leading-relaxed">
              <li>The quote that did not get sent.</li>
              <li>The follow-up that stayed in a notebook.</li>
              <li>The renewal nobody remembered.</li>
              <li>The customer issue that never reached the manager.</li>
              <li>The opportunity that quietly went cold.</li>
            </ul>

            <p className="mt-6 text-base font-medium text-heading leading-relaxed">
              Otto closes that gap.
            </p>
            <ul className="mt-4 list-inside list-disc space-y-2 text-base text-muted-foreground leading-relaxed">
              <li>Before the visit, Otto prepares the rep.</li>
              <li>After the visit, Otto captures the next steps.</li>
              <li>Then it updates the systems and keeps the deal moving.</li>
            </ul>

            <div className="w-full flex justify-start mt-10">
              <BookDemoButton
                className="btn-primary inline-flex h-12 items-center rounded-full px-6 text-base font-medium"
              >
                Talk to Otto
              </BookDemoButton>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="relative aspect-[4/5] w-full md:max-w-[520px] md:ml-auto rounded-2xl overflow-hidden border border-light-dark">
            <Image
              src="/problem.png"
              alt="Field rep on the road between customer visits"
              fill
              loading="eager"
              sizes="(min-width: 1024px) 520px, 90vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr  from-black/10 via-transparent to-transparent" />
            <ProblemBubbles />
          </div>

          {/* <div className="hidden lg:block absolute -bottom-6 -left-6 w-32 h-32 rounded-full bg-[#00b386]/20 blur-3xl" />
          <div className="hidden lg:block absolute -top-8 -right-8 w-40 h-40 rounded-full bg-[#CBFD40]/30 blur-3xl" /> */}
        </div>
      </div>
    </section>
  );
}
