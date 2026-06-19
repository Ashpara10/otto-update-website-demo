"use client";

import { useRef, useState } from "react";
import { toast } from "sonner";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { demoRequestSchema, type DemoRequest } from "@/lib/demo-schema";
import { trackBookDemoSubmit, trackFormStart } from "@/lib/gtag";

const EMPTY: DemoRequest = {
  name: "",
  email: "",
  company: "",
  sells: "",
  systemToday: "",
  teamSize: "",
  message: "",
};

type FieldErrors = Partial<Record<keyof DemoRequest, string>>;

export function BookDemoForm({ onSuccess }: { onSuccess: () => void }) {
  const [values, setValues] = useState<DemoRequest>(EMPTY);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [submitting, setSubmitting] = useState(false);
  const formStartedRef = useRef(false);

  function set<K extends keyof DemoRequest>(key: K, value: string) {
    setValues((v) => ({ ...v, [key]: value }));
    if (errors[key]) setErrors((e) => ({ ...e, [key]: undefined }));
  }

  function handleFieldFocus() {
    if (formStartedRef.current) return;
    formStartedRef.current = true;
    trackFormStart();
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const parsed = demoRequestSchema.safeParse(values);
    if (!parsed.success) {
      const fieldErrors = parsed.error.flatten().fieldErrors;
      const next: FieldErrors = {};
      (Object.keys(fieldErrors) as (keyof DemoRequest)[]).forEach((k) => {
        next[k] = fieldErrors[k]?.[0];
      });
      setErrors(next);
      return;
    }

    setSubmitting(true);
    try {
      const res = await fetch("/api/demo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(parsed.data),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => null);
        throw new Error(data?.error ?? "Something went wrong. Please try again.");
      }
      trackBookDemoSubmit();
      toast.custom(
        () => (
          <div className="flex w-[356px] max-w-[calc(100vw-2rem)] items-start gap-3 rounded-2xl border border-brand-soft/35 bg-dark p-4 shadow-[0_24px_60px_-24px_rgba(0,0,0,0.85),0_0_40px_-12px_var(--color-brand)]">
            <span className="mt-0.5 grid size-8 shrink-0 place-items-center rounded-full bg-brand/15 text-brand">
              <svg viewBox="0 0 24 24" className="size-4" fill="none" stroke="currentColor" strokeWidth={2.6} strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12l4 4L19 6" />
              </svg>
            </span>
            <div className="min-w-0">
              <p className="text-[15px] font-semibold tracking-tight text-heading">
                Request sent
              </p>
              <p className="mt-0.5 text-[13px] leading-snug text-subheading">
                We&apos;ll reach out shortly to set up your 15-minute demo.
              </p>
            </div>
          </div>
        ),
        { duration: 5000 },
      );
      setValues(EMPTY);
      onSuccess();
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Something went wrong.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mt-2 flex flex-col gap-4" noValidate>
      <Field id="name" label="Name" error={errors.name}>
        <Input id="name" value={values.name} onChange={(e) => set("name", e.target.value)}
          onFocus={handleFieldFocus}
          placeholder="Jordan Vega" autoComplete="name" />
      </Field>
      <Field id="email" label="Work email" error={errors.email}>
        <Input id="email" type="email" value={values.email}
          onChange={(e) => set("email", e.target.value)}
          onFocus={handleFieldFocus}
          placeholder="jordan@acme.com" autoComplete="email" />
      </Field>
      <Field id="company" label="Company" error={errors.company}>
        <Input id="company" value={values.company} onChange={(e) => set("company", e.target.value)}
          onFocus={handleFieldFocus}
          placeholder="Acme Industrial Supply" autoComplete="organization" />
      </Field>
      <Field id="sells" label="What you sell" optional>
        <Input id="sells" value={values.sells} onChange={(e) => set("sells", e.target.value)}
          onFocus={handleFieldFocus}
          placeholder="Welding gases & equipment" />
      </Field>
      <div className="grid grid-cols-2 gap-4">
        <Field id="systemToday" label="System today" optional>
          <Input id="systemToday" value={values.systemToday}
            onChange={(e) => set("systemToday", e.target.value)}
            onFocus={handleFieldFocus} placeholder="Salesforce, ERP…" />
        </Field>
        <Field id="teamSize" label="Team size" optional>
          <Input id="teamSize" value={values.teamSize}
            onChange={(e) => set("teamSize", e.target.value)}
            onFocus={handleFieldFocus} placeholder="12 reps" />
        </Field>
      </div>
      <Field id="message" label="Anything else" optional>
        <Textarea id="message" value={values.message} onChange={(e) => set("message", e.target.value)}
          onFocus={handleFieldFocus}
          placeholder="What's slipping after visits today?" rows={3} />
      </Field>

      <button
        type="submit"
        disabled={submitting}
        className="mt-1 inline-flex dark items-center justify-center gap-2 rounded-full bg-brand px-7 py-3.5 text-base font-semibold text-dark disabled:cursor-not-allowed disabled:opacity-60"
      >
        {submitting ? "Sending…" : "Request demo "}
      </button>
    </form>
  );
}

function Field({
  id,
  label,
  error,
  optional,
  children,
}: {
  id: string;
  label: string;
  error?: string;
  optional?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <Label htmlFor={id} className="text-[13px] text-subheading">
        {label}
        {optional && <span className="ml-1 text-light-dark">(optional)</span>}
      </Label>
      {children}
      {error && <p className="text-xs text-destructive">{error}</p>}
    </div>
  );
}
