import { motion } from 'framer-motion'

export default function CareersPage({ onBack }) {
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
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-cyan-400">Careers</span>
            <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
              Join the <span className="gradient-text">mission</span>
            </h1>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-2xl mx-auto text-center p-10 rounded-2xl border border-white/[0.04] bg-white/[0.02]"
          >
            <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
              There are no open positions right now, but we're always excited to meet talented
              people. Feel free to send your resume to{' '}
              <a href="mailto:pulsemationltd@gmail.com" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                pulsemationltd@gmail.com
              </a>{' '}
              and we'll keep you in mind when something opens up.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
