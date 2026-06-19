export interface Role {
  title: string;
  tag: string;
  blurb: string;
  salary: string;
  salaryInr: number;
  location: string;
}

export const roles: Role[] = [
  {
    title: "Customer Outcomes Lead",
    tag: "CSM · Founding hire",
    blurb:
      "You'll own how Otto's first cohort of sales teams adopt, expand, and stick. Voice-first onboarding, weekly outcomes, and the playbook every CSM after you will run.",
    salary: "₹18L",
    salaryInr: 1800000,
    location: "Mumbai · Hybrid",
  },
  {
    title: "Founding Designer",
    tag: "UI/UX · Creative lead",
    blurb:
      "Otto's surface is half product, half cinema dashboards, voice calls, morning briefs. You'll shape what it feels like to have an AI chief of staff, from a 3 AM Slack ping to a live call mid-deal.",
    salary: "₹15L",
    salaryInr: 1500000,
    location: "Mumbai · Hybrid",
  },
  {
    title: "Senior Architect",
    tag: "Engineering · Founding hire",
    blurb:
      "You'll architect the systems behind Otto's six agents voice infra, memory, signal pipelines, real-time CRM sync. Python/FastAPI + async Postgres + Celery + a lot of LLM orchestration.",
    salary: "₹25L",
    salaryInr: 2500000,
    location: "Mumbai · Hybrid",
  },
];

export const APPLY_EMAIL = "careers@ottosales.ai";
