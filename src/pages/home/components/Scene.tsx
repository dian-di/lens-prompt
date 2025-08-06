import Lights from './Lights'
import Subject from './Subject'

export default function Scene() {
  return (
    <>
      <ambientLight intensity={0.3} />
      <Lights />
      <Subject />
    </>
  )
}