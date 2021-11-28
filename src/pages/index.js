import React, { useEffect } from 'react'
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
  return (
    <Canvas orthographic camera={{ zoom: 50, position: [0, 0, 10]}}>
      <AutoResize />
      <CameraController />
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Plane />
      <Sphere/>
    </Canvas>
  )
}
