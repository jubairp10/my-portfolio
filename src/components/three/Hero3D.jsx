'use client';

import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Icosahedron, OrbitControls } from '@react-three/drei';

/**
 * Editorial wireframe object: a clean, low-poly icosahedron drawn as thin
 * electric-blue lines, with a fainter ink shell for depth. No fills, no glow.
 */
function WireObject() {
  const outer = useRef();
  const inner = useRef();

  useFrame((_, delta) => {
    if (outer.current) {
      outer.current.rotation.x += delta * 0.1;
      outer.current.rotation.y += delta * 0.16;
    }
    if (inner.current) {
      inner.current.rotation.x -= delta * 0.08;
      inner.current.rotation.y -= delta * 0.12;
    }
  });

  return (
    <group>
      <Icosahedron ref={outer} args={[2, 1]}>
        <meshBasicMaterial color="#2b3aff" wireframe transparent opacity={0.85} />
      </Icosahedron>
      <Icosahedron ref={inner} args={[1.25, 0]}>
        <meshBasicMaterial color="#16140f" wireframe transparent opacity={0.35} />
      </Icosahedron>
    </group>
  );
}

export default function Hero3D() {
  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 45 }}
      dpr={[1, 2]}
      gl={{ antialias: true, alpha: true }}
      style={{ background: 'transparent' }}
    >
      <WireObject />
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.7}
        rotateSpeed={0.4}
      />
    </Canvas>
  );
}
