"use client"
import Image from "next/image";
import {
  AtomicPowerIcon,
  ElectricPlugsIcon,
  Factory01Icon,
  HardHatIcon,
  Package01Icon,
  ShoppingBag01Icon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { useEffect, useLayoutEffect, useRef, useState } from "react";

type IndustryIcon = typeof ShoppingBag01Icon;

type Industry = {
  images: string;
  title: string;
  categories: string;
  points: string[];
  value: string;
  icon: IndustryIcon;
};

const industries: Industry[] = [
  {
    images: "/industries/item-1.png",
    title: "Industrial Distribution & Components",
    categories: "Industrial Distribution · Industrial Components",
    points: ["Thousands of parts.", "Constant questions."],
    value: "Otto helps reps keep opportunities moving and technical details close at hand.",
    icon: ShoppingBag01Icon,
  },
  {
    images: "/industries/item-2.png",
    title: "Manufacturing & Process Industries",
    categories: "Manufacturing · Process Equipment · Industrial Gases",
    points: ["Complex applications.", "Long customer relationships."],
    value: "Otto keeps conversations, account history, and next steps connected.",
    icon: Factory01Icon,
  },
  {
    images: "/industries/item-3.png",
    title: "Electrical & Automation",
    categories: "Electrical · Automation & Controls",
    points: ["Specifications.", "Lead times.", "Compatibility questions."],
    value: "Otto helps reps answer confidently and keep projects moving.",
    icon: ElectricPlugsIcon,
  },
  {
    images: "/industries/item-4.png",
    title: "HVAC & Construction",
    categories: "HVAC · Construction Supply",
    points: ["Schedules change.", "Priorities shift.", "Customers call from the job site."],
    value: "Otto helps reps stay responsive without getting buried in admin.",
    icon: HardHatIcon,
  },
  {
    images: "/industries/item-5.png",
    title: "Energy & Utilities",
    categories: "Energy · Utilities",
    points: ["Critical operations.", "Long buying cycles."],
    value: "Otto helps teams keep opportunities moving between visits.",
    icon: AtomicPowerIcon,
  },
  {
    images: "/industries/item-6.png",
    title: "Packaging",
    categories: "Packaging",
    points: ["Requirements change.", "Orders change.", "Timelines change."],
    value: "Otto helps reps stay on top of customer needs without ending the day behind a desk.",
    icon: Package01Icon,
  },
];

const ROTATE_MS = 5000;

function ExpandedPanel({ item, isActive }: { item: Industry; isActive: boolean }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [height, setHeight] = useState<number>(0);

  useLayoutEffect(() => {
    if (!ref.current) return;
    setHeight(ref.current.scrollHeight);
  }, [item.points, item.value, item.title]);

  return (
    <div
      style={{ height: isActive ? height : 0 }}
      className="overflow-hidden transition-[height] duration-500 ease-out"
    >
      <div ref={ref} className="pt-3">
        <ul className="space-y-1 text-sm sm:text-base text-muted-foreground leading-relaxed">
          {item.points.map((pt) => (
            <li key={pt}>{pt}</li>
          ))}
        </ul>
        <p className="mt-3 text-sm sm:text-base text-foreground/85">
          {item.value}
        </p>
      </div>
    </div>
  );
}

function IndustryRow({ item, isActive, onClick }: { item: Industry; isActive: boolean; onClick: () => void }) {
  return (
    <li className="py-1">
      <button
        type="button"
        onClick={onClick}
        aria-expanded={isActive}
        className="w-full text-left"
      >
        <div className="flex items-start gap-4 py-4">
          <span
            className={`grid size-10 shrink-0 place-items-center rounded-xl border transition-colors ${isActive
              ? "border-brand/40 bg-brand/10 text-brand"
              : "border-light-dark bg-light-dark/40 text-brand"
              }`}
          >
            <HugeiconsIcon icon={item.icon} size={20} strokeWidth={1.6} />
          </span>
          <div className="min-w-0 flex-1">
            <p
              className={`text-base sm:text-lg font-semibold leading-snug transition-colors ${isActive ? "text-heading" : "text-heading/80"
                }`}
            >
              {item.title}
            </p>
            <p className="mt-1 text-sm sm:text-base text-subheading">
              {item.categories}
            </p>
            <ExpandedPanel item={item} isActive={isActive} />
          </div>
        </div>
      </button>
    </li>
  );
}

function IndustryStack({ item }: { item: Industry }) {
  return (
    <div className="overflow-hidden">
      <div className="relative aspect-4/5 w-full overflow-hidden rounded-2xl border border-light-dark bg-light-dark">
        <Image
          src={item.images}
          alt={item.title}
          fill
          sizes="(min-width: 1024px) 520px, 90vw"
          className="object-cover"
        />
      </div>
      <div className="pt-5">
        <div className="flex items-start gap-4">
          <div className="min-w-0 flex-1">
            <div className="flex items-start gap-4">
              {/* <span className="grid size-8 shrink-0 place-items-center rounded-md border border-light-dark bg-light-dark/40 text-brand">
                <HugeiconsIcon icon={item.icon} size={20} strokeWidth={1.6} />
              </span> */}
              <div>
                <p className="text-lg tracking-tight font-medium leading-snug text-heading">
                  {item.title}
                </p>
              </div>
            </div>
            {/* <p className="text-base mt-2 text-muted-foreground">
              {item.categories}
            </p> */}
            <ul className="mt-4 space-y-1 text-base list-disc list-inside text-muted-foreground leading-relaxed">
              {item.points.map((pt) => (
                <li key={pt}>{pt}</li>
              ))}
            </ul>
            <p className="mt-3 text-base text-foreground/85">
              {item.value}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Industries() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setActiveIndex((i) => (i + 1) % industries.length);
    }, ROTATE_MS);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="v2-who-it's-for" className="relative py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-end">
          <div>
            <div className="text-[15px] font-medium flex items-center justify-start gap-3 text-brand">
              <span className="w-0.5 rounded-full h-4 bg-brand" /> Who it is for
            </div>
            <h2 className="mt-6 text-3xl sm:text-4xl lg:text-4xl font-semibold tracking-tight leading-[1.1] text-heading">
              Built For Industrial Sales
            </h2>
          </div>
          <p className="text-muted-foreground hidden md:flex text-base sm:text-xl max-w-md leading-relaxed lg:max-w-sm lg:justify-self-start">
            Otto is built for teams selling in the field, not sitting behind a desk.
          </p>
        </div>

        <div className="md:mt-10 mt-4 grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          <div className="order-2 lg:order-1">
            <div className="relative hidden lg:block aspect-[9/12] w-full mx-auto rounded-2xl overflow-hidden border border-light-dark bg-light-dark">
              <Image
                key={activeIndex}
                src={industries[activeIndex]?.images}
                alt={industries[activeIndex].title}
                fill
                sizes="(min-width: 1024px) 520px, 90vw"
                className="object-cover animate-in fade-in duration-500"
              />
            </div>
          </div>

          <div className="flex flex-col h-full order-1 lg:order-2">
            <p className="text-muted-foreground text-base mb-6 sm:text-xl max-w-md leading-relaxed lg:hidden">
              Otto is built for teams selling in the field, not sitting behind a desk.
            </p>
            <ul className="hidden lg:flex flex-col divide-y divide-light-dark">
              {industries.map((item, i) => (
                <IndustryRow
                  key={item.title}
                  item={item}
                  isActive={i === activeIndex}
                  onClick={() => setActiveIndex(i)}
                />
              ))}
            </ul>

            <div className="flex flex-col space-y-16 lg:hidden">
              {industries.map((item) => (
                <IndustryStack key={item.title} item={item} />
              ))}
            </div>

            <p className="text-muted-foreground mt-8 text-base max-w-md leading-relaxed">
              If your reps spend more time in customer facilities than in Salesforce, Otto was built for them.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
