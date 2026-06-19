"use client";

import { useEffect } from "react";
import { trackPricingView } from "@/lib/gtag";

export function PricingViewTracker() {
  useEffect(() => {
    trackPricingView();
  }, []);
  return null;
}
