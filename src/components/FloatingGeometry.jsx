import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { MeshTransmissionMaterial, Float } from '@react-three/drei'
import { usePerformance } from '../hooks/usePerformance'

export default function FloatingGeometry() {
  const meshRef = useRef()
  const perf = usePerformance()

  useFrame((_, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.15
      meshRef.current.rotation.y += delta * 0.3
    }
  })

  return (
    <Float speed={perf.reducedMotion ? 0 : 2} rotationIntensity={perf.reducedMotion ? 0 : 0.3} floatIntensity={perf.reducedMotion ? 0 : 1.5}>
      <mesh ref={meshRef}>
        <torusKnotGeometry args={[1.2, 0.4, perf.geometrySegments, perf.geometryRadialSegments]} />
        {perf.simpleMaterial ? (
          <meshPhysicalMaterial
            color="#00d4ff"
            metalness={0.3}
            roughness={0.2}
            transparent
            opacity={0.8}
            envMapIntensity={0.5}
          />
        ) : (
          <MeshTransmissionMaterial
            backside
            thickness={0.5}
            roughness={0.1}
            metalness={0.1}
            transmission={0.95}
            ior={1.5}
            chromaticAberration={0.4}
            color="#00d4ff"
            bg="#0a0a1a"
          />
        )}
      </mesh>
    </Float>
  )
}
