// @ts-nocheck
import React, { Suspense, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment } from "@react-three/drei";
import {Trophy} from './trophy';


const Scene = () => {

  /*js modulo behaves oddly with negative numbers*/
  function mod(n, m) {
    return ((n % m) + m) % m;
  }

  const animationList = ["Hands on Hips", "Matrix", "Landing"];
  const [animationIndex, setAnimationIndex] = useState(-1);

  return (
      <Canvas shadows onClick={() => setAnimationIndex((animationIndex + 1)%animationList.length)}>
        <Suspense fallback={null}>
          <Trophy activeAnim={animationList[animationIndex]} prevAnim={animationList[mod(animationIndex - 1, animationList.length)]}/>
          <Environment files="./venice_sunset_1k.hdr" />
        </Suspense>
      </Canvas>
  )
}

export default Scene;



