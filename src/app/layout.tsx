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
  title: "Nadeem Alam | Data Analyst, Automation Developer & Full-Stack Application Builder",
  description:
    "Professional portfolio of Nadeem Alam: Data analyst, reporting specialist, MIS automation developer, and full-stack application builder. Advanced Excel, SQL, Google Apps Script, Next.js, and TypeScript.",
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
    title: "Nadeem Alam | Data Analyst, Automation Developer & Full-Stack Application Builder",
    description:
      "Operational data management, automated reporting workflows, and full-stack application development.",
    type: "website",
    url: "https://github.com/nadeemalam178",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} dark scroll-smooth`}>
      <body className="min-h-screen bg-[#08090d] text-zinc-100 antialiased selection:bg-cyan-500/30 selection:text-cyan-200">
        {children}
      </body>
    </html>
  );
}
