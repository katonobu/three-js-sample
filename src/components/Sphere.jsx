/*
MIT License

Copyright (c) 2021 Nobuo Kato (katonobu4649@gmail.com)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/

import React, {useRef, useEffect} from "react";
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

const Sphere = () => {
  const basebandMeshRef = useRef();
  const basebandPhase = useRef();
  const rfMeshRef = useRef();
  const rfPhase = useRef();
  const lineRef = useRef();
  const rfHistory = useRef();
  useEffect(()=>{
    basebandPhase.current = 0;
    rfPhase.current = 0;
    rfHistory.current = [];
  },[]);

  useFrame(()=>{
    basebandPhase.current += 0.001;
    const I = Math.cos(Math.PI * basebandPhase.current)
    const Q = Math.sin(Math.PI * basebandPhase.current);
    basebandMeshRef.current.position.z = -5 * Q
    basebandMeshRef.current.position.x = 5 * I

    rfPhase.current += 0.1
    const rfI = I * Math.cos(Math.PI * rfPhase.current)
    const rfQ = Q * Math.sin(Math.PI * rfPhase.current)
    rfMeshRef.current.position.z = -5 * rfQ;
    rfMeshRef.current.position.x = 5 * rfI;

    rfHistory.current.unshift({i:rfI, q:rfQ})
    if(1024 < rfHistory.current.length) {
      rfHistory.current.pop()
    }

    const points = []
    for(let i = 0; i < rfHistory.current.length - 1; i++) {
      points.push(new THREE.Vector3(5 * rfHistory.current[i].i, -i / 1024 * 50, -5 * rfHistory.current[i].q))
    }
    lineRef.current.geometry = new THREE.BufferGeometry().setFromPoints(points)

  })
  return (
    <>
    <mesh 
      ref={basebandMeshRef}
    >
      <sphereGeometry
        attach="geometry"
        args={[0.3, 20, 20]}
      />
      <meshNormalMaterial
        attach="material"
      />
    </mesh>
    <mesh
      ref={rfMeshRef}
    >
      <sphereGeometry
        attach="geometry"
        args={[0.15, 20, 20]}
      />
      <meshBasicMaterial
        attach="material"
        color='blue'
      />
    </mesh>
    <line ref={lineRef}>
      <lineBasicMaterial attach="material" fog='true' color={'#D02020'} />
    </line>    
    </>
  );
};

// [I,t,Q] というマッピングになる
export default Sphere;

