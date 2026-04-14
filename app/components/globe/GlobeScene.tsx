"use client";

import { useRef, useMemo, useEffect, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { useGlobeNodes, type GlobeNode } from "./hooks/useGlobeNodes";
import { useGlobeLines, type GlobeLine } from "./hooks/useGlobeLines";
import { useWorldOutline } from "./hooks/useWorldOutline";

// ─── Reduced-motion ───────────────────────────────────────────────────────────
function useReducedMotion(): boolean {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const h = (e: MediaQueryListEvent) => setReduced(e.matches);
    mq.addEventListener("change", h);
    return () => mq.removeEventListener("change", h);
  }, []);
  return reduced;
}

// ─── Radial-gradient sprite texture for soft node glow ───────────────────────
function useGlowTexture(): THREE.CanvasTexture {
  return useMemo(() => {
    const sz = 64;
    const canvas = document.createElement("canvas");
    canvas.width = sz;
    canvas.height = sz;
    const ctx = canvas.getContext("2d")!;
    const cx = sz / 2;
    const grad = ctx.createRadialGradient(cx, cx, 0, cx, cx, cx);
    grad.addColorStop(0.0, "rgba(142, 255, 113, 1.0)");
    grad.addColorStop(0.2, "rgba(142, 255, 113, 0.7)");
    grad.addColorStop(0.5, "rgba(142, 255, 113, 0.15)");
    grad.addColorStop(1.0, "rgba(142, 255, 113, 0.0)");
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, sz, sz);
    return new THREE.CanvasTexture(canvas);
  }, []);
}

// ─── Shaders ──────────────────────────────────────────────────────────────────
const ATMO_VERT = /* glsl */ `
  varying vec3 vNormal;
  void main() {
    vNormal = normalize(normalMatrix * normal);
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const ATMO_FRAG = /* glsl */ `
  varying vec3 vNormal;
  void main() {
    float edge = 1.0 - abs(dot(vNormal, vec3(0.0, 0.0, 1.0)));
    float intensity = pow(edge, 2.2) * 0.9;
    gl_FragColor = vec4(0.05, 0.85, 0.38, 1.0) * intensity * 0.4;
  }
