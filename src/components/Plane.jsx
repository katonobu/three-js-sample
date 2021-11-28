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
import * as THREE from 'three'

const Plane = () => {
  const lineRef = useRef()
  useEffect(()=>{
    const points = []
    points.push(new THREE.Vector3(-5, 0, -5))
    points.push(new THREE.Vector3(-5, -50, -5))
    lineRef.current.geometry = new THREE.BufferGeometry().setFromPoints(points)
  },[])

  return (
    <>
    <gridHelper args={[10, 10, `gray`, `gray`]} />
    <axesHelper args={[5, 5, 5]}/>

    <mesh rotation={[0, -Math.PI / 2, 0]} position={[5, -25, 0]} receiveShadow>
      <planeBufferGeometry attach="geometry" args={[10, 50]} />
      <meshBasicMaterial attach="material" color="#8080ff"/>
    </mesh>
    <mesh rotation={[0, Math.PI / 2, 0]} position={[5, -25, 0]} receiveShadow>
      <planeBufferGeometry attach="geometry" args={[10, 50]} />
      <meshBasicMaterial attach="material" color="#202020"/> 
    </mesh>

    <mesh rotation={[0, 0, -Math.PI / 2]} position={[0, -25, 5]} receiveShadow>
      <planeBufferGeometry attach="geometry" args={[50, 10]} />
      <meshBasicMaterial attach="material" color="#404040"/>
    </mesh>
    <mesh rotation={[Math.PI, 0, -Math.PI / 2]} position={[0, -25, 5]} receiveShadow>
      <planeBufferGeometry attach="geometry" args={[50, 10]} />
      <meshBasicMaterial attach="material" color="#80ff80"/>
    </mesh>

    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -50, 0]} receiveShadow>
      <planeBufferGeometry attach="geometry" args={[10, 10]} />
      <meshBasicMaterial attach="material" color="#A0A0A0"/>
    </mesh>
    <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, -50, 0]} receiveShadow>
      <planeBufferGeometry attach="geometry" args={[10, 10]} />
      <meshBasicMaterial attach="material" color="#505050"/>
    </mesh>
    <line ref={lineRef}>
      <lineBasicMaterial attach="material" color={`gray`} />
    </line>    
    </>
  )
}

export default Plane;
