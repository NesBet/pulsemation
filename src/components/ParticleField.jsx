import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { usePerformance } from '../hooks/usePerformance'

export default function ParticleField() {
  const ref = useRef()
  const perf = usePerformance()
  const count = perf.particles

  const [positions, velocities] = useMemo(() => {
    const spread = perf.tier === 'low' ? 15 : 30
    const pos = new Float32Array(count * 3)
    const vel = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * spread
      pos[i * 3 + 1] = (Math.random() - 0.5) * spread
      pos[i * 3 + 2] = (Math.random() - 0.5) * spread
      vel[i * 3] = (Math.random() - 0.5) * 0.005
      vel[i * 3 + 1] = (Math.random() - 0.5) * 0.005
      vel[i * 3 + 2] = (Math.random() - 0.5) * 0.005
    }
    return [pos, vel]
  }, [count, perf.tier])

  useFrame(() => {
    if (!ref.current || perf.reducedMotion) return
    const pos = ref.current.geometry.attributes.position.array
    const bound = perf.tier === 'low' ? 7.5 : 15
    for (let i = 0; i < count; i++) {
      pos[i * 3] += velocities[i * 3]
      pos[i * 3 + 1] += velocities[i * 3 + 1]
      pos[i * 3 + 2] += velocities[i * 3 + 2]
      if (Math.abs(pos[i * 3]) > bound) velocities[i * 3] *= -1
      if (Math.abs(pos[i * 3 + 1]) > bound) velocities[i * 3 + 1] *= -1
      if (Math.abs(pos[i * 3 + 2]) > bound) velocities[i * 3 + 2] *= -1
    }
    ref.current.geometry.attributes.position.needsUpdate = true
  })

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={perf.tier === 'low' ? 0.08 : 0.05}
        color="#00d4ff"
        transparent
        opacity={perf.tier === 'low' ? 0.3 : 0.6}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  )
}
