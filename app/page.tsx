import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Calendar,
  Users,
  BarChart3,
  Bell,
  Smartphone,
  CheckCircle2,
} from "lucide-react";

const betaAccessURL = "https://forms.gle/EhXCzmP4tqpLSh547";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 w-full border-b bg-teal-50/95 backdrop-blur supports-[backdrop-filter]:bg-teal-50/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <img
              src="/timehaupt-logo.svg"
              alt="TimeHaupt"
              className="h-[60px] w-auto"
            />
          </div>
          <nav className="hidden md:flex gap-6">
            <Link
              href="#features"
              className="text-sm font-medium hover:text-teal-600"
            >
              Features
            </Link>
            <Link
              href="#faq"
              className="text-sm font-medium hover:text-teal-600"
            >
              FAQ
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href={betaAccessURL}>
              <Button
                size="sm"
                className="bg-teal-600 hover:bg-teal-700 text-white"
              >
                Request Beta Access
              </Button>
            </Link>
          </div>
        </div>
      </header>
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 md:py-28 bg-gradient-to-b from-teal-50 to-white">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl text-teal-900">
                    Transform Team Scheduling with Intelligent Automation
                  </h1>
                  <p className="max-w-[600px] text-teal-700 md:text-xl">
                    TimeHaupt is a modern, AI-powered team scheduling and
                    workforce management platform designed to streamline shift
                    planning, leave management, and team coordination. Built for
                    organizations that value efficiency, fairness, and employee
                    satisfaction.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href={betaAccessURL}>
                    <Button
                      size="lg"
                      className="w-full min-[400px]:w-auto bg-teal-600 hover:bg-teal-700 text-white"
                    >
                      Request Beta Access
                    </Button>
                  </Link>
                </div>
                <div className="flex items-center gap-2 text-sm text-teal-700">
                  <CheckCircle2 className="h-4 w-4 text-teal-600" />
                  <span>Private beta - limited spots available</span>
                </div>
              </div>
              <div className="mx-auto lg:mx-0 relative">
                <div className="absolute inset-0 bg-gradient-to-r from-teal-200/20 to-teal-400/20 rounded-lg blur-xl" />
                <div className="relative bg-white border rounded-lg shadow-lg overflow-hidden">
                  <img
                    src="/team-1.jpg"
                    alt="Team of health workers"
                    className="w-full aspect-[4/3] object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-16 bg-teal-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-teal-900">
                  Comprehensive Workforce Management Features
                </h2>
                <p className="max-w-[700px] text-teal-700 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto">
                  Everything you need to manage your team's schedule, leave, and
                  performance efficiently
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              <div className="flex flex-col items-center space-y-2 border rounded-lg p-6 bg-white">
                <div className="p-2 bg-teal-100 rounded-full">
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
                    className="h-6 w-6 text-teal-600"
                  >
                    <path d="M12 2a8 8 0 0 1 8 8v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V10a8 8 0 0 1 8-8Z"></path>
                    <path d="M9 19v-5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1Z"></path>
                    <path d="M12 6v3"></path>
                    <path d="M8 6v3"></path>
                    <path d="M16 6v3"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-teal-900">
                  Intelligent Shift Scheduling
                </h3>
                <p className="text-teal-700 text-center">
                  AI-powered shift assignment with drag & drop interface,
                  conflict detection, and position templates for consistent
                  scheduling.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 border rounded-lg p-6 bg-white">
                <div className="p-2 bg-teal-100 rounded-full">
                  <Users className="h-6 w-6 text-teal-600" />
                </div>
                <h3 className="text-xl font-bold text-teal-900">
                  Team Management
                </h3>
                <p className="text-teal-700 text-center">
                  Multi-level organization with role-based permissions,
                  qualification management, and seamless member onboarding.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 border rounded-lg p-6 bg-white">
                <div className="p-2 bg-teal-100 rounded-full">
                  <Calendar className="h-6 w-6 text-teal-600" />
                </div>
                <h3 className="text-xl font-bold text-teal-900">
                  Leave Management
                </h3>
                <p className="text-teal-700 text-center">
                  Advanced leave tracking with multiple types, approval
                  workflows, balance monitoring, and calendar integration.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 border rounded-lg p-6 bg-white">
                <div className="p-2 bg-teal-100 rounded-full">
                  <BarChart3 className="h-6 w-6 text-teal-600" />
                </div>
                <h3 className="text-xl font-bold text-teal-900">
                  Analytics & Reporting
                </h3>
                <p className="text-teal-700 text-center">
                  Performance dashboards, schedule optimization metrics, and
                  statistical analysis with visual charts.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 border rounded-lg p-6 bg-white">
                <div className="p-2 bg-teal-100 rounded-full">
                  <Bell className="h-6 w-6 text-teal-600" />
                </div>
                <h3 className="text-xl font-bold text-teal-900">
                  AI Assistant
                </h3>
                <p className="text-teal-700 text-center">
                  Built-in AI assistant with contextual help, smart
                  recommendations, and multi-language support.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 border rounded-lg p-6 bg-white">
                <div className="p-2 bg-teal-100 rounded-full">
                  <Smartphone className="h-6 w-6 text-teal-600" />
                </div>
                <h3 className="text-xl font-bold text-teal-900">
                  Enterprise Features
                </h3>
                <p className="text-teal-700 text-center">
                  Multi-company support, custom settings, email notifications,
                  iCal integration, and real-time updates.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* AI Capabilities Section */}
        <section className="py-16 bg-white">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-teal-900">
                    AI-Powered Workforce Management
                  </h2>
                  <p className="text-teal-700 md:text-xl">
                    Our intelligent platform combines AI-powered scheduling with
                    a built-in assistant to streamline every aspect of team
                    management.
                  </p>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-teal-700">
                    <CheckCircle2 className="h-5 w-5 text-teal-600" />
                    <span>
                      Smart auto-fill considers qualifications, preferences, and
                      workload balance
                    </span>
                  </li>
                  <li className="flex items-center gap-2 text-teal-700">
                    <CheckCircle2 className="h-5 w-5 text-teal-600" />
                    <span>
                      Built-in AI assistant provides contextual help and smart
                      recommendations
                    </span>
                  </li>
                  <li className="flex items-center gap-2 text-teal-700">
                    <CheckCircle2 className="h-5 w-5 text-teal-600" />
                    <span>
                      Automatic conflict detection and qualification mismatch
                      prevention
                    </span>
                  </li>
                  <li className="flex items-center gap-2 text-teal-700">
                    <CheckCircle2 className="h-5 w-5 text-teal-600" />
                    <span>
                      Multi-language support in English and Portuguese for
                      global teams
                    </span>
                  </li>
                </ul>
              </div>
              <div className="mx-auto lg:mx-0 relative">
                <div className="absolute inset-0 bg-gradient-to-r from-teal-200/20 to-teal-400/20 rounded-lg blur-xl" />
                <div className="relative bg-white border rounded-lg shadow-lg overflow-hidden">
                  <img
                    src="/screenshot-3.png"
                    alt="AI-powered scheduling interface"
                    className="w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-16 bg-teal-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-teal-900">
                  Frequently Asked Questions
                </h2>
                <p className="max-w-[700px] text-teal-700 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto">
                  Find answers to common questions about TimeHaupt's workforce
                  scheduling and management platform
                </p>
              </div>
            </div>
            <div className="grid gap-6 mt-12 md:grid-cols-2">
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-teal-900">
                  How does the AI-powered scheduling work?
                </h3>
                <p className="text-teal-700">
                  TimeHaupt's AI analyzes employee qualifications, preferences,
                  and workload balance to automatically generate optimal
                  schedules. The smart auto-fill feature considers multiple
                  factors to ensure fair and efficient shift distribution while
                  preventing conflicts.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-teal-900">
                  Can I manage multiple teams and organizations?
                </h3>
                <p className="text-teal-700">
                  Yes, TimeHaupt supports multi-level organization structures
                  with units and teams. The Enterprise plan even allows you to
                  manage multiple companies from a single platform with
                  role-based permissions for different access levels.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-teal-700">
                  What types of leave can be managed?
                </h3>
                <p className="text-teal-700">
                  TimeHaupt supports multiple leave types including vacation,
                  sick leave, parental leave, meetings, training, and more. You
                  leave, parental leave, meetings, training, and more. You can
                  configure approval workflows, track leave balances, and
                  integrate with calendar applications.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-teal-700">
                  How does the AI assistant help with workforce management?
                </h3>
                <p className="text-teal-700">
                  The built-in AI assistant provides contextual help throughout
                  the application, offers smart recommendations for scheduling
                  decisions, and is available in both English and Portuguese for
                  global teams.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-teal-700">
                  What analytics and reporting features are available?
                </h3>
                <p className="text-teal-700">
                  TimeHaupt provides comprehensive analytics including schedule
                  optimization metrics, performance dashboards, statistical
                  analysis of shift assignments, and visual charts showing
                  workload distribution and inconvenience deviations. You can
                  also export data to CSV for further analysis.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-teal-700">
                  Can I customize the system for my specific business needs?
                </h3>
                <p className="text-teal-700">
                  Absolutely. TimeHaupt offers extensive customization options
                  including work schedules, timezones, leave policies,
                  qualification definitions, and notification preferences to
                  adapt to your specific business requirements.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-teal-600/90 text-primary-foreground">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Ready to Join the Private Beta?
                </h2>
                <p className="max-w-[700px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto">
                  Be among the first to experience TimeHaupt's intelligent
                  workforce management platform
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href={betaAccessURL}>
                  <Button
                    size="lg"
                    variant="secondary"
                    className="w-full min-[400px]:w-auto"
                  >
                    Request Beta Access
                  </Button>
                </Link>
              </div>
              <p className="text-sm">
                Limited spots available. Join the waitlist today.
              </p>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t py-6 md:py-10">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <img
                  src="/timehaupt-logo.svg"
                  alt="TimeHaupt"
                  className="h-20 w-auto"
                />
              </div>
              <p className="text-sm text-muted-foreground">
                TimeHaupt - Simplifying workforce management with AI
              </p>
              <div className="flex gap-4">
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-foreground"
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
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </Link>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-foreground"
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
                  href="#"
                  className="text-muted-foreground hover:text-foreground"
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
                    <rect
                      x="2"
                      y="2"
                      width="20"
                      height="20"
                      rx="5"
                      ry="5"
                    ></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </Link>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-foreground"
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
          </div>
          <div className="mt-8 border-t pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-xs text-muted-foreground mb-4 md:mb-0">
              © 2025 Gordon & Teixeira Lda. All rights reserved.
            </p>
            <div className="flex gap-4 text-xs text-muted-foreground">
              <Link href="#" className="hover:text-foreground">
                Terms of Service
              </Link>
              <Link href="#" className="hover:text-foreground">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-foreground">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
