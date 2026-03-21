import type { Metadata } from "next";
import NextRead from "@/components/NextRead";

export const metadata: Metadata = {
  title: "实验方案 — 可复现的变化电磁场产生引力场实验",
  description:
    "详细的实验步骤、材料清单、参数设置。低压方案（80V/30A）使普通物理实验室即可尝试复现。",
};

export default function ExperimentSetupPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="prose">
        <h1>实验方案</h1>
        <p className="text-lg text-gray-600 mb-8">
          以下是张祥前公开的实验方案，供有条件的研究者参考和独立复现。
        </p>

        <div className="bg-red-50 border border-red-200 p-4 rounded-lg my-6">
          <p className="text-sm text-red-800 mb-0">
            <strong>安全警告：</strong>实验涉及电气设备，存在触电风险。请确保有合格的电气安全知识，
            在专业人员指导下进行操作。实验应在通风良好的环境中进行，并做好绝缘防护。
          </p>
        </div>

        <h2>实验一：加速电荷产生引力场</h2>

        <h3>原理</h3>
        <p>
          根据统一场论，电荷的加速运动会产生变化的电磁场。当电磁场的变化率足够大时，
          会在垂直于电磁场变化方向上产生引力场效应。这类似于电磁感应中变化磁场产生电场，
          但这里是变化电磁场产生引力场。
        </p>

        <h3>设备清单</h3>
        <div className="overflow-x-auto">
          <table>
            <thead>
              <tr>
                <th>设备</th>
                <th>规格要求</th>
                <th>预估费用</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>直流电源</td>
                <td>80V / 30A 可调</td>
                <td>~800元</td>
              </tr>
              <tr>
                <td>电磁线圈</td>
                <td>漆包线 Φ1.5mm，绕制约200匝</td>
                <td>~200元</td>
              </tr>
              <tr>
                <td>高速开关电路</td>
                <td>MOSFET 开关，频率 1kHz-10kHz 可调</td>
                <td>~300元</td>
              </tr>
              <tr>
                <td>检测小球</td>
                <td>非导体材质（木球或塑料球），直径 2-3cm</td>
                <td>~10元</td>
              </tr>
              <tr>
                <td>悬挂系统</td>
                <td>细尼龙线 + 支架</td>
                <td>~100元</td>
              </tr>
              <tr>
                <td>高速摄像机</td>
                <td>手机慢动作模式即可（240fps以上）</td>
                <td>已有</td>
              </tr>
              <tr>
                <td>精密电子秤</td>
                <td>精度 0.01g</td>
                <td>~200元</td>
              </tr>
              <tr>
                <td>示波器（可选）</td>
                <td>用于监测电流波形</td>
                <td>~500元</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-sm text-gray-500">总预算约 2000-2500 元人民币（不含示波器）</p>

        <h3>实验步骤</h3>
        <ol>
          <li>
            <strong>线圈绕制</strong>：使用 Φ1.5mm 漆包线在直径约 10cm 的骨架上绕制约 200 匝线圈。
            线圈应紧密排列，确保磁场集中。
          </li>
          <li>
            <strong>开关电路搭建</strong>：使用 MOSFET（如 IRFP260N）搭建高速开关电路，
            用信号发生器或 555 定时器驱动，频率设为 1kHz 起步。
          </li>
          <li>
            <strong>悬挂检测小球</strong>：在线圈上方或侧方，用长度约 30cm 的细尼龙线悬挂非导体小球。
            小球应处于线圈磁场范围内但不接触线圈。
          </li>
          <li>
            <strong>静态基准测量</strong>：在不通电的状态下，记录小球的静止位置。
            用高速摄像机记录至少 30 秒作为基准。
          </li>
          <li>
            <strong>通电观测</strong>：接通 80V 直流电源，开关电路以设定频率工作，
            产生脉冲电流。用高速摄像机记录小球的运动状态。
          </li>
          <li>
            <strong>变频实验</strong>：依次调节频率为 1kHz、2kHz、5kHz、10kHz，
            观察小球响应是否随频率变化。
          </li>
          <li>
            <strong>对照实验</strong>：更换为导体小球（铝球），重复实验。
            对比导体和非导体小球的响应差异，以区分电磁力和引力场效应。
          </li>
        </ol>

        <h3>预期现象</h3>
        <ul>
          <li>非导体小球出现偏离静止位置的运动，且运动方向与电磁力方向不一致</li>
          <li>效应随频率增大（电磁场变化率增大）而增强</li>
          <li>非导体小球的响应无法用电磁感应或静电感应解释</li>
        </ul>

        <h2>实验二：变化磁场产生漩涡引力场</h2>

        <h3>原理</h3>
        <p>
          快速变化的磁场不仅产生感应电场（法拉第定律），还应产生漩涡状的引力场。
          这种漩涡引力场会使附近的物体（包括非导体）产生旋转运动。
        </p>

        <h3>实验步骤</h3>
        <ol>
          <li>将线圈竖直放置，线圈轴线垂直于地面</li>
          <li>在线圈正上方用细线悬挂非导体小球</li>
          <li>通入高频脉冲电流，观察小球是否出现绕线圈轴线的旋转</li>
          <li>改变脉冲频率和电流大小，记录旋转速度的变化</li>
          <li>使用静电屏蔽罩（法拉第笼）包裹小球，排除静电效应</li>
        </ol>

        <h3>预期现象</h3>
        <ul>
          <li>非导体小球出现绕线圈轴线的旋转运动</li>
          <li>旋转方向与磁场变化方向有确定的关系</li>
          <li>法拉第笼不影响旋转效应（排除静电解释）</li>
        </ul>

        <h2>注意事项与干扰排除</h2>

        <h3>离子风效应</h3>
        <p>
          高压实验中，空气电离产生的离子风可能推动小球运动。低压方案（80V）大幅降低了这一干扰。
          进一步排除方法：在真空腔中进行实验，或使用密封容器。
        </p>

        <h3>极化效应</h3>
        <p>
          变化电场可能导致非导体小球发生极化，被电场力吸引或排斥。
          排除方法：使用极化率极低的材料（如特氟龙球），或在法拉第笼内进行实验。
        </p>

        <h3>热对流</h3>
        <p>
          线圈发热可能导致空气对流，推动小球运动。
          排除方法：短时间脉冲实验（线圈来不及显著升温），或在真空中进行。
        </p>

        <h3>振动干扰</h3>
        <p>
          线圈通电时的机械振动可能通过支架传递到小球。
          排除方法：线圈和悬挂支架完全隔离，分别固定在不同的基座上。
        </p>

        <div className="bg-primary-50 p-6 rounded-lg my-6">
          <h3 className="mt-0 text-primary-800">复现者须知</h3>
          <p>
            如果您有兴趣复现这些实验，以下建议可能有帮助：
          </p>
          <ul>
            <li>建议有基础电气和物理实验经验</li>
            <li>实验前请仔细阅读安全注意事项</li>
            <li>建议从低功率开始，逐步增加</li>
            <li>详细记录所有实验参数和观测结果</li>
            <li>设计对照实验以排除常规物理效应</li>
            <li>如有发现，欢迎联系交流</li>
          </ul>
        </div>

        <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg my-6">
          <p className="text-sm text-yellow-800 mb-0">
            <strong>免责声明：</strong>本方案基于张祥前公开发表的实验描述整理。
            实验结果尚未经独立第三方验证。进行实验时请自行评估风险并承担责任。
          </p>
        </div>
      </div>

      <NextRead
        items={[
          {
            href: "/experiment/overview",
            title: "实验总览",
            description: "查看实验的时间线和关键发现",
          },
          {
            href: "/comparison/navy-patents",
            title: "海军专利对比",
            description: "了解美国海军在同一方向的研究",
          },
        ]}
      />
    </div>
  );
}
