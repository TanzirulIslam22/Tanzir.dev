import type { Metadata, Viewport } from "next";
import "./globals.css";
import Base from "@/app/base";
import { profile } from "@/lib/data";

export const metadata: Metadata = {
  metadataBase: new URL("https://tanzirul-islam.vercel.app"),
  title: {
    default: `${profile.fullName} — MERN + AI Full-Stack Developer`,
    template: "%s — Tanzirul Islam",
  },
  description:
    "I'm Tanzirul Islam, a full-stack developer building AI-powered, interactive web experiences on the MERN stack — React, Next.js, Node.js, MongoDB and AI integration.",
  keywords: [
    "Tanzirul Islam",
    "Tanzir",
    "MERN developer",
    "full-stack developer",
    "AI developer",
    "React developer",
    "Bangladesh",
  ],
  authors: [{ name: profile.fullName }],
  creator: profile.fullName,
  openGraph: {
    title: `${profile.fullName} — MERN + AI Full-Stack Developer`,
    description:
      "I build AI-powered, interactive web experiences with the MERN stack and AI integration.",
    type: "website",
    locale: "en_US",
    url: "https://tanzirul-islam.vercel.app",
    siteName: "Tanzirul Islam",
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.fullName} — MERN + AI Full-Stack Developer`,
    description:
      "I build AI-powered, interactive web experiences with the MERN stack and AI integration.",
  },
};

export const viewport: Viewport = {
  themeColor: "#0b0a07",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <Base>{children}</Base>
      </body>
    </html>
  );
}
