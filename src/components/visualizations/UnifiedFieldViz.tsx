"use client";

import { useRef, useEffect, useState, useCallback } from "react";

interface UnifiedFieldVizProps {
  section: "spiral" | "forces" | "entangle";
  locale: string;
}

/* ───── i18n texts ───── */
const texts = {
  spiral: {
    modes: {
      zh: ["单体螺旋", "正负电荷", "三分量"],
      en: ["Single Object", "Charge Pair", "Components"],
    },
    explanations: {
      single: {
        zh: "宇宙中任何物体周围的空间，以该物体为中心，以光速向四周做圆柱状螺旋式发散运动。每条螺旋线代表一条空间位移线，线条的总数就是这个物体的\u201c质量\u201d——条数越多，质量越大。",
        en: "Space around any object in the universe diverges outward from that object in a cylindrical helical pattern at the speed of light. Each spiral line represents a spatial displacement line. The total number of lines is the object\u2019s \u201cmass\u201d \u2014 more lines, more mass.",
      },
      pair: {
        zh: "左边（蓝色）空间向外发散 = 正电荷。右边（红色）空间向内汇聚 = 负电荷。正电荷发出的空间\u201c水流\u201d流向负电荷的\u201c入口\u201d——这就是为什么正负电荷相互吸引。",
        en: "Left (blue) space diverges outward = positive charge. Right (red) space converges inward = negative charge. The spatial \u201cflow\u201d from the positive charge flows into the negative charge\u2019s \u201cinlet\u201d \u2014 this is why opposite charges attract.",
      },
      components: {
        zh: "红色 = 沿轴直线运动 = 电场。绿色 = 绕轴环绕运动 = 磁场。蓝色 = 向心加速度方向 = 引力场。三者天然相互垂直。",
        en: "Red = linear motion along axis = electric field. Green = rotational motion around axis = magnetic field. Blue = centripetal acceleration = gravitational field. All three are naturally perpendicular.",
      },
    },
  },
  forces: {
    modes: {
      zh: ["完整螺旋", "直线(电场)", "环绕(磁场)", "径向(引力场)"],
      en: ["Full Helix", "Linear (E)", "Circular (B)", "Radial (G)"],
    },
    explanations: {
      combined: {
        zh: "这是物体周围空间运动的完整形态——以物体为中心、以光速向四周做圆柱状螺旋式发散运动。它同时包含三个方向的运动分量。人类把它们分别叫做电场、磁场、引力场，其实它们是同一个空间螺旋运动的三个侧面，天然耦合在一起，改变一个必然影响另外两个。",
        en: "This is the complete form of spatial motion around matter \u2014 space diverging outward in a cylindrical helix at the speed of light, centered on the object. It simultaneously contains three directional components. Humans call them electric, magnetic, and gravitational fields separately, but they are three facets of the same spatial helical motion, naturally coupled \u2014 changing one inevitably affects the other two.",
      },
      linear: {
        zh: "只看螺旋运动沿轴方向的分量——空间在沿一个方向直线运动。这就是电场。",
        en: "Looking only at the axial component of helical motion \u2014 space moving in a straight line. This is the electric field.",
      },
      circular: {
        zh: "只看螺旋运动绕轴旋转的分量——空间在绕一个轴做圆周运动。这就是磁场。磁场线总是闭合的——因为圆周运动没有起点和终点。",
        en: "Looking only at the rotational component \u2014 space rotating around an axis. This is the magnetic field. Magnetic field lines are always closed \u2014 because circular motion has no start or end point.",
      },
      radial: {
        zh: "只看旋转产生的向心加速度——空间在向轴心方向加速。这就是引力场。你站在地球上感到重力，是因为脚下的空间在以加速度向地球中心涌去。",
        en: "Looking only at the centripetal acceleration from rotation \u2014 space accelerating toward the axis center. This is the gravitational field. You feel gravity on Earth because the space beneath your feet is surging toward Earth\u2019s center with acceleration.",
      },
    },
  },
  entangle: {
    steps: {
      zh: ["产生", "分离", "3D→2D", "距离=0"],
      en: ["Creation", "Separation", "3D\u21922D", "d = 0"],
    },
    explanations: [
      {
        zh: "两个粒子在同一个空间点的同一次螺旋运动中诞生。它们的自旋状态完全关联——因为来自同一个螺旋。",
        en: "Two particles are born at the same spatial point in the same helical motion. Their spin states are fully correlated \u2014 because they came from the same helix.",
      },
      {
        zh: "两个粒子各自飞向不同方向。在人类的理解中，它们\u201c分开了\u201d，之间有了距离。",
        en: "The two particles fly off in different directions. In human understanding, they have \u201cseparated\u201d with distance between them.",
      },
      {
        zh: "以光速运动的粒子，沿运动方向空间长度缩为零。三维空间压缩成了二维。这不是比喻——相对论的数学明确预测了这一点。",
        en: "A particle moving at light speed has its spatial length along the direction of motion compressed to zero. 3D space compresses to 2D. This is not a metaphor \u2014 relativity\u2019s mathematics explicitly predicts this.",
      },
      {
        zh: "一个没有厚度的二维平面，和三维空间中的任意一个点之间，距离为零。所以两个粒子虽然在三维空间中\u201c看起来\u201d分开了，但在它们各自所处的二维空间中，和对方的距离始终为零。测量一个粒子时，影响不需要\u201c传递\u201d——因为距离为零。",
        en: "A two-dimensional plane with no thickness has zero distance to any point in 3D space. So while the two particles \u201cappear\u201d separated in 3D space, in their respective 2D spaces, the distance to each other is always zero. When measuring one particle, the effect doesn\u2019t need to \u201ctravel\u201d \u2014 because the distance is zero.",
      },
    ],
  },
};

