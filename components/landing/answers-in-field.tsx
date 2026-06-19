"use client";

import Image from "next/image";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import Logo from "../logo";

type Message =
  | { kind: "user"; text: string }
  | { kind: "ai"; text: string };

const SCRIPT: Message[] = [
  { kind: "user", text: "Is this in stock?" },
  { kind: "ai", text: "Yes 14 units at the Cleveland warehouse. 6 more due in Friday from the regional DC." },
  { kind: "user", text: "What is the lead time?" },
  { kind: "ai", text: "Standard 3 business days from order. Expedited same-day if the customer needs it before Thursday." },
  { kind: "user", text: "What did we quote last time?" },
  { kind: "ai", text: "Last quote for Apex Welding was $48,200 on Oct 14, valid for 30 days. They never countered." },
  { kind: "user", text: "What alternatives can we offer?" },
  { kind: "ai", text: "Two close matches: the Lincoln 325 (in stock, 8% lower) and the Miller Dimension 652 (premium tier, 3-day lead)." },
  { kind: "user", text: "What does this customer usually buy?" },
  { kind: "ai", text: "Argon mix 75/25, Lincoln consumables, and safety gear. Average order $11.4k, every 6 weeks." },
];

const TYPE_SPEED_MS = 22;
const PAUSE_BETWEEN_MS = 700;
const PAUSE_AFTER_AI_MS = 1400;

export function AnswersInField() {
  const [visibleCount, setVisibleCount] = useState(0);
  const [typedLength, setTypedLength] = useState(0);
  const [offset, setOffset] = useState(0);
  const viewportRef = useRef<HTMLDivElement | null>(null);
  const columnRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (visibleCount >= SCRIPT.length) {
      const t = setTimeout(() => {
        setVisibleCount(0);
        setTypedLength(0);
      }, 4000);
      return () => clearTimeout(t);
    }

    const current = SCRIPT[visibleCount];

    if (current.kind === "user") {
      const t = setTimeout(() => {
        setVisibleCount((c) => c + 1);
        setTypedLength(0);
      }, PAUSE_BETWEEN_MS);
      return () => clearTimeout(t);
    }

    const fullText = current.text;
    if (typedLength < fullText.length) {
      const t = setTimeout(() => {
        setTypedLength((n) => n + 1);
      }, TYPE_SPEED_MS);
      return () => clearTimeout(t);
    }

    const t = setTimeout(() => {
      setVisibleCount((c) => c + 1);
      setTypedLength(0);
    }, PAUSE_AFTER_AI_MS);
    return () => clearTimeout(t);
  }, [visibleCount, typedLength]);

  useLayoutEffect(() => {
    const viewport = viewportRef.current;
    const column = columnRef.current;
    if (!viewport || !column) return;
    const overflow = column.scrollHeight - viewport.clientHeight;
    setOffset(overflow > 0 ? overflow : 0);
  }, [visibleCount, typedLength]);

  return (
    <section
      id="v2-answers-in-field"
      className="relative py-20 lg:py-28 overflow-hidden"
    >

      <div className="mx-auto max-w-7xl z-2 px-6 md:px-10 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        <div className="flex flex-col h-full justify-start">
          <div>
            <div className="text-[15px] font-medium flex items-center justify-start gap-3 text-brand">
              <span className="w-0.5 rounded-full h-4 bg-brand" /> Answers in the field
            </div>
            <h2 className="mt-6 text-3xl sm:text-4xl lg:text-4xl font-semibold tracking-tight text-heading">
              Industrial sales reps <br />
              get asked questions every day.
            </h2>
          </div>

          <div className="mt-5 max-w-md">
            <p className="text-lg sm:text-xl font-medium text-heading leading-relaxed">
              Otto gives reps answers while they are still with the customer.
            </p>
            <p className="mt-3 text-base sm:text-lg text-muted-foreground leading-relaxed">
              It connects to your product data, inventory, CRM, quotes, email, calendar, and customer history.
            </p>

            <ul className="mt-5 list-inside list-disc space-y-2 text-base sm:text-lg text-muted-foreground leading-relaxed">
              <li>No callbacks.</li>
              <li>No digging through systems.</li>
              <li>No lost momentum.</li>
            </ul>
          </div>
        </div>

        <div className="relative">
          <div className="relative aspect-4/5 w-full md:max-w-[520px] md:ml-auto rounded-2xl overflow-hidden border border-light-dark">
            <Image
              src="/problem-2.png"
              alt="Rep getting answers from Otto during a customer visit"
              fill
              loading="eager"
              sizes="(min-width: 1024px) 520px, 90vw"
              className="object-cover saturate-90 object-bottom"
            />

            <div className="absolute inset-x-0 -bottom-42 flex items-end justify-center">
              <div
                className="relative w-full max-w-[300px] sm:max-w-[340px] aspect-9/16 rounded-t-[2.4rem] border border-white/20 overflow-hidden backdrop-blur-md [-webkit-mask-image:linear-gradient(to_top,transparent_0%,black_50%,black_60%,black_80%,black_100%)] flex flex-col"

              >
                <div className="absolute top-4 z-10 p-4  mx-auto w-full flex items-center justify-center">

                  <Logo onlyIcon className=" size-6 text-white drop-shadow-2xl shadow-black" />
                </div>
                <div className="absolute inset-0 bg-black" />
                <div
                  ref={viewportRef}
                  className="absolute inset-0 overflow-hidden pt-16 pb-4 px-5"
                  style={{
                    maskImage:
                      "linear-gradient(to bottom, transparent 0%, black 14%, black 86%, transparent 100%)",
                    WebkitMaskImage:
                      "linear-gradient(to bottom, transparent 0%, black 14%, black 86%, transparent 100%)",
                  }}
                >

                  <div
                    ref={columnRef}
                    className="flex flex-col gap-6 transition-transform duration-500 ease-out will-change-transform"
                    style={{ transform: `translateY(-${offset}px)` }}
                  >
                    {SCRIPT.slice(0, visibleCount + 1).map((m, i) => {
                      const isLast = i === visibleCount;
                      const display =
                        m.kind === "user"
                          ? m.text
                          : isLast
                            ? m.text.slice(0, typedLength)
                            : m.text;

                      if (m.kind === "user") {
                        return (
                          <div key={i} className="flex justify-end">
                            <div className="max-w-[88%] rounded-2xl rounded-br-md bg-white/5 px-3 py-2 text-[13px] leading-relaxed text-neutral-300 border border-white/2">
                              {display}
                            </div>
                          </div>
                        );
                      }

                      return (
                        <div key={i} className="flex justify-start">
                          <div className="max-w-[92%] text-[13px] leading-snug text-neutral-400">
                            {display}
                            {isLast && typedLength < m.text.length && (
                              <span className="inline-block w-[2px] h-3 bg-white/70 ml-0.5 align-middle animate-pulse" />
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
