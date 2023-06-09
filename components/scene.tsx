// @ts-nocheck
import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment } from "@react-three/drei";
import {Trophy} from './trophy';

type Props = {
  isWork: boolean
}

const Scene = ({ isWork }: Props) => (
      <Canvas shadows >
        <Suspense fallback={null}>
          <Trophy isWork={isWork}/>
          <Environment preset="sunset"  />
        </Suspense>
      </Canvas>
)

export default Scene;



