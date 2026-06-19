"use client";

import {
  AiBrain02Icon,
  ArrowRight02Icon,
  ArrowUpRight01Icon,
  Mic01Icon,
  Rocket01Icon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { motion, type Variants } from "motion/react";
import { APPLY_EMAIL, roles } from "@/data/careers";

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function CareersSection() {
  return (
    <section className="bg-dark text-heading px-4 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="text-center mb-16 md:mb-20">
          <p className="text-sm font-medium tracking-wide text-muted-foreground mb-5">
            Careers
          </p>
          <h1 className="text-3xl md:text-4xl font-semibold leading-tight text-heading tracking-tight">
            Build Otto with us.
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-base md:text-lg text-muted-foreground">
            Otto is a voice-first AI chief of staff for sales. Sales people
            close deals; Otto handles everything else. Three roles, three big
            bets. Mumbai-based, hybrid.
          </p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 px-8 gap-8 md:gap-10 mb-20 md:mb-24"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {[
            {
              icon: Mic01Icon,
              title: "Voice-first, not voice-bolted-on.",
              body: "Reps live on the phone; Otto picks up where they leave off.",
            },
            {
              icon: AiBrain02Icon,
              title: "Six agents, one chief of staff.",
              body: "Otto runs the process so reps stay on the call.",
            },
            {
              icon: Rocket01Icon,
              title: "Early team, real ownership.",
              body: "You'll set patterns the rest of the company hires against.",
            },
          ].map(({ icon, title, body }) => (
            <motion.div key={title} variants={itemVariants}>
              <span className="mb-4 flex size-10 items-center justify-center rounded-xl border border-light-dark bg-brand/10">
                <HugeiconsIcon
                  icon={icon}
                  className="size-5 text-brand"
                />
              </span>
              <h3 className="text-[15px] md:text-base font-medium text-heading mb-2">
                {title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {body}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="flex flex-col gap-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {roles.map((role) => (
            <motion.article
              key={role.title}
              variants={itemVariants}
              className="flex flex-col gap-5 items-start md:gap-8 p-6 md:p-8 rounded-2xl border border-light-dark bg-dark hover:border-light-dark transition-colors"
            >
              <div className="w-full flex flex-col md:flex-row md:justify-between">

                <div className="flex-1 min-w-0 md:max-w-2xl w-full">
                  <h2 className="text-xl font-medium text-heading mb-1">
                    {role.title}
                  </h2>
                  <p className="text-sm text-muted-foreground mb-3">{role.tag}</p>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    {role.blurb}
                  </p>
                </div>

                <div className="flex flex-row md:flex-col gap-2 md:items-end md:shrink-0">
                  {/* <span className="inline-flex items-center rounded-full bg-light-dark/40 px-3 py-1 text-sm font-medium text-heading">
                    {role.salary}
                  </span> */}
                  <span className="inline-flex items-center rounded-full bg-light-dark/40 px-3 py-1 text-sm text-subheading">
                    {role.location}
                  </span>
                </div>
              </div>

              <a
                href={`mailto:${APPLY_EMAIL}?subject=${encodeURIComponent(
                  `Application ${role.title}`
                )}`}
              >
                <button className="btn-primary group inline-flex items-center justify-center gap-1.5 rounded-full px-8 h-12 text-base font-medium md:shrink-0">
                  Apply
                  <HugeiconsIcon
                    icon={ArrowRight02Icon}
                    className="size-5"
                  />
                </button>
              </a>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
