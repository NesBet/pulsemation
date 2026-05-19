export default function Footer() {
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
              {['About', 'Careers', 'Blog', 'Press'].map((l) => (
                <a key={l} href="#" className="text-sm text-gray-600 hover:text-gray-300 transition-colors">
                  {l}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xs font-semibold tracking-widest text-gray-400 uppercase mb-4">Legal</h4>
            <div className="flex flex-col gap-2.5">
              {['Privacy', 'Terms', 'Security', 'Cookies'].map((l) => (
                <a key={l} href="#" className="text-sm text-gray-600 hover:text-gray-300 transition-colors">
                  {l}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/[0.04] pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-600">
            &copy; {new Date().getFullYear()} Pulsemation, Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            {['Twitter', 'GitHub', 'LinkedIn'].map((s) => (
              <a key={s} href="#" className="text-xs text-gray-600 hover:text-gray-300 transition-colors">
                {s}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
