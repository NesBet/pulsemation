import { motion } from 'framer-motion'

const sections = [
  {
    title: 'Acceptance of Terms',
    content: "By accessing or using Pulsemation's services, you agree to be bound by these Terms of Service. If you do not agree, please do not use our services.",
  },
  {
    title: 'Services Description',
    content: 'Pulsemation provides AI-powered workflow automation, process mining, and integration services. We reserve the right to modify, suspend, or discontinue any aspect of our services with reasonable notice.',
  },
  {
    title: 'User Obligations',
    content: 'You agree to use our services in compliance with all applicable laws and regulations. You must not misuse our platform, interfere with its operation, or attempt to access areas without authorization.',
  },
  {
    title: 'Intellectual Property',
    content: 'All content, trademarks, and intellectual property on our platform are owned by Pulsemation or our licensors. You may not reproduce, distribute, or create derivative works without our express permission.',
  },
  {
    title: 'Limitation of Liability',
    content: 'Pulsemation shall not be liable for any indirect, incidental, or consequential damages arising from your use of our services. Our total liability is limited to the amount paid by you in the preceding 12 months.',
  },
  {
    title: 'Termination',
    content: 'Either party may terminate this agreement with 30 days written notice. We may terminate immediately if you breach any material term. Upon termination, your access to the services will cease.',
  },
  {
    title: 'Governing Law',
    content: 'These terms are governed by the laws of the Republic of Kenya. Any disputes shall be resolved through binding arbitration in accordance with the rules of the Nairobi Centre for International Arbitration.',
  },
]

export default function TermsPage({ onBack }) {
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

          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-cyan-400">Legal</span>
              <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
                <span className="gradient-text">Terms</span> of Service
              </h1>
              <p className="mt-4 text-gray-500 text-sm">Last updated: May 2026</p>
            </div>

            <div className="space-y-10">
              {sections.map((section, i) => (
                <motion.div
                  key={section.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <h2 className="text-xl font-semibold text-white mb-3">{section.title}</h2>
                  <p className="text-gray-400 leading-relaxed text-sm sm:text-base">{section.content}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="mt-12 p-6 rounded-2xl border border-white/[0.04] bg-white/[0.02]"
            >
              <p className="text-gray-500 text-sm">
                Questions about these terms? Contact us at{' '}
                <a href="mailto:pulsemationltd@gmail.com" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                  pulsemationltd@gmail.com
                </a>
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
