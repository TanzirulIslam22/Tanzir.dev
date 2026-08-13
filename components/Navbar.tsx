"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import { profile } from "@/lib/data";
import { cn } from "@/lib/utils";
import { MagneticButton } from "@/components/ui/MagneticButton";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#work", label: "Work" },
  { href: "#experiments", label: "Experiments" },
  { href: "#services", label: "Services" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "border-b border-white/10 bg-bg/80 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:h-20 md:px-8">
        <Link
          href="#home"
          className="font-display text-lg font-semibold tracking-tight text-accent md:text-xl"
        >
          {profile.firstName}
          <span className="text-accent">.</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-accent/60 transition-colors hover:text-accent"
            >
              {link.label}
            </Link>
          ))}
          <MagneticButton
            href="#contact"
            className="rounded-full border border-accent/20 px-5 py-2 text-sm text-accent transition-all hover:border-accent hover:bg-accent hover:text-bg"
          >
            Let&apos;s talk
          </MagneticButton>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-accent/20 text-accent md:hidden"
        >
          <span className="relative block h-3 w-4">
            <span
              className={cn(
                "absolute left-0 top-0 block h-px w-full bg-current transition-all duration-300",
                open && "top-1.5 rotate-45"
              )}
            />
            <span
              className={cn(
                "absolute left-0 top-1.5 block h-px w-full bg-current transition-all duration-300",
                open && "opacity-0"
              )}
            />
            <span
              className={cn(
                "absolute left-0 top-3 block h-px w-full bg-current transition-all duration-300",
                open && "top-1.5 -rotate-45"
              )}
            />
          </span>
        </button>
      </div>

      {open && (
        <nav className="flex h-[calc(100dvh-4rem)] flex-col justify-center gap-2 px-5 md:hidden">
          {links.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="font-display py-3 text-4xl font-medium text-accent transition-colors hover:text-accent"
            >
              <span className="mr-3 text-base text-accent">0{i + 1}</span>
              {link.label}
            </Link>
          ))}
          <MagneticButton
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-6 inline-flex w-fit items-center rounded-full bg-accent px-6 py-3 text-sm font-medium text-bg"
          >
            Let&apos;s talk
          </MagneticButton>
        </nav>
      )}
    </header>
  );
}
