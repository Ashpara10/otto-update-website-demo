import Image from "next/image";

const industries = [
  "Industrial equipment",
  "Manufacturing supplies",
  "Material handling",
  "Electrical & mechanical components",
  "Packaging & automation",
  "Building materials",
  "Industrial gases & chemicals",
  "Industrial services",
  "B2B distribution",
];

export function Industries() {
  return (
    <section
      id="v2-who-it's-for"
      className="relative py-20 lg:py-28 bg-zinc-950 text-zinc-100"
    >
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        <div className="relative order-2 lg:order-1">
          <div className="relative aspect-[8/11] w-full max-w-[520px] mx-auto rounded-2xl overflow-hidden border border-white/10 bg-zinc-900 shadow-sm">
            <Image
              src="/industries.png"
              alt="Industrial warehouse and field operations"
              fill
              sizes="(min-width: 1024px) 520px, 90vw"
              className="object-cover"
            />
            {/* <div className="absolute inset-0 bg-gradient-to-tr from-black/40 via-transparent to-transparent" /> */}
          </div>

        </div>

        <div className="flex flex-col h-full justify-between order-1 lg:order-2">
          <div>
            <p className="text-xs font-semibold tracking-[0.15em] uppercase text-[#00b386]">
              / Who it is for
            </p>
            <h2 className="mt-4 text-3xl sm:text-4xl font-semibold tracking-[-0.01em] leading-[1.1] text-zinc-50">
              Built for field-heavy
              <br />
              industrial sales.
            </h2>
            <p className="text-zinc-400 mt-4 text-base sm:text-lg max-w-md leading-relaxed">
              If your reps spend the day in the field and your revenue depends on
              follow-up, Otto fits.
            </p>
          </div>

          <div className="mt-4 max-w-xl">

            <ul className="mt-4 flex flex-col divide-y border-y border-white/10 divide-white/10 ">
              {industries.map((i) => (
                <li key={i} className="py-4">
                  <span className="w-full ">
                    {i}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
