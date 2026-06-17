import {
  CursorPointer01Icon,
  GitCompareIcon,
  Target01Icon,
  TimeQuarterPassIcon,
} from "@hugeicons/core-free-icons";
import { FeaturePageShell } from "@/components/feature/feature-page-shell";

export const metadata = {
  title: "Post Call Coaching · Otto",
  description:
    "Feedback within an hour of every customer conversation. Otto turns every call into coaching, next steps, and an updated CRM.",
};

const workflow = [
  {
    step: "01",
    title: "Record",
    description:
      "Otto joins the call and captures what happened. Every speaker. Every question. Every objection. Every commitment. Every pause that mattered. The call does not disappear into memory.",
  },
  {
    step: "02",
    title: "Analyze",
    description:
      "Otto turns the conversation into structured sales intelligence. Buying signals. Objections. Competitor mentions. Pricing questions. Decision process. Stakeholder movement. Next steps. Deal risk. Not just a transcript. The parts that matter.",
  },
  {
    step: "03",
    title: "Coach",
    description:
      "Otto gives feedback from your real calls. What you handled well. What you missed. Where you spoke too much. Where the buyer showed interest. Where the objection was not fully resolved. Where the deal started to stall. No generic framework. Coaching from what actually happened.",
  },
  {
    step: "04",
    title: "Act",
    description:
      "Otto extracts the next steps and keeps the deal moving. Follow-ups drafted. Actions assigned. CRM updated. Risks logged. Meeting notes captured. Next steps tracked. Before you open your laptop tomorrow, the call is already handled.",
  },
];

const capabilities = [
  {
    title: "Buying Signals",
    description:
      "Otto identifies when a buyer shows real interest. Asking about rollout. Discussing pricing. Mentioning internal stakeholders. Comparing vendors. Requesting materials. Sharing timelines. Talking about implementation. You know when interest becomes movement.",
    icon: Target01Icon,
  },
  {
    title: "Objection Analysis",
    description:
      "Otto catches objections and shows how they were handled. Budget. Security. Integration. Timing. ROI. Internal approval. Competing priorities. Competitor comparison. You see which objections were resolved and which ones need follow-up.",
    icon: GitCompareIcon,
  },
  {
    title: "Talk Ratio",
    description:
      "Otto shows who controlled the conversation. How much you spoke. How much the buyer spoke. Where you interrupted. Where you gave space. Where the buyer opened up. Where the call became a monologue. Better calls start with better awareness.",
    icon: Target01Icon,
  },
  {
    title: "Pattern Coaching",
    description:
      "Otto learns from your call history. The moves that close deals. The moments that stall them. The objections you handle well. The questions you avoid. The habits that help. The habits that cost you. Every call becomes part of your coaching loop.",
    icon: GitCompareIcon,
  },
  {
    title: "Deal Confidence",
    description:
      "Otto scores deal confidence from real signals. Not vibes. Not optimism. Not “the call felt good.” Actual conversation data. Stakeholder engagement. Clear pain. Confirmed next step. Buying intent. Decision process. Objection strength. Timeline clarity. You know whether the deal is real.",
    icon: TimeQuarterPassIcon,
  },
  {
    title: "Action Extraction",
    description:
      "Otto captures what needs to happen next. Send the recap. Book the next call. Share the deck. Confirm procurement. Loop in security. Update the CRM. Follow up with the champion. No next step gets buried in the recording.",
    icon: CursorPointer01Icon,
  },
  {
    title: "Manager Coaching",
    description:
      "Managers don't need to listen to every call manually. Otto surfaces the calls worth reviewing. Calls with risk. Calls with strong buying signals. Calls with missed objections. Calls where next steps are weak. Calls where a rep needs coaching. Calls where a deal may be moving. The manager sees where to help.",
    icon: Target01Icon,
  },
];

const comparisonRows = [
  {
    withoutOtto: "Coaching from memory and replayed calls",
    withOtto: "Coaching from what was actually said",
  },
  {
    withoutOtto: "Action items forgotten or half-logged",
    withOtto: "Every action extracted, assigned, and tracked",
  },
  {
    withoutOtto: "Same mistakes every quarter",
    withOtto: "Patterns caught before the next call",
  },
  {
    withoutOtto: "Deal confidence based on vibes",
    withOtto: "Deal confidence scored from real signals",
  },
  {
    withoutOtto: "Manager listens to one call this month",
    withOtto: "Otto listens to all of them",
  },
  {
    withoutOtto: "Objections disappear into the recording",
    withOtto: "Objections are captured and reviewed",
  },
  {
    withoutOtto: "Reps guess what to improve",
    withOtto: "Reps know what to fix next",
  },
  {
    withoutOtto: "Call notes become admin",
    withOtto: "Call notes become coaching",
  },
];

export default function Page() {
  return (
    <FeaturePageShell
      eyebrow="Post Call Coaching"
      headline="Every call,"
      highlight="coached in an hour."
      subtitle="Otto joins your calls, extracts the parts that matter, and turns them into coaching, next steps, and an honest read on every deal. No more re-listening to hour-long recordings. No more guessing why a deal stalled."
      workflowHeading="How it works"
      workflowHeadline="Otto coaches the call before you start the next one."
      workflow={workflow}
      capabilitiesHeading="Capabilities"
      capabilitiesHeadline="What Otto interprets."
      capabilities={capabilities}
      comparisonHeading="Before & After"
      comparisonIntro="How call reviews used to work vs. now."
      comparisonRows={comparisonRows}
      closeHeading="Coach every call without listening to every call."
      closeBody="Otto turns every customer conversation into a coaching session, a next-step plan, and an honest deal read. Reps improve faster. Managers coach better. Deals move sooner."
    />
  );
}
