"use client";

import { useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  FileText,
  GraduationCap,
  BookOpen,
  BarChart3,
  CheckSquare,
  StickyNote,
  User,
  Sparkles,
  X,
} from "lucide-react";

const navItems = [
  { label: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  {
    label: "AI PDF Workspace",
    href: "/dashboard/pdf-workspace",
    icon: FileText,
  },
  {
    label: "Board Exam Hub",
    href: "/dashboard/board-exams",
    icon: GraduationCap,
  },
  {
    label: "Study Materials",
    href: "/dashboard/study-materials",
    icon: BookOpen,
  },
  { label: "Progress Tracker", href: "/dashboard/progress", icon: BarChart3 },
  { label: "Mock Tests", href: "/dashboard/mock-tests", icon: CheckSquare },
  { label: "Notes", href: "/dashboard/notes", icon: StickyNote },
  { label: "Profile", href: "/dashboard/profile", icon: User },
];

type SidebarProps = {
  open: boolean;
  onClose: () => void;
};

function SidebarContent({
  onNavigate,
  showClose,
}: {
  onNavigate?: () => void;
  showClose?: boolean;
}) {
  const pathname = usePathname();

  const isActive = (href: string) =>
    href === "/dashboard" ? pathname === href : pathname.startsWith(href);

  return (
    <div className="flex h-full flex-col justify-between">
      <div className="flex min-h-0 flex-1 flex-col">
        {/* Logo: click karne par Home (/) khulta hai */}
        <div className="flex h-16 shrink-0 items-center justify-between border-b border-zinc-200 px-6 dark:border-zinc-800">
          <Link
            href="/"
            onClick={onNavigate}
            className="flex items-center gap-2.5"
          >
            <GraduationCap className="h-7 w-7 shrink-0 text-emerald-600 dark:text-emerald-400" />
            <span className="text-xl font-bold leading-none tracking-tight text-zinc-900 dark:text-zinc-100">
              TaleemPak
            </span>
          </Link>
          {showClose && (
            <button
              type="button"
              onClick={onNavigate}
              aria-label="Close menu"
              className="inline-flex h-9 w-9 items-center justify-center rounded-lg text-zinc-500 hover:bg-zinc-100 dark:text-zinc-400 dark:hover:bg-zinc-900"
            >
              <X className="h-5 w-5" />
            </button>
          )}
        </div>

        {/* Nav: yahi akeli scroll area hai, is liye double scrollbar nahi aata */}
        <nav className="custom-scrollbar min-h-0 flex-1 space-y-1 overflow-y-auto px-3 py-4">
          {navItems.map(({ label, href, icon: Icon }) => {
            const active = isActive(href);
            return (
              <Link
                key={href}
                href={href}
                onClick={onNavigate}
                aria-current={active ? "page" : undefined}
                className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
                  active
                    ? "bg-emerald-50 text-emerald-600 dark:bg-emerald-950/40 dark:text-emerald-400"
                    : "text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-900 dark:hover:text-zinc-100"
                }`}
              >
                <Icon className="h-5 w-5 shrink-0" />
                {label}
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Promo card */}
      <div className="shrink-0 p-4">
        <div className="rounded-2xl bg-emerald-50 p-4 dark:bg-emerald-950/40">
          <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-600 text-white">
            <Sparkles className="h-5 w-5" />
          </div>
          <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
            Learn Smarter with AI
          </h3>
          <p className="mt-1 text-xs text-zinc-600 dark:text-zinc-400">
            Upload a PDF and get instant summaries, quizzes and answers.
          </p>
          <Link
            href="/dashboard/pdf-workspace"
            onClick={onNavigate}
            className="mt-3 inline-block rounded-lg bg-emerald-600 px-3 py-1.5 text-xs font-medium text-white transition-colors hover:bg-emerald-700"
          >
            Try now
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function Sidebar({ open, onClose }: SidebarProps) {
  // Drawer khula ho to Escape se band ho aur background scroll lock rahe
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  return (
    <>
      {/* Desktop: sticky left sidebar */}
      <aside className="sticky top-0 hidden h-screen w-64 shrink-0 border-r border-zinc-200 bg-white md:block dark:border-zinc-800 dark:bg-zinc-950">
        <SidebarContent />
      </aside>

      {/* Mobile: slide-over drawer */}
      <div className="md:hidden">
        <div
          onClick={onClose}
          aria-hidden="true"
          className={`fixed inset-0 z-40 bg-zinc-950/50 backdrop-blur-sm transition-opacity duration-300 ${
            open ? "opacity-100" : "pointer-events-none opacity-0"
          }`}
        />
        <aside
          id="mobile-sidebar"
          aria-hidden={!open}
          className={`fixed inset-y-0 left-0 z-50 w-72 max-w-[85vw] border-r border-zinc-200 bg-white shadow-xl transition-transform duration-300 dark:border-zinc-800 dark:bg-zinc-950 ${
            open ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <SidebarContent onNavigate={onClose} showClose />
        </aside>
      </div>
    </>
  );
}
