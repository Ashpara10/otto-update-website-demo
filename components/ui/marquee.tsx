"use client";

import { type ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/utils";

interface MarqueeProps extends ComponentPropsWithoutRef<"div"> {
  className?: string;
  reverse?: boolean;
  pauseOnHover?: boolean;
  children: React.ReactNode;
  vertical?: boolean;
  repeat?: number;
}

export function Marquee({
  className,
  reverse = false,
  pauseOnHover = false,
  children,
  vertical = false,
  repeat = 2,
  ...props
}: MarqueeProps) {
  const animation = !vertical
    ? reverse
      ? "marquee-right 28s linear infinite"
      : "marquee-left 28s linear infinite"
    : "marquee-vertical 28s linear infinite";

  return (
    <div
      {...props}
      className={cn(
        "group flex gap-4 overflow-hidden p-2",
        {
          "flex-row": !vertical,
          "flex-col": vertical,
        },
        className
      )}
    >
      {Array(repeat)
        .fill(0)
        .map((_, i) => (
          <div
            key={i}
            style={{ animation }}
            className={cn(
              "flex shrink-0 items-center justify-around gap-4 flex-row",
              pauseOnHover && "group-hover:[animation-play-state:paused]"
            )}
          >
            {children}
          </div>
        ))}
    </div>
  );
}
