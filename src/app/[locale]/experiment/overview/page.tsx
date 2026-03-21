import type { Metadata } from "next";
import Link from "next/link";
import NextRead from "@/components/NextRead";
import type { Locale } from "@/lib/i18n";

export function generateMetadata({ params }: { params: { locale: string } }): Metadata {
  const isEn = params.locale === "en";
  return {
    title: isEn ? "Experiment Overview" : "实验总览 — 变化电磁场产生引力场的实验验证",
    description: isEn
      ? "Zhang Xiangqian's experimental series from 2023: accelerating charges generate gravitational fields, changing magnetic fields rotate balls, low-voltage breakthroughs."
      : "张祥前从2023年开始的系列实验：加速电荷产生引力场、变化磁场令小球旋转、低压方案突破。",
  };
}

export default function ExperimentOverviewPage({ params }: { params: { locale: string } }) {
  const loc = (params.locale === "en" ? "en" : "zh") as Locale;
  const isEn = loc === "en";
  const t = <T,>(zh: T, en: T): T => (isEn ? en : zh);

  const timeline = [
    {
      date: t("2023年11月", "Nov 2023"),
      title: t("首次发现", "First Discovery"),
      desc: t(
        "在加速电荷实验中，首次观测到异常力的效应，物体出现了无法用常规电磁力解释的运动。",
        "In an accelerating charge experiment, anomalous force effects were first observed — objects exhibited motion that could not be explained by conventional electromagnetic forces."
      ),
    },
    {
      date: t("2024年3月", "Mar 2024"),
      title: t("旋转实验", "Rotation Experiment"),
      desc: t(
        "使用变化磁场，观测到悬挂的小球出现自发旋转。旋转方向与磁场变化方向一致，排除了常规电磁力的解释。",
        "Using a changing magnetic field, a suspended ball was observed to spontaneously rotate. The rotation direction was consistent with the magnetic field change direction, ruling out conventional electromagnetic explanations."
      ),
    },
    {
      date: t("2024年4月", "Apr 2024"),
      title: t("质量变化实验", "Mass Variation Experiment"),
      desc: t(
        "在强变化电磁场中，精密天平测量到物体质量出现微小但可测量的变化。",
        "In a strong changing electromagnetic field, a precision balance measured small but detectable changes in object mass."
      ),
    },
    {
      date: t("2024年下半年", "H2 2024"),
      title: t("低压方案突破", "Low-Voltage Breakthrough"),
      desc: t(
        "将实验所需电压从数千伏降低到 80V/30A，大幅降低了复现门槛。这意味着普通物理实验室即可尝试。",
        "Reduced the required voltage from thousands of volts to 80V/30A, dramatically lowering the replication threshold. This means ordinary physics labs can attempt it."
      ),
    },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="prose">
        <h1>{t("实验总览", "Experiment Overview")}</h1>
        <p className="text-lg text-gray-600 mb-8">
          {t(
            "张祥前的统一场论不仅是理论推导，他还进行了系列实验来验证核心预测：变化电磁场可以产生引力场效应。",
            "Zhang Xiangqian's unified field theory is not just theoretical derivation — he has also conducted a series of experiments to verify the core prediction: changing electromagnetic fields can produce gravitational field effects."
          )}
        </p>

        <h2>{t("实验时间线", "Experimental Timeline")}</h2>
        <div className="space-y-6 my-8">
          {timeline.map((item) => (
            <div key={item.date} className="flex gap-4">
              <div className="flex-shrink-0 w-28">
                <span className="text-sm font-semibold text-primary-600 bg-primary-50 px-3 py-1 rounded-full">
                  {item.date}
                </span>
              </div>
              <div>
                <h3 className="font-semibold text-primary-800 mt-0 mb-1">{item.title}</h3>
                <p className="text-gray-600 text-sm mt-0">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <h2>{t("核心实验", "Core Experiments")}</h2>

        <h3>{t("实验一：加速电荷产生引力场", "Experiment 1: Accelerating Charges Generate Gravitational Fields")}</h3>
        <p>
          {t(
            "根据统一场论，加速运动的电荷会产生变化的电磁场，而变化的电磁场会产生引力场效应。实验使用高频交变电流通过导体，在导体附近放置检测物体，观测是否出现异常力。",
            "According to the unified field theory, accelerating charges produce changing electromagnetic fields, which in turn produce gravitational field effects. The experiment passes high-frequency alternating current through a conductor and places test objects nearby to observe anomalous forces."
          )}
        </p>
        <p>
          {t(
            "实验结果显示，检测物体出现了与电磁力方向不同的运动，且运动方向与理论预测一致。",
            "Experimental results showed that test objects exhibited motion in a direction different from electromagnetic forces, consistent with theoretical predictions."
          )}
        </p>

        <h3>{t("实验二：变化磁场产生漩涡引力场", "Experiment 2: Changing Magnetic Fields Generate Vortex Gravitational Fields")}</h3>
        <p>
          {t(
            "将小球用细线悬挂在变化磁场中心附近。当磁场快速变化时，小球出现了绕磁场轴线的旋转运动。这种旋转无法用常规电磁感应解释（小球为非导体），张祥前认为这是漩涡引力场的直接证据。",
            "A small ball is suspended by a thin thread near the center of a changing magnetic field. When the field changes rapidly, the ball exhibits rotational motion around the field axis. This rotation cannot be explained by conventional electromagnetic induction (the ball is non-conductive), which Zhang believes is direct evidence of a vortex gravitational field."
          )}
        </p>

        <h3>{t("低压方案（80V/30A）", "Low-Voltage Setup (80V/30A)")}</h3>
        <p>
          {t(
            "早期实验需要高压设备，复现门槛较高。经过优化，张祥前找到了使用 80V/30A 低压电源即可观测到效应的方案。这大大降低了独立复现的设备要求和安全风险。",
            "Early experiments required high-voltage equipment with a high replication threshold. After optimization, Zhang found a setup using an 80V/30A low-voltage power supply that can still observe the effects, greatly reducing equipment requirements and safety risks for independent replication."
          )}
        </p>

        <h2>{t("美国专利", "US Patent")}</h2>
        <p>
          {t(
            "2024年，张祥前就相关实验方案申请了美国专利（US12417870），这是实验方案获得知识产权保护的重要一步。",
            "In 2024, Zhang applied for a US patent (US12417870) for the related experimental setup, an important step in securing intellectual property protection for the experimental method."
          )}
        </p>

        <div className="bg-primary-50 p-6 rounded-lg my-6">
          <h3 className="mt-0 text-primary-800">{t("为什么独立复现至关重要？", "Why Is Independent Replication Critical?")}</h3>
          <p>
            {t(
              "科学的基石是可重复性。无论一个实验结果多么惊人，只有当独立的实验室、使用独立的设备、由不同的实验者复现出相同的结果时，才能被科学界认可。",
              "The cornerstone of science is reproducibility. No matter how remarkable an experimental result, it can only be accepted by the scientific community when independent laboratories, using independent equipment, with different experimenters, replicate the same results."
            )}
          </p>
          <p className="mb-0">
            {t(
              <>张祥前的实验目前仅有他个人进行和报告。我们呼吁有条件的物理实验室和研究者进行独立复现。详细的实验方案和设备清单，请查看<Link href={`/${loc}/experiment/setup`} className="text-primary-600 font-semibold">实验方案</Link>页面。</>,
              <>Zhang&apos;s experiments have so far only been conducted and reported by himself. We call on capable physics laboratories and researchers to perform independent replications. For detailed experimental procedures and equipment lists, see the <Link href={`/${loc}/experiment/setup`} className="text-primary-600 font-semibold">Experimental Setup</Link> page.</>
            )}
          </p>
        </div>

        <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg my-6">
          <p className="text-sm text-yellow-800 mb-0">
            {t(
              <><strong>注意：</strong>以上实验结果均由张祥前本人报告，尚未经过独立第三方验证。本站如实呈现实验信息，不对实验结果的可靠性做出判断。</>,
              <><strong>Note:</strong> All experimental results above were reported by Zhang Xiangqian himself and have not been independently verified by third parties. This site faithfully presents the experimental information without judging the reliability of the results.</>
            )}
          </p>
        </div>
      </div>

      <NextRead
        locale={loc}
        items={[
          {
            href: "/experiment/setup",
            title: t("实验方案", "Experimental Setup"),
            description: t("详细的实验步骤、材料清单和参数设置", "Detailed procedures, material lists, and parameter settings"),
          },
          {
            href: "/theory/overview",
            title: t("理论总览", "Theory Overview"),
            description: t("了解实验背后的理论基础", "Understand the theoretical foundation behind the experiments"),
          },
        ]}
      />
    </div>
  );
}
