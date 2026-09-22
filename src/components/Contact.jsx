import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";
import { usePerformance } from "../hooks/usePerformance";

const TOAST_DURATION = 5000;

function Toast({ type, message, onClose }) {
  useEffect(() => {
    const timer = setTimeout(onClose, TOAST_DURATION);
    return () => clearTimeout(timer);
  }, [onClose]);
  const isSuccess = type === "success";
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 20, scale: 0.98 }}
      transition={{ type: "spring", stiffness: 380, damping: 28 }}
      className="fixed bottom-4 right-4 left-4 sm:left-auto sm:bottom-6 sm:right-6 z-[100] max-w-sm"
    >
      <div className="rounded-[20px] bg-[#0F1220]/90 backdrop-blur-2xl border border-white/10 shadow-[0_24px_64px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.06)] overflow-hidden">
        <div className="flex items-start gap-4 p-5">
          <div className={`shrink-0 w-10 h-10 rounded-xl flex items-center justify-center ${isSuccess ? "bg-emerald-500/15 border border-emerald-500/20" : "bg-red-500/15 border border-red-500/20"}`}>
            {isSuccess ? (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#34d399" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg>
            ) : (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#f87171" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
            )}
          </div>
          <div className="flex-1 min-w-0 pt-0.5">
            <p className="text-sm font-semibold text-white">{isSuccess ? "Message sent" : "Something went wrong"}</p>
            <p className="text-xs text-white/55 mt-0.5 leading-relaxed">{message}</p>
          </div>
          <button onClick={onClose} className="shrink-0 w-7 h-7 rounded-full bg-white/5 border border-white/5 flex items-center justify-center text-white/40 hover:text-white hover:bg-white/10 transition-colors">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6L6 18M6 6l12 12" /></svg>
          </button>
        </div>
        <div className="h-0.5 bg-white/5 relative overflow-hidden">
          <motion.div initial={{ width: "100%" }} animate={{ width: "0%" }} transition={{ duration: TOAST_DURATION / 1000, ease: "linear" }} className={`absolute inset-y-0 left-0 ${isSuccess ? "bg-emerald-500" : "bg-red-500"}`} />
        </div>
      </div>
    </motion.div>
  );
}

