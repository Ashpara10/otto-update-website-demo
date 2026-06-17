"use client";

import { HugeiconsIcon } from "@hugeicons/react";
import { motion } from "framer-motion";
import { Briefcase08Icon, DollarCircleIcon, Menu01Icon, StatusIcon } from "@hugeicons/core-free-icons";
import Image from "next/image";

type Tone = "danger" | "warn" | "mint" | "neutral";

type Row = {
  client: string;
  detail: string;
  type: "Visit" | "Quote" | "Follow-up" | "Reorder" | "Service";
  rep: string;
  status: string;
  tone: Tone;
  amount?: string;
  time: string;
};

const reps = [
  "Marcus Hale",
  "Priya Shah",
  "Diego Alvarez",
  "Naomi Chen",
  "Jordan Pike",
  "Sofia Romano",
];

const avatar = (name: string) =>
  `https://api.dicebear.com/10.x/glass/svg?seed=${encodeURIComponent(name)}`;

const toneStyles: Record<Tone, { text: string; bg: string; ring: string }> = {
  danger: {
    text: "text-rose-200/90",
    bg: "bg-rose-500/10",
    ring: "ring-rose-400/20",
  },
  warn: {
    text: "text-amber-200/90",
    bg: "bg-amber-400/10",
    ring: "ring-amber-300/20",
  },
  mint: {
    text: "text-emerald-200/90",
    bg: "bg-emerald-400/10",
    ring: "ring-emerald-300/20",
  },
  neutral: {
    text: "text-white/70",
    bg: "bg-white/5",
    ring: "ring-white/10",
  },
};

const rows: Row[] = [
  {
    client: "Apex Welding",
    detail: "Quote #Q-2841 sent 14d ago, no reply from procurement",
    type: "Quote",
    rep: "Marcus Hale",
    status: "At risk",
    tone: "danger",
    amount: "$48,200",
    time: "14d silent",
  },
  {
    client: "Linde Midwest",
    detail: "Reorder window opens in 6 days, last PO was 92 days ago",
    type: "Reorder",
    rep: "Priya Shah",
    status: "Watch",
    tone: "warn",
    amount: "$112,000",
    time: "6d to reorder",
  },
  {
    client: "Praxair South",
    detail: "On-site visit, follow-up complete, PO #44192 submitted",
    type: "Visit",
    rep: "Diego Alvarez",
    status: "On track",
    tone: "mint",
    amount: "$26,400",
    time: "2h ago",
  },
  {
    client: "Matheson Co.",
    detail: "Buyer mentioned Airgas quoted 11% under on argon supply",
    type: "Follow-up",
    rep: "Naomi Chen",
    status: "Exposed",
    tone: "danger",
    amount: "$74,800",
    time: "1d ago",
  },
  {
    client: "Airgas North",
    detail: "Service ticket #883 open for 9 days, cylinder swap pending",
    type: "Service",
    rep: "Jordan Pike",
    status: "Blocked",
    tone: "warn",
    amount: "$9,200",
    time: "9d open",
  },
  {
    client: "Weldfast Industrial",
    detail: "New opportunity logged after intro call with plant manager",
    type: "Visit",
    rep: "Sofia Romano",
    status: "New",
    tone: "neutral",
    amount: "$31,500",
    time: "35m ago",
  },
  {
    client: "Nippon Gases",
    detail: "Quarterly review completed, expansion into Line 4 confirmed",
    type: "Visit",
    rep: "Marcus Hale",
    status: "On track",
    tone: "mint",
    amount: "$198,000",
    time: "3h ago",
  },
  {
    client: "Coregas West",
    detail: "Quote accepted verbally, contract redlines awaiting legal",
    type: "Quote",
    rep: "Priya Shah",
    status: "Watch",
    tone: "warn",
    amount: "$56,750",
    time: "8h ago",
  },
];

function StatusPill({ status, tone }: { status: string; tone: Tone }) {
  const s = toneStyles[tone];
  return (
    <span
      className={`inline-flex items-center rounded-md px-2.5 py-1 text-xs ring-1 ring-inset whitespace-nowrap ${s.bg} ${s.text} ${s.ring}`}
    >
      {status}
    </span>
  );
}

function TypeChip({ type }: { type: Row["type"] }) {
  return (
    <span className="inline-flex items-center rounded-md border border-white/10  px-2 py-0.5 text-xs font-medium text-white/50 shrink-0">
      {type}
    </span>
  );
}

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.07, delayChildren: 0.15 },
  },
};

const rowAnim = {
  hidden: { opacity: 0, y: -10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] as const } },
};

