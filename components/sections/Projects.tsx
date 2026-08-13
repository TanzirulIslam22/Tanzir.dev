"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import { projects } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";

export default function Projects() {
  return (
    <section id="work" className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
      <SectionHeading number="03" title="Selected Work" />

      <div className="mt-16 space-y-24 md:space-y-32">
        {projects.map((project, index) => {
          const reversed = index % 2 === 1;
          return (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-120px" }}
              transition={{ duration: 0.8 }}
              className={`grid items-center gap-10 lg:grid-cols-12 lg:gap-16 ${
                reversed ? "" : ""
              }`}
            >
              <div className={`lg:col-span-7 ${reversed ? "lg:order-2" : ""}`}>
                <div
                  className="group relative overflow-hidden rounded-2xl border border-white/10"
                  style={{ boxShadow: `0 30px 80px -30px ${project.accent}33` }}
                >
                  <div
                    className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    style={{ background: `radial-gradient(circle at center, ${project.accent}1a, transparent 70%)` }}
                  />
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={1240}
                    height={820}
                    className="w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/5" />
                </div>
              </div>

              <div className={`lg:col-span-5 ${reversed ? "lg:order-1" : ""}`}>
                <div className="flex items-center gap-4">
                  <span
                    className="font-display text-xs uppercase tracking-[0.25em]"
                    style={{ color: project.accent }}
                  >
                    {project.category}
                  </span>
                  <span className="text-xs text-muted">— {project.year}</span>
                </div>

                <h3 className="mt-4 font-display text-3xl font-medium tracking-tight text-accent md:text-4xl">
                  {project.title}
                </h3>

                <p className="mt-5 text-base leading-relaxed text-accent/70">
                  {project.description}
                </p>

                <ul className="mt-6 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <li
                      key={tech}
                      className="rounded-full border border-white/10 px-3 py-1 text-xs text-accent/70"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>

                <div className="mt-8 flex items-center gap-6">
                  <a
                    href={project.links.live}
                    target="_blank"
                    rel="noreferrer"
                    className="group inline-flex items-center gap-2 text-sm font-medium text-accent transition-colors hover:opacity-80"
                  >
                    View live
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                  <a
                    href={project.links.code}
                    target="_blank"
                    rel="noreferrer"
                    className="group inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-accent"
                  >
                    Source code
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </div>
              </div>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}
