import "./style.css";
import React, { Suspense, useEffect, useRef } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Mesh } from "three";
import { Html } from "@react-three/drei";
// import * as THREE from "three";



export function Predict_btn() {
    // const gltf = useLoader(
    //   GLTFLoader,
    //   process.env.PUBLIC_URL + "gltf_models/predict_button.gltf"
    // );

    // const MyMesh = useRef();

    // const rotate = useFrame(() => {
    //     if(MyMesh.current.rotation.y < 1.7){
    //             MyMesh.current.rotation.y += 0.02;
    //         }
    // })
    // window.addEventListener("mouseover",rotate);
    
    // useEffect(() => {
    //     gltf.scene.scale.set(3,3,3);
    //     gltf.scene.position.set(-15,-4,-2);
    //     gltf.scene.rotation.set(0,1.3,0);
    //     gltf.scene.castShadow = true;
    //     gltf.recieveShadow = true;
    //     gltf.scene.traverse((object) => {
    //       if (object instanceof Mesh) {
    //         object.castShadow = true;
    //         object.receiveShadow = true;
    //         object.material.envMapIntensity = 5;
    //       }
    //     });
    //   }, [gltf]);
    return (
    <Html>
        <a href="/predictor" >
        <button className="button_main" >Predict</button>
        </a>
    </Html>);
  }
