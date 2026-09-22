import { motion } from 'framer-motion'
import { usePerformance } from '../hooks/usePerformance'
import SpotlightCard from './SpotlightCard'

const services = [
  {
    k: '01',
    title: 'Pipeline Automation',
    desc: 'End-to-end workflow automation connecting tools, APIs, and data sources into pipelines that run on autopilot.',
    accent: 'from-cyan-400 to-blue-500',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12" /></svg>
    ),
    metric: '— 62% faster ops',
    span: 'lg:col-span-7',
  },
  {
    k: '02',
    title: 'AI Agents',
    desc: 'Intelligent agents that reason, decide, and act across your stack — from support to data enrichment.',
    accent: 'from-violet-500 to-fuchsia-500',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M12 2a4 4 0 014 4c0 2-2 4-4 4s-4-2-4-4 2-4 4-4z"/><path d="M12 12c-3.3 0-6 2.7-6 6v2h12v-2c0-3.3-2.7-6-6-6z"/><circle cx="18" cy="8" r="2"/><circle cx="6" cy="8" r="2"/></svg>
    ),
    metric: '24/7 autonomous',
    span: 'lg:col-span-5',
  },
  {
    k: '03',
    title: 'Process Mining',
    desc: 'Discover inefficiencies and bottlenecks with AI-driven process analysis and optimization.',
    accent: 'from-emerald-400 to-teal-500',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/></svg>
    ),
    metric: '3.2× visibility',
    span: 'lg:col-span-5',
  },
  {
    k: '04',
    title: 'Integration Hub',
    desc: 'Unify your SaaS stack with pre-built connectors and custom integrations that sync data in real time.',
    accent: 'from-amber-400 to-orange-500',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><circle cx="12" cy="12" r="3"/><path d="M12 2v4"/><path d="M12 18v4"/><path d="M2 12h4"/><path d="M18 12h4"/></svg>
    ),
    metric: '200+ platforms',
    span: 'lg:col-span-7',
  },
]

