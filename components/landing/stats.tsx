"use client";

import { motion, useInView, type Variants } from "framer-motion";
import { useEffect, useRef, useState } from "react";

type Stat = {
  value: number;
  suffix: string;
  caption: string;
};

const stats: Stat[] = [
  {
    value: 30,
    suffix: "%",
    caption: "of a rep's week is actually spent selling. The rest is admin.",
  },
  {
    value: 37,
    suffix: "%",
    caption: "of reps admit to entering false data just to clear the CRM.",
  },
  {
    value: 27,
    suffix: "%",
    caption: "of selling time is lost to records that are out of date.",
  },
];

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

function CountUp({ to, suffix }: { to: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 900;
    const start = performance.now();
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.round(to * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to]);

  return (
    <span ref={ref} className="tabular-nums">
      {n}
      {suffix}
    </span>
  );
}

export function Stats() {
  return (
    <section
      id="v2-stats"
      className="relative mt-20 py-20 md:py-28 "
    >
      <div className="mx-auto max-w-7xl flex items-center justify-center px-6 md:px-10">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid w-full grid-cols-1 md:grid-cols-3 divide-y  border-x border-light-dark md:divide-y-0 md:divide-x divide-light-dark"
        >
          {stats.map((s) => (
            <motion.div
              key={s.caption}
              variants={item}
              className="py-12 md:py-6 md:px-10 flex flex-col items-start justify-center"
            >
              <p className="text-6xl font-bold tracking-[-0.03em] bg-gradient-to-b from-emerald-600 to-brand bg-clip-text text-transparent">
                <CountUp to={s.value} suffix={s.suffix} />
              </p>
              <p className="mt-6 text-base text-neutral-400 text-left leading-relaxed w-4/5">
                {s.caption}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
