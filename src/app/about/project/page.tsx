import type { Metadata } from "next";
import NextRead from "@/components/NextRead";

export const metadata: Metadata = {
  title: "关于本项目 — 统一场论信息站",
  description:
    "本站的建设初衷、信息来源说明和免责声明。我们不做真假判断，呼吁独立实验复现。",
};

export default function ProjectPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="prose">
        <h1>关于本项目</h1>

        <h2>这个网站是怎么来的</h2>
        <p>
          我们注意到张祥前的统一场论和他的实验，也注意到美国海军在类似方向的专利。
          我们认为，这些信息值得被系统整理和呈现，让更多有科学素养的人了解和评判。
        </p>
        <p>
          这个网站的目标很简单：<strong>把信息整理清楚，方便人们做出自己的判断</strong>。
          我们不是张祥前的代言人，也不是他的批评者。我们是信息的整理者。
        </p>

        <h2>信息来源</h2>
        <p>本站所有内容基于以下公开资料整理：</p>
        <ul>
          <li>张祥前著《统一场论》第七版</li>
          <li>张祥前著《果克星球奇遇记》</li>
          <li>张祥前著《变化电磁场产生引力场试验及简化推导》</li>
          <li>张祥前著《时间 空间 物质 信息 宇宙核心秘密》</li>
          <li>美国专利 US10144532B2（Pais，惯性质量减少装置）</li>
          <li>美国专利 US10322827（Pais，引力波发生器）</li>
          <li>美国专利 US12417870（张祥前）</li>
        </ul>

        <h2>我们的立场</h2>
        <div className="bg-primary-50 p-6 rounded-lg my-6">
          <ul className="space-y-3">
            <li>
              <strong>我们不判断真假。</strong>张祥前的理论尚未经过学术同行评审，
              实验结果尚未经过独立第三方验证。我们如实呈现信息，不做正确性判断。
            </li>
            <li>
              <strong>我们呼吁实验验证。</strong>理论的价值最终要靠实验说话。
              我们呼吁有条件的实验室和研究者进行独立复现实验。
            </li>
            <li>
              <strong>我们尊重科学方法。</strong>即使理论来源非传统，
              只要它做出可检验的预测，就值得用科学方法来验证。
            </li>
            <li>
              <strong>我们保持客观。</strong>本站不会使用煽动性语言，
              不会声称「这一定是真的」，也不会轻率地否定。我们让事实和数据说话。
            </li>
          </ul>
        </div>

        <h2>免责声明</h2>
        <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg my-6">
          <ul className="text-sm text-yellow-800 space-y-2">
            <li>
              本站呈现的是张祥前的理论体系和实验报告，不代表本站编者认同这些理论的正确性。
            </li>
            <li>
              实验方案仅供参考。实验涉及电气设备，存在安全风险。
              实验者需自行评估风险并承担全部责任。
            </li>
            <li>
              本站与张祥前本人无利益关系。本站不销售任何产品，不接受捐赠，不提供投资建议。
            </li>
            <li>
              美国海军专利信息来源于美国专利商标局公开文件，本站对专利内容的解读仅供参考。
            </li>
          </ul>
        </div>

        <h2>联系我们</h2>
        <p>
          如果你是物理学研究者，对复现实验有兴趣，或者发现本站信息有误，
          欢迎通过以下方式联系：
        </p>
        <ul>
          <li>电子邮件：（即将开通）</li>
        </ul>
      </div>

      <NextRead
        items={[
          {
            href: "/about/zhang",
            title: "张祥前简介",
            description: "了解这位坚持四十年的民间物理学家",
          },
          {
            href: "/theory/overview",
            title: "理论总览",
            description: "从这里开始了解统一场论",
          },
        ]}
      />
    </div>
  );
}
