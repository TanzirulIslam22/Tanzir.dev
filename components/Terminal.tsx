"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

import { cn } from "@/lib/utils";

type Line = { cmd?: string; text?: string; indent?: boolean };

const TABS: Array<{ id: string; label: string; lines: Line[] }> = [
  {
    id: "mern",
    label: "MERN stack",
    lines: [
      { cmd: "cat stack.json" },
      { text: "{" },
      { text: '"frontend": "React / Next.js"', indent: true },
      { text: '"backend": "Node.js / Express"', indent: true },
      { text: '"database": "MongoDB / PostgreSQL"', indent: true },
      { text: '"ai": "OpenAI · RAG · Agents"', indent: true },
      { text: "}" },
    ],
  },
  {
    id: "ai",
    label: "AI RAG",
    lines: [
      { cmd: "ls ai-tools/" },
      { text: "openai   pinecone   langchain" },
      { text: "RAG pipelines · embeddings · agents" },
    ],
  },
  {
    id: "backend",
    label: "Backend",
    lines: [
      { cmd: "npm run serve" },
      { text: "✔ REST API ready on port 5000" },
      { text: "JWT auth · WebSockets · MongoDB" },
    ],
  },
];

export function Terminal() {
  const [active, setActive] = useState(TABS[0].id);
  const tab = TABS.find((t) => t.id === active) ?? TABS[0];

  return (
    <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-surface shadow-2xl">
      <div className="flex items-center gap-1.5 border-b border-white/10 px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-green-400/70" />
        <span className="ml-3 font-mono text-xs text-muted">tanzir.dev — bash</span>
      </div>

      <div className="flex items-center gap-1 border-b border-white/10 px-3 pt-2">
        {TABS.map((t) => {
          const isActive = t.id === active;
          return (
            <button
              key={t.id}
              type="button"
              onClick={() => setActive(t.id)}
              className={cn(
                "relative rounded-t-lg px-4 py-2 font-mono text-xs transition-colors duration-300",
                isActive ? "text-accent" : "text-muted hover:text-accent/80"
              )}
            >
              {t.label}
              {isActive && (
                <motion.span
                  layoutId="terminal-tab"
                  transition={{ type: "spring", stiffness: 400, damping: 32 }}
                  className="absolute inset-x-2 -bottom-px h-px bg-accent"
                />
              )}
            </button>
          );
        })}
      </div>

      <div className="min-h-[230px] px-5 py-4 font-mono text-sm leading-relaxed">
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
          >
            {tab.lines.map((line, i) => (
              <motion.div
                key={`${active}-${i}`}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.25, delay: i * 0.09 }}
                className="flex gap-2"
              >
                {line.cmd ? (
                  <>
                    <span className="text-accent">$</span>
                    <span className="text-accent/90">{line.cmd}</span>
                  </>
                ) : (
                  <span
                    className={line.indent ? "pl-6 text-accent/60" : "text-accent/60"}
                  >
                    {line.text}
                  </span>
                )}
              </motion.div>
            ))}
            <span className="mt-1 inline-block h-4 w-2 animate-blink bg-accent" />
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
