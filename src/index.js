import "./style.css";
import { createRoot } from "react-dom/client";
import React, { useRef, useState, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  OrbitControls,
  Environment,
  Lightformer,
  ContactShadows,
  Stats,
  Text,
  PivotControls,
} from "@react-three/drei";
import { Model } from "./models";
import { Effects } from "./effects";

function Box(props) {
  // This reference will give us direct access to the mesh
  const mesh = useRef();
  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => (mesh.current.rotation.x += 0.01));
  // Return view, these are regular three.js elements expressed in JSX
  return (
    <mesh {...props} ref={mesh}>
      <sphereGeometry args={[1, 8, 8]} />
      <meshStandardMaterial color={"orange"} wireframe={true} />
    </mesh>
  );
}

function Select(props) {
  return (
    <div className="content">
      <p>Choose a model:</p>
      <select value={props.value} onChange={props.onChange}>
        <option value="card">Taro Card</option>
        <option value="lambo">Lambo</option>
        <option value="bmw">BMW</option>
        <option value="gallardo">Gallardo</option>
      </select>
    </div>
  );
}

function App(props) {
  const [model, setModel] = useState("gallardo");

  const map = {
    bmw: {
      url: "/bmw_f22_eurofighter.glb",
      scale: 1.5,
      position: [0, -0.5, 0],
    },
    lambo: {
      url: "/lambo.glb",
      scale: 0.015,
      position: [0, 0, 0],
    },
    gallardo: {
      url: "/lamborghini_gallardo_superleggera.glb",
      scale: 0.4,
      position: [0, -1.2, 0],
    },
    card: {
      url: "/2.glb",
      scale: 10,
      position: [0, 1.5, 0],
      rotation: [1.5, 0, 0],
    },
  };

  return (
    <>
      <Select
        value={model}
        onChange={(e) => {
          setModel(e.target.value);
        }}
      />
      {/* WebGl scene */}
      <Canvas
        gl={{ logarithmicDepthBuffer: true, antialias: false }}
        dpr={[1, 1.5]}
        camera={{ position: [0, 5, 10] }}
      >
        <Stats />
        <color attach="background" args={["#15151a"]} />
        <hemisphereLight intensity={0.5} />
        <Box position={[-6, 0, 0]} />
        <Box position={[6.2, 0, 0]} />
        <Box position={[-8, 2, 0]} />
        <Box position={[8.2, 2, 0]} />
        <Box position={[-6, 4, 0]} />
        <Box position={[6.2, 4, 0]} />

        <mesh
          scale={4}
          position={[3, -1.161, -1.5]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2.5]}
        >
          <ringGeometry args={[0.9, 1, 4, 1]} />
          <meshStandardMaterial color="white" roughness={0.75} />
        </mesh>
        <mesh
          scale={4}
          position={[-3, -1.161, -1]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2.5]}
        >
          <ringGeometry args={[0.9, 1, 3, 1]} />
          <meshStandardMaterial color="white" roughness={0.75} />
        </mesh>

        <Suspense
          fallback={
            <Text
              scale={[10, 10, 10]}
              color="white" // default
              anchorX="center" // default
              anchorY="middle" // default
            >
              Loading...
            </Text>
          }
        >
          <Model
            url={map[model].url}
            position={map[model].position}
            scale={map[model].scale}
            rotation={map[model].rotation}
          />
        </Suspense>

        <ContactShadows
          resolution={1024}
          position={[0, -1.16, 0]}
          scale={15}
          blur={0.5}
          opacity={1}
          far={20}
        />
        <Environment resolution={512}>
          {/* Ceiling */}
          <Lightformer
            intensity={2}
            rotation-x={Math.PI / 2}
            position={[0, 4, -9]}
            scale={[10, 1, 1]}
          />
          <Lightformer
            intensity={2}
            rotation-x={Math.PI / 2}
            position={[0, 4, -6]}
            scale={[10, 1, 1]}
          />
          <Lightformer
            intensity={2}
            rotation-x={Math.PI / 2}
            position={[0, 4, -3]}
            scale={[10, 1, 1]}
          />
          <Lightformer
            intensity={2}
            rotation-x={Math.PI / 2}
            position={[0, 4, 0]}
            scale={[10, 1, 1]}
          />
          <Lightformer
            intensity={2}
            rotation-x={Math.PI / 2}
            position={[0, 4, 3]}
            scale={[10, 1, 1]}
          />
          <Lightformer
            intensity={2}
            rotation-x={Math.PI / 2}
            position={[0, 4, 6]}
            scale={[10, 1, 1]}
          />
          <Lightformer
            intensity={2}
            rotation-x={Math.PI / 2}
            position={[0, 4, 9]}
            scale={[10, 1, 1]}
          />
          {/* Sides */}
          <Lightformer
            intensity={2}
            rotation-y={Math.PI / 2}
            position={[-50, 2, 0]}
            scale={[100, 2, 1]}
          />
          <Lightformer
            intensity={2}
            rotation-y={-Math.PI / 2}
            position={[50, 2, 0]}
            scale={[100, 2, 1]}
          />
          {/* Key */}
          <Lightformer
            form="ring"
            color="red"
            intensity={10}
            scale={2}
            position={[10, 5, 10]}
            onUpdate={(self) => self.lookAt(0, 0, 0)}
          />
        </Environment>
        <Effects />
        <OrbitControls
        // minPolarAngle={Math.PI / 2.2}
        // maxPolarAngle={Math.PI / 2.2}
        />
      </Canvas>
    </>
  );
}

createRoot(document.getElementById("root")).render(
  <Suspense
    fallback={
      <div>Loading heavy texture, pls wait a little bit... ٩(◕‿◕｡)۶</div>
    }
  >
    <App></App>
  </Suspense>
);
