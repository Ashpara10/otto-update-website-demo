import { BookDemoButton } from "@/components/book-demo-button";

export function FinalCTA() {
  return (
    <section id="book" className="relative overflow-hidden bg-dark py-24 lg:py-32">
      <div className="md:flex hidden pointer-events-none absolute blur-[250px] left-[-10%] bottom-[-10%] size-[400px] rounded-full bg-linear-to-b from-(--color-blob-from) to-(--color-blob-to) " />
      <div className="md:flex hidden pointer-events-none absolute blur-[250px] right-[-20%] top-[-20%] size-[400px] rounded-full bg-linear-to-b from-(--color-blob-from) to-(--color-blob-to) " />
      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-[-0.03em] text-heading ">
          Give Every Field<br /> Rep A Sales Coordinator.
        </h2>
        <p className="mx-auto mt-8 max-w-md space-y-2 text-lg sm:text-xl leading-relaxed text-muted-foreground ">
          Every visit prepared.
          Every conversation captured.
          Every follow-up moving.
          Every opportunity visible.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-5">
          <BookDemoButton className="btn-primary inline-flex h-12 items-center gap-2 rounded-full px-6 text-base font-medium">
            Book a Demo
          </BookDemoButton>
        </div>
        <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted-foreground ">
          Without asking reps to open another screen.
        </p>
      </div>
    </section>
  );
}
