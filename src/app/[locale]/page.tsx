import type { Metadata } from "next";
import Link from "next/link";
import type { Locale } from "@/lib/i18n";

export function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Metadata {
  const isEn = params.locale === "en";
  return {
    title: isEn
      ? "Unified Field Theory — A Farmer, An Equation, An Experiment That Could Change Civilization"
      : "统一场论信息站 — 一个农民、一个方程、一场可能改变人类文明的实验",
    description: isEn
      ? "Zhang Xiangqian's unified field theory predicts that changing electromagnetic fields can generate gravitational fields. He verified this with simple equipment. The US Navy is independently researching the same direction."
      : "张祥前的统一场论预测变化电磁场产生引力场，他用简陋设备做出了实验验证，美国海军独立地在研究同一方向。",
  };
}

export default function HomePage({
  params,
}: {
  params: { locale: string };
}) {
  const loc = (params.locale === "en" ? "en" : "zh") as Locale;
  const isEn = loc === "en";
  const t = <T,>(zh: T, en: T): T => (isEn ? en : zh);

  const features = [
    {
      title: t("统一场论", "Unified Field Theory"),
      description: t(
        "用一个核心方程统一电场、磁场、引力场和核力场。物体和空间，没有第三种存在。",
        "Unifying electric, magnetic, gravitational, and nuclear force fields with one core equation. Matter and space — nothing else exists."
      ),
      href: `/${loc}/theory/overview`,
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342"
          />
        </svg>
      ),
    },
    {
      title: t("实验验证", "Experimental Verification"),
      description: t(
        "加速电荷产生引力场、变化磁场令小球旋转。低成本可复现方案，设备预算仅需几千元。",
        "Accelerating charges generate gravitational fields; changing magnetic fields cause balls to rotate. Low-cost reproducible setup for just a few thousand RMB."
      ),
      href: `/${loc}/experiment/overview`,
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5"
          />
        </svg>
      ),
    },
    {
      title: t("海军专利对比", "Navy Patent Comparison"),
      description: t(
        "美国海军 Pais 博士的惯性质量减少装置专利，与张祥前的理论描述了同一物理现象。",
        "US Navy Dr. Pais's inertial mass reduction device patents describe the same physical phenomena as Zhang Xiangqian's theory."
      ),
      href: `/${loc}/comparison/navy-patents`,
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5"
          />
        </svg>
      ),
    },
  ];

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-primary-900 via-primary-800 to-primary-700 text-white">
        <div className="max-w-5xl mx-auto px-4 py-20 md:py-32 text-center">
          <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-8">
            {t("一个农民、一个方程、", "A Farmer, An Equation,")}
            <br />
            <span className="text-gold-400">
              {t(
                "一场可能改变人类文明的实验",
                "An Experiment That Could Change Civilization"
              )}
            </span>
          </h1>
          <div className="max-w-3xl mx-auto space-y-4 text-lg md:text-xl text-gray-200 mb-12">
            <p>
              {t("张祥前的统一场论预测：", "Zhang Xiangqian's unified field theory predicts: ")}
              <strong className="text-white">
                {t(
                  "变化电磁场可以产生引力场",
                  "changing electromagnetic fields can generate gravitational fields"
                )}
              </strong>
            </p>
            <p>
              {t(
                "他用简陋的实验设备，观测到了这一现象",
                "He observed this phenomenon using rudimentary experimental equipment"
              )}
            </p>
            <p>
              {t(
                "而美国海军，独立地在研究同一方向",
                "Meanwhile, the US Navy is independently researching the same direction"
              )}
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={`/${loc}/theory/overview`}
              className="px-8 py-3 bg-gold-500 text-primary-900 font-semibold rounded-lg hover:bg-gold-400 transition-colors"
            >
              {t("深入了解理论", "Explore the Theory")}
            </Link>
            <Link
              href={`/${loc}/experiment/overview`}
              className="px-8 py-3 bg-white/10 border border-white/30 text-white font-semibold rounded-lg hover:bg-white/20 transition-colors"
            >
              {t("查看实验", "View Experiments")}
            </Link>
            <Link
              href={`/${loc}/comparison/navy-patents`}
              className="px-8 py-3 bg-white/10 border border-white/30 text-white font-semibold rounded-lg hover:bg-white/20 transition-colors"
            >
              {t("海军专利对比", "Navy Patent Comparison")}
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="max-w-5xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((f) => (
            <Link
              key={f.href}
              href={f.href}
              className="group p-6 rounded-xl border border-gray-200 hover:border-primary-300 hover:shadow-lg transition-all"
            >
              <div className="text-primary-600 mb-4">{f.icon}</div>
              <h2 className="text-xl font-semibold text-primary-800 mb-2 group-hover:text-primary-600">
                {f.title}
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                {f.description}
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* Core thesis */}
      <section className="bg-primary-50">
        <div className="max-w-4xl mx-auto px-4 py-16">
          <h2 className="text-2xl font-bold text-primary-800 mb-6 text-center">
            {t("核心观点", "Core Propositions")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: t("宇宙只有两种存在", "Only Two Things Exist in the Universe"),
                desc: t(
                  "物体和空间（场），没有第三种。空间本身可以运动，空间的运动就是场。四种基本力都是空间螺旋运动的不同分量。",
                  "Matter and space (fields) — nothing else. Space itself can move, and the motion of space is what we call fields. The four fundamental forces are different components of space's helical motion."
                ),
              },
              {
                title: t("变化电磁场产生引力场", "Changing EM Fields Generate Gravitational Fields"),
                desc: t(
                  "当电磁场加速变化时，会产生引力场效应。这一预测已通过多组实验初步验证，并与美国海军专利的方向不谋而合。",
                  "When electromagnetic fields change at an accelerating rate, gravitational field effects are produced. This prediction has been preliminarily verified through multiple experiments and aligns with US Navy patents."
                ),
              },
              {
                title: t("低成本可复现", "Low-Cost and Reproducible"),
                desc: t(
                  "与美国海军需要数百万美元的设备不同，张祥前的实验方案仅需几千元人民币的设备即可尝试复现。",
                  "Unlike the US Navy's multi-million dollar equipment, Zhang's experimental setup can be replicated with just a few thousand RMB worth of equipment."
                ),
              },
              {
                title: t("呼吁独立验证", "Call for Independent Verification"),
                desc: t(
                  "本站不做真假判断。我们呈现理论和实验，呼吁有条件的实验室和研究者独立复现，用科学方法检验。",
                  "This site makes no truth claims. We present the theory and experiments, calling on capable laboratories and researchers to independently replicate and verify using the scientific method."
                ),
              },
            ].map((item) => (
              <div key={item.title} className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold text-primary-700 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-4xl mx-auto px-4 py-16 text-center">
        <h2 className="text-2xl font-bold text-primary-800 mb-4">
          {t("从哪里开始？", "Where to Start?")}
        </h2>
        <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
          {t(
            "如果你对物理学感兴趣，建议从理论总览开始。如果你有实验条件，可以直接查看实验方案。如果你想了解国际背景，请阅读海军专利对比。",
            "If you're interested in physics, start with the theory overview. If you have lab access, jump directly to the experimental setup. For international context, read the Navy patent comparison."
          )}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href={`/${loc}/theory/overview`}
            className="px-6 py-3 bg-primary-700 text-white rounded-lg hover:bg-primary-600 transition-colors"
          >
            {t("从理论开始", "Start with Theory")}
          </Link>
          <Link
            href={`/${loc}/experiment/setup`}
            className="px-6 py-3 border border-primary-300 text-primary-700 rounded-lg hover:bg-primary-50 transition-colors"
          >
            {t("查看实验方案", "View Experimental Setup")}
          </Link>
        </div>
      </section>
    </>
  );
}
