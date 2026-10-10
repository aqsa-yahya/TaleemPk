import Link from "next/link";
import {
  GraduationCap,
  Sparkles,
  ArrowRight,
  FileText,
  Target,
  BarChart3,
  Check,
  Mail,
  Globe,
} from "lucide-react";
import ThemeToggle from "@/components/ThemeToggle";

const features = [
  {
    icon: FileText,
    title: "AI PDF Workspace",
    desc: "Upload handouts and chapters, then auto-generate clean notes, summaries and quizzes in seconds.",
  },
  {
    icon: Target,
    title: "BISE Exam Hub",
    desc: "9th to 12th Grade past papers and pairing schemes for Lahore, Karachi, Faisalabad and more.",
  },
  {
    icon: BarChart3,
    title: "Progress Analytics",
    desc: "PostgreSQL powered performance tracking so you always know which topics need more revision.",
  },
];

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100">
      {/* Navbar */}
      <nav className="sticky top-0 z-40 border-b border-zinc-200 bg-zinc-50/80 backdrop-blur dark:border-zinc-800 dark:bg-zinc-950/80">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 md:px-6">
          <Link href="/" className="flex items-center gap-2">
            <GraduationCap className="h-7 w-7 text-emerald-600 dark:text-emerald-400" />
            <span className="text-xl font-bold tracking-tight">TaleemPak</span>
          </Link>

          <div className="hidden items-center gap-8 text-sm font-medium text-zinc-600 md:flex dark:text-zinc-400">
            <a
              href="#features"
              className="transition-colors hover:text-zinc-900 dark:hover:text-zinc-100"
            >
              Features
            </a>
            <Link
              href="/dashboard/board-exams"
              className="transition-colors hover:text-zinc-900 dark:hover:text-zinc-100"
            >
              Past Papers
            </Link>
            <a
              href="#pricing"
              className="transition-colors hover:text-zinc-900 dark:hover:text-zinc-100"
            >
              Pricing
            </a>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <ThemeToggle />
            <Link
              href="/dashboard"
              className="inline-flex h-10 items-center rounded-lg bg-emerald-600 px-4 text-sm font-medium text-white transition-colors hover:bg-emerald-700"
            >
              <span className="hidden sm:inline">Launch App / Dashboard</span>
              <span className="sm:hidden">Launch</span>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-emerald-500/20 blur-3xl dark:bg-emerald-500/10"
        />
        <div className="relative mx-auto max-w-4xl px-4 py-20 text-center md:px-6 md:py-28">
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-1.5 text-xs font-medium text-emerald-700 sm:text-sm dark:border-emerald-900 dark:bg-emerald-950/40 dark:text-emerald-400">
            ✨ Powered by Google Gemini AI &amp; BISE Board Syllabus
          </span>

          <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Master Pakistani Board Exams with{" "}
            <span className="bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent dark:from-emerald-400 dark:to-teal-300">
              AI-Driven Precision.
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base text-zinc-600 sm:text-lg dark:text-zinc-400">
            Instant PDF summaries, solved past papers, pairing schemes, and
            Socratic AI tutoring tailored for 9th-12th Grade students.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/dashboard"
              className="inline-flex h-12 items-center gap-2 rounded-lg bg-emerald-600 px-6 text-sm font-medium text-white transition-colors hover:bg-emerald-700"
            >
              Explore Dashboard
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/dashboard/board-exams"
              className="inline-flex h-12 items-center rounded-lg border border-zinc-300 bg-white px-6 text-sm font-medium text-zinc-900 transition-colors hover:bg-zinc-100 dark:border-zinc-700 dark:bg-transparent dark:text-zinc-100 dark:hover:bg-zinc-900"
            >
              View Past Papers
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section
        id="features"
        className="mx-auto max-w-6xl scroll-mt-20 px-4 py-16 md:px-6"
      >
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight">
            Everything you need to score higher
          </h2>
          <p className="mt-3 text-zinc-600 dark:text-zinc-400">
            One workspace for notes, past papers and progress.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {features.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="rounded-2xl border border-zinc-200 bg-white p-6 transition-shadow hover:shadow-lg hover:shadow-emerald-500/5 dark:border-zinc-800 dark:bg-zinc-900"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 dark:bg-emerald-950/40 dark:text-emerald-400">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                {desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section
        id="pricing"
        className="mx-auto max-w-6xl scroll-mt-20 px-4 pb-20 md:px-6"
      >
        <div className="mx-auto max-w-md rounded-2xl border border-emerald-200 bg-white p-8 text-center dark:border-emerald-900 dark:bg-zinc-900">
          <h2 className="text-2xl font-bold">Free for Students</h2>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
            Start learning today. No credit card needed.
          </p>
          <ul className="mt-6 space-y-3 text-left text-sm">
            {[
              "AI PDF summaries and quizzes",
              "Board past papers and pairing schemes",
              "Progress tracking",
            ].map((item) => (
              <li key={item} className="flex items-center gap-3">
                <Check className="h-4 w-4 shrink-0 text-emerald-600 dark:text-emerald-400" />
                {item}
              </li>
            ))}
          </ul>
          <Link
            href="/dashboard"
            className="mt-8 inline-flex h-11 w-full items-center justify-center rounded-lg bg-emerald-600 text-sm font-medium text-white transition-colors hover:bg-emerald-700"
          >
            Get Started
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-200 dark:border-zinc-800">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-8 text-sm text-zinc-500 md:flex-row md:px-6 dark:text-zinc-400">
          <div className="flex items-center gap-2">
            <GraduationCap className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
            <span>
              © {new Date().getFullYear()} TaleemPak. All rights reserved.
            </span>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="#features"
              className="hover:text-zinc-900 dark:hover:text-zinc-100"
            >
              Features
            </a>
            <Link
              href="/dashboard/board-exams"
              className="hover:text-zinc-900 dark:hover:text-zinc-100"
            >
              Past Papers
            </Link>
            <a
              href="#pricing"
              className="hover:text-zinc-900 dark:hover:text-zinc-100"
            >
              Pricing
            </a>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="#"
              className="inline-flex items-center gap-1.5 hover:text-zinc-900 dark:hover:text-zinc-100"
            >
              <Globe className="h-4 w-4" /> @taleempak
            </a>
            <a
              href="mailto:hello@taleempak.com"
              className="inline-flex items-center gap-1.5 hover:text-zinc-900 dark:hover:text-zinc-100"
            >
              <Mail className="h-4 w-4" /> Contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
