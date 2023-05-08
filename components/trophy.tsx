// @ts-nocheck

import * as THREE from "three";
import React, { useRef, useState, useEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useFrame } from '@react-three/fiber';
import { GLTF } from "three-stdlib";

type Props = {
  isWork: boolean,
}

type GLTFResult = GLTF & {
  nodes: {
    casual_Female_K: THREE.SkinnedMesh;
    trophy_base: THREE.Mesh;
    spine: THREE.Bone;
  };
  materials: {};
};

type ActionName = "Hands on Hips";
type GLTFActions = Record<ActionName, THREE.AnimationAction>;

export function Trophy({ isWork }: Props) {
  const group = useRef<THREE.Group>();
  const { nodes, materials, animations } = useGLTF(
    "/8_may.glb"
  ) as GLTFResult;


  const metal = new THREE.MeshStandardMaterial( {
    color: 0xe6e6e6,
    roughness: 0.15,
    metalness: 0.85,
    side: THREE.DoubleSide
  } );
  

  const { actions } = useAnimations<GLTFActions>(animations, group);
  useFrame((state, delta) => (group.current.rotation.y -= delta/3));
  // useFrame((state, delta) => (console.log(group.current.rotation.y)));



  useEffect(() => {
    actions["Hands on Hips"].clampWhenFinished = true;
    actions["Hands on Hips"].setLoop(THREE.LoopOnce);
    if (!isWork) {
      actions["Hands on Hips"].reset();
      actions["Hands on Hips"].timeScale = 1;
      actions["Hands on Hips"].play();
    } else {
      actions["Hands on Hips"].timeScale = -1;
      actions["Hands on Hips"].paused = false;
    }

  }, [isWork, actions]);

  return (
    <group ref={group} dispose={null}>
      <group name="Scene" scale={7} position={[0, -0.65, 0]}>
        <group name="metarig" scale={0.00305} position={[0, -0.01, 0]}>
          <primitive object={nodes.spine} />
          <skinnedMesh
            name="casual_Female_K"
            castShadow
            receiveShadow
            geometry={nodes.casual_Female_K.geometry}
            material={metal}
            skeleton={nodes.casual_Female_K.skeleton}
          />
        </group>
        <mesh
          name="trophy_base"
          castShadow
          receiveShadow
          geometry={nodes.trophy_base.geometry}
          material={metal}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.005}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/8_may.glb");

