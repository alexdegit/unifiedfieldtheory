import type { Metadata } from "next";
import Link from "next/link";
import NextRead from "@/components/NextRead";
import Formula from "@/components/Formula";
import type { Locale } from "@/lib/i18n";

export function generateMetadata({ params }: { params: { locale: string } }): Metadata {
  const isEn = params.locale === "en";
  return {
    title: isEn ? "Theory Overview — Core Framework of the Unified Field Theory" : "理论总览 — 统一场论核心框架",
    description: isEn
      ? "Core framework of Zhang Xiangqian's unified field theory: only matter and space exist, four fundamental forces are components of space's helical motion, Guoke momentum formula P = m(C - v)."
      : "张祥前统一场论的核心框架：宇宙只有物体和空间两种存在，四种基本力是空间螺旋运动的不同分量，果克动量公式 P = m(C - v)。",
  };
}

export default function TheoryOverviewPage({ params }: { params: { locale: string } }) {
  const loc = (params.locale === "en" ? "en" : "zh") as Locale;
  const isEn = loc === "en";
  const t = <T,>(zh: T, en: T): T => (isEn ? en : zh);

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="prose">
        <h1>{t("理论总览", "Theory Overview")}</h1>
        <p className="text-lg text-gray-600 mb-8">
          {t(
            "张祥前统一场论的核心思想：宇宙中只有物体和空间两种存在，四种基本力是空间螺旋运动的不同分量。",
            "The core idea of Zhang Xiangqian's unified field theory: only matter and space exist in the universe, and the four fundamental forces are different components of space's helical motion."
          )}
        </p>

        {/* Theory Sub-page Navigation */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8 not-prose">
          {[
            {
              href: `/${loc}/theory/time`,
              title: t("时间的本质", "The Nature of Time"),
              description: t(
                "时间 = 空间光速发散运动的感受",
                "Time = perception of space diverging at light speed"
              ),
            },
            {
              href: `/${loc}/theory/mass`,
              title: t("质量的本质", "The Nature of Mass"),
              description: t(
                "质量 = 空间位移的条数",
                "Mass = number of spatial displacement lines"
              ),
            },
            {
              href: `/${loc}/theory/field`,
              title: t("场的本质", "The Nature of Fields"),
              description: t(
                "场 = 空间的运动模式，含3D可视化",
                "Fields = patterns of spatial motion, with 3D visualization"
              ),
            },
            {
              href: `/${loc}/theory/equations`,
              title: t("核心公式集", "Core Equations"),
              description: t(
                "18个核心公式与大统一推导",
                "18 core equations and grand unification derivation"
              ),
            },
            {
              href: `/${loc}/theory/unification-equation`,
              title: t("时空归一化方程", "Spacetime Unification Equation"),
              description: t(
                "G、h、c 在同一个方程中 — 三大理论的统一",
                "G, h, c in one equation — unifying three theories"
              ),
            },
            {
              href: `/${loc}/theory/deep-dive`,
              title: t("从零开始理解", "Understanding from Scratch"),
              description: t(
                "11步阶梯式科普，不用公式理解统一场论",
                "11-step explainer, understand without formulas"
              ),
            },
            {
              href: `/${loc}/theory/visualization`,
              title: t("交互式可视化", "Interactive Visualization"),
              description: t(
                "螺旋运动、四种力、量子纠缠的动画演示",
                "Animated demos of helical motion, four forces, entanglement"
              ),
            },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group p-6 rounded-xl border border-gray-200 hover:border-primary-300 hover:shadow-lg transition-all"
            >
              <h3 className="font-semibold text-primary-700 group-hover:text-primary-600 mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-gray-600">{item.description}</p>
            </Link>
          ))}
        </div>

        <h2>{t("宇宙根本法则", "Fundamental Law of the Universe")}</h2>
        <p>
          {t(
            <>张祥前统一场论的出发点极为简洁：<strong>宇宙中只有两种存在——物体和空间</strong>，没有第三种。所有物理现象，都是物体在空间中运动、以及空间本身运动的结果。</>,
            <>The starting point of Zhang Xiangqian&apos;s unified field theory is remarkably simple: <strong>only two things exist in the universe — matter and space</strong>, nothing else. All physical phenomena are the result of matter moving through space and space itself moving.</>
          )}
        </p>
        <p>
          {t(
            <>这里的关键突破是：<strong>空间不是静止的背景</strong>，空间本身可以运动。空间的运动就是我们所说的「场」——电场、磁场、引力场、核力场，都是空间以不同方式运动的表现。</>,
            <>The key breakthrough is: <strong>space is not a static background</strong> — space itself can move. The motion of space is what we call &ldquo;fields&rdquo; — electric fields, magnetic fields, gravitational fields, and nuclear force fields are all manifestations of space moving in different ways.</>
          )}
        </p>

        <h2>{t("螺旋运动统一四种力", "Helical Motion Unifies the Four Forces")}</h2>
        <p>
          {t(
            "张祥前认为，空间中存在的物体周围的空间以螺旋方式运动。这种螺旋运动可以分解为三个分量：",
            "Zhang Xiangqian proposes that space around matter moves in a helical pattern. This helical motion can be decomposed into three components:"
          )}
        </p>
        <div className="bg-primary-50 p-6 rounded-lg my-6">
          <ul className="space-y-3">
            <li>
              <strong className="text-primary-700">{t("直线运动分量", "Linear motion component")}</strong> → {t("对应电场", "corresponds to the electric field")}
            </li>
            <li>
              <strong className="text-primary-700">{t("环绕运动分量", "Rotational motion component")}</strong> → {t("对应磁场", "corresponds to the magnetic field")}
            </li>
            <li>
              <strong className="text-primary-700">{t("向心加速度分量", "Centripetal acceleration component")}</strong> → {t("对应引力场", "corresponds to the gravitational field")}
            </li>
          </ul>
          <p className="mt-4 text-sm text-gray-600">
            {t(
              "核力场则是在极小尺度下，螺旋运动各分量之间的耦合效应。",
              "The nuclear force field is the coupling effect between helical motion components at extremely small scales."
            )}
          </p>
        </div>
        <p>
          {t(
            "用一个直观的比喻：想象一根弹簧被拉伸展开。沿弹簧轴线的运动是电场，绕轴线的旋转是磁场，指向轴线的向心力是引力场。四种力不是独立的存在，而是同一种运动的不同侧面。",
            "An intuitive analogy: imagine a spring being stretched out. Motion along the spring's axis is the electric field, rotation around the axis is the magnetic field, and centripetal force pointing toward the axis is the gravitational field. The four forces are not independent entities, but different facets of the same motion."
          )}
        </p>

        <h2>{t("果克动量公式", "Guoke Momentum Formula")}</h2>
        <p>
          {t("统一场论的核心公式之一是果克动量公式：", "One of the core formulas of the unified field theory is the Guoke momentum formula:")}
        </p>
        <div className="bg-gray-50 p-6 rounded-lg my-6 text-center">
          <div className="mb-4">
            <Formula tex="\\\\vec{P} = m(\\\\vec{C} - \\\\vec{v})" display />
          </div>
          <div className="text-sm text-gray-600 space-y-1">
            <p><Formula tex="\\\\vec{P}" /> — {t("果克动量（矢量，物体的空间动量）", "Guoke momentum (vector, spatial momentum of matter)")}</p>
            <p><Formula tex="m" /> — {t("质量（标量）", "mass (scalar)")}</p>
            <p><Formula tex="\\\\vec{C}" /> — {t("矢量光速（方向可变，模为标量光速 c）", "vector speed of light (direction variable, magnitude is scalar c)")}</p>
            <p><Formula tex="\\\\vec{v}" /> — {t("物体运动速度（矢量）", "velocity of the object (vector)")}</p>
          </div>
        </div>
        <p>
          {t(
            <>注意公式中的 C 和 v 都是矢量，不是简单的标量减法。矢量光速 <Formula tex="\\\\vec{C}" /> 的方向可以变化，但其模（标量光速 c）不变——这是张祥前对光速不变原理的独特诠释。</>,
            <>Note that C and v in the formula are both vectors, not simple scalar subtraction. The direction of vector speed of light <Formula tex="\\\\vec{C}" /> can change, but its magnitude (scalar speed of light c) remains constant — this is Zhang Xiangqian&apos;s unique interpretation of the principle of the constancy of the speed of light.</>
          )}
        </p>
        <p>
          {t(
            <>这个公式表明：物体静止时（<Formula tex="\\\\vec{v}=0" />），其果克动量为 <Formula tex="m\\\\vec{C}" />，全部表现为质量（空间位移）。当物体速度趋近光速（<Formula tex="|\\\\vec{v}| \\\\to c" />）时，果克动量趋近于零，质量消失。这与爱因斯坦的质能方程 <Formula tex="E=mc^2" /> 有深刻的内在联系。</>,
            <>This formula shows: when an object is at rest (<Formula tex="\\\\vec{v}=0" />), its Guoke momentum is <Formula tex="m\\\\vec{C}" />, entirely manifested as mass (spatial displacement). As the object&apos;s speed approaches the speed of light (<Formula tex="|\\\\vec{v}| \\\\to c" />), the Guoke momentum approaches zero and mass disappears. This has a profound inner connection with Einstein&apos;s mass-energy equation <Formula tex="E=mc^2" />.</>
          )}
        </p>

        <h2>{t("四力统一方程", "Four-Force Unification Equation")}</h2>
        <p>
          {t(
            "在螺旋运动模型的基础上，张祥前推导出统一场方程，将四种基本力纳入一个方程框架中。核心思路是：",
            "Building on the helical motion model, Zhang derived the unified field equation, incorporating all four fundamental forces into one framework. The core logic is:"
          )}
        </p>
        <ol>
          <li>{t("空间以光速向物体周围发散运动", "Space diverges outward from matter at the speed of light")}</li>
          <li>{t("这种发散运动呈螺旋形态", "This divergent motion takes a helical form")}</li>
          <li>{t("螺旋运动的不同分量产生不同的力", "Different components of the helical motion produce different forces")}</li>
          <li>{t("各分量之间可以相互转化——这就是为什么变化电磁场可以产生引力场", "These components can transform into each other — this is why changing electromagnetic fields can generate gravitational fields")}</li>
        </ol>

        <h2>{t("与主流物理学的关系", "Relationship with Mainstream Physics")}</h2>
        <p>
          {t(
            "张祥前的理论并非要推翻现有物理学，而是试图在更高层面上统一它们：",
            "Zhang's theory does not seek to overthrow existing physics, but attempts to unify them at a higher level:"
          )}
        </p>
        <ul>
          <li>{t(<><strong>向下兼容牛顿力学</strong>：当 v 远小于 C 时，统一场论退化为牛顿力学的结果</>, <><strong>Backward compatible with Newtonian mechanics</strong>: when v is much less than C, the unified field theory reduces to Newtonian results</>)}</li>
          <li>{t(<><strong>自然推出质速关系</strong>：爱因斯坦的质速公式可以从果克动量公式推导出来</>, <><strong>Naturally derives the mass-velocity relation</strong>: Einstein&apos;s mass-velocity formula can be derived from the Guoke momentum formula</>)}</li>
          <li>{t(<><strong>包含电磁感应</strong>：法拉第电磁感应定律是统一场方程在特定条件下的特例</>, <><strong>Encompasses electromagnetic induction</strong>: Faraday&apos;s law of electromagnetic induction is a special case of the unified field equation</>)}</li>
          <li>{t(<><strong>解释量子现象</strong>：对双缝干涉和量子纠缠给出了基于空间运动的解释</>, <><strong>Explains quantum phenomena</strong>: provides space-motion-based explanations for double-slit interference and quantum entanglement</>)}</li>
        </ul>

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
            href: "/experiment/overview",
            title: t("实验验证", "Experimental Verification"),
            description: t("了解张祥前如何通过实验验证理论预测", "Learn how Zhang verified theoretical predictions through experiments"),
          },
          {
            href: "/comparison/navy-patents",
            title: t("美国海军专利对比", "US Navy Patent Comparison"),
            description: t("对比张祥前的理论与美国海军的相关专利", "Compare Zhang's theory with related US Navy patents"),
          },
        ]}
      />
    </div>
  );
}
