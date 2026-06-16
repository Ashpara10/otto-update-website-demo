"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Cancel01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

type DemoContextValue = {
  open: boolean;
  show: () => void;
  hide: () => void;
};

const DemoContext = createContext<DemoContextValue | null>(null);

export function useBookDemo() {
  const ctx = useContext(DemoContext);
  if (!ctx) {
    throw new Error("useBookDemo must be used within a <DemoModalProvider />");
  }
  return ctx;
}

export function DemoModalProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const show = useCallback(() => setOpen(true), []);
  const hide = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") hide();
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open, hide]);

  const value = useMemo(() => ({ open, show, hide }), [open, show, hide]);

  return (
    <DemoContext.Provider value={value}>
      {children}
      <DemoModal open={open} onClose={hide} />
    </DemoContext.Provider>
  );
}

function Field({
  label,
  optional,
  children,
  className = "",
}: {
  label: string;
  optional?: boolean;
  children: ReactNode;
  className?: string;
}) {
  return (
    <label className={`block ${className}`}>
      <span className="text-sm font-semibold text-neutral-900">
        {label}
        {optional && (
          <span className="ml-1.5 text-xs font-normal text-neutral-500">
            (optional)
          </span>
        )}
      </span>
      <div className="mt-2">{children}</div>
    </label>
  );
}

const inputClass =
  "w-full rounded-xl border border-neutral-300 bg-white px-4 py-3 text-base text-neutral-900 placeholder:text-neutral-400 outline-none transition focus:border-neutral-900 focus:ring-2 focus:ring-neutral-900/10";

function DemoModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          key="overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6 bg-black/60 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            key="dialog"
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.98 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            role="dialog"
            aria-modal="true"
            aria-labelledby="book-demo-title"
            onClick={(e) => e.stopPropagation()}
            className="relative overflow-hidden flex w-full max-w-xl max-h-[90vh] flex-col rounded-2xl border border-neutral-300 bg-white shadow-2xl"
          >
            <button
              type="button"
              onClick={onClose}
              aria-label="Close"
              className="absolute right-4 top-4 z-10 grid h-9 w-9 place-items-center rounded-full text-neutral-500 hover:bg-neutral-100 hover:text-neutral-900 transition"
            >
              <HugeiconsIcon icon={Cancel01Icon} className="size-5" />
            </button>

            <div className="demo-scroll flex-1 overflow-y-auto px-6 sm:px-8 pt-7 sm:pt-8 pb-6">
              <h2
                id="book-demo-title"
                className="text-2xl sm:text-3xl font-semibold tracking-[-0.01em] text-neutral-900"
              >
                Book a demo
              </h2>
              <p className="mt-2 text-sm text-neutral-600">
                15 minutes. We run Otto on a visit that looks like yours.
              </p>

              <form
                id="book-demo-form"
                className="mt-7 space-y-5"
                onSubmit={(e) => {
                  e.preventDefault();
                  onClose();
                }}
              >
                <Field label="Name">
                  <input
                    required
                    type="text"
                    placeholder="Jordan Vega"
                    className={inputClass}
                  />
                </Field>

                <Field label="Work email">
                  <input
                    required
                    type="email"
                    placeholder="jordan@acme.com"
                    className={inputClass}
                  />
                </Field>

                <Field label="Company">
                  <input
                    required
                    type="text"
                    placeholder="Acme Industrial Supply"
                    className={inputClass}
                  />
                </Field>

                <Field label="What you sell" optional>
                  <input
                    type="text"
                    placeholder="Welding gases & equipment"
                    className={inputClass}
                  />
                </Field>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <Field label="System today" optional>
                    <input
                      type="text"
                      placeholder="Salesforce, ERP…"
                      className={inputClass}
                    />
                  </Field>
                  <Field label="Team size" optional>
                    <input
                      type="text"
                      inputMode="numeric"
                      placeholder="12 reps"
                      className={inputClass}
                    />
                  </Field>
                </div>

                <Field label="Anything else" optional>
                  <textarea
                    rows={3}
                    placeholder="What's slipping after visits today?"
                    className={`${inputClass} resize-none`}
                  />
                </Field>
              </form>
            </div>

            <div className="shrink-0 border-t border-neutral-200 bg-white px-6 sm:px-8 py-4 sm:py-5">
              <button
                type="submit"
                form="book-demo-form"
                className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand px-6 py-4 text-base font-semibold text-neutral-900 shadow-[0_0_0_0_rgba(0,0,0,0)] transition hover:bg-brand-soft hover:shadow-[0_0_32px_0_rgba(203,253,64,0.55)] focus:outline-none focus:ring-2 focus:ring-neutral-900/30 focus:ring-offset-2 focus:ring-offset-white"
              >
                Request demo
                <span className="transition-transform group-hover:translate-x-0.5">
                  →
                </span>
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
