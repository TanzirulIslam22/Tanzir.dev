"use client";

import { motion } from "framer-motion";

export function SectionHeading({ number, title }: { number: string; title: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="flex items-center gap-4"
    >
      <span className="font-display text-sm font-medium tracking-widest text-muted">
        ({number})
      </span>
      <h2 className="font-display text-3xl font-medium tracking-tight text-accent md:text-4xl">
        {title}
      </h2>
      <span className="h-px flex-1 bg-gradient-to-r from-white/20 to-transparent" />
    </motion.div>
  );
}
