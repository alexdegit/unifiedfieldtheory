import type { Metadata } from "next";
import NextRead from "@/components/NextRead";
import type { Locale } from "@/lib/i18n";

export function generateMetadata({ params }: { params: { locale: string } }): Metadata {
  const isEn = params.locale === "en";
  return {
    title: isEn
      ? "About Zhang Xiangqian — A Self-Taught Physicist's 40-Year Journey"
      : "张祥前简介 — 四十年坚持的民间物理学家",
    description: isEn
      ? "Zhang Xiangqian, a farmer from Anhui, China, has been researching unified field theory since 1985. Learn about his personal story and research journey."
      : "张祥前，安徽农民，自1985年起研究统一场论四十年。了解他的个人经历和研究历程。",
  };
}

export default function ZhangPage({ params }: { params: { locale: string } }) {
  const loc = (params.locale === "en" ? "en" : "zh") as Locale;
  const isEn = loc === "en";
  const t = <T,>(zh: T, en: T): T => (isEn ? en : zh);

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="prose">
        <h1>{t("张祥前简介", "About Zhang Xiangqian")}</h1>
        <p className="text-lg text-gray-600 mb-8">
          {t(
            "一位安徽农民，四十年如一日地研究统一场论。无论你如何看待他的理论，这份执着本身值得尊重。",
            "A farmer from Anhui, China, who has dedicated forty years to researching unified field theory. Regardless of what you think of his theories, this level of perseverance commands respect."
          )}
        </p>

        <h2>{t("个人经历", "Personal Background")}</h2>
        <div className="bg-gray-50 p-6 rounded-lg my-6">
          <ul className="space-y-2 mb-0">
            <li><strong>{t("出生年份", "Year of Birth")}</strong>{t("：1967年", ": 1967")}</li>
            <li><strong>{t("学历", "Education")}</strong>{t("：初中", ": Middle school")}</li>
            <li><strong>{t("现居", "Residence")}</strong>{t("：安徽省庐江县同大镇二龙新街", ": Erlong New Street, Tongda Town, Lujiang County, Anhui Province, China")}</li>
            <li><strong>{t("职业", "Occupation")}</strong>{t("：以电焊和修自行车为生，业余时间研究统一场论", ": Makes a living through electric welding and bicycle repair, researches unified field theory in his spare time")}</li>
          </ul>
        </div>
        <p>
          {t(
            "张祥前，安徽庐江人，农民出身。他没有接受过系统的高等物理教育，但凭借自学和思考，建立了一套完整的统一场论体系。",
            "Zhang Xiangqian is a farmer from Lujiang, Anhui Province, China. Without any formal higher education in physics, he built a complete unified field theory system through self-study and independent thinking."
          )}
        </p>
        <p>
          {t(
            "从 1985 年开始，张祥前就致力于物理学基本问题的思考。四十年来，他在极其有限的条件下，不断完善理论、进行实验、撰写著作。他的主要著作包括《统一场论》（已更新至第七版）和《果克星球奇遇记》。",
            "Since 1985, Zhang Xiangqian has devoted himself to thinking about fundamental questions in physics. Over the course of forty years, under extremely limited conditions, he has continuously refined his theories, conducted experiments, and written books. His major works include Unified Field Theory (now in its seventh edition) and Adventures on Planet Guoke."
          )}
        </p>

        <h2>{t("1985年的经历", "The 1985 Experience")}</h2>
        <p>
          {t(
            "据张祥前自述，1985年夏天他被带到一个名为果克的外星球生活了约一个月，从那里获得了统一场论的核心知识和人工场扫描技术。对于这段经历，本站不做真假判断——我们关注的是他由此发展出的物理理论，因为理论可以通过实验来检验。",
            "According to Zhang Xiangqian's own account, in the summer of 1985 he was taken to an alien planet called Guoke where he lived for about one month, acquiring core knowledge of unified field theory and artificial field scanning technology. This site makes no judgment on the truth of this experience — what we focus on is the physics theory he developed from it, because theories can be tested through experiments."
          )}
        </p>

        <h2>{t("四十年的坚持", "Forty Years of Perseverance")}</h2>
        <p>
          {t(
            "张祥前的研究历程可以用「孤独」来形容：",
            "Zhang Xiangqian's research journey can be described in one word: solitary."
          )}
        </p>
        <ul>
          <li>
            {t(
              "没有实验室——用自购的简陋设备在家中做实验",
              "No laboratory — he conducts experiments at home with rudimentary equipment he purchased himself"
            )}
          </li>
          <li>
            {t(
              "没有学术圈——理论不被主流物理学界关注",
              "No academic network — his theories have not attracted attention from mainstream physics"
            )}
          </li>
          <li>
            {t(
              "没有资金——所有研究费用自行承担",
              "No funding — all research expenses are borne entirely by himself"
            )}
          </li>
          <li>
            {t(
              "没有团队——从理论推导到实验操作全部一个人完成",
              "No team — from theoretical derivation to experimental operation, everything is done alone"
            )}
          </li>
        </ul>
        <p>
          {t(
            "尽管如此，他完成了从理论框架到实验验证的完整链条，并在2024年获得了美国专利授权（US12417870）。",
            "Despite all this, he completed the entire chain from theoretical framework to experimental verification, and was granted a US patent (US12417870) in 2024."
          )}
        </p>

        <h2>{t("主要著作", "Major Works")}</h2>
        <ul>
          <li>
            <strong>
              {t("《统一场论》", "Unified Field Theory")}
            </strong>
            {t(
              "（第七版）：系统阐述统一场论的理论体系，包括核心公式、推导过程和物理解释。",
              " (7th Edition): A systematic exposition of the unified field theory system, including core formulas, derivation processes, and physical interpretations."
            )}
          </li>
          <li>
            <strong>
              {t("《果克星球奇遇记》", "Adventures on Planet Guoke")}
            </strong>
            {t(
              "：以叙事形式描述他所了解的外星文明信息，包括果克星球的社会结构、科技水平和文明演变。",
              ": A narrative account of the extraterrestrial civilization information he claims to have learned, including Planet Guoke's social structure, technological level, and civilizational evolution."
            )}
          </li>
          <li>
            <strong>
              {t(
                "《变化电磁场产生引力场试验及简化推导》",
                "Experiments and Simplified Derivation of Gravitational Fields Generated by Changing Electromagnetic Fields"
              )}
            </strong>
            {t(
              "：详细记录实验方案和理论推导。",
              ": Detailed documentation of experimental designs and theoretical derivations."
            )}
          </li>
        </ul>

        <div className="bg-primary-50 p-6 rounded-lg my-6">
          <h3 className="mt-0 text-primary-800">
            {t(
              "为什么关注一个农民的物理学？",
              "Why pay attention to a farmer's physics?"
            )}
          </h3>
          <p>
            {t(
              "科学史上不乏自学成才的贡献者。法拉第是书商学徒，拉马努金是印度乡村的自学数学家。当然，绝大多数民间科学爱好者的理论是不成立的。",
              "The history of science is full of self-taught contributors. Faraday was a bookbinder's apprentice; Ramanujan was a self-taught mathematician from rural India. Of course, the vast majority of amateur scientists' theories do not hold up."
            )}
          </p>
          <p className="mb-0">
            {t(
              "我们关注张祥前，不是因为他的身份，而是因为他的理论做出了可以实验检验的预测——变化电磁场产生引力场。如果这个预测被独立实验证实，那么理论的来源就不重要了。如果被证伪，我们也能从中学到东西。这就是科学方法的力量。",
              "We focus on Zhang Xiangqian not because of his background, but because his theory makes experimentally testable predictions — that changing electromagnetic fields can generate gravitational fields. If this prediction is confirmed by independent experiments, then the origin of the theory doesn't matter. If it's falsified, we can still learn from it. That is the power of the scientific method."
            )}
          </p>
        </div>
      </div>

      <NextRead
        locale={loc}
        items={[
          {
            href: "/about/project",
            title: t("关于本项目", "About This Project"),
            description: t(
              "了解这个网站的建设初衷和信息来源",
              "Learn about the purpose and sources behind this website"
            ),
          },
          {
            href: "/theory/overview",
            title: t("理论总览", "Theory Overview"),
            description: t(
              "深入了解统一场论的核心框架",
              "Explore the core framework of the unified field theory"
            ),
          },
        ]}
      />
    </div>
  );
}
