import { WhoPage } from "@/components/who/who-page";

export const metadata = {
  title: "For CROs · Otto",
  description:
    "Turn field activity into predictable revenue. Otto helps industrial revenue teams execute consistently across the field.",
};

const beforeItems = [
  "Every quarter starts with a plan.",
  "Then execution gaps appear.",
  "Follow-ups slip.",
  "Quotes stall.",
  "Customer conversations never make it into CRM.",
  "New opportunities are discovered too late.",
  "Risks surface during forecast reviews instead of when they first appear.",
  "The problem is not effort.",
  "It is execution at scale.",
  "Small gaps in field follow-through become large gaps in revenue.",
];

const dayEntries = [
  {
    time: "Morning",
    description:
      "See where revenue is moving. Understand which opportunities need attention and where risk is building.",
  },
  {
    time: "Throughout The Day",
    description:
      "Every customer interaction strengthens pipeline visibility. Every follow-up is captured. Every opportunity becomes easier to track. Every rep operates with the same level of preparation and follow-through.",
  },
  {
    time: "End Of Day",
    description:
      "Know what's moving. What's stalled. What's at risk. And where new opportunities are emerging. Without waiting for pipeline reviews or forecast meetings.",
  },
];

const benefits = [
  {
    title: "Pipeline visibility.",
    description: "A clearer picture of what's actually happening in the field.",
  },
  {
    title: "Forecast confidence.",
    description: "Fewer surprises and better inputs into revenue planning.",
  },
  {
    title: "Consistent execution.",
    description:
      "Reduce the variability between top performers and the rest of the team.",
  },
  {
    title: "Opportunity capture.",
    description: "Ensure more customer conversations become revenue opportunities.",
  },
  {
    title: "Revenue follow-through.",
    description:
      "Less revenue lost because quotes, renewals, and next steps fell through the cracks.",
  },
  {
    title: "Fewer surprises at quarter-end.",
    description: "Spot gaps before they show up in the forecast.",
  },
];

export default function Page() {
  return (
    <WhoPage
      eyebrow="For CROs"
      headline="Turn Field Activity Into"
      highlight="Predictable Revenue."
      subtitle="Otto helps industrial revenue teams execute consistently across the field. Every rep prepares better. Every customer visit gets captured. Every follow-up moves faster. Every opportunity becomes easier to track."
      beforeHeading="The Problem"
      beforeIntro="Every quarter starts with a plan. Then execution gaps appear."
      beforeItems={beforeItems}
      dayHeading="With Otto"
      dayEntries={dayEntries}
      benefitHeading="What Improves"
      benefits={benefits}
    />
  );
}
