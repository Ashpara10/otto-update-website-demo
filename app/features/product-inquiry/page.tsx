import {
  ArtificialIntelligence04Icon,
  ChartAverageIcon,
  CursorPointer01Icon,
  GitCompareIcon,
  Target01Icon,
} from "@hugeicons/core-free-icons";
import { FeaturePageShell } from "@/components/feature/feature-page-shell";

export const metadata = {
  title: "Product Inquiry · Otto",
  description:
    "Reps ask, Otto answers from your real product catalog. No more guessing specs on a customer call.",
};

const workflow = [
  {
    step: "01",
    title: "Index",
    description:
      "Otto reads your real product catalog. SKUs, specs, pricing tiers, lead times, compatibility matrices, datasheets, install guides. Anything a rep would need to answer a buyer question.",
  },
  {
    step: "02",
    title: "Listen",
    description:
      "Otto hears the question in the call, in the field, or in your team chat. Specs. Pricing. Lead time. Compatibility. Compliance. Whatever the buyer is asking, Otto hears it.",
  },
  {
    step: "03",
    title: "Answer",
    description:
      "Otto answers from your catalog, not from generic knowledge. The right SKU. The right lead time. The right tier. The right install guide. With the source attached so the rep can verify in one tap.",
  },
  {
    step: "04",
    title: "Learn",
    description:
      "Every unanswered question becomes a flagged gap. Otto tells the team which products need a datasheet, which SKUs are out of date, which answers the reps are improvising. Your catalog gets sharper over time.",
  },
];

const capabilities = [
  {
    title: "Catalog-Backed Answers",
    description:
      "Otto only answers from your real product catalog. No hallucinated specs, no generic recommendations. Every answer includes the source SKU and the doc it pulled from so reps can verify.",
    icon: CursorPointer01Icon,
  },
  {
    title: "Field-Ready Specs",
    description:
      "Otto answers in plain language the rep can repeat on the spot. Compatibility, lead time, weight, dimensions, certifications. No more \"let me check with the office and get back to you.\"",
    icon: Target01Icon,
  },
  {
    title: "Voice and Chat",
    description:
      "Reps can ask Otto in the call, in a Slack thread, or through the dashboard. Same answer, same source. Otto works wherever the rep is, not in a separate tool they have to remember to open.",
    icon: ChartAverageIcon,
  },
  {
    title: "Pricing Tier Lookup",
    description:
      "Otto pulls the right pricing tier, the right volume discount, the right contract term. Reps stop guessing on volume. Buyers stop getting the wrong number three days later.",
    icon: GitCompareIcon,
  },
  {
    title: "Catalog Gap Reports",
    description:
      "When Otto can't answer, that's data. Which products have no datasheet. Which SKUs are out of date. Which questions the reps are improvising answers to. The team closes the gaps over time.",
    icon: ArtificialIntelligence04Icon,
  },
];

const comparisonRows = [
  {
    withoutOtto: "Putting the buyer on hold to check the catalog",
    withOtto: "Otto answers in the time it takes to ask",
  },
  {
    withoutOtto: "Guessing specs from memory",
    withOtto: "Every answer pulls from your real catalog",
  },
  {
    withoutOtto: "Wrong pricing tier quoted three days later",
    withOtto: "Right pricing tier, source attached, first call",
  },
  {
    withoutOtto: "\"Let me check with the office\"",
    withOtto: "\"Otto's got the answer, give me one second\"",
  },
  {
    withoutOtto: "Buyers waiting on email follow-ups",
    withOtto: "Buyers getting answers live on the call",
  },
  {
    withoutOtto: "Catalog drift nobody notices",
    withOtto: "Gap reports flag the drift to the team",
  },
];

export default function Page() {
  return (
    <FeaturePageShell
      eyebrow="Product Inquiry"
      headline="Reps ask."
      highlight="Otto answers."
      subtitle="Otto indexes your real product catalog and answers buyer questions on the call. The right SKU, the right pricing tier, the right lead time. With the source attached so reps can verify in one tap."
      workflowHeading="How it works"
      workflowHeadline="Otto answers from your real catalog, on the call."
      workflow={workflow}
      capabilitiesHeading="Capabilities"
      capabilitiesHeadline="What Otto pulls from your catalog."
      capabilities={capabilities}
      comparisonHeading="Before & After"
      comparisonIntro="How product questions used to work vs. now."
      comparisonRows={comparisonRows}
      closeHeading="Stop putting buyers on hold."
      closeBody="Otto turns your catalog into a live answer engine. Reps walk into every call with the right answer. Buyers get the right number on the first call. Your catalog gets sharper every week."
    />
  );
}
