import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://nadeem-portfolio.vercel.app"),
  title: "Nadeem Alam — Data, Automation & Software",
  description:
    "Nadeem Alam builds practical data systems, reporting automation, and web applications for teams working with complex operational data.",
  keywords: [
    "Nadeem Alam",
    "Data Analyst",
    "Automation Developer",
    "Full-Stack Application Builder",
    "MIS Reporting",
    "Google Apps Script",
    "Next.js",
    "TypeScript",
    "SQL",
    "Patna Bihar",
  ],
  authors: [{ name: "Nadeem Alam", url: "https://github.com/nadeemalam178" }],
  openGraph: {
    title: "Nadeem Alam — Data, Automation & Software",
    description: "Operational analytics, workflow automation, and useful software built around real working problems.",
    type: "website",
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://nadeem-portfolio.vercel.app",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`} data-scroll-behavior="smooth">
      <head>
        <link rel="stylesheet" href="/portfolio-motion.css" />
      </head>
      <body className="min-h-screen antialiased">
        {children}
      </body>
    </html>
  );
}
