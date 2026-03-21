import type { Metadata } from "next";
import NextRead from "@/components/NextRead";
import Formula from "@/components/Formula";
import type { Locale } from "@/lib/i18n";

export function generateMetadata({ params }: { params: { locale: string } }): Metadata {
  const isEn = params.locale === "en";
  return {
    title: isEn ? "The Nature of Mass — Unified Field Theory" : "质量的本质 — 统一场论",
    description: isEn
      ? "Mass is the number of spatial displacement lines moving outward at light speed per unit solid angle around an object. Mass is not intrinsic."
      : "质量是物体周围每单位立体角以光速向外运动的空间位移线数量。质量不是物体的内在属性。",
  };
}

export default function MassPage({ params }: { params: { locale: string } }) {
  const loc = (params.locale === "en" ? "en" : "zh") as Locale;
  const isEn = loc === "en";
  const t = <T,>(zh: T, en: T): T => (isEn ? en : zh);

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="prose">
        <h1>{t("质量的本质", "The Nature of Mass")}</h1>
        <p className="text-lg text-gray-600 mb-8">
          {t(
            "质量不是物体的内在属性，而是描述物体与周围空间关系的物理量。",
            "Mass is not an intrinsic property of matter, but a physical quantity describing the relationship between an object and its surrounding space."
          )}
        </p>

        <h2>{t("质量的定义", "Definition of Mass")}</h2>
        <p>
          {t(
            <>在统一场论中，<strong>质量 = 物体周围每单位立体角以光速向外运动的空间位移线数量</strong>。质量不是物体「拥有」的东西，而是描述物体与周围空间运动关系的量。</>,
            <>In the unified field theory, <strong>mass = the number of spatial displacement lines moving outward at light speed per unit solid angle around an object</strong>. Mass is not something an object &ldquo;possesses&rdquo; — it describes the relationship between the object and the motion of its surrounding space.</>
          )}
        </p>
        <div className="bg-primary-50 p-6 rounded-lg my-6">
          <ul className="space-y-3">
            <li>
              {t(
                <><strong>质量越大</strong> = 以光速运动的空间位移线越多</>,
                <><strong>More mass</strong> = more spatial displacement lines moving at light speed</>
              )}
            </li>
            <li>
              {t(
                <><strong>当位移线减少到零时</strong> → 质量 = 零 → 物体自动以光速运动（激发态）</>,
                <><strong>When displacement lines reduce to zero</strong> → mass = zero → the object automatically moves at the speed of light (excited state)</>
              )}
            </li>
          </ul>
        </div>

        <h2>{t("飞碟原理的联系", "Connection to Flying Saucer Principle")}</h2>
        <p>
          {t(
            <>张祥前指出，如果能够通过变化的电磁场产生反引力场，就可以减少物体周围的空间位移线数量，从而使质量趋近于零。这就是<strong>飞碟的工作原理</strong>：利用变化的电磁场产生反引力场，减少空间位移线，使质量降至零，物体就能以光速运动。</>,
            <>Zhang Xiangqian points out that if one can use a changing electromagnetic field to generate an anti-gravitational field, it becomes possible to reduce the number of spatial displacement lines around an object, bringing its mass toward zero. This is the <strong>principle behind flying saucers</strong>: use a changing EM field to generate an anti-gravitational field, reduce spatial displacement lines, bring mass to zero, and the object can move at the speed of light.</>
          )}
        </p>

        <h2>{t("与相对论的关系", "Relationship with Relativity")}</h2>
        <p>
          {t(
            "爱因斯坦的质速关系可以从果克动量公式自然推导出来：",
            "Einstein&apos;s mass-velocity relationship can be naturally derived from the Guoke momentum formula:"
          )}
        </p>
        <div className="bg-gray-50 p-6 rounded-lg my-6 text-center">
          <div className="mb-4">
            <Formula tex="m = \\\\frac{m'}{\\\\sqrt{1 - v^2 / c^2}}" display />
          </div>
          <div className="text-sm text-gray-600">
            <p><Formula tex="m'" /> — {t("静止质量", "rest mass")}</p>
            <p><Formula tex="m" /> — {t("运动质量", "relativistic mass")}</p>
            <p><Formula tex="v" /> — {t("物体运动速度", "velocity of the object")}</p>
          </div>
        </div>

        <h2>{t("果克动量推导", "Guoke Momentum Derivation")}</h2>
        <p>
          {t(
            "从果克动量出发：",
            "Starting from Guoke momentum:"
          )}
        </p>
        <div className="bg-gray-50 p-6 rounded-lg my-6 space-y-3">
          <p>{t("静止动量：", "Static momentum: ")}<Formula tex="\\\\vec{P}_{\\\\text{static}} = m' \\\\vec{C}\\\\,'" /></p>
          <p>{t("运动动量：", "Moving momentum: ")}<Formula tex="\\\\vec{P}_{\\\\text{moving}} = m(\\\\vec{C} - \\\\vec{V})" /></p>
          <p>{t("由动量守恒：", "By conservation of momentum: ")}<Formula tex="m' \\\\vec{C}\\\\,' = m(\\\\vec{C} - \\\\vec{V})" /></p>
          <p className="font-semibold">
            {t(
              <>当 <Formula tex="m' = 0" /> 时，则 <Formula tex="\\\\vec{V} = \\\\vec{C}" />——质量为零的物体必然以光速运动。</>,
              <>When <Formula tex="m' = 0" />, then <Formula tex="\\\\vec{V} = \\\\vec{C}" /> — an object with zero mass must move at the speed of light.</>
            )}
          </p>
        </div>

        <h2>{t("物质的三种时空状态", "Three Spacetime States of Matter")}</h2>
        <div className="overflow-x-auto my-6">
          <table className="min-w-full border-collapse">
            <thead>
              <tr className="bg-primary-50">
                <th className="border border-gray-300 px-4 py-2 text-left">{t("状态", "State")}</th>
                <th className="border border-gray-300 px-4 py-2 text-left">{t("质量", "Mass")}</th>
                <th className="border border-gray-300 px-4 py-2 text-left">{t("速度", "Speed")}</th>
                <th className="border border-gray-300 px-4 py-2 text-left">{t("特性", "Properties")}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-semibold">{t("正常态", "Normal State")}</td>
                <td className="border border-gray-300 px-4 py-2">{t("正常质量", "Normal mass")}</td>
                <td className="border border-gray-300 px-4 py-2">{t("正常速度", "Normal speed")}</td>
                <td className="border border-gray-300 px-4 py-2">{t("日常物质的正常状态", "Normal state of everyday matter")}</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-2 font-semibold">{t("准激发态", "Quasi-Excited State")}</td>
                <td className="border border-gray-300 px-4 py-2">
                  {t(
                    <>极微小（如5000kg飞行器仅约0.45g）</>,
                    <>Extremely tiny (e.g., ~0.45g for a 5000kg craft)</>
                  )}
                </td>
                <td className="border border-gray-300 px-4 py-2">{t("任意亚光速", "Any sub-light speed")}</td>
                <td className="border border-gray-300 px-4 py-2">{t("可穿墙而过", "Can pass through walls")}</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-semibold">{t("激发态", "Excited State")}</td>
                <td className="border border-gray-300 px-4 py-2">{t("零", "Zero")}</td>
                <td className="border border-gray-300 px-4 py-2">{t("必须光速", "Must be light speed")}</td>
                <td className="border border-gray-300 px-4 py-2">{t("内部时间为零", "Time = zero inside")}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          {t(
            "准激发态是最具实用价值的状态：物体质量极小但不为零，可以以任意亚光速运动，并且由于质量极小，可以穿过固体物质。这是飞碟技术追求的目标状态。",
            "The quasi-excited state is the most practically valuable: the object&apos;s mass is extremely small but not zero, it can move at any sub-light speed, and because its mass is so tiny, it can pass through solid matter. This is the target state that flying saucer technology aims to achieve."
          )}
        </p>

        <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg my-6">
          <p className="text-sm text-yellow-800">
            {t(
              <><strong>注意：</strong>以上理论框架尚未经过学术界的同行评审。本站呈现张祥前的理论体系，供有兴趣的研究者参考和独立验证。我们不对理论的正确性做出判断。</>,
              <><strong>Note:</strong> The theoretical framework above has not undergone academic peer review. This site presents Zhang Xiangqian&apos;s theoretical system for reference and independent verification by interested researchers. We make no judgment on the correctness of the theory.</>
            )}
          </p>
        </div>
      </div>

      <NextRead
        locale={loc}
        items={[
          {
            href: "/theory/field",
            title: t("场的本质", "The Nature of Fields"),
            description: t("探索场作为空间本身运动的本质", "Explore how fields are the motion of space itself"),
          },
          {
            href: "/theory/equations",
            title: t("核心公式集", "Core Equations"),
            description: t("统一场论的18个核心公式", "The 18 core equations of the unified field theory"),
          },
        ]}
      />
    </div>
  );
}
