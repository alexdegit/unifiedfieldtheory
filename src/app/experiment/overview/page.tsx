import type { Metadata } from "next";
import Link from "next/link";
import NextRead from "@/components/NextRead";

export const metadata: Metadata = {
  title: "实验总览 — 变化电磁场产生引力场的实验验证",
  description:
    "张祥前从2023年开始的系列实验：加速电荷产生引力场、变化磁场令小球旋转、低压方案突破。时间线与关键成果。",
};

export default function ExperimentOverviewPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="prose">
        <h1>实验总览</h1>
        <p className="text-lg text-gray-600 mb-8">
          张祥前的统一场论不仅是理论推导，他还进行了系列实验来验证核心预测：变化电磁场可以产生引力场效应。
        </p>

        <h2>实验时间线</h2>
        <div className="space-y-6 my-8">
          {[
            {
              date: "2023年11月",
              title: "首次发现",
              desc: "在加速电荷实验中，首次观测到异常力的效应，物体出现了无法用常规电磁力解释的运动。",
            },
            {
              date: "2024年3月",
              title: "旋转实验",
              desc: "使用变化磁场，观测到悬挂的小球出现自发旋转。旋转方向与磁场变化方向一致，排除了常规电磁力的解释。",
            },
            {
              date: "2024年4月",
              title: "质量变化实验",
              desc: "在强变化电磁场中，精密天平测量到物体质量出现微小但可测量的变化。",
            },
            {
              date: "2024年下半年",
              title: "低压方案突破",
              desc: "将实验所需电压从数千伏降低到 80V/30A，大幅降低了复现门槛。这意味着普通物理实验室即可尝试。",
            },
          ].map((item) => (
            <div key={item.date} className="flex gap-4">
              <div className="flex-shrink-0 w-28">
                <span className="text-sm font-semibold text-primary-600 bg-primary-50 px-3 py-1 rounded-full">
                  {item.date}
                </span>
              </div>
              <div>
                <h3 className="font-semibold text-primary-800 mt-0 mb-1">{item.title}</h3>
                <p className="text-gray-600 text-sm mt-0">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <h2>核心实验</h2>

        <h3>实验一：加速电荷产生引力场</h3>
        <p>
          根据统一场论，加速运动的电荷会产生变化的电磁场，而变化的电磁场会产生引力场效应。
          实验使用高频交变电流通过导体，在导体附近放置检测物体，观测是否出现异常力。
        </p>
        <p>
          实验结果显示，检测物体出现了与电磁力方向不同的运动，且运动方向与理论预测一致。
        </p>

        <h3>实验二：变化磁场产生漩涡引力场</h3>
        <p>
          将小球用细线悬挂在变化磁场中心附近。当磁场快速变化时，小球出现了绕磁场轴线的旋转运动。
          这种旋转无法用常规电磁感应解释（小球为非导体），张祥前认为这是漩涡引力场的直接证据。
        </p>

        <h3>低压方案（80V/30A）</h3>
        <p>
          早期实验需要高压设备，复现门槛较高。经过优化，张祥前找到了使用 80V/30A 低压电源即可观测到效应的方案。
          这大大降低了独立复现的设备要求和安全风险。
        </p>

        <h2>美国专利</h2>
        <p>
          2024年，张祥前就相关实验方案申请了美国专利（US12417870），这是实验方案获得知识产权保护的重要一步。
        </p>

        <div className="bg-primary-50 p-6 rounded-lg my-6">
          <h3 className="mt-0 text-primary-800">为什么独立复现至关重要？</h3>
          <p>
            科学的基石是可重复性。无论一个实验结果多么惊人，只有当独立的实验室、
            使用独立的设备、由不同的实验者复现出相同的结果时，才能被科学界认可。
          </p>
          <p className="mb-0">
            张祥前的实验目前仅有他个人进行和报告。我们呼吁有条件的物理实验室和研究者进行独立复现。
            详细的实验方案和设备清单，请查看
            <Link href="/experiment/setup" className="text-primary-600 font-semibold">
              实验方案
            </Link>
            页面。
          </p>
        </div>

        <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg my-6">
          <p className="text-sm text-yellow-800 mb-0">
            <strong>注意：</strong>以上实验结果均由张祥前本人报告，尚未经过独立第三方验证。
            本站如实呈现实验信息，不对实验结果的可靠性做出判断。
          </p>
        </div>
      </div>

      <NextRead
        items={[
          {
            href: "/experiment/setup",
            title: "实验方案",
            description: "详细的实验步骤、材料清单和参数设置",
          },
          {
            href: "/theory/overview",
            title: "理论总览",
            description: "了解实验背后的理论基础",
          },
        ]}
      />
    </div>
  );
}
