import { Suspense, useState, useEffect, useCallback } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import { motion, useScroll, useTransform } from "framer-motion";
import ParticleField from "./ParticleField";
import FloatingGeometry from "./FloatingGeometry";
import { usePerformance } from "../hooks/usePerformance";

const words = ["pulse", "connect", "work", "interact", "run"];

function Typewriter() {
  const [text, setText] = useState("");
  const [wordIdx, setWordIdx] = useState(0);
  const [phase, setPhase] = useState("typing");

  const tick = useCallback(() => {
    const target = words[wordIdx];
    if (phase === "typing") {
      if (text.length < target.length) setText(target.slice(0, text.length + 1));
      else setPhase("pause");
    } else if (phase === "pause") setPhase("erasing");
    else if (phase === "erasing") {
      if (text.length > 0) setText(text.slice(0, -1));
      else setPhase("wait");
    } else {
      setWordIdx((wordIdx + 1) % words.length);
      setPhase("typing");
    }
  }, [text, wordIdx, phase]);

  useEffect(() => {
    const delays = { typing: 120, pause: 1600, erasing: 70, wait: 380 };
    const id = setTimeout(tick, delays[phase]);
    return () => clearTimeout(id);
  }, [tick, phase]);

  const maxLen = Math.max(...words.map((w) => w.length));
  return (
    <span className="gradient-text inline-block">
      <span style={{ display: "inline-block", minWidth: `${maxLen}ch`, textAlign: "left" }}>
        {text}
        <span className="inline-block w-[3px] h-[1em] bg-[#00E5FF] ml-1 align-middle translate-y-[2px] opacity-80 animate-pulse" />
      </span>
    </span>
  );
}

function Scene() {
  const perf = usePerformance();
  return (
    <>
      <ambientLight intensity={0.45} />
      <directionalLight position={[5, 5, 5]} intensity={0.45} />
      <ParticleField />
      <FloatingGeometry />
      {perf.enableEnvironment && (
        <Suspense fallback={null}>
          <Environment preset="night" />
        </Suspense>
      )}
      {perf.enableOrbitControls && (
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.25}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
      )}
    </>
  );
}

