"use client";

import {
  AiMailIcon,
  Book01Icon,
  Call02Icon,
  ClipboardIcon,
  CoffeeIcon,
  CrownIcon,
  GroupIcon,
  HatIcon,
  Mail01Icon,
  MegaphoneIcon,
  News01Icon,
  PresentationIcon,
  QuestionIcon,
  TieIcon,
  User02Icon,
} from "@hugeicons/core-free-icons";
import Link from "next/link";
import { BookDemoButton } from "../book-demo-button";
import Logo from "../logo";
import { NavDropdown, type NavDropdownGroup } from "./nav-dropdown";

const featuresGroup: NavDropdownGroup = {
  label: "Features",
  items: [
    {
      label: "Morning Briefing",
      description: "Start every rep's day with the accounts that matter.",
      href: "/features/morning-briefing",
      icon: CoffeeIcon,
    },
    {
      label: "Pre-Meeting Brief",
      description: "Walk into every visit already knowing the buyer.",
      href: "/features/pre-meeting-brief",
      icon: PresentationIcon,
    },
    {
      label: "CRM Updates",
      description: "Every call, quote, and note lands in the CRM automatically.",
      href: "/features/crm-updates",
      icon: AiMailIcon,
    },
    {
      label: "Conference Bot",
      description: "Otto listens on industry calls and surfaces what changed.",
      href: "/features/conference-bot",
      icon: Call02Icon,
    },
    {
      label: "Post Call Coaching",
      description: "Feedback within an hour of every customer conversation.",
      href: "/features/post-call-coaching",
      icon: ClipboardIcon,
    },
    {
      label: "Product Inquiry",
      description: "Reps ask, Otto answers from your real product catalog.",
      href: "/features/product-inquiry",
      icon: QuestionIcon,
    },
  ],
  feature: {
    title: "Otto runs the field, end to end.",
    body: "Six capabilities, one connected workflow — so nothing between a visit and the CRM slips.",
    cta: { label: "See all features", href: "/features" },
  },
};

const whoGroup: NavDropdownGroup = {
  label: "Who it's for",
  items: [
    {
      label: "Managers",
      description: "See every rep, every account, in real time.",
      href: "/who-its-for/managers",
      icon: GroupIcon,
    },
    {
      label: "CROs",
      description: "Pipeline visibility without the Friday review.",
      href: "/who-its-for/cros",
      icon: CrownIcon,
    },
    {
      label: "Reps",
      description: "Less paperwork, more selling time.",
      href: "/who-its-for/reps",
      icon: HatIcon,
    },
  ],
  feature: {
    title: "Built for industrial field sales.",
    body: "From a 3-rep welding supply shop to a 200-rep national distributor.",
    cta: { label: "See who it's for", href: "/who-its-for" },
  },
};

const resourcesGroup: NavDropdownGroup = {
  label: "Resources",
  items: [
    {
      label: "Manifesto",
      description: "Why we are rebuilding the CRM around the rep.",
      href: "/resources/manifesto",
      icon: Book01Icon,
    },
    {
      label: "Media",
      description: "Press, podcasts, and feature coverage.",
      href: "/resources/media",
      icon: MegaphoneIcon,
    },
    {
      label: "Team",
      description: "The people building Otto.",
      href: "/resources/team",
      icon: User02Icon,
    },
    {
      label: "Blog",
      description: "Notes from the field, weekly.",
      href: "/resources/blog",
      icon: News01Icon,
    },
    {
      label: "Contact",
      description: "Talk to a human, not a chatbot.",
      href: "/resources/contact",
      icon: Mail01Icon,
    },
    {
      label: "Careers",
      description: "We are hiring across product, engineering, and design.",
      href: "/resources/careers",
      icon: TieIcon,
    },
  ],
  feature: {
    title: "Follow the build.",
    body: "Updates from the team, plus the research behind every release.",
    cta: { label: "Read the blog", href: "/resources/blog" },
  },
};

export function Nav() {

  return (
    <div className="fixed top-0  mx-auto inset-x-0 z-50 w-full border-b bg-white border-neutral-200 ">
      <header className="mx-auto max-w-7xl w-full px-6 md:px-10 py-4">
        <nav className="flex items-center justify-between">
          <Link href="/" className="flex items-center ml-4 gap-2 shrink-0">
            <Logo />
          </Link>

          <ul className="hidden md:flex items-center gap-1 text-[16px] font-medium text-neutral-600">
            <li>
              <Link
                href="/"
                className="px-4 py-2 rounded-full hover:text-zinc-900 hover:bg-zinc-100 transition"
              >
                Home
              </Link>
            </li>
            <li>
              <NavDropdown group={featuresGroup} />
            </li>
            <li>
              <NavDropdown group={whoGroup} />
            </li>
            <li>
              <Link
                href="/pricing"
                className="px-4 py-2 rounded-full hover:text-zinc-900 hover:bg-zinc-100 transition"
              >
                Pricing
              </Link>
            </li>
            <li>
              <NavDropdown group={resourcesGroup} />
            </li>
          </ul>

          <div className="flex items-center justify-center gap-4 shrink-0">
            <Link
              href="/resources/contact"
              className="hidden sm:inline-flex h-10 items-center px-3 text-[16px] font-medium text-neutral-600 hover:text-zinc-900 transition"
            >
              Sign in
            </Link>
            <div className="w-px h-6 bg-neutral-200" />
            <BookDemoButton
              className="inline-flex h-10 items-center rounded-full bg-brand px-4 text-[14px] font-medium text-lime-900 hover:bg-lime-400 transition shadow-sm"
            >
              Book a demo
            </BookDemoButton>
          </div>
        </nav>
      </header>
    </div>
  );
}

export const navSitemap = {
  features: featuresGroup.items.map((i) => ({ label: i.label, href: i.href })),
  who: whoGroup.items.map((i) => ({ label: i.label, href: i.href })),
  resources: resourcesGroup.items.map((i) => ({ label: i.label, href: i.href })),
};
