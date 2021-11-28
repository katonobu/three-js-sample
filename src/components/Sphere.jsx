import React from "react";

const Sphere = () => {
  return (
    <>
    <mesh position={[0, 0, 5]}>
      <sphereGeometry attach="geometry" args={[0.3, 20, 20]} />
      <meshNormalMaterial attach="material"/>
    </mesh>
    <mesh position={[5, 0, 0]}>
      <sphereGeometry attach="geometry" args={[0.15, 20, 20]} />
      <meshBasicMaterial attach="material" color='blue'/>
    </mesh>
    </>
  );
};

// [Q,t,I] というマッピングになる
export default Sphere;

