import {
  AiBrain01Icon,
  Analytics01Icon,
  ChartLineData01Icon,
  CrownIcon,
  DashboardSquare01Icon,
  GlobalSearchIcon,
  GroupIcon,
  HatIcon,
  Target01Icon,
  Time01Icon,
} from "@hugeicons/core-free-icons";
import { WhoPage } from "@/components/who/who-page";

export const metadata = {
  title: "For CROs · Otto",
  description:
    "Turn field activity into predictable revenue. Otto helps industrial revenue teams execute consistently across the field.",
};

const problemPoints = [
  "Every quarter starts with a plan.",
  "Then execution gaps appear.",
  "Follow-ups slip. Quotes stall.",
  "Customer conversations never make it into CRM.",
  "New opportunities are discovered too late.",
  "Risks surface during forecast reviews instead of when they first appear.",
  "The problem is not effort. It is execution at scale.",
  "Small gaps in field follow-through become large gaps in revenue.",
];

const timelineEntries = [
  {
    time: "Morning",
    title: "See where revenue is moving",
    body: "Every quarter, in one view.",
    description:
      "Which opportunities are advancing. Where risk is building. Where attention is needed this week. The forecast starts the day, not the meeting.",
    icon: DashboardSquare01Icon,
    image: "/who/c1.png",
  },
  {
    time: "Throughout the day",
    title: "Every rep, operating at the same standard",
    body: "Top performers, every performer.",
    description:
      "Visits captured. Follow-ups logged. Opportunities updated. Reps prepare, follow through, and report the same way across territories, across regions, across the team.",
    icon: GlobalSearchIcon,
    image: "/who/c2.png",
  },
  {
    time: "When it matters",
    title: "Otto connects the field to the forecast",
    body: "Signals you can defend.",
    description:
      "Real conversation data. Real stakeholder movement. Real deal risk. Pipeline signals you can defend in the boardroom because they came from the field, not a guess.",
    icon: ChartLineData01Icon,
    image: "/who/c3.png",
  },
  {
    time: "Quarter close",
    title: "A pipeline you can stand behind",
    body: "No final-week surprises.",
    description:
      "What moved. What stalled. What to push. What to write off. By the time the quarter closes, you already know the number and how to explain it.",
    icon: Target01Icon,
    image: "/who/c4.png",
  },
];

const benefits = [
  {
    title: "Pipeline visibility",
    description: "A clearer picture of what is actually happening in the field.",
    icon: DashboardSquare01Icon,
  },
  {
    title: "Forecast confidence",
    description: "Fewer surprises and better inputs into revenue planning.",
    icon: ChartLineData01Icon,
  },
  {
    title: "Consistent execution",
    description: "Reduce the variability between top performers and the rest of the team.",
    icon: AiBrain01Icon,
  },
  {
    title: "Opportunity capture",
    description: "Ensure more customer conversations become revenue opportunities.",
    icon: Analytics01Icon,
  },
  {
    title: "Revenue follow-through",
    description: "Less revenue lost because quotes, renewals, and next steps fell through the cracks.",
    icon: Target01Icon,
  },
  {
    title: "Fewer surprises at quarter-end",
    description: "Spot gaps before they show up in the forecast.",
    icon: Time01Icon,
  },
];

const stats = [
  { value: "94%", label: "Forecast accuracy" },
  { value: "2.1×", label: "Pipeline coverage" },
  { value: "0", label: "Stalled surprises" },
];

export default function Page() {
  return (
    <WhoPage
      role="cros"
      eyebrow="For CROs"
      headline="Turn Field Activity Into"
      highlight="Predictable Revenue."
      subtitle="Otto helps industrial revenue teams execute consistently across the field. Every rep prepares better. Every customer visit gets captured. Every follow-up moves faster. Every opportunity becomes easier to track."
      problemEyebrow="The reality"
      problemHeading="Plans look good. Execution drifts."
      problemLead="Your forecast is only as good as the field activity behind it."
      problemPoints={problemPoints}
      problemClose="The problem is not effort. It is execution at scale."
      timelineEyebrow="With Otto"
      timelineHeading="A CRO's quarter, with the field fully connected."
      timelineEntries={timelineEntries}
      benefitEyebrow="What improves"
      benefitHeading="Pipeline signals you can stand behind."
      benefits={benefits}
      stats={stats}
      ctaHeading="See the CRO view in 30 minutes."
      ctaBody="Walk through a quarter with Otto in the field. We will show you how the forecast, the territory, and the team stay connected. No deck, no setup."
      relatedRoles={[
        { label: "Reps", href: "/who-its-for/reps", icon: HatIcon },
        { label: "Managers", href: "/who-its-for/managers", icon: GroupIcon },
      ]}
    />
  );
}
