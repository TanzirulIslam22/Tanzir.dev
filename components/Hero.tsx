"use client";

import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { useEffect, useState } from "react";

import { heroWords, profile, stats } from "@/lib/data";

const maskLines = ["Building", "AI-powered", "web experiences"];

export default function Hero() {
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setWordIndex((i) => (i + 1) % heroWords.length);
    }, 2800);
    return () => clearInterval(id);
  }, []);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [8, -8]), { stiffness: 120, damping: 18 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-10, 10]), { stiffness: 120, damping: 18 });

  return (
    <section
      id="home"
      className="bg-grid relative flex min-h-screen flex-col justify-center overflow-hidden pt-24"
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        x.set((e.clientX - rect.left) / rect.width - 0.5);
        y.set((e.clientY - rect.top) / rect.height - 0.5);
      }}
    >
      <div className="pointer-events-none absolute -top-32 right-0 h-96 w-96 rounded-full bg-accent/10 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 left-1/4 h-72 w-72 rounded-full bg-accent/5 blur-[120px]" />

      <div className="mx-auto grid w-full max-w-7xl gap-16 px-5 py-20 md:px-8 lg:grid-cols-12 lg:gap-8">
        <div className="flex flex-col justify-center lg:col-span-7">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mb-8 inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-accent"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            {profile.role}
          </motion.p>

          <h1 className="font-display text-[13vw] leading-[0.95] tracking-tight text-accent sm:text-6xl md:text-7xl lg:text-8xl">
            {maskLines.map((line, i) => (
              <span key={line} className="block overflow-hidden">
                <motion.span
                  initial={{ y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.9, delay: 0.3 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                  className="block"
                >
                  {line}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="mt-6 flex min-h-10 items-center gap-3 text-xl text-muted md:text-2xl"
          >
            <span className="text-muted">/</span>
            <span className="text-accent">{heroWords[wordIndex]}</span>
            <span className="inline-block h-7 w-0.5 animate-blink bg-accent" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.1 }}
            className="mt-12 flex flex-wrap items-center gap-4"
          >
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-bg transition-transform hover:scale-[1.03]"
            >
              Let&apos;s work together
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href={profile.resume}
              className="group inline-flex items-center gap-2 rounded-full border border-accent/25 px-7 py-3.5 text-sm font-medium text-accent transition-colors hover:border-accent"
            >
              Download resume
              <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 1.3 }}
            className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-4"
          >
            {stats.map((stat) => (
              <div key={stat.label} className="bg-bg/90 px-6 py-5">
                <div className="font-display text-2xl font-semibold text-accent md:text-3xl">
                  {stat.value}
                </div>
                <div className="mt-1 text-xs uppercase tracking-widest text-muted">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        <div className="relative hidden items-center justify-center lg:col-span-5 lg:flex" style={{ perspective: 1200 }}>
          <motion.div
            style={{ rotateX, rotateY }}
            className="relative w-full max-w-md"
          >
            <div className="absolute -inset-4 rounded-[2rem] bg-accent/20 blur-2xl" />
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-surface shadow-2xl">
              <div className="flex items-center gap-1.5 border-b border-white/10 px-4 py-3">
                <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-green-400/70" />
                <span className="ml-3 font-mono text-xs text-muted">
                  tanzir.dev — bash
                </span>
              </div>
              <Image
                src={profile.heroImage}
                alt="Terminal portfolio screenshot"
                width={1000}
                height={560}
                priority
                className="aspect-[16/9] w-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
