import {
  Analytics01Icon,
  ChartLineData01Icon,
  CrownIcon,
  DashboardSquare01Icon,
  HatIcon,
  Notification01Icon,
  Radar01Icon,
  Shield01Icon,
  Target01Icon,
  UserGroupIcon,
} from "@hugeicons/core-free-icons";
import { WhoPage } from "@/components/who/who-page";

export const metadata = {
  title: "For Managers · Otto",
  description:
    "Know what is happening without chasing updates. Otto gives sales managers visibility into the field without asking reps for another status update.",
};

const problemPoints = [
  "Your team is working hard. Visits are happening.",
  "Quotes are being discussed. Competitors are showing up.",
  "Customer issues are being raised. New opportunities are being found.",
  "But too much of it reaches you late.",
  "During pipeline reviews.",
  "After deals stall.",
  "After customers escalate.",
  "After forecast numbers change.",
  "The problem is not activity.",
  "The problem is visibility.",
];

const timelineEntries = [
  {
    time: "Morning",
    title: "Otto briefs you on the territory",
    body: "Before the first rep walks in.",
    description:
      "Accounts, opportunities, and risks that need your attention across the team before the first rep walks into a customer. You start the day knowing where to look.",
    icon: DashboardSquare01Icon,
    image: "/who/m1.png",
  },
  {
    time: "Throughout the day",
    title: "Field activity, captured live",
    body: "Not at the end of the week.",
    description:
      "Customer visits, meeting notes, follow-ups, opportunities updated as they happen. No more waiting for Friday to find out what Monday looked like.",
    icon: UserGroupIcon,
    image: "/who/m2.png",
  },
  {
    time: "When it matters",
    title: "Otto surfaces what you need to see",
    body: "Before the deal goes cold.",
    description:
      "A competitor appears in a strategic account. A quote sits too long. A champion goes quiet. Otto flags it the moment it shows up, so you can coach the rep in time.",
    icon: Radar01Icon,
    image: "/who/m3.png",
  },
  {
    time: "End of day",
    title: "A summary you can act on",
    body: "Before you close the laptop.",
    description:
      "What happened across the territory. What moved. What stalled. What to coach. Delivered so the next morning starts with direction, not discovery.",
    icon: ChartLineData01Icon,
    image: "/who/m4.png",
  },
];

const benefits = [
  {
    title: "Visibility into field activity",
    description: "Know what is happening without waiting for a Friday update.",
    icon: DashboardSquare01Icon,
  },
  {
    title: "Cleaner CRM data",
    description: "Customer interactions are captured while they are still fresh.",
    icon: Analytics01Icon,
  },
  {
    title: "Better follow-through",
    description: "Ensure opportunities do not stall between customer visits.",
    icon: Target01Icon,
  },
  {
    title: "Earlier risk detection",
    description: "Spot risks before they surface during forecast reviews.",
    icon: Shield01Icon,
  },
  {
    title: "Better coaching conversations",
    description:
      "Spend less time gathering information and more time helping reps improve.",
    icon: UserGroupIcon,
  },
  {
    title: "Fewer pipeline surprises",
    description: "No more discovering stalled deals after the fact.",
    icon: Notification01Icon,
  },
];

const stats = [
  { value: "100%", label: "Visits captured" },
  { value: "5×", label: "Faster risk signal" },
  { value: "0", label: "Status meetings" },
];

export default function Page() {
  return (
    <WhoPage
      role="managers"
      eyebrow="For Managers"
      headline="Know What Is Happening"
      highlight="Without Chasing Updates."
      subtitle="Otto gives sales managers visibility into the field without asking reps for another status update. Every visit gets captured. Every follow-up gets tracked. Every quote action gets flagged. Every risk gets surfaced earlier."
      problemEyebrow="The reality"
      problemHeading="Your team is moving. The signal reaches you late."
      problemLead="Your reps are working hard. The question is whether you see it in time to help."
      problemPoints={problemPoints}
      problemClose="The problem is not activity. The problem is visibility."
      timelineEyebrow="With Otto"
      timelineHeading="A manager's day, with Otto watching the field."
      timelineEntries={timelineEntries}
      benefitEyebrow="What you gain"
      benefitHeading="Coaching that lands before the deal goes cold."
      benefits={benefits}
      stats={stats}
      ctaHeading="See the manager view in 30 minutes."
      ctaBody="Walk through your territory with Otto on the call. We will show you what surfaces, when, and how to coach it. No deck, no setup."
      relatedRoles={[
        { label: "Reps", href: "/who-its-for/reps", icon: HatIcon },
        { label: "CROs", href: "/who-its-for/cros", icon: CrownIcon },
      ]}
    />
  );
}
