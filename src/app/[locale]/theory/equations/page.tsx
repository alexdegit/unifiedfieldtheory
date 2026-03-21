import type { Metadata } from "next";
import NextRead from "@/components/NextRead";
import Formula from "@/components/Formula";
import type { Locale } from "@/lib/i18n";

export function generateMetadata({ params }: { params: { locale: string } }): Metadata {
  const isEn = params.locale === "en";
  return {
    title: isEn ? "Core Equations — Unified Field Theory" : "核心公式集 — 统一场论",
    description: isEn
      ? "The 18 core equations of Zhang Xiangqian's unified field theory and the grand unification derivation from P=(C-V)M."
      : "张祥前统一场论的18个核心公式，以及从 P=(C-V)M 推导出四种力的大统一过程。",
  };
}

export default function EquationsPage({ params }: { params: { locale: string } }) {
  const loc = (params.locale === "en" ? "en" : "zh") as Locale;
  const isEn = loc === "en";
  const t = <T,>(zh: T, en: T): T => (isEn ? en : zh);

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="prose">
        <h1>{t("核心公式集", "Core Equations")}</h1>
        <p className="text-lg text-gray-600 mb-8">
          {t(
            "张祥前统一场论的18个核心公式，以及从万有统一方程推导出四种基本力的过程。",
            "The 18 core equations of Zhang Xiangqian&apos;s unified field theory, and the derivation of four fundamental forces from the universal unification equation."
          )}
        </p>

        <h2>{t("18个核心公式", "18 Core Equations")}</h2>
        <ol className="space-y-4">
          <li>
            <strong>{t("万有统一方程", "Universal Unification Equation")}</strong>
            <div className="bg-gray-50 p-3 rounded my-2 text-center">
              <Formula tex="\\\\vec{P} = (\\\\vec{C} - \\\\vec{V})M" display />
            </div>
            <p className="text-sm text-gray-600">{t("对时间求导可得四种基本力", "Differentiating with respect to time yields the four fundamental forces")}</p>
          </li>
          <li>
            <strong>{t("三维螺旋时空方程", "3D Helical Spacetime Equation")}</strong>
            <p className="text-sm text-gray-600">{t("描述空间以柱状螺旋方式从物质周围发散", "Describes space diverging from matter in a cylindrical helix pattern")}</p>
          </li>
          <li>
            <strong>{t("磁场定义", "Magnetic Field Definition")}</strong>
            <div className="bg-gray-50 p-3 rounded my-2 text-center">
              <Formula tex="\\\\vec{B} = \\\\frac{\\\\vec{V} \\\\times \\\\vec{E}}{c^2}" display />
            </div>
            <p className="text-sm text-gray-600">{t("磁场是运动电场的相对论效应", "Magnetic field is a relativistic effect of a moving electric field")}</p>
          </li>
          <li>
            <strong>{t("空间波动方程", "Space Wave Equation")}</strong>
            <p className="text-sm text-gray-600">{t("描述空间位移的波动传播特性", "Describes the wave propagation properties of spatial displacement")}</p>
          </li>
          <li>
            <strong>{t("时空统一方程", "Spacetime Unification")}</strong>
            <div className="bg-gray-50 p-3 rounded my-2 text-center">
              <Formula tex="\\\\vec{R} = \\\\vec{C} \\\\, t" display />
            </div>
            <p className="text-sm text-gray-600">{t("空间位移矢量等于矢量光速乘以时间", "Spatial displacement vector equals vector speed of light times time")}</p>
          </li>
          <li>
            <strong>{t("运动引力场产生电磁场", "Moving Gravitational Field Produces EM Fields")}</strong>
            <p className="text-sm text-gray-600">{t("引力场运动时会产生电场和磁场分量", "A moving gravitational field generates electric and magnetic field components")}</p>
          </li>
          <li>
            <strong>{t("电场定义方程", "Electric Field Definition Equation")}</strong>
            <p className="text-sm text-gray-600">{t("电场是空间螺旋运动的直线速度分量", "Electric field is the linear velocity component of helical spatial motion")}</p>
          </li>
          <li>
            <strong>{t("统一场论能量方程", "UFT Energy Equation")}</strong>
            <p className="text-sm text-gray-600">{t("从果克动量推导的能量表达式", "Energy expression derived from Guoke momentum")}</p>
          </li>
          <li>
            <strong>{t("变化磁场产生引力场和电场", "Changing Magnetic Field Produces Gravitational and Electric Fields")}</strong>
            <div className="bg-gray-50 p-3 rounded my-2 text-center">
              <Formula tex="\\\\frac{d\\\\vec{B}}{dt} = -\\\\frac{\\\\vec{A} \\\\times \\\\vec{E}}{c^2} - \\\\frac{\\\\vec{V} \\\\times \\\\frac{d\\\\vec{E}}{dt}}{c^2}" display />
            </div>
            <p className="text-sm text-gray-600">{t("变化磁场不仅产生电场，还产生引力场", "A changing magnetic field produces not only an electric field but also a gravitational field")}</p>
          </li>
          <li>
            <strong>{t("光速飞行器动力学", "Light-Speed Vehicle Dynamics")}</strong>
            <div className="bg-gray-50 p-3 rounded my-2 text-center">
              <Formula tex="\\\\vec{F} = \\\\frac{d\\\\vec{P}}{dt} = (\\\\vec{C} - \\\\vec{V})\\\\frac{dm}{dt}" display />
            </div>
            <p className="text-sm text-gray-600">{t("当质量变化时的动力学方程", "Dynamics equation when mass is changing")}</p>
          </li>
          <li>
            <strong>{t("质量定义方程", "Mass Definition Equation")}</strong>
            <p className="text-sm text-gray-600">{t("质量 = 每单位立体角的空间位移线数量", "Mass = number of spatial displacement lines per unit solid angle")}</p>
          </li>
          <li>
            <strong>{t("磁矢势方程", "Magnetic Vector Potential Equation")}</strong>
            <p className="text-sm text-gray-600">{t("描述磁场的矢量势与空间运动的关系", "Describes the relationship between magnetic vector potential and spatial motion")}</p>
          </li>
          <li>
            <strong>{t("引力场定义", "Gravitational Field Definition")}</strong>
            <p className="text-sm text-gray-600">{t("引力场是空间螺旋运动的向心加速度分量", "Gravitational field is the centripetal acceleration component of helical spatial motion")}</p>
          </li>
          <li>
            <strong>{t("电荷定义", "Electric Charge Definition")}</strong>
            <p className="text-sm text-gray-600">{t("电荷与空间位移线的发散特性相关", "Electric charge relates to the divergence properties of spatial displacement lines")}</p>
          </li>
          <li>
            <strong>{t("静止动量", "Static Momentum")}</strong>
            <div className="bg-gray-50 p-3 rounded my-2 text-center">
              <Formula tex="\\\\vec{P}_{\\\\text{static}} = m' \\\\vec{C}\\\\,'" display />
            </div>
            <p className="text-sm text-gray-600">{t("物体静止时的果克动量", "Guoke momentum of an object at rest")}</p>
          </li>
          <li>
            <strong>{t("运动动量", "Moving Momentum")}</strong>
            <div className="bg-gray-50 p-3 rounded my-2 text-center">
              <Formula tex="\\\\vec{P}_{\\\\text{moving}} = m(\\\\vec{C} - \\\\vec{V})" display />
            </div>
            <p className="text-sm text-gray-600">{t("物体运动时的果克动量", "Guoke momentum of a moving object")}</p>
          </li>
          <li>
            <strong>{t("变化引力场产生电场", "Changing Gravitational Field Produces Electric Field")}</strong>
            <p className="text-sm text-gray-600">{t("引力场的时间变化会感应出电场", "Time variation of a gravitational field induces an electric field")}</p>
          </li>
          <li>
            <strong>{t("加速正电荷产生反向引力场", "Accelerating Positive Charge Produces Reverse Gravitational Field")}</strong>
            <p className="text-sm text-gray-600">{t("加速运动的正电荷会在其周围产生与正常引力方向相反的引力场", "An accelerating positive charge produces a gravitational field in the opposite direction to normal gravity around it")}</p>
          </li>
        </ol>

        <h2>{t("大统一推导", "Grand Unification Derivation")}</h2>
        <p>
          {t(
            <>统一场论最核心的成就是从万有统一方程 <Formula tex="\\\\vec{P} = (\\\\vec{C} - \\\\vec{V})M" /> 对时间求导，得到四个项，每一项恰好对应一种基本力：</>,
            <>The most central achievement of the unified field theory is differentiating the universal unification equation <Formula tex="\\\\vec{P} = (\\\\vec{C} - \\\\vec{V})M" /> with respect to time, yielding four terms, each corresponding to one of the four fundamental forces:</>
          )}
        </p>
        <div className="bg-gray-50 p-6 rounded-lg my-6 text-center">
          <Formula tex="\\\\frac{d\\\\vec{P}}{dt} = \\\\frac{d\\\\left[(\\\\vec{C} - \\\\vec{V})M\\\\right]}{dt}" display />
        </div>
        <p>
          {t(
            "应用乘积求导法则展开后，得到四个项：",
            "Expanding using the product rule yields four terms:"
          )}
        </p>
        <div className="bg-primary-50 p-6 rounded-lg my-6">
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <span className="text-2xl font-bold text-primary-700 shrink-0">1</span>
              <div>
                <Formula tex="\\\\frac{dm}{dt} \\\\cdot \\\\vec{C}" />
                <p className="text-sm text-gray-600 mt-1">
                  {t(
                    <>→ <strong>电力</strong>：质量变化率乘以矢量光速，产生电场力</>,
                    <>→ <strong>Electric force</strong>: rate of mass change times vector speed of light, producing electric field force</>
                  )}
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-2xl font-bold text-primary-700 shrink-0">2</span>
              <div>
                <Formula tex="\\\\frac{dm}{dt} \\\\cdot (-\\\\vec{V})" />
                <p className="text-sm text-gray-600 mt-1">
                  {t(
                    <>→ <strong>磁力</strong>：质量变化率乘以负速度，产生磁场力</>,
                    <>→ <strong>Magnetic force</strong>: rate of mass change times negative velocity, producing magnetic field force</>
                  )}
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-2xl font-bold text-primary-700 shrink-0">3</span>
              <div>
                <Formula tex="\\\\frac{d\\\\vec{C}}{dt} \\\\cdot M" />
                <p className="text-sm text-gray-600 mt-1">
                  {t(
                    <>→ <strong>核力</strong>：矢量光速的变化率乘以质量，产生核力</>,
                    <>→ <strong>Nuclear force</strong>: rate of change of vector speed of light times mass, producing nuclear force</>
                  )}
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-2xl font-bold text-primary-700 shrink-0">4</span>
              <div>
                <Formula tex="\\\\frac{d(-\\\\vec{V})}{dt} \\\\cdot M" />
                <p className="text-sm text-gray-600 mt-1">
                  {t(
                    <>→ <strong>引力（惯性力）</strong>：负速度的变化率乘以质量，产生引力场力（等效于惯性力）</>,
                    <>→ <strong>Gravitational force (inertial force)</strong>: rate of change of negative velocity times mass, producing gravitational field force (equivalent to inertial force)</>
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>
        <p>
          {t(
            "这就是大统一的精髓：四种看似不同的基本力，实际上都是同一个方程对时间求导后自然出现的不同项。它们不是独立的力，而是同一种空间运动在不同方面的表现。",
            "This is the essence of grand unification: the four seemingly different fundamental forces are actually different terms that naturally emerge when differentiating the same equation with respect to time. They are not independent forces, but different aspects of the same spatial motion."
          )}
        </p>

        <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg my-6">
          <p className="text-sm text-yellow-800">
            {t(
              <><strong>注意：</strong>以上公式和推导尚未经过学术界的同行评审。本站呈现张祥前的理论体系，供有兴趣的研究者参考和独立验证。我们不对理论的正确性做出判断。公式中的符号约定可能与主流物理学文献有所不同。</>,
              <><strong>Note:</strong> The equations and derivations above have not undergone academic peer review. This site presents Zhang Xiangqian&apos;s theoretical system for reference and independent verification by interested researchers. We make no judgment on the correctness of the theory. Symbol conventions may differ from mainstream physics literature.</>
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
            description: t("回顾统一场论的整体框架", "Review the overall framework of the unified field theory"),
          },
          {
            href: "/experiment/overview",
            title: t("实验验证", "Experimental Verification"),
            description: t("了解张祥前如何通过实验验证理论预测", "Learn how Zhang verified theoretical predictions through experiments"),
          },
        ]}
      />
    </div>
  );
}
