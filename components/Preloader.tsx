"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Preloader() {
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const start = performance.now();
    const duration = 2000;

    const tick = (now: number) => {
      const elapsed = now - start;
      const p = Math.min(100, (elapsed / duration) * 100);
      setProgress(Math.floor(p));
      if (elapsed < duration) {
        requestAnimationFrame(tick);
      } else {
        setTimeout(() => setDone(true), 300);
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
      className="fixed inset-0 z-[120] flex flex-col items-center justify-center bg-bg"
    >
      <h1 className="font-display text-3xl font-semibold tracking-[0.3em] text-accent md:text-5xl">
        TANZIRUL&nbsp;ISLAM
      </h1>
      <span className="mt-8 font-display text-sm text-muted tabular-nums">
        {progress}%
      </span>
    </motion.div>
  );
}
