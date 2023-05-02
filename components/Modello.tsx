// @ts-nocheck

import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { GLTF } from "three-stdlib";

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

export function Model(props: JSX.IntrinsicElements["group"]) {
  const group = useRef<THREE.Group>();
  const { nodes, materials, animations } = useGLTF(
    "/2may_compressed.glb"
  ) as GLTFResult;
  const { actions } = useAnimations<GLTFActions>(animations, group);
  return (
    <group ref={group} {...props} dispose={null} onClick={(e) => actions["Hands on Hips"].play()}>
      <group name="Scene">
        <group name="metarig" scale={0.003}>
          <primitive object={nodes.spine} />
          <skinnedMesh
            name="acc_hair_punkin"
            geometry={nodes.acc_hair_punkin.geometry}
            material={nodes.acc_hair_punkin.material}
            skeleton={nodes.acc_hair_punkin.skeleton}
          />
          <skinnedMesh
            name="casual_Female_K"
            geometry={nodes.casual_Female_K.geometry}
            material={nodes.casual_Female_K.material}
            skeleton={nodes.casual_Female_K.skeleton}
          />
        </group>
        <mesh
          name="trophy_base"
          castShadow
          receiveShadow
          geometry={nodes.trophy_base.geometry}
          material={nodes.trophy_base.material}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.005}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/2may_compressed.glb");

