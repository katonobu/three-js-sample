import { useEffect } from 'react'
import { useThree } from '@react-three/fiber'
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

const CameraController = () => {
  const { camera, gl} = useThree();
  useEffect(
     () => {
        camera.position.set(0, 10, 0);
        camera.up.set(1,0,0)
        const controls = new OrbitControls(camera, gl.domElement);
        controls.minDistance = 3;
        controls.maxDistance = 100;
//        controls.maxAzimuthAngle = Math.PI / 2
//        controls.minAzimuthAngle = -Math.PI / 2
//        controls.maxPolarAngle = Math.PI
//        controls.minPolarAngle = 0
        return () => {
          controls.dispose();
        };
     },
     [camera, gl]
  );
  return null;
};

export default CameraController;

