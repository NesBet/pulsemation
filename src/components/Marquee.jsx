import { motion } from 'framer-motion'

export default function Marquee({ items }) {
  return (
    <div className="relative overflow-hidden border-y border-white/[0.06] bg-white/[0.015]">
      <div className="absolute inset-0 bg-gradient-to-r from-[#05070A] via-transparent to-[#05070A] z-10 pointer-events-none" />
      <motion.div
        className="flex gap-12 py-5 whitespace-nowrap"
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration: 28, ease: 'linear', repeat: Infinity }}
        style={{ width: 'max-content' }}
      >
        {[...items, ...items].map((item, i) => (
          <span key={i} className="inline-flex items-center gap-12">
            <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-white/40">{item}</span>
            <span className="w-1 h-1 rounded-full bg-white/20" />
          </span>
        ))}
      </motion.div>
    </div>
  )
}
