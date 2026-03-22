import type { Metadata } from "next";
import NextRead from "@/components/NextRead";
import type { Locale } from "@/lib/i18n";

export function generateMetadata({ params }: { params: { locale: string } }): Metadata {
  const isEn = params.locale === "en";
  return {
    title: isEn
      ? "Understanding Unified Field Theory from Scratch"
      : "从零开始理解统一场论",
    description: isEn
      ? "A step-by-step guide to understanding Zhang Xiangqian's unified field theory: from basic principles to resolving contradictions between quantum mechanics and relativity."
      : "逐步理解张祥前统一场论：从基本原理出发，到解决量子力学与相对论的四大矛盾。",
  };
}

interface Step {
  title: string;
  content: React.ReactNode;
  analogy?: string;
}

export default function DeepDivePage({ params }: { params: { locale: string } }) {
  const loc = (params.locale === "en" ? "en" : "zh") as Locale;
  const isEn = loc === "en";
  const t = <T,>(zh: T, en: T): T => (isEn ? en : zh);

  const steps: Step[] = [
    {
      title: t("宇宙里只有两样东西", "Only Two Things Exist in the Universe"),
      content: t(
        <>宇宙真正存在的只有<strong>物体和空间</strong>，没有第三种。其他所有东西——质量、力、能量、时间——都是人对物体和空间运动的描述。</>,
        <>Only two things truly exist in the universe: <strong>matter and space</strong> — nothing else. Everything else — mass, force, energy, time — are descriptions humans use for the motion of matter and space.</>
      ),
    },
    {
      title: t("空间不是空的，空间在动", "Space Is Not Empty — Space Is Moving"),
      content: t(
        <>空间以每一个物体为中心，向四面八方，以光速，以螺旋方式发散。<strong>整套理论就建立在这一个假设上。</strong></>,
        <>Space diverges outward from every object, in all directions, at the speed of light, in a helical pattern. <strong>The entire theory is built on this single assumption.</strong></>
      ),
      analogy: t(
        "比喻：水池中央涌出的螺旋水流。",
        "Analogy: A spiral water fountain surging from the center of a pool."
      ),
    },
    {
      title: t("质量是什么", "What Is Mass"),
      content: t(
        <>质量 = 物体周围以光速运动的空间&ldquo;位移的条数&rdquo;。<strong>条数越多，越重。</strong>如果把所有条数关掉，质量变零。</>,
        <>Mass = the number of spatial &ldquo;displacement lines&rdquo; moving at light speed around an object. <strong>More lines = heavier.</strong> Turn off all lines = zero mass.</>
      ),
    },
    {
      title: t("质量为零会怎样", "What Happens at Zero Mass"),
      content: t(
        <>质量为零 = 没有惯性 = 没有阻力 = <strong>自动以光速运动</strong>。飞碟原理：不是加速到光速，而是消除质量，它自己就飞了。</>,
        <>Zero mass = no inertia = no resistance = <strong>automatically moves at light speed</strong>. Flying saucer principle: don&apos;t accelerate to light speed — eliminate mass, and it flies on its own.</>
      ),
      analogy: t(
        "比喻：剪掉气球上的石头，气球自己就飞了。",
        "Analogy: Cut the rock off a balloon — the balloon flies on its own."
      ),
    },
    {
      title: t("时间是什么", "What Is Time"),
      content: t(
        <>时间 = 人对周围空间以光速发散运动的感受。<strong>没有观察者就没有时间。</strong>光速为什么不变？因为光速 c = 空间位移 r / 时间 t，而空间位移和时间本质上是同一个东西——都是光速运动的空间。分子变大，分母必然同步变大，它们的比值（光速）永远不变。就像「张飞」和「张翼德」是同一个人，张飞胖了五斤，张翼德也必然胖了五斤，体重的比值始终是1。</>,
        <>Time = the human perception of surrounding space diverging at light speed. <strong>No observer, no time.</strong> Why is the speed of light constant? Because c = spatial displacement r / time t, and spatial displacement and time are fundamentally the same thing — both are the light-speed-moving space. If the numerator grows, the denominator must grow in step, so their ratio (the speed of light) never changes. It&apos;s like &ldquo;Zhang Fei&rdquo; and &ldquo;Zhang Yide&rdquo; being two names for the same person — if Zhang Fei gains five jin, Zhang Yide must also gain five jin, so the ratio of their weights is always 1.</>
      ),
      analogy: t(
        "光速不变的张飞类比：空间位移 r 和时间 t 是同一个东西的两个名字。分子分母同步变化，比值恒定。",
        "Zhang Fei analogy for constant light speed: spatial displacement r and time t are two names for the same thing. Numerator and denominator change in sync, so the ratio stays constant."
      ),
    },
    {
      title: t("空间的螺旋运动拆出四种力", "Space's Helical Motion Yields Four Forces"),
      content: t(
        <>物体周围空间以该物体为中心做圆柱状螺旋式发散运动。这个螺旋运动可以分解为三个分量：沿轴的直线运动 = 电场，绕轴的环绕运动 = 磁场，旋转产生的向心加速度 = 引力场，质量剧变 = 核力。<strong>四种力是同一个空间螺旋运动的四个侧面，它们天然耦合在一起。</strong></>,
        <>Space around every object diverges outward in a cylindrical helical pattern centered on that object. This helical motion can be decomposed into three components: linear motion along the axis = electric field, rotational motion around the axis = magnetic field, centripetal acceleration from rotation = gravitational field, sudden mass change = nuclear force. <strong>Four forces are four facets of the same spatial helical motion, naturally coupled together.</strong></>
      ),
    },
    {
      title: t("电荷是什么", "What Is Electric Charge"),
      content: t(
        <>正电荷 = 空间向外涌（发散），负电荷 = 空间向内收（汇聚）。<strong>正负电荷吸引 = 两边的空间水流互相衔接。</strong></>,
        <>Positive charge = space surging outward (diverging). Negative charge = space flowing inward (converging). <strong>Opposite charges attract = the two spatial flows connect to each other.</strong></>
      ),
    },
    {
      title: t("为什么正负电荷相互吸引", "Why Opposite Charges Attract"),
      content: t(
        <>正电荷往外涌的空间&ldquo;水流&rdquo;流向负电荷往里收的&ldquo;入口&rdquo;，<strong>形成一条空间河流把两者拉在一起。</strong></>,
        <>The spatial &ldquo;flow&rdquo; surging out from the positive charge flows into the &ldquo;inlet&rdquo; of the converging negative charge, <strong>forming a spatial river that pulls the two together.</strong></>
      ),
    },
    {
      title: t("变化电磁场产生引力场", "Changing EM Fields Generate Gravitational Fields"),
      content: t(
        <>法拉第发现变化磁场产生电场，人类漏掉了另一半——<strong>变化磁场同时产生引力场</strong>。螺旋运动三个分量耦合在一起，改变一个必然影响另外两个。</>,
        <>Faraday discovered that changing magnetic fields produce electric fields. Humanity missed the other half — <strong>changing magnetic fields also produce gravitational fields</strong>. The three components of helical motion are coupled: change one, and the other two must change too.</>
      ),
    },
  ];

  const contradictions = [
    {
      title: t("「上帝不掷骰子」", "\"God Does Not Play Dice\""),
      content: t(
        <>两边都对了一半。<strong>空间运动客观存在</strong>（爱因斯坦的隐藏变量），但运动状态取决于观察者的描述（量子力学的观察者效应）。</>,
        <>Both sides were half right. <strong>Spatial motion exists objectively</strong> (Einstein&apos;s hidden variables), but the description of the motion state depends on the observer (quantum mechanics&apos; observer effect).</>
      ),
      analogy: t(
        "比喻：地上的字从正面看是「甲」从反面看是「由」。",
        "Analogy: A character on the ground reads as one thing from one side and another thing from the other side."
      ),
    },
    {
      title: t("量子纠缠超光速", "Quantum Entanglement Faster Than Light"),
      content: t(
        <>不存在超光速传递。光速运动的粒子沿运动方向空间长度缩为零，三维变二维。<strong>二维和三维任意点距离为零。</strong>两个纠缠粒子从来没有真正分开过。</>,
        <>There is no faster-than-light transfer. A particle moving at light speed has its spatial length along the direction of motion compressed to zero — 3D becomes 2D. <strong>The distance between a 2D plane and any point in 3D space is zero.</strong> Two entangled particles were never truly separated.</>
      ),
      analogy: t(
        "比喻：把一根橡皮筋压成一个点，上面所有刻度之间距离变成零。",
        "Analogy: Compress a rubber band into a point — the distance between all markings becomes zero."
      ),
    },
    {
      title: t("连续 vs 不连续", "Continuous vs. Discontinuous"),
      content: t(
        <>空间大部分情况下连续（相对论适用），光速运动时空间可以不连续（量子效应出现）。<strong>能量量子化是「质量归零」过程的门槛效应。</strong></>,
        <>Space is mostly continuous (relativity applies). At light speed, space can become discontinuous (quantum effects appear). <strong>Energy quantization is a threshold effect of the &ldquo;mass going to zero&rdquo; process.</strong></>
      ),
    },
    {
      title: t("引力无法量子化", "Gravity Cannot Be Quantized"),
      content: t(
        <><strong>引力子不存在。</strong>引力场是空间运动，不是粒子传递力。不能把一种运动状态变成一个粒子。</>,
        <><strong>Gravitons don&apos;t exist.</strong> The gravitational field is spatial motion, not force carried by particles. You cannot turn a state of motion into a particle.</>
      ),
    },
  ];

  const step11 = {
    title: t("为什么这套理论如此简洁", "Why This Theory Is So Simple"),
    content: t(
      <>因为它回到了宇宙最底层——<strong>物体和空间</strong>。在这个层面上一切都是几何和运动。人类物理学的复杂性来自于在中间层做统一。</>,
      <>Because it returns to the most fundamental level of the universe — <strong>matter and space</strong>. At this level, everything is geometry and motion. The complexity of human physics comes from trying to unify at an intermediate level.</>
    ),
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="prose">
        <h1>{t("从零开始理解统一场论", "Understanding Unified Field Theory from Scratch")}</h1>
        <p className="text-lg text-gray-600 mb-12">
          {t(
            "11个步骤，用最简单的语言，从零开始理解张祥前统一场论的核心思想。不需要物理学基础。",
            "11 steps to understand the core ideas of Zhang Xiangqian's unified field theory from scratch, in the simplest language possible. No physics background required."
          )}
        </p>
      </div>

      {/* Steps 1-9 */}
      <div className="space-y-16">
        {steps.map((step, idx) => (
          <section key={idx} className="not-prose">
            <div className="flex items-start gap-6">
              <div className="text-4xl font-bold text-primary-200 select-none shrink-0 w-16 text-right">
                {String(idx + 1).padStart(2, "0")}
              </div>
              <div className="flex-1">
                <h2 className="text-xl font-bold text-gray-900 mb-4">
                  {step.title}
                </h2>
                <p className="text-gray-700 leading-relaxed text-base mb-4">
                  {step.content}
                </p>
                {step.analogy && (
                  <blockquote className="bg-blue-50 border-l-4 border-blue-300 rounded-lg p-4 italic text-gray-600">
                    {step.analogy}
                  </blockquote>
                )}
              </div>
            </div>
          </section>
        ))}

        {/* Step 10: Four Contradictions */}
        <section className="not-prose">
          <div className="flex items-start gap-6">
            <div className="text-4xl font-bold text-primary-200 select-none shrink-0 w-16 text-right">
              10
            </div>
            <div className="flex-1">
              <h2 className="text-xl font-bold text-gray-900 mb-6">
                {t(
                  "解释量子力学和相对论的四大矛盾",
                  "Resolving Four Contradictions Between QM and Relativity"
                )}
              </h2>

              <div className="space-y-8">
                {contradictions.map((c, idx) => (
                  <div key={idx} className="pl-4 border-l-2 border-primary-200">
                    <h3 className="font-semibold text-gray-800 mb-2">
                      {t("矛盾", "Contradiction")} {idx + 1}：{c.title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed text-base mb-3">
                      {c.content}
                    </p>
                    {c.analogy && (
                      <blockquote className="bg-blue-50 border-l-4 border-blue-300 rounded-lg p-4 italic text-gray-600">
                        {c.analogy}
                      </blockquote>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Step 11 */}
        <section className="not-prose">
          <div className="flex items-start gap-6">
            <div className="text-4xl font-bold text-primary-200 select-none shrink-0 w-16 text-right">
              11
            </div>
            <div className="flex-1">
              <h2 className="text-xl font-bold text-gray-900 mb-4">
                {step11.title}
              </h2>
              <p className="text-gray-700 leading-relaxed text-base">
                {step11.content}
              </p>
            </div>
          </div>
        </section>
      </div>

      <NextRead
        locale={loc}
        items={[
          {
            href: "/theory/visualization",
            title: t("交互式可视化", "Interactive Visualization"),
            description: t(
              "通过交互式动画直观理解空间螺旋运动、四种力和量子纠缠",
              "Understand spatial helical motion, four forces, and quantum entanglement through interactive animations"
            ),
          },
          {
            href: "/theory/unification-equation",
            title: t("统一场方程", "Unification Equation"),
            description: t(
              "从螺旋运动出发推导统一场方程的完整过程",
              "The complete derivation of the unified field equation from helical motion"
            ),
          },
        ]}
      />
    </div>
  );
}
