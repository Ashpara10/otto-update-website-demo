"use client";

import Image from "next/image";
import { BookDemoButton } from "../book-demo-button";
import { ProblemBubbles } from "./problem-bubbles";

export function ProblemSection() {

  return (
    <section id="v2-how-it-works" className="relative py-20 lg:py-28 overflow-hidden">
      <div className="pointer-events-none absolute blur-[250px] -left-[10%] -bottom-[10%] size-[400px] rounded-full bg-linear-to-b from-emerald-600  to-brand -z-1" />
      <div className="pointer-events-none absolute blur-[250px] -right-[10%] -top-[10%] size-[400px] rounded-full bg-linear-to-b from-emerald-600  to-brand -z-1" />
      <div className="mx-auto max-w-7xl z-2 px-6 md:px-10  grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        <div className="flex flex-col h-full justify-between">
          <div className="">

            <div className="text-[15px] font-medium flex items-center justify-start gap-3 text-brand">
              <span className="w-0.5 rounded-full h-4 bg-brand" /> The problem
            </div>
            <h2 className="mt-4 text-2xl sm:text-3xl font-semibold text-neutral-100">
              {/* The day moves faster
              <br />
              than the paperwork. */}
              The Work Gets <br />Done.  The Follow-Up Doesn't.
            </h2>
          </div>
          <div className="mt-5 max-w-md">

            <p className="text-base text-neutral-400 leading-relaxed">
              {/* Field reps finish three customer meetings and drive home with the most
              valuable intelligence of the week still in their head. Then it&apos;s
              dinner, kids, and an empty CRM form at 10pm. */}

              Industrial reps don't lose opportunities because they aren't working hard.
              They lose them in the gap between customer visits.
              The quote that didn't get sent.
              The renewal nobody remembered.
              The follow-up that stayed in a notebook.
              The account that quietly went cold.

            </p>

            <div className="w-full flex justify-start mt-10">
              <BookDemoButton
                className="inline-flex h-12 items-center rounded-full bg-brand  px-6 text-base font-semibold text-lime-950 hover:bg-lime-400 transition "
              >
                Book a Demo
              </BookDemoButton>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="relative aspect-[4/5] w-full md:max-w-[520px] md:ml-auto rounded-2xl overflow-hidden border border-light-dark">
            <Image
              src="/problem-1.png"
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
