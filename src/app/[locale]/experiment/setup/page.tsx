import type { Metadata } from "next";
import NextRead from "@/components/NextRead";
import Formula from "@/components/Formula";
import type { Locale } from "@/lib/i18n";

export function generateMetadata({ params }: { params: { locale: string } }): Metadata {
  const isEn = params.locale === "en";
  return {
    title: isEn
      ? "Experimental Setup — Reproducible Experiment on Changing EM Fields Generating Gravitational Fields"
      : "实验方案 — 可复现的变化电磁场产生引力场实验",
    description: isEn
      ? "Detailed experimental procedures, material lists, and parameter settings. The low-voltage setup (80V/30A) makes it accessible to ordinary physics laboratories."
      : "详细的实验步骤、材料清单、参数设置。低压方案（80V/30A）使普通物理实验室即可尝试复现。",
  };
}

export default function ExperimentSetupPage({ params }: { params: { locale: string } }) {
  const loc = (params.locale === "en" ? "en" : "zh") as Locale;
  const isEn = loc === "en";
  const t = <T,>(zh: T, en: T): T => (isEn ? en : zh);

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="prose">
        <h1>{t("实验方案", "Experimental Setup")}</h1>
        <p className="text-lg text-gray-600 mb-8">
          {t(
            "以下是张祥前公开的实验方案，供有条件的研究者参考和独立复现。",
            "The following is Zhang Xiangqian's publicly released experimental setup, provided for reference and independent replication by qualified researchers."
          )}
        </p>

        <div className="bg-red-50 border border-red-200 p-4 rounded-lg my-6">
          <p className="text-sm text-red-800 mb-0">
            {t(
              <><strong>安全警告：</strong>实验涉及电气设备，存在触电风险。请确保有合格的电气安全知识，在专业人员指导下进行操作。实验应在通风良好的环境中进行，并做好绝缘防护。</>,
              <><strong>Safety Warning:</strong> This experiment involves electrical equipment with a risk of electric shock. Ensure you have adequate electrical safety knowledge and operate under professional supervision. Experiments should be conducted in well-ventilated environments with proper insulation protection.</>
            )}
          </p>
        </div>

        <h2>{t("实验一：加速电荷产生直线引力场", "Experiment 1: Accelerating Charges Generate Linear Gravitational Fields")}</h2>

        <h3>{t("原理", "Principle")}</h3>
        <p>
          {t(
            <>根据统一场论，加速运动的正电荷会产生加速度方向相反的引力场。当按下电源开关瞬间，导线中正电荷原地加速振动，在正负极之间产生的加速电动势包含了引力场分量。数学表达为：<Formula tex="E_{\\theta} / e_r = \\vec{A} \\times \\vec{R} / c^2" />，其中 <Formula tex="E_{\\theta}" /> 是扭曲正电场，<Formula tex="e_r" /> 是静电场，<Formula tex="\\vec{A}" /> 是引力场，<Formula tex="\\vec{R}" /> 是位置矢量，<Formula tex="c" /> 是标量光速。</>,
            <>According to the unified field theory, accelerating positive charges generate a gravitational field in the direction opposite to the acceleration. At the moment the power switch is pressed, positive charges in the conductor accelerate and vibrate in place, and the accelerating electromotive force generated between the positive and negative terminals contains a gravitational field component. Mathematically expressed as: <Formula tex="E_{\\theta} / e_r = \\vec{A} \\times \\vec{R} / c^2" />, where <Formula tex="E_{\\theta}" /> is the distorted positive electric field, <Formula tex="e_r" /> is the electrostatic field, <Formula tex="\\vec{A}" /> is the gravitational field, <Formula tex="\\vec{R}" /> is the position vector, and <Formula tex="c" /> is the scalar speed of light.</>
          )}
        </p>

        <h3>{t("方案 A：硅胶管高压方案（张祥前原始方案）", "Setup A: Silicone Tube High-Voltage Setup (Zhang's Original Setup)")}</h3>

        <h4>{t("设备清单", "Equipment List")}</h4>
        <div className="overflow-x-auto">
          <table>
            <thead>
              <tr>
                <th>{t("设备", "Equipment")}</th>
                <th>{t("规格要求", "Specifications")}</th>
                <th>{t("备注", "Notes")}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{t("硅胶管", "Silicone tube")}</td>
                <td>{t("长 360cm，外径 1.5cm，内径 0.5cm", "Length 360cm, outer diameter 1.5cm, inner diameter 0.5cm")}</td>
                <td>{t("用于包裹导线，防止离子风和静电马达效应", "Wraps the conductors to prevent ion wind and electrostatic motor effects")}</td>
              </tr>
              <tr>
                <td>{t("带皮铜丝导线", "Insulated copper wire")}</td>
                <td>{t("直径 0.4cm（铜丝直径 0.2cm），2 根各 180cm", "Diameter 0.4cm (copper core 0.2cm), 2 pieces at 180cm each")}</td>
                <td>{t("塞入硅胶管内，两根导线不接触，相隔 6cm", "Inserted into the silicone tube; the two wires must not touch, separated by 6cm")}</td>
              </tr>
              <tr>
                <td>{t("高压包", "High-voltage module")}</td>
                <td>{t(<>直流 2000KV 高压发生器模块 &times; 3 串联</>, <>DC 2000KV high-voltage generator modules &times; 3 in series</>)}</td>
                <td>{t("淘宝搜「直流2000Kv高压发生器高压模块」，选输入直流 7.4V 的。商家标 2000KV 是虚标，实测约 20KV", "Search for 'DC 2000KV high-voltage generator module'; select units with 7.4V DC input. The rated 2000KV is exaggerated; actual output is approximately 20KV")}</td>
              </tr>
              <tr>
                <td>{t("直流电源机箱", "DC power supply unit")}</td>
                <td>{t("输入 220V 交流，输出 0-30V 直流可调", "Input 220V AC, output 0-30V DC adjustable")}</td>
                <td>{t("给高压包供电", "Powers the high-voltage modules")}</td>
              </tr>
              <tr>
                <td>{t("悬挂物", "Suspended test object")}</td>
                <td>{t(<>4cm &times; 11cm、厚度 0.15mm 的塑料皮（任意绝缘材料）</>, <>4cm &times; 11cm, 0.15mm thick plastic sheet (any insulating material)</>)}</td>
                <td>{t("中心打孔，套在硅胶管上但不接触硅胶管", "Hole punched in center; sleeved over the silicone tube without touching it")}</td>
              </tr>
              <tr>
                <td>{t("悬挂线", "Suspension thread")}</td>
                <td>{t("细棉线", "Thin cotton thread")}</td>
                <td>{t("将塑料皮悬挂在两根导线空隙的中心位置", "Suspends the plastic sheet at the center of the gap between the two wires")}</td>
              </tr>
              <tr>
                <td>{t("木制支架", "Wooden stand")}</td>
                <td>{t("用于悬吊导线和硅胶管", "For suspending the wires and silicone tube")}</td>
                <td>{t("避免使用金属支架", "Avoid using metal stands")}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h4>{t("实验步骤", "Experimental Procedure")}</h4>
        <ol>
          <li>
            {t(
              "将两根带皮铜丝导线塞入硅胶管内（如不好塞入，可对硅胶管内滴润滑油，或用医用注射针注油）。两根导线在管内不接触，相隔约 6cm。",
              "Insert the two insulated copper wires into the silicone tube (if difficult to insert, apply lubricant inside the tube, or use a medical syringe to inject oil). The two wires must not touch inside the tube, separated by approximately 6cm."
            )}
          </li>
          <li>
            {t(
              "导线和硅胶管悬吊在木制支架下面。",
              "Suspend the wires and silicone tube from the wooden stand."
            )}
          </li>
          <li>
            {t(
              <>制作一个 4cm &times; 11cm、厚度 0.15mm 的塑料皮，中心打孔，用细棉线悬挂在两根导线空隙的中心点。塑料皮套在硅胶管上，但不接触硅胶管。</>,
              <>Make a 4cm &times; 11cm, 0.15mm thick plastic sheet, punch a hole in the center, and suspend it with thin cotton thread at the midpoint of the gap between the two wires. The sheet is sleeved over the silicone tube but must not touch it.</>
            )}
          </li>
          <li>
            {t(
              "将两根导线分别接在 3 个串联的高压包的正负极上（约 4 万伏直流电压）。",
              "Connect the two wires to the positive and negative terminals of the 3 series-connected high-voltage modules (approximately 40,000V DC)."
            )}
          </li>
          <li>
            {t(
              "按下电源开关，观察悬挂的塑料皮运动方向。",
              "Press the power switch and observe the direction of movement of the suspended plastic sheet."
            )}
          </li>
          <li>
            {t(
              "调转正负极，重复实验，观察塑料皮是否仍然向正极方向运动。",
              "Reverse the polarity, repeat the experiment, and observe whether the plastic sheet still moves toward the positive terminal."
            )}
          </li>
        </ol>

        <h4>{t("预期现象", "Expected Observations")}</h4>
        <ul>
          <li>{t("按下开关瞬间，塑料皮向正极方向运动", "At the moment the switch is pressed, the plastic sheet moves toward the positive terminal")}</li>
          <li>{t("调转正负极后，塑料皮仍然向正极方向运动", "After reversing polarity, the plastic sheet still moves toward the positive terminal")}</li>
          <li>{t("引力场方向沿导线平行，从负极指向正极", "The gravitational field direction is parallel to the wire, pointing from negative to positive terminal")}</li>
        </ul>

        <h3>{t("方案 B：场发动机一号（增强版）", "Setup B: Field Engine No. 1 (Enhanced Version)")}</h3>
        <div className="overflow-x-auto">
          <table>
            <thead>
              <tr>
                <th>{t("设备", "Equipment")}</th>
                <th>{t("规格要求", "Specifications")}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{t("木架", "Wooden frame")}</td>
                <td>{t(<>50cm &times; 50cm，高 40cm</>, <>50cm &times; 50cm, height 40cm</>)}</td>
              </tr>
              <tr>
                <td>{t("有机玻璃管", "Acrylic glass tube")}</td>
                <td>{t("长 1m，外径 30mm，内径 10mm", "Length 1m, outer diameter 30mm, inner diameter 10mm")}</td>
              </tr>
              <tr>
                <td>{t("硅胶管", "Silicone tube")}</td>
                <td>{t("外径 9mm，内径 5mm，长 3.8m（塞在有机玻璃管内）", "Outer diameter 9mm, inner diameter 5mm, length 3.8m (inserted inside the acrylic tube)")}</td>
              </tr>
              <tr>
                <td>{t("胶皮导线", "Rubber-insulated wire")}</td>
                <td>{t("2 根各 2m，直径 4mm（内部单根直径 2mm 铜线）", "2 pieces at 2m each, diameter 4mm (single 2mm copper core inside)")}</td>
              </tr>
              <tr>
                <td>{t("悬挂物", "Suspended test object")}</td>
                <td>{t("聚乙烯片，中心打孔（孔径 3.5cm），套在有机玻璃管上", "Polyethylene sheet, center hole (diameter 3.5cm), sleeved over the acrylic tube")}</td>
              </tr>
              <tr>
                <td>{t("高压包", "High-voltage modules")}</td>
                <td>{t("3 个串联，输入直流 7.4V", "3 in series, input DC 7.4V")}</td>
              </tr>
              <tr>
                <td>{t("电源机箱", "Power supply unit")}</td>
                <td>{t("输入 220V 交流，输出 0-30V 直流", "Input 220V AC, output 0-30V DC")}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          {t(
            "用粗有机玻璃管加硅胶管双层绝缘，完全阻止高压电场的离子风效应和静电马达效应，得到比较纯的变化电磁场产生引力场效应。两根导线在有机玻璃管内部断开，相隔 6cm。",
            "The thick acrylic tube plus silicone tube provides double-layer insulation, completely blocking ion wind and electrostatic motor effects from the high-voltage field, yielding a purer changing electromagnetic field gravitational effect. The two wires are disconnected inside the acrylic tube, separated by 6cm."
          )}
        </p>

        <h2>{t("实验二：变化磁场产生漩涡引力场", "Experiment 2: Changing Magnetic Fields Generate Vortex Gravitational Fields")}</h2>

        <h3>{t("原理", "Principle")}</h3>
        <p>
          {t(
            <>根据统一场论方程 <Formula tex="\\frac{d\\vec{B}}{dt} = -\\frac{\\vec{A} \\times \\vec{E}}{c^2}" />，变化磁场不仅产生感应电场（法拉第定律），还产生漩涡引力场。这种漩涡引力场会使一切物体（包括非导体）产生旋转运动。</>,
            <>According to the unified field theory equation <Formula tex="\\frac{d\\vec{B}}{dt} = -\\frac{\\vec{A} \\times \\vec{E}}{c^2}" />, a changing magnetic field not only produces an induced electric field (Faraday&apos;s law) but also generates a vortex gravitational field. This vortex gravitational field causes all objects (including non-conductors) to undergo rotational motion.</>
          )}
        </p>

        <h3>{t("方案 A：真空罐 + 高压低电流方案（最稳定）", "Setup A: Vacuum Chamber + High-Voltage Low-Current Setup (Most Stable)")}</h3>
        <div className="overflow-x-auto">
          <table>
            <thead>
              <tr>
                <th>{t("设备", "Equipment")}</th>
                <th>{t("规格要求", "Specifications")}</th>
                <th>{t("备注", "Notes")}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{t("真空罐", "Vacuum chamber")}</td>
                <td>{t("直径 10cm，横放", "Diameter 10cm, placed horizontally")}</td>
                <td>{t("可抽真空，排除离子风和静电马达效应", "Can be evacuated to eliminate ion wind and electrostatic motor effects")}</td>
              </tr>
              <tr>
                <td>{t("聚乙烯小球", "Polyethylene ball")}</td>
                <td>{t("质量 0.35g", "Mass 0.35g")}</td>
                <td>{t("用细棉线悬挂在真空罐内", "Suspended by thin cotton thread inside the vacuum chamber")}</td>
              </tr>
              <tr>
                <td>{t(<>硅胶导线线圈 &times; 2</>, <>Silicone wire coils &times; 2</>)}</td>
                <td>{t("直径 8cm，高 12cm，红色硅胶导线直径 10mm，铜丝直径 1.5mm", "Diameter 8cm, height 12cm, red silicone wire diameter 10mm, copper core diameter 1.5mm")}</td>
                <td>{t("放置在真空罐上下两侧，两个线圈断开不连接", "Placed on the top and bottom of the vacuum chamber; the two coils are disconnected")}</td>
              </tr>
              <tr>
                <td>{t("高压发生器", "High-voltage generator")}</td>
                <td>{t("2GF-200KV/5mA 直流高压发生器", "2GF-200KV/5mA DC high-voltage generator")}</td>
                <td>{t("电压调到 2 万伏，电流调到 1/20000 安培", "Voltage set to 20,000V, current set to 1/20,000 ampere")}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          {t(
            "两个线圈相互不连接，断点处不做绝缘处理，外面套 8cm 长硅胶管（一端不封闭）。两个线圈的端点在同一平面上但错开，形成空间中的螺旋式连接。",
            "The two coils are not connected to each other. The break points are not insulated, with an 8cm silicone tube sleeve over them (one end left open). The endpoints of the two coils are on the same plane but offset, forming a spiral-type connection in space."
          )}
        </p>
        <p>
          {t(
            <><strong>关键参数</strong>：采用高压、超低电流供电，使极化效应大幅下降，突出变化磁场产生漩涡引力场效应。此方案比较稳定，几乎每次实验都能成功。</>,
            <><strong>Key parameters</strong>: High voltage with ultra-low current supply significantly reduces polarization effects, highlighting the vortex gravitational field effect from changing magnetic fields. This setup is relatively stable, with successful results in nearly every trial.</>
          )}
        </p>

        <h3>{t("方案 B：漆包线线圈 + 断电旋转方案", "Setup B: Enameled Wire Coils + Post-Disconnection Rotation Setup")}</h3>
        <div className="overflow-x-auto">
          <table>
            <thead>
              <tr>
                <th>{t("设备", "Equipment")}</th>
                <th>{t("规格要求", "Specifications")}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{t(<>漆包线线圈 &times; 2</>, <>Enameled wire coils &times; 2</>)}</td>
                <td>{t("直径 0.57mm 漆包铜线，绕在厚 1mm 纸筒上，线圈长 19cm，直径 3.7cm", "0.57mm enameled copper wire wound on a 1mm thick paper tube, coil length 19cm, diameter 3.7cm")}</td>
              </tr>
              <tr>
                <td>{t("真空罐", "Vacuum chamber")}</td>
                <td>{t("直径 10cm，横放，抽真空", "Diameter 10cm, placed horizontally, evacuated")}</td>
              </tr>
              <tr>
                <td>{t("聚乙烯小球", "Polyethylene ball")}</td>
                <td>{t("红色，用细棉线悬挂（棉线一端用 AB 胶固定在罐壁）", "Red, suspended by thin cotton thread (one end fixed to the chamber wall with AB epoxy)")}</td>
              </tr>
              <tr>
                <td>{t("高压包", "High-voltage modules")}</td>
                <td>{t("2 个串联（输入 7.4V），接电源机箱", "2 in series (input 7.4V), connected to power supply unit")}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          {t(
            "上下两个线圈分别贴在真空罐上下，相隔 10cm，彼此不连接。使用细漆包线绕很多匝可以增加线圈电感能量。断电后线圈储存的能量仍可令小球旋转——此时极化效应、静电马达效应、离子风效应均已消失，只剩变化磁场产生漩涡引力场的效应，便于分析。",
            "The two coils are attached to the top and bottom of the vacuum chamber, separated by 10cm, not connected to each other. Using thin enameled wire with many turns increases the coil inductance energy. After power disconnection, the energy stored in the coils can still cause the ball to rotate — at this point, polarization effects, electrostatic motor effects, and ion wind effects have all disappeared, leaving only the vortex gravitational field effect from the changing magnetic field, making analysis straightforward."
          )}
        </p>

        <h3>{t("方案 C：法拉第笼验证方案", "Setup C: Faraday Cage Verification Setup")}</h3>
        <p>
          {t(
            "使用直径 7cm、高 18cm 的不锈钢法拉第笼，内用细棉线悬挂聚乙烯小球（高 5cm，直径 2.7cm）。法拉第笼左右各放一个漆包线线圈（直径 3.7cm，长 19cm，直径 0.57mm 漆包线）。",
            "Uses a stainless steel Faraday cage (diameter 7cm, height 18cm) with a polyethylene ball (height 5cm, diameter 2.7cm) suspended inside by thin cotton thread. One enameled wire coil (diameter 3.7cm, length 19cm, 0.57mm enameled wire) is placed on each side of the Faraday cage."
          )}
        </p>
        <p>
          {t(
            "通电时，法拉第笼内的小球不动（电场被屏蔽）。断电后打开法拉第笼，小球持续旋转。这排除了极化效应、静电马达效应、离子风效应——这三种效应都只在通电状态下存在。",
            "While powered, the ball inside the Faraday cage does not move (electric field is shielded). After disconnecting power and opening the Faraday cage, the ball continues to rotate. This rules out polarization effects, electrostatic motor effects, and ion wind effects — all three of these effects only exist while power is applied."
          )}
        </p>

        <h2>{t("注意事项与干扰排除", "Precautions and Interference Elimination")}</h2>

        <h3>{t("离子风效应", "Ion Wind Effect")}</h3>
        <p>
          {t(
            "高压实验中，空气电离产生的离子风可能推动物体运动。离子风从正极吹向负极，与加速正电场产生的引力场效应方向正好相反。排除方法：用硅胶管/有机玻璃管密封导线及接头；在真空中进行实验。",
            "In high-voltage experiments, ion wind from air ionization may push objects. Ion wind blows from the positive to the negative terminal — exactly opposite to the gravitational field effect from accelerating positive electric fields. Elimination methods: seal conductors and connectors with silicone tubes/acrylic tubes; conduct experiments in vacuum."
          )}
        </p>

        <h3>{t("极化效应", "Polarization Effect")}</h3>
        <p>
          {t(
            "高电压的极化效应不但在真空中存在，而且可以穿过厚玻璃。排除方法：使用薄片状悬挂物（抑制极化和退极化效应）；采用高压、超低电流方案；使用上下线圈结构使极化力沿悬挂线方向，不贡献旋转。",
            "The polarization effect at high voltage exists even in vacuum and can penetrate thick glass. Elimination methods: use thin sheet-shaped suspended objects (suppresses polarization and depolarization effects); adopt high-voltage, ultra-low current setups; use top-bottom coil configurations so that polarization forces align with the suspension thread direction and do not contribute to rotation."
          )}
        </p>

        <h3>{t("静电马达效应", "Electrostatic Motor Effect")}</h3>
        <p>
          {t(
            "正负极导线喷射电荷或离子到物体上形成的效应。排除方法：将电极放在真空罐外，隔着厚玻璃无法喷射电荷；使用法拉第笼屏蔽。",
            "The effect formed by positive and negative wires spraying charges or ions onto objects. Elimination methods: place electrodes outside the vacuum chamber — charges cannot be sprayed through thick glass; use Faraday cage shielding."
          )}
        </p>

        <h3>{t("重要操作提示", "Important Operating Tips")}</h3>
        <ul>
          <li>
            {t(
              <><strong>绝缘密封</strong>：导线（特别是接头部分）必须彻底绝缘密封，高压包要覆盖，防止对外产生离子风</>,
              <><strong>Insulation sealing</strong>: Conductors (especially connection points) must be thoroughly insulated and sealed; high-voltage modules must be covered to prevent external ion wind</>
            )}
          </li>
          <li>
            {t(
              <><strong>消除静电</strong>：最好使用静电消除器消除悬挂物和线路中的静电</>,
              <><strong>Static elimination</strong>: Preferably use a static eliminator to remove static charges from suspended objects and wiring</>
            )}
          </li>
          <li>
            {t(
              <><strong>释放余电</strong>：每次实验前释放线路中的残余电荷</>,
              <><strong>Discharge residual charge</strong>: Release residual charges in the circuit before each experiment</>
            )}
          </li>
          <li>
            {t(
              <><strong>不可连续反复</strong>：短时间内反复实验会导致极化效应严重，材料变成驻极体，使运动方向紊乱</>,
              <><strong>Avoid rapid repetition</strong>: Repeated experiments in quick succession cause severe polarization effects, turning materials into electrets and disrupting the direction of motion</>
            )}
          </li>
          <li>
            {t(
              <><strong>鉴别高压包正负极</strong>：将输出端两根线离开 8-10cm，下方点蜡烛，火焰偏向的方向是负极</>,
              <><strong>Identifying module polarity</strong>: Separate the two output wires by 8-10cm, light a candle below — the direction the flame leans toward is the negative terminal</>
            )}
          </li>
        </ul>

        <div className="bg-primary-50 p-6 rounded-lg my-6">
          <h3 className="mt-0 text-primary-800">{t("复现者须知", "Notes for Replicators")}</h3>
          <p>
            {t(
              "如果您有兴趣复现这些实验，以下建议可能有帮助：",
              "If you are interested in replicating these experiments, the following suggestions may be helpful:"
            )}
          </p>
          <ul>
            <li>{t("建议有基础电气和物理实验经验", "Basic experience in electrical and physics experiments is recommended")}</li>
            <li>{t("实验前请仔细阅读安全注意事项", "Please carefully read all safety precautions before experimenting")}</li>
            <li>{t("建议从方案 A（高压低电流真空方案）开始，稳定性最好", "We recommend starting with Setup A (high-voltage low-current vacuum setup) for best stability")}</li>
            <li>{t("详细记录所有实验参数和观测结果", "Record all experimental parameters and observations in detail")}</li>
            <li>{t("设计对照实验以排除常规物理效应", "Design control experiments to rule out conventional physical effects")}</li>
            <li>{t("如有发现，欢迎联系交流", "If you have any findings, you are welcome to reach out and discuss")}</li>
          </ul>
        </div>

        <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg my-6">
          <p className="text-sm text-yellow-800 mb-0">
            {t(
              <><strong>免责声明：</strong>本方案基于张祥前公开发表的实验描述整理。实验结果尚未经独立第三方验证。进行实验时请自行评估风险并承担责任。</>,
              <><strong>Disclaimer:</strong> This setup is compiled from Zhang Xiangqian&apos;s publicly published experimental descriptions. The experimental results have not been independently verified by third parties. Please assess risks and assume responsibility when conducting experiments.</>
            )}
          </p>
        </div>
      </div>

      <NextRead
        locale={loc}
        items={[
          {
            href: "/experiment/overview",
            title: t("实验总览", "Experiment Overview"),
            description: t("查看实验的时间线和关键发现", "View the experimental timeline and key discoveries"),
          },
          {
            href: "/comparison/navy-patents",
            title: t("海军专利对比", "Navy Patent Comparison"),
            description: t("了解美国海军在同一方向的研究", "Learn about US Navy research in the same direction"),
          },
        ]}
      />
    </div>
  );
}
