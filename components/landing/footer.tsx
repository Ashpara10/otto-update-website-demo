"use client";

import Link from "next/link";
import { BookDemoButton } from "../book-demo-button";
import Logo from "../logo";
import { navSitemap } from "./nav";

const legalLinks = [
  { label: "Privacy Policy", href: "#" },
  { label: "Terms", href: "#" },
  { label: "Cookie policy", href: "#" },
];

function Column({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div>
      <p className="text-base font-medium text-neutral-500">
        {title}
      </p>
      <ul className="mt-5 space-y-3">
        {links.map((l) => (
          <li key={l.label}>
            <a
              href={l.href}
              className="text-[15px] text-neutral-300 hover:text-neutral-100 transition"
            >
              {l.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {

  return (
    <footer className="relative bg-dark text-neutral-300 border-t border-light-dark overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 pt-16 pb-12">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-10 lg:gap-8 items-start">
          <div className="col-span-2  ">
            <Link href="/" className="inline-flex items-center text-neutral-100">
              <Logo className="h-7 w-auto" />
            </Link>
            <p className="mt-5 text-[15px] md:text-base text-neutral-400 max-w-sm">
              An AI coordinator for  <br />industrial field sales teams.
            </p>
            <BookDemoButton
              className="mt-6 inline-flex h-10 px-6 items-center rounded-full bg-brand px-4 text-sm font-medium text-lime-900 hover:bg-lime-400 transition"
            >
              Book a demo
            </BookDemoButton>
          </div>
          <Column title="Features" links={navSitemap.features} />
          <div className="space-y-6">
            <Column title="Who it's for" links={navSitemap.who} />
            <Column title="Pricing" links={[{ label: "Plans", href: "/pricing" }]} />
          </div>
          <Column title="Resources" links={navSitemap.resources} />
          <Column title="Legal" links={legalLinks} />
        </div>
      </div>

      <div className="h-2 w-full max-w-7xl mx-auto my-16 border-t border-light-dark/60 border-dashed" />

      <div
        aria-hidden
        className="select-none overflow-hidden max-w-7xl w-full mx-auto leading-[0.8] -mb-2 sm:-mb-3"
      >
        <p className="font-extrabold tracking-[-0.04em] text-center text-neutral-100 whitespace-nowrap text-[18vw] sm:text-[16vw] lg:text-[12.5vw]">
          OttoUpdate
        </p>
      </div>
    </footer>
  );
}
