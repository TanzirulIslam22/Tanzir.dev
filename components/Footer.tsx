"use client";

import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";

import { profile } from "@/lib/data";

export default function Footer() {
  const nameLine = (
    <span className="flex items-center">
      <span className="font-display text-[9vw] leading-none tracking-tight text-transparent md:text-[7vw]" style={{ WebkitTextStroke: "1px rgba(242,233,220,0.18)" }}>
        TANZIRUL ISLAM
      </span>
      <span className="mx-8 text-accent">*</span>
    </span>
  );

  return (
    <footer className="relative overflow-hidden border-t border-white/10">
      <div className="mx-auto max-w-7xl px-5 pt-16 md:px-8">
        <div className="flex flex-col items-start justify-between gap-8 pb-16 md:flex-row md:items-center">
          <div>
            <p className="font-display text-2xl font-semibold tracking-tight text-accent">
              {profile.firstName}
              <span className="text-accent">.</span>
            </p>
            <p className="mt-2 text-sm text-muted">
              Building AI-powered web experiences.
            </p>
          </div>

          <nav className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <Link href="#about" className="text-sm text-accent/60 transition-colors hover:text-accent">
              About
            </Link>
            <Link href="#work" className="text-sm text-accent/60 transition-colors hover:text-accent">
              Work
            </Link>
            <Link href="#services" className="text-sm text-accent/60 transition-colors hover:text-accent">
              Services
            </Link>
            <Link href="#contact" className="text-sm text-accent/60 transition-colors hover:text-accent">
              Contact
            </Link>
          </nav>

          <div className="flex items-center gap-5">
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="text-accent/60 transition-colors hover:text-accent"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="text-accent/60 transition-colors hover:text-accent"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href={`mailto:${profile.email}`}
              aria-label="Email"
              className="text-accent/60 transition-colors hover:text-accent"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>

      <div className="flex w-max animate-marquee-slow border-t border-white/10 py-6" aria-hidden="true">
        <div className="flex shrink-0 items-center">{nameLine}</div>
        <div className="flex shrink-0 items-center">{nameLine}</div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-5 py-6 text-xs text-muted md:flex-row md:px-8">
          <p>© {new Date().getFullYear()} {profile.fullName}. All rights reserved.</p>
          <p>
            Designed & built with <span className="text-accent">♥</span> in Dhaka.
          </p>
        </div>
      </div>
    </footer>
  );
}