`;

// ─── Camera controller ────────────────────────────────────────────────────────
function CameraController({ reduced }: { reduced: boolean }) {
  const { camera } = useThree();

  useEffect(() => {
    camera.position.set(0, 0, 6.5);
    if (camera instanceof THREE.PerspectiveCamera) {
      camera.fov = 55;
      camera.updateProjectionMatrix();
    }
  }, [camera]);

  useFrame(({ clock }) => {
    if (reduced) return;
    const t = clock.elapsedTime;
    camera.position.x = Math.sin(t * 0.3) * 0.25;
    camera.position.y = Math.cos(t * 0.2) * 0.25;
    camera.position.z = 6.5;
    camera.lookAt(0, 0, 0);
  });

  return null;
}

// ─── Atmosphere — Fresnel glow on BackSide sphere, outside GlobeGroup ─────────
function AtmosphereGlow() {
  const material = useMemo(
    () =>
      new THREE.ShaderMaterial({
        vertexShader: ATMO_VERT,
        fragmentShader: ATMO_FRAG,
        side: THREE.BackSide,
        transparent: true,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      }),
    []
  );
  const geometry = useMemo(() => new THREE.SphereGeometry(3.25, 48, 48), []);

  return <mesh geometry={geometry} material={material} />;
}

// ─── Dark ocean fill sphere ───────────────────────────────────────────────────
function OceanSphere() {
  const geometry = useMemo(() => new THREE.SphereGeometry(2.79, 48, 48), []);
  return (
    <mesh geometry={geometry}>
      <meshBasicMaterial color="#040c14" transparent opacity={0.78} />
    </mesh>
  );
}

// ─── Latitude/longitude grid — very subtle ────────────────────────────────────
function WireframeSphere() {
  const geometry = useMemo(() => new THREE.SphereGeometry(2.80, 36, 18), []);
  return (
    <mesh geometry={geometry}>
      <meshBasicMaterial wireframe color="#00ff88" transparent opacity={0.03} />
    </mesh>
  );
}

// ─── Continent outlines — rendered when world data finishes loading ────────────
function ContinentLines({ geo }: { geo: THREE.BufferGeometry }) {
  return (
    <lineSegments geometry={geo}>
      <lineBasicMaterial
        color="#a8ffc8"
        transparent
        opacity={0.55}
      />
    </lineSegments>
  );
}

// ─── Static (non-pulsing) node cloud ─────────────────────────────────────────
function StaticNodes({
  nodes,
  glowTex,
}: {
  nodes: GlobeNode[];
  glowTex: THREE.CanvasTexture;
}) {
  const staticNodes = useMemo(() => nodes.filter((n) => !n.hasPulse), [nodes]);

  const geometry = useMemo(() => {
    const pos = new Float32Array(staticNodes.length * 3);
    staticNodes.forEach((n, i) => {
      pos[i * 3] = n.position.x;
      pos[i * 3 + 1] = n.position.y;
      pos[i * 3 + 2] = n.position.z;
    });
    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.BufferAttribute(pos, 3));
    return geo;
  }, [staticNodes]);

  const material = useMemo(
    () =>
      new THREE.PointsMaterial({
        size: 0.07,
        map: glowTex,
        sizeAttenuation: true,
        transparent: true,
        opacity: 0.7,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      }),
    [glowTex]
  );

  return <points geometry={geometry} material={material} />;
}

// ─── Pulsing node ─────────────────────────────────────────────────────────────
function PulsingNode({
  node,
  reduced,
  glowTex,
}: {
  node: GlobeNode;
  reduced: boolean;
  glowTex: THREE.CanvasTexture;
}) {
  const ref = useRef<THREE.Mesh>(null);
  const geometry = useMemo(() => new THREE.SphereGeometry(0.025, 6, 6), []);
  const material = useMemo(
    () =>
      new THREE.MeshBasicMaterial({
        color: "#8eff71",
        transparent: true,
        opacity: 0.85,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      }),
    []
  );

  // Suppress unused warning — texture reserved for future sprite upgrade
  void glowTex;

  useFrame(({ clock }) => {
    if (!ref.current) return;
    const s = reduced
      ? 1
      : 1 + 0.6 * Math.sin(clock.elapsedTime * node.pulseFrequency + node.pulsePhase);
    ref.current.scale.setScalar(s);
  });

  return (
    <mesh ref={ref} position={node.position} geometry={geometry} material={material} />
  );
}

// ─── Connection lines ─────────────────────────────────────────────────────────
function ConnectionLines({ lines }: { lines: GlobeLine[] }) {
  const geometry = useMemo(() => {
    const pos = new Float32Array(lines.length * 6);
    lines.forEach((l, i) => {
      pos[i * 6 + 0] = l.start.x;
      pos[i * 6 + 1] = l.start.y;
      pos[i * 6 + 2] = l.start.z;
      pos[i * 6 + 3] = l.end.x;
      pos[i * 6 + 4] = l.end.y;
      pos[i * 6 + 5] = l.end.z;
    });
    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.BufferAttribute(pos, 3));
    return geo;
  }, [lines]);

  return (
    <lineSegments geometry={geometry}>
      <lineBasicMaterial color="#00ff88" transparent opacity={0.1} />
    </lineSegments>
  );
}

// ─── Data packet — bright dot travelling along a connection line ──────────────
function DataPacket({
  line,
  speed,
  initialOffset,
  reduced,
}: {
  line: GlobeLine;
  speed: number;
  initialOffset: number;
  reduced: boolean;
}) {
  const ref = useRef<THREE.Mesh>(null);
  const progress = useRef(initialOffset);
  const geometry = useMemo(() => new THREE.SphereGeometry(0.03, 6, 6), []);
  const start = useMemo(() => line.start.clone(), [line.start]);
  const end = useMemo(() => line.end.clone(), [line.end]);
  const material = useMemo(
    () =>
      new THREE.MeshBasicMaterial({
        color: "#c8ffd4",
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      }),
    []
  );

  useFrame((_, delta) => {
    if (!ref.current || reduced) return;
    progress.current = (progress.current + delta * speed) % 1;
    ref.current.position.lerpVectors(start, end, progress.current);
  });

  return (
    <mesh ref={ref} position={start} geometry={geometry} material={material} />
  );
}

// ─── Globe group — all surface geometry + slow Y rotation ────────────────────
function GlobeGroup({ reduced }: { reduced: boolean }) {
  const nodes = useGlobeNodes();
  const lines = useGlobeLines(nodes);
  const outlineGeo = useWorldOutline(2.82);
  const glowTex = useGlowTexture();
  const groupRef = useRef<THREE.Group>(null);

  const pulsingNodes = useMemo(() => nodes.filter((n) => n.hasPulse), [nodes]);
  const packetLines = useMemo(() => lines.filter((l) => l.hasPacket), [lines]);

  useFrame(() => {
    if (reduced || !groupRef.current) return;
    // ~5 min per full rotation
    groupRef.current.rotation.y += 0.0003;
  });

  return (
    <group ref={groupRef}>
      <OceanSphere />
      <WireframeSphere />
      {outlineGeo && <ContinentLines geo={outlineGeo} />}
      <StaticNodes nodes={nodes} glowTex={glowTex} />
      {pulsingNodes.map((n) => (
        <PulsingNode key={n.id} node={n} reduced={reduced} glowTex={glowTex} />
      ))}
      <ConnectionLines lines={lines} />
      {packetLines.map((l, i) => (
        <DataPacket
          key={i}
          line={l}
          speed={0.18 + i * 0.03}
          initialOffset={i / packetLines.length}
          reduced={reduced}
        />
      ))}
    </group>
  );
}

// ─── Inner scene (must be inside <Canvas>) ────────────────────────────────────
function SceneContent() {
  const reduced = useReducedMotion();

  return (
    <>
      <ambientLight color="#001a0c" intensity={3} />
      <pointLight color="#00ff88" intensity={1.5} position={[5, 5, 5]} />
      <pointLight color="#003322" intensity={0.8} position={[-4, -3, -4]} />

      <CameraController reduced={reduced} />
      {/* Atmosphere sits outside GlobeGroup so it never rotates */}
      <AtmosphereGlow />
      <GlobeGroup reduced={reduced} />
    </>
  );
}

// ─── Canvas wrapper (consumed by dynamic() in GlobeBackground.tsx) ───────────
export default function GlobeScene() {
  return (
    <Canvas
      gl={{ antialias: true, alpha: true }}
      frameloop="always"
      camera={{ fov: 55, position: [0, 0, 6.5] }}
      style={{ width: "100%", height: "100%" }}
    >
      <SceneContent />
    </Canvas>
  );
}
