import { useRef } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'

export function MagneticButton({ children, className = '', strength = 0.35, ...props }) {
  const ref = useRef(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const springX = useSpring(x, { stiffness: 300, damping: 20 })
  const springY = useSpring(y, { stiffness: 300, damping: 20 })

  const handleMove = (e) => {
    if (!ref.current || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const rect = ref.current.getBoundingClientRect()
    const cx = rect.left + rect.width / 2
    const cy = rect.top + rect.height / 2
    x.set((e.clientX - cx) * strength)
    y.set((e.clientY - cy) * strength)
  }
  const handleLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.a
      ref={ref}
      style={{ x: springX, y: springY }}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={`inline-flex items-center justify-center will-change-transform ${className}`}
      {...props}
    >
      {children}
    </motion.a>
  )
}

export function MagneticWrap({ children, strength = 0.25 }) {
  const ref = useRef(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const sx = useSpring(x, { stiffness: 280, damping: 18 })
  const sy = useSpring(y, { stiffness: 280, damping: 18 })

  return (
    <motion.div
      ref={ref}
      style={{ x: sx, y: sy }}
      onMouseMove={(e) => {
        if (!ref.current || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
        const r = ref.current.getBoundingClientRect()
        x.set((e.clientX - (r.left + r.width / 2)) * strength)
        y.set((e.clientY - (r.top + r.height / 2)) * strength)
      }}
      onMouseLeave={() => { x.set(0); y.set(0) }}
      className="will-change-transform"
    >
      {children}
    </motion.div>
  )
}
