"use client";

import { useEffect, useRef, useState } from "react";
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
  Menu01Icon,
  News01Icon,
  PresentationIcon,
  QuestionIcon,
  TieIcon,
  User02Icon,
  Cancel01Icon,
  ArrowDown01Icon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Link from "next/link";
import { BookDemoButton } from "../book-demo-button";
import Logo from "../logo";
import { NavDropdown, type NavDropdownGroup } from "./nav-dropdown";
import { ThemeToggle } from "../theme-toggle";

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
      label: "Trade Show Companion",
      description:
        "Leave the event with opportunities, not just business cards.",
      href: "/features/conference-bot",
      icon: Call02Icon,
    },
    {
      label: "Post-Visit Coach",
      description: "Every customer conversation moves the deal forward.",
      href: "/features/post-call-coaching",
      icon: ClipboardIcon,
    },
    {
      label: "Sales Intelligence",
      description:
        "Answers when you need them, with the context to back them up.",
      href: "/features/product-inquiry",
      icon: QuestionIcon,
    },
  ],
  feature: {
    title: "Otto runs the field, end to end.",
    body: "Six capabilities, one connected workflow so nothing between a visit and the CRM slips.",
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

function MobileGroup({
  group,
  open,
  onToggle,
  onNavigate,
}: {
  group: NavDropdownGroup;
  open: boolean;
  onToggle: () => void;
  onNavigate: () => void;
}) {
  const contentRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    if (open && contentRef.current) {
      contentRef.current.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
  }, [open]);

  return (
    <div className="border-b border-light-dark last:border-b-0">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        className="flex w-full items-center justify-between px-5 py-4 text-left"
      >
        <span className="text-base font-medium text-heading">
          {group.label}
        </span>
        <HugeiconsIcon
          icon={ArrowDown01Icon}
          size={16}
          strokeWidth={2}
          className={`text-subheading transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && (
        <ul ref={contentRef} className="space-y-1 pb-3">
          {group.items.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                onClick={onNavigate}
                className="flex items-start gap-3 rounded-xl px-5 py-3 text-foreground/85 hover:bg-light-dark transition"
              >
                <span className="mt-0.5 grid size-8 shrink-0 place-items-center rounded-lg border border-light-dark bg-dark text-subheading">
                  <HugeiconsIcon
                    icon={item.icon}
                    width={16}
                    height={16}
                    strokeWidth={1.8}
                  />
                </span>
                <span className="min-w-0">
                  <span className="block text-sm font-semibold text-heading">
                    {item.label}
                  </span>
                  <span className="mt-0.5 block text-xs leading-snug text-subheading">
                    {item.description}
                  </span>
                </span>
              </Link>
            </li>
          ))}
          {group.feature && (
            <li>
              <Link
                href={group.feature.cta.href}
                onClick={onNavigate}
                className="block rounded-xl px-5 py-2 text-sm font-medium text-brand hover:bg-brand/5 transition"
              >
                {group.feature.cta.label} →
              </Link>
            </li>
          )}
        </ul>
      )}
    </div>
  );
}

export function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openGroup, setOpenGroup] = useState<string | null>(null);

  const closeMobile = () => {
    setMobileOpen(false);
    setOpenGroup(null);
  };

  return (
    <div className="fixed top-0 mx-auto inset-x-0 z-50 w-full border-b bg-background border-light-dark">
      <header className="mx-auto max-w-7xl w-full px-5 md:px-10 py-4">
        <nav className="flex items-center justify-between">
          <Link href="/" className="flex md:hidden items-center gap-2 shrink-0">
            <Logo onlyIcon />
          </Link>
          <Link href="/" className="hidden md:flex items-center gap-2 shrink-0">
            <Logo />
          </Link>

          <ul className="hidden md:flex items-center gap-1 text-[15px] text-neutral-600 dark:text-muted-foreground">
            <li>
              <Link
                href="/"
                className="px-4 py-2 rounded-full hover:text-heading hover:bg-light-dark transition"
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
                className="px-4 py-2 rounded-full hover:text-heading hover:bg-light-dark transition"
              >
                Pricing
              </Link>
            </li>
            <li>
              <NavDropdown group={resourcesGroup} />
            </li>
          </ul>

          <div className="flex items-center justify-end gap-3 sm:gap-4 shrink-0">
            <div className="hidden sm:inline-flex">
              <ThemeToggle />
            </div>
            <div className="hidden sm:block w-px h-6 bg-light-dark" />
            <div className="hidden sm:inline-flex">
              <BookDemoButton
                className="btn-primary h-10 items-center rounded-full px-4 text-[14px] font-medium"
              >
                Book a demo
              </BookDemoButton>
            </div>
            <button
              type="button"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen((v) => !v)}
              className="md:hidden grid size-10 place-items-center rounded-full border border-light-dark text-foreground/85 hover:bg-light-dark transition"
            >
              <HugeiconsIcon
                icon={mobileOpen ? Cancel01Icon : Menu01Icon}
                size={20}
                strokeWidth={1.8}
              />
            </button>
          </div>
        </nav>
      </header>

      {mobileOpen && (
        <div className="md:hidden border-t border-light-dark bg-dark max-h-[calc(100dvh-4rem)] overflow-y-auto">
          <ul className="mx-auto max-w-7xl w-full  py-2 px-1 text-base font-medium text-foreground/85">
            <li>
              <Link
                href="/"
                onClick={closeMobile}
                className="block rounded-full px-4 py-3 hover:bg-light-dark transition"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/pricing"
                onClick={closeMobile}
                className="block rounded-full px-4 py-3 hover:bg-light-dark transition"
              >
                Pricing
              </Link>
            </li>
          </ul>

          <div className="mx-auto max-w-7xl w-full border-t border-light-dark">
            <MobileGroup
              group={featuresGroup}
              open={openGroup === "features"}
              onToggle={() =>
                setOpenGroup((g) => (g === "features" ? null : "features"))
              }
              onNavigate={closeMobile}
            />
            <MobileGroup
              group={whoGroup}
              open={openGroup === "who"}
              onToggle={() => setOpenGroup((g) => (g === "who" ? null : "who"))}
              onNavigate={closeMobile}
            />
            <MobileGroup
              group={resourcesGroup}
              open={openGroup === "resources"}
              onToggle={() =>
                setOpenGroup((g) => (g === "resources" ? null : "resources"))
              }
              onNavigate={closeMobile}
            />
          </div>

          <div className="mx-auto max-w-7xl w-full px-5 py-4 space-y-3">
            <div className="sm:hidden">
              <ThemeToggle fullWidth />
            </div>
            <BookDemoButton
              className="btn-primary inline-flex w-full h-12 items-center justify-center rounded-full px-6 text-base font-semibold"
            >
              Book a demo
            </BookDemoButton>
          </div>
        </div>
      )}
    </div>
  );
}

export const navSitemap = {
  features: featuresGroup.items.map((i) => ({ label: i.label, href: i.href })),
  who: whoGroup.items.map((i) => ({ label: i.label, href: i.href })),
  resources: resourcesGroup.items.map((i) => ({ label: i.label, href: i.href })),
};
