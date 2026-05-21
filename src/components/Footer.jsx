export default function Footer({ onNavigate }) {
  return (
    <footer className="border-t border-white/[0.04] py-10 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 pb-8 sm:pb-10">
          <div className="sm:col-span-2 lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-cyan-400 to-purple-600 flex items-center justify-center text-white font-extrabold text-xs">
                P
              </div>
              <span className="font-bold text-white tracking-tight">PULSEMATION</span>
            </div>
            <p className="text-sm text-gray-500 max-w-sm leading-relaxed">
              Intelligent automation for modern teams. We build, deploy, and manage
              AI-powered workflows so you can focus on what matters.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-semibold tracking-widest text-gray-400 uppercase mb-4">Company</h4>
            <div className="flex flex-col gap-2.5">
              {['About', 'Careers'].map((l) => (
                <button
                  key={l}
                  onClick={() => onNavigate?.(l.toLowerCase())}
                  className="text-sm text-gray-600 hover:text-gray-300 transition-colors text-left"
                >
                  {l}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xs font-semibold tracking-widest text-gray-400 uppercase mb-4">Legal</h4>
            <div className="flex flex-col gap-2.5">
              {['Privacy', 'Terms'].map((l) => (
                <button
                  key={l}
                  onClick={() => onNavigate?.(l.toLowerCase())}
                  className="text-sm text-gray-600 hover:text-gray-300 transition-colors text-left"
                >
                  {l}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/[0.04] pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-600">
            &copy; {new Date().getFullYear()} Pulsemation, Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            <a href="tel:254780237794" className="text-xs text-gray-600 hover:text-gray-300 transition-colors">
              254780237794
            </a>
            <a href="mailto:pulsemationltd@gmail.com" className="text-xs text-gray-600 hover:text-gray-300 transition-colors">
              pulsemationltd@gmail.com
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-300 transition-colors" aria-label="Twitter">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-300 transition-colors" aria-label="LinkedIn">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
