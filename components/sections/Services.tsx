"use client";

import { motion } from "framer-motion";

import { services, values } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";

export default function Services() {
  return (
    <section id="services" className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
      <SectionHeading number="05" title="Services" />

      <div className="mt-14 grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-8">
          <div className="divide-y divide-white/10 border-y border-white/10">
            {services.map((service, i) => (
              <motion.div
                key={service.number}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: i * 0.06 }}
                className="group flex flex-col gap-3 py-8 sm:flex-row sm:items-center sm:gap-8"
              >
                <span className="font-display text-sm text-muted">
                  ({service.number})
                </span>
                <h3 className="flex-1 font-display text-2xl font-medium text-accent transition-colors group-hover:text-accent md:text-3xl">
                  {service.title}
                </h3>
                <p className="max-w-xs text-sm leading-relaxed text-accent/60">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-4">
          <div className="rounded-2xl border border-white/10 bg-card p-7">
            <h4 className="font-display text-lg font-medium text-accent">
              What I value
            </h4>
            <ul className="mt-6 space-y-5">
              {values.map((value) => (
                <li key={value.title} className="flex gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  <div>
                    <p className="text-sm font-medium text-accent">{value.title}</p>
                    <p className="mt-1 text-xs leading-relaxed text-accent/60">
                      {value.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
