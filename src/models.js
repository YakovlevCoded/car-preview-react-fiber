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
export function Model(props) {
  const reference = useRef();

  const { scene } = useGLTF(props.url);
  scene.visible = true;

  useFrame((state, delta) => {
    reference.current.rotation.y += 0.01;
  });

  return (
    <primitive
      ref={reference}
      object={scene}
      position={props.position}
      scale={props.scale}
      rotation={props.rotation}
    />
  );
}
