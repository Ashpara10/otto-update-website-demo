import type { ReactNode } from "react";
import { Nav } from "./nav";
import { Footer } from "./footer";

export function Placeholder({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children?: ReactNode;
}) {
  return (
    <>
      <Nav />
      <main className="min-h-screen bg-dark text-heading">
        <section className="mx-auto max-w-3xl px-6 py-32 text-center">
          <p className="text-xs font-semibold tracking-[0.15em] uppercase text-[#00b386]">
            {eyebrow}
          </p>
          <h1 className="mt-4 text-4xl sm:text-5xl font-semibold tracking-[-0.02em] text-heading">
            {title}
          </h1>
          {children && <div className="mt-6 text-base text-muted-foreground">{children}</div>}
        </section>
      </main>
      <Footer />
    </>
  );
}
