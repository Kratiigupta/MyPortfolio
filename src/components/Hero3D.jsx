import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Stars } from '@react-three/drei';

function RotatingUniverse() {
  const groupRef = useRef();

  useFrame((state, delta) => {
    if (groupRef.current) {
      // Very slow, elegant rotation
      groupRef.current.rotation.y += delta * 0.03;
      groupRef.current.rotation.x += delta * 0.01;
    }
  });

  return (
    <group ref={groupRef}>
      <Stars 
        radius={100} 
        depth={50} 
        count={6000} 
        factor={4} 
        saturation={0} 
        fade 
        speed={1} 
      />
    </group>
  );
}

export default function Hero3D() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none opacity-50 dark:opacity-40">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <RotatingUniverse />
      </Canvas>
    </div>
  );
}
