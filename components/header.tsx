"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MobileMenu } from "@/components/mobile-menu";

const betaAccessURL = "https://forms.gle/EhXCzmP4tqpLSh547";

interface HeaderProps {
  isHomePage?: boolean;
}

export function Header({ isHomePage = false }: HeaderProps) {
  const getNavLink = (anchor: string) => {
    return isHomePage ? anchor : `/${anchor}`;
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-teal-50/95 backdrop-blur supports-[backdrop-filter]:bg-teal-50/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <img
            src="/timeclout-logo.svg"
            alt="TimeClout"
            className="h-[60px] w-auto"
          />
        </Link>
        <nav className="hidden md:flex gap-6">
          <Link
            href={getNavLink("#features")}
            className="text-sm font-medium hover:text-teal-600 transition-colors"
          >
            Features
          </Link>
          <Link
            href={getNavLink("#how-it-works")}
            className="text-sm font-medium hover:text-teal-600 transition-colors"
          >
            How It Works
          </Link>
          <Link
            href={getNavLink("#use-cases")}
            className="text-sm font-medium hover:text-teal-600 transition-colors"
          >
            Use Cases
          </Link>
          <Link
            href={getNavLink("#faq")}
            className="text-sm font-medium hover:text-teal-600 transition-colors"
          >
            FAQ
          </Link>
          <Link
            href="/blog"
            className="text-sm font-medium hover:text-teal-600 transition-colors"
          >
            Blog
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <Link href={betaAccessURL} className="hidden md:block">
            <Button
              size="sm"
              className="bg-teal-600 hover:bg-teal-700 text-white"
            >
              Request Beta Access
            </Button>
          </Link>
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
