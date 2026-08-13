import type { ReactNode } from "react";

import { Manrope, Syne } from "next/font/google";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export default function Base({ children }: { children: ReactNode }) {
  return (
    <div className={`bg-noise ${syne.variable} ${manrope.variable}`}>
      {children}
    </div>
  );
}
