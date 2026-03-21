import type { Metadata } from "next";
import NextRead from "@/components/NextRead";
import type { Locale } from "@/lib/i18n";

export function generateMetadata({ params }: { params: { locale: string } }): Metadata {
  const isEn = params.locale === "en";
  return {
    title: isEn ? "Adventures on Planet Guoke" : "《果克星球奇遇记》",
    description: isEn
      ? "Zhang Xiangqian's narrative account of his claimed visit to Planet Guoke, featuring key characters like Liewen, Sudaier, and Weili, and the revelations about unified field theory."
      : "张祥前关于果克星球之旅的叙事著作，介绍列文、苏代尔、威力等关键人物，以及统一场论的核心启示。",
  };
}

export default function BookPage({ params }: { params: { locale: string } }) {
  const loc = (params.locale === "en" ? "en" : "zh") as Locale;
  const isEn = loc === "en";
  const t = <T,>(zh: T, en: T): T => (isEn ? en : zh);

  const characters = [
    {
      name: t("列文", "Liewen"),
      role: t("爱因斯坦级别的科学家", "Einstein-level scientist"),
      desc: t(
        "果克星球顶级科学家，在场本质破译和统一场论方面有深刻造诣。",
        "A top scientist on Planet Guoke, with profound expertise in field essence decoding and unified field theory."
      ),
    },
    {
      name: t("苏代尔", "Sudaier"),
      role: t("物理学家", "Physicist"),
      desc: t(
        "果克星球物理学家，参与了多项重要研究。",
        "A physicist on Planet Guoke, involved in numerous important research projects."
      ),
    },
    {
      name: t("威力", "Weili"),
      role: t("张祥前的外星同伴", "Zhang&apos;s alien companion"),
      desc: t(
        "张祥前在果克星球的主要同伴，向他传授了关键的场信息和统一场论的核心内容。",
        "Zhang Xiangqian&apos;s primary companion on Planet Guoke, who provided him with key field information and core content of the unified field theory."
      ),
    },
    {
      name: t("诺顿", "Nuodun"),
      role: t("生物学家", "Biologist"),
      desc: t(
        "果克星球生物学家，在生命科学和意识研究方面有重要贡献。",
        "A biologist on Planet Guoke, with significant contributions in life sciences and consciousness research."
      ),
    },
    {
      name: t("嘉鹏", "Jiapeng"),
      role: t("身体复制工厂管理者", "Body replication factory manager"),
      desc: t(
        "负责管理果克星球的身体复制工厂，是实现永生技术的关键环节。",
        "Responsible for managing the body replication factory on Planet Guoke, a key link in achieving immortality technology."
      ),
    },
  ];

  const chapters = [
    {
      title: t("初次接触", "First Contact"),
      desc: t("1985年夏天，张祥前如何被选中并带到果克星球。", "How Zhang Xiangqian was selected and taken to Planet Guoke in the summer of 1985."),
    },
    {
      title: t("飞碟之旅", "Flying Saucer Journey"),
      desc: t("乘坐光速飞碟从地球前往果克星球的亲身经历。", "The firsthand experience of traveling from Earth to Planet Guoke aboard a light-speed flying saucer."),
    },
    {
      title: t("果克社会", "Guoke Society"),
      desc: t("果克文明的社会结构、治理方式和日常生活。", "The social structure, governance methods, and daily life of the Guoke civilization."),
    },
    {
      title: t("技术展示", "Technology Demonstrations"),
      desc: t("亲眼见证人工场扫描、全球运输网络、虚拟建筑等先进技术。", "Witnessing advanced technologies firsthand, including artificial field scanning, the global transportation network, and virtual architecture."),
    },
    {
      title: t("场论启示", "Field Theory Revelations"),
      desc: t("威力向张祥前传授统一场论的核心知识和场的本质。", "Weili teaching Zhang Xiangqian the core knowledge of unified field theory and the essence of fields."),
    },
    {
      title: t("返回地球", "Return to Earth"),
      desc: t("离开果克星球返回地球的过程，以及回到地球后的思考。", "The process of leaving Planet Guoke and returning to Earth, and reflections after coming back."),
    },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="prose">
        <h1>{t("《果克星球奇遇记》", "Adventures on Planet Guoke")}</h1>
        <p className="text-lg text-gray-600 mb-8">
          {t(
            "《果克星球奇遇记》是张祥前的叙事著作，记录了他声称的1985年果克星球之旅。本书为理解张祥前统一场论提供了叙事框架——从一个高度发达外星文明的视角来审视场论的核心概念。",
            "Adventures on Planet Guoke is Zhang Xiangqian&apos;s narrative account documenting his claimed 1985 visit to Planet Guoke. The book provides the narrative framework for understanding Zhang&apos;s unified field theory — examining core field theory concepts from the perspective of a highly advanced alien civilization."
          )}
        </p>

        <h2>{t("关键人物", "Key Characters")}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
          {characters.map((char) => (
            <div key={char.name} className="bg-primary-50 p-4 rounded-lg border border-primary-100">
              <h3 className="mt-0 mb-1 text-primary-800">{char.name}</h3>
              <p className="text-sm font-medium text-primary-600 mb-2">{char.role}</p>
              <p className="text-sm text-gray-600 mb-0">{char.desc}</p>
            </div>
          ))}
        </div>

        <h2>{t("主要章节与主题", "Key Chapters & Themes")}</h2>
        <div className="space-y-4 my-6">
          {chapters.map((ch, i) => (
            <div key={ch.title} className="flex gap-4 items-start">
              <div className="flex-shrink-0">
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-primary-100 text-primary-700 font-semibold text-sm">
                  {i + 1}
                </span>
              </div>
              <div>
                <h3 className="font-semibold text-primary-800 mt-0 mb-1">{ch.title}</h3>
                <p className="text-gray-600 text-sm mt-0 mb-0">{ch.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <h2>{t("本书的意义", "Significance of the Book")}</h2>
        <p>
          {t(
            "《果克星球奇遇记》不仅仅是一个外星旅行故事。它为张祥前的统一场论提供了一个完整的叙事背景——统一场论的核心概念通过果克文明的实际应用得到了具象化的展示。读者可以通过这个叙事框架，更直观地理解人工场扫描技术的原理和潜力。",
            "Adventures on Planet Guoke is more than an extraterrestrial travel story. It provides a complete narrative context for Zhang Xiangqian&apos;s unified field theory — the core concepts of the theory are given tangible demonstration through the practical applications of the Guoke civilization. Readers can more intuitively understand the principles and potential of artificial field scanning technology through this narrative framework."
          )}
        </p>

        <div className="bg-gray-50 p-6 rounded-lg my-6">
          <h3 className="mt-0 text-primary-800">{t("获取方式", "Availability")}</h3>
          <p className="mb-0">
            {t(
              "《果克星球奇遇记》目前可供阅读，具体获取方式请关注后续更新。",
              "Adventures on Planet Guoke is currently available for reading. Please stay tuned for further details on how to obtain it."
            )}
          </p>
        </div>

        <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg my-6">
          <p className="text-sm text-yellow-800 mb-0">
            {t(
              <><strong>声明：</strong>本书内容为张祥前的个人叙述。本站如实呈现相关信息，不对其真实性做出任何判断。读者请自行甄别。</>,
              <><strong>Disclaimer:</strong> The content of this book is Zhang Xiangqian&apos;s personal narrative. This site faithfully presents the related information without making any judgment on its veracity. Readers are advised to exercise their own discernment.</>
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
            href: "/guoke/evolution",
            title: t("文明演变路径", "Civilization Evolution Path"),
            description: t("果克文明从原始社会到数学家掌权的8个演化阶段", "The 8 evolutionary stages of Guoke civilization"),
          },
        ]}
      />
    </div>
  );
}
