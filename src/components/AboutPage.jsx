import { motion } from 'framer-motion'

const stats = [
  { value: '10K+', label: 'Hours saved' },
  { value: '99.9%', label: 'Uptime SLA' },
  { value: '200+', label: 'Integrations' },
  { value: '4.9★', label: 'Avg. rating' },
]

export default function AboutPage({ onBack }) {
  return (
    <div className="min-h-screen bg-[#0a0a1a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-20 sm:py-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <button
            onClick={onBack}
            className="text-sm text-gray-500 hover:text-white transition-colors mb-8 flex items-center gap-1"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M12 19l-7-7 7-7"/>
            </svg>
            Back to Home
          </button>

          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-cyan-400">About</span>
            <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
              We build the <span className="gradient-text">future of work</span>
            </h1>
            <p className="mt-6 text-gray-400 leading-relaxed text-sm sm:text-base">
              Pulsemation was founded by Nehemiah Kibet with a singular mission: replace brittle,
              manual workflows with intelligent, self-optimizing automation. We combine process mining,
              AI agents, and deep integrations into a single, managed service that adapts as you grow.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 mb-20">
            {stats.map((s) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-center p-6 rounded-2xl border border-white/[0.04] bg-white/[0.02]"
              >
                <div className="text-2xl sm:text-3xl font-bold gradient-text">{s.value}</div>
                <div className="text-xs sm:text-sm text-gray-500 mt-1">{s.label}</div>
              </motion.div>
            ))}
          </div>

          <div className="max-w-3xl mx-auto space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="text-2xl font-bold text-white mb-4">Our Mission</h2>
              <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
                We believe that every repetitive task is an opportunity for innovation. Our platform
                doesn't just follow rules — it learns, adapts, and improves over time, turning your
                operations into a competitive advantage.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h2 className="text-2xl font-bold text-white mb-4">Our Approach</h2>
              <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
                From audit to autopilot, every engagement follows a proven four-phase methodology.
                We start by mapping your existing workflows, design a custom pipeline, deploy with
                zero disruption, and scale continuously as your needs evolve.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
