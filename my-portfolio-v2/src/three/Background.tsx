import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

export default function Background() {
  const ref = useRef<THREE.Mesh>(null!);

  useFrame(({ clock }) => {
    if (!ref.current) return;
    (ref.current.material as THREE.ShaderMaterial).uniforms.uTime.value =
      clock.getElapsedTime();
  });

  return (
    <mesh ref={ref} scale={20} position={[0, 0, -5]}>
      <planeGeometry args={[2, 2]} />

      <shaderMaterial
        uniforms={{
          uTime: { value: 0 },
        }}
        vertexShader={`
          varying vec2 vUv;
          void main(){
            vUv = uv;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0);
          }
        `}
        fragmentShader={`
          uniform float uTime;
          varying vec2 vUv;

          void main(){

            vec2 center = vec2(0.5,0.5);
            float dist = distance(vUv, center);

            vec3 dark = vec3(0.02,0.02,0.03);
            vec3 gold = vec3(0.8,0.65,0.35);

            float glow = sin(vUv.y*4.0 + uTime*0.2)*0.15;

            vec3 color = mix(dark,gold,vUv.x*0.3);

            float fade = smoothstep(0.8,0.4,dist);

            gl_FragColor = vec4(color * fade + glow,1.0);

          }
        `}
      />
    </mesh>
  );
}
