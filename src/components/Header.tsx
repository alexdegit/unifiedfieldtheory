"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import type { Locale } from "@/lib/i18n";

const navItems: Record<Locale, { href: string; label: string }[]> = {
  zh: [
    { href: "/", label: "首页" },
    { href: "/theory/overview", label: "理论" },
    { href: "/experiment/overview", label: "实验" },
    { href: "/comparison/navy-patents", label: "对比" },
    { href: "/applications/overview", label: "应用" },
    { href: "/guoke/overview", label: "果克星球" },
    { href: "/about/zhang", label: "关于" },
    { href: "/resources", label: "资源" },
  ],
  en: [
    { href: "/", label: "Home" },
    { href: "/theory/overview", label: "Theory" },
    { href: "/experiment/overview", label: "Experiments" },
    { href: "/comparison/navy-patents", label: "Comparison" },
    { href: "/applications/overview", label: "Applications" },
    { href: "/guoke/overview", label: "Guoke Civilization" },
    { href: "/about/zhang", label: "About" },
    { href: "/resources", label: "Resources" },
  ],
};

export default function Header({ locale }: { locale: string }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const loc = (locale === "en" ? "en" : "zh") as Locale;
  const items = navItems[loc];

  // Build the switch URL: replace current locale prefix with the other
  const otherLocale = loc === "zh" ? "en" : "zh";
  const pathWithoutLocale = pathname.replace(/^\/(zh|en)/, "") || "/";
  const switchHref = `/${otherLocale}${pathWithoutLocale}`;

  return (
    <header className="bg-primary-900 text-white sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link href={`/${loc}`} className="text-lg font-bold tracking-wide">
          {loc === "zh" ? (
            <>
              统一场论{" "}
              <span className="text-gold-400 text-sm font-normal">
                Unified Field Theory
              </span>
            </>
          ) : (
            "Unified Field Theory"
          )}
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {items.map((item) => (
            <Link
              key={item.href}
              href={`/${loc}${item.href === "/" ? "" : item.href}`}
              className="text-sm text-gray-200 hover:text-gold-400 transition-colors"
            >
              {item.label}
            </Link>
          ))}
          <button
            onClick={() => window.dispatchEvent(new CustomEvent("open-search"))}
            className="text-gray-300 hover:text-white transition-colors p-1"
            aria-label={loc === "zh" ? "搜索" : "Search"}
            title="Ctrl+K"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
          <Link
            href={switchHref}
            className="px-3 py-1 text-xs border border-gray-500 rounded-full text-gray-300 hover:text-white hover:border-gold-400 transition-colors"
          >
            {loc === "zh" ? "EN" : "中文"}
          </Link>
        </nav>

        {/* Mobile toggle */}
        <div className="flex items-center gap-2 md:hidden">
          <Link
            href={switchHref}
            className="px-3 py-1 text-xs border border-gray-500 rounded-full text-gray-300 hover:text-white"
          >
            {loc === "zh" ? "EN" : "中文"}
          </Link>
          <button
            className="text-gray-200 p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={loc === "zh" ? "菜单" : "Menu"}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <nav className="md:hidden bg-primary-800 px-4 pb-4">
          {items.map((item) => (
            <Link
              key={item.href}
              href={`/${loc}${item.href === "/" ? "" : item.href}`}
              className="block py-2 text-gray-200 hover:text-gold-400 transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
