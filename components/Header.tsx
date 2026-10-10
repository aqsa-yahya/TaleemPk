"use client";

import Link from "next/link";
import { useSession } from "next-auth/react";
import { Search, Bell, Menu, X, GraduationCap } from "lucide-react";
import ThemeToggle from "@/components/ThemeToggle";

type HeaderProps = {
  menuOpen: boolean;
  onMenuToggle: () => void;
};

export default function Header({ menuOpen, onMenuToggle }: HeaderProps) {
  const { data: session } = useSession();

  const userName = session?.user?.name || "Student";
  const userRole = (session?.user as any)?.role || "STUDENT";
  const userInitials = userName
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();

  return (
    <header className="sticky top-0 z-30 flex h-16 items-center gap-3 border-b border-zinc-200 bg-white/80 px-4 backdrop-blur md:px-6 dark:border-zinc-800 dark:bg-zinc-950/80">
      {/* Mobile: Hamburger + Logo */}
      <div className="flex items-center gap-2 md:hidden">
        <button
          type="button"
          onClick={onMenuToggle}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-sidebar"
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-zinc-200 bg-white text-zinc-700 transition-colors hover:bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-200 dark:hover:bg-zinc-800"
        >
          {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
        <Link
          href="/"
          aria-label="TaleemPak home"
          className="flex items-center gap-1.5"
        >
          <GraduationCap className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
          <span className="hidden text-lg font-bold tracking-tight text-zinc-900 min-[400px]:inline dark:text-zinc-100">
            TaleemPak
          </span>
        </Link>
      </div>

      {/* Search Input */}
      <div className="relative hidden min-w-0 max-w-xl flex-1 sm:block">
        <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-400" />
        <input
          type="text"
          placeholder="Search anything... (e.g. Physics past papers)"
          className="h-10 w-full rounded-lg border border-zinc-200 bg-zinc-50 pl-10 pr-4 text-sm text-zinc-900 placeholder:text-zinc-400 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-100 dark:placeholder:text-zinc-500"
        />
      </div>

      {/* Right Actions */}
      <div className="ml-auto flex shrink-0 items-center gap-2 sm:gap-3">
        <button
          type="button"
          aria-label="Search"
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-zinc-200 bg-white text-zinc-700 transition-colors hover:bg-zinc-100 sm:hidden dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-200 dark:hover:bg-zinc-800"
        >
          <Search className="h-5 w-5" />
        </button>

        <button
          type="button"
          aria-label="Notifications"
          className="relative inline-flex h-10 w-10 items-center justify-center rounded-lg border border-zinc-200 bg-white text-zinc-700 transition-colors hover:bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-200 dark:hover:bg-zinc-800"
        >
          <Bell className="h-5 w-5" />
          <span className="absolute right-2.5 top-2.5 h-2 w-2 rounded-full bg-emerald-500" />
        </button>

        <ThemeToggle />

        {/* Dynamic User Profile */}
        <div className="flex items-center gap-3 border-l border-zinc-200 pl-2 sm:pl-3 dark:border-zinc-800">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-600 text-sm font-semibold text-white">
            {userInitials}
          </div>
          <div className="hidden leading-tight lg:block">
            <p className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
              {userName}
            </p>
            <p className="text-xs text-zinc-500 capitalize dark:text-zinc-400">
              {userRole.toLowerCase()}
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
