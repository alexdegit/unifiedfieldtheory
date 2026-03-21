import type { Metadata } from "next";
import NextRead from "@/components/NextRead";
import type { Locale } from "@/lib/i18n";

export function generateMetadata({ params }: { params: { locale: string } }): Metadata {
  const isEn = params.locale === "en";
  return {
    title: isEn ? "Top 10 Applications of Artificial Field Scanning" : "人工场扫描十大应用",
    description: isEn
      ? "Ten theoretical applications of artificial field scanning technology: light-speed flying saucers, cold welding, medical fields, global transportation, wireless power, and more."
      : "人工场扫描技术的十大理论应用：光速飞碟、冷焊技术、信息场医疗、全球运输网、无线导电等。",
  };
}

export default function ApplicationsOverviewPage({ params }: { params: { locale: string } }) {
  const loc = (params.locale === "en" ? "en" : "zh") as Locale;
  const isEn = loc === "en";
  const t = <T,>(zh: T, en: T): T => (isEn ? en : zh);

  const applications = [
    {
      num: 1,
      title: t("光速飞碟", "Light-Speed Flying Saucers"),
      desc: t(
        "人工场将飞行器质量降为零，飞行器即可以光速飞行。这是星际旅行的基础技术——果克星球与地球相距约50光年，光速飞碟是两个文明之间唯一可行的交通方式。",
        "Artificial fields reduce the craft&apos;s mass to zero, allowing it to fly at the speed of light. This is the foundational technology for interstellar travel — Planet Guoke is approximately 50 light-years from Earth, and light-speed flying saucers are the only viable means of transportation between the two civilizations."
      ),
      icon: "🛸",
    },
    {
      num: 2,
      title: t("冷焊技术", "Cold Welding"),
      desc: t(
        "两个物体在准激发态下可以无阻力地融合在一起。这种技术使建筑和制造效率提高100倍，成本降低100倍。无需高温、无需压力，材料在场的作用下自然结合。",
        "Two objects in a quasi-excited state can merge together without resistance. This technology makes construction and manufacturing 100 times more efficient and 100 times cheaper. No high temperatures or pressure needed — materials naturally bond under the influence of the field."
      ),
      icon: "🔧",
    },
    {
      num: 3,
      title: t("人工信息场医疗", "Medical Artificial Information Field"),
      desc: t(
        "计算机控制的人工场可以在不切开皮肤的情况下进行手术。能够治愈癌症、糖尿病、痴呆等目前人类无法根治的疾病。还可以进行无痛美容手术。",
        "Computer-controlled artificial fields enable surgery without incision. Capable of curing cancer, diabetes, dementia, and other diseases currently incurable by human medicine. Also enables painless cosmetic procedures."
      ),
      icon: "🏥",
    },
    {
      num: 4,
      title: t("全球运动网", "Global Transportation Network"),
      desc: t(
        "场照射人体后，人瞬间消失并在目的地重新出现。1秒内可到达地球上任何地点，包括密封的房间。这项技术彻底消除了地理距离对人类活动的限制。",
        "After field illumination, a person vanishes instantly and reappears at the destination. Reach anywhere on Earth within 1 second, including sealed rooms. This technology completely eliminates geographic distance as a constraint on human activity."
      ),
      icon: "🌐",
    },
    {
      num: 5,
      title: t("全球无线导电", "Global Wireless Power"),
      desc: t(
        "能量通过真空传输，无需电线，损耗极小。所有用电设备只需安装一个接收线圈即可获取能量。这彻底改变了能源分配方式，消除了电网基础设施。",
        "Energy is transmitted through vacuum without wires, with minimal loss. All electrical devices only need a receiving coil to obtain energy. This fundamentally changes energy distribution and eliminates grid infrastructure."
      ),
      icon: "⚡",
    },
    {
      num: 6,
      title: t("汇聚恒星能接收器", "Stellar Energy Concentrator"),
      desc: t(
        "通过弯曲空间来压缩光线，使1平方米的面积可以接收10000平方米的太阳能。还可以通过调节各地区的太阳能接收量来控制天气。",
        "Bends space to compress light, allowing 1 square meter to receive 10,000 square meters worth of solar energy. Can also control weather by adjusting regional solar energy reception."
      ),
      icon: "☀️",
    },
    {
      num: 7,
      title: t("无限压缩空间存储", "Infinite Spatial Compression Storage"),
      desc: t(
        "空间中的任意一个点都可以存储全宇宙的信息。空间是无限可压缩的，可以使用场来处理信息。这意味着信息存储不再受物理介质的限制。",
        "Any single point in space can store all the information in the universe. Space is infinitely compressible, and fields can be used to process information. This means information storage is no longer constrained by physical media."
      ),
      icon: "💾",
    },
    {
      num: 8,
      title: t("虚拟建筑", "Virtual Architecture"),
      desc: t(
        "场在表面产生阻挡力，锁定光线以产生颜色，从而构建虚拟墙壁和建筑。人体也可以被虚拟化。这种建筑无需任何物理材料，可瞬间创建和消除。",
        "Fields create blocking forces on surfaces and lock light to produce color, constructing virtual walls and buildings. Human bodies can also be virtualized. Such architecture requires no physical materials and can be instantly created and removed."
      ),
      icon: "🏗️",
    },
    {
      num: 9,
      title: t("时空冰箱", "Spacetime Refrigerator"),
      desc: t(
        "场改变局部时间流速。外部1年等于内部1秒（保鲜食物），也可以反向操作（内部加速）。这项技术使物质保存突破了时间限制。",
        "Fields change the local rate of time flow. One year outside equals one second inside (preserving food), or the reverse can be applied (accelerating inside). This technology allows material preservation to transcend the limits of time."
      ),
      icon: "⏱️",
    },
    {
      num: 10,
      title: t("意识读取与永生", "Consciousness Reading & Immortality"),
      desc: t(
        "场扫描并记录大脑中带电粒子的运动模式（约6-7分钟完成扫描）。意识信息可以数字化存储，并转移到新的身体中，实现永生。还可以通过非接触方式将知识直接传输到大脑中。",
        "Fields scan and record the motion patterns of charged particles in the brain (scanning takes approximately 6-7 minutes). Consciousness information can be digitally stored and transferred to a new body, achieving immortality. Knowledge can also be transferred directly to brains through non-contact methods."
      ),
      icon: "🧠",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="prose">
        <h1>{t("人工场扫描十大应用", "Top 10 Applications of Artificial Field Scanning")}</h1>
        <p className="text-lg text-gray-600 mb-8">
          {t(
            "根据张祥前的统一场论，一旦人类掌握人工场扫描技术，以下十大应用将成为可能。这些应用在果克文明中已经实现。",
            "According to Zhang Xiangqian&apos;s unified field theory, once humanity masters artificial field scanning technology, the following ten applications will become possible. These applications have already been realized in the Guoke civilization."
          )}
        </p>

        <div className="space-y-6 my-8">
          {applications.map((app) => (
            <div key={app.num} className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 text-3xl">{app.icon}</div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-primary-600 text-white font-bold text-xs">
                      {app.num}
                    </span>
                    <h3 className="font-semibold text-primary-800 mt-0 mb-0 text-lg">{app.title}</h3>
                  </div>
                  <p className="text-gray-700 text-sm mt-0 mb-0">{app.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg my-6">
          <p className="text-sm text-yellow-800 mb-0">
            {t(
              <><strong>声明：</strong>以上均为张祥前基于统一场论描述的理论应用，目前没有任何一项得到实验验证或工程实现。本站如实呈现这些内容，不对其可行性做出任何判断。</>,
              <><strong>Disclaimer:</strong> All applications above are theoretical, described by Zhang Xiangqian based on the unified field theory. None have been experimentally verified or engineered. This site faithfully presents this content without making any judgment on their feasibility.</>
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
            description: t("了解这些技术背后的果克文明", "Learn about the Guoke civilization behind these technologies"),
          },
          {
            href: "/theory/overview",
            title: t("理论总览", "Theory Overview"),
            description: t("了解这些应用背后的统一场论基础", "Understand the unified field theory foundation behind these applications"),
          },
        ]}
      />
    </div>
  );
}
