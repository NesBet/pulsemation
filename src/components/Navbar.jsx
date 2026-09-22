import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { usePerformance } from '../hooks/usePerformance'

const links = [
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('')
  const perf = usePerformance()
  const ticking = useRef(false)

  useEffect(() => {
    const onScroll = () => {
      if (!ticking.current) {
        ticking.current = true
        requestAnimationFrame(() => {
          setScrolled(window.scrollY > 20)
          // active section detection
          const sections = ['services', 'about', 'contact']
          let current = ''
          for (const id of sections) {
            const el = document.getElementById(id)
            if (el && window.scrollY + 120 >= el.offsetTop) current = id
          }
          setActive(current)
          ticking.current = false
        })
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const onKeyDown = (e) => { if (e.key === 'Escape') setOpen(false) }
    if (open) {
      document.addEventListener('keydown', onKeyDown)
      document.body.style.overflow = 'hidden'
    }
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = ''
    }
  }, [open])

  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setOpen(false) }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  return (
    <div className="fixed top-0 inset-x-0 z-50 pointer-events-none">
      {/* fluid island wrapper - desktop pill, mobile full width bar */}
      <div className="max-w-[1280px] mx-auto px-3 sm:px-4 pt-3 sm:pt-4">
        <motion.nav
          initial={false}
          animate={{
            y: scrolled ? 0 : 0,
          }}
          className={`pointer-events-auto relative flex items-center justify-between gap-4 transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)]
            ${scrolled
              ? 'bg-[#0B0E1E]/75 backdrop-blur-[28px] border border-white/[0.08] shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_16px_40px_rgba(0,0,0,0.5),0_0_0_1px_rgba(255,255,255,0.02)] rounded-full px-2 sm:px-3 py-2'
              : 'bg-[#0B0E1E]/40 backdrop-blur-xl border border-white/[0.05] shadow-[inset_0_1px_0_rgba(255,255,255,0.04),0_8px_32px_rgba(0,0,0,0.3)] rounded-full px-2 sm:px-3 py-2 sm:py-2.5'
            }`}
          style={{ willChange: 'backdrop-filter' }}
        >
          {/* left: logo */}
          <a href="#" className="flex items-center gap-3 group shrink-0 pl-1">
            <div className="relative w-9 h-9 rounded-full overflow-hidden ring-1 ring-white/10 group-hover:ring-white/20 transition-all duration-500">
              <img src="/favicon.jpg" alt="Pulsemation" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)]" />
              <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-full pointer-events-none" />
            </div>
            <div className="hidden sm:block">
              <div className="font-display font-bold text-white tracking-[-0.02em] text-[14px] leading-none">PULSEMATION</div>
              <div className="font-mono text-[9px] tracking-[0.16em] text-white/40 -mt-0.5">AUTOMATION LABS</div>
            </div>
            <span className="sm:hidden font-display font-bold text-white tracking-tight text-[13px]">PULSEMATION</span>
          </a>

          {/* center: links - desktop */}
          <div className="hidden md:flex items-center gap-1 bg-white/[0.03] rounded-full p-1 border border-white/[0.04]">
            {links.map((l) => {
              const isActive = active === l.href.slice(1)
              return (
                <a
                  key={l.href}
                  href={l.href}
                  className={`relative text-[13px] font-medium px-4 py-1.5 rounded-full transition-colors duration-300 ${
                    isActive ? 'text-white' : 'text-white/60 hover:text-white'
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-0 bg-white text-white rounded-full shadow-[0_2px_10px_rgba(0,0,0,0.2),inset_0_1px_0_rgba(255,255,255,0.8)]"
                      style={{ background: 'white' }}
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className={`relative ${isActive ? 'text-[#05070A]' : ''}`}>{l.label}</span>
                </a>
              )
            })}
          </div>

          {/* right: CTA + mobile toggle */}
          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href="#contact"
              className="hidden sm:inline-flex items-center gap-2 pl-5 pr-1.5 py-1.5 rounded-full bg-white text-[#05070A] font-semibold text-[13px] tracking-tight hover:bg-white/90 transition-colors group"
            >
              Get Started
              <span className="w-7 h-7 rounded-full bg-[#05070A] text-white flex items-center justify-center group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300 ease-[cubic-bezier(0.32,0.72,0,1)]">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7" /><path d="M8 7h9v9" /></svg>
              </span>
            </a>
            <a
              href="#contact"
              className="sm:hidden w-9 h-9 rounded-full bg-white text-[#05070A] flex items-center justify-center"
              aria-label="Get Started"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 17L17 7" /><path d="M8 7h9v9" /></svg>
            </a>

            {/* hamburger morph */}
            <button
              className="md:hidden relative w-9 h-9 rounded-full bg-white/10 border border-white/10 flex items-center justify-center text-white hover:bg-white/15 transition-colors overflow-hidden"
              onClick={() => setOpen(!open)}
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
            >
              <span className="relative block w-[14px] h-[14px]">
                <span className={`absolute left-0 w-full h-0.5 bg-white rounded-full transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] ${open ? 'top-[6px] rotate-45' : 'top-[2px] rotate-0'}`} />
                <span className={`absolute left-0 top-[6px] w-full h-0.5 bg-white rounded-full transition-all duration-200 ${open ? 'opacity-0 scale-x-0' : 'opacity-100 scale-x-100'}`} />
                <span className={`absolute left-0 w-full h-0.5 bg-white rounded-full transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] ${open ? 'top-[6px] -rotate-45' : 'top-[10px] rotate-0'}`} />
              </span>
            </button>
          </div>
        </motion.nav>
      </div>

      {/* mobile overlay */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-0 bg-[#05070A]/70 backdrop-blur-[2px] md:hidden z-40 pointer-events-auto"
              onClick={() => setOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, y: -12, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -12, scale: 0.98 }}
              transition={{ duration: 0.35, ease: [0.32, 0.72, 0, 1] }}
              className="absolute top-[64px] left-3 right-3 md:hidden bg-[#0F1220]/90 backdrop-blur-[28px] border border-white/[0.08] rounded-[24px] shadow-[0_24px_64px_rgba(0,0,0,0.6),inset_0_1px_0_rgba(255,255,255,0.06)] z-40 pointer-events-auto overflow-hidden"
            >
              <div className="p-2">
                {links.map((l, i) => (
                  <motion.a
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.05 + i * 0.05, duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
                    className="flex items-center justify-between px-5 py-4 rounded-2xl hover:bg-white/[0.06] text-white/80 hover:text-white transition-colors group"
                  >
                    <span className="font-display text-[15px] font-medium tracking-tight">{l.label}</span>
                    <span className="w-8 h-8 rounded-full bg-white/10 border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-[#05070A] transition-colors">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M9 18l6-6-6-6" /></svg>
                    </span>
                  </motion.a>
                ))}
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.22, duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
                  className="p-2 mt-1"
                >
                  <a
                    href="#contact"
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-center gap-2 w-full py-4 rounded-full bg-white text-[#05070A] font-semibold text-sm"
                  >
                    Start Your Automation
                    <span className="w-7 h-7 rounded-full bg-[#05070A] text-white flex items-center justify-center">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 17L17 7"/><path d="M8 7h9v9"/></svg>
                    </span>
                  </a>
                  <p className="text-center font-mono text-[10px] tracking-wide text-white/30 mt-3">PULSE • CONNECT • WORK • INTERACT • RUN</p>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  )
}
