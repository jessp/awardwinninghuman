// @ts-nocheck
import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import {Trophy} from './trophy';

type Props = {
  isWork: boolean
}

const Scene = ({ isWork }: Props) => (
      <Canvas shadows >
        <Suspense fallback={null}>
          <Trophy isWork={isWork}/>
        </Suspense>
      </Canvas>
)

export default Scene;



