import { motion } from 'framer-motion'

const stats = [
  { value: '10K+', label: 'Hours saved' },
  { value: '99.9%', label: 'Uptime SLA' },
  { value: '200+', label: 'Integrations' },
  { value: '4.9★', label: 'Avg. rating' },
]

export default function AboutPage({ onBack }) {
  return (
    <div className="min-h-screen bg-[#05070A] selection:bg-[#00E5FF] selection:text-[#05070A]">
      <div className="absolute inset-0 grid-pattern opacity-10 pointer-events-none" />
      <div className="relative max-w-[1280px] mx-auto px-4 sm:px-6 py-20 sm:py-28">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: [0.32,0.72,0,1] }}>
          <button onClick={onBack} className="inline-flex items-center gap-2 font-mono text-xs tracking-wide text-white/50 hover:text-white transition-colors mb-8 bg-white/[0.04] border border-white/10 rounded-full px-4 py-2 backdrop-blur">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
            Back to Home
          </button>

          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="eyebrow mx-auto"><span className="eyebrow-dot"/> About</span>
            <h1 className="mt-6 font-display font-bold tracking-[-0.03em] leading-[0.95] text-white text-[clamp(28px,5vw,56px)] text-balance">
              We build the <span className="gradient-text">future of work</span>
            </h1>
            <p className="mt-6 text-white/55 leading-relaxed text-[15px] max-w-[60ch] mx-auto text-pretty">
              Pulsemation was founded by Nehemiah Kibet with a singular mission: replace brittle,
              manual workflows with intelligent, self-optimizing automation. We combine process mining,
              AI agents, and deep integrations into a single, managed service that adapts as you grow.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-16 max-w-3xl mx-auto">
            {stats.map((s) => (
              <motion.div key={s.label} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }} className="text-center p-6 rounded-[20px] bg-white/[0.04] border border-white/[0.07] backdrop-blur">
                <div className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-white">{s.value}</div>
                <div className="font-mono text-xs text-white/40 mt-1 tracking-wide">{s.label}</div>
              </motion.div>
            ))}
          </div>

          <div className="max-w-3xl mx-auto space-y-8">
            <div className="rounded-[24px] bg-white/[0.04] border border-white/[0.07] p-6 sm:p-8 backdrop-blur">
              <h2 className="font-display font-semibold text-white text-xl mb-3">Our Mission</h2>
              <p className="text-white/55 leading-relaxed text-sm">We believe that every repetitive task is an opportunity for innovation. Our platform doesn't just follow rules — it learns, adapts, and improves over time, turning your operations into a competitive advantage.</p>
            </div>
            <div className="rounded-[24px] bg-white/[0.04] border border-white/[0.07] p-6 sm:p-8 backdrop-blur">
              <h2 className="font-display font-semibold text-white text-xl mb-3">Our Approach</h2>
              <p className="text-white/55 leading-relaxed text-sm">From audit to autopilot, every engagement follows a proven four-phase methodology. We start by mapping your existing workflows, design a custom pipeline, deploy with zero disruption, and scale continuously as your needs evolve.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
