"use client";

import { motion, type Variants } from "framer-motion";

type Card = {
  title: string;
  detail: string;
  action: string;
};

const cards: Card[] = [
  {
    title: "A quote sent two weeks ago",
    detail: "The buyer has not replied",
    action: "Follow up",
  },
  {
    title: "The delivery date changed",
    detail: "The customer was not told",
    action: "Tell them",
  },
  {
    title: "A competitor was mentioned",
    detail: "You have not responded yet",
    action: "Respond",
  },
  {
    title: "A PO is stuck in approval",
    detail: "It is past the close date",
    action: "Chase it",
  },
  {
    title: "A reorder is overdue",
    detail: "This account usually buys by now",
    action: "Check in",
  },
  {
    title: "A service issue is open",
    detail: "It is holding up the next order",
    action: "Resolve",
  },
];

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.07, delayChildren: 0.1 },
  },
};

const cardAnim: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

const heading: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

function QuoteCard({ title, detail, action }: Card) {
  return (
    <motion.div
      variants={cardAnim}
      className="group relative flex items-center gap-5 rounded-2xl border border-neutral-300/60 px-6 py-5 backdrop-blur-sm transition-colors hover:bg-neutral-50"
    >
      <span className="absolute inset-y-5 left-0 w-1 rounded-r-full bg-green-contrast" />

      <div className="min-w-0 flex-1 pl-2">
        <p className="text-base sm:text-lg font-medium text-neutral-700">{title}</p>
        <p className="mt-1 text-sm text-neutral-500">{detail}</p>
      </div>

      <span className="inline-flex items-center rounded-md bg-rose-500/10 px-2.5 py-1 text-xs font-medium text-rose-600/90 ring-1 ring-inset ring-rose-400/20 whitespace-nowrap">
        {action}
      </span>
    </motion.div>
  );
}

export function QuoteRisk() {
  return (
    <section
      id="v2-quote-risk"
      className="relative py-20 lg:py-20 "
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex flex-col md:flex-row md:items-end w-full justify-between"
        >
          <div>
            <motion.p
              variants={heading}
              className="text-xs font-semibold tracking-[0.15em] uppercase text-mint"
            >
              / Quotes that slip
            </motion.p>
            <motion.h2
              variants={heading}
              className="mt-4 text-3xl sm:text-4xl font-semibold tracking-[-0.01em] leading-[1.1] text-zinc-900"
            >
              Quotes are not <br /> lost. They

              are forgotten.
            </motion.h2>
          </div>
          <motion.p
            variants={heading}
            className=" text-base text-zinc-500 leading-relaxed mt-6  max-w-md"
          >
            A quote rarely gets a no. It just goes quiet, and with a full route
            to cover, it is easy to miss. Otto watches for the cases below and
            flags them.
          </motion.p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="mt-14 lg:mt-12 grid grid-cols-1 md:grid-cols-2 gap-5"
        >
          {cards.map((c) => (
            <QuoteCard key={c.title} {...c} />
          ))}
        </motion.div>

        <motion.p
          variants={heading}
          initial="hidden"
          animate="show"
          className="mt-14 text-center text-base sm:text-lg text-neutral-500"
        >
          Otto flags each one{" "}
          <span className="text-green-contrast font-medium">in time to act.</span>
        </motion.p>
      </div>
    </section>
  );
}
