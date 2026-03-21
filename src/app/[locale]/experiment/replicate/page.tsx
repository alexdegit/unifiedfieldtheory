import type { Metadata } from "next";
import NextRead from "@/components/NextRead";
import type { Locale } from "@/lib/i18n";

export function generateMetadata({ params }: { params: { locale: string } }): Metadata {
  const isEn = params.locale === "en";
  return {
    title: isEn
      ? "Call for Replication — Independent Verification of Gravitational Field Experiments"
      : "呼吁复现 — 引力场实验的独立验证",
    description: isEn
      ? "Why independent replication is the most critical next step for Zhang Xiangqian's experiments, who should try, and what it would mean for physics."
      : "为什么独立复现是张祥前实验最关键的下一步，谁应该尝试，以及这对物理学意味着什么。",
  };
}

export default function ReplicatePage({ params }: { params: { locale: string } }) {
  const loc = (params.locale === "en" ? "en" : "zh") as Locale;
  const isEn = loc === "en";
  const t = <T,>(zh: T, en: T): T => (isEn ? en : zh);

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="prose">
        <h1>{t("呼吁复现", "Call for Replication")}</h1>
        <p className="text-lg text-gray-600 mb-8">
          {t(
            "独立复现是推进这一研究最关键的一步。无论结果如何，都将为科学知识做出贡献。",
            "Independent replication is THE most critical step in advancing this research. Regardless of the outcome, it will contribute to scientific knowledge."
          )}
        </p>

        <h2>{t("为什么独立复现至关重要", "Why Independent Replication Is Critical")}</h2>
        <p>
          {t(
            "科学的根基是可重复性。一个实验者的结果，无论多么引人注目，都需要独立验证。",
            "Science&apos;s foundation is reproducibility. A single experimenter&apos;s results, no matter how compelling, need independent verification."
          )}
        </p>
        <ul>
          <li>
            {t(
              <><strong>科学史的教训</strong>：许多突破性声称最终被证明是测量误差或未控制的变量。冷核聚变（1989年）、引力波误报（BICEP2, 2014年）都是例子。严谨的独立复现是将声称与事实分开的唯一方式。</>,
              <><strong>Lessons from the history of science</strong>: many breakthrough claims turned out to be measurement errors or uncontrolled variables. Cold fusion (1989) and the gravitational wave false alarm (BICEP2, 2014) are examples. Rigorous independent replication is the only way to separate claims from facts.</>
            )}
          </li>
          <li>
            {t(
              <><strong>但也有另一面</strong>：科学史上同样有许多真正的突破最初被主流忽视或否定。塞梅尔维斯的洗手理论、魏格纳的大陆漂移、沃伦和马歇尔的幽门螺杆菌致病说，都在数十年后才被接受。</>,
              <><strong>But there is another side</strong>: the history of science also shows many genuine breakthroughs that were initially dismissed by the mainstream. Semmelweis&apos;s handwashing theory, Wegener&apos;s continental drift, and Warren and Marshall&apos;s H. pylori hypothesis were all accepted only decades later.</>
            )}
          </li>
          <li>
            {t(
              <><strong>唯一的解决之道</strong>：不是争论，而是实验。独立复现是解决这一问题的唯一途径。</>,
              <><strong>The only way to resolve this</strong>: not debate, but experiment. Independent replication is the only path to resolution.</>
            )}
          </li>
        </ul>

        <h2>{t("设备与预算概览", "Equipment and Budget Summary")}</h2>
        <p>
          {t(
            "复现这些实验不需要昂贵的设备。以下是简化的设备清单和预算估算：",
            "Replicating these experiments does not require expensive equipment. Here is a simplified equipment list and budget estimate:"
          )}
        </p>
        <div className="bg-primary-50 p-6 rounded-lg my-6">
          <div className="text-center mb-4">
            <span className="text-3xl font-bold text-primary-800">
              {t("~2000\u20132500 元人民币", "~$300\u2013500 USD")}
            </span>
            <p className="text-sm text-gray-600 mt-1">
              {t("基础实验方案的总预算", "Total budget for the basic experimental setup")}
            </p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr>
                  <th className="text-left p-2">{t("设备", "Equipment")}</th>
                  <th className="text-left p-2">{t("大约费用", "Approx. Cost")}</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-2">{t("高压发生器模块 × 3", "High-voltage generator modules × 3")}</td>
                  <td className="p-2">{t("~300\u2013500 元", "~$40\u201370")}</td>
                </tr>
                <tr>
                  <td className="p-2">{t("直流电源机箱", "DC power supply unit")}</td>
                  <td className="p-2">{t("~500\u2013800 元", "~$70\u2013110")}</td>
                </tr>
                <tr>
                  <td className="p-2">{t("真空罐（实验二）", "Vacuum chamber (Experiment 2)")}</td>
                  <td className="p-2">{t("~300\u2013500 元", "~$40\u201370")}</td>
                </tr>
                <tr>
                  <td className="p-2">{t("硅胶管、导线、绝缘材料", "Silicone tubes, wires, insulation materials")}</td>
                  <td className="p-2">{t("~200\u2013300 元", "~$30\u201340")}</td>
                </tr>
                <tr>
                  <td className="p-2">{t("悬挂装置及其他耗材", "Suspension apparatus and consumables")}</td>
                  <td className="p-2">{t("~100\u2013200 元", "~$15\u201330")}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <p>
          {t(
            <>推荐方案：<strong>真空罐 + 高压低电流方案</strong>（实验二的方案 A）。这是最稳定的方案，几乎每次实验都能成功，同时真空环境排除了大部分干扰因素。</>,
            <>Recommended approach: <strong>vacuum chamber + high-voltage low-current setup</strong> (Experiment 2, Setup A). This is the most stable setup, with successful results in nearly every trial, and the vacuum environment eliminates most interference factors.</>
          )}
        </p>
        <p>
          {t(
            "一个大学物理系已经具备所有必要的设备和条件。",
            "A university physics department already has everything needed."
          )}
        </p>

        <h2>{t("谁应该尝试复现", "Who Should Try")}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6 not-prose">
          <div className="p-4 bg-primary-50 rounded-lg border border-primary-100">
            <h3 className="font-semibold text-primary-800 mb-1">
              {t("大学物理系", "University Physics Departments")}
            </h3>
            <p className="text-sm text-gray-600">
              {t(
                "具备完善的实验设备、安全措施和专业人员。是最理想的复现环境。",
                "Equipped with complete experimental apparatus, safety measures, and professional personnel. The most ideal replication environment."
              )}
            </p>
          </div>
          <div className="p-4 bg-primary-50 rounded-lg border border-primary-100">
            <h3 className="font-semibold text-primary-800 mb-1">
              {t("独立研究实验室", "Independent Research Labs")}
            </h3>
            <p className="text-sm text-gray-600">
              {t(
                "不受体制限制，可以自由探索非主流研究方向。需要具备基本的实验能力和安全意识。",
                "Free from institutional constraints, able to freely explore non-mainstream research directions. Must have basic experimental capability and safety awareness."
              )}
            </p>
          </div>
          <div className="p-4 bg-primary-50 rounded-lg border border-primary-100">
            <h3 className="font-semibold text-primary-800 mb-1">
              {t("物理爱好者", "Physics Enthusiasts")}
            </h3>
            <p className="text-sm text-gray-600">
              {t(
                "需要具备电气安全知识。高压实验有触电风险，必须了解安全操作规程后再进行。",
                "Must have electrical safety knowledge. High-voltage experiments carry electrocution risks — only proceed after understanding safety protocols."
              )}
            </p>
          </div>
          <div className="p-4 bg-primary-50 rounded-lg border border-primary-100">
            <h3 className="font-semibold text-primary-800 mb-1">
              {t("创客空间", "Maker Spaces")}
            </h3>
            <p className="text-sm text-gray-600">
              {t(
                "配备适当安全设备的创客空间可以组织小组实验。团队合作有助于实验记录和分析。",
                "Maker spaces with proper safety equipment can organize group experiments. Teamwork helps with experimental documentation and analysis."
              )}
            </p>
          </div>
        </div>

        <h2>{t("复现结果意味着什么", "What a Successful Replication Would Mean")}</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6 not-prose">
          <div className="p-5 bg-green-50 rounded-lg border border-green-200">
            <h3 className="font-semibold text-green-800 mb-2">
              {t("如果被证实", "If Confirmed")}
            </h3>
            <p className="text-sm text-gray-700">
              {t(
                "这将可能是一个世纪以来最重要的物理学发现。电磁场与引力场之间的可操控联系将打开全新的技术领域——从推进系统到能源技术。整个物理学的框架可能需要重新审视。",
                "This would potentially be the most important physics discovery in a century. A controllable connection between electromagnetic and gravitational fields would open entirely new technological domains — from propulsion systems to energy technology. The entire framework of physics may need to be re-examined."
              )}
            </p>
          </div>
          <div className="p-5 bg-blue-50 rounded-lg border border-blue-200">
            <h3 className="font-semibold text-blue-800 mb-2">
              {t("如果被否定", "If Refuted")}
            </h3>
            <p className="text-sm text-gray-700">
              {t(
                "同样有价值。严谨的否定性结果将提供宝贵的数据，帮助理解原始实验中观察到的现象究竟是什么原因造成的——是测量误差、未控制的变量、还是其他已知物理效应。",
                "Equally valuable. Rigorous negative results would provide precious data, helping to understand what actually caused the phenomena observed in the original experiments — whether measurement errors, uncontrolled variables, or other known physical effects."
              )}
            </p>
          </div>
        </div>
        <p className="text-center font-semibold text-primary-800">
          {t(
            "无论哪种结果，都将推进科学知识的边界。",
            "Either outcome advances the boundaries of scientific knowledge."
          )}
        </p>

        <h2>{t("联系我们", "Contact Us")}</h2>
        <div className="bg-gray-50 p-6 rounded-lg my-6">
          <p>
            {t(
              "如果您已经复现或尝试复现了这些实验，我们非常希望了解您的结果——无论是正面的还是负面的。",
              "If you have replicated or attempted to replicate these experiments, we want to hear from you — whether your results are positive or negative."
            )}
          </p>
          <p>
            {t(
              "请将您的实验报告（包括详细的设备参数、操作步骤、观测结果和分析）发送到：",
              "Please send your experiment report (including detailed equipment parameters, procedures, observations, and analysis) to:"
            )}
          </p>
          <p className="text-center">
            <span className="inline-block bg-white px-4 py-2 rounded border border-gray-200 font-mono text-primary-700">
              contact@unifiedfieldtheory.info
            </span>
          </p>
          <p className="text-sm text-gray-500">
            {t(
              "我们承诺认真对待每一份复现报告，并在获得发送者许可后，将有价值的复现数据发布在本站上。",
              "We commit to taking every replication report seriously and, with the sender&apos;s permission, publishing valuable replication data on this site."
            )}
          </p>
        </div>

        <div className="bg-primary-50 p-6 rounded-lg my-6">
          <h3 className="mt-0 text-primary-800">{t("查看详细实验方案", "View Detailed Experiment Setup")}</h3>
          <p>
            {t(
              "如果您对复现感兴趣，请先阅读详细的实验方案页面，了解完整的设备清单、操作步骤和注意事项。",
              "If you are interested in replication, please first read the detailed experiment setup page for complete equipment lists, procedures, and precautions."
            )}
          </p>
          <a
            href={`/${loc}/experiment/setup`}
            className="inline-block bg-primary-700 text-white px-5 py-2 rounded-lg hover:bg-primary-800 transition-colors no-underline"
          >
            {t("前往实验方案 →", "Go to Experiment Setup →")}
          </a>
        </div>

        <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg my-6">
          <p className="text-sm text-yellow-800 mb-0">
            {t(
              <><strong>免责声明：</strong>本站呼吁独立复现，旨在推动科学验证过程。实验涉及高压电气设备，存在安全风险。参与者应自行评估风险并承担责任。实验结果尚未经独立第三方验证，本站不对理论的正确性做出判断。</>,
              <><strong>Disclaimer:</strong> This site&apos;s call for independent replication aims to advance the scientific verification process. The experiments involve high-voltage electrical equipment and carry safety risks. Participants should assess risks and assume responsibility on their own. The experimental results have not been independently verified by third parties, and this site makes no judgment on the correctness of the theory.</>
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
              "查看详细的设备清单和实验步骤",
              "View detailed equipment lists and experimental procedures"
            ),
          },
          {
            href: "/experiment/videos",
            title: t("实验视频", "Experiment Videos"),
            description: t(
              "观看张祥前的实验演示视频",
              "Watch Zhang Xiangqian's experiment demonstration videos"
            ),
          },
        ]}
      />
    </div>
  );
}
