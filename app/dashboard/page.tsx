"use client";

import { useSession } from "next-auth/react";
import { Upload, FileText, BookOpen, Layers } from "lucide-react";

export default function DashboardPage() {
  const { data: session } = useSession();
  const userName = session?.user?.name || "Student";
  const firstName = userName.split(" ")[0];

  return (
    <div className="space-y-8">
      {/* Welcome Banner & Quote Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 rounded-2xl bg-white p-6 border border-gray-100 shadow-sm dark:bg-gray-900 dark:border-gray-800">
          <p className="text-xs text-emerald-600 font-semibold mb-1">
            Welcome back, {firstName}! 👋
          </p>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Your Future Is Built on What You Learn Today
          </h2>
          <p className="text-xs text-gray-500 mt-2 dark:text-gray-400">
            Study smart with AI, access past papers, track your progress and get
            one step closer to your goals.
          </p>
        </div>

        <div className="rounded-2xl bg-emerald-50/50 p-6 border border-emerald-100/50 dark:bg-emerald-950/20 dark:border-emerald-900/30">
          <p className="text-xs italic text-gray-600 dark:text-gray-300">
            "Small steps every day lead to big results."
          </p>
          <p className="text-[11px] font-semibold text-emerald-700 dark:text-emerald-400 mt-3">
            — Unknown
          </p>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          {/* AI PDF Workspace & Board Exam Hub */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-2xl bg-white p-6 border border-gray-100 shadow-sm dark:bg-gray-900 dark:border-gray-800">
              <div className="flex items-center justify-between">
                <h3 className="font-bold text-sm text-gray-900 dark:text-white flex items-center gap-2">
                  <FileText className="h-4 w-4 text-emerald-600" /> AI PDF
                  Workspace
                </h3>
                <span className="text-[10px] bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded-full dark:bg-emerald-950 dark:text-emerald-300">
                  New
                </span>
              </div>
              <p className="text-[11px] text-gray-500 mt-1 dark:text-gray-400">
                Upload chapter PDFs for instant AI summaries.
              </p>

              <div className="mt-4 border-2 border-dashed border-gray-200 rounded-xl p-6 text-center hover:border-emerald-500/50 transition-colors dark:border-gray-800">
                <Upload className="h-6 w-6 text-gray-400 mx-auto" />
                <p className="text-xs font-medium text-gray-700 dark:text-gray-300 mt-2">
                  Upload Chapter PDF
                </p>
                <p className="text-[10px] text-gray-400">PDF • Max 10MB</p>
              </div>
            </div>

            <div className="rounded-2xl bg-white p-6 border border-gray-100 shadow-sm dark:bg-gray-900 dark:border-gray-800">
              <h3 className="font-bold text-sm text-gray-900 dark:text-white flex items-center gap-2">
                <BookOpen className="h-4 w-4 text-emerald-600" /> Board Exam Hub
              </h3>
              <p className="text-[11px] text-gray-500 mt-1 dark:text-gray-400">
                Access past papers and pairing schemes.
              </p>

              <div className="mt-4 space-y-2">
                <div className="flex items-center justify-between p-3 rounded-xl bg-gray-50 text-xs font-medium dark:bg-gray-800">
                  <span>Past Papers</span>
                  <span className="text-emerald-600">→</span>
                </div>
                <div className="flex items-center justify-between p-3 rounded-xl bg-gray-50 text-xs font-medium dark:bg-gray-800">
                  <span>Pairing Schemes</span>
                  <span className="text-emerald-600">→</span>
                </div>
              </div>
            </div>
          </div>

          {/* Continue Learning */}
          <div className="rounded-2xl bg-white p-6 border border-gray-100 shadow-sm dark:bg-gray-900 dark:border-gray-800">
            <h3 className="font-bold text-sm text-gray-900 dark:text-white mb-4">
              Continue Learning
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl border border-gray-100 bg-gray-50/50 dark:bg-gray-800/50 dark:border-gray-800">
                <p className="text-xs font-bold text-gray-800 dark:text-white">
                  Physics
                </p>
                <p className="text-[11px] text-gray-500 mt-0.5">
                  Chapter 5: Work & Energy
                </p>
                <div className="mt-3 h-1.5 w-full bg-gray-200 rounded-full dark:bg-gray-700">
                  <div
                    className="h-1.5 bg-emerald-500 rounded-full"
                    style={{ width: "68%" }}
                  ></div>
                </div>
              </div>

              <div className="p-4 rounded-xl border border-gray-100 bg-gray-50/50 dark:bg-gray-800/50 dark:border-gray-800">
                <p className="text-xs font-bold text-gray-800 dark:text-white">
                  Chemistry
                </p>
                <p className="text-[11px] text-gray-500 mt-0.5">
                  Chapter 4: Chemical Bonding
                </p>
                <div className="mt-3 h-1.5 w-full bg-gray-200 rounded-full dark:bg-gray-700">
                  <div
                    className="h-1.5 bg-teal-500 rounded-full"
                    style={{ width: "52%" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Sidebar Widget */}
        <div className="space-y-6">
          <div className="rounded-2xl bg-white p-6 border border-gray-100 shadow-sm dark:bg-gray-900 dark:border-gray-800">
            <h3 className="font-bold text-sm text-gray-900 dark:text-white mb-4">
              Subject Progress
            </h3>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-xs mb-1">
                  <span className="font-medium text-gray-700 dark:text-gray-300">
                    Physics
                  </span>
                  <span className="text-emerald-600 font-semibold">68%</span>
                </div>
                <div className="h-2 w-full bg-gray-100 rounded-full dark:bg-gray-800">
                  <div
                    className="h-2 bg-emerald-500 rounded-full"
                    style={{ width: "68%" }}
                  ></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-xs mb-1">
                  <span className="font-medium text-gray-700 dark:text-gray-300">
                    Chemistry
                  </span>
                  <span className="text-teal-600 font-semibold">52%</span>
                </div>
                <div className="h-2 w-full bg-gray-100 rounded-full dark:bg-gray-800">
                  <div
                    className="h-2 bg-teal-500 rounded-full"
                    style={{ width: "52%" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
