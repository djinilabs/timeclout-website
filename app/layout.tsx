import type React from "react";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { PostHogProvider } from "@/components/posthog-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TimeClout - AI-Powered Workforce Management & Shift Scheduling",
  description:
    "Save hours every week with AI-powered team scheduling, shift planning, and leave management. Intelligent automation for healthcare, retail, hospitality, and more. Join our private beta today.",
  keywords: [
    "workforce management",
    "shift scheduling",
    "AI scheduling",
    "leave management",
    "team scheduling software",
    "employee scheduling",
    "workforce planning",
    "schedule optimization",
  ],
  authors: [{ name: "TimeClout" }],
  creator: "TimeClout",
  publisher: "Gordon & Teixeira Lda.",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://timeclout.com"),
  openGraph: {
    title: "TimeClout - AI-Powered Workforce Management & Shift Scheduling",
    description:
      "Save hours every week with AI-powered team scheduling and leave management. Join our private beta today.",
    url: "https://timeclout.com",
    siteName: "TimeClout",
    images: [
      {
        url: "/team-1.jpg",
        width: 1200,
        height: 630,
        alt: "TimeClout - AI-Powered Workforce Management",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TimeClout - AI-Powered Workforce Management",
    description:
      "Save hours every week with AI-powered team scheduling and leave management.",
    images: ["/team-1.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <PostHogProvider>{children}</PostHogProvider>
      </body>
    </html>
  );
}
