import { WhoPage } from "@/components/who/who-page";

export const metadata = {
  title: "For Reps · Otto",
  description:
    "Otto is your AI sales coordinator on a phone call. Before a customer visit, Otto calls with the context you need. After the visit, you call Otto with what happened.",
};

const beforeItems = [
  "You start with a plan.",
  "Then the day takes over.",
  "You are driving between customers.",
  "A quote needs updating.",
  "A follow-up gets pushed to tomorrow.",
  "A customer asks a question you need to check.",
  "Meeting notes stay in your notebook.",
  "CRM waits until later.",
  "Nothing is wrong.",
  "You are just busy.",
  "That is when opportunities slip.",
];

const dayEntries = [
  {
    time: "Morning",
    description:
      "Otto calls with the accounts, quotes, renewals, and follow-ups that need attention today.",
  },
  {
    time: "Before A Visit",
    description:
      "Otto briefs you on the customer's history, open quotes, recent orders, service issues, and talking points.",
  },
  {
    time: "During The Visit",
    description:
      "Need stock, lead times, product specs, or account history? Call Otto and ask.",
  },
  {
    time: "After The Visit",
    description:
      "Call Otto and say what happened. Otto logs the meeting, updates CRM, drafts follow-ups, flags quote actions, updates the opportunity, and informs your manager. Before you reach the next stop, the admin is already moving.",
  },
];

const benefits = [
  {
    title: "More time with customers.",
    description: "Less time updating systems. More time selling.",
  },
  {
    title: "Better preparation.",
    description: "Walk into every visit knowing what matters.",
  },
  {
    title: "Faster answers in the field.",
    description: "Get product, stock, and account information while you're still with the customer.",
  },
  {
    title: "Follow-ups that don't slip.",
    description: "Quotes, renewals, and next steps keep moving even when your day gets busy.",
  },
  {
    title: "No evening CRM catch-up.",
    description: "Finish the day without admin waiting for you at home.",
  },
];

export default function Page() {
  return (
    <WhoPage
      eyebrow="For Reps"
      headline="Spend More Time Selling."
      highlight="Less Time Remembering."
      subtitle="Otto is your AI sales coordinator on a phone call. Before a customer visit, Otto calls with the context you need. After the visit, you call Otto with what happened. Otto updates CRM, drafts follow-ups, flags quote actions, and keeps your opportunities moving."
      beforeHeading="Your Day Without Otto"
      beforeIntro="You start with a plan. Then the day takes over."
      beforeItems={beforeItems}
      dayHeading="Your Day With Otto"
      dayEntries={dayEntries}
      benefitHeading="What You Get Back"
      benefits={benefits}
    />
  );
}
