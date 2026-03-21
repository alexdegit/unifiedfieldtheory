import type { Metadata } from "next";
import NextRead from "@/components/NextRead";
import Formula from "@/components/Formula";
import type { Locale } from "@/lib/i18n";

export function generateMetadata({ params }: { params: { locale: string } }): Metadata {
  const isEn = params.locale === "en";
  return {
    title: isEn
      ? "Relationship with Mainstream Physics — Backward Compatibility Analysis"
      : "与主流物理学的关系 — 向下兼容性分析",
    description: isEn
      ? "How Zhang Xiangqian's unified field theory claims backward compatibility with Newtonian mechanics, special relativity, electromagnetic induction, and quantum phenomena."
      : "张祥前统一场论如何声称向下兼容牛顿力学、狭义相对论、电磁感应和量子现象。",
  };
}

export default function MainstreamComparisonPage({ params }: { params: { locale: string } }) {
  const loc = (params.locale === "en" ? "en" : "zh") as Locale;
  const isEn = loc === "en";
  const t = <T,>(zh: T, en: T): T => (isEn ? en : zh);

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="prose">
        <h1>{t("与主流物理学的关系", "Relationship with Mainstream Physics")}</h1>
        <p className="text-lg text-gray-600 mb-8">
          {t(
            "张祥前的统一场论声称向下兼容已有的物理学体系。以下是该理论与主流物理学各分支的对应关系分析。",
            "Zhang Xiangqian&apos;s unified field theory claims backward compatibility with established physics. The following is an analysis of how this theory corresponds to each branch of mainstream physics."
          )}
        </p>

        <h2>{t("牛顿力学（当 v ≪ C 时）", "Newtonian Mechanics (when v ≪ C)")}</h2>
        <p>
          {t(
            "当物体速度 v 远小于光速 C 时，统一场论方程退化为牛顿力学的经典结果：",
            "When object velocity v is much less than the speed of light C, the unified field theory equations reduce to the classical results of Newtonian mechanics:"
          )}
        </p>
        <ul>
          <li>
            {t(
              <><strong>F = ma 作为特例出现</strong>：在低速条件下，果克动量公式 <Formula tex="P = m(C - v)" /> 的微分形式自然简化为牛顿第二定律</>,
              <><strong>F = ma emerges as a special case</strong>: under low-speed conditions, the differential form of the Guoke momentum formula <Formula tex="P = m(C - v)" /> naturally simplifies to Newton&apos;s second law</>
            )}
          </li>
          <li>
            {t(
              <><strong>引力公式一致</strong>：统一场论中的引力场描述在宏观低速条件下与牛顿万有引力公式完全一致</>,
              <><strong>Gravitational force formula consistent with Newton</strong>: the gravitational field description in the unified field theory is fully consistent with Newton&apos;s law of universal gravitation under macroscopic low-speed conditions</>
            )}
          </li>
        </ul>
        <p>
          {t(
            "这意味着牛顿力学并没有被推翻，而是成为统一场论在低速极限下的自然结果——正如狭义相对论也将牛顿力学作为低速近似一样。",
            "This means Newtonian mechanics is not overthrown, but becomes a natural result of the unified field theory in the low-speed limit — just as special relativity also treats Newtonian mechanics as a low-speed approximation."
          )}
        </p>

        <h2>{t("狭义相对论", "Special Relativity")}</h2>
        <p>
          {t(
            "爱因斯坦的质速关系可以从果克动量公式推导得出：",
            "Einstein&apos;s mass-velocity relation can be derived from the Guoke momentum formula:"
          )}
        </p>
        <div className="bg-gray-50 p-6 rounded-lg my-6">
          <p className="mb-2">
            {t(
              <>静止时的果克动量：<Formula tex="P_{\\text{static}} = m'C'" /></>,
              <>Guoke momentum at rest: <Formula tex="P_{\\text{static}} = m'C'" /></>
            )}
          </p>
          <p className="mb-2">
            {t(
              <>运动时的果克动量：<Formula tex="P_{\\text{moving}} = m(C - V)" /></>,
              <>Guoke momentum in motion: <Formula tex="P_{\\text{moving}} = m(C - V)" /></>
            )}
          </p>
          <p className="mb-0">
            {t(
              <>由守恒关系推导出：<strong><Formula tex="m = \\frac{m'}{\\sqrt{1 - v^2/c^2}}" /></strong> —— 这正是爱因斯坦的质速关系公式</>,
              <>From conservation, we derive: <strong><Formula tex="m = \\frac{m'}{\\sqrt{1 - v^2/c^2}}" /></strong> — this is exactly Einstein&apos;s relativistic mass formula</>
            )}
          </p>
        </div>
        <p>
          {t(
            <>此外，<Formula tex="E = mc^2" /> 也自然涌现。统一场论声称，狭义相对论的核心结论不需要「时空弯曲」的假设，而是空间运动的自然结果。</>,
            <>Furthermore, <Formula tex="E = mc^2" /> emerges naturally. The unified field theory claims that the core conclusions of special relativity do not require the assumption of &ldquo;spacetime curvature,&rdquo; but are natural results of spatial motion.</>
          )}
        </p>

        <h2>{t("电磁感应", "Electromagnetic Induction")}</h2>
        <p>
          {t(
            "这是统一场论最引人注目的声称之一：法拉第电磁感应定律只是完整方程的一半。",
            "This is one of the most striking claims of the unified field theory: Faraday&apos;s law of electromagnetic induction is exactly HALF of the complete equation."
          )}
        </p>
        <div className="bg-primary-50 p-6 rounded-lg my-6">
          <p className="font-semibold text-primary-800 mb-3">
            {t("完整方程：", "The full equation:")}
          </p>
          <div className="text-center mb-4">
            <Formula tex="\\frac{d\\vec{B}}{dt} = -\\frac{\\vec{A} \\times \\vec{E}}{c^2} - \\frac{\\vec{V} \\times \\frac{d\\vec{E}}{dt}}{c^2}" display />
          </div>
          <p className="text-sm text-gray-700 mb-2">
            {t("这个方程包含两项：", "This equation contains two terms:")}
          </p>
          <ul className="text-sm text-gray-700">
            <li>
              {t(
                <><strong><Formula tex="\\frac{\\vec{V} \\times \\frac{d\\vec{E}}{dt}}{c^2}" /></strong> = 法拉第电磁感应（变化磁场产生电场）—— 已知物理学</>,
                <><strong><Formula tex="\\frac{\\vec{V} \\times \\frac{d\\vec{E}}{dt}}{c^2}" /></strong> = Faraday&apos;s electromagnetic induction (changing magnetic field produces electric field) — known physics</>
              )}
            </li>
            <li>
              {t(
                <><strong><Formula tex="-\\frac{\\vec{A} \\times \\vec{E}}{c^2}" /></strong> = 新项：变化磁场产生引力场 —— 统一场论的核心预测</>,
                <><strong><Formula tex="-\\frac{\\vec{A} \\times \\vec{E}}{c^2}" /></strong> = the NEW term: changing magnetic field produces gravitational field — the core prediction of the unified field theory</>
              )}
            </li>
          </ul>
        </div>
        <p>
          {t(
            "按照这一理论，法拉第在 19 世纪发现了完整图景的一半——电磁感应。而另一半——变化磁场产生引力场——一直被忽略，因为引力场效应极其微弱，需要精心设计的实验才能检测到。",
            "According to this theory, Faraday discovered half the picture in the 19th century — electromagnetic induction. The other half — changing magnetic fields producing gravitational fields — has been overlooked because the gravitational field effect is extremely weak and requires carefully designed experiments to detect."
          )}
        </p>

        <h2>{t("量子现象", "Quantum Phenomena")}</h2>

        <h3>{t("双缝干涉", "Double-Slit Interference")}</h3>
        <p>
          {t(
            "统一场论对双缝干涉实验的解释是：空间本身具有波动性质。空间以螺旋方式运动，物体周围的空间运动自然具有波动特征。因此，即使单个粒子通过双缝，空间的波动性也会产生干涉图样——不需要粒子同时通过两条缝。",
            "The unified field theory explains the double-slit interference experiment as follows: space itself has wave properties. Space moves in helical patterns, and the spatial motion around objects naturally has wave characteristics. Therefore, even when a single particle passes through the double slit, the wave nature of space produces interference patterns — the particle does not need to pass through both slits simultaneously."
          )}
        </p>

        <h3>{t("量子纠缠", "Quantum Entanglement")}</h3>
        <p>
          {t(
            <>统一场论对量子纠缠的解释是：场就是空间的运动，空间本身没有质量。因此，场的效应可以以超光速传播——这并不违反相对论，因为没有信息或物质在超光速运动。类比：如果你挥动一根极长的棍子，棍子远端的「运动信息」可以视为瞬间传达，但没有物质真正超光速移动。</>,
            <>The unified field theory explains quantum entanglement as follows: fields ARE spatial motion, and space itself has no mass. Therefore, field effects can propagate faster than the speed of light — this does not violate relativity because no information or matter moves faster than c. An analogy: if you wave an extremely long stick, the &ldquo;movement information&rdquo; at the far end can be seen as transmitted instantaneously, but no matter actually moves faster than light.</>
          )}
        </p>

        <h2>{t("与主流物理学的关键差异", "Key Differences from Mainstream Physics")}</h2>
        <div className="grid grid-cols-1 gap-4 my-6 not-prose">
          <div className="p-4 bg-primary-50 rounded-lg border border-primary-100">
            <h3 className="font-semibold text-primary-800 mb-1">
              {t("空间的角色", "The Role of Space")}
            </h3>
            <p className="text-sm text-gray-600">
              {t(
                "主流物理学：空间是静态的舞台（或在广义相对论中是可弯曲的几何结构）。统一场论：空间是活跃的参与者，空间本身在运动，运动就是场。",
                "Mainstream physics: space is a static stage (or in general relativity, a bendable geometric structure). Unified field theory: space is an active participant — space itself moves, and its motion IS the field."
              )}
            </p>
          </div>
          <div className="p-4 bg-primary-50 rounded-lg border border-primary-100">
            <h3 className="font-semibold text-primary-800 mb-1">
              {t("引力的本质", "The Nature of Gravity")}
            </h3>
            <p className="text-sm text-gray-600">
              {t(
                "主流物理学（广义相对论）：引力是时空弯曲的几何效应。统一场论：引力是空间加速运动的结果，是螺旋运动的向心加速度分量。",
                "Mainstream physics (general relativity): gravity is a geometric effect of spacetime curvature. Unified field theory: gravity is the result of spatial acceleration — the centripetal acceleration component of helical motion."
              )}
            </p>
          </div>
          <div className="p-4 bg-primary-50 rounded-lg border border-primary-100">
            <h3 className="font-semibold text-primary-800 mb-1">
              {t("质量的定义", "The Definition of Mass")}
            </h3>
            <p className="text-sm text-gray-600">
              {t(
                "主流物理学：质量是物体的固有属性（或通过希格斯机制获得）。统一场论：质量不是固有的，而是关系性的——质量等于物体周围空间位移条数，可以通过电磁场手段改变。",
                "Mainstream physics: mass is an intrinsic property of matter (or acquired through the Higgs mechanism). Unified field theory: mass is not intrinsic but relational — mass equals the number of spatial displacement lines around an object, and can be altered through electromagnetic means."
              )}
            </p>
          </div>
        </div>

        <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg my-6">
          <p className="text-sm text-yellow-800 mb-0">
            {t(
              <><strong>免责声明：</strong>以上内容是对张祥前统一场论与主流物理学关系的描述，基于张祥前本人的公开资料整理。该理论尚未经过学术界的同行评审和独立验证。本站呈现这些对比信息，不对理论的正确性做出判断。读者应自行评估这些理论声称的合理性。</>,
              <><strong>Disclaimer:</strong> The above describes the relationship between Zhang Xiangqian&apos;s unified field theory and mainstream physics, compiled from Zhang Xiangqian&apos;s own public materials. This theory has not undergone academic peer review or independent verification. This site presents this comparative information and makes no judgment on the correctness of the theory. Readers should evaluate the plausibility of these theoretical claims on their own.</>
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
              "深入了解统一场论的核心框架和基本公式",
              "Dive deeper into the core framework and fundamental formulas"
            ),
          },
          {
            href: "/comparison/navy-patents",
            title: t("美国海军专利对比", "US Navy Patent Comparison"),
            description: t(
              "对比张祥前的理论与美国海军的相关专利",
              "Compare Zhang's theory with related US Navy patents"
            ),
          },
        ]}
      />
    </div>
  );
}
