"use client";

const RedCross = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="shrink-0 mt-0.5"
  >
    <path
      d="M12 4L4 12M4 4L12 12"
      stroke="#EF4444"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const GreenCheck = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="shrink-0 mt-0.5"
  >
    <path
      d="M3.33334 8L6.66668 11.3333L13.3333 4.66667"
      stroke="#10B981"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const beforeItems = [
  { label: "CRM auto-update", price: "$165/mo" },
  { label: "Pre-meeting prep", price: "$49/mo" },
  { label: "Post-call coach", price: "$250/mo" },
  { label: "Note taker", price: "$39/mo" },
  { label: "Prospect signals", price: "$119/mo" },
  { label: "Contextual memory", price: "$130/mo" },
];

const afterItems = [
  "Morning briefing call",
  "Pre-meeting prep",
  "Post-sales call coach",
  "CRM auto-updation",
  "Otto memory",
  "Note taker",
  "Prospect signals",
  "Auto follow-ups and email drafts",
];

function Divider({ label }: { label: string }) {
  return (
    <div className="relative mb-12 flex w-full items-center justify-center">
      <div className="absolute inset-x-0 h-px bg-light-dark" />
      <div className="relative z-10 rounded-full bg-neutral-100 px-5 py-1.5 text-sm font-medium text-neutral-900">
        {label}
      </div>
    </div>
  );
}

export function PricingComparisonSection() {
  return (
    <section className="bg-dark py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="grid grid-cols-1 gap-y-16 md:grid-cols-2">
          {/* Before */}
          <div className="relative flex flex-col px-4 md:px-8">
            <div className="flex flex-col items-center pb-12 text-center">
              <h3 className="mb-6 text-sm font-semibold tracking-widest text-neutral-500">
                Individual AI Tools
              </h3>
              <div className="mb-2 text-5xl font-bold tracking-tight text-neutral-100 md:text-6xl">
                $752
              </div>
              <div className="text-sm font-medium text-neutral-500">
                /user/month combined
              </div>
            </div>

            <Divider label="Before" />

            <div className="flex flex-col items-center">
              <ul className="w-full max-w-xs space-y-4">
                {beforeItems.map((item) => (
                  <li key={item.label} className="flex items-start gap-3">
                    <RedCross />
                    <div className="flex w-full justify-between text-[15px] font-medium text-neutral-200">
                      <span>{item.label}</span>
                      <span className="font-normal text-neutral-500">
                        {item.price}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="mt-8 w-full max-w-xs border-t border-light-dark pt-6">
                <div className="flex w-full items-baseline justify-between">
                  <span className="text-sm font-semibold tracking-wider text-neutral-500">
                    Total
                  </span>
                  <span className="text-xl font-bold text-neutral-100">
                    $9,024/yr
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* After */}
          <div className="relative flex flex-col px-4 md:px-8">
            <div className="relative flex flex-col items-center pb-12 text-center">
              <div className=" mb-6 rounded-full bg-brand text-lime-900 px-3 py-1 text-sm font-semibold  ">
                Choose Otto
              </div>
              {/* <h3 className="mb-6 text-sm font-semibold tracking-widest text-neutral-500">
                Otto
              </h3> */}
              <div className="mb-2 text-5xl font-bold tracking-tight text-brand md:text-6xl">
                $99
              </div>
              <div className="text-sm font-medium text-neutral-500">
                /user/month or $999/year
              </div>
            </div>

            <Divider label="After" />

            <div className="flex flex-col items-center">
              <ul className="w-full max-w-xs space-y-4">
                {afterItems.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <GreenCheck />
                    <span className="text-[15px] font-medium text-neutral-200">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 w-full max-w-xs border-t border-light-dark pt-6">
                <div className="flex w-full items-baseline justify-between">
                  <span className="text-sm font-semibold tracking-wider text-neutral-500">
                    Total
                  </span>
                  <span className="text-xl font-bold text-brand">$999/yr</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
