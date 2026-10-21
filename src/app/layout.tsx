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
  title: "Nadeem Alam | Data Analyst & Full-Stack Automation Engineer",
  description:
    "Portfolio of Nadeem Alam showcasing flagship projects like Radiant Hospitals HMS, Kosi Voter Digitalization, ZP Dashboards, and an interactive curriculum vitae.",
  keywords: [
    "Nadeem Alam",
    "Data Analyst",
    "MIS Executive",
    "Full Stack Developer",
    "Patna Bihar",
    "Next.js Portfolio",
    "TypeScript",
    "Looker Studio",
    "SQL",
  ],
  authors: [{ name: "Nadeem Alam", url: "https://github.com/nadeemalam178" }],
  openGraph: {
    title: "Nadeem Alam | Data Analyst & Full-Stack Automation Engineer",
    description:
      "Transforming complex operational datasets into fluid, high-impact analytical dashboards and web systems.",
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
