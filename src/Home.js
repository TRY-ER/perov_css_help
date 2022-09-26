import "./style.css";
import React, { Suspense, useState, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import {
  CubeCamera,
  Environment,
  OrbitControls,
  PerspectiveCamera,
} from "@react-three/drei";
import { Ground } from "./Ground";
import { Perov } from "./Perov";
import { Title } from './Title';
import { HomeInfo } from "./Home_info"; 
import { Predict_btn } from "./Predict_btn";
// #lighting position setup


var colorl1 = [0.5,0.5,0];
var colorl2 = [0,0.3,0.7];


var positionl1x = 3;
var positionl1z = 2;
var positionl1y = 7;  // determines the z axis hieght
var anglel1 = 0.7;

var positionl2x = -3;
var positionl2z = 2;
var positionl2y = 7;   // determines the z axis hieght
var anglel2 = 0.7;


export function Home() {
  // const spot1 = useRef();
  // const {mouse} = useThree();
  // useFrame(() => {
  //   spot1.current.position = [mouse.x, mouse.y,0];
  // })
  return(
    <Suspense fallback={null}>
    <div style={{width : "100vw", height : "100vh"}}>
    <Canvas shadows gl raycaster gl2 = {true}>
    {/* <OrbitControls 
        enableRotate = {true}
        enableZoom = {false}
        enablePan = {false}
        target={[0, 0.35, 0]}
        maxPolarAngle={1.45}
      /> */}
      <PerspectiveCamera 
      makeDefault fov={30} position={[-5, -1, -45]} />

    <color args={[0,0,0]} attach="background" />

    <CubeCamera resolution={256} frames={Infinity}>
      {(texture) => (
        <>
          <Environment map={texture} />
        </>
      )}
    </CubeCamera>
    <spotLight
      color={colorl1}
      intensity={10}
      angle={anglel1}
      penumbra={0.5}
      position={[positionl1x,positionl1y,positionl1z]}
      castShadow
      shadow-bias={-0.0001}
    />
    <spotLight
      color={colorl2}
      intensity={10}
      angle={anglel2}
      penumbra={0.5}
      position={[positionl2x,positionl2y,positionl2z]}
      castShadow
      shadow-bias={-0.0001}
    />
    <Predict_btn />
    <HomeInfo />
    {/* <Title /> */}
    <Ground />
    <Perov />
    </Canvas>
    </div>
    </Suspense>);
  }