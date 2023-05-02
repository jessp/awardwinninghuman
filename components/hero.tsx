// @ts-nocheck
import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment } from "@react-three/drei";

import {Trophy} from './trophy';

const Hero = () => (
      <Canvas>
        <Suspense fallback={null}>
          <Trophy />
          <Environment preset="night" />
        </Suspense>
      </Canvas>
)

export default Hero;




