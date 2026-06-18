"use client";

import { motion, type Variants } from "framer-motion";
import { ArrowRight01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Logo from "../logo";

const keepsTrack = [
  "Visits",
  "Calls",
  "Emails",
  "Quotes",
  "Orders",
  "ERP activity",
  "Service issues",
  "Competitor mentions",
  "Rep notes",
  "CRM history",
];

const tellsYou = [
  "Pre-visit briefs",
  "Follow-up reminders",
  "Quote-risk alerts",
  "Reorder signals",
  "Manager summaries",
  "Next best action",
];

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.06, delayChildren: 0.1 },
  },
};

const leftItem: Variants = {
  hidden: { opacity: 0, x: -32 },
  show: { opacity: 1, x: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

const rightItem: Variants = {
  hidden: { opacity: 0, x: 32 },
  show: { opacity: 1, x: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

const centerPop: Variants = {
  hidden: { opacity: 0, scale: 0.6, rotate: -20 },
  show: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const heading: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

function Pill({ label, variant }: { label: string; variant: "left" | "right" }) {
  const styles =
    variant === "left"
      ? "border-white/10 bg-dark/[0.03] text-neutral-300"
      : "border-mint/25 bg-mint/10 text-mint";
  return (
    <motion.span
      variants={variant === "left" ? leftItem : rightItem}
      className={`inline-flex items-center rounded-md border px-3.5 py-1.5 text-sm font-medium whitespace-nowrap ${styles}`}
    >
      {label}
    </motion.span>
  );
}

export function Knowledge() {
  return (
    <section
      id="v2-what-otto-knows"
      className="relative py-20 lg:py-28 mt-12 overflow-hidden"
    >

      <div className="relative mx-auto w-full max-w-7xl px-6">

        <div className="h-[800px] flex flex-row overflow-y-hidden max-w-5xl mx-auto w-full relative ">
          <div className="absolute inset-x-0 top-0  w-full h-[300px] rounded-b-[100%] z-2  bg-dark " >

            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              className="text-center z-3 -mb-20"
            >
              <motion.div
                variants={heading}
              className="text-[15px] font-medium flex items-center justify-start gap-3 text-brand">
                <span className="w-0.5 rounded-full h-4 bg-brand" /> What Otto knows
              </motion.div>
              <motion.h2
                variants={heading}
                className="mt-4 text-4xl sm:text-5xl font-semibold tracking-[-0.02em] leading-[1.05] text-neutral-100"
              >
                Otto knows each account.
              </motion.h2>
              <motion.p
                variants={heading}
                className="mt-5 text-base sm:text-lg leading-relaxed text-neutral-500 max-w-2xl mx-auto"
              >
                A CRM can only hold what someone has time to type in. Otto keeps
                track of what actually happens across the account, and hands the rep
                the next step.
              </motion.p>
            </motion.div>

          </div>
          <div className="absolute inset-x-0 bottom-0  w-full h-[300px] rounded-t-[100%] z-2  bg-dark " />

          <div className="w-1/2 z-1 h-full bg-linear-to-l from-neutral-200 to-transparent "></div>
          <div className="absolute size-full flex items-center justify-center z-10 ">
            <div className="bg-dark/80 backdrop-blur-xl shadow-2xl rounded-2xl p-2 size-24 flex items-center justify-center border border-light-dark"><Logo className="size-14" onlyIcon /></div>
          </div>

          <div className="h-[250px] bg-gray-300 w-4 rounded-full absolute z-3 inset-x-0 top-1/2 -translate-y-1/2 mx-auto" />
          <div className="w-1/2 z-1 h-full bg-linear-to-r from-neutral-200 via-brand/80 to-transparent "></div>
        </div>

      </div>

    </section>
  );
}
