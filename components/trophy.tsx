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
    acc_hair_punkin: THREE.SkinnedMesh;
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
    "/2may_compressed.glb"
  ) as GLTFResult;


  const metal = new THREE.MeshStandardMaterial( {
    color: 0xe6e6e6,
    roughness: 0.2,
    metalness: 0.8,
  } );
  

  const { actions } = useAnimations<GLTFActions>(animations, group);
  // console.log(actions["Hands on Hips"]);
  // actions["Hands on Hips"].clampWhenFinished = true;
  useFrame((state, delta) => (group.current.rotation.y -= delta/3));

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
            geometry={nodes.casual_Female_K.geometry}
            material={metal}
            skeleton={nodes.casual_Female_K.skeleton}
            castShadow
            receiveShadow
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
          position={[0, -0.01, 0]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/2may_compressed.glb");

