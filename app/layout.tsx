import type { Metadata } from "next";
import { Syne, Manrope } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { Preloader } from "@/components/Preloader";
import { Cursor } from "@/components/Cursor";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
  weight: ["500", "600", "700", "800"],
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Tanzirul Islam — MERN + AI Full-Stack Developer",
  description:
    "Full-Stack Developer building AI-powered, interactive web experiences on the MERN stack. React, Next.js, Node.js, MongoDB and AI integration.",
  keywords: [
    "Tanzirul Islam",
    "Tanzir",
    "MERN developer",
    "full-stack developer",
    "AI developer",
    "React developer",
    "Bangladesh",
  ],
  openGraph: {
    title: "Tanzirul Islam — MERN + AI Full-Stack Developer",
    description:
      "I build AI-powered, interactive web experiences with the MERN stack and AI integration.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${syne.variable} ${manrope.variable}`}>
      <body className="bg-noise bg-bg">
        <Preloader />
        <Cursor />
        <ScrollProgress />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
