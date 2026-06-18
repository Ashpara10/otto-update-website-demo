import { WhoPage } from "@/components/who/who-page";

export const metadata = {
  title: "For Managers · Otto",
  description:
    "Know what is happening without chasing updates. Otto gives sales managers visibility into the field without asking reps for another status update.",
};

const beforeItems = [
  "Your team is working hard.",
  "Customer visits are happening.",
  "Quotes are being discussed.",
  "Competitors are showing up.",
  "Customer issues are being raised.",
  "New opportunities are being found.",
  "But too much of it reaches you late.",
  "During pipeline reviews.",
  "After deals stall.",
  "After customers escalate.",
  "After forecast numbers change.",
  "The problem is not activity.",
  "The problem is visibility.",
];

const dayEntries = [
  {
    time: "Morning",
    description:
      "Otto briefs you on the accounts, opportunities, and risks that need attention across your territory.",
  },
  {
    time: "Throughout The Day",
    description:
      "Customer visits are captured. Meeting notes are logged. Follow-ups are tracked. Opportunities stay updated.",
  },
  {
    time: "Midday",
    description:
      "A competitor appears in a strategic account. Otto surfaces it immediately so you can coach the rep.",
  },
  {
    time: "End Of Day",
    description:
      "Receive a summary of what happened across your territory. Customer activity, quotes progressing, follow-ups completed, risks emerging, opportunities created. No chasing required.",
  },
];

const benefits = [
  {
    title: "Visibility into field activity.",
    description: "Know what is happening without waiting for updates.",
  },
  {
    title: "Cleaner CRM data.",
    description: "Customer interactions are captured while they're still fresh.",
  },
  {
    title: "Better follow-through.",
    description: "Ensure opportunities don't stall between customer visits.",
  },
  {
    title: "Earlier risk detection.",
    description: "Spot risks before they surface during forecast reviews.",
  },
  {
    title: "Better coaching conversations.",
    description: "Spend less time gathering information and more time helping reps improve.",
  },
  {
    title: "Fewer pipeline surprises.",
    description: "No more discovering stalled deals after the fact.",
  },
];

export default function Page() {
  return (
    <WhoPage
      eyebrow="For Managers"
      headline="Know What Is Happening"
      highlight="Without Chasing Updates."
      subtitle="Otto gives sales managers visibility into the field without asking reps for another status update. Every visit gets captured. Every follow-up gets tracked. Every quote action gets flagged. Every risk gets surfaced earlier."
      beforeHeading="The Problem"
      beforeIntro="Your team is working hard. But too much of it reaches you late."
      beforeItems={beforeItems}
      dayHeading="With Otto"
      dayEntries={dayEntries}
      benefitHeading="What You Gain"
      benefits={benefits}
    />
  );
}
