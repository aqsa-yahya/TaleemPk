"use client";

import Link from "next/link";
import { useSession } from "next-auth/react";
import { useTheme } from "next-themes";
import {
  GraduationCap,
  LayoutDashboard,
  FileText,
  BookOpen,
  BookMarked,
  LineChart,
  CheckSquare,
  FileCode,
  User,
  Search,
  Bell,
  Moon,
  Sun,
} from "lucide-react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { data: session } = useSession();
  const { theme, setTheme } = useTheme();

  const userName = session?.user?.name || "Student";
  const userRole = (session?.user as any)?.role || "STUDENT";
  const userInitials = userName
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();

  return (
    <div className="flex min-h-screen bg-[#F8FAFC] text-gray-800 dark:bg-gray-950 dark:text-gray-100">
      {/* Sidebar */}
      <aside className="w-64 border-r border-gray-200/80 bg-white p-5 dark:border-gray-800 dark:bg-gray-900 flex flex-col justify-between">
        <div>
          {/* Logo with Link to Home Page */}
          <Link
            href="/"
            className="mb-8 flex items-center gap-2.5 px-2 hover:opacity-90 transition-opacity"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-600 text-white shadow-md shadow-emerald-600/20">
              <GraduationCap className="h-5 w-5" />
            </div>
            <span className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
              Taleem<span className="text-emerald-600">Pak</span>
            </span>
          </Link>

          {/* Navigation Links */}
          <nav className="space-y-1 text-sm font-medium">
            <Link
              href="/dashboard"
              className="flex items-center gap-3 rounded-xl bg-emerald-50/80 px-3.5 py-2.5 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-400"
            >
              <LayoutDashboard className="h-4 w-4" />
              Dashboard
            </Link>
            <a
              href="#"
              className="flex items-center gap-3 rounded-xl px-3.5 py-2.5 text-gray-600 hover:bg-gray-100/80 dark:text-gray-400 dark:hover:bg-gray-800/60"
            >
              <FileText className="h-4 w-4" />
              AI PDF Workspace
            </a>
            <a
              href="#"
              className="flex items-center gap-3 rounded-xl px-3.5 py-2.5 text-gray-600 hover:bg-gray-100/80 dark:text-gray-400 dark:hover:bg-gray-800/60"
            >
              <GraduationCap className="h-4 w-4" />
              Board Exam Hub
            </a>
            <a
              href="#"
              className="flex items-center gap-3 rounded-xl px-3.5 py-2.5 text-gray-600 hover:bg-gray-100/80 dark:text-gray-400 dark:hover:bg-gray-800/60"
            >
              <BookOpen className="h-4 w-4" />
              Study Materials
            </a>
            <a
              href="#"
              className="flex items-center gap-3 rounded-xl px-3.5 py-2.5 text-gray-600 hover:bg-gray-100/80 dark:text-gray-400 dark:hover:bg-gray-800/60"
            >
              <LineChart className="h-4 w-4" />
              Progress Tracker
            </a>
            <a
              href="#"
              className="flex items-center gap-3 rounded-xl px-3.5 py-2.5 text-gray-600 hover:bg-gray-100/80 dark:text-gray-400 dark:hover:bg-gray-800/60"
            >
              <CheckSquare className="h-4 w-4" />
              Mock Tests
            </a>
            <a
              href="#"
              className="flex items-center gap-3 rounded-xl px-3.5 py-2.5 text-gray-600 hover:bg-gray-100/80 dark:text-gray-400 dark:hover:bg-gray-800/60"
            >
              <BookMarked className="h-4 w-4" />
              Notes
            </a>
            <a
              href="#"
              className="flex items-center gap-3 rounded-xl px-3.5 py-2.5 text-gray-600 hover:bg-gray-100/80 dark:text-gray-400 dark:hover:bg-gray-800/60"
            >
              <User className="h-4 w-4" />
              Profile
            </a>
          </nav>
        </div>

        {/* Bottom AI Card */}
        <div className="rounded-2xl bg-emerald-500/10 p-4 border border-emerald-500/20">
          <p className="text-xs font-semibold text-emerald-800 dark:text-emerald-300">
            Learn Smarter with AI
          </p>
          <p className="mt-1 text-[11px] text-gray-600 dark:text-gray-400">
            Upload PDFs to get instant summaries and quizzes.
          </p>
        </div>
      </aside>

      {/* Main Area */}
      <div className="flex-1 flex flex-col">
        {/* Top Bar */}
        <header className="flex items-center justify-between border-b border-gray-200/80 bg-white px-8 py-3.5 dark:border-gray-800 dark:bg-gray-900">
          <div className="relative w-96">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search anything... (e.g 'Physics past papers')"
              className="w-full rounded-xl border border-gray-200 bg-gray-50/50 pl-10 pr-4 py-2 text-xs focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500/20 dark:border-gray-800 dark:bg-gray-800 dark:focus:bg-gray-800"
            />
          </div>

          <div className="flex items-center gap-4">
            {/* Theme Toggle Button */}
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-xl border border-gray-200 text-gray-600 hover:bg-gray-100 dark:border-gray-800 dark:text-gray-300 dark:hover:bg-gray-800"
            >
              {theme === "dark" ? (
                <Sun className="h-4 w-4 text-amber-400" />
              ) : (
                <Moon className="h-4 w-4" />
              )}
            </button>

            {/* Notification Icon */}
            <button className="p-2 rounded-xl border border-gray-200 text-gray-600 hover:bg-gray-100 dark:border-gray-800 dark:text-gray-300 dark:hover:bg-gray-800">
              <Bell className="h-4 w-4" />
            </button>

            {/* User Profile */}
            <div className="flex items-center gap-3 pl-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-600 text-xs font-bold text-white shadow-sm">
                {userInitials}
              </div>
              <div className="text-left">
                <p className="text-xs font-semibold text-gray-900 dark:text-white leading-tight">
                  {userName}
                </p>
                <p className="text-[10px] text-gray-500 capitalize dark:text-gray-400">
                  {userRole.toLowerCase()}
                </p>
              </div>
            </div>
          </div>
        </header>

        {/* Page Children */}
        <main className="flex-1 p-8 overflow-y-auto">{children}</main>
      </div>
    </div>
  );
}
