import type { Metadata } from "next";
import NextRead from "@/components/NextRead";
import Formula from "@/components/Formula";
import type { Locale } from "@/lib/i18n";

export function generateMetadata({ params }: { params: { locale: string } }): Metadata {
  const isEn = params.locale === "en";
  return {
    title: isEn ? "The Nature of Time — Unified Field Theory" : "时间的本质 — 统一场论",
    description: isEn
      ? "Time is the perception observers have of space diverging outward at light speed in a cylindrical helix from all matter. Time is not independently real."
      : "时间是观察者对空间以光速从物体周围螺旋发散的感受。时间不是独立存在的。",
  };
}

export default function TimePage({ params }: { params: { locale: string } }) {
  const loc = (params.locale === "en" ? "en" : "zh") as Locale;
  const isEn = loc === "en";
  const t = <T,>(zh: T, en: T): T => (isEn ? en : zh);

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="prose">
        <h1>{t("时间的本质", "The Nature of Time")}</h1>
        <p className="text-lg text-gray-600 mb-8">
          {t(
            "时间不是独立存在的实体，而是观察者对周围空间以光速螺旋发散运动的感受。",
            "Time is not an independently existing entity, but rather the feeling observers have of surrounding space diverging outward at the speed of light."
          )}
        </p>

        <h2>{t("时间的定义", "Definition of Time")}</h2>
        <p>
          {t(
            <>时间 = 观察者对空间以光速沿柱状螺旋从所有物质向外发散的<strong>感受/感知</strong>。时间不是独立真实存在的——它需要一个观察者。没有观察者，就没有时间的概念。</>,
            <>Time = the <strong>feeling/perception</strong> observers have of space diverging outward at light speed in a cylindrical helix from all matter. Time is not independently real — it requires an observer. Without an observer, there is no concept of time.</>
          )}
        </p>
        <p>
          {t(
            "空间本身在不断运动，以光速从物质周围向外发散。这种运动是客观的，但「时间」这个概念是观察者对这种运动的主观感知。",
            "Space itself is in constant motion, diverging outward from matter at the speed of light. This motion is objective, but the concept of &ldquo;time&rdquo; is the observer&apos;s subjective perception of this motion."
          )}
        </p>

        <h2>{t("思想实验", "Thought Experiment")}</h2>
        <div className="bg-primary-50 p-6 rounded-lg my-6">
          <p>
            {t(
              <>想象一个人被抛到遥远的宇宙深处，周围没有任何恒星、行星或其他物质。这个人还能感受到时间流逝吗？<strong>答案是能</strong>——因为他自身周围的空间仍然在以光速向外运动。只要有物质存在（包括观察者自身），空间就在运动，观察者就能感受到时间。</>,
              <>Imagine a person thrown to the far reaches of the universe, with no stars, planets, or other matter anywhere nearby. Would this person still feel time passing? <strong>The answer is yes</strong> — because the space surrounding their own body is still moving outward at the speed of light. As long as matter exists (including the observer themselves), space is in motion, and the observer can perceive time.</>
            )}
          </p>
        </div>

        <h2>{t("张飞/张翼德类比——光速不变的解释", "The Zhang Fei / Zhang Yide Analogy — Why the Speed of Light Is Constant")}</h2>
        <p>
          {t(
            "张祥前用一个巧妙的类比解释了光速为什么恒定不变：",
            "Zhang Xiangqian uses a clever analogy to explain why the speed of light remains constant:"
          )}
        </p>
        <div className="bg-gray-50 p-6 rounded-lg my-6">
          <p>
            {t(
              <>空间位移 <Formula tex="r" /> 和时间 <Formula tex="t" /> 是同一事物的两个名字，就像<strong>张飞</strong>和<strong>张翼德</strong>是同一个人的两个名字。</>,
              <>Spatial displacement <Formula tex="r" /> and time <Formula tex="t" /> are two names for the same thing, just like <strong>Zhang Fei</strong> and <strong>Zhang Yide</strong> are two names for the same person.</>
            )}
          </p>
          <ul className="space-y-3 mt-4">
            <li>
              {t(
                <>如果张飞增重了5斤，那么张翼德也<strong>必然</strong>增重了5斤——因为他们是同一个人。</>,
                <>If Zhang Fei gains 5 jin of weight, then Zhang Yide <strong>must</strong> also gain 5 jin — because they are the same person.</>
              )}
            </li>
            <li>
              {t(
                <>同理，如果光源运动导致空间位移 <Formula tex="r" /> 发生变化，时间 <Formula tex="t" /> 也会发生同等的变化。</>,
                <>Similarly, if the motion of a light source causes spatial displacement <Formula tex="r" /> to change, time <Formula tex="t" /> changes equally.</>
              )}
            </li>
            <li>
              {t(
                <>因此 <Formula tex="c = r / t" /> 始终不变——分子分母同步变化，比值恒定。</>,
                <>Therefore <Formula tex="c = r / t" /> always remains constant — the numerator and denominator change in sync, keeping the ratio fixed.</>
              )}
            </li>
          </ul>
        </div>
        <p>
          {t(
            "这就是为什么无论观察者如何运动，测量到的光速永远是 c。不是因为某种神秘的时空变换，而是因为空间位移和时间本质上是同一回事。",
            "This is why no matter how the observer moves, the measured speed of light is always c. Not because of some mysterious spacetime transformation, but because spatial displacement and time are fundamentally the same thing."
          )}
        </p>

        <h2>{t("时空统一方程", "Spacetime Unification Equation")}</h2>
        <div className="bg-gray-50 p-6 rounded-lg my-6 text-center">
          <div className="mb-2">
            <Formula tex="\\\\vec{R} = \\\\vec{C} \\\\, t" display />
          </div>
          <div className="mb-4">
            <Formula tex="\\\\vec{R}(t) = \\\\vec{C} \\\\, t = x\\\\mathbf{i} + y\\\\mathbf{j} + z\\\\mathbf{k}" display />
          </div>
          <div className="text-sm text-gray-600 space-y-1">
            <p>{t("标量形式：", "Scalar form: ")}<Formula tex="r^2 = c^2 t^2" /></p>
            <p>{t("微分形式：", "Differential form: ")}<Formula tex="d\\\\vec{R} = \\\\vec{C}(t) \\\\, dt" /></p>
          </div>
        </div>
        <p>
          {t(
            <>这个方程表达了空间和时间的统一关系：空间位移矢量 <Formula tex="\\\\vec{R}" /> 等于矢量光速 <Formula tex="\\\\vec{C}" /> 乘以时间 <Formula tex="t" />。空间位移可以分解为三个正交方向（x、y、z），而时间只是空间运动的另一种度量。</>,
            <>This equation expresses the unified relationship between space and time: the spatial displacement vector <Formula tex="\\\\vec{R}" /> equals the vector speed of light <Formula tex="\\\\vec{C}" /> times time <Formula tex="t" />. Spatial displacement can be decomposed into three orthogonal directions (x, y, z), while time is simply another measure of spatial motion.</>
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
            href: "/theory/mass",
            title: t("质量的本质", "The Nature of Mass"),
            description: t("了解质量如何由空间位移线密度定义", "Learn how mass is defined by the density of spatial displacement lines"),
          },
          {
            href: "/theory/field",
            title: t("场的本质", "The Nature of Fields"),
            description: t("探索场作为空间本身运动的本质", "Explore how fields are the motion of space itself"),
          },
        ]}
      />
    </div>
  );
}
