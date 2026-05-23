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
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 40, scale: 0.95 }}
      transition={{ type: "spring", stiffness: 300, damping: 25 }}
      className="fixed bottom-4 right-4 left-4 sm:left-auto sm:bottom-6 sm:right-6 z-[100] max-w-sm"
    >
      <div className="rounded-2xl bg-[#0a0a1a]/95 backdrop-blur-xl border border-white/10 shadow-2xl shadow-black/50 overflow-hidden">
        <div className="flex items-start gap-4 p-5">
          <div
            className={`shrink-0 w-10 h-10 rounded-xl flex items-center justify-center ${
              isSuccess
                ? "bg-gradient-to-br from-emerald-500/20 to-emerald-600/10 border border-emerald-500/20"
                : "bg-gradient-to-br from-red-500/20 to-red-600/10 border border-red-500/20"
            }`}
          >
            {isSuccess ? (
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#34d399"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
            ) : (
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#f87171"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="8" x2="12" y2="12" />
                <line x1="12" y1="16" x2="12.01" y2="16" />
              </svg>
            )}
          </div>
          <div className="flex-1 min-w-0 pt-0.5">
            <p className="text-sm font-semibold text-white">
              {isSuccess ? "Message sent" : "Something went wrong"}
            </p>
            <p className="text-xs text-gray-400 mt-0.5">{message}</p>
          </div>
          <button
            onClick={onClose}
            className="shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-gray-500 hover:text-white hover:bg-white/5 transition-colors"
            aria-label="Dismiss"
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="h-0.5 bg-white/5 relative overflow-hidden">
          <motion.div
            initial={{ width: "100%" }}
            animate={{ width: "0%" }}
            transition={{ duration: TOAST_DURATION / 1000, ease: "linear" }}
            className={`absolute inset-y-0 left-0 ${
              isSuccess ? "bg-emerald-500" : "bg-red-500"
            }`}
          />
        </div>
      </div>
    </motion.div>
  );
}

