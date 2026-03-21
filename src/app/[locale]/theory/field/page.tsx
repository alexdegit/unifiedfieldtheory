import type { Metadata } from "next";
import dynamic from "next/dynamic";
import NextRead from "@/components/NextRead";
import type { Locale } from "@/lib/i18n";

const HelixVisualization = dynamic(
  () => import("@/components/visualizations/HelixVisualization"),
  { ssr: false }
);

export function generateMetadata({ params }: { params: { locale: string } }): Metadata {
  const isEn = params.locale === "en";
  return {
    title: isEn ? "The Nature of Fields — Unified Field Theory" : "场的本质 — 统一场论",
    description: isEn
      ? "Field is not something in space; field IS space itself moving in a cylindrical helix around matter. Four types of fields are fragments of this helical motion."
      : "场不是空间中的某种东西；场就是空间本身在物质周围以柱状螺旋运动。四种场是螺旋运动的不同分量。",
  };
}

export default function FieldPage({ params }: { params: { locale: string } }) {
  const loc = (params.locale === "en" ? "en" : "zh") as Locale;
  const isEn = loc === "en";
  const t = <T,>(zh: T, en: T): T => (isEn ? en : zh);

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="prose">
        <h1>{t("场的本质", "The Nature of Fields")}</h1>
        <p className="text-lg text-gray-600 mb-8">
          {t(
            "场不是空间中存在的某种东西——场就是空间本身在物质周围的运动模式。",
            "A field is NOT something that exists in space — a field IS space itself moving in a pattern around matter."
          )}
        </p>

        <h2>{t("核心认识", "Core Insight")}</h2>
        <p>
          {t(
            <>在传统物理学中，场被认为是空间中存在的某种实体。但在统一场论中，<strong>场就是空间本身以柱状螺旋方式在物质周围运动的模式</strong>。空间不是静止的容器，空间本身在运动，这种运动就是「场」。</>,
            <>In traditional physics, fields are considered entities that exist within space. But in the unified field theory, <strong>a field IS the pattern of space itself moving in a cylindrical helix around matter</strong>. Space is not a static container — space itself is in motion, and this motion IS the &ldquo;field.&rdquo;</>
          )}
        </p>

        <h2>{t("柱状螺旋分解", "Cylindrical Helix Decomposition")}</h2>
        <p>
          {t(
            "空间围绕物质的柱状螺旋运动可以分解为两个基本分量，这两个分量共同构建了三维空间：",
            "The cylindrical helical motion of space around matter can be decomposed into two fundamental components, which together construct three-dimensional space:"
          )}
        </p>
        <div className="bg-primary-50 p-6 rounded-lg my-6">
          <ul className="space-y-4">
            <li>
              <strong className="text-primary-700">{t("旋转分量", "Rotation Component")}</strong>
              <p className="mt-1">
                {t(
                  "产生2个维度（旋转平面），同时创造出「时间」的感觉。旋转本身就是观察者感知时间流逝的来源。",
                  "Gives rise to 2 dimensions (the rotation plane) and creates the feeling of &ldquo;time.&rdquo; The rotation itself is the source of the observer&apos;s perception of time passing."
                )}
              </p>
            </li>
            <li>
              <strong className="text-primary-700">{t("直线分量", "Linear Component")}</strong>
              <p className="mt-1">
                {t(
                  "垂直于旋转平面的直线运动，产生第3个维度。",
                  "Linear motion perpendicular to the rotation plane, giving rise to the 3rd dimension."
                )}
              </p>
            </li>
            <li>
              <strong className="text-primary-700">{t("合成结果", "Combined Result")}</strong>
              <p className="mt-1">
                {t(
                  "旋转 + 直线 = 柱状螺旋 → 产生完整的三维空间。",
                  "Rotation + linear = cylindrical helix → produces complete 3D space."
                )}
              </p>
            </li>
          </ul>
        </div>

        <h2>{t("四种场的统一", "Unification of Four Types of Fields")}</h2>
        <p>
          {t(
            "四种基本力对应的场，都是柱状螺旋运动的不同片段：",
            "The fields corresponding to the four fundamental forces are all fragments of the cylindrical helical motion:"
          )}
        </p>
        <div className="overflow-x-auto my-6">
          <table className="min-w-full border-collapse">
            <thead>
              <tr className="bg-primary-50">
                <th className="border border-gray-300 px-4 py-2 text-left">{t("螺旋分量", "Helical Component")}</th>
                <th className="border border-gray-300 px-4 py-2 text-left">{t("对应场", "Corresponding Field")}</th>
                <th className="border border-gray-300 px-4 py-2 text-left">{t("数学描述", "Mathematical Description")}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-2">{t("直线速度", "Linear velocity")}</td>
                <td className="border border-gray-300 px-4 py-2 font-semibold">{t("电场", "Electric field")}</td>
                <td className="border border-gray-300 px-4 py-2">{t("散度描述直线部分", "Divergence describes the linear part")}</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-2">{t("旋转速度", "Rotational velocity")}</td>
                <td className="border border-gray-300 px-4 py-2 font-semibold">{t("磁场", "Magnetic field")}</td>
                <td className="border border-gray-300 px-4 py-2">{t("旋度描述旋转部分", "Curl describes the rotational part")}</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">{t("向心加速度", "Centripetal acceleration")}</td>
                <td className="border border-gray-300 px-4 py-2 font-semibold">{t("引力场", "Gravitational field")}</td>
                <td className="border border-gray-300 px-4 py-2">{t("指向旋转轴心", "Directed toward the axis of rotation")}</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-2">{t("小尺度下各分量耦合", "Coupling at small scales")}</td>
                <td className="border border-gray-300 px-4 py-2 font-semibold">{t("核力", "Nuclear force")}</td>
                <td className="border border-gray-300 px-4 py-2">{t("各分量之间的耦合效应", "Coupling effect between components")}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>{t("场的传播速度", "Propagation Speed of Fields")}</h2>
        <p>
          {t(
            <>一个重要的推论：<strong>场的传播可以超过光速</strong>。这是因为场就是空间本身的运动，而空间本身没有质量、没有电荷，不受光速限制。光速不变原理约束的是有质量的物体和信息的传播，而空间本身的运动模式不受此限制。</>,
            <>An important corollary: <strong>fields can propagate faster than the speed of light</strong>. This is because a field is the motion of space itself, and space itself has no mass and no charge, so it is not limited by c. The constancy of the speed of light constrains the propagation of massive objects and information, but the motion pattern of space itself is not bound by this limit.</>
          )}
        </p>

        <h2>{t("数学描述", "Mathematical Description")}</h2>
        <div className="bg-gray-50 p-6 rounded-lg my-6">
          <ul className="space-y-3">
            <li>
              <strong>{t("散度（divergence）", "Divergence")}</strong>
              {t(
                " — 描述螺旋运动的直线部分，对应电场的发散特性",
                " — describes the linear part of the helical motion, corresponding to the divergent nature of the electric field"
              )}
            </li>
            <li>
              <strong>{t("旋度（curl）", "Curl")}</strong>
              {t(
                " — 描述螺旋运动的旋转部分，对应磁场的环绕特性",
                " — describes the rotational part of the helical motion, corresponding to the circulating nature of the magnetic field"
              )}
            </li>
          </ul>
          <p className="mt-4 text-sm text-gray-600">
            {t(
              "传统的麦克斯韦方程组用散度和旋度分别描述电场和磁场，实际上正好对应了螺旋运动的两种分量。统一场论揭示了这背后更深层的统一性。",
              "The traditional Maxwell&apos;s equations use divergence and curl to describe electric and magnetic fields separately, which in fact correspond exactly to the two components of helical motion. The unified field theory reveals a deeper unity behind them."
            )}
          </p>
        </div>

        <h2>{t("交互式可视化", "Interactive 3D Visualization")}</h2>
        <p>
          {t(
            "拖动下方的三维模型，从不同角度观察柱状螺旋运动如何分解为电场（蓝色）、磁场（绿色）和引力场（红色）三个分量。",
            "Drag the 3D model below to observe from different angles how cylindrical helical motion decomposes into electric field (blue), magnetic field (green), and gravitational field (red) components."
          )}
        </p>
        <div className="my-8">
          <HelixVisualization locale={loc} />
        </div>

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
            href: "/theory/equations",
            title: t("核心公式集", "Core Equations"),
            description: t("统一场论的18个核心公式及大统一推导", "The 18 core equations and grand unification derivation"),
          },
          {
            href: "/theory/time",
            title: t("时间的本质", "The Nature of Time"),
            description: t("理解时间作为空间运动感知的本质", "Understanding time as the perception of spatial motion"),
          },
        ]}
      />
    </div>
  );
}
