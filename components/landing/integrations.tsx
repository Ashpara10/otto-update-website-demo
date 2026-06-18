import Logo from "../logo";

const CELLS_LEFT = ["CRM", "ERP", "CPQ", "Email"];
const CELLS_RIGHT = ["Calendar", "Inventory", "Product documents", "Quote tools"];

const SIDE_Y = [12, 38, 62, 88] as const;

function CurvedLines() {
  return (
    <svg
      className="pointer-events-none absolute inset-0 h-full w-full"
      preserveAspectRatio="none"
      viewBox="0 0 100 100"
      aria-hidden
    >
      <g
        fill="none"
        stroke="currentColor"
        strokeWidth="0.2"
        strokeDasharray="0.9 0.9"
        strokeLinecap="round"
        className="text-light-dark"
      >
        {SIDE_Y.map((y) => (
          <path
            key={`l-${y}`}
            d={`M 22 ${y} C 36 ${y}, 36 50, 50 50`}
          />
        ))}
        {SIDE_Y.map((y) => (
          <path
            key={`r-${y}`}
            d={`M 50 50 C 64 50, 64 ${y}, 78 ${y}`}
          />
        ))}
      </g>
    </svg>
  );
}

function LeftPill({ label, idx }: { label: string; idx: number }) {
  return (
    <li
      style={{ top: `${SIDE_Y[idx]}%` }}
      className="absolute right-0 -translate-y-1/2"
    >
      <div className="flex w-fit items-center gap-3 rounded-2xl border border-light-dark/60 bg-light-dark/40 px-5 py-3 text-base font-medium text-foreground/85 transition-colors hover:border-brand/30 hover:text-brand">
        <span>{label}</span>
        <span className="size-1.5 rounded-full bg-brand/60" />
      </div>
    </li>
  );
}

function RightPill({ label, idx }: { label: string; idx: number }) {
  return (
    <li
      style={{ top: `${SIDE_Y[idx]}%` }}
      className="absolute left-0 -translate-y-1/2"
    >
      <div className="flex w-fit items-center gap-3 rounded-2xl border border-light-dark/60 bg-light-dark/40 px-5 py-3 text-base font-medium text-foreground/85 transition-colors hover:border-brand/30 hover:text-brand">
        <span className="size-1.5 rounded-full bg-brand/60" />
        <span>{label}</span>
      </div>
    </li>
  );
}

export function Integrations() {
  return (
    <section id="integrations" className="relative py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="text-[15px] font-medium flex items-center justify-center gap-3 text-brand">
          <span className="w-0.5 rounded-full h-4 bg-brand" /> Integrations
        </div>
        <h2 className="mx-auto mt-4 max-w-2xl text-center text-3xl sm:text-4xl lg:text-4xl font-semibold tracking-tight text-heading">
          Works With Your Existing Systems
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-center text-lg sm:text-xl text-muted-foreground leading-relaxed">
          Otto connects to the tools your team already uses.
        </p>

        <div className="mt-12 grid grid-cols-2 gap-4 md:hidden">
          {[...CELLS_LEFT, ...CELLS_RIGHT].map((c) => (
            <div
              key={c}
              className="flex min-h-[84px] items-center justify-center gap-2.5 rounded-2xl border border-light-dark/60 bg-light-dark/40 px-6 py-6 text-center text-base font-medium text-foreground/85 transition-colors hover:border-brand/30 hover:text-brand cursor-pointer"
            >
              <span className="size-1.5 rounded-full bg-brand/60" />
              {c}
            </div>
          ))}
        </div>

        <div className="relative mx-auto mt-20 hidden h-[640px] w-full max-w-6xl md:block">
          <CurvedLines />

          <div className="absolute left-0 top-0 h-full w-[22%]">
            <ul className="relative h-full">
              {CELLS_LEFT.map((label, i) => (
                <LeftPill key={label} label={label} idx={i} />
              ))}
            </ul>
          </div>

          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="grid size-24 lg:size-28 place-items-center rounded-2xl border border-light-dark bg-white dark:bg-light-dark/60 backdrop-blur-md">
              <Logo onlyIcon className="size-12 lg:size-14 text-heading" />
            </div>
          </div>

          <div className="absolute right-0 top-0 h-full w-[22%]">
            <ul className="relative h-full">
              {CELLS_RIGHT.map((label, i) => (
                <RightPill key={label} label={label} idx={i} />
              ))}
            </ul>
          </div>
        </div>

        <div className="mx-auto mt-10 max-w-2xl text-center text-base text-muted-foreground leading-relaxed">
          <p className="space-x-2">No rip-and-replace {" • "} No new workflow {" • "} No extra dashboard for reps.</p>
          <p className="mt-2">Just one number to call.</p>
        </div>
      </div>
    </section>
  );
}
