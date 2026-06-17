import {
  CursorPointer01Icon,
  GitCompareIcon,
  Target01Icon,
  TimeQuarterPassIcon,
} from "@hugeicons/core-free-icons";
import { FeaturePageShell } from "@/components/feature/feature-page-shell";

export const metadata = {
  title: "Pre-Meeting Brief · Otto",
  description:
    "Walk into every visit already knowing the buyer. Otto gives you the account context, deal history, and questions that move the conversation forward.",
};

const workflow = [
  {
    step: "01",
    title: "Detect",
    description:
      "Otto sees the meeting on your calendar. New meeting booked. Prospect call scheduled. Follow-up added. Demo confirmed. Renewal discussion coming up. Before you even think about preparing, Otto starts.",
  },
  {
    step: "02",
    title: "Synthesise",
    description:
      "Otto pulls the context into one place. CRM notes. Past calls. Emails. Meeting history. Shared documents. Calendar activity. Company news. Hiring signals. Funding updates. Product launches. Competitor movement. Everything you would normally hunt for is already read.",
  },
  {
    step: "03",
    title: "Hypothesise",
    description:
      "Otto doesn't give you generic discovery questions. It gives you questions tuned to this account, this stakeholder, this deal stage, and this moment. Questions to test urgency. Questions to find blockers. Questions to uncover budget. Questions to identify decision makers. Questions that move the deal forward.",
  },
  {
    step: "04",
    title: "Deliver",
    description:
      "Thirty minutes before the call, Otto sends the brief to your Slack and inbox. One page. Already synthesised. Already prioritised. Ready to use. You open it, read it, and walk in prepared.",
  },
];

const capabilities = [
  {
    title: "Account Summary",
    description:
      "Otto gives you the account context before the call starts. What the company does. Why the meeting matters. Where the deal stands. What changed recently. What the account likely cares about now. You don't waste the first ten minutes catching up.",
    icon: Target01Icon,
  },
  {
    title: "Deal History",
    description:
      "Otto remembers where the conversation left off. Previous calls. Open questions. Promised follow-ups. Past objections. Stakeholder comments. Next steps discussed. You continue the deal instead of restarting it.",
    icon: GitCompareIcon,
  },
  {
    title: "Stakeholder Mapping",
    description:
      "Otto maps the people around the deal. Champions. Blockers. Decision makers. Influencers. Silent stakeholders. New participants. You know who matters before they enter the call.",
    icon: CursorPointer01Icon,
  },
  {
    title: "External Signals",
    description:
      "Otto watches what changed outside your CRM. Funding. Hiring. News. Leadership changes. Product launches. Market shifts. Competitor movement. You walk in with context your prospect didn't expect you to have.",
    icon: TimeQuarterPassIcon,
  },
  {
    title: "Hypothesis-Driven Questions",
    description:
      "Otto gives you questions built for the actual meeting. Not generic discovery. Not recycled sales prompts. Questions designed to test the deal, uncover risk, and move the conversation forward.",
    icon: Target01Icon,
  },
  {
    title: "Objection Prep",
    description:
      "Otto flags likely objections before they appear. Budget concerns. Timing issues. Security questions. Integration worries. Competing priorities. Internal approval risk. You are not surprised mid-call.",
    icon: GitCompareIcon,
  },
  {
    title: "Next-Best Action",
    description:
      "Otto tells you what the meeting should accomplish. Confirm urgency. Find the decision maker. Handle the objection. Push for next step. Revive a stalled deal. Protect a champion. Every meeting gets a purpose.",
    icon: CursorPointer01Icon,
  },
];

const comparisonRows = [
  {
    withoutOtto: "Ten-minute cram before the call",
    withOtto: "One-page brief thirty minutes out",
  },
  {
    withoutOtto: "Switching between LinkedIn, email, CRM, and notes",
    withOtto: "Everything already synthesised",
  },
  {
    withoutOtto: "Generic discovery questions",
    withOtto: "Three questions tuned to this deal",
  },
  {
    withoutOtto: "Trying to remember the last conversation",
    withOtto: "Walking in knowing exactly where you left off",
  },
  {
    withoutOtto: "Missing new stakeholders",
    withOtto: "Stakeholders mapped before the call",
  },
  {
    withoutOtto: "Getting surprised by objections",
    withOtto: "Likely objections flagged in advance",
  },
  {
    withoutOtto: "Hoping the meeting goes well",
    withOtto: "Knowing what the meeting needs to achieve",
  },
];

export default function Page() {
  return (
    <FeaturePageShell
      eyebrow="Pre-Meeting Brief"
      headline="You walk in"
      highlight="already prepared."
      subtitle="Otto reads the deal, the buyer, the account, and the market before your meeting starts. By the time you join the call, you know what to say, who you are talking to, and what the meeting needs to accomplish."
      workflowHeading="How it works"
      workflowHeadline="Otto prepares the brief before you do."
      workflow={workflow}
      capabilitiesHeading="Capabilities"
      capabilitiesHeadline="What Otto builds."
      capabilities={capabilities}
      comparisonHeading="Before & After"
      comparisonIntro="How mornings used to feel vs. now."
      comparisonRows={comparisonRows}
      closeHeading="Never wing another meeting again."
      closeBody="Otto does the research so you can do the selling. Open the brief, walk in ready, and close on the next step instead of catching up on context."
    />
  );
}
