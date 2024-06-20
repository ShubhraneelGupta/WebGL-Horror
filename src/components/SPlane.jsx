import React, { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import {vertex, fragment} from './Shader'


const Banner = () => {
  return <mesh>
    <planeGeometry 
      args={[5, 5, 25, 25]}
    />
    <shaderMaterial
      vertexShader={vertex}
      fragmentShader={fragment}
      wireframe={true}
    />
  </mesh>
}


const SPlane = () => {
  return <Canvas style={{height:"100vh"}}>
    <Banner/>
    <OrbitControls/>
  </Canvas>
}


export default SPlane