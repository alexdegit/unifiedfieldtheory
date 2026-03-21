import Link from "next/link";
import type { Locale } from "@/lib/i18n";

const dict = {
  zh: {
    siteTitle: "统一场论信息站",
    siteDesc:
      "本站客观呈现张祥前统一场论的理论框架与实验验证，不做真假判断，呼吁独立实验复现。",
    quickNav: "快速导航",
    navTheory: "理论总览",
    navExperiment: "实验验证",
    navComparison: "海军专利对比",
    navAbout: "关于张祥前",
    disclaimerTitle: "免责声明",
    disclaimer:
      "本站内容基于张祥前公开发表的理论与实验资料整理。我们不对理论的正确性做出判断，鼓励读者以科学态度独立验证。",
    copyright: "统一场论信息站. 保留所有权利.",
  },
  en: {
    siteTitle: "Unified Field Theory Info",
    siteDesc:
      "This site objectively presents Zhang Xiangqian's unified field theory framework and experimental verification, without making truth claims, and calls for independent replication.",
    quickNav: "Quick Links",
    navTheory: "Theory Overview",
    navExperiment: "Experiments",
    navComparison: "Navy Patent Comparison",
    navAbout: "About Zhang Xiangqian",
    disclaimerTitle: "Disclaimer",
    disclaimer:
      "Content on this site is compiled from Zhang Xiangqian's published theoretical and experimental materials. We make no judgment on the correctness of the theory and encourage readers to independently verify with a scientific approach.",
    copyright: "Unified Field Theory Info. All rights reserved.",
  },
};

export default function Footer({ locale }: { locale: string }) {
  const loc = (locale === "en" ? "en" : "zh") as Locale;
  const t = dict[loc];

  return (
    <footer className="bg-primary-900 text-gray-300 mt-16">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-white font-semibold mb-3">{t.siteTitle}</h3>
            <p className="text-sm leading-relaxed">{t.siteDesc}</p>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-3">{t.quickNav}</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href={`/${loc}/theory/overview`}
                  className="hover:text-gold-400 transition-colors"
                >
                  {t.navTheory}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${loc}/experiment/overview`}
                  className="hover:text-gold-400 transition-colors"
                >
                  {t.navExperiment}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${loc}/comparison/navy-patents`}
                  className="hover:text-gold-400 transition-colors"
                >
                  {t.navComparison}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${loc}/about/zhang`}
                  className="hover:text-gold-400 transition-colors"
                >
                  {t.navAbout}
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-3">
              {t.disclaimerTitle}
            </h3>
            <p className="text-sm leading-relaxed">{t.disclaimer}</p>
          </div>
        </div>
        <div className="border-t border-primary-700 mt-8 pt-6 text-center text-sm text-gray-400">
          &copy; {new Date().getFullYear()} {t.copyright}
        </div>
      </div>
    </footer>
  );
}
