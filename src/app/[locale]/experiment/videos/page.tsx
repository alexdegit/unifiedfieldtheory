import type { Metadata } from "next";
import NextRead from "@/components/NextRead";
import type { Locale } from "@/lib/i18n";

export function generateMetadata({ params }: { params: { locale: string } }): Metadata {
  const isEn = params.locale === "en";
  return {
    title: isEn
      ? "Experiment Videos — Visual Documentation of Gravitational Field Experiments"
      : "实验视频 — 引力场实验影像记录",
    description: isEn
      ? "Video documentation of Zhang Xiangqian's experiments demonstrating changing electromagnetic fields generating gravitational fields. Published on Bilibili."
      : "张祥前变化电磁场产生引力场实验的视频记录。发布于B站。",
  };
}

export default function ExperimentVideosPage({ params }: { params: { locale: string } }) {
  const loc = (params.locale === "en" ? "en" : "zh") as Locale;
  const isEn = loc === "en";
  const t = <T,>(zh: T, en: T): T => (isEn ? en : zh);

  const videoSections = [
    {
      title: t(
        "实验一：加速电荷产生引力场",
        "Experiment 1: Accelerating Charges Produce Gravitational Fields"
      ),
      description: t(
        "展示按下电源开关瞬间，悬挂的绝缘塑料皮向正极方向运动的现象。调转正负极后，运动方向随之改变，始终指向正极。",
        "Demonstrates the phenomenon where a suspended insulating plastic sheet moves toward the positive terminal at the moment the power switch is pressed. After reversing polarity, the direction of movement changes accordingly, always pointing toward the positive terminal."
      ),
      lookFor: t(
        "注意观察：塑料皮在按下开关的瞬间运动，而非持续通电后的运动。重点关注调转极性后运动方向是否一致地指向正极。",
        "What to look for: observe the plastic sheet moving at the instant the switch is pressed, not during sustained power. Focus on whether the direction of movement consistently points toward the positive terminal after polarity reversal."
      ),
    },
    {
      title: t(
        "实验二：变化磁场产生漩涡引力场（小球旋转）",
        "Experiment 2: Changing Magnetic Fields Produce Vortex Gravitational Fields (Ball Rotation)"
      ),
      description: t(
        "展示在真空罐中，断电后悬挂的聚乙烯小球持续旋转的现象。真空环境排除了离子风效应，断电状态排除了极化效应和静电马达效应。",
        "Demonstrates the phenomenon of a suspended polyethylene ball continuing to rotate inside a vacuum chamber after power disconnection. The vacuum environment eliminates ion wind effects, and the power-off state eliminates polarization and electrostatic motor effects."
      ),
      lookFor: t(
        "注意观察：小球在断电后是否仍然旋转。这是关键——断电后所有常规电磁效应都应消失，如果旋转持续，则指向变化磁场产生引力场的可能性。",
        "What to look for: whether the ball continues to rotate after power disconnection. This is the key — all conventional electromagnetic effects should disappear after power-off. If rotation persists, it points to the possibility of changing magnetic fields producing gravitational fields."
      ),
    },
    {
      title: t(
        "低压方案演示",
        "Low-Voltage Setup Demonstration"
      ),
      description: t(
        "展示使用 80V/30A 低压方案的实验过程。低压方案虽然效应较弱，但安全性更高，适合初步验证和教学演示。",
        "Demonstrates the experimental process using the 80V/30A low-voltage setup. While the effect is weaker with low voltage, it offers higher safety and is suitable for preliminary verification and educational demonstrations."
      ),
      lookFor: t(
        "注意观察：低压环境下效应虽然微弱，但通过精心设计的悬挂装置和稳定环境，仍然可以观察到可测量的运动。",
        "What to look for: although the effect is subtle in a low-voltage environment, measurable motion can still be observed through carefully designed suspension apparatus and a stable environment."
      ),
    },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="prose">
        <h1>{t("实验视频", "Experiment Videos")}</h1>
        <p className="text-lg text-gray-600 mb-8">
          {t(
            "张祥前已在B站（Bilibili）发布了实验演示视频。我们正在对这些视频进行整理和逐帧分析标注。",
            "Zhang Xiangqian has published experiment demonstration videos on Bilibili. We are in the process of organizing and annotating these videos with frame-by-frame analysis."
          )}
        </p>

        <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg my-6">
          <p className="text-sm text-blue-800 mb-0">
            {t(
              <><strong>说明：</strong>以下视频内容正在整理中。张祥前的原始视频已发布在B站，我们计划添加详细的逐帧分析、中英文字幕和实验参数标注，以便研究者更好地理解实验过程。</>,
              <><strong>Note:</strong> The video content below is being organized. Zhang Xiangqian&apos;s original videos have been published on Bilibili. We plan to add detailed frame-by-frame analysis, bilingual subtitles, and experimental parameter annotations to help researchers better understand the experimental process.</>
            )}
          </p>
        </div>
      </div>

      <div className="space-y-8 my-8">
        {videoSections.map((section, index) => (
          <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
            <div className="bg-gray-100 p-6">
              <div className="flex items-center justify-center h-48 bg-gray-200 rounded-lg mb-4">
                <div className="text-center">
                  <svg
                    className="w-16 h-16 text-gray-400 mx-auto mb-3"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <p className="text-gray-500 font-medium">
                    {t("视频即将上线", "Video coming soon")}
                  </p>
                </div>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {section.title}
              </h3>
              <p className="text-gray-600 mb-4">{section.description}</p>
              <div className="bg-amber-50 border border-amber-100 p-3 rounded-lg">
                <p className="text-sm text-amber-800 mb-0">
                  <strong>{t("观察要点：", "What to look for: ")}</strong>
                  {section.lookFor}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="prose">
        <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg my-6">
          <p className="text-sm text-yellow-800 mb-0">
            {t(
              <><strong>免责声明：</strong>视频内容来自张祥前本人的实验记录。实验结果尚未经独立第三方验证。视频仅供参考，不构成对实验结果正确性的保证。</>,
              <><strong>Disclaimer:</strong> Video content is from Zhang Xiangqian&apos;s own experimental recordings. The experimental results have not been independently verified by third parties. Videos are provided for reference only and do not constitute a guarantee of the correctness of the experimental results.</>
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
              "查看详细的实验设备和操作步骤",
              "View detailed experimental equipment and procedures"
            ),
          },
          {
            href: "/experiment/replicate",
            title: t("呼吁复现", "Call for Replication"),
            description: t(
              "了解如何参与独立复现实验",
              "Learn how to participate in independent replication"
            ),
          },
        ]}
      />
    </div>
  );
}
