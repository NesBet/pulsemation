import { motion } from "framer-motion";
import { usePerformance } from "../hooks/usePerformance";

const stats = [
  { value: "10K+", label: "Hours saved" },
  { value: "99.9%", label: "Uptime SLA" },
  { value: "200+", label: "Integrations" },
  { value: "4.9★", label: "Avg. rating" },
];

const steps = [
  {
    num: "01",
    title: "Audit",
    desc: "We map your existing workflows to identify every automation opportunity.",
  },
  {
    num: "02",
    title: "Design",
    desc: "Our architects design a custom pipeline blueprint tailored to your stack.",
  },
  {
    num: "03",
    title: "Deploy",
    desc: "We deploy, monitor, and optimize — your team barely notices the transition.",
  },
  {
    num: "04",
    title: "Scale",
    desc: "As you grow, your automation scales. New triggers, actions, and agents added continuously.",
  },
];

export default function About() {
  const perf = usePerformance()

  if (perf.reducedMotion) {
    return (
      <section id="about" className="relative py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16 sm:mb-20">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-cyan-400">
              How It Works
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
              From audit to <span className="gradient-text">autopilot</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-10 md:gap-12 items-center mb-20">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6">
                We don't just automate tasks.
                <br />
                <span className="gradient-text">We automate outcomes.</span>
              </h3>
              <p className="text-gray-400 leading-relaxed mb-8 text-sm sm:text-base">
                Pulsemation was founded by Nehemiah Kibet who saw that most
                "automation" solutions were just fancy if-this-then-that rules. We
                built a platform that actually thinks — combining process mining,
                AI agents, and deep integrations into a single, managed service.
              </p>
              <div className="grid grid-cols-2 gap-4 sm:gap-6">
                {stats.map((s) => (
                  <div key={s.label}>
                    <div className="text-xl sm:text-2xl font-bold gradient-text">
                      {s.value}
                    </div>
                    <div className="text-xs sm:text-sm text-gray-500">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-0">
              {steps.map((step, i) => (
                <div key={step.num} className="relative flex gap-4 sm:gap-6 pb-8 group">
                  {i < steps.length - 1 && (
                    <div className="absolute left-[19px] top-10 bottom-0 w-px bg-gradient-to-b from-cyan-500/30 to-purple-600/30" />
                  )}
                  <div className="relative shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500/10 to-purple-600/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 text-sm font-bold group-hover:scale-110 transition-transform">
                    {step.num}
                  </div>
                  <div className="pt-1.5">
                    <h4 className="text-white font-semibold mb-1">
                      {step.title}
                    </h4>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="about" className="relative py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 sm:mb-20"
        >
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-cyan-400">
            How It Works
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            From audit to <span className="gradient-text">autopilot</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 md:gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6">
              We don't just automate tasks.
              <br />
              <span className="gradient-text">We automate outcomes.</span>
            </h3>
            <p className="text-gray-400 leading-relaxed mb-8 text-sm sm:text-base">
              Pulsemation was founded by Nehemiah Kibet who saw that most
              "automation" solutions were just fancy if-this-then-that rules. We
              built a platform that actually thinks — combining process mining,
              AI agents, and deep integrations into a single, managed service.
            </p>
            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              {stats.map((s) => (
                <div key={s.label}>
                  <div className="text-xl sm:text-2xl font-bold gradient-text">
                    {s.value}
                  </div>
                  <div className="text-xs sm:text-sm text-gray-500">{s.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="space-y-0"
          >
            {steps.map((step, i) => (
              <div key={step.num} className="relative flex gap-4 sm:gap-6 pb-8 group">
                {i < steps.length - 1 && (
                  <div className="absolute left-[19px] top-10 bottom-0 w-px bg-gradient-to-b from-cyan-500/30 to-purple-600/30" />
                )}
                <div className="relative shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500/10 to-purple-600/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 text-sm font-bold group-hover:scale-110 transition-transform">
                  {step.num}
                </div>
                <div className="pt-1.5">
                  <h4 className="text-white font-semibold mb-1">
                    {step.title}
                  </h4>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
