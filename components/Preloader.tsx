"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const NAME = "TANZIRUL ISLAM";

export default function Preloader() {
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const start = performance.now();
    const duration = 2100;

    const tick = (now: number) => {
      const elapsed = now - start;
      const p = Math.min(100, (elapsed / duration) * 100);
      setProgress(Math.floor(p));
      if (elapsed < duration) {
        requestAnimationFrame(tick);
      } else {
        setTimeout(() => setDone(true), 250);
      }
    };

    const raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <motion.div
      initial={{ y: 0 }}
      animate={done ? { y: "-100%" } : { y: 0 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-0 z-[120] flex flex-col items-center justify-center gap-10 bg-bg"
    >
      <h1 className="flex overflow-hidden font-display text-2xl font-semibold tracking-[0.3em] text-accent md:text-5xl">
        {NAME.split("").map((char, i) => (
          <motion.span
            key={`${char}-${i}`}
            initial={{ y: "120%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.6,
              delay: 0.25 + i * 0.04,
              ease: [0.22, 1, 0.36, 1],
            }}
            className={char === " " ? "w-5 md:w-7" : ""}
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </h1>

      <div className="flex w-56 flex-col items-center gap-3">
        <div className="h-px w-full overflow-hidden bg-white/10">
          <motion.div
            className="h-full bg-accent"
            style={{ width: `${progress}%` }}
          />
        </div>
        <span className="font-display text-xs text-muted tabular-nums">
          {progress}%
        </span>
      </div>
    </motion.div>
  );
}
