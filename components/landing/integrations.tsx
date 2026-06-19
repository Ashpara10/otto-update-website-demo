import Logo from "../logo";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  CalculatorIcon,
  Calendar01Icon,
  Mail01Icon,
  Package01Icon,
  StickyNote01Icon,
  Structure04Icon,
  TagsIcon,
  UserMultipleIcon,
} from "@hugeicons/core-free-icons";
import type { IconSvgElement } from "@hugeicons/react";
import { Marquee } from "@/components/ui/marquee";

type Item = {
  name: string;
  icon: IconSvgElement;
};

const ITEMS: Item[] = [
  { name: "CRM", icon: UserMultipleIcon },
  { name: "ERP", icon: Structure04Icon },
  { name: "CPQ", icon: TagsIcon },
  { name: "Email", icon: Mail01Icon },
  { name: "Calendar", icon: Calendar01Icon },
  { name: "Inventory", icon: Package01Icon },
  { name: "Product documents", icon: StickyNote01Icon },
  { name: "Quote tools", icon: CalculatorIcon },
];

function IconTile({ item }: { item: Item }) {
  return (
    <div className="group/icon relative shrink-0">
      <div className="grid size-16 place-items-center rounded-2xl border border-light-dark/60 bg-light-dark/40 text-foreground/85 transition-colors group-hover/icon:border-brand/40 group-hover/icon:text-brand">
        <HugeiconsIcon icon={item.icon} size={26} strokeWidth={1.6} />
      </div>
      <span className="pointer-events-none absolute bottom-full left-1/2 z-30 mb-2 -translate-x-1/2 whitespace-nowrap rounded-md border border-light-dark bg-dark px-3 py-1.5 text-base font-medium text-heading opacity-0 shadow-lg transition-all duration-150 group-hover/icon:opacity-100 group-hover/icon:-translate-y-0.5">
        {item.name}
      </span>
    </div>
  );
}

function CenterLogo() {
  return (
    <div className="relative size-24 md:size-28 shrink-0 overflow-hidden rounded-2xl p-[1.2px]">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-[-120%] dark animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_0deg,transparent_0deg,transparent_220deg,var(--color-mint)_255deg,var(--color-brand)_300deg,var(--color-mint)_340deg,transparent_360deg)]"
      />
      <div className="relative flex size-full items-center justify-center rounded-2xl border border-light-dark shadow-xl bg-white dark:bg-dark">
        <Logo onlyIcon className="size-8 md:size-12 opacity-80" />
      </div>
    </div>
  );
}

function EdgeFade({ side }: { side: "left" | "right" }) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute top-0 bottom-0 z-20 w-10 md:w-32 ${side === "left"
        ? "left-0 bg-gradient-to-r dark:from-dark from-white to-transparent"
        : "right-0 bg-gradient-to-l dark:from-dark from-white to-transparent"
        }`}
    />
  );
}

export function Integrations() {
  return (
    <section id="integrations" className="relative py-16 lg:py-28 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="text-[15px] font-medium flex items-center justify-center gap-3 text-brand">
          <span className="w-0.5 rounded-full h-4 bg-brand" /> Integrations
        </div>
        <h2 className="mx-auto mt-3 max-w-2xl text-center text-3xl sm:text-4xl lg:text-4xl font-semibold tracking-tight text-heading">
          Works With <br className="block md:hidden" /> Your Existing Systems
        </h2>
        <p className="mx-auto mt-3 max-w-md md:max-w-2xl text-center text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed">
          Otto connects to the tools your team already uses.
        </p>

        {/* Mobile grid */}
        {/* <div className="mt-8 grid grid-cols-2 gap-4 md:hidden">
          {ITEMS.map((item) => (
            <div
              key={item.name}
              className="flex min-h-[84px] items-center justify-center gap-2.5 rounded-2xl border border-light-dark/60 bg-light-dark/40 px-6 py-6 text-center text-base font-medium text-foreground/85 transition-colors hover:border-brand/30 hover:text-brand cursor-pointer"
            >
              <HugeiconsIcon
                icon={item.icon}
                size={20}
                strokeWidth={1.6}
                className="text-brand"
              />
              {item.name}
            </div>
          ))}
        </div> */}

        {/* Desktop marquee */}
        <div className="relative mt-8 min-h-[160px] flex items-center justify-center [--duration:30s] [--gap:1rem]">
          <EdgeFade side="left" />
          <EdgeFade side="right" />

          <div className="flex flex-1 min-w-0 justify-end overflow-hidden">
            <Marquee className="w-full min-h-[160px] ">
              {ITEMS.map((item, i) => (
                <IconTile key={`l-${i}`} item={item} />
              ))}
            </Marquee>
          </div>

          <CenterLogo />

          <div className="flex flex-1 min-w-0 justify-start overflow-hidden">
            <Marquee className="w-full min-h-[160px] " reverse>
              {ITEMS.map((item, i) => (
                <IconTile key={`r-${i}`} item={item} />
              ))}
            </Marquee>
          </div>
        </div>

        <div className="mx-auto mt-6 max-w-2xl text-center text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed">
          <p className="space-x-2">No rip-and-replace {" • "} No new workflow {" • "} No extra dashboard for reps.</p>
          <p className="mt-1">Just one number to call.</p>
        </div>
      </div>
    </section>
  );
}
