import { Canvas } from "@react-three/fiber";
import Particles from "./Particles";

export default function Scene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 8], fov: 60 }}
      gl={{ alpha: true }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: 3
      }}
    >
      <Particles />
    </Canvas>
  );
}