import React from "react";

const Plane = () => {
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
      <meshBasicMaterial attach="material" color="#606060"/>
    </mesh>
    </>
  )
}

export default Plane;
