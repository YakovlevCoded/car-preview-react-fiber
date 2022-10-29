import * as THREE from "three";
import { useMemo, useRef, useState } from "react";
import { applyProps, useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";

/*
Author: Steven Grey (https://sketchfab.com/Steven007)
License: CC-BY-NC-4.0 (http://creativecommons.org/licenses/by-nc/4.0/)
Source: https://sketchfab.com/3d-models/lamborghini-urus-2650599973b649ddb4460ff6c03e4aa2
Title: Lamborghini Urus
*/
export function Lamborghini(props) {
  const reference = useRef();
  const [active, setActive] = useState(false);
  const [hovered, setHover] = useState(false);
  const sc = useGLTF("/bmw_f22_eurofighter.glb");

  useFrame((state, delta) => {
    reference.current.rotation.y += 0.01;
  });

  // useMemo(() => {
  //   // ⬇⬇⬇ All this is probably better fixed in Blender ...
  //   Object.values(nodes).forEach((node) => {
  //     console.log(node);
  //   });
  // }, [nodes, materials]);
  return (
    <primitive
      ref={reference}
      object={sc.scene}
      position={[0, -0.5, 0]}
      scale={hovered ? 2 : 1.5}
      onClick={(event) => setActive(!active)}
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}
      {...props}
    />
  );
}