export default function Contact() {
  const perf = usePerformance();
  const [state, setState] = useState("idle");
  const [toast, setToast] = useState(null);
  const [focused, setFocused] = useState(null);
  const nameRef = useRef();
  const emailRef = useRef();
  const companyRef = useRef();
  const teamRef = useRef();
  const messageRef = useRef();

  const closeToast = () => setToast(null);
  const ease = [0.32, 0.72, 0, 1];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setState("loading");
    const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
    if (!serviceID || !templateID || !publicKey) {
      setState("error");
      setToast({ type: "error", message: "Email service not configured. Please contact the administrator." });
      setTimeout(() => setState("idle"), 2000);
      return;
    }
    const templateParams = {
      from_name: nameRef.current.value,
      from_email: emailRef.current.value,
      company: companyRef.current.value,
      team_size: teamRef.current.value,
      message: messageRef.current.value,
      source: "pulsemation-website",
    };
    const webhookUrl = import.meta.env.VITE_WEBHOOK_URL;
    const webhookKey = import.meta.env.VITE_WEBHOOK_KEY;
    if (webhookUrl) {
      const headers = { "Content-Type": "application/json" };
      if (webhookKey) headers["X-Webhook-Key"] = webhookKey;
      fetch(webhookUrl, { method: "POST", headers, body: JSON.stringify(templateParams) }).catch(() => {});
    }
    try {
      await emailjs.send(serviceID, templateID, templateParams, publicKey);
      setState("success");
      setToast({ type: "success", message: "Our team will reach out within 72 hours to schedule your free audit." });
      nameRef.current.value = "";
      emailRef.current.value = "";
      companyRef.current.value = "";
      teamRef.current.value = "";
      messageRef.current.value = "";
      setTimeout(() => setState("idle"), 4000);
    } catch (err) {
      setState("error");
      setToast({ type: "error", message: "Could not send your message. Please try again or email us directly." });
      setTimeout(() => setState("idle"), 4000);
    }
  };

  const inputBase =
    "w-full px-4 py-3.5 rounded-2xl bg-white/[0.04] border text-white placeholder:text-white/30 focus:outline-none transition-all text-[14px] backdrop-blur";
  const inputIdle = "border-white/[0.08] hover:border-white/15 hover:bg-white/[0.06]";
  const inputFocus = "border-cyan-400/40 bg-cyan-500/[0.04] shadow-[0_0_0_4px_rgba(0,229,255,0.08)]";

  return (
    <section id="contact" className="relative py-20 sm:py-28 overflow-hidden bg-[#05070A]">
      <AnimatePresence>{toast && <Toast type={toast.type} message={toast.message} onClose={closeToast} />}</AnimatePresence>

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-950/5 to-transparent" />
        <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-[radial-gradient(circle_at_center,rgba(124,58,237,0.08),transparent_70%)]" />
        <div className="absolute bottom-0 left-0 w-[700px] h-[700px] bg-[radial-gradient(circle_at_center,rgba(0,229,255,0.06),transparent_70%)]" />
        <div className="absolute inset-0 grid-pattern opacity-10" />
      </div>

      <div className="relative max-w-[1280px] mx-auto px-4 sm:px-6">
        {/* header */}
        <motion.div
          initial={perf.reducedMotion ? false : { opacity: 0, y: 16, filter: 'blur(6px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease }}
          className="text-center max-w-[680px] mx-auto mb-10 sm:mb-14"
        >
          <h2 className="font-display font-bold tracking-[-0.03em] leading-[0.95] text-white text-[clamp(28px,4.8vw,56px)] text-balance">
            Ready to <span className="gradient-text">automate</span>?
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-white/50 text-pretty">
            Tell us about your workflow and we'll design a custom automation roadmap — free of charge. We reply within 72 hours.
          </p>
        </motion.div>

        {/* card */}
        <motion.div
          initial={perf.reducedMotion ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, delay: 0.1, ease }}
          className="max-w-[1120px] mx-auto"
        >
          <div className="double-bezel">
            <div className="double-bezel-inner overflow-hidden grid lg:grid-cols-[0.95fr_1.15fr]">
              {/* left panel */}
              <div className="relative p-6 sm:p-8 lg:p-10 bg-gradient-to-br from-white/[0.04] to-transparent border-b lg:border-b-0 lg:border-r border-white/[0.06] flex flex-col">
                <div className="absolute top-0 right-0 w-64 h-64 bg-[radial-gradient(circle_at_center,rgba(0,229,255,0.08),transparent_70%)] pointer-events-none" />
                <div className="relative">
                  <span className="inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.14em] uppercase text-white/40 border border-white/10 rounded-full px-3 py-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" /> Response in 72 hours
                  </span>
                  <h3 className="mt-6 font-display font-bold tracking-tight text-white text-[22px] leading-tight">Let's build your<br />automation pipeline.</h3>
                  <p className="mt-3 text-[13.5px] leading-relaxed text-white/50">
                    No sales theatre. Just a 20-minute audit where we map your stack and show you exactly where AI removes friction.
                  </p>

                  <ul className="mt-8 space-y-3">
                    {[
                      'Free workflow audit — no commitment',
                      'Tailored blueprint in 48 hours',
                      'Zero downtime deployment',
                    ].map((item) => (
                      <li key={item} className="flex items-center gap-3 text-sm text-white/70">
                        <span className="w-6 h-6 rounded-full bg-white text-[#05070A] flex items-center justify-center shrink-0">
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12" /></svg>
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8 pt-6 border-t border-white/[0.06] space-y-3">
                    <a href="mailto:pulsemationltd@gmail.com" className="flex items-center gap-3 text-sm text-white/70 hover:text-white transition-colors group">
                      <span className="w-9 h-9 rounded-xl bg-white/[0.06] border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-[#05070A] transition-colors">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                      </span>
                      pulsemationltd@gmail.com
                    </a>
                    <a href="tel:254780237794" className="flex items-center gap-3 text-sm text-white/70 hover:text-white transition-colors group">
                      <span className="w-9 h-9 rounded-xl bg-white/[0.06] border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-[#05070A] transition-colors">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                      </span>
                      254 780 237 794
                    </a>
                  </div>

                  <div className="mt-6 flex items-center gap-3">
                    <div className="flex -space-x-2">
                      {[0, 1, 2].map((i) => (
                        <img key={i} src={`https://i.pravatar.cc/100?img=${33 + i * 5}`} alt="" className="w-7 h-7 rounded-full object-cover ring-2 ring-[#0A0C1A]" />
                      ))}
                    </div>
                    <span className="font-mono text-xs text-white/40">Trusted by operators at 200+ teams</span>
                  </div>
                </div>
              </div>

              {/* right form */}
              <div className="p-6 sm:p-8 lg:p-10 bg-[#05070A]/50">
                {state === "success" ? (
                  <div className="h-full flex flex-col items-center justify-center text-center py-12">
                    <div className="w-16 h-16 rounded-2xl bg-emerald-500/15 border border-emerald-500/20 flex items-center justify-center mb-5">
                      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#34d399" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg>
                    </div>
                    <h3 className="font-display font-bold text-white text-xl">Message received!</h3>
                    <p className="text-white/50 text-sm mt-2 max-w-[32ch]">Our team will reach out within 72 hours to schedule your free audit. Check your email.</p>
                    <button onClick={() => setState("idle")} className="mt-6 text-sm font-medium text-white/60 hover:text-white underline underline-offset-4">Send another message</button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <label className="group">
                        <span className="font-mono text-[11px] tracking-wide text-white/40 group-focus-within:text-white/60 transition-colors">Full name *</span>
                        <input
                          ref={nameRef}
                          type="text"
                          placeholder="Ada Lovelace"
                          required
                          onFocus={() => setFocused('name')}
                          onBlur={() => setFocused(null)}
                          className={`${inputBase} mt-1.5 ${focused === 'name' ? inputFocus : inputIdle}`}
                        />
                      </label>
                      <label className="group">
                        <span className="font-mono text-[11px] tracking-wide text-white/40 group-focus-within:text-white/60 transition-colors">Work email *</span>
                        <input
                          ref={emailRef}
                          type="email"
                          placeholder="ada@company.com"
                          required
                          onFocus={() => setFocused('email')}
                          onBlur={() => setFocused(null)}
                          className={`${inputBase} mt-1.5 ${focused === 'email' ? inputFocus : inputIdle}`}
                        />
                      </label>
                    </div>

                    <label className="group block">
                      <span className="font-mono text-[11px] tracking-wide text-white/40 group-focus-within:text-white/60 transition-colors">Company name</span>
                      <input
                        ref={companyRef}
                        type="text"
                        placeholder="Acme Inc."
                        onFocus={() => setFocused('company')}
                        onBlur={() => setFocused(null)}
                        className={`${inputBase} mt-1.5 ${focused === 'company' ? inputFocus : inputIdle}`}
                      />
                    </label>

                    <label className="group block">
                      <span className="font-mono text-[11px] tracking-wide text-white/40 group-focus-within:text-white/60 transition-colors">Team size *</span>
                      <div className="relative mt-1.5">
                        <select
                          ref={teamRef}
                          defaultValue=""
                          required
                          onFocus={() => setFocused('team')}
                          onBlur={() => setFocused(null)}
                          className={`${inputBase} appearance-none pr-10 ${focused === 'team' ? inputFocus : inputIdle}`}
                          style={{
                            backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`,
                            backgroundPosition: "right 1rem center",
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "1.2em 1.2em",
                          }}
                        >
                          <option value="" disabled>Select team size</option>
                          <option value="1-10" className="bg-[#0A0C1A]">1-10</option>
                          <option value="11-50" className="bg-[#0A0C1A]">11-50</option>
                          <option value="51-200" className="bg-[#0A0C1A]">51-200</option>
                          <option value="200+" className="bg-[#0A0C1A]">200+</option>
                        </select>
                      </div>
                    </label>

                    <label className="group block">
                      <span className="font-mono text-[11px] tracking-wide text-white/40 group-focus-within:text-white/60 transition-colors">Describe your workflow *</span>
                      <textarea
                        ref={messageRef}
                        rows={4}
                        placeholder="We manually copy data from Notion to HubSpot, then enrich via email…"
                        required
                        onFocus={() => setFocused('message')}
                        onBlur={() => setFocused(null)}
                        className={`${inputBase} mt-1.5 resize-none min-h-[112px] ${focused === 'message' ? inputFocus : inputIdle}`}
                      />
                    </label>

                    <button
                      type="submit"
                      disabled={state === "loading"}
                      className="group w-full inline-flex items-center justify-center gap-2 py-3.5 rounded-full bg-white text-[#05070A] font-semibold text-sm tracking-tight hover:bg-white/95 active:scale-[0.98] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {state === "loading" ? (
                        <>
                          <svg className="animate-spin" width="18" height="18" viewBox="0 0 24 24" fill="none">
                            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" opacity="0.2" />
                            <path d="M12 2a10 10 0 019.95 9" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
                          </svg>
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <span className="w-7 h-7 rounded-full bg-[#05070A] text-white flex items-center justify-center group-hover:translate-x-0.5 transition-transform">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                          </span>
                        </>
                      )}
                    </button>
                    <p className="text-center font-mono text-[11px] text-white/30">
                      By sending, you agree to our <a href="#page/privacy" className="underline underline-offset-2 hover:text-white/50">Privacy</a> & <a href="#page/terms" className="underline underline-offset-2 hover:text-white/50">Terms</a>.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
