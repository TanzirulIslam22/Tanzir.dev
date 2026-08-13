"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import { miniProjects } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";

export default function Experiments() {
  return (
    <section id="experiments" className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
      <SectionHeading number="04" title="Experiments" />

      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {miniProjects.map((project, i) => (
          <motion.a
            key={project.title}
            href="#contact"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-card p-7 transition-colors hover:border-accent/40"
          >
            <div>
              <div className="flex items-start justify-between">
                <span className="font-display text-xs text-muted">0{i + 1}</span>
                <ArrowUpRight className="h-4 w-4 text-muted transition-all group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-accent" />
              </div>
              <h3 className="mt-8 font-display text-2xl font-medium text-accent">
                {project.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-accent/60">
                {project.description}
              </p>
            </div>
            <ul className="mt-8 flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <li
                  key={tech}
                  className="rounded-full border border-white/10 px-3 py-1 text-xs text-accent/70"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
