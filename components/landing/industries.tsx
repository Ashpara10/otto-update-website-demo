"use client"
import Image from "next/image";
import { useEffect, useState } from "react";

const industries = [
  { image: "/industries/industrial-equipment.png", label: "Industrial equipment" },
  { image: "/industries/manufacturing.png", label: "Manufacturing supplies" },
  { image: "/industries/material-handling.png", label: "Material handling" },
  { image: "/industries/electrical.png", label: "Electrical & mechanical components" },
  { image: "/industries/packaging-automation.png", label: "Packaging & automation" },
  { image: "/industries/building-materials.png", label: "Building materials" },
  { image: "/industries/gases.png", label: "Industrial gases & chemicals" },
  { image: "/industries/industrial-services.png", label: "Industrial services" },
  { image: "/industries/b2b.png", label: "B2B distribution" },
];

export function Industries() {

  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {

    const intervalId = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % industries.length)
    }, 3000)

    return () => clearInterval(intervalId)

  }, [])

  return (
    <section
      id="v2-who-it's-for"
      className="relative py-20 lg:py-28 bg-dark"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-10 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        <div className="relative order-2 lg:order-1">
          <div className="relative aspect-[4/5] w-full  mx-auto rounded-2xl overflow-hidden border border-light-dark bg-light-dark">
            <Image
              src={industries[activeIndex].image}
              alt="Industrial warehouse and field operations"
              fill
              sizes="(min-width: 1024px) 520px, 90vw"
              className="object-cover"
            />
          </div>

        </div>

        <div className="flex flex-col h-full justify-between order-1 lg:order-2">
          <div className="mt-4">
            <div className="text-[15px] font-medium flex items-center justify-start gap-3 text-brand">
              <span className="w-0.5 rounded-full h-4 bg-brand " /> Who it is for
            </div>
            <h2 className="mt-4 text-3xl sm:text-3xl font-semibold tracking-[-0.01em] leading-[1.1] text-heading">
              Built for field-heavy
              <br />
              industrial sales.
            </h2>
            <p className="text-subheading mt-4 text-base sm:text-lg max-w-md leading-relaxed">
              If your reps spend the day in the field and your revenue depends on
              follow-up, Otto fits.
            </p>
          </div>

          <div className="mt-8">

            <ul className=" flex flex-col divide-y divide-light-dark ">
              {industries.map((i) => (
                <li key={i.label} className="py-4 relative">

                  <span className="w-full ">
                    {i.label}
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
