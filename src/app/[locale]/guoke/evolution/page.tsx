import type { Metadata } from "next";
import NextRead from "@/components/NextRead";
import type { Locale } from "@/lib/i18n";

export function generateMetadata({ params }: { params: { locale: string } }): Metadata {
  const isEn = params.locale === "en";
  return {
    title: isEn ? "Civilization Evolution Path" : "文明演变路径",
    description: isEn
      ? "The 8-stage evolution of Guoke civilization: from primitive society through field technology breakthrough to mathematicians ruling through algorithms."
      : "果克文明的8个演化阶段：从原始社会到场技术突破，再到数学家通过算法掌权。",
  };
}

export default function EvolutionPage({ params }: { params: { locale: string } }) {
  const loc = (params.locale === "en" ? "en" : "zh") as Locale;
  const isEn = loc === "en";
  const t = <T,>(zh: T, en: T): T => (isEn ? en : zh);

  const stages = [
    {
      num: 1,
      title: t("原始社会", "Primitive Society"),
      desc: t(
        "多个国家并存，战争频发，宗教信仰盛行，依靠道德和法律约束个人行为——与人类文明早期阶段非常相似。",
        "Multiple countries coexist, wars are frequent, religious beliefs prevail, and individual behavior is constrained through morality and law — very similar to the early stages of human civilization."
      ),
      color: "bg-gray-100 border-gray-300",
    },
    {
      num: 2,
      title: t("场本质破译", "Field Essence Decoded"),
      desc: t(
        "文明的转折点。人工场扫描技术诞生，能源革命由此开始。这一突破相当于人类如果成功破解统一场论将带来的变革。",
        "The turning point of civilization. Artificial field scanning technology is born, and the energy revolution begins. This breakthrough is equivalent to the transformation that would occur if humanity successfully decoded the unified field theory."
      ),
      color: "bg-blue-50 border-blue-300",
    },
    {
      num: 3,
      title: t("两大网络建立", "Two Networks Established"),
      desc: t(
        "建立了全球公共信息网络（类似互联网）和全球运输网络（瞬间传送）。这两大网络从根本上重构了社会组织方式。",
        "A global public information network (similar to the internet) and a global transportation network (teleportation) are established. These two networks fundamentally restructure the way society is organized."
      ),
      color: "bg-indigo-50 border-indigo-300",
    },
    {
      num: 4,
      title: t("国家消亡", "Nations Dissolve"),
      desc: t(
        "资源自由获取，地理边界失去意义，犯罪被技术自动阻止，国家自然消亡。当技术解决了资源分配和安全问题，国家存在的基础便不复存在。",
        "Resources become freely accessible, geographic borders lose meaning, crime is automatically prevented by technology, and nations naturally disappear. When technology solves resource distribution and security, the foundation for the existence of nations ceases to exist."
      ),
      color: "bg-green-50 border-green-300",
    },
    {
      num: 5,
      title: t("算法协议联盟", "Algorithm Protocol Alliance"),
      desc: t(
        "最高权力机构是全球信息网络上的算法协议，不断被迭代和修改，取代了实体领导者。治理变成了持续优化的算法过程。",
        "The highest authority becomes the algorithm protocol on the global information network, constantly iterated and modified, replacing physical leaders. Governance becomes a continuously optimized algorithmic process."
      ),
      color: "bg-purple-50 border-purple-300",
    },
    {
      num: 6,
      title: t("道德法律对个人约束消失", "Moral-Legal Constraints on Individuals Disappear"),
      desc: t(
        "技术满足欲望而非压制欲望。法律只约束组织、AI和算法系统，不再约束个人。虚拟技术为各种欲望提供无害的释放渠道。",
        "Technology satisfies desires rather than suppressing them. Laws only constrain organizations, AI, and algorithm systems, no longer binding individuals. Virtual technology provides harmless channels for releasing various desires."
      ),
      color: "bg-amber-50 border-amber-300",
    },
    {
      num: 7,
      title: t("宗教消亡", "Religion Disappears"),
      desc: t(
        "在掌握了永生技术和宇宙核心秘密之后，宗教的基础——对死亡的恐惧——消失了。人们不再需要宗教来解释未知和安慰死亡焦虑。",
        "After mastering immortality technology and the core secrets of the universe, the foundation of religion — fear of death — disappears. People no longer need religion to explain the unknown or comfort death anxiety."
      ),
      color: "bg-orange-50 border-orange-300",
    },
    {
      num: 8,
      title: t("数学家掌权", "Mathematicians Rule"),
      desc: t(
        "物理学有终点（场本质被破译后），但数学没有。算法控制社会运行，而数学家创造算法。因此，数学家成为文明最重要的人才。",
        "Physics has an endpoint (once the field essence is decoded), but mathematics does not. Algorithms control the operation of society, and mathematicians create algorithms. Therefore, mathematicians become the most important talent in civilization."
      ),
      color: "bg-red-50 border-red-300",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="prose">
        <h1>{t("文明演变路径", "Civilization Evolution Path")}</h1>
        <p className="text-lg text-gray-600 mb-8">
          {t(
            "根据张祥前的叙述，果克文明经历了8个主要演化阶段，从与人类相似的原始社会发展到由数学家和算法主导的超级文明。",
            "According to Zhang Xiangqian&apos;s accounts, the Guoke civilization went through 8 major evolutionary stages, developing from a primitive society similar to humanity into a super-civilization led by mathematicians and algorithms."
          )}
        </p>

        <h2>{t("八大演化阶段", "Eight Evolutionary Stages")}</h2>
        <div className="space-y-6 my-8">
          {stages.map((stage) => (
            <div key={stage.num} className={`flex gap-4 p-5 rounded-lg border-l-4 ${stage.color}`}>
              <div className="flex-shrink-0">
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary-600 text-white font-bold text-lg">
                  {stage.num}
                </span>
              </div>
              <div>
                <h3 className="font-semibold text-primary-800 mt-0 mb-2 text-lg">{stage.title}</h3>
                <p className="text-gray-700 text-sm mt-0 mb-0">{stage.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="my-8 text-center text-gray-400 text-2xl">⬇</div>

        <h2>{t("对人类文明的启示", "Lessons for Humanity")}</h2>
        <p>
          {t(
            "如果果克文明的演变路径是真实的，它为人类文明提供了一个极具参考价值的发展模型：",
            "If the evolutionary path of the Guoke civilization is authentic, it provides an extremely valuable development model for human civilization:"
          )}
        </p>
        <div className="bg-primary-50 p-6 rounded-lg my-6">
          <ul className="space-y-3">
            <li>
              <strong className="text-primary-700">{t("技术是文明跃迁的关键", "Technology Is the Key to Civilizational Leaps")}</strong> — {t("场本质的破译是整个演变的转折点，表明基础物理突破可能是文明进化的核心驱动力", "Decoding the field essence is the turning point of the entire evolution, suggesting that fundamental physics breakthroughs may be the core driver of civilizational progress")}
            </li>
            <li>
              <strong className="text-primary-700">{t("治理方式随技术演进", "Governance Evolves with Technology")}</strong> — {t("从法律约束到技术架构自带治理逻辑，治理不再依赖人的自觉，而是嵌入系统本身", "From legal constraints to governance logic embedded in technology architecture, governance no longer relies on human consciousness but is built into the system itself")}
            </li>
            <li>
              <strong className="text-primary-700">{t("满足而非压制", "Satisfy Rather Than Suppress")}</strong> — {t("与其压制人类欲望，不如通过技术提供无害的满足方式——这是一种根本不同的社会治理思路", "Rather than suppressing human desires, providing harmless means of satisfaction through technology — this is a fundamentally different approach to social governance")}
            </li>
            <li>
              <strong className="text-primary-700">{t("数学的终极地位", "The Ultimate Status of Mathematics")}</strong> — {t("当物理学达到终点后，数学成为推动文明进步的最核心学科，这对当前教育和人才培养有深远启示", "When physics reaches its endpoint, mathematics becomes the most critical discipline driving civilizational progress, with profound implications for current education and talent development")}
            </li>
          </ul>
        </div>

        <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg my-6">
          <p className="text-sm text-yellow-800 mb-0">
            {t(
              <><strong>声明：</strong>以上信息均来自张祥前的个人叙述。本站如实呈现这些内容，不对其真实性做出任何判断。读者请自行甄别。</>,
              <><strong>Disclaimer:</strong> The information above comes entirely from Zhang Xiangqian&apos;s personal accounts. This site faithfully presents this content without making any judgment on its veracity. Readers are advised to exercise their own discernment.</>
            )}
          </p>
        </div>
      </div>

      <NextRead
        locale={loc}
        items={[
          {
            href: "/guoke/overview",
            title: t("果克文明概述", "Guoke Civilization Overview"),
            description: t("果克星球的技术、社会结构和治理逻辑", "Technology, social structure, and governance logic of Planet Guoke"),
          },
          {
            href: "/applications/overview",
            title: t("十大应用", "Top 10 Applications"),
            description: t("人工场扫描技术的十大应用场景", "Top 10 application scenarios of artificial field scanning technology"),
          },
        ]}
      />
    </div>
  );
}
