import type { ReactNode } from "react";
import { Nav } from "./nav";
import { Footer } from "./footer";
import { DemoModalProvider } from "./demo-modal";

export function Chrome({ children }: { children: ReactNode }) {
  return (
    <DemoModalProvider>
      <div className="min-h-screen flex flex-col bg-dark text-neutral-100">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </div>
    </DemoModalProvider>
  );
}
