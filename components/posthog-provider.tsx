"use client";

import { useEffect } from "react";
import posthog from "posthog-js";

export function PostHogProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Only initialize on client side
    if (typeof window === "undefined") return;

    const posthogKey = process.env.NEXT_PUBLIC_POSTHOG_KEY;
    const posthogHost = process.env.NEXT_PUBLIC_POSTHOG_HOST;

    if (!posthogKey || !posthogHost) {
      if (process.env.NODE_ENV === "development") {
        console.warn("PostHog key or host not configured");
      }
      return;
    }

    // Initialize PostHog
    if (!posthog.__loaded) {
      posthog.init(posthogKey, {
        api_host: posthogHost,
        loaded: (posthog) => {
          if (process.env.NODE_ENV === "development") {
            console.log("PostHog initialized");
          }
        },
        capture_pageview: true, // Enable automatic pageview tracking
        autocapture: true, // Enable autocapture for clicks
      });
    }

    // Track initial pageview
    posthog.capture("$pageview", {
      $current_url: window.location.href,
    });

    // Set up page leave tracking
    const handleBeforeUnload = () => {
      posthog.capture("$pageleave", {
        $current_url: window.location.href,
      });
    };

    // Track page visibility changes (when user switches tabs, etc.)
    const handleVisibilityChange = () => {
      if (document.hidden) {
        posthog.capture("$pageleave", {
          $current_url: window.location.href,
        });
      }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);
    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  return <>{children}</>;
}

