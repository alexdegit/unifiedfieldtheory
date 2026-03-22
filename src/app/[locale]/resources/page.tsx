import type { Metadata } from "next";
import NextRead from "@/components/NextRead";
import type { Locale } from "@/lib/i18n";

export function generateMetadata({ params }: { params: { locale: string } }): Metadata {
  const isEn = params.locale === "en";
  return {
    title: isEn ? "Resources & Contact" : "资源与联系",
    description: isEn
      ? "Download Zhang Xiangqian's original materials, join the replication effort, and get in touch."
      : "下载张祥前原始资料、参与实验复现、联系我们。",
  };
}

export default function ResourcesPage({ params }: { params: { locale: string } }) {
  const loc = (params.locale === "en" ? "en" : "zh") as Locale;
  const isEn = loc === "en";
  const t = <T,>(zh: T, en: T): T => (isEn ? en : zh);

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="prose">
        <h1>{t("资源与联系", "Resources & Contact")}</h1>

        <h2>{t("原始资料下载", "Original Materials Download")}</h2>
        <p>
          {t(
            "张祥前的全部原始文档、分析报告、实验视频等资料已整理在 Google Drive 中，供研究者免费获取：",
            "All of Zhang Xiangqian's original documents, analysis reports, experiment videos, and other materials have been organized on Google Drive, freely available for researchers:"
          )}
        </p>
        <div className="bg-primary-50 p-4 rounded-lg my-4">
          <a
            href="https://drive.google.com/drive/folders/1oCqa8_elS_mGGiWjuli425OLr3LHfmRs?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary-700 font-medium break-all"
          >
            {t("点击访问 Google Drive 资料库", "Access the Google Drive Repository")} →
          </a>
        </div>

        <h2>{t("独立复现呼吁", "Call for Independent Replication")}</h2>
        <p>
          {t(
            <>如果你有物理实验室条件，我们诚挚邀请你尝试复现张祥前的实验。详细的实验方案和参数见<a href={`/${loc}/experiment/setup`}>实验方案页面</a>。如果你完成了独立复现（无论成功或失败），请联系我们，你的结果对推进这一研究方向至关重要。</>,
            <>If you have access to a physics laboratory, we sincerely invite you to attempt replicating Zhang Xiangqian&apos;s experiments. Detailed experimental setups and parameters can be found on the <a href={`/${loc}/experiment/setup`}>Experimental Setup page</a>. If you complete an independent replication (whether successful or not), please contact us — your results are crucial for advancing this line of research.</>
          )}
        </p>

        <h2>{t("联系方式", "Contact")}</h2>
        <div className="bg-gray-50 p-6 rounded-lg my-6">
          <ul className="space-y-3 mb-0">
            <li>
              <strong>{t("网站维护者", "Site Maintainer")}</strong>：
              <a href="mailto:mr.arink@gmail.com" className="text-primary-700">mr.arink@gmail.com</a>
            </li>
          </ul>
        </div>
      </div>

      <NextRead
        locale={loc}
        items={[
          {
            href: "/experiment/setup",
            title: t("实验方案", "Experimental Setup"),
            description: t("查看详细的实验方案和参数", "View detailed experimental setups and parameters"),
          },
          {
            href: "/experiment/replicate",
            title: t("呼吁复现", "Call for Replication"),
            description: t("了解独立复现的意义和方法", "Learn about the significance and methods of independent replication"),
          },
        ]}
      />
    </div>
  );
}
