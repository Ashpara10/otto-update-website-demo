import {
  ArtificialIntelligence04Icon,
  ChartAverageIcon,
  CursorPointer01Icon,
  Target01Icon,
  TimeQuarterPassIcon,
} from "@hugeicons/core-free-icons";
import { FeaturePageShell } from "@/components/feature/feature-page-shell";

export const metadata = {
  title: "Morning Briefing · Otto",
  description:
    "Start every rep's day with the accounts that matter. Otto reads the market, your pipeline, and the signals that change deals overnight.",
};

const workflow = [
  {
    step: "01",
    title: "Watch",
    description:
      "Otto tracks the signals that matter across your accounts and market. News. Press releases. Funding rounds. Leadership changes. Product launches. Hiring patterns. Competitor movement. The world moves overnight. Otto keeps watch.",
  },
  {
    step: "02",
    title: "Filter",
    description:
      "Most market updates are noise. Otto filters out generic headlines and keeps only the signals that matter to your pipeline. Not everything that happened. Only what can change a conversation, a deal, or a next step.",
  },
  {
    step: "03",
    title: "Connect",
    description:
      "Otto connects every signal to a specific account, deal, contact, or sales conversation. So you don't just hear that something changed. You know which deal it affects. Which stakeholder to call. Which angle to use. Which risk to watch.",
  },
  {
    step: "04",
    title: "Direct",
    description:
      "Otto turns every useful signal into a recommended next move. A message worth sending. A call worth making. A question worth asking. A meeting worth pushing. A line worth using. You start the day knowing what to do.",
  },
];

const capabilities = [
  {
    title: "News and Press",
    description:
      "Otto watches press releases, company announcements, earnings updates, product launches, and leadership news. So you know when an account changes direction before your next call.",
    icon: CursorPointer01Icon,
  },
  {
    title: "Funding and Growth Signals",
    description:
      "Otto tracks funding rounds, acquisitions, expansion news, hiring surges, and new market entries. So you know when an account is growing, shifting, or ready for a new conversation.",
    icon: ChartAverageIcon,
  },
  {
    title: "Competitor Movement",
    description:
      "Otto watches pricing changes, feature drops, partnerships, hiring patterns, positioning shifts, and launch announcements from the companies you sell against. So you never hear about a competitor first from your prospect.",
    icon: TimeQuarterPassIcon,
  },
  {
    title: "Account Movement",
    description:
      "Otto tracks what is changing around each account in your pipeline. New executives. New priorities. New initiatives. New risks. New reasons to reach out. Your account list stops being static.",
    icon: ArtificialIntelligence04Icon,
  },
  {
    title: "Deal Relevance",
    description:
      "Otto doesn't send random updates. It ties signals back to your active deals, meetings, contacts, and pipeline priorities. So every briefing tells you what matters and where to act.",
    icon: Target01Icon,
  },
];

const comparisonRows = [
  {
    withoutOtto: "Scrolling through news before your first call",
    withOtto: "One briefing before your first sip of coffee",
  },
  {
    withoutOtto: "Missing the signal that should have changed your pitch",
    withOtto: "Otto catches it and gives you the line to use",
  },
  {
    withoutOtto: "Hearing about a competitor from the prospect",
    withOtto: "Hearing about it from Otto before the call",
  },
  {
    withoutOtto: "Using generic talking points across accounts",
    withOtto: "Walking in with account-specific context",
  },
  {
    withoutOtto: "Starting the day with information overload",
    withOtto: "Starting with a clear next move",
  },
  {
    withoutOtto: "Searching for what changed",
    withOtto: "Knowing what changed and what to do about it",
  },
];

export default function Page() {
  return (
    <FeaturePageShell
      eyebrow="Morning Briefing"
      headline="Wake up"
      highlight="already briefed."
      subtitle="While you sleep, Otto reads the market, your accounts, your competitors, and every signal around your pipeline. By the time your coffee is ready, you know what changed, why it matters, and what to do next. No news hunting. No tab-hopping. No walking into calls cold."
      workflowHeading="How it works"
      workflowHeadline="Otto reads the market before your day begins."
      workflow={workflow}
      capabilitiesHeading="Capabilities"
      capabilitiesHeadline="Everything Otto watches before you wake up."
      capabilities={capabilities}
      comparisonHeading="Before & After"
      comparisonIntro="How mornings used to feel vs. now."
      comparisonRows={comparisonRows}
      closeHeading="Start every sales day already ahead."
      closeBody="The Morning Briefing gives you the account movement, competitor updates, market signals, and next-best actions that matter to your pipeline. Not more news. Not another dashboard. Not a generic sales newsletter. A daily sales briefing built around what you need to move deals."
    />
  );
}
