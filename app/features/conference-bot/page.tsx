import {
  ArtificialIntelligence04Icon,
  ChartAverageIcon,
  CursorPointer01Icon,
  Target01Icon,
  TimeQuarterPassIcon,
} from "@hugeicons/core-free-icons";
import { FeaturePageShell } from "@/components/feature/feature-page-shell";

export const metadata = {
  title: "Conference Bot · Otto",
  description:
    "Otto listens on industry calls and surfaces what changed. Track speakers, talking points, and follow-ups without taking notes.",
};

const workflow = [
  {
    step: "01",
    title: "Join",
    description:
      "Otto joins the industry call, partner briefing, or analyst event when you add it to your calendar. No setup. No bot to teach. No templates. Otto is in the room, listening for what matters to your deals.",
  },
  {
    step: "02",
    title: "Capture",
    description:
      "Otto records the call and pairs every statement with the speaker and the moment. Pricing moves. Roadmap hints. Customer wins. Competitive claims. New contacts. Anything that can change a deal stays attached to the right account.",
  },
  {
    step: "03",
    title: "Distil",
    description:
      "Otto turns a two-hour call into a one-page brief. Who said what. What changed. Which claims are credible. Which are noise. Which mentions affect your pipeline. Tagged by account, by competitor, by deal stage.",
  },
  {
    step: "04",
    title: "Route",
    description:
      "Otto pushes the takeaways to the reps who care. Slack digests for the team. CRM notes for the account. Briefing notes for the next call. No more \"I missed that call, what happened?\"",
  },
];

const capabilities = [
  {
    title: "Speaker-Tagged Transcripts",
    description:
      "Every statement is paired with the speaker and the moment it was said. Search the transcript by account, by topic, by competitor. Find the exact quote in seconds instead of scrubbing through audio.",
    icon: CursorPointer01Icon,
  },
  {
    title: "Account & Competitor Tags",
    description:
      "Otto tags every mention with the relevant account, competitor, product, or theme. You see at a glance which of your deals the call touched and which reps need a heads-up.",
    icon: Target01Icon,
  },
  {
    title: "One-Page Briefs",
    description:
      "Long calls become one-page briefs. The five things that matter. The three claims to verify. The two accounts to follow up. The one signal that actually changed your pipeline.",
    icon: TimeQuarterPassIcon,
  },
  {
    title: "Routing to Reps",
    description:
      "Otto pushes the relevant parts of the call to the reps who care. A mention of an account lands in that rep's inbox. A competitive claim lands on the manager's desk. No more group-wide noise.",
    icon: ArtificialIntelligence04Icon,
  },
  {
    title: "Historical Search",
    description:
      "Every call Otto joins is searchable forever. Find every mention of a competitor. Find every commitment an analyst made. Find every reference to a deal that closed six months ago.",
    icon: ChartAverageIcon,
  },
];

const comparisonRows = [
  {
    withoutOtto: "Skipping the call to do actual work",
    withOtto: "Otto attends so you don't have to",
  },
  {
    withoutOtto: "Two-hour calls nobody re-listens to",
    withOtto: "One-page brief everyone actually reads",
  },
  {
    withoutOtto: "Notes scattered across three apps",
    withOtto: "Searchable transcript with speaker tags",
  },
  {
    withoutOtto: "Hearing about a competitor mention a week later",
    withOtto: "Same-day digest to the right rep",
  },
  {
    withoutOtto: "Asking the team \"did anyone catch that call?\"",
    withOtto: "Search the transcript, find the answer in seconds",
  },
  {
    withoutOtto: "Screenshots buried in your camera roll",
    withOtto: "Slides attached to the right brief",
  },
];

export default function Page() {
  return (
    <FeaturePageShell
      eyebrow="Conference Bot"
      headline="The industry call,"
      highlight="summarised before lunch."
      subtitle="Otto joins the analyst briefings, partner summits, and industry calls you can't attend. By the time you finish your second coffee, you have a one-page brief, tagged by account and competitor, with the right reps looped in automatically."
      workflowHeading="How it works"
      workflowHeadline="Otto turns long industry calls into routed briefs."
      workflow={workflow}
      capabilitiesHeading="Capabilities"
      capabilitiesHeadline="What Otto captures on every call."
      capabilities={capabilities}
      comparisonHeading="Before & After"
      comparisonIntro="How industry call follow-up used to work vs. now."
      comparisonRows={comparisonRows}
      closeHeading="Stop taking notes. Start closing on what changed."
      closeBody="Otto turns every industry call into routing-ready intelligence. The right rep sees the right signal the same day. Nothing slips through because nobody had time to re-listen."
    />
  );
}
