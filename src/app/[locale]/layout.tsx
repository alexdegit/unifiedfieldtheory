import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SearchDialog from "@/components/SearchDialog";
import JsonLd from "@/components/JsonLd";
import { isValidLocale } from "@/lib/i18n";
import "../globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "统一场论信息站 — 张祥前统一场论与实验验证",
    template: "%s | 统一场论信息站",
  },
  description:
    "系统展示张祥前统一场论的理论框架、变化电磁场产生引力场实验验证、与美国海军专利的对比分析。呼吁独立实验复现。",
  keywords: [
    "统一场论",
    "张祥前",
    "人工场",
    "变化电磁场产生引力场",
    "飞碟原理",
    "四力统一",
    "unified field theory",
    "artificial field scanning",
    "electromagnetic gravitational field",
    "Zhang Xiangqian",
    "Pais patent",
    "inertial mass reduction",
  ],
  metadataBase: new URL("https://unifiedfieldtheory.vercel.app"),
  openGraph: {
    type: "website",
    siteName: "统一场论信息站",
    title: "统一场论信息站 — 张祥前统一场论与实验验证",
    description:
      "系统展示张祥前统一场论的理论框架、变化电磁场产生引力场实验验证、与美国海军专利对比分析。",
    locale: "zh_CN",
    alternateLocale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "统一场论信息站",
    description: "张祥前统一场论与实验验证 | Unified Field Theory Info",
  },
  alternates: {
    canonical: "https://unifiedfieldtheory.vercel.app",
    languages: {
      "zh-CN": "https://unifiedfieldtheory.vercel.app/zh",
      "en": "https://unifiedfieldtheory.vercel.app/en",
    },
  },
};

export default function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  if (!isValidLocale(params.locale)) {
    notFound();
  }

  return (
    <html lang={params.locale}>
      <body className={`${inter.variable} font-sans antialiased`}>
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "统一场论信息站 | Unified Field Theory Info",
            url: "https://unifiedfieldtheory.vercel.app",
            description:
              "系统展示张祥前统一场论的理论框架、变化电磁场产生引力场实验验证、与美国海军专利的对比分析。",
            inLanguage: [params.locale === "en" ? "en" : "zh-CN"],
            potentialAction: {
              "@type": "SearchAction",
              target: `https://unifiedfieldtheory.vercel.app/${params.locale}/search?q={search_term_string}`,
              "query-input": "required name=search_term_string",
            },
          }}
        />
        <Header locale={params.locale} />
        <main className="min-h-screen">{children}</main>
        <Footer locale={params.locale} />
        <SearchDialog locale={params.locale} />
      </body>
    </html>
  );
}
