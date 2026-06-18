"use client";

import { ArrowRight02Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import {
  useEffect,
  useRef,
  useState
} from "react";



export type NavDropdownItem = {
  label: string;
  description: string;
  href: string;
  icon: any;
};

export type NavDropdownGroup = {
  label: string;
  items: NavDropdownItem[];
  feature?: {
    title: string;
    body: string;
    cta: { label: string; href: string };
  };
};

const itemAnim = {
  hidden: { opacity: 0, y: 6 },
  show: { opacity: 1, y: 0, transition: { duration: 0.18, ease: [0.22, 1, 0.36, 1] as const } },
};

const listAnim = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.04, delayChildren: 0.05 } },
};

export function NavDropdown({ group }: { group: NavDropdownGroup }) {
  const [open, setOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const scheduleClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setOpen(false), 120);
  };
  const cancelClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
  };

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <div
      className="relative"
      onMouseEnter={() => {
        cancelClose();
        setOpen(true);
      }}
      onMouseLeave={scheduleClose}
    >
      <button
        type="button"
        aria-expanded={open}
        aria-haspopup="true"
        onClick={() => setOpen((v) => !v)}
        className="inline-flex items-center gap-1 px-4 py-2 rounded-full hover:text-heading hover:bg-light-dark transition"
      >
        {group.label}
        {/* <svg
          width="10"
          height="10"
          viewBox="0 0 10 10"
          fill="none"
          aria-hidden
          className={`transition-transform ${open ? "rotate-180" : ""}`}
        >
          <path
            d="M2 3.5L5 6.5L8 3.5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg> */}
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 6, scale: 0.99 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 4, scale: 0.99 }}
            transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
            className="absolute left-1/2 top-16 pt-3 z-50 -translate-x-1/2"
          >
            {(() => {
              const twoCol = group.items.length > 3;
              const containerWidth = group.feature
                ? twoCol
                  ? "w-[920px] grid-cols-[1fr_1.8fr]"
                  : "w-[640px] grid-cols-[1fr_1.2fr]"
                : twoCol
                  ? "w-[560px] grid-cols-1"
                  : "w-[360px] grid-cols-1";
              return (
                <div
                  className={`grid rounded-2xl border border-light-dark bg-dark shadow-[0_24px_60px_-20px_rgba(0,0,0,0.1)] overflow-hidden ${containerWidth}`}
                >
                  {group.feature && (
                    <Link
                      href={group.feature.cta.href}
                      onClick={() => setOpen(false)}
                      className="relative flex flex-col gap-3 border-r border-light-dark bg-light-dark/20 p-4 transition"
                    >
                      <span className="grid h-20 w-full place-items-center rounded-xl border border-light-dark bg-dark text-muted-foreground text-sm font-semibold tracking-tight">
                        Otto × {group.label}
                      </span>

                      <div className="px-2 space-y-2 mt-4">

                        <span className="block text-[15px] font-medium text-foreground/85">
                          {group.feature.title}
                        </span>
                        <span className="block text-[13px] leading-snug text-muted-foreground">
                          {group.feature.body}
                        </span>
                        <span className="justify-self-end inline-flex items-center gap-1 text-xs font-medium text-brand-soft">
                          {group.feature.cta.label} <HugeiconsIcon className="size-4" icon={ArrowRight02Icon} />
                        </span>
                      </div>
                    </Link>
                  )}
                  <motion.ul
                    variants={listAnim}
                    initial="hidden"
                    animate="show"
                    className={`p-2 ${twoCol ? "grid grid-cols-2 gap-1" : ""}`}
                  >
                    {group.items.map((item) => (
                      <motion.li key={item.href} variants={itemAnim}>
                        <Link
                          href={item.href}
                          onClick={() => setOpen(false)}
                          className="group flex items-start gap-3 rounded-xl p-3 hover:bg-light-dark/50 transition"
                        >
                          <span className="mt-0.5 grid size-10 shrink-0 place-items-center rounded-lg border border-light-dark bg-dark text-subheading group-hover:border-brand-soft/20 group-hover:bg-brand-soft/10 group-hover:text-brand transition">
                            <HugeiconsIcon icon={item.icon}

                              className="size-4"
                              strokeWidth={1.4}
                              aria-hidden
                            />
                          </span>
                          <span className="min-w-0">
                            <span className="block text-[15px] font-medium text-foreground/85">
                              {item.label}
                            </span>
                            <span className="mt-0.5 block text-xs leading-relaxed text-muted-foreground">
                              {item.description}
                            </span>
                          </span>
                        </Link>
                      </motion.li>
                    ))}
                  </motion.ul>


                </div>
              );
            })()}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
