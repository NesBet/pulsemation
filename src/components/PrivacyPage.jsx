import { motion } from 'framer-motion'

const sections = [
  { title: 'Information We Collect', content: 'We collect information you provide directly, such as your name, email address, and company details when you sign up or contact us. We also collect usage data including page interactions, feature usage, and performance metrics to improve our service.' },
  { title: 'How We Use Your Information', content: 'Your information is used to deliver and maintain our services, process transactions, send updates, and provide support. We may also use anonymized data for analytics and product improvement.' },
  { title: 'Data Sharing & Disclosure', content: 'We do not sell your personal information. We may share data with trusted service providers who help us operate our platform, subject to strict confidentiality agreements and compliance with applicable laws.' },
  { title: 'Data Security', content: 'We implement industry-standard encryption, access controls, and monitoring to protect your data. All data is encrypted in transit (TLS 1.3) and at rest (AES-256).' },
  { title: 'Your Rights', content: 'You have the right to access, correct, or delete your personal data. You can also object to or restrict certain processing activities. To exercise these rights, contact us at pulsemationltd@gmail.com.' },
  { title: 'Cookies', content: 'We use essential cookies for authentication and security. Optional analytics cookies help us understand usage patterns. You can manage cookie preferences in your browser settings.' },
]

export default function PrivacyPage({ onBack }) {
  return (
    <div className="min-h-screen bg-[#05070A] selection:bg-[#00E5FF] selection:text-[#05070A]">
      <div className="absolute inset-0 grid-pattern opacity-10 pointer-events-none" />
      <div className="relative max-w-[1280px] mx-auto px-4 sm:px-6 py-20 sm:py-28">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: [0.32,0.72,0,1] }}>
          <button onClick={onBack} className="inline-flex items-center gap-2 font-mono text-xs tracking-wide text-white/50 hover:text-white transition-colors mb-8 bg-white/[0.04] border border-white/10 rounded-full px-4 py-2 backdrop-blur">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
            Back to Home
          </button>

          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <span className="eyebrow mx-auto"><span className="eyebrow-dot"/> Legal</span>
              <h1 className="mt-6 font-display font-bold tracking-[-0.03em] text-white text-[clamp(28px,5vw,52px)]"><span className="gradient-text">Privacy</span> Policy</h1>
              <p className="mt-3 font-mono text-xs tracking-wide text-white/30">Last updated: May 2026</p>
            </div>

            <div className="space-y-4">
              {sections.map((section, i) => (
                <motion.div key={section.title} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: i * 0.06 }} className="rounded-[20px] bg-white/[0.04] border border-white/[0.07] p-6 sm:p-7 backdrop-blur">
                  <h2 className="font-display font-semibold text-white text-[16px] mb-2">{section.title}</h2>
                  <p className="text-white/55 leading-relaxed text-[14px]">{section.content}</p>
                </motion.div>
              ))}
            </div>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.6 }} className="mt-8 rounded-[20px] bg-white text-[#05070A] p-6 flex items-center justify-between gap-4">
              <p className="text-sm text-black/60">Questions about our privacy practices? Contact us at <a href="mailto:pulsemationltd@gmail.com" className="font-semibold text-black underline underline-offset-4">pulsemationltd@gmail.com</a></p>
              <span className="hidden sm:grid w-9 h-9 rounded-full bg-black text-white place-items-center shrink-0"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg></span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
