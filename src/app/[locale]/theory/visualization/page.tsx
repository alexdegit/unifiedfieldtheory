import type { Metadata } from "next";
import dynamic from "next/dynamic";
import NextRead from "@/components/NextRead";
import type { Locale } from "@/lib/i18n";

const UnifiedFieldViz = dynamic(
  () => import("@/components/visualizations/UnifiedFieldViz"),
  { ssr: false }
);

export function generateMetadata({ params }: { params: { locale: string } }): Metadata {
  const isEn = params.locale === "en";
  return {
    title: isEn ? "Interactive Visualization" : "交互式可视化",
    description: isEn
      ? "Interactive canvas visualizations of spatial helical motion, four fundamental forces, and quantum entanglement in Zhang Xiangqian's unified field theory."
      : "张祥前统一场论中空间螺旋运动、四种基本力和量子纠缠的交互式画布可视化。",
  };
}

export default function VisualizationPage({ params }: { params: { locale: string } }) {
  const loc = (params.locale === "en" ? "en" : "zh") as Locale;
  const isEn = loc === "en";
  const t = <T,>(zh: T, en: T): T => (isEn ? en : zh);

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="prose">
        <h1>{t("交互式可视化", "Interactive Visualization")}</h1>
        <p className="text-lg text-gray-600 mb-12">
          {t(
            "通过交互式动画，直观理解统一场论的三个核心概念：空间螺旋运动、四种基本力的统一、以及量子纠缠的本质。点击下方按钮切换不同模式。",
            "Understand three core concepts of the unified field theory through interactive animations: spatial helical motion, unification of the four forces, and the nature of quantum entanglement. Click the buttons below each visualization to switch modes."
          )}
        </p>
      </div>

      {/* Section 1: Spatial Helical Motion */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          {t("空间的圆柱状螺旋运动", "Cylindrical Helical Motion of Space")}
        </h2>
        <p className="text-gray-600 mb-6">
          {t(
            "宇宙中任何物体周围的空间，以该物体为中心，以光速向四周做圆柱状螺旋式发散运动。这是整套统一场论唯一的基本假设。",
            "Space around any object in the universe diverges outward in a cylindrical helical pattern at the speed of light, centered on the object. This is the single fundamental assumption of the entire unified field theory."
          )}
        </p>
        <UnifiedFieldViz section="spiral" locale={loc} />
      </section>

      {/* Section 2: Four Forces */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          {t("四种力的统一", "Unification of Four Forces")}
        </h2>
        <p className="text-gray-600 mb-6">
          {t(
            "物体周围空间的螺旋运动可以分解为三个相互垂直的分量：沿轴直线运动=电场、绕轴环绕运动=磁场、旋转向心加速度=引力场。",
            "The helical motion of space around objects decomposes into three mutually perpendicular components: linear motion along the axis = electric field, rotation around the axis = magnetic field, centripetal acceleration = gravitational field."
          )}
        </p>
        <UnifiedFieldViz section="forces" locale={loc} />
      </section>

      {/* Section 3: Quantum Entanglement */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          {t("量子纠缠的本质", "The Nature of Quantum Entanglement")}
        </h2>
        <p className="text-gray-600 mb-6">
          {t(
            "量子纠缠不需要超光速传递——因为以光速运动的粒子之间距离为零。按步骤点击查看完整解释。",
            "Quantum entanglement requires no faster-than-light transfer \u2014 because the distance between particles moving at light speed is zero. Click through the steps for the full explanation."
          )}
        </p>
        <UnifiedFieldViz section="entangle" locale={loc} />
      </section>

      <NextRead
        locale={loc}
        items={[
          {
            href: "/theory/deep-dive",
            title: t("从零开始理解统一场论", "Understanding UFT from Scratch"),
            description: t(
              "11个步骤，用最简单的语言理解统一场论",
              "11 steps to understand unified field theory in the simplest language"
            ),
          },
          {
            href: "/theory/overview",
            title: t("理论总览", "Theory Overview"),
            description: t(
              "统一场论核心框架与果克动量公式",
              "Core framework and Guoke momentum formula"
            ),
          },
        ]}
      />
    </div>
  );
}
