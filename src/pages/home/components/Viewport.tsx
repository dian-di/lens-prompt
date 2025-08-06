import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import Scene from './Scene'

export default function Viewport() {
  return (
    <div className='h-full w-full overflow-hidden rounded-xl bg-gray-900'>
      <Canvas shadows>
        <Scene />
        <OrbitControls makeDefault />
      </Canvas>
    </div>
  )
}
