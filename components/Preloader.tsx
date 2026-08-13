"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Preloader() {
  const [done, setDone] = useState(false);

  useEffect(() => {
    const id = setTimeout(() => setDone(true), 2000);
    return () => clearTimeout(id);
  }, []);

  return (
    <motion.div
      initial={{ y: 0 }}
      animate={done ? { y: "-100%" } : { y: 0 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-0 z-[120] flex items-center justify-center bg-bg"
    >
      <h1 className="font-display text-3xl font-semibold tracking-[0.3em] text-accent md:text-5xl">
        TANZIRUL&nbsp;ISLAM
      </h1>
    </motion.div>
  );
}
