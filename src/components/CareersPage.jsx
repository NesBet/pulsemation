import { motion } from 'framer-motion'

export default function CareersPage({ onBack }) {
  return (
    <div className="min-h-screen bg-[#05070A] selection:bg-[#00E5FF] selection:text-[#05070A]">
      <div className="absolute inset-0 grid-pattern opacity-10 pointer-events-none" />
      <div className="relative max-w-[1280px] mx-auto px-4 sm:px-6 py-20 sm:py-28">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: [0.32,0.72,0,1] }}>
          <button onClick={onBack} className="inline-flex items-center gap-2 font-mono text-xs tracking-wide text-white/50 hover:text-white transition-colors mb-8 bg-white/[0.04] border border-white/10 rounded-full px-4 py-2 backdrop-blur">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
            Back to Home
          </button>

          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="eyebrow mx-auto"><span className="eyebrow-dot"/> Careers</span>
            <h1 className="mt-6 font-display font-bold tracking-[-0.03em] text-white text-[clamp(28px,5vw,56px)]">
              Join the <span className="gradient-text">mission</span>
            </h1>
          </div>

          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.15 }} className="max-w-2xl mx-auto">
            <div className="double-bezel">
              <div className="double-bezel-inner p-8 sm:p-10 text-center">
                <div className="w-12 h-12 rounded-2xl bg-white text-[#05070A] flex items-center justify-center mx-auto mb-4">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="8.5" cy="7" r="4"/><path d="M20 8v6M23 11v2"/><path d="M17 11v2"/></svg>
                </div>
                <h3 className="font-display font-semibold text-white">No open roles right now</h3>
                <p className="text-white/55 leading-relaxed text-sm mt-3 max-w-[46ch] mx-auto">
                  We're a small, focused team and hire slowly. If you're obsessed with automation, AI, and craft, send your work to{' '}
                  <a href="mailto:pulsemationltd@gmail.com" className="text-[#00E5FF] hover:text-white transition-colors underline underline-offset-4">pulsemationltd@gmail.com</a> — we read every email.
                </p>
                <div className="mt-6 flex justify-center">
                  <a href="mailto:pulsemationltd@gmail.com" className="inline-flex items-center gap-2 bg-white text-[#05070A] rounded-full px-5 py-2.5 font-semibold text-sm">
                    Send portfolio
                    <span className="w-6 h-6 rounded-full bg-[#05070A] text-white grid place-items-center"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 17L17 7"/><path d="M8 7h9v9"/></svg></span>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
