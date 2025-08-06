export default function Subject() {
  return (
    <mesh castShadow receiveShadow position={[0, 0, 0]}>
      <dodecahedronGeometry args={[1, 0]} />
      <meshStandardMaterial color="#ff6b6b" />
    </mesh>
  )
}