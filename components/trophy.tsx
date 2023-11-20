// @ts-nocheck

import * as THREE from "three";
import React, { useRef, useState, useEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { TextureLoader } from "three";
import { useFrame } from '@react-three/fiber';
import { GLTF } from "three-stdlib";


type Props = {
  activeAnim: string | undefined,
  prevAnim: string | undefined,
  setActive: fn
}

type GLTFResult = GLTF & {
  nodes: {
    casual_Female_K: THREE.SkinnedMesh;
    trophy_base: THREE.Mesh;
    spine: THREE.Bone;
  };
  materials: {};
};

type ActionName = "Hands on Hips" | "Matrix" | "Landing";
type GLTFActions = Record<ActionName, THREE.AnimationAction>;

export function Trophy({ activeAnim, prevAnim, setActive }: Props) {
  const loader = new TextureLoader();
  const texture = loader.load("./white_flare.png");

  const group = useRef<THREE.Group>();
  const flare = useRef<THREE.Sprite>();

  const [angle, setAngle] = useState(false);

  const { nodes, materials, animations } = useGLTF(
    "/trophy_person.glb"
  ) as GLTFResult;


  const metal = new THREE.MeshStandardMaterial( {
    color: 0xe6e6e6,
    roughness: 0.15,
    metalness: 0.85,
    side: THREE.DoubleSide
  } );
  

  const { actions, mixer } = useAnimations<GLTFActions>(animations, group);

  useFrame(({ state, delta }) => {
    setAngle((angle + (Math.PI / 360) * 2) % (Math.PI * 2));
    flare.current.position.x = 0.285 * Math.cos(angle);
    flare.current.position.y = 0.285 * Math.sin(angle) + 0.02;
  });



  useEffect(() => {
    if (activeAnim !== undefined){
      setActive(false);
      if (prevAnim !== undefined){
        actions[prevAnim].reset();
        actions[prevAnim].stop();
        actions[prevAnim].paused = true;
      }
      actions[activeAnim].reset();
      actions[activeAnim].paused = false;
      actions[activeAnim].clampWhenFinished = true;
      actions[activeAnim].setLoop(THREE.LoopOnce);
      actions[activeAnim].play();
    }

  }, [activeAnim, actions]);

  useEffect(() => {
    const fn = () => setActive(true);
    mixer.addEventListener('finished', fn)
    return () => {
      mixer.removeEventListener('finished', fn)
    }
}, [mixer]);

  return (
    <group ref={group} dispose={null}>
      <group name="Scene" 
        scale={7} 
        position={[0, -0.65, 0]}>
        <group name="metarig" scale={0.00305} position={[0, -0.01, 0]}>
          <primitive object={nodes.spine}  />
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
          name="trophy_base_v2"
          castShadow
          receiveShadow
          geometry={nodes.trophy_base_v2.geometry}
          material={metal}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.005}
        />
        
        <group name="orbit"
          rotation={[Math.PI / 2, Math.PI / 12, 0]}
          position={[0, 0.3, -0.15]}
          >
          <mesh>
            <meshStandardMaterial
              attach="material"
              color="white"
              emissive="#DAFF70"
            />
            <torusGeometry args={[0.285, 0.0035, 24, 80]} />
          </mesh>
          <sprite ref={flare} scale={0.175} position={[0, 0, 0.01]}>
              <spriteMaterial attach="material" map={texture} />
          </sprite>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/trophy_person.glb");

