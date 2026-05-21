import { motion } from 'framer-motion'

const sections = [
  {
    title: 'Information We Collect',
    content: 'We collect information you provide directly, such as your name, email address, and company details when you sign up or contact us. We also collect usage data including page interactions, feature usage, and performance metrics to improve our service.',
  },
  {
    title: 'How We Use Your Information',
    content: 'Your information is used to deliver and maintain our services, process transactions, send updates, and provide support. We may also use anonymized data for analytics and product improvement.',
  },
  {
    title: 'Data Sharing & Disclosure',
    content: 'We do not sell your personal information. We may share data with trusted service providers who help us operate our platform, subject to strict confidentiality agreements and compliance with applicable laws.',
  },
  {
    title: 'Data Security',
    content: 'We implement industry-standard encryption, access controls, and monitoring to protect your data. All data is encrypted in transit (TLS 1.3) and at rest (AES-256).',
  },
  {
    title: 'Your Rights',
    content: 'You have the right to access, correct, or delete your personal data. You can also object to or restrict certain processing activities. To exercise these rights, contact us at pulsemationltd@gmail.com.',
  },
  {
    title: 'Cookies',
    content: 'We use essential cookies for authentication and security. Optional analytics cookies help us understand usage patterns. You can manage cookie preferences in your browser settings.',
  },
]

export default function PrivacyPage({ onBack }) {
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
                <span className="gradient-text">Privacy</span> Policy
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
                Questions about our privacy practices? Contact us at{' '}
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
