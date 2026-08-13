"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { skills } from "@/lib/data";
import { SectionHeading } from "@/components/SectionHeading";

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
      <SectionHeading number="02" title="Skills" />

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((group, i) => (
          <motion.div
            key={group.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: i * 0.08 }}
            className="group rounded-2xl border border-white/10 bg-card p-7 transition-colors hover:border-accent/40"
          >
            <div className="flex items-center justify-between">
              <h3 className="font-display text-xl font-medium text-accent">
                {group.title}
              </h3>
              <span className="font-display text-xs text-muted">
                0{i + 1}
              </span>
            </div>
            <ul className="mt-6 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-white/10 px-3 py-1 text-xs text-accent/70"
                >
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.32 }}
          className="flex flex-col justify-between rounded-2xl border border-dashed border-accent/30 bg-accent/5 p-7"
        >
          <div>
            <h3 className="font-display text-xl font-medium text-accent">
              Currently exploring
            </h3>
            <ul className="mt-6 flex flex-wrap gap-2">
              {["GraphQL", "LangChain", "WebGL", "Three.js"].map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-accent/20 px-3 py-1 text-xs text-accent"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <a
            href="#contact"
            className="mt-8 inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-accent"
          >
            Suggest something to learn
            <ArrowRight className="h-4 w-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