/* ───── Drawing helpers ───── */

function drawSpiralSingle(ctx: CanvasRenderingContext2D, w: number, h: number, time: number) {
  const cx = w / 2;
  const cy = h / 2;
  const numLines = 8;
  const maxR = Math.min(w, h) * 0.38;

  for (let line = 0; line < numLines; line++) {
    const baseAngle = (line / numLines) * Math.PI * 2;
    ctx.beginPath();
    ctx.strokeStyle = `hsla(${200 + line * 20}, 80%, 65%, 0.8)`;
    ctx.lineWidth = 2;
    for (let i = 0; i <= 120; i++) {
      const frac = i / 120;
      const r = frac * maxR;
      const angle = baseAngle + frac * Math.PI * 6 + time * 0.8;
      const x = cx + Math.cos(angle) * r;
      const y = cy + Math.sin(angle) * r;
      if (i === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.stroke();
  }

  // Center dot
  ctx.beginPath();
  ctx.fillStyle = "#fff";
  ctx.arc(cx, cy, 5, 0, Math.PI * 2);
  ctx.fill();
}

function drawSpiralPair(ctx: CanvasRenderingContext2D, w: number, h: number, time: number) {
  const leftX = w * 0.3;
  const rightX = w * 0.7;
  const cy = h / 2;
  const maxR = Math.min(w, h) * 0.22;

  // Positive charge (blue, diverging)
  for (let line = 0; line < 6; line++) {
    const baseAngle = (line / 6) * Math.PI * 2;
    ctx.beginPath();
    ctx.strokeStyle = `hsla(210, 85%, 60%, ${0.7 - line * 0.05})`;
    ctx.lineWidth = 2;
    for (let i = 0; i <= 80; i++) {
      const frac = i / 80;
      const r = frac * maxR;
      const angle = baseAngle + frac * Math.PI * 4 + time;
      const x = leftX + Math.cos(angle) * r;
      const y = cy + Math.sin(angle) * r;
      if (i === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.stroke();
  }

  // Negative charge (red, converging)
  for (let line = 0; line < 6; line++) {
    const baseAngle = (line / 6) * Math.PI * 2;
    ctx.beginPath();
    ctx.strokeStyle = `hsla(0, 75%, 55%, ${0.7 - line * 0.05})`;
    ctx.lineWidth = 2;
    for (let i = 0; i <= 80; i++) {
      const frac = 1 - i / 80; // reverse for converging
      const r = frac * maxR;
      const angle = baseAngle - frac * Math.PI * 4 + time;
      const x = rightX + Math.cos(angle) * r;
      const y = cy + Math.sin(angle) * r;
      if (i === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.stroke();
  }

  // Flow lines connecting them
  const numFlowLines = 5;
  for (let f = 0; f < numFlowLines; f++) {
    const yOff = (f - (numFlowLines - 1) / 2) * 25;
    ctx.beginPath();
    ctx.strokeStyle = "rgba(180, 160, 255, 0.5)";
    ctx.lineWidth = 1.5;
    const flowPhase = (time * 60 + f * 40) % (rightX - leftX);
    for (let i = 0; i <= 40; i++) {
      const frac = i / 40;
      const x = leftX + maxR + frac * (rightX - leftX - 2 * maxR);
      const wave = Math.sin(frac * Math.PI * 3 + time * 2) * 8;
      const y = cy + yOff + wave;
      if (i === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.stroke();

    // Flow dot
    const dotX = leftX + maxR + flowPhase;
    if (dotX < rightX - maxR) {
      const dotFrac = (dotX - leftX - maxR) / (rightX - leftX - 2 * maxR);
      const dotY = cy + yOff + Math.sin(dotFrac * Math.PI * 3 + time * 2) * 8;
      ctx.beginPath();
      ctx.fillStyle = "rgba(180, 160, 255, 0.9)";
      ctx.arc(dotX, dotY, 3, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  // Center dots
  ctx.beginPath();
  ctx.fillStyle = "#6af";
  ctx.arc(leftX, cy, 6, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = "#fff";
  ctx.font = "bold 12px sans-serif";
  ctx.textAlign = "center";
  ctx.fillText("+", leftX, cy + 4);

  ctx.beginPath();
  ctx.fillStyle = "#f66";
  ctx.arc(rightX, cy, 6, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = "#fff";
  ctx.fillText("−", rightX, cy + 4);
}

function drawSpiralComponents(ctx: CanvasRenderingContext2D, w: number, h: number, time: number) {
  const cx = w / 2;
  const cy = h / 2;
  const axisLen = h * 0.35;
  const radius = Math.min(w, h) * 0.2;

  // Red: linear motion (electric field) - along vertical axis
  ctx.strokeStyle = "#ff4444";
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(cx, cy - axisLen);
  ctx.lineTo(cx, cy + axisLen);
  ctx.stroke();
  // Arrow
  ctx.beginPath();
  ctx.fillStyle = "#ff4444";
  ctx.moveTo(cx, cy - axisLen - 10);
  ctx.lineTo(cx - 6, cy - axisLen + 5);
  ctx.lineTo(cx + 6, cy - axisLen + 5);
  ctx.fill();
  // Moving dots along axis
  for (let d = 0; d < 4; d++) {
    const t2 = ((time * 0.5 + d * 0.25) % 1);
    const y = cy + axisLen - t2 * axisLen * 2;
    ctx.beginPath();
    ctx.fillStyle = `rgba(255, 68, 68, ${0.9 - t2 * 0.5})`;
    ctx.arc(cx, y, 4, 0, Math.PI * 2);
    ctx.fill();
  }

  // Green: circular motion (magnetic field) - orbiting
  ctx.strokeStyle = "#44dd88";
  ctx.lineWidth = 2;
  ctx.beginPath();
  for (let i = 0; i <= 60; i++) {
    const angle = (i / 60) * Math.PI * 2;
    const x = cx + Math.cos(angle) * radius;
    const y = cy + Math.sin(angle) * radius * 0.4; // perspective squish
    if (i === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  }
  ctx.stroke();
  // Green dots orbiting
  for (let d = 0; d < 3; d++) {
    const angle = time * 1.5 + (d / 3) * Math.PI * 2;
    const x = cx + Math.cos(angle) * radius;
    const y = cy + Math.sin(angle) * radius * 0.4;
    ctx.beginPath();
    ctx.fillStyle = "#44dd88";
    ctx.arc(x, y, 5, 0, Math.PI * 2);
    ctx.fill();
  }

  // Blue: radial (gravity) - arrows pointing inward
  ctx.strokeStyle = "#4488ff";
  ctx.lineWidth = 2;
  const numArrows = 8;
  for (let a = 0; a < numArrows; a++) {
    const angle = (a / numArrows) * Math.PI * 2 + time * 0.3;
    const outerR = radius * 1.4;
    const innerR = radius * 0.3;
    const ox = cx + Math.cos(angle) * outerR;
    const oy = cy + Math.sin(angle) * outerR * 0.4;
    const ix = cx + Math.cos(angle) * innerR;
    const iy = cy + Math.sin(angle) * innerR * 0.4;
    ctx.beginPath();
    ctx.moveTo(ox, oy);
    ctx.lineTo(ix, iy);
    ctx.stroke();
    // Arrowhead
    const dx = ix - ox;
    const dy = iy - oy;
    const len = Math.sqrt(dx * dx + dy * dy);
    const ux = dx / len;
    const uy = dy / len;
    ctx.beginPath();
    ctx.fillStyle = "#4488ff";
    ctx.moveTo(ix, iy);
    ctx.lineTo(ix - ux * 8 - uy * 4, iy - uy * 8 + ux * 4);
    ctx.lineTo(ix - ux * 8 + uy * 4, iy - uy * 8 - ux * 4);
    ctx.fill();
  }

  // Labels
  ctx.font = "bold 13px sans-serif";
  ctx.textAlign = "left";
  ctx.fillStyle = "#ff4444";
  ctx.fillText("E", cx + 10, cy - axisLen + 10);
  ctx.fillStyle = "#44dd88";
  ctx.fillText("B", cx + radius + 10, cy);
  ctx.fillStyle = "#4488ff";
  ctx.fillText("G", cx + radius * 1.2, cy + 25);
}

/* ───── Forces section drawing ───── */

function drawForcesHelix(ctx: CanvasRenderingContext2D, w: number, h: number, time: number) {
  const cx = w / 2;
  const axisY0 = h * 0.15;
  const axisY1 = h * 0.85;
  const radius = w * 0.18;
  const segments = 200;

  ctx.lineWidth = 2.5;
  ctx.beginPath();
  ctx.strokeStyle = "#66bbff";
  for (let i = 0; i <= segments; i++) {
    const frac = i / segments;
    const y = axisY0 + frac * (axisY1 - axisY0);
    const angle = frac * Math.PI * 8 + time;
    const x = cx + Math.cos(angle) * radius;
    const depth = Math.sin(angle);
    ctx.globalAlpha = 0.4 + depth * 0.3 + 0.3;
    if (i === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  }
  ctx.globalAlpha = 1;
  ctx.stroke();

  // Axis line
  ctx.strokeStyle = "rgba(255,255,255,0.2)";
  ctx.lineWidth = 1;
  ctx.setLineDash([4, 4]);
  ctx.beginPath();
  ctx.moveTo(cx, axisY0 - 10);
  ctx.lineTo(cx, axisY1 + 10);
  ctx.stroke();
  ctx.setLineDash([]);
}

function drawForcesLinear(ctx: CanvasRenderingContext2D, w: number, h: number, time: number) {
  const cx = w / 2;
  const axisY0 = h * 0.12;
  const axisY1 = h * 0.88;

  // Axis
  ctx.strokeStyle = "#ff4444";
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(cx, axisY0);
  ctx.lineTo(cx, axisY1);
  ctx.stroke();

  // Arrow
  ctx.beginPath();
  ctx.fillStyle = "#ff4444";
  ctx.moveTo(cx, axisY0 - 10);
  ctx.lineTo(cx - 8, axisY0 + 5);
  ctx.lineTo(cx + 8, axisY0 + 5);
  ctx.fill();

  // Moving dots
  for (let d = 0; d < 8; d++) {
    const frac = ((time * 0.3 + d / 8) % 1);
    const y = axisY1 - frac * (axisY1 - axisY0);
    ctx.beginPath();
    ctx.fillStyle = `rgba(255, 100, 100, ${0.9 - frac * 0.4})`;
    ctx.arc(cx, y, 5, 0, Math.PI * 2);
    ctx.fill();
  }

  ctx.font = "16px sans-serif";
  ctx.fillStyle = "#ff6666";
  ctx.textAlign = "center";
  ctx.fillText("E", cx + 25, h / 2);
}

function drawForcesCircular(ctx: CanvasRenderingContext2D, w: number, h: number, time: number) {
  const cx = w / 2;
  const cy = h / 2;
  const radii = [w * 0.1, w * 0.18, w * 0.26];

  for (const r of radii) {
    ctx.strokeStyle = "#44dd88";
    ctx.lineWidth = 2;
    ctx.beginPath();
    for (let i = 0; i <= 80; i++) {
      const angle = (i / 80) * Math.PI * 2;
      const x = cx + Math.cos(angle) * r;
      const y = cy + Math.sin(angle) * r * 0.6;
      if (i === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.stroke();

    // Orbiting dots
    for (let d = 0; d < 3; d++) {
      const angle = time * 1.2 * (1 + radii.indexOf(r) * 0.3) + (d / 3) * Math.PI * 2;
      const x = cx + Math.cos(angle) * r;
      const y = cy + Math.sin(angle) * r * 0.6;
      ctx.beginPath();
      ctx.fillStyle = "#44dd88";
      ctx.arc(x, y, 4, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  // Center
  ctx.beginPath();
  ctx.fillStyle = "rgba(68, 221, 136, 0.3)";
  ctx.arc(cx, cy, 4, 0, Math.PI * 2);
  ctx.fill();

  ctx.font = "16px sans-serif";
  ctx.fillStyle = "#44dd88";
  ctx.textAlign = "center";
  ctx.fillText("B", cx + radii[2] + 20, cy);
}

function drawForcesRadial(ctx: CanvasRenderingContext2D, w: number, h: number, time: number) {
  const cx = w / 2;
  const cy = h / 2;
  const numArrows = 12;
  const outerR = Math.min(w, h) * 0.36;
  const innerR = 15;

  for (let a = 0; a < numArrows; a++) {
    const angle = (a / numArrows) * Math.PI * 2;
    const ox = cx + Math.cos(angle) * outerR;
    const oy = cy + Math.sin(angle) * outerR;
    const ix = cx + Math.cos(angle) * innerR;
    const iy = cy + Math.sin(angle) * innerR;

    ctx.strokeStyle = "#4488ff";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(ox, oy);
    ctx.lineTo(ix, iy);
    ctx.stroke();

    // Arrowhead
    const dx = ix - ox;
    const dy = iy - oy;
    const len = Math.sqrt(dx * dx + dy * dy);
    const ux = dx / len;
    const uy = dy / len;
    ctx.beginPath();
    ctx.fillStyle = "#4488ff";
    ctx.moveTo(ix, iy);
    ctx.lineTo(ix - ux * 10 - uy * 5, iy - uy * 10 + ux * 5);
    ctx.lineTo(ix - ux * 10 + uy * 5, iy - uy * 10 - ux * 5);
    ctx.fill();

    // Moving dots along arrow
    const frac = ((time * 0.4 + a / numArrows) % 1);
    const dotX = ox + dx * frac;
    const dotY = oy + dy * frac;
    ctx.beginPath();
    ctx.fillStyle = `rgba(68, 136, 255, ${1 - frac * 0.5})`;
    ctx.arc(dotX, dotY, 4, 0, Math.PI * 2);
    ctx.fill();
  }

  // Center glow
  const grad = ctx.createRadialGradient(cx, cy, 0, cx, cy, 20);
  grad.addColorStop(0, "rgba(68, 136, 255, 0.6)");
  grad.addColorStop(1, "rgba(68, 136, 255, 0)");
  ctx.fillStyle = grad;
  ctx.beginPath();
  ctx.arc(cx, cy, 20, 0, Math.PI * 2);
  ctx.fill();

  ctx.font = "16px sans-serif";
  ctx.fillStyle = "#4488ff";
  ctx.textAlign = "center";
  ctx.fillText("G", cx, cy - 30);
}

/* ───── Entanglement section drawing ───── */

function drawEntangleStep(ctx: CanvasRenderingContext2D, w: number, h: number, time: number, step: number) {
  const cx = w / 2;
  const cy = h / 2;

  if (step === 0) {
    // Creation: two particles at same point in spiral
    const radius = 60;
    // Spiral
    ctx.strokeStyle = "rgba(150, 130, 255, 0.5)";
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    for (let i = 0; i <= 100; i++) {
      const frac = i / 100;
      const r = frac * radius * 2;
      const angle = frac * Math.PI * 6 + time;
      if (i === 0) ctx.moveTo(cx + Math.cos(angle) * r, cy + Math.sin(angle) * r);
      else ctx.lineTo(cx + Math.cos(angle) * r, cy + Math.sin(angle) * r);
    }
    ctx.stroke();

    // Two particles pulsing at center
    const pulse = Math.sin(time * 3) * 3 + 8;
    ctx.beginPath();
    ctx.fillStyle = "#6af";
    ctx.arc(cx - 3, cy - 3, pulse, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.fillStyle = "#fa6";
    ctx.arc(cx + 3, cy + 3, pulse, 0, Math.PI * 2);
    ctx.fill();

    // Label
    ctx.font = "14px sans-serif";
    ctx.fillStyle = "#aaa";
    ctx.textAlign = "center";
    ctx.fillText("A & B", cx, cy + pulse + 20);
  } else if (step === 1) {
    // Separation: particles move apart
    const separation = 120;
    const leftX = cx - separation;
    const rightX = cx + separation;

    // Dashed line between
    ctx.strokeStyle = "rgba(255,255,255,0.15)";
    ctx.lineWidth = 1;
    ctx.setLineDash([6, 6]);
    ctx.beginPath();
    ctx.moveTo(leftX, cy);
    ctx.lineTo(rightX, cy);
    ctx.stroke();
    ctx.setLineDash([]);

    // Distance label
    ctx.font = "14px sans-serif";
    ctx.fillStyle = "#888";
    ctx.textAlign = "center";
    ctx.fillText("d", cx, cy - 15);

    // Particles as spheres
    const r = 18;
    const grad1 = ctx.createRadialGradient(leftX - 3, cy - 3, 0, leftX, cy, r);
    grad1.addColorStop(0, "#8af");
    grad1.addColorStop(1, "#24a");
    ctx.fillStyle = grad1;
    ctx.beginPath();
    ctx.arc(leftX, cy, r, 0, Math.PI * 2);
    ctx.fill();

    const grad2 = ctx.createRadialGradient(rightX - 3, cy - 3, 0, rightX, cy, r);
    grad2.addColorStop(0, "#fa8");
    grad2.addColorStop(1, "#a42");
    ctx.fillStyle = grad2;
    ctx.beginPath();
    ctx.arc(rightX, cy, r, 0, Math.PI * 2);
    ctx.fill();

    ctx.font = "bold 14px sans-serif";
    ctx.fillStyle = "#fff";
    ctx.textAlign = "center";
    ctx.fillText("A", leftX, cy + 5);
    ctx.fillText("B", rightX, cy + 5);

    // Arrows showing direction
    drawArrow(ctx, leftX - 30, cy, leftX - 50, cy, "#8af");
    drawArrow(ctx, rightX + 30, cy, rightX + 50, cy, "#fa8");
  } else if (step === 2) {
    // 3D -> 2D: spheres squishing to planes
    const separation = 120;
    const leftX = cx - separation;
    const rightX = cx + separation;
    const squish = Math.max(0.05, Math.abs(Math.cos(time * 0.8)));

    // Left: sphere squishing
    ctx.save();
    ctx.translate(leftX, cy);
    ctx.scale(squish, 1);
    const grad1 = ctx.createRadialGradient(-3, -3, 0, 0, 0, 25);
    grad1.addColorStop(0, "#8af");
    grad1.addColorStop(1, "#24a");
    ctx.fillStyle = grad1;
    ctx.beginPath();
    ctx.arc(0, 0, 25, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();

    // Right: sphere squishing
    ctx.save();
    ctx.translate(rightX, cy);
    ctx.scale(squish, 1);
    const grad2 = ctx.createRadialGradient(-3, -3, 0, 0, 0, 25);
    grad2.addColorStop(0, "#fa8");
    grad2.addColorStop(1, "#a42");
    ctx.fillStyle = grad2;
    ctx.beginPath();
    ctx.arc(0, 0, 25, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();

    // Labels
    ctx.font = "bold 14px sans-serif";
    ctx.fillStyle = "#fff";
    ctx.textAlign = "center";
    ctx.fillText("A", leftX, cy + 45);
    ctx.fillText("B", rightX, cy + 45);

    // Dimension labels
    ctx.font = "13px sans-serif";
    ctx.fillStyle = "#aaa";
    ctx.fillText("3D → 2D", cx, cy - 60);

    // Arrow showing compression direction
    ctx.fillStyle = "#666";
    ctx.fillText("v = c", cx, cy + 70);
  } else if (step === 3) {
    // Zero distance: 2D planes connected
    const separation = 120;
    const leftX = cx - separation;
    const rightX = cx + separation;

    // Draw thin planes (lines)
    ctx.strokeStyle = "#6af";
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(leftX, cy - 40);
    ctx.lineTo(leftX, cy + 40);
    ctx.stroke();

    ctx.strokeStyle = "#fa6";
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(rightX, cy - 40);
    ctx.lineTo(rightX, cy + 40);
    ctx.stroke();

    // Glowing connection
    const glowAlpha = 0.3 + Math.sin(time * 2) * 0.2;
    ctx.strokeStyle = `rgba(180, 160, 255, ${glowAlpha})`;
    ctx.lineWidth = 2;
    ctx.setLineDash([8, 4]);
    ctx.beginPath();
    ctx.moveTo(leftX, cy);
    ctx.lineTo(rightX, cy);
    ctx.stroke();
    ctx.setLineDash([]);

    // d = 0 label
    ctx.font = "bold 18px sans-serif";
    ctx.fillStyle = "#e8e0ff";
    ctx.textAlign = "center";
    ctx.fillText("d = 0", cx, cy - 10);

    // Explanation
    ctx.font = "13px sans-serif";
    ctx.fillStyle = "#888";
    ctx.fillText("2D", leftX, cy + 60);
    ctx.fillText("2D", rightX, cy + 60);

    // Labels
    ctx.font = "bold 14px sans-serif";
    ctx.fillStyle = "#6af";
    ctx.fillText("A", leftX, cy - 50);
    ctx.fillStyle = "#fa6";
    ctx.fillText("B", rightX, cy - 50);

    // Pulse effect on measurement
    const pulseR = (time * 30) % 60;
    const pulseAlpha = Math.max(0, 1 - pulseR / 60);
    ctx.strokeStyle = `rgba(180, 160, 255, ${pulseAlpha * 0.5})`;
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.arc(leftX, cy, pulseR, 0, Math.PI * 2);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(rightX, cy, pulseR, 0, Math.PI * 2);
    ctx.stroke();
  }
}

function drawArrow(ctx: CanvasRenderingContext2D, x1: number, y1: number, x2: number, y2: number, color: string) {
  const dx = x2 - x1;
  const dy = y2 - y1;
  const len = Math.sqrt(dx * dx + dy * dy);
  const ux = dx / len;
  const uy = dy / len;
  ctx.strokeStyle = color;
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.stroke();
  ctx.beginPath();
  ctx.fillStyle = color;
  ctx.moveTo(x2, y2);
  ctx.lineTo(x2 - ux * 8 - uy * 4, y2 - uy * 8 + ux * 4);
  ctx.lineTo(x2 - ux * 8 + uy * 4, y2 - uy * 8 - ux * 4);
  ctx.fill();
}

/* ───── Main Component ───── */

export default function UnifiedFieldViz({ section, locale }: UnifiedFieldVizProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const animRef = useRef<number>(0);
  const loc = locale === "en" ? "en" : "zh";

  const [mode, setMode] = useState(0);

  const getExplanation = useCallback(() => {
    if (section === "spiral") {
      const keys = ["single", "pair", "components"] as const;
      return texts.spiral.explanations[keys[mode]][loc];
    }
    if (section === "forces") {
      const keys = ["combined", "linear", "circular", "radial"] as const;
      return texts.forces.explanations[keys[mode]][loc];
    }
    if (section === "entangle") {
      return texts.entangle.explanations[mode][loc];
    }
    return "";
  }, [section, mode, loc]);

  const getModeLabels = useCallback(() => {
    if (section === "spiral") return texts.spiral.modes[loc];
    if (section === "forces") return texts.forces.modes[loc];
    if (section === "entangle") return texts.entangle.steps[loc];
    return [];
  }, [section, loc]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      const rect = container.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio, 2);
      canvas.width = rect.width * dpr;
      canvas.height = 480 * dpr;
      canvas.style.width = rect.width + "px";
      canvas.style.height = "480px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener("resize", resize);

    const startTime = performance.now();

    const draw = (now: number) => {
      const elapsed = (now - startTime) / 1000;
      const w = canvas.width / Math.min(window.devicePixelRatio, 2);
      const h = 480;

      ctx.clearRect(0, 0, w, h);
      ctx.fillStyle = "#111827";
      ctx.fillRect(0, 0, w, h);

      if (section === "spiral") {
        if (mode === 0) drawSpiralSingle(ctx, w, h, elapsed);
        else if (mode === 1) drawSpiralPair(ctx, w, h, elapsed);
        else drawSpiralComponents(ctx, w, h, elapsed);
      } else if (section === "forces") {
        if (mode === 0) drawForcesHelix(ctx, w, h, elapsed);
        else if (mode === 1) drawForcesLinear(ctx, w, h, elapsed);
        else if (mode === 2) drawForcesCircular(ctx, w, h, elapsed);
        else drawForcesRadial(ctx, w, h, elapsed);
      } else if (section === "entangle") {
        drawEntangleStep(ctx, w, h, elapsed, mode);
      }

      animRef.current = requestAnimationFrame(draw);
    };

    animRef.current = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener("resize", resize);
    };
  }, [section, mode]);

  const modeLabels = getModeLabels();

  return (
    <div className="mb-4">
      <div ref={containerRef} className="max-w-[640px] mx-auto">
        <canvas
          ref={canvasRef}
          className="block w-full rounded-t-lg"
          style={{ height: 480, background: "#111827" }}
        />
        {/* Mode/step buttons */}
        <div className="flex flex-wrap gap-2 bg-gray-900 px-4 py-3 rounded-b-lg">
          {modeLabels.map((label, idx) => (
            <button
              key={idx}
              onClick={() => setMode(idx)}
              className={`px-3 py-1.5 rounded text-sm font-medium transition-colors ${
                mode === idx
                  ? "bg-primary-600 text-white"
                  : "bg-gray-700 text-gray-300 hover:bg-gray-600"
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>
      {/* Explanation text */}
      <div className="max-w-[640px] mx-auto mt-3">
        <p className="text-sm text-gray-600 leading-relaxed">{getExplanation()}</p>
      </div>
    </div>
  );
}
