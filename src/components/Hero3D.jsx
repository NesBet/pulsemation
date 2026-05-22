import { Suspense, useState, useEffect, useCallback } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import { motion } from "framer-motion";
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
      if (text.length < target.length) {
        setText(target.slice(0, text.length + 1));
      } else {
        setPhase("pause");
      }
    } else if (phase === "pause") {
      setPhase("erasing");
    } else if (phase === "erasing") {
      if (text.length > 0) {
        setText(text.slice(0, -1));
      } else {
        setPhase("wait");
      }
    } else {
      setWordIdx((wordIdx + 1) % words.length);
      setPhase("typing");
    }
  }, [text, wordIdx, phase]);

  useEffect(() => {
    const delays = {
      typing: 130,
      pause: 1600,
      erasing: 80,
      wait: 400,
    };
    const id = setTimeout(tick, delays[phase]);
    return () => clearTimeout(id);
  }, [tick, phase]);

  const maxLen = Math.max(...words.map((w) => w.length));

  return (
    <span className="gradient-text" style={{ display: "inline-block" }}>
      <span
        style={{
          display: "inline-block",
          minWidth: `${maxLen}ch`,
          textAlign: "left",
        }}
      >
        {text}
        <span className="opacity-80 font-light animate-pulse">|</span>
      </span>
    </span>
  );
}

function Scene() {
  const perf = usePerformance();

  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={0.5} />
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
          autoRotateSpeed={0.3}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
      )}
    </>
  );
}

export default function Hero3D() {
  const perf = usePerformance();

  const fadeIn = perf.reducedMotion
    ? { initial: { opacity: 1 }, animate: { opacity: 1 } }
    : {
        initial: { opacity: 0, y: 40 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.8, ease: "easeOut" },
      };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <Canvas
          camera={{ position: [0, 0, 6], fov: 45 }}
          dpr={perf.tier === "low" ? [1, 1.5] : [1, 2]}
          gl={{
            powerPreference: "high-performance",
            antialias: perf.tier === "high",
          }}
        >
          <Suspense fallback={null}>
            <Scene />
          </Suspense>
        </Canvas>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pt-24 pb-20 w-full">
        <div className="max-w-3xl">
          <motion.div {...fadeIn}>
            <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase px-4 py-2 rounded-full border border-cyan-500/30 text-cyan-400 bg-cyan-500/5 mb-6">
              Heartbeat of Automation
            </span>
          </motion.div>

          <motion.h1
            {...fadeIn}
            transition={
              perf.reducedMotion
                ? {}
                : { duration: 0.8, delay: 0.15, ease: "easeOut" }
            }
            className="text-[clamp(2rem,8vw,5rem)] sm:text-6xl md:text-7xl lg:text-8xl font-extrabold leading-[1.05] tracking-tight text-white"
          >
            Workflows that <Typewriter />
            <br />
            with intelligence.
          </motion.h1>

          <motion.p
            {...fadeIn}
            transition={
              perf.reducedMotion
                ? {}
                : { duration: 0.8, delay: 0.3, ease: "easeOut" }
            }
            className="mt-6 text-base sm:text-lg md:text-xl text-gray-400 max-w-xl leading-relaxed"
          >
            Pulsemation builds custom AI automation pipelines that reduce manual
            work, accelerate operations, and scale with your business.
          </motion.p>

          <motion.div
            {...fadeIn}
            transition={
              perf.reducedMotion
                ? {}
                : { duration: 0.8, delay: 0.45, ease: "easeOut" }
            }
            className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4"
          >
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold text-sm tracking-wide hover:shadow-lg hover:shadow-cyan-500/25 transition-all"
            >
              Start Your Automation
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full border border-white/10 text-gray-300 font-semibold text-sm tracking-wide hover:border-white/20 hover:text-white transition-all"
            >
              See Services
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            className="mt-12 sm:mt-16 flex flex-wrap items-center gap-x-8 gap-y-3 text-gray-500"
          >
            {["Workflows", "Industrial", "Home"].map((badge) => (
              <span
                key={badge}
                className="text-xs font-semibold tracking-wider opacity-50"
              >
                {badge}
              </span>
            ))}
          </motion.div>
        </div>
      </div>

      {!perf.reducedMotion && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <a
            href="#services"
            className="flex flex-col items-center gap-2 text-gray-600 hover:text-gray-400 transition-colors"
          >
            <span className="text-xs tracking-widest uppercase">Scroll</span>
            <svg
              width="16"
              height="24"
              viewBox="0 0 16 24"
              className="animate-bounce"
            >
              <rect
                x="1"
                y="1"
                width="14"
                height="22"
                rx="7"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
              />
              <circle cx="8" cy="8" r="2" fill="currentColor" />
            </svg>
          </a>
        </motion.div>
      )}
    </section>
  );
}
