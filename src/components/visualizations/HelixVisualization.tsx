"use client";

import { useRef, useEffect, useState } from "react";
import * as THREE from "three";

const labels = {
  zh: {
    electric: "电场（直线运动分量）",
    magnetic: "磁场（环绕运动分量）",
    gravity: "引力场（向心加速度）",
  },
  en: {
    electric: "Electric Field (Linear Component)",
    magnetic: "Magnetic Field (Rotational Component)",
    gravity: "Gravitational Field (Centripetal Acceleration)",
  },
};

export default function HelixVisualization({ locale }: { locale: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [labelPositions, setLabelPositions] = useState<
    { key: string; x: number; y: number; color: string; text: string }[]
  >([]);

  const loc = locale === "en" ? "en" : "zh";
  const t = labels[loc];

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    // --- Renderer ---
    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: false });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x0a0a1a);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, 1, 0.1, 100);
    camera.position.set(4, 3, 5);
    camera.lookAt(0, 0, 0);

    // --- Sizing ---
    const resize = () => {
      const w = container.clientWidth;
      const h = container.clientHeight;
      renderer.setSize(w, h);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    };
    resize();
    window.addEventListener("resize", resize);

    // --- Materials ---
    const helixMat = new THREE.LineBasicMaterial({ color: 0x66bbff, linewidth: 2 });
    const axisMat = new THREE.LineBasicMaterial({ color: 0x4488ff });
    const magneticMat = new THREE.LineBasicMaterial({ color: 0x44dd88 });
    const gravityMat = new THREE.LineBasicMaterial({ color: 0xff4444 });

    // --- Helix curve ---
    const helixRadius = 1.5;
    const helixHeight = 6;
    const turns = 4;
    const segments = 256;
    const helixPoints: THREE.Vector3[] = [];
    for (let i = 0; i <= segments; i++) {
      const frac = i / segments;
      const angle = frac * turns * Math.PI * 2;
      const y = frac * helixHeight - helixHeight / 2;
      helixPoints.push(new THREE.Vector3(Math.cos(angle) * helixRadius, y, Math.sin(angle) * helixRadius));
    }
    const helixGeo = new THREE.BufferGeometry().setFromPoints(helixPoints);
    const helixLine = new THREE.Line(helixGeo, helixMat);
    scene.add(helixLine);

    // --- Axis line (blue, electric field) ---
    const axisGeo = new THREE.BufferGeometry().setFromPoints([
      new THREE.Vector3(0, -helixHeight / 2 - 0.5, 0),
      new THREE.Vector3(0, helixHeight / 2 + 0.5, 0),
    ]);
    const axisLine = new THREE.Line(axisGeo, axisMat);
    scene.add(axisLine);

    // Axis arrow
    const arrowCone = new THREE.ConeGeometry(0.08, 0.3, 8);
    const arrowMesh = new THREE.Mesh(arrowCone, new THREE.MeshBasicMaterial({ color: 0x4488ff }));
    arrowMesh.position.set(0, helixHeight / 2 + 0.65, 0);
    scene.add(arrowMesh);

    // --- Magnetic circular arrows (green) ---
    const circleCount = 4;
    for (let c = 0; c < circleCount; c++) {
      const yPos = -helixHeight / 2 + (c + 0.5) * (helixHeight / circleCount);
      const arcPoints: THREE.Vector3[] = [];
      const arcSegments = 40;
      const arcSpan = Math.PI * 1.5;
      for (let i = 0; i <= arcSegments; i++) {
        const a = (i / arcSegments) * arcSpan;
        arcPoints.push(new THREE.Vector3(Math.cos(a) * helixRadius * 0.7, yPos, Math.sin(a) * helixRadius * 0.7));
      }
      const arcGeo = new THREE.BufferGeometry().setFromPoints(arcPoints);
      scene.add(new THREE.Line(arcGeo, magneticMat));

      // Arrowhead for circular arrow
      const lastPt = arcPoints[arcPoints.length - 1];
      const prevPt = arcPoints[arcPoints.length - 3];
      const dir = new THREE.Vector3().subVectors(lastPt, prevPt).normalize();
      const arrowGeo = new THREE.ConeGeometry(0.06, 0.2, 6);
      const arrowM = new THREE.Mesh(arrowGeo, new THREE.MeshBasicMaterial({ color: 0x44dd88 }));
      arrowM.position.copy(lastPt);
      arrowM.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), dir);
      scene.add(arrowM);
    }

    // --- Gravity arrows (red, pointing inward) ---
    const gravityCount = 6;
    for (let g = 0; g < gravityCount; g++) {
      const frac = (g + 0.5) / gravityCount;
      const angle = frac * turns * Math.PI * 2;
      const yPos = frac * helixHeight - helixHeight / 2;
      const outer = new THREE.Vector3(Math.cos(angle) * helixRadius, yPos, Math.sin(angle) * helixRadius);
      const inner = new THREE.Vector3(Math.cos(angle) * 0.15, yPos, Math.sin(angle) * 0.15);
      const arrowGeo = new THREE.BufferGeometry().setFromPoints([outer, inner]);
      scene.add(new THREE.Line(arrowGeo, gravityMat));

      // Arrowhead
      const arDir = new THREE.Vector3().subVectors(inner, outer).normalize();
      const cone = new THREE.ConeGeometry(0.05, 0.18, 6);
      const coneMesh = new THREE.Mesh(cone, new THREE.MeshBasicMaterial({ color: 0xff4444 }));
      coneMesh.position.copy(inner);
      coneMesh.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), arDir);
      scene.add(coneMesh);
    }

    // --- Glow post-effect via subtle ambient + point lights ---
    scene.add(new THREE.AmbientLight(0xffffff, 0.3));
    const pointLight = new THREE.PointLight(0x6688ff, 1, 20);
    pointLight.position.set(3, 3, 3);
    scene.add(pointLight);

    // --- Manual orbit controls ---
    let isDragging = false;
    let prevMouse = { x: 0, y: 0 };
    const spherical = { theta: Math.atan2(camera.position.x, camera.position.z), phi: Math.acos(camera.position.y / camera.position.length()), radius: camera.position.length() };

    const onPointerDown = (e: PointerEvent) => {
      isDragging = true;
      prevMouse = { x: e.clientX, y: e.clientY };
      canvas.setPointerCapture(e.pointerId);
    };
    const onPointerMove = (e: PointerEvent) => {
      if (!isDragging) return;
      const dx = e.clientX - prevMouse.x;
      const dy = e.clientY - prevMouse.y;
      spherical.theta -= dx * 0.005;
      spherical.phi = Math.max(0.1, Math.min(Math.PI - 0.1, spherical.phi + dy * 0.005));
      prevMouse = { x: e.clientX, y: e.clientY };
    };
    const onPointerUp = () => {
      isDragging = false;
    };
    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      spherical.radius = Math.max(3, Math.min(15, spherical.radius + e.deltaY * 0.01));
    };

    canvas.addEventListener("pointerdown", onPointerDown);
    canvas.addEventListener("pointermove", onPointerMove);
    canvas.addEventListener("pointerup", onPointerUp);
    canvas.addEventListener("wheel", onWheel, { passive: false });

    // --- Label anchor points in world space ---
    const labelAnchors = [
      { key: "electric", world: new THREE.Vector3(0, helixHeight / 2 + 1, 0), color: "#4488ff", text: t.electric },
      { key: "magnetic", world: new THREE.Vector3(helixRadius * 0.7, 0, 0), color: "#44dd88", text: t.magnetic },
      { key: "gravity", world: new THREE.Vector3(helixRadius * 0.6, -1.5, 0), color: "#ff4444", text: t.gravity },
    ];

    // --- Animation loop ---
    let animId = 0;
    const animate = () => {
      animId = requestAnimationFrame(animate);

      if (!isDragging) {
        spherical.theta += 0.003;
      }

      // Update camera from spherical coords
      camera.position.set(
        spherical.radius * Math.sin(spherical.phi) * Math.sin(spherical.theta),
        spherical.radius * Math.cos(spherical.phi),
        spherical.radius * Math.sin(spherical.phi) * Math.cos(spherical.theta),
      );
      camera.lookAt(0, 0, 0);

      renderer.render(scene, camera);

      // Project label positions to screen
      const w = container.clientWidth;
      const h = container.clientHeight;
      const projected = labelAnchors.map((la) => {
        const v = la.world.clone().project(camera);
        return { key: la.key, x: (v.x * 0.5 + 0.5) * w, y: (-v.y * 0.5 + 0.5) * h, color: la.color, text: la.text };
      });
      setLabelPositions(projected);
    };
    animate();

    // --- Cleanup ---
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
      canvas.removeEventListener("pointerdown", onPointerDown);
      canvas.removeEventListener("pointermove", onPointerMove);
      canvas.removeEventListener("pointerup", onPointerUp);
      canvas.removeEventListener("wheel", onWheel);
      renderer.dispose();
      scene.traverse((obj) => {
        if (obj instanceof THREE.Mesh) {
          obj.geometry.dispose();
          if (Array.isArray(obj.material)) obj.material.forEach((m) => m.dispose());
          else obj.material.dispose();
        }
        if (obj instanceof THREE.Line) {
          obj.geometry.dispose();
          if (Array.isArray(obj.material)) obj.material.forEach((m) => m.dispose());
          else obj.material.dispose();
        }
      });
    };
  }, [t.electric, t.magnetic, t.gravity]);

  return (
    <div ref={containerRef} style={{ position: "relative", width: "100%", height: "500px", borderRadius: "12px", overflow: "hidden", background: "#0a0a1a" }}>
      <canvas ref={canvasRef} style={{ display: "block", width: "100%", height: "100%", cursor: "grab" }} />
      {labelPositions.map((lp) => (
        <div
          key={lp.key}
          style={{
            position: "absolute",
            left: `${lp.x}px`,
            top: `${lp.y}px`,
            transform: "translate(-50%, -100%)",
            color: lp.color,
            fontSize: "13px",
            fontWeight: 600,
            textShadow: `0 0 8px ${lp.color}40, 0 0 2px #000`,
            whiteSpace: "nowrap",
            pointerEvents: "none",
            userSelect: "none",
          }}
        >
          {lp.text}
        </div>
      ))}
    </div>
  );
}