export default function Services() {
  const perf = usePerformance()

  const header = (
    <div className="max-w-[1280px] mx-auto">
      <div className="max-w-[720px]">
        <h2 className="font-display font-bold tracking-[-0.03em] leading-[0.95] text-white text-[clamp(28px,4.8vw,56px)] text-balance">
          Enterprise automation,
          <br />
          <span className="gradient-text">reimagined.</span>
        </h2>
        <p className="mt-4 text-[15px] leading-relaxed text-white/55 max-w-[56ch] text-pretty">
          From small teams to large enterprises, our automation platform adapts to your workflow — no code, no chaos, just outcomes.
        </p>
      </div>
    </div>
  )

  const grid = (
    <div className="grid grid-cols-12 gap-4 sm:gap-5">
      {services.map((s, i) => {
        const isFeatured = i === 0
        return (
          <SpotlightCard
            key={s.title}
            className={`group relative col-span-12 ${s.span} rounded-[28px] bg-white/[0.03] border border-white/[0.07] overflow-hidden backdrop-blur-xl
              hover:bg-white/[0.05] hover:border-white/10 transition-all duration-500
              ${isFeatured ? 'min-h-[360px]' : 'min-h-[280px]'}`}
          >
            {/* mesh gradient bg for featured + tint for others */}
            <div className={`absolute inset-0 opacity-[0.07] bg-gradient-to-br ${s.accent} ${isFeatured ? 'opacity-[0.12]' : ''}`} />
            <div className="absolute inset-0 bg-gradient-to-b from-white/[0.04] to-transparent pointer-events-none" />
            {/* decorative grid */}
            <div className="absolute inset-0 opacity-[0.035]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)', backgroundSize: '24px 24px' }} />

            <div className={`relative p-6 sm:p-8 flex flex-col h-full ${isFeatured ? 'gap-6' : ''}`}>
              <div className="flex items-start justify-between gap-4">
                <div className={`w-11 h-11 rounded-2xl bg-gradient-to-br ${s.accent} flex items-center justify-center text-white shadow-[0_8px_24px_rgba(0,0,0,0.25)]`}>
                  {s.icon}
                </div>
                <span className="font-mono text-[11px] tracking-[0.14em] text-white/30 border border-white/10 rounded-full px-2.5 py-1">{s.k}</span>
              </div>

              <div className="mt-5 flex-1">
                <h3 className="font-display font-semibold tracking-tight text-white text-[19px] sm:text-[20px] leading-tight">{s.title}</h3>
                <p className="mt-2.5 text-[13.5px] leading-relaxed text-white/55 max-w-[34ch]">{s.desc}</p>
              </div>

              {/* bottom meta + visual */}
              <div className="mt-6 flex items-center justify-between gap-4">
                <span className="inline-flex items-center gap-2 font-mono text-[11px] tracking-wide text-white/60 bg-white/[0.06] border border-white/10 rounded-full px-3 py-1.5">
                  <span className={`w-1.5 h-1.5 rounded-full bg-gradient-to-br ${s.accent}`} />
                  {s.metric}
                </span>
                <span className="w-8 h-8 rounded-full bg-white text-[#05070A] flex items-center justify-center group-hover:translate-x-0.5 transition-transform duration-300">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 17L17 7"/><path d="M8 7h9v9"/></svg>
                </span>
              </div>

              {/* featured extra visual */}
              {isFeatured && (
                <div className="hidden sm:block absolute right-6 bottom-6 top-28 w-[46%] rounded-2xl bg-[#05070A]/70 border border-white/[0.06] overflow-hidden backdrop-blur-xl">
                  <div className="h-8 flex items-center gap-1.5 px-3 border-b border-white/[0.06] bg-white/[0.02]">
                    <span className="w-2.5 h-2.5 rounded-full bg-white/15" />
                    <span className="w-2.5 h-2.5 rounded-full bg-white/15" />
                    <span className="w-2.5 h-2.5 rounded-full bg-white/15" />
                    <span className="ml-auto font-mono text-[10px] text-white/20">pipeline.run</span>
                  </div>
                  <div className="p-3 space-y-2 font-mono text-[11px]">
                    <div className="flex justify-between text-white/60"><span>● ingest</span><span className="text-emerald-400">done 12ms</span></div>
                    <div className="flex justify-between text-white/60"><span>◐ enrich</span><span className="text-cyan-400">running</span></div>
                    <div className="flex justify-between text-white/60"><span>○ act</span><span className="text-white/20">queued</span></div>
                    <div className="mt-2 h-1 rounded-full bg-white/10 overflow-hidden"><div className="h-full w-[68%] bg-gradient-to-r from-cyan-400 to-violet-500 rounded-full" /></div>
                  </div>
                </div>
              )}
            </div>
          </SpotlightCard>
        )
      })}
    </div>
  )

  if (perf.reducedMotion) {
    return (
      <section id="services" className="relative py-20 sm:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-950/5 to-transparent pointer-events-none" />
        <div className="absolute inset-0 grid-pattern opacity-20 pointer-events-none" />
        <div className="relative max-w-[1280px] mx-auto px-4 sm:px-6">
          {header}
          <div className="mt-10 sm:mt-12">{grid}</div>
          <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              { v: '62%', l: 'Manual work cut' },
              { v: '4.2×', l: 'Faster delivery' },
              { v: '99.9%', l: 'Uptime SLA' },
              { v: '<47ms', l: 'Avg latency' },
            ].map((s) => (
              <div key={s.l} className="rounded-2xl bg-white/[0.03] border border-white/[0.06] px-4 py-4 text-center">
                <div className="font-display font-bold text-white">{s.v}</div>
                <div className="font-mono text-[11px] text-white/40">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="services" className="relative py-20 sm:py-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-950/5 to-transparent pointer-events-none" />
      <div className="absolute inset-0 grid-pattern opacity-20 pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[radial-gradient(ellipse_at_center,rgba(0,229,255,0.06),transparent_70%)] pointer-events-none" />

      <div className="relative max-w-[1280px] mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 24, filter: 'blur(8px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1] }}
        >
          {header}
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}
          className="mt-10 sm:mt-12"
        >
          <div className="grid grid-cols-12 gap-4 sm:gap-5">
            {services.map((s, i) => {
              const isFeatured = i === 0
              return (
                <motion.div
                  key={s.title}
                  variants={{ hidden: { opacity: 0, y: 22, filter: 'blur(6px)' }, show: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.7, ease: [0.32, 0.72, 0, 1] } } }}
                  className={`col-span-12 ${s.span}`}
                >
                  <SpotlightCard
                    className={`group relative h-full rounded-[28px] bg-white/[0.03] border border-white/[0.07] overflow-hidden backdrop-blur-xl hover:bg-white/[0.05] hover:border-white/10 transition-all duration-500 ${isFeatured ? 'min-h-[360px]' : 'min-h-[280px]'}`}
                  >
                    <div className={`absolute inset-0 opacity-[0.07] bg-gradient-to-br ${s.accent} ${isFeatured ? 'opacity-[0.12]' : ''}`} />
                    <div className="absolute inset-0 bg-gradient-to-b from-white/[0.04] to-transparent pointer-events-none" />
                    <div className="absolute inset-0 opacity-[0.035]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
                    <div className={`relative p-6 sm:p-8 flex flex-col h-full ${isFeatured ? 'gap-6' : ''}`}>
                      <div className="flex items-start justify-between gap-4">
                        <div className={`w-11 h-11 rounded-2xl bg-gradient-to-br ${s.accent} flex items-center justify-center text-white shadow-[0_8px_24px_rgba(0,0,0,0.25)]`}>{s.icon}</div>
                        <span className="font-mono text-[11px] tracking-[0.14em] text-white/30 border border-white/10 rounded-full px-2.5 py-1">{s.k}</span>
                      </div>
                      <div className="mt-5 flex-1">
                        <h3 className="font-display font-semibold tracking-tight text-white text-[19px] sm:text-[20px] leading-tight">{s.title}</h3>
                        <p className="mt-2.5 text-[13.5px] leading-relaxed text-white/55 max-w-[34ch]">{s.desc}</p>
                      </div>
                      <div className="mt-6 flex items-center justify-between gap-4">
                        <span className="inline-flex items-center gap-2 font-mono text-[11px] tracking-wide text-white/60 bg-white/[0.06] border border-white/10 rounded-full px-3 py-1.5">
                          <span className={`w-1.5 h-1.5 rounded-full bg-gradient-to-br ${s.accent}`} />{s.metric}
                        </span>
                        <span className="w-8 h-8 rounded-full bg-white text-[#05070A] flex items-center justify-center group-hover:translate-x-0.5 transition-transform duration-300">
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 17L17 7"/><path d="M8 7h9v9"/></svg>
                        </span>
                      </div>
                      {isFeatured && (
                        <div className="hidden sm:block absolute right-6 bottom-6 top-28 w-[46%] rounded-2xl bg-[#05070A]/70 border border-white/[0.06] overflow-hidden backdrop-blur-xl">
                          <div className="h-8 flex items-center gap-1.5 px-3 border-b border-white/[0.06] bg-white/[0.02]">
                            <span className="w-2.5 h-2.5 rounded-full bg-white/15" />
                            <span className="w-2.5 h-2.5 rounded-full bg-white/15" />
                            <span className="w-2.5 h-2.5 rounded-full bg-white/15" />
                            <span className="ml-auto font-mono text-[10px] text-white/20">pipeline.run</span>
                          </div>
                          <div className="p-3 space-y-2 font-mono text-[11px]">
                            <div className="flex justify-between text-white/60"><span>● ingest</span><span className="text-emerald-400">done 12ms</span></div>
                            <div className="flex justify-between text-white/60"><span>◐ enrich</span><span className="text-cyan-400">running</span></div>
                            <div className="flex justify-between text-white/60"><span>○ act</span><span className="text-white/20">queued</span></div>
                            <div className="mt-2 h-1 rounded-full bg-white/10 overflow-hidden"><div className="h-full w-[68%] bg-gradient-to-r from-cyan-400 to-violet-500 rounded-full" /></div>
                          </div>
                        </div>
                      )}
                    </div>
                  </SpotlightCard>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3"
        >
          {[
            { v: '62%', l: 'Manual work cut' },
            { v: '4.2×', l: 'Faster delivery' },
            { v: '99.9%', l: 'Uptime SLA' },
            { v: '<47ms', l: 'Avg latency' },
          ].map((s) => (
            <div key={s.l} className="rounded-2xl bg-white/[0.03] border border-white/[0.06] px-4 py-4 text-center backdrop-blur">
              <div className="font-display font-bold text-white tracking-tight">{s.v}</div>
              <div className="font-mono text-[11px] tracking-wide text-white/40">{s.l}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
