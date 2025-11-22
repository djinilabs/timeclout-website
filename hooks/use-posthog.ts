"use client";

import posthog from "posthog-js";

export function usePostHog() {
  const trackCTA = (ctaType: string, location: string, additionalProps?: Record<string, any>) => {
    if (typeof window !== "undefined" && posthog.__loaded) {
      posthog.capture("cta_clicked", {
        cta_type: ctaType,
        location: location,
        ...additionalProps,
      });
    }
  };

  const trackBetaAccess = (location: string) => {
    if (typeof window !== "undefined" && posthog.__loaded) {
      posthog.capture("beta_access_requested", {
        location: location,
      });
    }
  };

  return { trackCTA, trackBetaAccess };
}

