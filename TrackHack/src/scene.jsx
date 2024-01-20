import React from 'react';
import { Canvas } from '@react-three/fiber';

function Scene() {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <mesh>
        <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
        <meshStandardMaterial attach="material" color="orange" />
      </mesh>
    </Canvas>
  );
}

export default Scene;
