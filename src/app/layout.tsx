import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

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
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body className={`${inter.variable} font-sans antialiased`}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
