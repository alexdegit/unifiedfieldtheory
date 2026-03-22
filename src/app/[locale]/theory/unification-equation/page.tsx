import type { Metadata } from "next";
import NextRead from "@/components/NextRead";
import Formula from "@/components/Formula";
import type { Locale } from "@/lib/i18n";

export function generateMetadata({ params }: { params: { locale: string } }): Metadata {
  const isEn = params.locale === "en";
  return {
    title: isEn
      ? "Spacetime Unification Equation — Unified Field Theory"
      : "时空归一化方程 — 统一场论",
    description: isEn
      ? "The spacetime unification equation that merges gravity, quantum mechanics, and relativity into a single formula through helical spatial motion."
      : "时空归一化方程——通过空间螺旋运动将引力、量子力学和相对论合并为一个公式。",
  };
}

export default function UnificationEquationPage({ params }: { params: { locale: string } }) {
  const loc = (params.locale === "en" ? "en" : "zh") as Locale;
  const isEn = loc === "en";
  const t = <T,>(zh: T, en: T): T => (isEn ? en : zh);

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="prose">
        {/* ===== Title ===== */}
        <h1>
          {t(
            "时空归一化方程 — 三大理论的统一",
            "Spacetime Unification Equation — Unifying Three Theories"
          )}
        </h1>

        {/* ===== 1. Hero Equation ===== */}
        <div className="flex justify-center my-10">
          <div className="text-3xl md:text-5xl">
            <Formula
              tex="\\\\frac{4\\\\pi^2 \\\\gamma^3 C^2}{T^2 G h \\\\nu} = 1"
              display
            />
          </div>
        </div>

        {/* ===== 2. Symbol Explanation Table ===== */}
        <h2>{t("符号说明", "Symbol Definitions")}</h2>
        <div className="overflow-x-auto my-6">
          <table className="min-w-full text-sm">
            <thead>
              <tr className="bg-gray-100">
                <th className="px-4 py-2 text-left">{t("符号", "Symbol")}</th>
                <th className="px-4 py-2 text-left">{t("含义", "Meaning")}</th>
                <th className="px-4 py-2 text-left">{t("所属理论", "Theory")}</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="px-4 py-2 font-mono font-bold">G</td>
                <td className="px-4 py-2">{t("万有引力常数", "Gravitational constant")}</td>
                <td className="px-4 py-2">{t("牛顿引力 / 广义相对论", "Newtonian gravity / General relativity")}</td>
              </tr>
              <tr className="border-b bg-gray-50">
                <td className="px-4 py-2 font-mono font-bold">γ</td>
                <td className="px-4 py-2">{t("物体周围空间螺旋运动的半径", "Radius of helical spatial motion around matter")}</td>
                <td className="px-4 py-2">{t("统一场论", "Unified Field Theory")}</td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-2 font-mono font-bold">C</td>
                <td className="px-4 py-2">{t("光速", "Speed of light")}</td>
                <td className="px-4 py-2">{t("狭义相对论", "Special relativity")}</td>
              </tr>
              <tr className="border-b bg-gray-50">
                <td className="px-4 py-2 font-mono font-bold">T</td>
                <td className="px-4 py-2">{t("螺旋运动的周期", "Period of helical motion")}</td>
                <td className="px-4 py-2">{t("统一场论", "Unified Field Theory")}</td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-2 font-mono font-bold">h</td>
                <td className="px-4 py-2">{t("普朗克常数", "Planck's constant")}</td>
                <td className="px-4 py-2">{t("量子力学", "Quantum mechanics")}</td>
              </tr>
              <tr className="border-b bg-gray-50">
                <td className="px-4 py-2 font-mono font-bold">ν</td>
                <td className="px-4 py-2">
                  {t(
                    <>德布罗意波频率（<Formula tex="\\\\nu = mc^2/h" />）</>,
                    <>de Broglie frequency (<Formula tex="\\\\nu = mc^2/h" />)</>
                  )}
                </td>
                <td className="px-4 py-2">{t("量子力学", "Quantum mechanics")}</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* ===== 3. Three-Step Derivation ===== */}
        <h2>{t("三步推导", "Three-Step Derivation")}</h2>
        <div className="space-y-6 my-8">
          {/* Step 1 */}
          <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
            <div className="flex items-start gap-4">
              <span className="flex items-center justify-center w-10 h-10 rounded-full bg-primary-600 text-white text-xl font-bold shrink-0">
                1
              </span>
              <div className="flex-1">
                <h3 className="mt-0 mb-2">
                  {t("开普勒第三定律（1687）", "Kepler&apos;s Third Law (1687)")}
                </h3>
                <div className="bg-white p-4 rounded-lg text-center my-3">
                  <Formula tex="\\\\frac{4\\\\pi^2 r^3}{T^2 G M} = 1" display />
                </div>
                <p className="text-gray-600 mb-0">
                  {t(
                    "一个质量M的物体周围，轨道半径r、周期T满足这个关系。",
                    "For an object of mass M, orbital radius r and period T satisfy this relation."
                  )}
                </p>
              </div>
            </div>
          </div>

          {/* Arrow */}
          <div className="flex justify-center text-3xl text-gray-400">↓</div>

          {/* Step 2 */}
          <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
            <div className="flex items-start gap-4">
              <span className="flex items-center justify-center w-10 h-10 rounded-full bg-primary-600 text-white text-xl font-bold shrink-0">
                2
              </span>
              <div className="flex-1">
                <h3 className="mt-0 mb-2">
                  {t("德布罗意质量-频率关系（1924）", "de Broglie Mass-Frequency Relation (1924)")}
                </h3>
                <div className="bg-white p-4 rounded-lg text-center my-3">
                  <Formula tex="\\\\nu = \\\\frac{mc^2}{h} \\\\quad \\\\Rightarrow \\\\quad M = \\\\frac{h\\\\nu}{c^2}" display />
                </div>
                <p className="text-gray-600 mb-0">
                  {t(
                    "物体的质量等价于一个量子频率。",
                    "The mass of an object is equivalent to a quantum frequency."
                  )}
                </p>
              </div>
            </div>
          </div>

          {/* Arrow */}
          <div className="flex justify-center text-3xl text-gray-400">↓</div>

          {/* Step 3 */}
          <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
            <div className="flex items-start gap-4">
              <span className="flex items-center justify-center w-10 h-10 rounded-full bg-primary-600 text-white text-xl font-bold shrink-0">
                3
              </span>
              <div className="flex-1">
                <h3 className="mt-0 mb-2">
                  {t("代入合并", "Substitution")}
                </h3>
                <p className="text-gray-600">
                  {t(
                    <>将 <Formula tex="M = h\\\\nu / c^2" /> 代入开普勒定律，并将 r 替换为 γ（螺旋半径）：</>,
                    <>Replace <Formula tex="M = h\\\\nu / c^2" /> into Kepler&apos;s law, replace r with γ (helical radius):</>
                  )}
                </p>
                <div className="bg-white p-4 rounded-lg text-center my-3">
                  <Formula tex="\\\\frac{4\\\\pi^2 \\\\gamma^3 c^2}{T^2 G h \\\\nu} = 1" display />
                </div>
                <p className="text-gray-600 mb-0 font-semibold">
                  {t(
                    "三个独立的物理定律合并成了一个方程。",
                    "Three independent physical laws merged into a single equation."
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ===== 4. Why This Matters ===== */}
        <div className="bg-gradient-to-r from-primary-50 to-blue-50 border-l-4 border-primary-500 rounded-r-xl p-6 my-10">
          <h2 className="mt-0 text-primary-800">
            {t("为什么这个方程重要？", "Why Does This Matter?")}
          </h2>
          <p className="text-gray-700 mb-0 leading-relaxed">
            {t(
              <>在人类物理学中，<Formula tex="G" /> 属于引力理论，<Formula tex="h" /> 属于量子力学，<Formula tex="c" /> 属于相对论。三者互不兼容。物理学家100年来一直在问：<Formula tex="G" /> 和 <Formula tex="h" /> 之间有什么关系？这个方程回答了：<Formula tex="G" /> 和 <Formula tex="h" /> 通过空间螺旋运动被精确约束在同一个等式中。<strong>引力、量子力学、相对论不是三个独立的理论，是同一个空间螺旋运动的三个侧面。</strong></>,
              <>In human physics, <Formula tex="G" /> belongs to gravitational theory, <Formula tex="h" /> belongs to quantum mechanics, <Formula tex="c" /> belongs to relativity. The three are mutually incompatible. Physicists have asked for 100 years: what is the relationship between <Formula tex="G" /> and <Formula tex="h" />? This equation answers: <Formula tex="G" /> and <Formula tex="h" /> are precisely constrained in the same equation through helical spatial motion. <strong>Gravity, quantum mechanics, and relativity are not three independent theories — they are three facets of the same helical spatial motion.</strong></>
            )}
          </p>
        </div>

        {/* ===== 5. A Stunning Corollary ===== */}
        <div className="bg-gradient-to-r from-yellow-50 to-amber-50 border-l-4 border-yellow-500 rounded-r-xl p-6 my-10">
          <h2 className="mt-0 text-amber-800">
            {t("惊人推论", "A Stunning Corollary")}
          </h2>
          <p className="text-gray-700">
            {t(
              <>如果假设螺旋旋转速度等于光速（统一场论基本假设），即 <Formula tex="T = 2\\\\pi\\\\gamma / c" />，代入方程可得：</>,
              <>If we assume helical rotation speed equals light speed (UFT basic assumption), i.e., <Formula tex="T = 2\\\\pi\\\\gamma / c" />, substituting into the equation yields:</>
            )}
          </p>
          <div className="bg-white/60 p-4 rounded-lg text-center my-4">
            <div className="text-2xl">
              <Formula tex="\\\\gamma = \\\\frac{Gm}{c^2}" display />
            </div>
          </div>
          <p className="text-gray-700 mb-0 leading-relaxed">
            {t(
              <>这意味着：每个粒子周围空间螺旋运动的半径，精确等于该粒子<strong>施瓦西半径的一半</strong>。施瓦西半径是广义相对论中黑洞事件视界的半径。人类一直以为它只对黑洞有意义。这个方程说：<strong>每一个基本粒子——哪怕是一个电子——都有自己的引力半径，而且这个半径就是空间螺旋运动的尺度。</strong></>,
              <>This means: the radius of helical spatial motion around every particle precisely equals <strong>half of that particle&apos;s Schwarzschild radius</strong>. The Schwarzschild radius is the event horizon radius of black holes in general relativity. Humans have always thought it only applies to black holes. This equation says: <strong>every fundamental particle — even an electron — has its own gravitational radius, and this radius is the scale of helical spatial motion.</strong></>
            )}
          </p>
        </div>

        {/* ===== 6. Numerical Verification ===== */}
        <h2>{t("数值验证", "Numerical Verification")}</h2>
        <p className="text-gray-600">
          {t("以电子参数代入验证：", "Verification using electron parameters:")}
        </p>
        <div className="bg-gray-50 border border-gray-200 font-mono text-sm rounded-xl p-6 my-6 overflow-x-auto">
          <div className="space-y-1">
            <p className="mb-0 text-gray-500">{t("// 电子参数", "// Electron parameters")}</p>
            <p className="mb-0 text-gray-800">m_e &nbsp;= 9.10938 × 10⁻³¹ kg</p>
            <p className="mb-0 text-gray-800">ν &nbsp;&nbsp;&nbsp;= m_e·c²/h = 1.236 × 10²⁰ Hz</p>
            <p className="mb-0 text-gray-800">γ &nbsp;&nbsp;&nbsp;= G·m_e/c² = 6.765 × 10⁻⁵⁸ m</p>
            <p className="mb-0 text-gray-800">T &nbsp;&nbsp;&nbsp;= 2πγ/c &nbsp;&nbsp;&nbsp;= 1.418 × 10⁻⁶⁵ s</p>
            <p className="mb-0 mt-3 pt-3 border-t border-gray-300 text-gray-500">{t("// 代入方程", "// Substitute into equation")}</p>
            <p className="mb-0 text-gray-800">4π²γ³c² / (T²·G·h·ν)</p>
            <p className="mb-0 text-primary-700 font-bold text-base mt-2">
              = 1.000000 &nbsp;&nbsp;✓ {t("完美等于 1", "Perfectly equals 1")}
            </p>
          </div>
        </div>

        {/* ===== 7. Disclaimer ===== */}
        <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg my-6">
          <p className="text-sm text-yellow-800 mb-0">
            {t(
              <><strong>声明：</strong>以上推导基于张祥前的统一场论框架和基本假设。方程的数学结构是严谨的，但其物理解释尚未经过学术界的同行评审。本站呈现此方程供研究者参考和独立验证。</>,
              <><strong>Disclaimer:</strong> The above derivation is based on Zhang Xiangqian&apos;s unified field theory framework and basic assumptions. The mathematical structure of the equation is rigorous, but its physical interpretation has not undergone academic peer review. This site presents this equation for researchers&apos; reference and independent verification.</>
            )}
          </p>
        </div>
      </div>

      <NextRead
        locale={loc}
        items={[
          {
            href: "/theory/overview",
            title: t("理论总览", "Theory Overview"),
            description: t(
              "回顾统一场论的整体框架",
              "Review the overall framework of the unified field theory"
            ),
          },
          {
            href: "/theory/visualization",
            title: t("可视化演示", "Visualizations"),
            description: t(
              "通过交互动画直观理解空间螺旋运动",
              "Understand helical spatial motion through interactive animations"
            ),
          },
        ]}
      />
    </div>
  );
}
