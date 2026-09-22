import { motion } from "framer-motion";
import { usePerformance } from "../hooks/usePerformance";

const stats = [
  { value: "10K+", label: "Hours saved", sub: "last 12 months" },
  { value: "99.9%", label: "Uptime SLA", sub: "guaranteed" },
  { value: "200+", label: "Integrations", sub: "and growing" },
  { value: "4.9★", label: "Avg. rating", sub: "from 200+ teams" },
];

const steps = [
  { num: "01", title: "Audit", desc: "We map your existing workflows to identify every automation opportunity — no stone unturned.", meta: "2–3 days" },
  { num: "02", title: "Design", desc: "Our architects design a custom pipeline blueprint tailored to your exact stack and goals.", meta: "1 week" },
  { num: "03", title: "Deploy", desc: "We deploy, monitor, and optimize — your team barely notices the transition.", meta: "zero downtime" },
  { num: "04", title: "Scale", desc: "As you grow, automation scales. New triggers, actions, and agents added continuously.", meta: "ongoing" },
];

export default function About() {
  const perf = usePerformance();
  const ease = [0.32, 0.72, 0, 1];

  const header = (
    <div className="text-center max-w-[760px] mx-auto">
      <h2 className="font-display font-bold tracking-[-0.03em] leading-[0.95] text-white text-[clamp(28px,4.8vw,56px)] text-balance">
        From audit to <span className="gradient-text">autopilot.</span>
      </h2>
      <p className="mt-4 text-[15px] leading-relaxed text-white/50 max-w-[56ch] mx-auto text-pretty">
        The method is simple. The execution is obsessive. Every phase is measured, reversible, and built to compound.
      </p>
    </div>
  );

  const content = (
    <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-10 lg:gap-14 items-start mt-14 sm:mt-16">
      {/* left */}
      <div className="lg:sticky lg:top-28">
        <h3 className="font-display font-bold tracking-[-0.025em] text-white text-[clamp(22px,3vw,32px)] leading-[1.05] text-balance">
          We don't just automate tasks.
          <br />
          <span className="gradient-text">We automate outcomes.</span>
        </h3>
        <p className="mt-4 text-[14.5px] leading-relaxed text-white/55 max-w-[52ch] text-pretty">
          Pulsemation was founded by Nehemiah Kibet who saw that most “automation” was just fancy
          if-this-then-that rules. We built a platform that actually thinks — combining process mining,
          AI agents, and deep integrations into a single managed service that learns as you scale.
        </p>

        {/* stats double row with premium cards */}
        <div className="mt-8 grid grid-cols-2 gap-3">
          {stats.map((s) => (
            <div key={s.label} className="group relative rounded-2xl bg-white/[0.04] border border-white/[0.07] p-4 sm:p-5 backdrop-blur hover:bg-white/[0.06] transition-colors">
              <div className="font-display font-bold tracking-tight text-white text-[18px] sm:text-[20px] leading-none">{s.value}</div>
              <div className="font-mono text-[11px] tracking-wide text-white/60 mt-1">{s.label}</div>
              <div className="font-mono text-[10px] tracking-wide text-white/30">{s.sub}</div>
            </div>
          ))}
        </div>

        {/* double-bezel proof image */}
        <div className="mt-6 double-bezel">
          <div className="double-bezel-inner overflow-hidden">
            <img
              src="https://picsum.photos/seed/pulsemation-team/800/520"
              alt="Team collaborating around automation pipeline"
              className="w-full h-[220px] sm:h-[260px] object-cover opacity-90"
              loading="lazy"
            />
            <div className="flex items-center justify-between px-4 py-3 bg-[#0A0C1A]">
              <span className="font-mono text-[11px] tracking-wide text-white/40">Nairobi • Remote • Global</span>
              <span className="inline-flex items-center gap-1.5 font-mono text-[11px] text-emerald-400">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" /> Building daily
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* right: timeline */}
      <div className="relative">
        <div className="absolute left-[19px] top-6 bottom-6 w-px bg-gradient-to-b from-cyan-500/30 via-violet-500/20 to-transparent hidden sm:block" />
        <div className="space-y-3">
          {steps.map((step, i) => (
            <div key={step.num} className="group relative flex gap-4 sm:gap-5">
              <div className="relative shrink-0">
                <div className="w-10 h-10 rounded-full bg-white text-[#05070A] flex items-center justify-center font-mono text-xs font-bold shadow-[0_8px_24px_rgba(0,0,0,0.3)] ring-4 ring-[#05070A] group-hover:scale-105 transition-transform duration-300">
                  {step.num}
                </div>
                {i !== steps.length - 1 && (
                  <div className="hidden sm:block absolute left-1/2 -translate-x-1/2 top-10 w-px h-6 bg-gradient-to-b from-white/30 to-transparent" />
                )}
              </div>
              <div className="flex-1 rounded-[20px] bg-white/[0.04] border border-white/[0.07] p-5 sm:p-6 backdrop-blur hover:bg-white/[0.065] hover:border-white/10 transition-all duration-300">
                <div className="flex items-start justify-between gap-3">
                  <h4 className="font-display font-semibold tracking-tight text-white text-[16px]">{step.title}</h4>
                  <span className="shrink-0 font-mono text-[10px] tracking-[0.14em] uppercase text-white/35 border border-white/10 rounded-full px-2.5 py-1">{step.meta}</span>
                </div>
                <p className="mt-2 text-[13.5px] leading-relaxed text-white/55">{step.desc}</p>
                <div className="mt-4 h-1 rounded-full bg-white/10 overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-cyan-400 to-violet-500 rounded-full" style={{ width: `${(i + 1) * 25}%` }} />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 rounded-2xl bg-gradient-to-br from-violet-600 via-indigo-600 to-cyan-500 p-[1px]">
          <div className="rounded-[15px] bg-[#0A0C1A] px-5 py-4 flex items-center justify-between gap-4">
            <div>
              <div className="font-display font-semibold text-white text-sm">Ready to start?</div>
              <div className="font-mono text-xs text-white/50">Free audit • No commitment • 72h response</div>
            </div>
            <a href="#contact" className="shrink-0 inline-flex items-center gap-2 bg-white text-[#05070A] rounded-full px-4 py-2 font-semibold text-xs hover:bg-white/90 transition-colors">
              Talk to us
              <span className="w-6 h-6 rounded-full bg-[#05070A] text-white grid place-items-center">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 17L17 7"/><path d="M8 7h9v9"/></svg>
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );

  if (perf.reducedMotion) {
    return (
      <section id="about" className="relative py-20 sm:py-28 bg-[#05070A]">
        <div className="absolute inset-0 grid-pattern opacity-10 pointer-events-none" />
        <div className="relative max-w-[1280px] mx-auto px-4 sm:px-6">
          {header}
          {content}
        </div>
      </section>
    );
  }

  return (
    <section id="about" className="relative py-20 sm:py-28 bg-[#05070A] overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-10 pointer-events-none" />
      <div className="absolute right-0 top-20 w-[600px] h-[600px] bg-[radial-gradient(circle_at_center,rgba(124,58,237,0.08),transparent_70%)] pointer-events-none" />
      <div className="relative max-w-[1280px] mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 24, filter: 'blur(8px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease }}
        >
          {header}
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}
        >
          <motion.div variants={{ hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0, transition: { duration: 0.7, ease } } }}>
            <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-10 lg:gap-14 items-start mt-14 sm:mt-16">
              {/* left */}
              <motion.div variants={{ hidden: { opacity: 0, x: -18 }, show: { opacity: 1, x: 0, transition: { duration: 0.7, ease } } }} className="lg:sticky lg:top-28">
                <h3 className="font-display font-bold tracking-[-0.025em] text-white text-[clamp(22px,3vw,32px)] leading-[1.05] text-balance">
                  We don't just automate tasks.<br /><span className="gradient-text">We automate outcomes.</span>
                </h3>
                <p className="mt-4 text-[14.5px] leading-relaxed text-white/55 max-w-[52ch] text-pretty">
                  Pulsemation was founded by Nehemiah Kibet who saw that most “automation” was just fancy if-this-then-that rules. We built a platform that actually thinks — combining process mining, AI agents, and deep integrations into a single managed service that learns as you scale.
                </p>
                <div className="mt-8 grid grid-cols-2 gap-3">
                  {stats.map((s, idx) => (
                    <motion.div key={s.label} variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0, transition: { delay: idx * 0.05, duration: 0.5 } } }} className="rounded-2xl bg-white/[0.04] border border-white/[0.07] p-4 sm:p-5 backdrop-blur">
                      <div className="font-display font-bold tracking-tight text-white text-[18px] leading-none">{s.value}</div>
                      <div className="font-mono text-[11px] tracking-wide text-white/60 mt-1">{s.label}</div>
                      <div className="font-mono text-[10px] tracking-wide text-white/30">{s.sub}</div>
                    </motion.div>
                  ))}
                </div>
                <div className="mt-6 double-bezel">
                  <div className="double-bezel-inner overflow-hidden">
                    <img src="https://picsum.photos/seed/pulsemation-team/800/520" alt="Team collaborating" className="w-full h-[220px] sm:h-[260px] object-cover opacity-90" loading="lazy" />
                    <div className="flex items-center justify-between px-4 py-3 bg-[#0A0C1A]">
                      <span className="font-mono text-[11px] tracking-wide text-white/40">Nairobi • Remote • Global</span>
                      <span className="inline-flex items-center gap-1.5 font-mono text-[11px] text-emerald-400"><span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" /> Building daily</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* right */}
              <motion.div variants={{ hidden: { opacity: 0, x: 18 }, show: { opacity: 1, x: 0, transition: { duration: 0.7, ease } } }} className="relative">
                <div className="absolute left-[19px] top-6 bottom-6 w-px bg-gradient-to-b from-cyan-500/30 via-violet-500/20 to-transparent hidden sm:block" />
                <div className="space-y-3">
                  {steps.map((step, i) => (
                    <motion.div key={step.num} variants={{ hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.5, ease } } }} className="group relative flex gap-4 sm:gap-5">
                      <div className="relative shrink-0">
                        <div className="w-10 h-10 rounded-full bg-white text-[#05070A] flex items-center justify-center font-mono text-xs font-bold shadow-[0_8px_24px_rgba(0,0,0,0.3)] ring-4 ring-[#05070A] group-hover:scale-105 transition-transform duration-300">{step.num}</div>
                      </div>
                      <div className="flex-1 rounded-[20px] bg-white/[0.04] border border-white/[0.07] p-5 sm:p-6 backdrop-blur hover:bg-white/[0.065] transition-colors">
                        <div className="flex items-start justify-between gap-3"><h4 className="font-display font-semibold tracking-tight text-white text-[16px]">{step.title}</h4><span className="shrink-0 font-mono text-[10px] tracking-[0.14em] uppercase text-white/35 border border-white/10 rounded-full px-2.5 py-1">{step.meta}</span></div>
                        <p className="mt-2 text-[13.5px] leading-relaxed text-white/55">{step.desc}</p>
                        <div className="mt-4 h-1 rounded-full bg-white/10 overflow-hidden"><motion.div initial={{ width: 0 }} whileInView={{ width: `${(i + 1) * 25}%` }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.4 + i * 0.1, ease }} className="h-full bg-gradient-to-r from-cyan-400 to-violet-500 rounded-full" /></div>
                      </div>
                    </motion.div>
                  ))}
                </div>
                <div className="mt-6 rounded-2xl bg-gradient-to-br from-violet-600 via-indigo-600 to-cyan-500 p-[1px]">
                  <div className="rounded-[15px] bg-[#0A0C1A] px-5 py-4 flex items-center justify-between gap-4">
                    <div><div className="font-display font-semibold text-white text-sm">Ready to start?</div><div className="font-mono text-xs text-white/50">Free audit • No commitment • 72h response</div></div>
                    <a href="#contact" className="shrink-0 inline-flex items-center gap-2 bg-white text-[#05070A] rounded-full px-4 py-2 font-semibold text-xs hover:bg-white/90 transition-colors">Talk to us<span className="w-6 h-6 rounded-full bg-[#05070A] text-white grid place-items-center"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 17L17 7"/><path d="M8 7h9v9"/></svg></span></a>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
