import React, { Suspense, useEffect } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Mesh } from "three";
// import * as THREE from "three";



export function Title() {
    const gltf = useLoader(
      GLTFLoader,
      process.env.PUBLIC_URL + "gltf_models/title.gltf"
    );

    // const material = new THREE.MeshBasicMaterial({
    //   color : 0xff0000,
    //   transparent : false
    // })

    
    
    useEffect(() => {
      gltf.scene.scale.set(3,3,3);
      gltf.scene.position.set(22,-6,0);
      gltf.scene.rotation.set(0,2.0,0)
      gltf.scene.castShadow = true;
      gltf.recieveShadow = true;
      gltf.scene.traverse((object) => {
        if (object instanceof Mesh) {
          object.castShadow = true;
          object.receiveShadow = true;
          object.material.envMapIntensity = 10;
        }
      });
    }, [gltf]);

    // const object = new THREE.Mesh(gltf, material);
  
    // useFrame((state, delta) => {
    //   let t = state.clock.getElapsedTime();
  
    //   let group = gltf.scene.children[0].children[0].children[0];
    //   group.children[0].rotation.x = t * 2;
    //   group.children[2].rotation.x = t * 2;
    //   group.children[4].rotation.x = t * 2;
    //   group.children[6].rotation.x = t * 2;
    // });
  
    return (
    <Suspense fallback={null}>
      <primitive object={gltf.scene} />
      </Suspense>);
  }