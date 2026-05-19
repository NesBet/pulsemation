import { useMemo } from 'react'

export function usePerformance() {
  return useMemo(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const cores = navigator.hardwareConcurrency || 4
    const memory = navigator.deviceMemory || 4
    const isMobile = /Mobi|Android|iPhone|iPad/i.test(navigator.userAgent)

    let tier
    if (reducedMotion || cores <= 2 || memory <= 2 || isMobile) {
      tier = 'low'
    } else if (cores <= 4 || memory <= 4) {
      tier = 'medium'
    } else {
      tier = 'high'
    }

    return {
      tier,
      reducedMotion,
      isMobile,
      particles: tier === 'low' ? 300 : tier === 'medium' ? 800 : 2000,
      geometrySegments: tier === 'low' ? 32 : tier === 'medium' ? 64 : 200,
      geometryRadialSegments: tier === 'low' ? 8 : tier === 'medium' ? 16 : 32,
      enableEnvironment: tier !== 'low',
      enableOrbitControls: tier === 'high',
      simpleMaterial: tier !== 'high',
      disableAnimations: reducedMotion,
    }
  }, [])
}
