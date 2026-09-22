export default function Footer({ onNavigate }) {
  return (
    <footer className="relative overflow-hidden border-t border-white/[0.06] bg-[#05070A]">
      <div className="absolute inset-0 grid-pattern opacity-10 pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[320px] bg-[radial-gradient(ellipse_at_center,rgba(0,229,255,0.04),transparent_70%)] pointer-events-none" />

      {/* CTA band */}
      <div className="relative max-w-[1280px] mx-auto px-4 sm:px-6 pt-10 sm:pt-12">
        <div className="rounded-[28px] bg-gradient-to-br from-white to-white/[0.96] p-[1px] overflow-hidden">
          <div className="rounded-[27px] bg-gradient-to-br from-zinc-900 via-[#0A0C1A] to-[#0A0C1A] relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(124,58,237,0.18),transparent_60%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_80%,rgba(0,229,255,0.12),transparent_60%)]" />
            <div className="absolute inset-0 grid-pattern opacity-10" />
            <div className="relative grid lg:grid-cols-[1.2fr_0.8fr] gap-6 items-center px-6 sm:px-10 py-8 sm:py-10">
              <div>
                <div className="font-mono text-[11px] tracking-[0.14em] uppercase text-white/40">Start in 72 hours</div>
                <h3 className="mt-2 font-display font-bold tracking-[-0.02em] text-white text-[24px] sm:text-[28px] leading-tight">
                  Automate the work. <span className="text-white/60">Keep the craft.</span>
                </h3>
                <p className="mt-2 text-sm text-white/50 max-w-[48ch]">Join 200+ teams who reclaimed 10K+ hours. Free audit, no commitment.</p>
              </div>
              <div className="flex flex-col sm:items-end gap-3">
                <a href="#contact" className="inline-flex items-center gap-2 pl-6 pr-1.5 py-1.5 rounded-full bg-white text-[#05070A] font-semibold text-sm hover:bg-white/95 transition-colors group self-start sm:self-auto">
                  Start Your Automation
                  <span className="w-8 h-8 rounded-full bg-[#05070A] text-white flex items-center justify-center group-hover:translate-x-0.5 transition-transform">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 17L17 7"/><path d="M8 7h9v9"/></svg>
                  </span>
                </a>
                <span className="font-mono text-xs text-white/30">No credit card • Cancel anytime</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative max-w-[1280px] mx-auto px-4 sm:px-6 py-10 sm:py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-[1.5fr_0.7fr_0.7fr_1fr] gap-8 sm:gap-10 pb-8 sm:pb-10">
          <div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-xl overflow-hidden ring-1 ring-white/10">
                <img src="/favicon.jpg" alt="Pulsemation" className="w-full h-full object-cover" />
              </div>
              <div>
                <div className="font-display font-bold tracking-tight text-white text-sm leading-none">PULSEMATION</div>
                <div className="font-mono text-[10px] tracking-[0.14em] text-white/30 leading-none mt-0.5">AUTOMATION LABS</div>
              </div>
            </div>
            <p className="mt-4 text-[13.5px] leading-relaxed text-white/45 max-w-sm text-pretty">
              Intelligent automation for modern teams. We build, deploy, and manage AI-powered workflows so you can focus on what matters.
            </p>
            <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-white/[0.04] border border-white/[0.06] px-3 py-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.6)]" />
              <span className="font-mono text-xs text-white/60">All systems operational</span>
              <span className="font-mono text-xs text-white/20">•</span>
              <span className="font-mono text-xs text-white/40">99.9% uptime</span>
            </div>
          </div>

          <div>
            <h4 className="font-mono text-[11px] tracking-[0.14em] uppercase text-white/30 mb-4">Company</h4>
            <div className="flex flex-col gap-2.5">
              {['About', 'Careers'].map((l) => (
                <button key={l} onClick={() => onNavigate?.(l.toLowerCase())} className="text-sm text-white/55 hover:text-white transition-colors text-left group flex items-center gap-1.5">
                  <span className="w-0 h-px bg-white group-hover:w-3 transition-all duration-300" />
                  {l}
                </button>
              ))}
              <a href="#services" className="text-sm text-white/55 hover:text-white transition-colors group flex items-center gap-1.5">
                <span className="w-0 h-px bg-white group-hover:w-3 transition-all duration-300" />Services
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-mono text-[11px] tracking-[0.14em] uppercase text-white/30 mb-4">Legal</h4>
            <div className="flex flex-col gap-2.5">
              {['Privacy', 'Terms'].map((l) => (
                <button key={l} onClick={() => onNavigate?.(l.toLowerCase())} className="text-sm text-white/55 hover:text-white transition-colors text-left group flex items-center gap-1.5">
                  <span className="w-0 h-px bg-white group-hover:w-3 transition-all duration-300" />
                  {l}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-mono text-[11px] tracking-[0.14em] uppercase text-white/30 mb-4">Connect</h4>
            <div className="space-y-3">
              <a href="mailto:pulsemationltd@gmail.com" className="flex items-center gap-2.5 text-sm text-white/55 hover:text-white transition-colors">
                <span className="w-8 h-8 rounded-xl bg-white/[0.06] border border-white/10 flex items-center justify-center">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                </span>
                pulsemationltd@gmail.com
              </a>
              <a href="tel:254780237794" className="flex items-center gap-2.5 text-sm text-white/55 hover:text-white transition-colors">
                <span className="w-8 h-8 rounded-xl bg-white/[0.06] border border-white/10 flex items-center justify-center">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                </span>
                254 780 237 794
              </a>
            </div>
            <div className="mt-6 flex items-center gap-3">
              <a href="#" aria-label="X" className="w-9 h-9 rounded-xl bg-white/[0.06] border border-white/10 flex items-center justify-center text-white/60 hover:bg-white hover:text-[#05070A] hover:border-white transition-colors">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
              <a href="#" aria-label="LinkedIn" className="w-9 h-9 rounded-xl bg-white/[0.06] border border-white/10 flex items-center justify-center text-white/60 hover:bg-white hover:text-[#05070A] hover:border-white transition-colors">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452z"/></svg>
              </a>
              <span className="font-mono text-[11px] text-white/25 ml-1">© {new Date().getFullYear()}</span>
            </div>
          </div>
        </div>

        <div className="border-t border-white/[0.06] pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-mono text-[11px] tracking-wide text-white/30">
            © {new Date().getFullYear()} Pulsemation, Inc. All rights reserved. Crafted in Nairobi.
          </p>
          <div className="flex items-center gap-2 font-mono text-[11px] text-white/25">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <span>Heartbeat of Automation</span>
            <span className="hidden sm:inline">•</span>
            <span className="hidden sm:inline">AUTOMATE • CONNECT • WORK</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