export default function Contact() {
  const perf = usePerformance();
  const [state, setState] = useState("idle");
  const [toast, setToast] = useState(null);
  const nameRef = useRef();
  const emailRef = useRef();
  const companyRef = useRef();
  const teamRef = useRef();
  const messageRef = useRef();

  const closeToast = () => setToast(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setState("loading");

    const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceID || !templateID || !publicKey) {
      setState("error");
      setToast({
        type: "error",
        message:
          "Email service not configured. Please contact the administrator.",
      });
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
    if (webhookUrl) {
      fetch(webhookUrl, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "text/plain" },
        body: JSON.stringify(templateParams),
      }).catch(() => {});
    }

    try {
      await emailjs.send(serviceID, templateID, templateParams, publicKey);

      setState("success");
      setToast({
        type: "success",
        message:
          "Our team will reach out within 72 hours to schedule your free audit.",
      });

      nameRef.current.value = "";
      emailRef.current.value = "";
      companyRef.current.value = "";
      teamRef.current.value = "Team size";
      messageRef.current.value = "";

      setTimeout(() => setState("idle"), 4000);
    } catch (err) {
      setState("error");
      setToast({
        type: "error",
        message:
          "Could not send your message. Please try again or email us directly.",
      });
      setTimeout(() => setState("idle"), 4000);
    }
  };

  return (
    <section id="contact" className="relative py-20 sm:py-28 overflow-hidden">
      <AnimatePresence>
        {toast && (
          <Toast
            type={toast.type}
            message={toast.message}
            onClose={closeToast}
          />
        )}
      </AnimatePresence>

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-950/10 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        {perf.reducedMotion ? (
          <div className="text-center mb-12 sm:mb-16">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-cyan-400">
              Get In Touch
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
              Ready to <span className="gradient-text">automate</span>?
            </h2>
            <p className="mt-4 text-gray-400 max-w-xl mx-auto text-sm sm:text-base">
              Tell us about your workflow and we'll design a custom automation
              roadmap — free of charge.
            </p>
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 sm:mb-16"
          >
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-cyan-400">
              Get In Touch
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
              Ready to <span className="gradient-text">automate</span>?
            </h2>
            <p className="mt-4 text-gray-400 max-w-xl mx-auto text-sm sm:text-base">
              Tell us about your workflow and we'll design a custom automation
              roadmap — free of charge.
            </p>
          </motion.div>
        )}

        {perf.reducedMotion ? (
          <div className="max-w-2xl mx-auto">
            {state === "success" ? (
              <div className="text-center py-16">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-emerald-500/20 to-emerald-600/10 border border-emerald-500/30 flex items-center justify-center mx-auto mb-6">
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#34d399"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  Message received!
                </h3>
                <p className="text-gray-400">
                  Our team will reach out within 72 hours to schedule your free
                  audit.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
                  <input
                    ref={nameRef}
                    type="text"
                    placeholder="Full name"
                    required
                    className="w-full px-4 sm:px-5 py-3.5 sm:py-4 rounded-xl bg-white/[0.03] border border-white/[0.08] text-white placeholder-gray-600 focus:outline-none focus:border-cyan-500/40 focus:bg-cyan-500/[0.02] transition-all text-sm"
                  />
                  <input
                    ref={emailRef}
                    type="email"
                    placeholder="Work email"
                    required
                    className="w-full px-4 sm:px-5 py-3.5 sm:py-4 rounded-xl bg-white/[0.03] border border-white/[0.08] text-white placeholder-gray-600 focus:outline-none focus:border-cyan-500/40 focus:bg-cyan-500/[0.02] transition-all text-sm"
                  />
                </div>
                <input
                  ref={companyRef}
                  type="text"
                  placeholder="Company name"
                  className="w-full px-4 sm:px-5 py-3.5 sm:py-4 rounded-xl bg-white/[0.03] border border-white/[0.08] text-white placeholder-gray-600 focus:outline-none focus:border-cyan-500/40 focus:bg-cyan-500/[0.02] transition-all text-sm"
                />
                <select
                  ref={teamRef}
                  defaultValue=""
                  required
                  className="w-full px-4 sm:px-5 py-3.5 sm:py-4 rounded-xl bg-white/[0.03] border border-white/[0.08] text-white focus:outline-none focus:border-cyan-500/40 transition-all text-sm appearance-none"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`,
                    backgroundPosition: "right 1rem center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "1.5em 1.5em",
                  }}
                >
                  <option value="" disabled className="bg-[#0a0a1a]">
                    Team size
                  </option>
                  <option value="1-10" className="bg-[#0a0a1a]">
                    1-10
                  </option>
                  <option value="11-50" className="bg-[#0a0a1a]">
                    11-50
                  </option>
                  <option value="51-200" className="bg-[#0a0a1a]">
                    51-200
                  </option>
                  <option value="200+" className="bg-[#0a0a1a]">
                    200+
                  </option>
                </select>
                <textarea
                  ref={messageRef}
                  rows={4}
                  placeholder="Describe your workflow or automation needs..."
                  required
                  className="w-full px-4 sm:px-5 py-3.5 sm:py-4 rounded-xl bg-white/[0.03] border border-white/[0.08] text-white placeholder-gray-600 focus:outline-none focus:border-cyan-500/40 focus:bg-cyan-500/[0.02] transition-all text-sm resize-none"
                />
                <button
                  type="submit"
                  disabled={state === "loading"}
                  className="w-full py-3.5 sm:py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold text-sm tracking-wide hover:shadow-lg hover:shadow-cyan-500/25 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {state === "loading" ? (
                    <>
                      <svg
                        className="animate-spin"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <circle
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                          opacity="0.25"
                        />
                        <path
                          d="M12 2a10 10 0 019.95 9"
                          stroke="currentColor"
                          strokeWidth="4"
                          strokeLinecap="round"
                        />
                      </svg>{" "}
                      Sending...
                    </>
                  ) : (
                    "Send Message"
                  )}
                </button>
              </form>
            )}
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-2xl mx-auto"
          >
            {state === "success" ? (
              <div className="text-center py-16">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-emerald-500/20 to-emerald-600/10 border border-emerald-500/30 flex items-center justify-center mx-auto mb-6">
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#34d399"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  Message received!
                </h3>
                <p className="text-gray-400">
                  Our team will reach out within 72 hours to schedule your free
                  audit.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
                  <input
                    ref={nameRef}
                    type="text"
                    placeholder="Full name"
                    required
                    className="w-full px-4 sm:px-5 py-3.5 sm:py-4 rounded-xl bg-white/[0.03] border border-white/[0.08] text-white placeholder-gray-600 focus:outline-none focus:border-cyan-500/40 focus:bg-cyan-500/[0.02] transition-all text-sm"
                  />
                  <input
                    ref={emailRef}
                    type="email"
                    placeholder="Work email"
                    required
                    className="w-full px-4 sm:px-5 py-3.5 sm:py-4 rounded-xl bg-white/[0.03] border border-white/[0.08] text-white placeholder-gray-600 focus:outline-none focus:border-cyan-500/40 focus:bg-cyan-500/[0.02] transition-all text-sm"
                  />
                </div>
                <input
                  ref={companyRef}
                  type="text"
                  placeholder="Company name"
                  className="w-full px-4 sm:px-5 py-3.5 sm:py-4 rounded-xl bg-white/[0.03] border border-white/[0.08] text-white placeholder-gray-600 focus:outline-none focus:border-cyan-500/40 focus:bg-cyan-500/[0.02] transition-all text-sm"
                />
                <select
                  ref={teamRef}
                  defaultValue=""
                  required
                  className="w-full px-4 sm:px-5 py-3.5 sm:py-4 rounded-xl bg-white/[0.03] border border-white/[0.08] text-white focus:outline-none focus:border-cyan-500/40 transition-all text-sm appearance-none"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`,
                    backgroundPosition: "right 1rem center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "1.5em 1.5em",
                  }}
                >
                  <option value="" disabled className="bg-[#0a0a1a]">
                    Team size
                  </option>
                  <option value="1-10" className="bg-[#0a0a1a]">
                    1-10
                  </option>
                  <option value="11-50" className="bg-[#0a0a1a]">
                    11-50
                  </option>
                  <option value="51-200" className="bg-[#0a0a1a]">
                    51-200
                  </option>
                  <option value="200+" className="bg-[#0a0a1a]">
                    200+
                  </option>
                </select>
                <textarea
                  ref={messageRef}
                  rows={4}
                  placeholder="Describe your workflow or automation needs..."
                  required
                  className="w-full px-4 sm:px-5 py-3.5 sm:py-4 rounded-xl bg-white/[0.03] border border-white/[0.08] text-white placeholder-gray-600 focus:outline-none focus:border-cyan-500/40 focus:bg-cyan-500/[0.02] transition-all text-sm resize-none"
                />
                <button
                  type="submit"
                  disabled={state === "loading"}
                  className="w-full py-3.5 sm:py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold text-sm tracking-wide hover:shadow-lg hover:shadow-cyan-500/25 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {state === "loading" ? (
                    <>
                      <svg
                        className="animate-spin"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <circle
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                          opacity="0.25"
                        />
                        <path
                          d="M12 2a10 10 0 019.95 9"
                          stroke="currentColor"
                          strokeWidth="4"
                          strokeLinecap="round"
                        />
                      </svg>{" "}
                      Sending...
                    </>
                  ) : (
                    "Send Message"
                  )}
                </button>
              </form>
            )}
          </motion.div>
        )}
      </div>
    </section>
  );
}
