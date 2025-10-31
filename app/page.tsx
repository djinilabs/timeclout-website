"use client";

import Link from "next/link";
import Script from "next/script";
import { Button } from "@/components/ui/button";
import {
  Calendar,
  Users,
  BarChart3,
  Bell,
  Smartphone,
  CheckCircle2,
  Building2,
  Shield,
  Clock,
  TrendingUp,
  Stethoscope,
  ShoppingBag,
  UtensilsCrossed,
  Sparkles,
  ArrowRight,
  Lock,
  Zap,
} from "lucide-react";
import { MobileMenu } from "@/components/mobile-menu";
import { ScrollToTop } from "@/components/scroll-to-top";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const betaAccessURL = "https://forms.gle/EhXCzmP4tqpLSh547";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
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
              href="#features"
              className="text-sm font-medium hover:text-teal-600 transition-colors"
            >
              Features
            </Link>
            <Link
              href="#how-it-works"
              className="text-sm font-medium hover:text-teal-600 transition-colors"
            >
              How It Works
            </Link>
            <Link
              href="#use-cases"
              className="text-sm font-medium hover:text-teal-600 transition-colors"
            >
              Use Cases
            </Link>
            <Link
              href="#faq"
              className="text-sm font-medium hover:text-teal-600 transition-colors"
            >
              FAQ
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
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 md:py-28 bg-gradient-to-b from-teal-50 to-white animate-in fade-in duration-700">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="flex flex-col justify-center space-y-6">
                <div className="space-y-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-100 text-teal-700 text-sm font-medium w-fit">
                    <Sparkles className="h-4 w-4" />
                    AI-Powered Workforce Management
                  </div>
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl text-teal-900">
                    Save Hours Every Week with AI-Powered Scheduling
                  </h1>
                  <p className="max-w-[600px] text-teal-700 md:text-xl">
                    Stop spending hours manually creating schedules. TimeClout's
                    intelligent automation handles shift planning, conflict
                    resolution, and leave management—so you can focus on what
                    matters most.
                  </p>
                </div>
                <div className="flex flex-col gap-3 min-[400px]:flex-row">
                  <Link href={betaAccessURL}>
                    <Button
                      size="lg"
                      className="w-full min-[400px]:w-auto bg-teal-600 hover:bg-teal-700 text-white group"
                    >
                      Join Private Beta
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Link>
                  <Link href="#how-it-works">
                    <Button
                      size="lg"
                      variant="outline"
                      className="w-full min-[400px]:w-auto border-teal-600 text-teal-700 hover:bg-teal-50"
                    >
                      See How It Works
                    </Button>
                  </Link>
                </div>
                <div className="flex flex-wrap items-center gap-4 text-sm text-teal-700">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-teal-600" />
                    <span>Free beta access</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-teal-600" />
                    <span>Limited spots available</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-teal-600" />
                    <span>No credit card required</span>
                  </div>
                </div>
              </div>
              <div className="mx-auto lg:mx-0 relative animate-in fade-in slide-in-from-right duration-1000">
                <div className="absolute inset-0 bg-gradient-to-r from-teal-200/20 to-teal-400/20 rounded-lg blur-xl" />
                <div className="relative bg-white border rounded-lg shadow-lg overflow-hidden">
                  <img
                    src="/team-1.jpg"
                    alt="Team of health workers"
                    className="w-full aspect-[4/3] object-cover"
                    loading="eager"
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
              <div className="flex flex-col items-center space-y-3 border rounded-lg p-6 bg-white hover:shadow-lg hover:border-teal-300 transition-all duration-300 group cursor-pointer">
                <div className="p-3 bg-teal-100 rounded-full group-hover:bg-teal-200 transition-colors">
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
                <p className="text-teal-700 text-center text-sm">
                  AI-powered shift assignment with drag & drop interface,
                  conflict detection, and position templates for consistent
                  scheduling.
                </p>
                <p className="text-xs text-teal-600 font-medium mt-2">
                  Benefit: Reduce scheduling time by 80%
                </p>
              </div>
              <div className="flex flex-col items-center space-y-3 border rounded-lg p-6 bg-white hover:shadow-lg hover:border-teal-300 transition-all duration-300 group cursor-pointer">
                <div className="p-3 bg-teal-100 rounded-full group-hover:bg-teal-200 transition-colors">
                  <Users className="h-6 w-6 text-teal-600" />
                </div>
                <h3 className="text-xl font-bold text-teal-900">
                  Team Management
                </h3>
                <p className="text-teal-700 text-center text-sm">
                  Multi-level organization with role-based permissions,
                  qualification management, and seamless member onboarding.
                </p>
                <p className="text-xs text-teal-600 font-medium mt-2">
                  Benefit: Scale teams effortlessly
                </p>
              </div>
              <div className="flex flex-col items-center space-y-3 border rounded-lg p-6 bg-white hover:shadow-lg hover:border-teal-300 transition-all duration-300 group cursor-pointer">
                <div className="p-3 bg-teal-100 rounded-full group-hover:bg-teal-200 transition-colors">
                  <Calendar className="h-6 w-6 text-teal-600" />
                </div>
                <h3 className="text-xl font-bold text-teal-900">
                  Leave Management
                </h3>
                <p className="text-teal-700 text-center text-sm">
                  Advanced leave tracking with multiple types, approval
                  workflows, balance monitoring, and calendar integration.
                </p>
                <p className="text-xs text-teal-600 font-medium mt-2">
                  Benefit: Eliminate scheduling conflicts
                </p>
              </div>
              <div className="flex flex-col items-center space-y-3 border rounded-lg p-6 bg-white hover:shadow-lg hover:border-teal-300 transition-all duration-300 group cursor-pointer">
                <div className="p-3 bg-teal-100 rounded-full group-hover:bg-teal-200 transition-colors">
                  <BarChart3 className="h-6 w-6 text-teal-600" />
                </div>
                <h3 className="text-xl font-bold text-teal-900">
                  Analytics & Reporting
                </h3>
                <p className="text-teal-700 text-center text-sm">
                  Performance dashboards, schedule optimization metrics, and
                  statistical analysis with visual charts.
                </p>
                <p className="text-xs text-teal-600 font-medium mt-2">
                  Benefit: Make data-driven decisions
                </p>
              </div>
              <div className="flex flex-col items-center space-y-3 border rounded-lg p-6 bg-white hover:shadow-lg hover:border-teal-300 transition-all duration-300 group cursor-pointer relative">
                <div className="absolute top-2 right-2 px-2 py-1 bg-teal-600 text-white text-xs font-bold rounded">
                  AI
                </div>
                <div className="p-3 bg-teal-100 rounded-full group-hover:bg-teal-200 transition-colors">
                  <Bell className="h-6 w-6 text-teal-600" />
                </div>
                <h3 className="text-xl font-bold text-teal-900">
                  AI Assistant
                </h3>
                <p className="text-teal-700 text-center text-sm">
                  Built-in AI assistant with contextual help, smart
                  recommendations, and multi-language support.
                </p>
                <p className="text-xs text-teal-600 font-medium mt-2">
                  Benefit: Get instant help anytime
                </p>
              </div>
              <div className="flex flex-col items-center space-y-3 border rounded-lg p-6 bg-white hover:shadow-lg hover:border-teal-300 transition-all duration-300 group cursor-pointer">
                <div className="p-3 bg-teal-100 rounded-full group-hover:bg-teal-200 transition-colors">
                  <Smartphone className="h-6 w-6 text-teal-600" />
                </div>
                <h3 className="text-xl font-bold text-teal-900">
                  Enterprise Features
                </h3>
                <p className="text-teal-700 text-center text-sm">
                  Multi-company support, custom settings, email notifications,
                  iCal integration, and real-time updates.
                </p>
                <p className="text-xs text-teal-600 font-medium mt-2">
                  Benefit: Enterprise-ready from day one
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
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="py-16 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-teal-900">
                  How It Works
                </h2>
                <p className="max-w-[700px] text-teal-700 md:text-xl/relaxed mx-auto">
                  Get started with TimeClout in just a few simple steps
                </p>
              </div>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="relative">
                  <div className="absolute inset-0 bg-teal-100 rounded-full blur-xl opacity-50"></div>
                  <div className="relative w-16 h-16 bg-teal-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                    1
                  </div>
                </div>
                <h3 className="text-xl font-bold text-teal-900">
                  Sign Up for Beta
                </h3>
                <p className="text-teal-700 text-sm">
                  Join our private beta program to get early access. No credit
                  card required, limited spots available.
                </p>
              </div>
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="relative">
                  <div className="absolute inset-0 bg-teal-100 rounded-full blur-xl opacity-50"></div>
                  <div className="relative w-16 h-16 bg-teal-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                    2
                  </div>
                </div>
                <h3 className="text-xl font-bold text-teal-900">
                  Set Up Your Team
                </h3>
                <p className="text-teal-700 text-sm">
                  Add your team members, define roles and qualifications, and
                  configure your organization structure.
                </p>
              </div>
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="relative">
                  <div className="absolute inset-0 bg-teal-100 rounded-full blur-xl opacity-50"></div>
                  <div className="relative w-16 h-16 bg-teal-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                    3
                  </div>
                </div>
                <h3 className="text-xl font-bold text-teal-900">
                  Let AI Schedule
                </h3>
                <p className="text-teal-700 text-sm">
                  Our AI analyzes your team's availability, qualifications, and
                  preferences to create optimal schedules automatically.
                </p>
              </div>
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="relative">
                  <div className="absolute inset-0 bg-teal-100 rounded-full blur-xl opacity-50"></div>
                  <div className="relative w-16 h-16 bg-teal-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                    4
                  </div>
                </div>
                <h3 className="text-xl font-bold text-teal-900">
                  Review & Deploy
                </h3>
                <p className="text-teal-700 text-sm">
                  Review the AI-generated schedule, make adjustments if needed,
                  and publish. Your team gets notified instantly.
                </p>
              </div>
            </div>
            <div className="mt-12 flex justify-center">
              <Link href={betaAccessURL}>
                <Button
                  size="lg"
                  className="bg-teal-600 hover:bg-teal-700 text-white"
                >
                  Get Started Free
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section id="use-cases" className="py-16 bg-teal-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-teal-900">
                  Perfect for Every Industry
                </h2>
                <p className="max-w-[700px] text-teal-700 md:text-xl/relaxed mx-auto">
                  TimeClout adapts to your industry's unique scheduling needs
                </p>
              </div>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col space-y-3 border rounded-lg p-6 bg-white hover:shadow-md transition-shadow">
                <div className="p-3 bg-teal-100 rounded-lg w-fit">
                  <Stethoscope className="h-8 w-8 text-teal-600" />
                </div>
                <h3 className="text-xl font-bold text-teal-900">Healthcare</h3>
                <p className="text-teal-700 text-sm">
                  Manage 24/7 nursing shifts, doctor rotations, and on-call
                  schedules with automatic coverage and qualification matching.
                </p>
              </div>
              <div className="flex flex-col space-y-3 border rounded-lg p-6 bg-white hover:shadow-md transition-shadow">
                <div className="p-3 bg-teal-100 rounded-lg w-fit">
                  <ShoppingBag className="h-8 w-8 text-teal-600" />
                </div>
                <h3 className="text-xl font-bold text-teal-900">Retail</h3>
                <p className="text-teal-700 text-sm">
                  Schedule store associates, cashiers, and managers while
                  optimizing for peak hours and seasonal demand.
                </p>
              </div>
              <div className="flex flex-col space-y-3 border rounded-lg p-6 bg-white hover:shadow-md transition-shadow">
                <div className="p-3 bg-teal-100 rounded-lg w-fit">
                  <UtensilsCrossed className="h-8 w-8 text-teal-600" />
                </div>
                <h3 className="text-xl font-bold text-teal-900">
                  Hospitality
                </h3>
                <p className="text-teal-700 text-sm">
                  Coordinate restaurant staff, hotel teams, and event crews with
                  intelligent shift distribution and fair rotation.
                </p>
              </div>
              <div className="flex flex-col space-y-3 border rounded-lg p-6 bg-white hover:shadow-md transition-shadow">
                <div className="p-3 bg-teal-100 rounded-lg w-fit">
                  <Building2 className="h-8 w-8 text-teal-600" />
                </div>
                <h3 className="text-xl font-bold text-teal-900">
                  Manufacturing
                </h3>
                <p className="text-teal-700 text-sm">
                  Handle shift work, overtime planning, and production line
                  coverage with skill-based scheduling.
                </p>
              </div>
              <div className="flex flex-col space-y-3 border rounded-lg p-6 bg-white hover:shadow-md transition-shadow">
                <div className="p-3 bg-teal-100 rounded-lg w-fit">
                  <Zap className="h-8 w-8 text-teal-600" />
                </div>
                <h3 className="text-xl font-bold text-teal-900">Emergency Services</h3>
                <p className="text-teal-700 text-sm">
                  Ensure 24/7 coverage for police, fire, and ambulance services
                  with always-on scheduling intelligence.
                </p>
              </div>
              <div className="flex flex-col space-y-3 border rounded-lg p-6 bg-white hover:shadow-md transition-shadow">
                <div className="p-3 bg-teal-100 rounded-lg w-fit">
                  <Users className="h-8 w-8 text-teal-600" />
                </div>
                <h3 className="text-xl font-bold text-teal-900">
                  Professional Services
                </h3>
                <p className="text-teal-700 text-sm">
                  Manage consultant schedules, project teams, and client coverage
                  with flexible, AI-optimized assignments.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Trust & Security Section */}
        <section className="py-16 bg-white">
          <div className="container px-4 md:px-6">
            <div className="grid gap-8 lg:grid-cols-2 items-center">
              <div className="space-y-6">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-teal-900">
                    Your Data is Secure
                </h2>
                  <p className="text-teal-700 md:text-xl">
                    We take privacy and security seriously. Your team's data is
                    protected with enterprise-grade security.
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-teal-100 rounded-lg">
                      <Shield className="h-5 w-5 text-teal-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-teal-900">
                        Enterprise-Grade Security
                      </h3>
                      <p className="text-sm text-teal-700">
                        Your data is encrypted in transit and at rest with
                        industry-standard protocols.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-teal-100 rounded-lg">
                      <Lock className="h-5 w-5 text-teal-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-teal-900">
                        Privacy-First Approach
                      </h3>
                      <p className="text-sm text-teal-700">
                        We never share your data with third parties. Your
                        information belongs to you.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-teal-100 rounded-lg">
                      <CheckCircle2 className="h-5 w-5 text-teal-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-teal-900">
                        Transparent Beta Process
                      </h3>
                      <p className="text-sm text-teal-700">
                        As a beta user, you'll have direct access to our team
                        for feedback and support.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-teal-200/20 to-teal-400/20 rounded-lg blur-xl" />
                <div className="relative bg-teal-50 border-2 border-teal-200 rounded-lg p-8">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Shield className="h-8 w-8 text-teal-600" />
                      <h3 className="text-xl font-bold text-teal-900">
                        Beta Access Includes:
                      </h3>
                    </div>
                    <ul className="space-y-2 text-teal-700">
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-5 w-5 text-teal-600" />
                        <span>Full feature access</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-5 w-5 text-teal-600" />
                        <span>Priority support</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-5 w-5 text-teal-600" />
                        <span>Shape product direction</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-5 w-5 text-teal-600" />
                        <span>Early access to new features</span>
                      </li>
                    </ul>
                  </div>
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
                  Find answers to common questions about TimeClout's workforce
                  scheduling and management platform
                </p>
              </div>
            </div>
            <div className="mt-12 max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="w-full space-y-4">
                <AccordionItem value="item-1" className="border rounded-lg px-6 bg-white">
                  <AccordionTrigger className="text-left text-teal-900 hover:no-underline">
                    <h3 className="text-lg font-bold">
                      How does the AI-powered scheduling work?
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent className="text-teal-700">
                    TimeClout's AI analyzes employee qualifications, preferences,
                    and workload balance to automatically generate optimal
                    schedules. The smart auto-fill feature considers multiple
                    factors to ensure fair and efficient shift distribution while
                    preventing conflicts.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2" className="border rounded-lg px-6 bg-white">
                  <AccordionTrigger className="text-left text-teal-900 hover:no-underline">
                    <h3 className="text-lg font-bold">
                      Can I manage multiple teams and organizations?
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent className="text-teal-700">
                    Yes, TimeClout supports multi-level organization structures
                    with units and teams. The Enterprise plan even allows you to
                    manage multiple companies from a single platform with
                    role-based permissions for different access levels.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3" className="border rounded-lg px-6 bg-white">
                  <AccordionTrigger className="text-left text-teal-900 hover:no-underline">
                    <h3 className="text-lg font-bold">
                      What types of leave can be managed?
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent className="text-teal-700">
                    TimeClout supports multiple leave types including vacation,
                    sick leave, parental leave, meetings, training, and more. You
                    can configure approval workflows, track leave balances, and
                    integrate with calendar applications.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4" className="border rounded-lg px-6 bg-white">
                  <AccordionTrigger className="text-left text-teal-900 hover:no-underline">
                    <h3 className="text-lg font-bold">
                      How does the AI assistant help with workforce management?
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent className="text-teal-700">
                    The built-in AI assistant provides contextual help throughout
                    the application, offers smart recommendations for scheduling
                    decisions, and is available in both English and Portuguese for
                    global teams.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5" className="border rounded-lg px-6 bg-white">
                  <AccordionTrigger className="text-left text-teal-900 hover:no-underline">
                    <h3 className="text-lg font-bold">
                      What analytics and reporting features are available?
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent className="text-teal-700">
                    TimeClout provides comprehensive analytics including schedule
                    optimization metrics, performance dashboards, statistical
                    analysis of shift assignments, and visual charts showing
                    workload distribution and inconvenience deviations. You can
                    also export data to CSV for further analysis.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-6" className="border rounded-lg px-6 bg-white">
                  <AccordionTrigger className="text-left text-teal-900 hover:no-underline">
                    <h3 className="text-lg font-bold">
                      Can I customize the system for my specific business needs?
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent className="text-teal-700">
                    Absolutely. TimeClout offers extensive customization options
                    including work schedules, timezones, leave policies,
                    qualification definitions, and notification preferences to
                    adapt to your specific business requirements.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-teal-600/90 text-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-6 text-center">
              <div className="space-y-3">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Ready to Transform Your Scheduling?
                </h2>
                <p className="max-w-[700px] md:text-xl/relaxed mx-auto">
                  Join the private beta and start saving hours every week with
                  AI-powered workforce management
                </p>
              </div>
              <div className="flex flex-col gap-3 min-[400px]:flex-row">
                <Link href={betaAccessURL}>
                  <Button
                    size="lg"
                    variant="secondary"
                    className="w-full min-[400px]:w-auto bg-white text-teal-600 hover:bg-gray-100"
                  >
                    Join Private Beta - It's Free
                  </Button>
                </Link>
              </div>
              <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4" />
                  <span>No credit card required</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4" />
                  <span>Limited spots available</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4" />
                  <span>Full feature access</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
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
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-teal-600 transition-colors"
                  aria-label="Facebook"
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
                  href="https://twitter.com"
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
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-teal-600 transition-colors"
                  aria-label="Instagram"
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
                  href="https://linkedin.com"
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
                  <Link href="#features" className="hover:text-teal-600 transition-colors">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="#how-it-works" className="hover:text-teal-600 transition-colors">
                    How It Works
                  </Link>
                </li>
                <li>
                  <Link href="#use-cases" className="hover:text-teal-600 transition-colors">
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
                  <Link href="#faq" className="hover:text-teal-600 transition-colors">
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
                  <Link href="#" className="hover:text-teal-600 transition-colors">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-teal-600 transition-colors">
                    Privacy Policy
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
      <ScrollToTop />
      <Script
        id="faq-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "How does the AI-powered scheduling work?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "TimeClout's AI analyzes employee qualifications, preferences, and workload balance to automatically generate optimal schedules. The smart auto-fill feature considers multiple factors to ensure fair and efficient shift distribution while preventing conflicts.",
                },
              },
              {
                "@type": "Question",
                name: "Can I manage multiple teams and organizations?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, TimeClout supports multi-level organization structures with units and teams. The Enterprise plan even allows you to manage multiple companies from a single platform with role-based permissions for different access levels.",
                },
              },
              {
                "@type": "Question",
                name: "What types of leave can be managed?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "TimeClout supports multiple leave types including vacation, sick leave, parental leave, meetings, training, and more. You can configure approval workflows, track leave balances, and integrate with calendar applications.",
                },
              },
              {
                "@type": "Question",
                name: "How does the AI assistant help with workforce management?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "The built-in AI assistant provides contextual help throughout the application, offers smart recommendations for scheduling decisions, and is available in both English and Portuguese for global teams.",
                },
              },
              {
                "@type": "Question",
                name: "What analytics and reporting features are available?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "TimeClout provides comprehensive analytics including schedule optimization metrics, performance dashboards, statistical analysis of shift assignments, and visual charts showing workload distribution and inconvenience deviations. You can also export data to CSV for further analysis.",
                },
              },
              {
                "@type": "Question",
                name: "Can I customize the system for my specific business needs?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Absolutely. TimeClout offers extensive customization options including work schedules, timezones, leave policies, qualification definitions, and notification preferences to adapt to your specific business requirements.",
                },
              },
            ],
          }),
        }}
      />
    </div>
  );
}
