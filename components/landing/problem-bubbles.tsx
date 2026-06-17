"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const messages = [
  { text: "The pricing they asked for", tag: "forgotten" },
  { text: "The competitor they mentioned", tag: "never written down" },
  { text: "The follow-up they promised", tag: "missed" },
  { text: "The quote waiting on approval", tag: "still sitting" },
  { text: "The CRM entry", tag: "never filled in" },
  { text: "The manager", tag: "has no idea" },
];

export function ProblemBubbles() {
  const [visibleCount, setVisibleCount] = useState(0);

  useEffect(() => {
    if (visibleCount >= messages.length) {
      const t = setTimeout(() => setVisibleCount(0), 4000);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => setVisibleCount((c) => c + 1), 1800);
    return () => clearTimeout(t);
  }, [visibleCount]);

  return (
    <div className="absolute hidden inset-0 z-10 md:flex flex-col items-start justify-end gap-2 p-4 sm:p-5 pointer-events-none">
      <AnimatePresence initial={false}>
        {messages.slice(0, visibleCount).map((m, i) => (
          <motion.div
            key={`${i}-${m.text}`}
            initial={{ opacity: 0, y: 16, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.25 } }}
            transition={{ type: "spring", stiffness: 380, damping: 28, mass: 0.7 }}
            className="relative max-w-[85%] self-start"
          >
            <div className="relative rounded-2xl  bg-gray-200 backdrop-blur-md px-3 py-4 shadow-lg border border-white/10">
              <p className="text-sm font-medium text-gray-500 leading-snug pr-16">
                {m.text}
              </p>
              {/* <span className="absolute right-2.5 top-1/2 -translate-y-1/2 inline-flex items-center gap-1 text-[10px] font-semibold uppercase tracking-wide text-rose-300 whitespace-nowrap">
                <span className="h-1.5 w-1.5 rounded-full bg-rose-400" />
                {m.tag}
              </span> */}
            </div>
            <div className="absolute left-1 bottom-0 w-3 h-3 bg-gray-200 transform -translate-x-1/2 rounded-br-lg" style={{ clipPath: 'polygon(100% 0, 0 100%, 100% 100%)' }}></div>

          </motion.div>
        ))}
      </AnimatePresence>

      {visibleCount > 0 && visibleCount < messages.length && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="self-end flex items-center gap-1 px-2"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-zinc-400/80 animate-bounce" style={{ animationDelay: "0ms" }} />
          <span className="h-1.5 w-1.5 rounded-full bg-zinc-400/80 animate-bounce" style={{ animationDelay: "150ms" }} />
          <span className="h-1.5 w-1.5 rounded-full bg-zinc-400/80 animate-bounce" style={{ animationDelay: "300ms" }} />
        </motion.div>
      )}
    </div>
  );
}
