/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React from 'react'
import { useGLTF } from '@react-three/drei'

export default function Arrow({ xPosition, yPosition, zPosition, arrowRotation, texture }) {
  const { nodes, materials } = useGLTF('/arrow_01-transformed.glb')

  return (
    <group position={[xPosition, yPosition + 0.8, zPosition]} rotation={arrowRotation} scale={0.0015}>
      <mesh geometry={nodes.Cube__0.geometry} material={materials.Cube_2__0} />
      <mesh geometry={nodes.Cube_Mat1_0.geometry} material={materials['Mat.1']}>
        <meshMatcapMaterial matcap={texture} />
      </mesh>
      <mesh geometry={nodes.Cube_Mat_0.geometry} material={materials.material} />
    </group>
  )
}

useGLTF.preload('/arrow_01-transformed.glb')
