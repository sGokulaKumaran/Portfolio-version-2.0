import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";
export default function Particles() {
  const points = useRef<THREE.Points>(null);

  const particleCount = 2000;

  const positions = new Float32Array(particleCount * 3);

  for (let i = 0; i < particleCount; i++) {
    positions[i * 3 + 0] = (Math.random() - 0.5) * 30;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 30;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 30;
  }

  useFrame(() => {
    if (points.current) {
      points.current.rotation.y += 0.0008;
      points.current.rotation.x += 0.0003;
    }
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>

      <pointsMaterial
        size={0.03}
        color="#6a8cff"
        sizeAttenuation
        transparent
        opacity={0.8}
      />
    </points>
  );
}
