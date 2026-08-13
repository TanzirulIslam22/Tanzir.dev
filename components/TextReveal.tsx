"use client";

import { motion } from "framer-motion";

import { EASE } from "@/lib/motion";

export default function TextReveal({
  text,
  delay = 0,
  className,
  as = "span",
}: {
  text: string;
  delay?: number;
  className?: string;
  as?: "span" | "h1" | "h2" | "h3" | "p";
}) {
  const Tag = motion[as];

  return (
    <Tag
      className={`block overflow-hidden ${className ?? ""}`}
      initial={{ y: "110%" }}
      whileInView={{ y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, delay, ease: EASE }}
    >
      {text}
    </Tag>
  );
}
