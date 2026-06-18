import Image from "next/image";

const CHECK = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-4">
    <path d="M5 12l4 4L19 6" />
  </svg>
);

type Step = {
  title: string;
  body: string;
  items: string[];
  variant: "quotes" | "list";
  image: string;
};

const STEPS: Step[] = [
  {
    image: "/how-it-works/work-0.png",
    title: "1. Otto calls before the visit",
    body: "",
    variant: "quotes",
    items: [
      "\u201CYour quote has been sitting for 12 days.\u201D",
      "\u201CThey raised a delivery issue on the last order.\u201D",
      "\u201CTheir contract renews next month.\u201D",
      "\u201CAsk about the expansion project.\u201D",
    ],
  },
  {
    image: "/how-it-works/work-1.png",
    title: "2. The rep visits the customer",
    body: "",
    variant: "list",
    items: ["They sell.", "They listen.", "They build the relationship."],
  },
  {
    image: "/how-it-works/work-3.png",
    title: "3. The rep calls Otto after the visit",
    body: "",
    variant: "quotes",
    items: [
      "\u201CSend revised pricing by Friday.\u201D",
      "\u201CThe competitor came in lower.\u201D",
      "\u201CThey are interested in another facility.\u201D",
      "\u201CFollow up next Tuesday.\u201D",
    ],
  },
  {
    image: "/how-it-works/work-2.png",
    title: "4. Otto handles the admin",
    body: "All before the rep reaches the next stop.",
    variant: "list",
    items: [
      "CRM updated.",
      "Meeting logged.",
      "Follow-up drafted.",
      "Opportunity updated.",
      "Manager informed.",
      "Customer context saved.",
    ],
  },
];

function StepBlock({ step, index }: { step: Step; index: number }) {
  const isReversed = index % 2 === 1;
  const number = String(index + 1).padStart(2, "0");

  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12 lg:gap-16 items-center">
      <div className={`flex flex-col gap-5 ${isReversed ? "md:order-2" : ""}`}>
        {/* <div className="inline-flex items-center gap-3 self-start">
          <span className="grid size-9 place-items-center rounded-lg border border-brand/25 bg-brand/10 text-sm font-bold text-brand">
            {number}
          </span>
          <span className="text-[13px] font-semibold tracking-[0.15em] uppercase text-brand">
            Step
          </span>
        </div> */}

        <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold tracking-tight text-heading">
          {step.title.replace(/^\d+\.\s*/, "")}
        </h3>

        {/* {step.variant === "quotes" ? (
          <ul className="flex flex-col divide-y divide-light-dark rounded-2xl border border-light-dark bg-light-dark/40 px-5">
            {step.items.map((line, i) => (
              <li
                key={i}
                className="py-3 text-base sm:text-lg text-foreground/85 leading-relaxed"
              >
                {line}
              </li>
            ))}
          </ul>
        ) : ( */}
        <ul className="flex flex-col gap-2">
          {step.items.map((line, i) => (
            <li
              key={i}
              className="flex items-center gap-3 text-base sm:text-lg text-foreground/85 leading-relaxed"
            >
              <span className="grid size-5 shrink-0 place-items-center rounded-md bg-brand/15 text-brand">
                {CHECK}
              </span>
              {line}
            </li>
          ))}
        </ul>
        {/* )} */}

        {step.body && (
          <p className="text-base sm:text-lg font-medium text-heading leading-relaxed">
            {step.body}
          </p>
        )}
      </div>

      <div
        className={`relative w-full aspect-square max-w-xl mx-auto rounded-2xl overflow-hidden border border-light-dark bg-light-dark/40 ${isReversed ? "md:order-1" : ""
          }`}
      >
        <Image src={step.image} fill alt="" sizes="(min-width: 768px) 50vw, 90vw" className="object-cover" />
        {/* <div className="absolute inset-0 grid place-items-center text-subheading text-sm">
          Step image
        </div> */}
      </div>
    </div>
  );
}

export function HowItWorks() {
  return (
    <section id="how" className="relative py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="flex flex-col md:flex-row items-start md:items-end md:justify-between">
          <div>
            <div className="text-[15px] font-medium flex items-center justify-start gap-3 text-brand">
              <span className="w-0.5 rounded-full h-4 bg-brand" /> How it works
            </div>
            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-4xl font-semibold tracking-tight text-heading">
              The rep talks.
              <br />
              <span className="text-brand">Otto does the work.</span>
            </h2>
          </div>
          <p className="mt-5 max-w-md text-lg sm:text-xl text-muted-foreground leading-relaxed">
            The rep does what they are good at, the visit. Then they call Otto and
            say what happened. Otto handles the rest.
          </p>
        </div>

        <div className="mt-16 flex flex-col gap-20 md:gap-28">
          {STEPS.map((step, i) => (
            <StepBlock key={step.title} step={step} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
