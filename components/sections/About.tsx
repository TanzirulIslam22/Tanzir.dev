"use client";

import { motion } from "framer-motion";

import { profile } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
      <SectionHeading number="01" title="About" />

      <div className="mt-14 grid gap-12 lg:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-8"
        >
          <h2 className="font-display text-3xl leading-snug tracking-tight text-accent md:text-5xl">
            I&apos;m a full-stack developer
            <br />
            who loves building for the web
            <br />
            <span className="text-outline">with AI at the core.</span>
          </h2>

          <div className="mt-10 space-y-5 text-lg leading-relaxed text-accent/70">
            <p>
              I&apos;m {profile.fullName} — a developer based in {profile.location}. For
              over two years I&apos;ve been designing and shipping web applications
              with the MERN stack, from landing pages to complex SaaS products.
            </p>
            <p>
              What excites me most is the intersection of web engineering and
              artificial intelligence. I build interfaces that feel premium and
              backends that are fast, secure and scalable — then wire them
              together with AI features that genuinely improve the product.
            </p>
            <p>
              I care about the details: motion, typography, performance and
              accessibility. When I&apos;m not coding, I&apos;m exploring new tools,
              writing about what I learn, and turning coffee into prototypes.
            </p>
          </div>

          <a
            href={profile.resume}
            className="mt-10 inline-flex items-center gap-2 rounded-full border border-accent/25 px-6 py-3 text-sm font-medium text-accent transition-colors hover:border-accent"
          >
            View resume
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="lg:col-span-4"
        >
          <div className="space-y-6">
            <div className="rounded-2xl border border-white/10 bg-card p-6">
              <p className="text-xs uppercase tracking-widest text-muted">Status</p>
              <div className="mt-3 flex items-center gap-2.5">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
                </span>
                <span className="text-sm font-medium text-accent">
                  Available for freelance work
                </span>
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-card p-6">
              <p className="text-xs uppercase tracking-widest text-muted">Based in</p>
              <p className="mt-3 text-sm font-medium text-accent">{profile.location}</p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-card p-6">
              <p className="text-xs uppercase tracking-widest text-muted">Experience</p>
              <p className="mt-3 font-display text-4xl font-semibold text-accent">
                2+ <span className="text-lg text-muted">years</span>
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-card p-6">
              <p className="text-xs uppercase tracking-widest text-muted">Current focus</p>
              <p className="mt-3 text-sm font-medium text-accent">
                AI product development
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
