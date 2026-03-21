import type { Metadata } from "next";
import NextRead from "@/components/NextRead";

export const metadata: Metadata = {
  title: "理论总览 — 统一场论核心框架",
  description:
    "张祥前统一场论的核心框架：宇宙只有物体和空间两种存在，四种基本力是空间螺旋运动的不同分量，果克动量公式 P = m(C - v)。",
};

export default function TheoryOverviewPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="prose">
        <h1>理论总览</h1>
        <p className="text-lg text-gray-600 mb-8">
          张祥前统一场论的核心思想：宇宙中只有物体和空间两种存在，四种基本力是空间螺旋运动的不同分量。
        </p>

        <h2>宇宙根本法则</h2>
        <p>
          张祥前统一场论的出发点极为简洁：<strong>宇宙中只有两种存在——物体和空间</strong>，没有第三种。
          所有物理现象，都是物体在空间中运动、以及空间本身运动的结果。
        </p>
        <p>
          这里的关键突破是：<strong>空间不是静止的背景</strong>，空间本身可以运动。
          空间的运动就是我们所说的「场」——电场、磁场、引力场、核力场，都是空间以不同方式运动的表现。
        </p>

        <h2>螺旋运动统一四种力</h2>
        <p>
          张祥前认为，空间中存在的物体周围的空间以螺旋方式运动。这种螺旋运动可以分解为三个分量：
        </p>
        <div className="bg-primary-50 p-6 rounded-lg my-6">
          <ul className="space-y-3">
            <li>
              <strong className="text-primary-700">直线运动分量</strong> → 对应电场
            </li>
            <li>
              <strong className="text-primary-700">环绕运动分量</strong> → 对应磁场
            </li>
            <li>
              <strong className="text-primary-700">向心加速度分量</strong> → 对应引力场
            </li>
          </ul>
          <p className="mt-4 text-sm text-gray-600">
            核力场则是在极小尺度下，螺旋运动各分量之间的耦合效应。
          </p>
        </div>
        <p>
          用一个直观的比喻：想象一根弹簧被拉伸展开。沿弹簧轴线的运动是电场，
          绕轴线的旋转是磁场，指向轴线的向心力是引力场。四种力不是独立的存在，
          而是同一种运动的不同侧面。
        </p>

        <h2>果克动量公式</h2>
        <p>
          统一场论的核心公式之一是果克动量公式：
        </p>
        <div className="bg-gray-50 p-6 rounded-lg my-6 text-center">
          <div className="text-2xl font-mono text-primary-800 mb-4">
            P = m(C - v)
          </div>
          <div className="text-sm text-gray-600 space-y-1">
            <p>P — 果克动量（物体的空间动量）</p>
            <p>m — 质量</p>
            <p>C — 光速</p>
            <p>v — 物体运动速度</p>
          </div>
        </div>
        <p>
          这个公式表明：物体静止时（v=0），其果克动量为 mC，全部表现为质量（空间位移）。
          当物体速度趋近光速（v→C）时，果克动量趋近于零，质量消失。
          这与爱因斯坦的质能方程 E=mc² 有深刻的内在联系。
        </p>

        <h2>四力统一方程</h2>
        <p>
          在螺旋运动模型的基础上，张祥前推导出统一场方程，将四种基本力纳入一个方程框架中。
          核心思路是：
        </p>
        <ol>
          <li>空间以光速向物体周围发散运动</li>
          <li>这种发散运动呈螺旋形态</li>
          <li>螺旋运动的不同分量产生不同的力</li>
          <li>各分量之间可以相互转化——这就是为什么变化电磁场可以产生引力场</li>
        </ol>

        <h2>与主流物理学的关系</h2>
        <p>
          张祥前的理论并非要推翻现有物理学，而是试图在更高层面上统一它们：
        </p>
        <ul>
          <li><strong>向下兼容牛顿力学</strong>：当 v 远小于 C 时，统一场论退化为牛顿力学的结果</li>
          <li><strong>自然推出质速关系</strong>：爱因斯坦的质速公式可以从果克动量公式推导出来</li>
          <li><strong>包含电磁感应</strong>：法拉第电磁感应定律是统一场方程在特定条件下的特例</li>
          <li><strong>解释量子现象</strong>：对双缝干涉和量子纠缠给出了基于空间运动的解释</li>
        </ul>

        <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg my-6">
          <p className="text-sm text-yellow-800">
            <strong>注意：</strong>以上理论框架尚未经过学术界的同行评审。本站呈现张祥前的理论体系，
            供有兴趣的研究者参考和独立验证。我们不对理论的正确性做出判断。
          </p>
        </div>
      </div>

      <NextRead
        items={[
          {
            href: "/experiment/overview",
            title: "实验验证",
            description: "了解张祥前如何通过实验验证理论预测",
          },
          {
            href: "/comparison/navy-patents",
            title: "美国海军专利对比",
            description: "对比张祥前的理论与美国海军的相关专利",
          },
        ]}
      />
    </div>
  );
}
