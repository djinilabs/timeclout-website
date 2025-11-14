"use client";

import Link from "next/link";

const betaAccessURL = "https://forms.gle/EhXCzmP4tqpLSh547";

export function Footer() {
  return (
    <footer className="border-t py-8 md:py-12 bg-white">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <img
                src="/timeclout-logo.svg"
                alt="TimeClout"
                className="h-20 w-auto"
              />
            </div>
            <p className="text-sm text-muted-foreground">
              TimeClout - Simplifying workforce management with AI-powered
              scheduling and leave management.
            </p>
            <div className="flex gap-4">
              <Link
                href="https://x.com/TimeClout"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-teal-600 transition-colors"
                aria-label="Twitter"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </Link>
              <Link
                href="https://www.linkedin.com/company/110030939"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-teal-600 transition-colors"
                aria-label="LinkedIn"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </Link>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="font-semibold text-teal-900">Product</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/#features" className="hover:text-teal-600 transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/#how-it-works" className="hover:text-teal-600 transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="/#use-cases" className="hover:text-teal-600 transition-colors">
                  Use Cases
                </Link>
              </li>
              <li>
                <Link href={betaAccessURL} className="hover:text-teal-600 transition-colors">
                  Beta Access
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="font-semibold text-teal-900">Company</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/#faq" className="hover:text-teal-600 transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="mailto:support@timeclout.com" className="hover:text-teal-600 transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-teal-600 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-teal-600 transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="font-semibold text-teal-900">Legal</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/terms-of-service" className="hover:text-teal-600 transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/privacy-statement" className="hover:text-teal-600 transition-colors">
                  Privacy Statement
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-teal-600 transition-colors">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-muted-foreground mb-4 md:mb-0">
            © 2025 Gordon & Teixeira Lda. All rights reserved.
          </p>
          <div className="text-xs text-muted-foreground">
            <Link href="mailto:support@timeclout.com" className="hover:text-teal-600 transition-colors">
              support@timeclout.com
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

