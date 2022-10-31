import * as THREE from "three";
import { useMemo, useRef, useState } from "react";
import { applyProps, useFrame } from "@react-three/fiber";
import { useGLTF, useProgress } from "@react-three/drei";

/*
Author: Steven Grey (https://sketchfab.com/Steven007)
License: CC-BY-NC-4.0 (http://creativecommons.org/licenses/by-nc/4.0/)
Source: https://sketchfab.com/3d-models/lamborghini-urus-2650599973b649ddb4460ff6c03e4aa2
Title: Lamborghini Urus
*/
export function Lamborghini() {
  const reference = useRef();

  const { scene } = useGLTF("/lambo.glb");
  scene.visible = true;

  useFrame((state, delta) => {
    reference.current.rotation.y += 0.01;
  });

  return (
    <primitive
      key={Math.random()}
      ref={reference}
      object={scene}
      position={[0, 0, 0]}
      scale={0.015}
    />
  );
}

export function BMW() {
  const reference = useRef();

  const model = useGLTF("/bmw_f22_eurofighter.glb");
  const { scene } = model;
  scene.visible = true;

  useFrame((state, delta) => {
    reference.current.rotation.y += 0.01;
  });

  return (
    <primitive
      key={Math.random()}
      ref={reference}
      object={scene}
      position={[0, -0.5, 0]}
      scale={1.5}
    />
  );
}

export function Gallardo() {
  const reference = useRef();

  const { scene } = useGLTF("/lamborghini_gallardo_superleggera.glb");
  scene.visible = true;

  useFrame((state, delta) => {
    reference.current.rotation.y += 0.01;
  });

  return (
    <primitive
      ref={reference}
      object={scene}
      position={[0, -1.2, 0]}
      scale={0.4}
    />
  );
}

export function Taro() {
  const reference = useRef();

  const model = useGLTF("/2.glb");
  const { scene } = model;
  scene.visible = true;

  useFrame((state, delta) => {
    reference.current.rotation.y += 0.01;
  });

  return (
    <primitive ref={reference} object={scene} position={[0, 0, 0]} scale={10} />
  );
}

// const map = {
//   bmw: {
//     url: "/bmw_f22_eurofighter.glb",
//     scale: 1.5,
//     position: [0, -0.5, 0],
//   },
//   lambo: {
//     url: "/lambo.glb",
//     scale: 0.015,
//     position: [0, 0, 0],
//   },
//   gallardo: {
//     url: "/lamborghini_gallardo_superleggera.glb",
//     scale: 0.4,
//     position: [0, -1.2, 0],
//   },
//   card: {
//     url: "/2.glb",
//     scale: 10,
//     position: [0, 0, 0],
//   },
// };
