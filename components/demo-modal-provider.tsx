"use client";

import { createContext, useCallback, useContext, useMemo, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { BookDemoForm } from "@/components/book-demo-form";

type DemoModalContextValue = { openDemo: () => void };

const DemoModalContext = createContext<DemoModalContextValue | null>(null);

export function useDemoModal() {
  const ctx = useContext(DemoModalContext);
  if (!ctx) throw new Error("useDemoModal must be used within DemoModalProvider");
  return ctx;
}

export function DemoModalProvider({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const openDemo = useCallback(() => setOpen(true), []);
  const value = useMemo(() => ({ openDemo }), [openDemo]);

  return (
    <DemoModalContext.Provider value={value}>
      {children}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-h-[90vh] overflow-y-auto border-white/12 bg-[#0d0e10] sm:max-w-lg">
          <DialogHeader>
            <DialogTitle className="text-xl tracking-tight text-[#f6f8f6]">
              Book a demo
            </DialogTitle>
            <DialogDescription className="text-[#8a908b]">
              15 minutes. We run Otto on a visit that looks like yours.
            </DialogDescription>
          </DialogHeader>
          <BookDemoForm onSuccess={() => setOpen(false)} />
        </DialogContent>
      </Dialog>
    </DemoModalContext.Provider>
  );
}
