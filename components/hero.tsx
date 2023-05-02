// @ts-nocheck
import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment } from "@react-three/drei";

import {Model} from './Modello';

const Hero = () => (
      <Canvas>
        <Suspense fallback={null}>
          <Model />
          <Environment preset="sunset" background />
        </Suspense>
      </Canvas>
)

export default Hero;




