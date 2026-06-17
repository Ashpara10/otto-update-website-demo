"use client";

import Image from "next/image";
import { BookDemoButton } from "../book-demo-button";
import { ProblemBubbles } from "./problem-bubbles";

export function ProblemSection() {

  return (
    <section id="v2-how-it-works" className="relative py-20 lg:py-28 ">
      <div className="mx-auto max-w-7xl px-6 md:px-10  grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        <div className="flex flex-col h-full justify-between">
          <div className="">

            <p className="text-xs font-semibold tracking-[0.15em] uppercase text-[#00b386]">
              / The problem
            </p>
            <h2 className="mt-4 text-3xl sm:text-4xl font-semibold tracking-[-0.01em] leading-[1.1] text-zinc-900">
              The day moves <span className="text-zinc-400">faster</span>
              <br />
              than the paperwork.
            </h2>
          </div>
          <div className="mt-5 max-w-md">

            <p className=" text-zinc-600 text-base sm:text-lg leading-relaxed">
              Field reps finish three customer meetings and drive home with the most
              valuable intelligence of the week still in their head. Then it&apos;s
              dinner, kids, and an empty CRM form at 10pm.
            </p>

            <div className="w-full flex justify-start mt-10">
              <BookDemoButton
                className="inline-flex h-12 items-center rounded-full bg-brand  px-6 text-base font-medium text-lime-900 hover:bg-lime-400 transition "
              >
                Book a Demo
              </BookDemoButton>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="relative aspect-[4/5] w-full md:max-w-[520px] md:ml-auto rounded-2xl overflow-hidden border border-zinc-200 ">
            <Image
              src="/problem.png"
              alt="Field rep on the road between customer visits"
              fill
              loading="eager"
              sizes="(min-width: 1024px) 520px, 90vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr hidden md:flex from-black/10 via-transparent to-transparent" />
            <ProblemBubbles />
          </div>

          {/* <div className="hidden lg:block absolute -bottom-6 -left-6 w-32 h-32 rounded-full bg-[#00b386]/20 blur-3xl" />
          <div className="hidden lg:block absolute -top-8 -right-8 w-40 h-40 rounded-full bg-[#CBFD40]/30 blur-3xl" /> */}
        </div>
      </div>
    </section>
  );
}
