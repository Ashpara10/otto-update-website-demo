import { ArrowRight02Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

export default function FormSection() {
  return (
    <section className="bg-dark px-5 pb-20 sm:px-8 sm:pb-24">
      <div className="mx-auto max-w-4xl rounded-xl border border-light-dark bg-dark p-6 sm:p-8">
        <h2 className="text-3xl font-semibold tracking-tight text-heading">
          Send us a message
        </h2>

        <form className="mt-8 space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            <label className="block">
              <span className="mb-2 block text-sm text-muted-foreground">
                Full Name *
              </span>
              <input
                type="text"
                placeholder="Jane Smith"
                className="w-full rounded-lg border border-light-dark bg-dark px-4 py-3 text-heading outline-none transition-colors placeholder:text-muted-foreground focus:border-brand/40"
              />
            </label>

            <label className="block">
              <span className="mb-2 block text-sm text-muted-foreground">
                Company *
              </span>
              <input
                type="text"
                placeholder="Acme Inc"
                className="w-full rounded-lg border border-light-dark bg-dark px-4 py-3 text-heading outline-none transition-colors placeholder:text-muted-foreground focus:border-brand/40"
              />
            </label>
          </div>

          <label className="block">
            <span className="mb-2 block text-sm text-muted-foreground">
              Work Email *
            </span>
            <input
              type="email"
              placeholder="jane@company.com"
              className="w-full rounded-lg border border-light-dark bg-dark px-4 py-3 text-heading outline-none transition-colors placeholder:text-muted-foreground focus:border-brand/40"
            />
          </label>

          <label className="block">
            <span className="mb-2 block text-sm text-muted-foreground">
              Message *
            </span>
            <textarea
              placeholder="Tell us how we can help..."
              rows={6}
              className="w-full rounded-lg border border-light-dark bg-dark px-4 py-3 text-heading outline-none transition-colors placeholder:text-muted-foreground focus:border-brand/40"
            />
          </label>

          <button
            type="submit"
            className="btn-primary inline-flex w-full items-center justify-center rounded-lg px-6 py-4 text-base font-semibold"
          >
            Send Message <HugeiconsIcon icon={ArrowRight02Icon} className="size-6 ml-2" />
          </button>
        </form>
      </div>
    </section>
  );
}
