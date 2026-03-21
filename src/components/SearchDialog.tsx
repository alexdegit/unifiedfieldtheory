"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { useRouter, usePathname } from "next/navigation";
import { searchData, type SearchItem } from "@/lib/searchData";

export default function SearchDialog({ locale }: { locale: string }) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchItem[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();
  const pathname = usePathname();
  const isEn = locale === "en";

  // Keyboard shortcut: Cmd/Ctrl + K
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setOpen((prev) => !prev);
      }
      if (e.key === "Escape") setOpen(false);
    };
    const openHandler = () => setOpen(true);
    window.addEventListener("keydown", handler);
    window.addEventListener("open-search", openHandler);
    return () => {
      window.removeEventListener("keydown", handler);
      window.removeEventListener("open-search", openHandler);
    };
  }, []);

  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery("");
      setResults([]);
    }
  }, [open]);

  // Close on route change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const search = useCallback(
    (q: string) => {
      setQuery(q);
      if (!q.trim()) {
        setResults([]);
        return;
      }
      const lower = q.toLowerCase();
      const matched = searchData.filter((item) => {
        const fields = isEn
          ? [item.titleEn, item.descriptionEn, item.keywordsEn]
          : [item.title, item.description, item.keywords, item.titleEn, item.keywordsEn];
        return fields.some((f) => f.toLowerCase().includes(lower));
      });
      setResults(matched);
    },
    [isEn]
  );

  const navigate = (href: string) => {
    router.push(`/${locale}${href}`);
    setOpen(false);
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-start justify-center pt-[15vh]">
      {/* backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={() => setOpen(false)}
      />

      {/* dialog */}
      <div className="relative w-full max-w-lg mx-4 bg-white rounded-xl shadow-2xl overflow-hidden">
        {/* input */}
        <div className="flex items-center border-b border-gray-200 px-4">
          <svg
            className="w-5 h-5 text-gray-400 shrink-0"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => search(e.target.value)}
            placeholder={isEn ? "Search..." : "搜索..."}
            className="w-full px-3 py-4 text-sm outline-none bg-transparent"
          />
          <kbd className="hidden sm:inline-block text-xs text-gray-400 border border-gray-200 rounded px-1.5 py-0.5">
            ESC
          </kbd>
        </div>

        {/* results */}
        <div className="max-h-80 overflow-y-auto">
          {query && results.length === 0 && (
            <div className="px-4 py-8 text-center text-sm text-gray-500">
              {isEn ? "No results found" : "未找到结果"}
            </div>
          )}
          {results.map((item) => (
            <button
              key={item.id}
              onClick={() => navigate(item.href)}
              className="w-full text-left px-4 py-3 hover:bg-primary-50 transition-colors border-b border-gray-100 last:border-0"
            >
              <div className="font-medium text-sm text-primary-800">
                {isEn ? item.titleEn : item.title}
              </div>
              <div className="text-xs text-gray-500 mt-0.5 line-clamp-1">
                {isEn ? item.descriptionEn : item.description}
              </div>
            </button>
          ))}
          {!query && (
            <div className="px-4 py-6 text-center text-sm text-gray-400">
              {isEn
                ? "Type to search pages, theories, experiments..."
                : "输入关键词搜索页面、理论、实验..."}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
