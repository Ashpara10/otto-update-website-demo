export const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

export const IS_GA_DEBUG_MODE = process.env.NEXT_PUBLIC_GA_DEBUG_MODE === "true";

export const SOURCE_PAGES = [
  "homepage_hero",
  "homepage_closer",
  "manager_page",
  "cro_page",
  "rep_page",
  "pricing_page",
  "feature_morning_briefing",
  "feature_pre_meeting",
  "feature_crm_updates",
  "feature_sales_coaching",
  "feature_sales_brain",
  "feature_product_inquiry",
  "feature_trade_show",
] as const;

export type SourcePage = (typeof SOURCE_PAGES)[number];

type GtagFn = (...args: unknown[]) => void;

declare global {
  interface Window {
    gtag?: GtagFn;
    dataLayer?: unknown[];
  }
}

function gtag(...args: unknown[]) {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(args);
}

export function trackEvent(name: string, params?: Record<string, unknown>) {
  if (typeof window === "undefined" || !GA_ID) return;
  if (params) {
    gtag("event", name, params);
  } else {
    gtag("event", name);
  }
}

export function trackBookDemoClick(sourcePage: string) {
  trackEvent("book_a_demo_click", { source_page: sourcePage });
}

export function trackBookDemoSubmit() {
  trackEvent("book_a_demo_submit");
}

export function trackFormStart() {
  trackEvent("form_start");
}

export function trackPricingView() {
  trackEvent("pricing_view");
}
