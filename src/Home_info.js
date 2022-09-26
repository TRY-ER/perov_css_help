import React, { Suspense, useEffect, useState } from "react";
import { useFrame, useLoader, useThree } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Mesh } from "three";
import { Html } from "@react-three/drei";
// import * as THREE from "three";



export function HomeInfo() {
    const gltf = useLoader(
      GLTFLoader,
      process.env.PUBLIC_URL + "gltf_models/site_info_content_2.gltf"
    );


    // useEffect(() => {
    //   gltf.scene.scale.set(0.55,0.55,0.55);
    //   gltf.scene.position.set(10,1.5,18);
    //   gltf.scene.rotation.set(0,1.6,0);
    //   gltf.scene.castShadow = true;
    //   gltf.recieveShadow = true;
    //   gltf.scene.traverse((object) => {
    //     if (object instanceof Mesh) {
    //       object.castShadow = true;
    //       object.receiveShadow = true;
    //       object.material.envMapIntensity = 5;
    //     }
    //   });
    // }, [gltf]);

    // const object = new THREE.Mesh(gltf, material);
  
    // useFrame((state, delta) => {
    //   let t = state.clock.getElapsedTime();
  
    //   let group = gltf.scene.children[0].children[0].children[0];
    //   group.children[0].rotation.x = t * 2;
    //   group.children[2].rotation.x = t * 2;
    //   group.children[4].rotation.x = t * 2;
    //   group.children[6].rotation.x = t * 2;
    // });
    // <Suspense fallback={null}>
    //   <mesh scale={(viewport.width / 5) * (active ? 1.5 : 1)}>
    //     <primitive object={gltf.scene} />
    //   </mesh>
    //   </Suspense>
  
    return (
      <Html>
        <h1 class="home_info_txt">
          Recent progress in perovskite solar cells estimates 
          its potential for photovoltaics applications. 
          The power conversion efficiency has been 
          improving simultaneously with the device complexity. 
          Hence this interface provides numerous options 
          for parameters such that the efficiency 
          is estimated with a machine learning model. 
          As the experimentation process is time-consuming 
          this is an useful resource to predict the achievable 
          efficiency of available resources. 
          The prediction is completely based on an 
          analysis of past data. </h1>
    </Html>
    );
  }