import { ArrowRight02Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

export default function FormSection() {
  return (
    <section className="bg-white px-5 pb-20 sm:px-8 sm:pb-24">
      <div className="mx-auto max-w-4xl rounded-xl border border-neutral-300 bg-white p-6 sm:p-8">
        <h2 className="text-3xl font-semibold tracking-tight text-neutral-900">
          Send us a message
        </h2>

        <form className="mt-8 space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            <label className="block">
              <span className="mb-2 block text-sm text-neutral-600">
                Full Name *
              </span>
              <input
                type="text"
                placeholder="Jane Smith"
                className="w-full rounded-lg border border-neutral-300 bg-white px-4 py-3 text-neutral-900 outline-none transition-colors placeholder:text-neutral-500 focus:border-green-contrast/40"
              />
            </label>

            <label className="block">
              <span className="mb-2 block text-sm text-neutral-600">
                Company *
              </span>
              <input
                type="text"
                placeholder="Acme Inc"
                className="w-full rounded-lg border border-neutral-300 bg-white px-4 py-3 text-neutral-900 outline-none transition-colors placeholder:text-neutral-500 focus:border-green-contrast/40"
              />
            </label>
          </div>

          <label className="block">
            <span className="mb-2 block text-sm text-neutral-600">
              Work Email *
            </span>
            <input
              type="email"
              placeholder="jane@company.com"
              className="w-full rounded-lg border border-neutral-300 bg-white px-4 py-3 text-neutral-900 outline-none transition-colors placeholder:text-neutral-500 focus:border-green-contrast/40"
            />
          </label>

          <label className="block">
            <span className="mb-2 block text-sm text-neutral-600">
              Message *
            </span>
            <textarea
              placeholder="Tell us how we can help..."
              rows={6}
              className="w-full rounded-lg border border-neutral-300 bg-white px-4 py-3 text-neutral-900 outline-none transition-colors placeholder:text-neutral-500 focus:border-green-contrast/40"
            />
          </label>

          <button
            type="submit"
            className="inline-flex w-full items-center justify-center rounded-lg bg-green-contrast px-6 py-4 text-base font-semibold text-neutral-900 transition-opacity hover:opacity-90"
          >
            Send Message <HugeiconsIcon icon={ArrowRight02Icon} className="size-6 ml-2" />
          </button>
        </form>
      </div>
    </section>
  );
}
