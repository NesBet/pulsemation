import { useRef } from 'react'

export default function SpotlightCard({ children, className = '', ...props }) {
  const ref = useRef(null)

  const handleMove = (e) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    ref.current.style.setProperty('--mouse-x', `${x}px`)
    ref.current.style.setProperty('--mouse-y', `${y}px`)
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      className={`spotlight ${className}`}
      {...props}
    >
      {children}
    </div>
  )
}
