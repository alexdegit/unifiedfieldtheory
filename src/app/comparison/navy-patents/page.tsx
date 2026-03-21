import type { Metadata } from "next";
import NextRead from "@/components/NextRead";

export const metadata: Metadata = {
  title: "美国海军专利对比 — 张祥前理论 vs Pais 专利",
  description:
    "张祥前统一场论与美国海军 Pais 博士专利（US10144532B2、US10322827）的详细对比。不同术语描述同一物理现象。",
};

export default function NavyPatentsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="prose">
        <h1>美国海军专利对比</h1>
        <p className="text-lg text-gray-600 mb-8">
          一个中国农民和美国五角大楼，独立地在探索同一个物理现象。
          他们用不同的术语，描述着相似的物理机制。
        </p>

        <h2>Pais 博士的专利</h2>
        <p>
          Salvatore Cezar Pais 博士是美国海军航空作战中心（NAWCAD）的工程师，
          他以美国海军的名义申请了多项引人注目的专利：
        </p>
        <ul>
          <li>
            <strong>US10144532B2</strong> — 利用惯性质量减少装置的飞行器
            （Craft Using an Inertial Mass Reduction Device）
          </li>
          <li>
            <strong>US10322827</strong> — 电磁场发生器和高频引力波发生器
            （Electromagnetic Field Generator and Method to Generate High Frequency Gravitational Waves）
          </li>
        </ul>
        <p>
          这些专利的核心思想是：通过特定方式操纵电磁场，可以影响物体的惯性质量，
          甚至产生引力波。这与张祥前统一场论的核心预测高度吻合。
        </p>

        <h2>术语对照</h2>
        <p>
          两者使用完全不同的术语体系，但描述的是相似的物理现象：
        </p>
        <div className="overflow-x-auto">
          <table>
            <thead>
              <tr>
                <th>概念</th>
                <th>张祥前的描述</th>
                <th>Pais 专利的描述</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="font-semibold">核心机制</td>
                <td>变化电磁场产生引力场</td>
                <td>高频电磁场振荡产生局部时空曲率修正</td>
              </tr>
              <tr>
                <td className="font-semibold">质量效应</td>
                <td>质量 = 空间位移条数，可通过电磁场改变</td>
                <td>惯性质量减少（Inertial Mass Reduction）</td>
              </tr>
              <tr>
                <td className="font-semibold">引力控制</td>
                <td>人工场扫描，产生人造引力场</td>
                <td>高频引力波发生器</td>
              </tr>
              <tr>
                <td className="font-semibold">理论框架</td>
                <td>空间螺旋运动，四力统一</td>
                <td>极化真空态修正，量子真空等离子体</td>
              </tr>
              <tr>
                <td className="font-semibold">应用方向</td>
                <td>飞碟飞行原理，光速飞行器</td>
                <td>混合航空航天水下飞行器</td>
              </tr>
              <tr>
                <td className="font-semibold">能量来源</td>
                <td>电磁场加速变化</td>
                <td>高频旋转电磁场</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>关键相似点</h2>
        <div className="grid grid-cols-1 gap-4 my-6 not-prose">
          {[
            {
              title: "电磁场操纵引力",
              desc: "两者都认为通过特定方式操纵电磁场，可以产生引力效应。这在主流物理学中尚无定论。",
            },
            {
              title: "质量可变",
              desc: "两者都认为物体的惯性质量不是固定不变的，可以通过电磁场手段改变。",
            },
            {
              title: "高频变化是关键",
              desc: "两者都强调电磁场的快速变化（高频）是产生效应的关键条件。",
            },
            {
              title: "推进技术应用",
              desc: "两者都将这种效应与新型推进技术联系起来——一个说飞碟，一个说混合飞行器。",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="p-4 bg-primary-50 rounded-lg border border-primary-100"
            >
              <h3 className="font-semibold text-primary-800 mb-1">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>

        <h2>关键差异</h2>
        <div className="overflow-x-auto">
          <table>
            <thead>
              <tr>
                <th>维度</th>
                <th>张祥前</th>
                <th>美国海军 / Pais</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="font-semibold">背景</td>
                <td>安徽农民，自学物理40年</td>
                <td>NAWCAD 工程师，博士学位</td>
              </tr>
              <tr>
                <td className="font-semibold">理论完整性</td>
                <td>完整的统一场论体系，从基本原理推导</td>
                <td>专利描述中的理论较为片段化</td>
              </tr>
              <tr>
                <td className="font-semibold">实验验证</td>
                <td>已有个人实验报告（未独立验证）</td>
                <td>专利声称可行，但无公开实验数据</td>
              </tr>
              <tr>
                <td className="font-semibold">设备复杂度</td>
                <td>简陋设备，预算约2000元</td>
                <td>专利描述需要复杂精密设备</td>
              </tr>
              <tr>
                <td className="font-semibold">可复现性</td>
                <td>低门槛，普通实验室可尝试</td>
                <td>高门槛，需要专业设施</td>
              </tr>
              <tr>
                <td className="font-semibold">学术认可</td>
                <td>未经学术界认可</td>
                <td>有专利授权，但学术界仍有争议</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>值得思考的问题</h2>
        <p>
          无论对张祥前的理论或 Pais 的专利持何种态度，以下事实值得注意：
        </p>
        <ol>
          <li>
            <strong>独立趋同</strong>：一个中国农民和美国海军，在完全独立的情况下，
            得出了「变化电磁场可以影响引力」的相似结论。这种独立趋同本身值得关注。
          </li>
          <li>
            <strong>美国海军的态度</strong>：美国海军为这些专利投入了资源并获得了授权。
            2019年，海军首席技术官 James Sheehy 亲自致信专利局，
            证明「这些发明是可行的」。无论最终结论如何，这表明美国军方认真对待了这个方向。
          </li>
          <li>
            <strong>低成本验证机会</strong>：与 Pais 专利需要昂贵设备不同，
            张祥前的方案提供了一个低成本验证路径。如果效应存在，
            这可能是人类历史上投入产出比最高的实验之一。
          </li>
        </ol>

        <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg my-6">
          <p className="text-sm text-yellow-800 mb-0">
            <strong>说明：</strong>本页对比基于公开的专利文件和张祥前的公开资料。
            两者的理论和实验均存在争议，尚未获得主流学术界的认可。
            本站呈现对比信息，不对任何一方的正确性做出判断。
          </p>
        </div>
      </div>

      <NextRead
        items={[
          {
            href: "/experiment/setup",
            title: "实验方案",
            description: "查看可复现的低成本实验方案",
          },
          {
            href: "/theory/overview",
            title: "理论总览",
            description: "深入了解张祥前统一场论的理论体系",
          },
        ]}
      />
    </div>
  );
}
