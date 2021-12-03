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

import React, { useEffect, useCallback } from 'react'
import { Canvas, useThree } from '@react-three/fiber'
import Plane from '../components/Plane'
import CameraController from "../components/Control"
import Sphere from "../components/Sphere"

function AutoResize(props) {
  const {setSize} = useThree();
  useEffect( // auto resize, https://docs.pmnd.rs/react-three-fiber/API/hooks
    () => {
      setSize(window.innerWidth, window.innerHeight);
    },
    [setSize]
  );
  return null;
}


export default function Home() {
  const updateIqCallback = useCallback(
    (basebandPhase) => {
      let I = Math.cos(Math.PI * basebandPhase/1200)
      let Q = Math.sin(Math.PI * basebandPhase/1200);
      return {I, Q}
    },
    [],
  );
  
  return (
    <Canvas orthographic camera={{ zoom: 50}}>
      <AutoResize />
      <CameraController />
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Plane />
      <Sphere updateIq={updateIqCallback}/>
      <fog attach="fog" args={['#000000', 0, 90]} />
    </Canvas>
  )
}
