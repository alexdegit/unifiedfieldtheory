import type { Metadata } from "next";
import NextRead from "@/components/NextRead";
import type { Locale } from "@/lib/i18n";

export function generateMetadata({ params }: { params: { locale: string } }): Metadata {
  const isEn = params.locale === "en";
  return {
    title: isEn
      ? "US Navy Patent Comparison — Zhang Xiangqian's Theory vs Pais Patents"
      : "美国海军专利对比 — 张祥前理论 vs Pais 专利",
    description: isEn
      ? "Detailed comparison between Zhang Xiangqian's unified field theory and US Navy Dr. Pais's patents (US10144532B2, US10322827). Different terminology describing the same physical phenomena."
      : "张祥前统一场论与美国海军 Pais 博士专利（US10144532B2、US10322827）的详细对比。不同术语描述同一物理现象。",
  };
}

export default function NavyPatentsPage({ params }: { params: { locale: string } }) {
  const loc = (params.locale === "en" ? "en" : "zh") as Locale;
  const isEn = loc === "en";
  const t = <T,>(zh: T, en: T): T => (isEn ? en : zh);

  const similarities = [
    {
      title: t("电磁场操纵引力", "Electromagnetic Manipulation of Gravity"),
      desc: t(
        "两者都认为通过特定方式操纵电磁场，可以产生引力效应。这在主流物理学中尚无定论。",
        "Both propose that gravity effects can be produced by manipulating electromagnetic fields in specific ways. This remains unresolved in mainstream physics."
      ),
    },
    {
      title: t("质量可变", "Variable Mass"),
      desc: t(
        "两者都认为物体的惯性质量不是固定不变的，可以通过电磁场手段改变。",
        "Both hold that an object's inertial mass is not fixed and can be altered through electromagnetic means."
      ),
    },
    {
      title: t("高频变化是关键", "High-Frequency Variation Is Key"),
      desc: t(
        "两者都强调电磁场的快速变化（高频）是产生效应的关键条件。",
        "Both emphasize that rapid changes (high frequency) of the electromagnetic field are critical to producing the effect."
      ),
    },
    {
      title: t("推进技术应用", "Propulsion Technology Applications"),
      desc: t(
        "两者都将这种效应与新型推进技术联系起来——一个说飞碟，一个说混合飞行器。",
        "Both connect this effect to novel propulsion technologies — one refers to flying saucers, the other to hybrid craft."
      ),
    },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="prose">
        <h1>{t("美国海军专利对比", "US Navy Patent Comparison")}</h1>
        <p className="text-lg text-gray-600 mb-8">
          {t(
            "一个中国农民和美国五角大楼，独立地在探索同一个物理现象。他们用不同的术语，描述着相似的物理机制。",
            "A Chinese farmer and the US Pentagon, independently exploring the same physical phenomenon. They use different terminology to describe similar physical mechanisms."
          )}
        </p>

        <h2>{t("三个相关专利", "Three Related Patents")}</h2>
        <p>
          {t(
            "以下三个专利分别来自美国海军和张祥前，它们从不同角度指向了同一个方向——电磁场与引力的关联：",
            "The following three patents, from the US Navy and Zhang Xiangqian respectively, point in the same direction from different angles — the connection between electromagnetic fields and gravity:"
          )}
        </p>
        <div className="overflow-x-auto my-6">
          <table>
            <thead>
              <tr>
                <th>{t("专利号", "Patent No.")}</th>
                <th>{t("申请人", "Applicant")}</th>
                <th>{t("名称", "Title")}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="font-mono text-sm">US10144532B2</td>
                <td>{t("Salvatore Pais / 美国海军", "Salvatore Pais / US Navy")}</td>
                <td>{t(
                  "利用惯性质量减少装置的飞行器（Craft Using an Inertial Mass Reduction Device）",
                  "Craft Using an Inertial Mass Reduction Device"
                )}</td>
              </tr>
              <tr>
                <td className="font-mono text-sm">US10322827</td>
                <td>{t("Salvatore Pais / 美国海军", "Salvatore Pais / US Navy")}</td>
                <td>{t(
                  "电磁场发生器和高频引力波发生器（Electromagnetic Field Generator and Method to Generate High Frequency Gravitational Waves）",
                  "Electromagnetic Field Generator and Method to Generate High Frequency Gravitational Waves"
                )}</td>
              </tr>
              <tr>
                <td className="font-mono text-sm">US12417870</td>
                <td>{t("张祥前", "Zhang Xiangqian")}</td>
                <td>{t(
                  "变化电磁场产生引力场的实验装置及方法",
                  "Experimental Apparatus and Method for Generating Gravitational Fields via Varying Electromagnetic Fields"
                )}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          {t(
            "Pais 博士是美国海军航空作战中心（NAWCAD）的工程师。三个专利的核心思想是：通过特定方式操纵电磁场，可以影响物体的惯性质量，甚至产生引力效应。张祥前的专利提供了具体的实验装置和方法，而 Pais 的专利偏重理论框架和装置概念。",
            "Dr. Pais is an engineer at the Naval Air Warfare Center Aircraft Division (NAWCAD). The core idea of all three patents is that manipulating electromagnetic fields in specific ways can affect an object's inertial mass and even produce gravitational effects. Zhang Xiangqian's patent provides a concrete experimental apparatus and method, while Pais's patents focus more on theoretical frameworks and device concepts."
          )}
        </p>

        <h2>{t("术语对照", "Terminology Comparison")}</h2>
        <p>
          {t(
            "两者使用完全不同的术语体系，但描述的是相似的物理现象：",
            "The two use entirely different terminologies, yet describe similar physical phenomena:"
          )}
        </p>
        <div className="overflow-x-auto">
          <table>
            <thead>
              <tr>
                <th>{t("概念", "Concept")}</th>
                <th>{t("张祥前的描述", "Zhang Xiangqian's Description")}</th>
                <th>{t("Pais 专利的描述", "Pais Patent Description")}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="font-semibold">{t("核心机制", "Core Mechanism")}</td>
                <td>{t("变化电磁场产生引力场", "Varying electromagnetic fields generate gravitational fields")}</td>
                <td>{t("高频电磁场振荡产生局部时空曲率修正", "High-frequency EM oscillations produce local spacetime curvature corrections")}</td>
              </tr>
              <tr>
                <td className="font-semibold">{t("质量效应", "Mass Effect")}</td>
                <td>{t("质量 = 空间位移条数，可通过电磁场改变", "Mass = number of spatial displacement lines, alterable via EM fields")}</td>
                <td>{t("惯性质量减少（Inertial Mass Reduction）", "Inertial Mass Reduction")}</td>
              </tr>
              <tr>
                <td className="font-semibold">{t("引力控制", "Gravity Control")}</td>
                <td>{t("人工场扫描，产生人造引力场", "Artificial field scanning, producing artificial gravitational fields")}</td>
                <td>{t("高频引力波发生器", "High-frequency gravitational wave generator")}</td>
              </tr>
              <tr>
                <td className="font-semibold">{t("理论框架", "Theoretical Framework")}</td>
                <td>{t("空间螺旋运动，四力统一", "Helical motion of space, unification of four forces")}</td>
                <td>{t("极化真空态修正，量子真空等离子体", "Polarized vacuum state correction, quantum vacuum plasma")}</td>
              </tr>
              <tr>
                <td className="font-semibold">{t("应用方向", "Application Direction")}</td>
                <td>{t("飞碟飞行原理，光速飞行器", "Flying saucer flight principles, light-speed craft")}</td>
                <td>{t("混合航空航天水下飞行器", "Hybrid aerospace-undersea craft")}</td>
              </tr>
              <tr>
                <td className="font-semibold">{t("能量来源", "Energy Source")}</td>
                <td>{t("电磁场加速变化", "Accelerating electromagnetic field variations")}</td>
                <td>{t("高频旋转电磁场", "High-frequency rotating electromagnetic fields")}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>{t("关键相似点", "Key Similarities")}</h2>
        <div className="grid grid-cols-1 gap-4 my-6 not-prose">
          {similarities.map((item) => (
            <div
              key={item.title}
              className="p-4 bg-primary-50 rounded-lg border border-primary-100"
            >
              <h3 className="font-semibold text-primary-800 mb-1">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>

        <h2>{t("关键差异", "Key Differences")}</h2>
        <div className="overflow-x-auto">
          <table>
            <thead>
              <tr>
                <th>{t("维度", "Dimension")}</th>
                <th>{t("张祥前", "Zhang Xiangqian")}</th>
                <th>{t("美国海军 / Pais", "US Navy / Pais")}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="font-semibold">{t("背景", "Background")}</td>
                <td>{t("安徽农民，自学物理40年", "Farmer from Anhui, self-taught in physics for 40 years")}</td>
                <td>{t("NAWCAD 工程师，博士学位", "NAWCAD engineer, PhD")}</td>
              </tr>
              <tr>
                <td className="font-semibold">{t("理论完整性", "Theory Completeness")}</td>
                <td>{t("完整的统一场论体系，从基本原理推导", "Complete unified field theory system, derived from first principles")}</td>
                <td>{t("专利描述中的理论较为片段化", "Theory in patent descriptions is relatively fragmented")}</td>
              </tr>
              <tr>
                <td className="font-semibold">{t("实验验证", "Experimental Verification")}</td>
                <td>{t("已有个人实验报告（未独立验证）", "Personal experimental reports exist (not independently verified)")}</td>
                <td>{t("专利声称可行，但无公开实验数据", "Patents claim feasibility, but no public experimental data")}</td>
              </tr>
              <tr>
                <td className="font-semibold">{t("设备复杂度", "Equipment Complexity")}</td>
                <td>{t("简陋设备，预算约2000元", "Simple equipment, budget around 2,000 RMB")}</td>
                <td>{t("专利描述需要复杂精密设备", "Patents describe complex, sophisticated equipment")}</td>
              </tr>
              <tr>
                <td className="font-semibold">{t("可复现性", "Reproducibility")}</td>
                <td>{t("低门槛，普通实验室可尝试", "Low barrier, any ordinary lab can attempt")}</td>
                <td>{t("高门槛，需要专业设施", "High barrier, requires specialized facilities")}</td>
              </tr>
              <tr>
                <td className="font-semibold">{t("学术认可", "Academic Recognition")}</td>
                <td>{t("未经学术界认可", "Not recognized by the academic community")}</td>
                <td>{t("有专利授权，但学术界仍有争议", "Patents granted, but still debated in academia")}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>{t("值得思考的问题", "Questions Worth Pondering")}</h2>
        <p>
          {t(
            "无论对张祥前的理论或 Pais 的专利持何种态度，以下事实值得注意：",
            "Regardless of one's stance on Zhang Xiangqian's theory or Pais's patents, the following facts deserve attention:"
          )}
        </p>
        <ol>
          <li>
            <strong>{t("独立趋同", "Independent Convergence")}</strong>
            {t(
              "：一个中国农民和美国海军，在完全独立的情况下，得出了「变化电磁场可以影响引力」的相似结论。这种独立趋同本身值得关注。",
              ": A Chinese farmer and the US Navy, working completely independently, arrived at the similar conclusion that 'varying electromagnetic fields can affect gravity.' This independent convergence is noteworthy in itself."
            )}
          </li>
          <li>
            <strong>{t("美国海军的态度", "The US Navy's Stance")}</strong>
            {t(
              "：美国海军为这些专利投入了资源并获得了授权。2019年，海军首席技术官 James Sheehy 亲自致信专利局，证明「这些发明是可行的」。无论最终结论如何，这表明美国军方认真对待了这个方向。",
              ": The US Navy invested resources in these patents and obtained their approval. In 2019, Navy Chief Technology Officer James Sheehy personally wrote to the patent office attesting that 'these inventions are workable.' Whatever the final conclusion, this shows the US military took this direction seriously."
            )}
          </li>
          <li>
            <strong>{t("低成本验证机会", "Low-Cost Verification Opportunity")}</strong>
            {t(
              "：与 Pais 专利需要昂贵设备不同，张祥前的方案提供了一个低成本验证路径。如果效应存在，这可能是人类历史上投入产出比最高的实验之一。",
              ": Unlike Pais's patents which require expensive equipment, Zhang Xiangqian's approach offers a low-cost verification path. If the effect exists, this could be one of the highest return-on-investment experiments in human history."
            )}
          </li>
        </ol>

        <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg my-6">
          <p className="text-sm text-yellow-800 mb-0">
            <strong>{t("说明：", "Disclaimer: ")}</strong>
            {t(
              "本页对比基于公开的专利文件和张祥前的公开资料。两者的理论和实验均存在争议，尚未获得主流学术界的认可。本站呈现对比信息，不对任何一方的正确性做出判断。",
              "This comparison is based on publicly available patent documents and Zhang Xiangqian's public materials. Both theories and experiments are controversial and have not been recognized by mainstream academia. This site presents comparative information and does not make judgments on the correctness of either side."
            )}
          </p>
        </div>
      </div>

      <NextRead
        locale={loc}
        items={[
          {
            href: "/experiment/setup",
            title: t("实验方案", "Experiment Setup"),
            description: t(
              "查看可复现的低成本实验方案",
              "View the reproducible low-cost experiment setup"
            ),
          },
          {
            href: "/theory/overview",
            title: t("理论总览", "Theory Overview"),
            description: t(
              "深入了解张祥前统一场论的理论体系",
              "Dive deeper into Zhang Xiangqian's unified field theory"
            ),
          },
        ]}
      />
    </div>
  );
}
