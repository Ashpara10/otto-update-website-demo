import {
  Calendar01Icon,
  CoffeeIcon,
  CrownIcon,
  GroupIcon,
  HeadphonesIcon,
  NoteIcon,
  PackageIcon,
  Time01Icon,
} from "@hugeicons/core-free-icons";
import { WhoPage } from "@/components/who/who-page";

export const metadata = {
  title: "For Reps · Otto",
  description:
    "Otto is your AI sales coordinator on a phone call. Before a customer visit, Otto calls with the context you need. After the visit, you call Otto with what happened.",
};

const problemPoints = [
  "You start with a plan. Then the day takes over.",
  "You spend the day driving between customers.",
  "Quotes need updating. Follow-ups get pushed to tomorrow.",
  "A customer asks a question you can't answer on the spot.",
  "Meeting notes stay in your notebook.",
  "CRM waits until later, then until tomorrow, then until Friday.",
  "Nothing is wrong. You are just busy.",
  "That is when opportunities slip.",
];

const timelineEntries = [
  {
    time: "Morning",
    title: "Otto calls with the day ahead",
    body: "Before your first visit, before your first coffee.",
    description:
      "Accounts, quotes, renewals, and follow-ups that need attention today delivered before your first visit. Otto tells you what matters and what to skip.",
    icon: CoffeeIcon,
    image: "/who/r1.png",
  },
  {
    time: "Before a visit",
    title: "Otto briefs you on the customer",
    body: "Walk in already knowing the buyer.",
    description:
      "Customer history, open quotes, recent orders, service issues, and the talking points worth raising. No more digging through five systems before the door opens.",
    icon: NoteIcon,
    image: "/who/r2.png",
  },
  {
    time: "During the visit",
    title: "Call Otto for any answer",
    body: "Stay with the customer. Stay sharp.",
    description:
      "Stock, lead times, product specs, account history. Ask on the call. Get the answer while you're still with the customer, not after they've left.",
    icon: HeadphonesIcon,
    image: "/who/r3.png",
  },
  {
    time: "After the visit",
    title: "Otto does the admin",
    body: "Before you reach the next stop.",
    description:
      "Logs the meeting, updates CRM, drafts follow-ups, flags quote actions, updates the opportunity, informs the manager. The admin is already moving while you drive.",
    icon: Time01Icon,
    image: "/who/r4.png",
  },
];

const benefits = [
  {
    title: "More time with customers",
    description: "Less time updating systems. More time in front of buyers.",
    icon: Calendar01Icon,
  },
  {
    title: "Better preparation",
    description: "Walk into every visit already knowing what matters.",
    icon: NoteIcon,
  },
  {
    title: "Faster answers in the field",
    description:
      "Get product, stock, and account information while you're still with the customer.",
    icon: HeadphonesIcon,
  },
  {
    title: "Follow-ups that don't slip",
    description:
      "Quotes, renewals, and next steps keep moving even when your day gets busy.",
    icon: Time01Icon,
  },
  {
    title: "No evening CRM catch-up",
    description: "Finish the day without admin waiting for you at home.",
    icon: CoffeeIcon,
  },
  {
    title: "More deals closed",
    description: "Show up prepared. Follow up faster. Win more of the opportunities you already have.",
    icon: PackageIcon,
  },
];

const stats = [
  { value: "60+", label: "Hours saved / mo" },
  { value: "3.2×", label: "More follow-ups" },
  { value: "0", label: "Evening CRM" },
];

export default function Page() {
  return (
    <WhoPage
      role="reps"
      eyebrow="For Reps"
      headline="Spend More Time Selling."
      highlight="Less Time Remembering."
      subtitle="Otto is your AI sales coordinator on a phone call. Before a customer visit, Otto calls with the context you need. After the visit, you call Otto with what happened. Otto updates CRM, drafts follow-ups, flags quote actions, and keeps your opportunities moving."
      problemEyebrow="The reality"
      problemHeading="Your day runs away from you."
      problemLead="The visit starts with a plan. The day doesn't end with one."
      problemPoints={problemPoints}
      problemClose="The problem is not activity. The problem is the admin that follows it."
      timelineEyebrow="Your day with Otto"
      timelineHeading="A field rep's day, with Otto in it."
      timelineEntries={timelineEntries}
      benefitEyebrow="What you get back"
      benefitHeading="Time, clarity, and a pipeline that moves."
      benefits={benefits}
      stats={stats}
      ctaHeading="See what your first day with Otto looks like."
      ctaBody="Walk through a real visit with Otto in your pocket. No deck, no setup, no script. Just a 30-minute call with the team."
      relatedRoles={[
        { label: "Managers", href: "/who-its-for/managers", icon: GroupIcon },
        { label: "CROs", href: "/who-its-for/cros", icon: CrownIcon },
      ]}
    />
  );
}
