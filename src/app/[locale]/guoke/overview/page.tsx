import type { Metadata } from "next";
import NextRead from "@/components/NextRead";
import type { Locale } from "@/lib/i18n";

export function generateMetadata({ params }: { params: { locale: string } }): Metadata {
  const isEn = params.locale === "en";
  return {
    title: isEn ? "Guoke Civilization Overview" : "果克文明概述",
    description: isEn
      ? "Overview of the Guoke civilization: a highly advanced alien civilization ~50 light-years from Earth, with artificial field scanning technology, light-speed flying saucers, and algorithm-protocol governance."
      : "果克文明概述：距地球约50光年的高度发达外星文明，拥有人工场扫描技术、光速飞碟和算法协议联盟治理体系。",
  };
}

export default function GuokeOverviewPage({ params }: { params: { locale: string } }) {
  const loc = (params.locale === "en" ? "en" : "zh") as Locale;
  const isEn = loc === "en";
  const t = <T,>(zh: T, en: T): T => (isEn ? en : zh);

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="prose">
        <h1>{t("果克文明概述", "Guoke Civilization Overview")}</h1>
        <p className="text-lg text-gray-600 mb-8">
          {t(
            "果克星球是一个高度发达的外星文明，距离地球约50光年。张祥前声称1985年夏天他被带到果克星球，停留约一个月时间。",
            "Planet Guoke is home to a highly advanced alien civilization, approximately 50 light-years from Earth. Zhang Xiangqian claims he was taken there in the summer of 1985 and stayed for about one month."
          )}
        </p>

        <h2>{t("文明水平", "Civilization Level")}</h2>
        <p>
          {t(
            "果克文明的科技水平领先人类文明数万年。他们已经掌握了人工场扫描技术，实现了光速飞行、全球瞬间运输、意识复制等人类目前无法想象的技术。",
            "The Guoke civilization is tens of thousands of years more advanced than human civilization. They have mastered artificial field scanning technology, achieving light-speed travel, global instant transportation, consciousness copying, and other technologies currently unimaginable to humanity."
          )}
        </p>

        <h2>{t("核心技术", "Core Technology")}</h2>
        <p>
          {t(
            "果克文明的所有核心技术都建立在人工场扫描（场技术）的基础上：",
            "All core technologies of the Guoke civilization are built upon artificial field scanning (field technology):"
          )}
        </p>
        <div className="bg-primary-50 p-6 rounded-lg my-6">
          <ul className="space-y-3">
            <li>
              <strong className="text-primary-700">{t("人工场扫描", "Artificial Field Scanning")}</strong> — {t("所有技术的基础，通过人工生成和控制场来操纵物质与空间", "The foundation of all technology, manipulating matter and space through artificially generated and controlled fields")}
            </li>
            <li>
              <strong className="text-primary-700">{t("光速飞碟", "Light-Speed Flying Saucers")}</strong> — {t("利用人工场将飞行器质量降为零，实现光速飞行", "Using artificial fields to reduce craft mass to zero, achieving light-speed flight")}
            </li>
            <li>
              <strong className="text-primary-700">{t("全球运输网络", "Global Transportation Network")}</strong> — {t("场照射人体后瞬间消失、在目的地重新出现，1秒到达地球任意地点", "After field illumination, a person vanishes and reappears at the destination, reaching anywhere on the planet in 1 second")}
            </li>
            <li>
              <strong className="text-primary-700">{t("意识复制", "Consciousness Copying")}</strong> — {t("场扫描记录大脑中带电粒子运动模式，数字化存储后可转移至新身体，实现永生", "Field scanning records charged particle motion patterns in the brain, digitally stored and transferable to a new body, achieving immortality")}
            </li>
          </ul>
        </div>

        <div className="bg-blue-50 border-l-4 border-blue-400 rounded-r-xl p-6 my-8">
          <h3 className="mt-0 text-blue-800">{t("两大网络", "Two Core Networks")}</h3>
          <p className="text-gray-700 mb-0 leading-relaxed">
            {t(
              "果克文明的日常运转依赖两大网络：全球公众信息网负责通讯、信息查询、身份认证、意识备份等信息服务；全球公众运动网负责交通、物质搬运、能量传输、犯罪阻止等物理服务。两大网络覆盖全球每一个人，时刻提供服务，是果克文明的两条腿。",
              "The daily operation of the Guoke civilization relies on two core networks: the Global Public Information Network handles communication, information queries, identity authentication, consciousness backup, and other information services; the Global Public Motion Network handles transportation, material transfer, energy transmission, crime prevention, and other physical services. Both networks cover every individual on the planet, providing constant service — they are the two legs of the Guoke civilization."
            )}
          </p>
        </div>

        <h2>{t("核心基础设施：9个同步轨道人工场发射中心", "Core Infrastructure: 9 Synchronous Orbital Artificial Field Emission Centers")}</h2>
        <p>
          {t(
            "果克文明的技术基础是位于同步轨道卫星上的9个人工场发射中心。这些发射中心是整个文明的能源和信息枢纽。",
            "The technological foundation of the Guoke civilization consists of 9 artificial field emission centers located on synchronous orbit satellites. These centers serve as the energy and information hubs for the entire civilization."
          )}
        </p>
        <div className="bg-gray-50 p-6 rounded-lg my-6">
          <h3 className="mt-0 text-primary-800">{t("发射中心核心参数", "Emission Center Core Parameters")}</h3>
          <ul className="space-y-2">
            <li>{t("位置：同步轨道卫星上", "Location: on synchronous orbit satellites")}</li>
            <li>{t("核心部件：粒子环流装置", "Core component: particle circulating-flow device")}</li>
            <li>{t("环形直径：约10公里", "Ring diameter: approximately 10 km")}</li>
            <li>{t("管道直径：约1公里", "Tube diameter: approximately 1 km")}</li>
          </ul>
          <h3 className="text-primary-800">{t("四大功能", "Four Functions")}</h3>
          <ol className="space-y-2">
            <li><strong>{t("能量发射", "Energy Emission")}</strong> — {t("向星球表面发射能量", "Transmitting energy to the planet surface")}</li>
            <li><strong>{t("动力分配", "Power Distribution")}</strong> — {t("为全球设施提供动力", "Powering facilities across the globe")}</li>
            <li><strong>{t("信息处理", "Information Processing")}</strong> — {t("处理全球信息网络的数据", "Processing data for the global information network")}</li>
            <li><strong>{t("能量接收", "Energy Reception")}</strong> — {t("接收恒星能量", "Receiving stellar energy")}</li>
          </ol>
        </div>

        <h2>{t("社会结构", "Social Structure")}</h2>
        <p>
          {t(
            "果克星球没有国家，没有约束个人的法律。整个文明由算法协议联盟（Algorithm Protocol Alliance）治理。",
            "Planet Guoke has no countries and no laws binding individuals. The entire civilization is governed by the Algorithm Protocol Alliance."
          )}
        </p>

        <h2>{t("治理逻辑", "Governance Logic")}</h2>
        <p>
          {t(
            "果克文明的治理逻辑与人类文明截然不同。他们不通过法律和道德来约束个人，而是通过技术架构本身嵌入治理逻辑：",
            "The governance logic of the Guoke civilization is fundamentally different from human civilization. They do not constrain individuals through law and morality, but embed governance logic within the technology architecture itself:"
          )}
        </p>
        <div className="bg-primary-50 p-6 rounded-lg my-6">
          <ul className="space-y-3">
            <li>
              <strong className="text-primary-700">{t("全球运输网络自动识别", "Automatic Identification by Global Transportation Network")}</strong> — {t("运输网络能自动识别并阻止有害行为", "The transportation network automatically identifies and blocks harmful behavior")}
            </li>
            <li>
              <strong className="text-primary-700">{t("个体力量微弱", "Individual Power Is Weak")}</strong> — {t("个人的力量相对于技术系统过于微弱，无法单独造成实质危害", "Individual power is too weak against the technology system to cause substantial harm alone")}
            </li>
            <li>
              <strong className="text-primary-700">{t("法律只约束组织和AI", "Laws Only Constrain Organizations and AI")}</strong> — {t("只有组织和人工智能系统受法律约束，个人不受法律约束", "Only organizations and AI systems are regulated by law; individuals are not bound by law")}
            </li>
            <li>
              <strong className="text-primary-700">{t("虚拟技术疏导", "Virtual Technology as Outlet")}</strong> — {t("虚拟技术为黑暗欲望提供无害的发泄渠道", "Virtual technology provides harmless outlets for dark desires")}
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
            href: "/guoke/evolution",
            title: t("文明演变路径", "Civilization Evolution Path"),
            description: t("果克文明从原始社会到数学家掌权的8个演化阶段", "The 8 evolutionary stages of Guoke civilization from primitive society to mathematicians in power"),
          },
          {
            href: "/guoke/book",
            title: t("《果克星球奇遇记》", "Adventures on Planet Guoke"),
            description: t("张祥前关于果克星球之旅的叙事著作", "Zhang Xiangqian's narrative account of his journey to Planet Guoke"),
          },
        ]}
      />
    </div>
  );
}