export function Manager() {
  return (
    <section
      id="v2-for-managers"
      className="relative py-20 lg:py-28 "
    >
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="w-full flex flex-col md:flex-row justify-between gap-6 lg:gap-16 md:items-end">
          <div>
            <p className="text-xs font-semibold tracking-[0.15em] uppercase text-mint">
              / For managers
            </p>
            <h2 className="mt-4 text-3xl sm:text-4xl font-semibold text-zinc-900">
              Managers see the <br /> field as it happens.
            </h2>
          </div>
          <p className="text-base text-zinc-500 leading-relaxed md:max-w-md">
            Otto captures every visit and quote as it happens, so you can back
            your reps up on the accounts that need attention now, instead of
            finding out at Friday&apos;s pipeline review.
          </p>
        </div>

        <div className="mt-10 relative border h-[620px] md:h-auto border-neutral-300 overflow-hidden p-4 md:p-6 rounded-2xl">
          <Image alt="bg-manager" loading="eager" fill style={{ objectFit: "cover" }} className="z-1" src="/bg-manager.png" />
          <div className="relative overflow-hidden md:block hidden rounded-xl border border-white/20 z-2 bg-black/85 backdrop-blur-md ">
            <div className="flex items-center justify-between px-4  sm:px-5 py-3 border-b border-white/10">
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1.5">
                  <span className="size-3 rounded-full bg-rose-400" />
                  <span className="size-3 rounded-full bg-amber-400" />
                  <span className="size-3 rounded-full bg-[#00b386]" />
                </div>
                {/* <p className="text-xs text-zinc-500">
                  <span className="font-medium text-zinc-700">Otto</span>
                  <span className="mx-1.5 text-zinc-300">·</span>
                  What needs attention today
                </p>
              </div>
              <div className="hidden sm:flex items-center -space-x-2">
                {reps.map((r) => (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    key={r}
                    src={avatar(r)}
                    alt={r}
                    className="h-6 w-6 rounded-full ring-2 ring-white bg-zinc-100"
                  />
                ))}
                <span className="h-6 w-6 rounded-full ring-2 ring-white bg-zinc-900 text-[10px] font-semibold text-white grid place-items-center">
                  +4
                </span> */}
              </div>
            </div>

            <div className="hidden md:flex gap-6 px-6 py-3 text-sm font-medium text-white/50 border-b border-white/10">
              <div className="inline-flex items-center justify-start gap-2 w-48 shrink-0"><HugeiconsIcon icon={Briefcase08Icon} className="size-4" />Client</div>
              <div className="inline-flex items-center justify-start gap-2 flex-1 min-w-0"><HugeiconsIcon icon={Menu01Icon} className="size-4" /> Detail</div>
              <div className="inline-flex items-center justify-start gap-2 w-28 shrink-0"><HugeiconsIcon icon={DollarCircleIcon} className="size-4" /> Value</div>
              {/* <div>Rep</div> */}
              <div className="inline-flex items-center justify-start gap-2 w-24 shrink-0 "><HugeiconsIcon icon={StatusIcon} className="size-4" /> Status</div>

            </div>

            <motion.ul
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className="hidden md:flex flex-col divide-y divide-white/10"
            >
              {rows.map((r) => (
                <motion.li
                  key={r.client}
                  variants={rowAnim}
                  className="flex flex-col sm:flex-row sm:items-center gap-x-6 gap-y-3 px-4 sm:px-6 py-5 sm:py-5 hover:bg-white/10 transition-colors"
                >
                  <div className="min-w-0 sm:order-1 order-1 items-center justify-start inline-flex gap-3 w-48 shrink-0">
                    <img
                      src={avatar(r.rep)}
                      alt={r.rep}
                      className="size-4 shrink-0 rounded-full  bg-zinc-100"
                    />

                    <p className="text-base text-white/80 truncate">
                      {r.client}
                    </p>
                  </div>

                  <div className="min-w-0 sm:order-2 order-4 flex-1">
                    <div className="flex items-center gap-2 min-w-0">
                      <p className="text-base text-white/50 truncate" title={r.detail}>
                        {r.detail}
                      </p>
                      <TypeChip type={r.type} />
                      <span className="hidden lg:inline text-sm text-white/50 shrink-0">
                        {r.time}
                      </span>
                    </div>
                  </div>

                  <div className="hidden sm:block sm:order-3 min-w-0 w-28 shrink-0 ">
                    <span className="text-sm font-medium text-white/70 tabular-nums">
                      {r.amount}
                    </span>
                  </div>



                  <div className="flex  sm:order-5 order-4 w-24 shrink-0 ">
                    <StatusPill status={r.status} tone={r.tone} />
                  </div>
                </motion.li>
              ))}
            </motion.ul>


            <ul
              className=" flex md:hidden flex-col divide-y divide-white/10"
            >
              {rows.slice(0, 4).map((r) => (
                <li
                  key={r.client}
                  className="flex flex-col sm:flex-row sm:items-center gap-x-6 gap-y-3 px-4 sm:px-6 py-5 sm:py-5 hover:bg-white/10 transition-colors"
                >
                  <div className="min-w-0 sm:order-1 order-1 items-center justify-start inline-flex gap-3 w-48 shrink-0">
                    <img
                      src={avatar(r.rep)}
                      alt={r.rep}
                      className="size-4 shrink-0 rounded-full  bg-zinc-100"
                    />

                    <p className="text-base text-white/80 truncate">
                      {r.client}
                    </p>
                  </div>

                  <div className="min-w-0 sm:order-2 order-4 flex-1">
                    <div className="flex items-center gap-2 min-w-0">
                      <p className="text-base text-white/50 truncate" title={r.detail}>
                        {r.detail}
                      </p>
                      <TypeChip type={r.type} />
                      <span className="hidden lg:inline text-sm text-white/50 shrink-0">
                        {r.time}
                      </span>
                    </div>
                  </div>

                  <div className="hidden sm:block sm:order-3 min-w-0 w-28 shrink-0 ">
                    <span className="text-sm font-medium text-white/70 tabular-nums">
                      {r.amount}
                    </span>
                  </div>



                  <div className="flex  sm:order-5 order-4 w-24 shrink-0 ">
                    <StatusPill status={r.status} tone={r.tone} />
                  </div>
                </li>
              ))}
            </ul>


          </div>

          <div className="absolute inset-4 max-w-2xl w-full  overflow-hidden block md:hidden rounded-xl border border-white/20 z-2 bg-black/85 backdrop-blur-md  ">
            <div className="flex items-center justify-between px-4  sm:px-5 py-3 border-b border-white/10">
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1.5">
                  <span className="size-3 rounded-full bg-rose-400" />
                  <span className="size-3 rounded-full bg-amber-400" />
                  <span className="size-3 rounded-full bg-[#00b386]" />
                </div>
                {/* <p className="text-xs text-zinc-500">
                  <span className="font-medium text-zinc-700">Otto</span>
                  <span className="mx-1.5 text-zinc-300">·</span>
                  What needs attention today
                </p>
              </div>
              <div className="hidden sm:flex items-center -space-x-2">
                {reps.map((r) => (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    key={r}
                    src={avatar(r)}
                    alt={r}
                    className="h-6 w-6 rounded-full ring-2 ring-white bg-zinc-100"
                  />
                ))}
                <span className="h-6 w-6 rounded-full ring-2 ring-white bg-zinc-900 text-[10px] font-semibold text-white grid place-items-center">
                  +4
                </span> */}
              </div>
            </div>


            <ul
              className=" flex md:hidden flex-col divide-y divide-white/10"
            >
              {rows.slice(0, 4).map((r) => (
                <li
                  key={r.client}
                  className="flex flex-col sm:flex-row sm:items-center gap-x-6 gap-y-3 px-4 sm:px-6 py-5 sm:py-5 hover:bg-white/10 transition-colors group"
                >
                  <div className="min-w-0 sm:order-1 order-1 items-center justify-start inline-flex gap-3 w-48 shrink-0">
                    <img
                      src={avatar(r.rep)}
                      alt={r.rep}
                      className="size-4 shrink-0 rounded-full  bg-zinc-100"
                    />

                    <p className="text-base text-white/80 truncate">
                      {r.client}
                    </p>
                  </div>

                  <div className="min-w-0 sm:order-2 order-4 flex-1">
                    <div className="flex items-center gap-2 min-w-0">
                      <p className="text-base text-white/50 truncate" title={r.detail}>
                        {r.detail}
                      </p>
                      <TypeChip type={r.type} />
                      <span className="hidden lg:inline text-sm text-white/50 shrink-0">
                        {r.time}
                      </span>
                    </div>
                  </div>

                  <div className="hidden sm:block sm:order-3 min-w-0 w-28 shrink-0 ">
                    <span className="text-sm font-medium text-white/70 tabular-nums">
                      {r.amount}
                    </span>
                  </div>



                  <div className="flex  sm:order-5 order-4 w-24 shrink-0 ">
                    <StatusPill status={r.status} tone={r.tone} />
                  </div>
                </li>
              ))}
            </ul>


          </div>
        </div>
      </div >
    </section >
  );
}
