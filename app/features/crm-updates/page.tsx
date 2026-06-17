import {
  CursorPointer01Icon,
  GitCompareIcon,
  Target01Icon,
  TimeQuarterPassIcon,
} from "@hugeicons/core-free-icons";
import { FeaturePageShell } from "@/components/feature/feature-page-shell";

export const metadata = {
  title: "CRM Updates · Otto",
  description:
    "Every call, quote, and note lands in the CRM automatically. Otto writes your CRM so you don't have to.",
};

const workflow = [
  {
    step: "01",
    title: "Ingest",
    description:
      "Otto captures the raw sales activity. Call notes. Email text. Meeting snippets. Calendar activity. Follow-up threads. CRM history. Anything important said, sent, promised, or changed becomes usable context.",
  },
  {
    step: "02",
    title: "Extract",
    description:
      "Otto turns messy activity into structured CRM data. Contacts. Deal stages. Deal value. Next steps. Timelines. Pain points. Objections. Competitor mentions. Stakeholders. Not a wall of notes. Clean fields your CRM can actually use.",
  },
  {
    step: "03",
    title: "Justify",
    description:
      "Otto explains every suggested change. Reason. Source. Confidence level. Supporting context. No mystery edits. No unexplained stage changes. No guessing why the CRM moved. You see the logic before the update lands.",
  },
  {
    step: "04",
    title: "Update",
    description:
      "Otto applies the update based on your rules. Routine changes can happen automatically. High-impact changes pause for approval. You decide the guardrails. Otto follows them.",
  },
];

const capabilities = [
  {
    title: "Call Logging",
    description:
      "Otto logs calls automatically. What was discussed. What was promised. What the prospect asked. What needs to happen next. The call does not disappear into memory.",
    icon: TimeQuarterPassIcon,
  },
  {
    title: "Deal Updates",
    description:
      "Otto updates deal fields when the evidence supports it. Stage. Value. Close date. Next step. Probability. Pain point. Buying process. Decision criteria. Your pipeline moves when the deal moves.",
    icon: Target01Icon,
  },
  {
    title: "Contact Updates",
    description:
      "Otto keeps contact records current. New stakeholders. Changed roles. Decision makers. Champions. Blockers. Silent participants. The buying committee stops hiding in email threads.",
    icon: CursorPointer01Icon,
  },
  {
    title: "Next-Step Capture",
    description:
      "Otto captures the next action before it gets lost. Send proposal. Book demo. Share security docs. Follow up with champion. Loop in RevOps. Confirm budget owner. No more “I’ll add it later.”",
    icon: TimeQuarterPassIcon,
  },
  {
    title: "Change Justification",
    description:
      "Every CRM update includes the reason behind it. What changed. What triggered the update. Where the evidence came from. How confident Otto is. Managers get truth, not vibes.",
    icon: GitCompareIcon,
  },
  {
    title: "Approval Flows",
    description:
      "You control what Otto can update automatically. Low-risk updates can go straight into the CRM. Sensitive changes wait for approval. Stage changes. Forecast changes. Deal value changes. Close date changes. Important contact changes. Automation moves fast. You stay in control.",
    icon: GitCompareIcon,
  },
  {
    title: "CRM Hygiene",
    description:
      "Otto keeps your CRM clean in the background. Fewer empty fields. Fewer stale stages. Fewer missing next steps. Fewer forgotten contacts. Fewer update reminders. Your CRM becomes useful because it stays alive.",
    icon: Target01Icon,
  },
];

const comparisonRows = [
  {
    withoutOtto: "End-of-week CRM cleanup ritual",
    withOtto: "CRM updates after every interaction",
  },
  {
    withoutOtto: "Pipeline data is days old",
    withOtto: "Pipeline reflects reality",
  },
  {
    withoutOtto: "Reps forget next steps",
    withOtto: "Otto captures them automatically",
  },
  {
    withoutOtto: "No one knows why a stage changed",
    withOtto: "Every change has a reason on record",
  },
  {
    withoutOtto: "Managers chase reps for updates",
    withOtto: "Managers see what actually happened",
  },
  {
    withoutOtto: "Sunday night spent typing into the CRM",
    withOtto: "Sunday night spent anywhere else",
  },
  {
    withoutOtto: "Forecasts based on stale data",
    withOtto: "Forecasts based on current activity",
  },
  {
    withoutOtto: "CRM hygiene depends on discipline",
    withOtto: "CRM hygiene runs in the background",
  },
];

export default function Page() {
  return (
    <FeaturePageShell
      eyebrow="CRM Updates"
      headline="Your CRM,"
      highlight="written for you."
      subtitle="Otto listens to your calls, reads your emails, and updates every field the moment something changes. Stages, values, next steps, contacts, and notes stay current without the Sunday night cleanup."
      workflowHeading="How it works"
      workflowHeadline="Otto updates the CRM between the call and the next one."
      workflow={workflow}
      capabilitiesHeading="Capabilities"
      capabilitiesHeadline="What Otto handles."
      capabilities={capabilities}
      comparisonHeading="Before & After"
      comparisonIntro="How CRM hygiene used to work vs. now."
      comparisonRows={comparisonRows}
      closeHeading="Stop typing into the CRM. Start selling."
      closeBody="Otto writes the CRM while you do the actual work. The pipeline stays accurate, the forecast stays honest, and your reps get their evenings back."
    />
  );
}
