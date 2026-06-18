"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { HugeiconsIcon } from "@hugeicons/react";
import { Sun01Icon, Moon02Icon } from "@hugeicons/core-free-icons";

export function ThemeToggle({ fullWidth = false }: { fullWidth?: boolean }) {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted && resolvedTheme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      className={`inline-flex items-center justify-center rounded-full border border-light-dark text-foreground/85 hover:bg-light-dark hover:text-heading transition ${
        fullWidth
          ? "w-full h-12 px-6 text-base font-semibold gap-2"
          : "h-9 w-9"
      }`}
    >
      {mounted ? (
        isDark ? (
          <HugeiconsIcon icon={Sun01Icon} size={18} strokeWidth={1.8} />
        ) : (
          <HugeiconsIcon icon={Moon02Icon} size={18} strokeWidth={1.8} />
        )
      ) : (
        <span className="block size-[18px]" aria-hidden />
      )}
    </button>
  );
}
