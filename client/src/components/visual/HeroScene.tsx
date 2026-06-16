import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Icosahedron, Octahedron, Torus, MeshDistortMaterial, Sparkles } from '@react-three/drei';
import type { Group } from 'three';

/**
 * Central distorted core that gently reacts to the pointer — the focal "AI" object.
 */
function Core() {
  const group = useRef<Group>(null);

  useFrame((state, delta) => {
    if (!group.current) return;
    // Idle spin
    group.current.rotation.y += delta * 0.25;
    // Ease toward the pointer for a subtle parallax/tilt
    const px = state.pointer.x;
    const py = state.pointer.y;
    group.current.rotation.x += (py * 0.35 - group.current.rotation.x) * 0.05;
    group.current.position.x += (px * 0.4 - group.current.position.x) * 0.05;
  });

  return (
    <group ref={group}>
      <Icosahedron args={[1.35, 4]}>
        <MeshDistortMaterial
          color="#5d5ef5"
          emissive="#3a2db8"
          emissiveIntensity={0.35}
          roughness={0.18}
          metalness={0.55}
          distort={0.38}
          speed={1.8}
        />
      </Icosahedron>
      {/* Faint wireframe shell for a "data" feel */}
      <Icosahedron args={[1.7, 1]}>
        <meshBasicMaterial color="#a855f7" wireframe transparent opacity={0.12} />
      </Icosahedron>
    </group>
  );
}

/** A single floating "knowledge node" orbiting the core. */
function Node({
  position,
  color,
  shape,
  scale = 1,
}: {
  position: [number, number, number];
  color: string;
  shape: 'octa' | 'torus' | 'ico';
  scale?: number;
}) {
  const material = (
    <meshStandardMaterial color={color} roughness={0.25} metalness={0.4} emissive={color} emissiveIntensity={0.18} />
  );
  return (
    <Float speed={2} rotationIntensity={1.2} floatIntensity={1.6}>
      <group position={position} scale={scale}>
        {shape === 'octa' && <Octahedron args={[0.42]}>{material}</Octahedron>}
        {shape === 'ico' && <Icosahedron args={[0.36, 0]}>{material}</Icosahedron>}
        {shape === 'torus' && <Torus args={[0.34, 0.13, 16, 40]}>{material}</Torus>}
      </group>
    </Float>
  );
}

export default function HeroScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 45 }}
      dpr={[1, 1.8]}
      gl={{ antialias: true, alpha: true }}
      style={{ background: 'transparent' }}
    >
      {/* Colored lighting gives the core life without an HDRI environment */}
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={1.2} />
      <pointLight position={[-4, 2, 2]} intensity={2.4} color="#a855f7" />
      <pointLight position={[4, -2, 3]} intensity={2.2} color="#22d3ee" />

      <Core />

      <Node position={[2.6, 1.1, -0.5]} color="#22d3ee" shape="octa" scale={1.1} />
      <Node position={[-2.7, 0.6, 0.4]} color="#a855f7" shape="torus" />
      <Node position={[2.1, -1.4, 0.8]} color="#7c84fc" shape="ico" scale={1.2} />
      <Node position={[-2.2, -1.2, -0.6]} color="#f472b6" shape="octa" scale={0.9} />
      <Node position={[0.4, 2.1, -1]} color="#5d5ef5" shape="ico" />

      {/* Drifting particle field */}
      <Sparkles count={60} scale={9} size={2.5} speed={0.4} opacity={0.6} color="#a3b0ff" />
    </Canvas>
  );
}
