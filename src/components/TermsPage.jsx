import { motion } from 'framer-motion'

const sections = [
  { title: 'Acceptance of Terms', content: "By accessing or using Pulsemation's services, you agree to be bound by these Terms of Service. If you do not agree, please do not use our services." },
  { title: 'Services Description', content: 'Pulsemation provides AI-powered workflow automation, process mining, and integration services. We reserve the right to modify, suspend, or discontinue any aspect of our services with reasonable notice.' },
  { title: 'User Obligations', content: 'You agree to use our services in compliance with all applicable laws and regulations. You must not misuse our platform, interfere with its operation, or attempt to access areas without authorization.' },
  { title: 'Intellectual Property', content: 'All content, trademarks, and intellectual property on our platform are owned by Pulsemation or our licensors. You may not reproduce, distribute, or create derivative works without our express permission.' },
  { title: 'Limitation of Liability', content: 'Pulsemation shall not be liable for any indirect, incidental, or consequential damages arising from your use of our services. Our total liability is limited to the amount paid by you in the preceding 12 months.' },
  { title: 'Termination', content: 'Either party may terminate this agreement with 30 days written notice. We may terminate immediately if you breach any material term. Upon termination, your access to the services will cease.' },
  { title: 'Governing Law', content: 'These terms are governed by the laws of the Republic of Kenya. Any disputes shall be resolved through binding arbitration in accordance with the rules of the Nairobi Centre for International Arbitration.' },
]

export default function TermsPage({ onBack }) {
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
              <h1 className="mt-6 font-display font-bold tracking-[-0.03em] text-white text-[clamp(28px,5vw,52px)]"><span className="gradient-text">Terms</span> of Service</h1>
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
              <p className="text-sm text-black/60">Questions about these terms? Contact us at <a href="mailto:pulsemationltd@gmail.com" className="font-semibold text-black underline underline-offset-4">pulsemationltd@gmail.com</a></p>
              <span className="hidden sm:grid w-9 h-9 rounded-full bg-black text-white place-items-center shrink-0"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg></span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
