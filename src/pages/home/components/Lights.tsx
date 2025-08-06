import { useHelper } from '@react-three/drei'
import { useRef } from 'react'
import type * as THREE from 'three'
import { DirectionalLightHelper } from 'three'
import { useSceneStore } from '@/store/sceneStore'

export default function Lights() {
  const { keyIntensity, keyColor, keyAngle } = useSceneStore()
  const ref = useRef<THREE.DirectionalLight>(null!)
  useHelper(ref, DirectionalLightHelper, 1, keyColor)

  return (
    <directionalLight
      ref={ref}
      position={[Math.cos(keyAngle) * 4, 3, Math.sin(keyAngle) * 4]}
      intensity={keyIntensity}
      color={keyColor}
      castShadow
      shadow-mapSize={[1024, 1024]}
    />
  )
}
