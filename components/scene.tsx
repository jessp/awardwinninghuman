// @ts-nocheck
import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment } from "@react-three/drei";

import {Trophy} from './trophy';

const Scene = () => (
      <Canvas shadows >
        <Suspense fallback={null}>
          <Trophy />
          <Environment preset="sunset"  />
        </Suspense>
      </Canvas>
)

export default Scene;



