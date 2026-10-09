"use client";

import { useRef, useState, type ChangeEvent, type DragEvent } from "react";
import {
  Upload,
  FileText,
  Sparkles,
  Lightbulb,
  ListChecks,
  X,
} from "lucide-react";

const MAX_SIZE = 10 * 1024 * 1024; // 10MB

const actions = [
  { label: "AI Summary", icon: Sparkles },
  { label: "Concept Explanation", icon: Lightbulb },
  { label: "Practice Questions", icon: ListChecks },
];

export default function PdfUploadCard() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [file, setFile] = useState<File | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [dragging, setDragging] = useState(false);
  const [selected, setSelected] = useState<string>("AI Summary");

  const handleFile = (f: File | undefined) => {
    if (!f) return;
    if (f.type !== "application/pdf") {
      setError("Please choose a PDF file.");
      setFile(null);
      return;
    }
    if (f.size > MAX_SIZE) {
      setError("File is larger than 10MB.");
      setFile(null);
      return;
    }
    setError(null);
    setFile(f);
  };

  const onDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDragging(false);
    handleFile(e.dataTransfer.files?.[0]);
  };

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    handleFile(e.target.files?.[0]);
    e.target.value = "";
  };

  const onUpload = () => {
    if (!file) {
      inputRef.current?.click();
      return;
    }
    // TODO: send `file` and `selected` to your API route here
    console.log("Upload", file.name, selected);
  };

  return (
    <div className="rounded-2xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-900">
      <div className="mb-4 flex items-center gap-2">
        <FileText className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
        <h2 className="text-base font-semibold">AI PDF Workspace</h2>
      </div>

      <div
        onDragOver={(e) => {
          e.preventDefault();
          setDragging(true);
        }}
        onDragLeave={() => setDragging(false)}
        onDrop={onDrop}
        onClick={() => inputRef.current?.click()}
        className={`flex cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed px-4 py-10 text-center transition-colors ${
          dragging
            ? "border-emerald-500 bg-emerald-50 dark:bg-emerald-950/40"
            : "border-zinc-300 hover:border-emerald-500 dark:border-zinc-700"
        }`}
      >
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-50 text-emerald-600 dark:bg-emerald-950/40 dark:text-emerald-400">
          <Upload className="h-6 w-6" />
        </div>
        <p className="mt-3 text-sm font-medium">Upload Chapter PDF</p>
        <p className="mt-1 text-xs text-zinc-500 dark:text-zinc-400">
          PDF • Max 10MB
        </p>
        <input
          ref={inputRef}
          type="file"
          accept="application/pdf"
          onChange={onChange}
          className="hidden"
        />
      </div>

      {error && (
        <p className="mt-3 text-sm text-red-600 dark:text-red-400">{error}</p>
      )}

      {file && (
        <div className="mt-3 flex items-center justify-between gap-3 rounded-lg bg-zinc-50 px-3 py-2 text-sm dark:bg-zinc-800">
          <span className="flex min-w-0 items-center gap-2">
            <FileText className="h-4 w-4 shrink-0 text-emerald-600 dark:text-emerald-400" />
            <span className="truncate">{file.name}</span>
          </span>
          <button
            type="button"
            aria-label="Remove file"
            onClick={() => setFile(null)}
            className="text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-200"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      )}

      <div className="mt-4 flex flex-wrap gap-2">
        {actions.map(({ label, icon: Icon }) => (
          <button
            key={label}
            type="button"
            onClick={() => setSelected(label)}
            className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-medium transition-colors ${
              selected === label
                ? "border-emerald-600 bg-emerald-50 text-emerald-700 dark:border-emerald-500 dark:bg-emerald-950/40 dark:text-emerald-400"
                : "border-zinc-200 text-zinc-600 hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-400 dark:hover:bg-zinc-800"
            }`}
          >
            <Icon className="h-3.5 w-3.5" />
            {label}
          </button>
        ))}
      </div>

      <button
        type="button"
        onClick={onUpload}
        className="mt-5 inline-flex h-11 w-full items-center justify-center gap-2 rounded-lg bg-emerald-600 text-sm font-medium text-white transition-colors hover:bg-emerald-700"
      >
        <Upload className="h-4 w-4" />
        Upload PDF
      </button>
    </div>
  );
}
