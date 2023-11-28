// @ts-nocheck
import React, { Suspense, useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment } from "@react-three/drei";
import {Trophy} from './trophy';
import styles from './scene.module.scss'



const Scene = () => {

  /*js modulo behaves oddly with negative numbers*/
  function mod(n, m) {
    return ((n % m) + m) % m;
  }

  const [isActive, setActive] = useState(true);
  const [isLoading, load] = useState(true);

  const animationList = ["Hands on Hips", "Matrix", "Landing"];
  const [animationIndex, setAnimationIndex] = useState(-1);
  return (
      <Canvas shadows 
        className={`${isActive ? styles.isActive : styles.isInactive} ${isLoading ? " " : " expand"}`}
        onClick={() => isActive ? setAnimationIndex((animationIndex + 1)%animationList.length) : null}>
        <Suspense fallback={<Handle load={load} />}>
          <Trophy 
            activeAnim={animationList[animationIndex]} 
            prevAnim={animationList[mod(animationIndex - 1, animationList.length)]}
            setActive={setActive}/>
          <Environment files="./venice_sunset_1k.hdr" />
        </Suspense>
      </Canvas>
  )
}

function Handle({ load }) {
  useEffect(() => {
    load(true)
    return () => load(false)
  }, []);
}


export default Scene;



