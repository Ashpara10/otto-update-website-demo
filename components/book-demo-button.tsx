"use client";

import { useDemoModal } from "@/components/demo-modal-provider";
import { trackBookDemoClick } from "@/lib/gtag";

/**
 * A plain trigger that opens the demo modal. It carries no styling of its own —
 * pass the bespoke landing classes (e.g. "btn-primary", "nav-cta") so it looks
 * identical to the original anchors it replaces.
 */
export function BookDemoButton({
  className,
  children,
  sourcePage,
}: {
  className?: string;
  children: React.ReactNode;
  sourcePage: string;
}) {
  const { openDemo } = useDemoModal();
  return (
    <button
      type="button"
      className={className}
      onClick={() => {
        trackBookDemoClick(sourcePage);
        openDemo();
      }}
    >
      {children}
    </button>
  );
}