export default function Hero3D() {
  const perf = usePerformance();
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 600], [0, 80]);
  const heroOpacity = useTransform(scrollY, [0, 400], [1, 0]);
  const heroScale = useTransform(scrollY, [0, 600], [1, 0.97]);

  const ease = [0.32, 0.72, 0, 1];

  return (
    <section className="relative min-h-[100dvh] flex flex-col overflow-hidden bg-[#05070A]">
      {/* ambient auras */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 -left-32 w-[720px] h-[720px] rounded-full bg-[radial-gradient(circle_at_center,rgba(0,229,255,0.12),transparent_70%)] blur-[1px]" />
        <div className="absolute top-10 right-0 w-[640px] h-[640px] rounded-full bg-[radial-gradient(circle_at_center,rgba(124,58,237,0.14),transparent_70%)] blur-[1px]" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[900px] h-[420px] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(0,229,255,0.06),transparent_70%)]" />
        <div className="absolute inset-0 grid-pattern opacity-[0.35]" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#05070A]" />
      </div>

      {/* 3D canvas */}
      <div className="absolute inset-0 opacity-[0.55]">
        <Canvas
          camera={{ position: [0, 0, 6], fov: 45 }}
          dpr={perf.tier === "low" ? [1, 1.5] : [1, 2]}
          gl={{ powerPreference: "high-performance", antialias: perf.tier === "high" }}
        >
          <Suspense fallback={null}>
            <Scene />
          </Suspense>
        </Canvas>
      </div>

      {/* main content */}
      <motion.div
        style={perf.reducedMotion ? {} : { y: heroY, opacity: heroOpacity, scale: heroScale }}
        className="relative z-10 flex-1 max-w-[1280px] mx-auto w-full px-4 sm:px-6 pt-[104px] sm:pt-[120px] pb-10 sm:pb-8 flex flex-col justify-center"
      >
        <div className="grid lg:grid-cols-[1.05fr_0.9fr] gap-10 lg:gap-8 items-center">
          {/* left copy */}
          <div>
            <motion.div
              initial={perf.reducedMotion ? false : { opacity: 0, y: 16, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.8, ease }}
            >
              <span className="eyebrow">
                <span className="eyebrow-dot" />
                Heartbeat of Automation
                <span className="hidden sm:inline-flex items-center gap-1.5 ml-2 pl-2 border-l border-white/10">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="font-mono text-[10px] tracking-wide text-white/60">LIVE PIPELINES</span>
                </span>
              </span>
            </motion.div>

            <motion.h1
              initial={perf.reducedMotion ? false : { opacity: 0, y: 24, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.9, delay: 0.08, ease }}
              className="font-display font-bold tracking-[-0.04em] leading-[0.9] text-white mt-6 sm:mt-8 text-balance"
              style={{ fontSize: "clamp(2.6rem, 6.2vw, 5.25rem)" }}
            >
              <span className="block">Workflows that</span>
              <span className="block">
                <Typewriter />
              </span>
              <span className="block text-white/90">with intelligence.</span>
            </motion.h1>

            <motion.p
              initial={perf.reducedMotion ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.22, ease }}
              className="mt-5 sm:mt-6 text-[15px] sm:text-[17px] leading-relaxed text-white/60 max-w-[52ch] text-pretty"
            >
              Pulsemation builds custom AI automation pipelines that eliminate manual work, accelerate
              operations, and scale with your business — from audit to autopilot.
            </motion.p>

            <motion.div
              initial={perf.reducedMotion ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.32, ease }}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <a
                href="#contact"
                className="group inline-flex items-center gap-3 pl-6 pr-1.5 py-1.5 rounded-full bg-white text-[#05070A] font-semibold text-[14px] tracking-tight hover:bg-white/95 transition-all active:scale-[0.98]"
              >
                Start Your Automation
                <span className="w-9 h-9 rounded-full bg-[#05070A] text-white flex items-center justify-center group-hover:translate-x-0.5 transition-transform duration-300 ease-[cubic-bezier(0.32,0.72,0,1)]">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M7 17L17 7" /><path d="M8 7h9v9" /></svg>
                </span>
              </a>
              <a
                href="#services"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/[0.06] border border-white/10 text-white/80 font-medium text-[14px] backdrop-blur-xl hover:bg-white/[0.09] hover:text-white hover:border-white/15 transition-all active:scale-[0.98]"
              >
                <span className="w-2 h-2 rounded-full bg-white/60" />
                See Services
              </a>
              <span className="hidden sm:inline-flex items-center gap-2 text-xs text-white/30 font-mono ml-2">
                <span className="w-px h-4 bg-white/10" />
                No credit card • Free audit
              </span>
            </motion.div>

            {/* trust micro */}
            <motion.div
              initial={perf.reducedMotion ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="mt-10 hidden sm:flex items-center gap-6"
            >
              <div className="flex -space-x-2">
                {[0, 1, 2].map((i) => (
                  <img
                    key={i}
                    src={`https://i.pravatar.cc/100?img=${12 + i * 7}`}
                    alt=""
                    className="w-8 h-8 rounded-full object-cover ring-2 ring-[#05070A] ring-offset-0"
                  />
                ))}
                <div className="w-8 h-8 rounded-full bg-white text-[#05070A] ring-2 ring-[#05070A] flex items-center justify-center font-mono text-[10px] font-bold">+2k</div>
              </div>
              <div className="text-xs leading-tight">
                <div className="flex items-center gap-1 text-amber-400">
                  {[0, 1, 2, 3, 4].map((i) => (
                    <svg key={i} width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" /></svg>
                  ))}
                  <span className="text-white font-semibold ml-1">4.9/5</span>
                </div>
                <div className="text-white/40 font-mono text-[11px]">Trusted by 200+ teams</div>
              </div>
              <div className="hidden lg:flex items-center gap-3 ml-2 pl-6 border-l border-white/10">
                {['Workflows', 'Industrial', 'Home'].map((b) => (
                  <span key={b} className="font-mono text-[10px] tracking-[0.14em] uppercase text-white/25 border border-white/10 rounded-full px-3 py-1">{b}</span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* right: preview card */}
          <motion.div
            initial={perf.reducedMotion ? false : { opacity: 0, y: 32, rotate: 0.6 }}
            animate={{ opacity: 1, y: 0, rotate: 0 }}
            transition={{ duration: 1, delay: 0.22, ease }}
            className="relative lg:pl-6"
          >
            {/* glow behind */}
            <div className="absolute -inset-6 bg-gradient-to-br from-cyan-500/10 via-violet-500/10 to-fuchsia-500/10 blur-3xl rounded-[2rem] pointer-events-none" />

            <div className="relative double-bezel">
              <div className="double-bezel-inner overflow-hidden">
                {/* card header */}
                <div className="flex items-center justify-between px-5 sm:px-6 py-4 border-b border-white/[0.06]">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-1.5">
                      <span className="w-3 h-3 rounded-full bg-red-500/80" />
                      <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                      <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                    </div>
                    <span className="font-mono text-[11px] tracking-wide text-white/40 hidden sm:inline">pipeline.config.json — Pulsemation</span>
                    <span className="font-mono text-[11px] tracking-wide text-white/40 sm:hidden">pipeline.json</span>
                  </div>
                  <span className="inline-flex items-center gap-1.5 font-mono text-[10px] tracking-wide text-emerald-400 bg-emerald-500/10 border border-emerald-500/15 rounded-full px-2.5 py-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" /> LIVE
                  </span>
                </div>

                {/* pipeline visual */}
                <div className="p-5 sm:p-6">
                  <div className="flex items-center justify-between mb-5">
                    <div>
                      <div className="font-display font-semibold text-white text-[15px]">Revenue Ops Pipeline</div>
                      <div className="font-mono text-[11px] text-white/40">3 agents • 200+ integrations • 99.9% uptime</div>
                    </div>
                    <div className="hidden sm:flex items-center gap-2">
                      <span className="font-mono text-[11px] text-white/30">Latency</span>
                      <span className="font-mono text-xs font-semibold text-white bg-white/10 border border-white/10 rounded-full px-2.5 py-1">47ms</span>
                    </div>
                  </div>

                  {/* nodes */}
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { label: 'Ingest', sub: 'Notion • HubSpot', color: 'from-cyan-400 to-blue-500', icon: '◧' },
                      { label: 'Enrich', sub: 'AI Agent • GPT-4', color: 'from-violet-500 to-fuchsia-500', icon: '✦' },
                      { label: 'Act', sub: 'Slack • Email • CRM', color: 'from-emerald-400 to-teal-500', icon: '↗' },
                    ].map((n) => (
                      <div key={n.label} className="group relative rounded-2xl bg-white/[0.04] border border-white/[0.06] p-3 sm:p-4 hover:bg-white/[0.06] hover:border-white/10 transition-colors">
                        <div className={`w-8 h-8 rounded-xl bg-gradient-to-br ${n.color} flex items-center justify-center text-white text-sm mb-3 shadow-lg`}>{n.icon}</div>
                        <div className="font-semibold text-white text-xs sm:text-sm leading-none">{n.label}</div>
                        <div className="font-mono text-[10px] text-white/40 mt-1 leading-tight">{n.sub}</div>
                        <div className="absolute -right-1.5 top-1/2 -translate-y-1/2 hidden sm:flex w-3 h-3 rounded-full bg-white border-2 border-[#0A0C1A] items-center justify-center">
                          <span className="w-1 h-1 rounded-full bg-white/60" />
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* flow bar */}
                  <div className="mt-4 h-1.5 rounded-full bg-white/[0.06] overflow-hidden p-0.5 flex">
                    <motion.div
                      className="h-full rounded-full bg-gradient-to-r from-cyan-400 via-violet-500 to-emerald-400"
                      initial={{ width: '12%' }}
                      animate={{ width: ['12%', '88%', '64%', '92%'] }}
                      transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
                    />
                  </div>

                  {/* logs */}
                  <div className="mt-5 rounded-xl bg-black/40 border border-white/[0.06] overflow-hidden">
                    <div className="flex items-center gap-2 px-3 py-2 border-b border-white/[0.04] bg-white/[0.02]">
                      <span className="font-mono text-[10px] tracking-widest text-white/30">LIVE LOGS</span>
                      <span className="ml-auto font-mono text-[10px] text-white/20">UTC • streaming</span>
                    </div>
                    <div className="p-3 space-y-1.5 font-mono text-[11px] leading-relaxed">
                      <div className="flex gap-2"><span className="text-emerald-400">✔</span><span className="text-white/70">Enriched 1,243 leads</span><span className="text-white/20 ml-auto">12ms</span></div>
                      <div className="flex gap-2"><span className="text-cyan-400">●</span><span className="text-white/70">Agent routed to #rev-ops</span><span className="text-white/20 ml-auto">47ms</span></div>
                      <div className="flex gap-2"><span className="text-violet-400">◐</span><span className="text-white/70">CRM synced — 0 errors</span><span className="text-white/20 ml-auto">now</span></div>
                    </div>
                  </div>
                </div>

                {/* bottom bar */}
                <div className="grid grid-cols-3 divide-x divide-white/[0.06] border-t border-white/[0.06] bg-white/[0.015]">
                  {[
                    { k: '10K+', v: 'Hours saved' },
                    { k: '200+', v: 'Integrations' },
                    { k: '4.9★', v: 'Avg rating' },
                  ].map((s) => (
                    <div key={s.v} className="px-4 py-3 text-center">
                      <div className="font-display font-bold text-white text-sm leading-none">{s.k}</div>
                      <div className="font-mono text-[10px] text-white/35 mt-1">{s.v}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>


          </motion.div>
        </div>
      </motion.div>

      {/* scroll hint */}
      {!perf.reducedMotion && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3 }}
          className="relative z-10 hidden sm:flex justify-center pb-6"
        >
          <a href="#services" className="group flex flex-col items-center gap-2 text-white/30 hover:text-white/60 transition-colors">
            <span className="font-mono text-[10px] tracking-[0.18em] uppercase">Scroll</span>
            <span className="w-6 h-10 rounded-full border border-white/15 flex justify-center pt-2 group-hover:border-white/25 transition-colors">
              <motion.span
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
                className="w-1.5 h-1.5 rounded-full bg-white/60"
              />
            </span>
          </a>
        </motion.div>
      )}
    </section>
  );
}
