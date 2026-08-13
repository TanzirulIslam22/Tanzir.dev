"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";

import { profile } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { MagneticButton } from "@/components/ui/MagneticButton";

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
      <SectionHeading number="06" title="Contact" />

      <div className="mt-16 grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-8">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="font-display text-5xl leading-[1.05] tracking-tight text-accent md:text-7xl"
          >
            Have an idea?
            <br />
            Let&apos;s build it
            <br />
            <span className="text-outline">together.</span>
          </motion.h2>

          <MagneticButton
            href={`mailto:${profile.email}`}
            className="group mt-12 inline-flex items-center gap-3 rounded-full bg-accent px-8 py-4 text-sm font-semibold text-bg transition-transform hover:scale-[1.03]"
          >
            <Mail className="h-4 w-4" />
            {profile.email}
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </MagneticButton>

          <div className="mt-10 flex items-center gap-6">
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2 text-sm text-accent/60 transition-colors hover:text-accent"
            >
              <Github className="h-5 w-5" />
              GitHub
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2 text-sm text-accent/60 transition-colors hover:text-accent"
            >
              <Linkedin className="h-5 w-5" />
              LinkedIn
            </a>
          </div>
        </div>

        <div className="flex items-end lg:col-span-4">
          <div className="w-full space-y-4">
            <div className="rounded-2xl border border-white/10 bg-card p-6">
              <p className="text-xs uppercase tracking-widest text-muted">Email</p>
              <a
                href={`mailto:${profile.email}`}
                className="mt-2 block break-all text-sm text-accent hover:underline"
              >
                {profile.email}
              </a>
            </div>
            <div className="rounded-2xl border border-white/10 bg-card p-6">
              <p className="text-xs uppercase tracking-widest text-muted">Location</p>
              <p className="mt-2 text-sm text-accent">{profile.location}</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-card p-6">
              <p className="text-xs uppercase tracking-widest text-muted">Response time</p>
              <p className="mt-2 text-sm text-accent">Within 24 hours</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
