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
  title: "Nadeem Alam — Data Analyst, Automation Developer & Software Builder",
  description:
    "Nadeem Alam builds operational data pipelines, reporting automation, and web applications for teams working with complex operational data.",
  keywords: [
    "Nadeem Alam",
    "Nadeem Alam Portfolio",
    "Data Analyst Patna",
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
  creator: "Nadeem Alam",
  publisher: "Nadeem Alam",
  alternates: {
    canonical: "/",
  },
  verification: {
    google: "de28790a2b70fee9",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Nadeem Alam — Data Analyst, Automation Developer & Software Builder",
    description: "Operational analytics, workflow automation, and useful software built around real working problems.",
    type: "website",
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://nadeem-portfolio.vercel.app",
    siteName: "Nadeem Alam Portfolio",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nadeem Alam — Data Analyst, Automation Developer & Software Builder",
    description: "Operational analytics, workflow automation, and useful software built around real working problems.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://nadeem-portfolio.vercel.app/#person",
      "name": "Nadeem Alam",
      "url": "https://nadeem-portfolio.vercel.app",
      "jobTitle": "Data Analyst & Full-Stack Application Builder",
      "worksFor": {
        "@type": "Organization",
        "name": "JSPT Consultants Pvt. Ltd.",
      },
      "alumniOf": [
        {
          "@type": "EducationalOrganization",
          "name": "Magadh University",
        },
        {
          "@type": "EducationalOrganization",
          "name": "Sikkim Manipal University",
        },
      ],
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Patna",
        "addressRegion": "Bihar",
        "addressCountry": "India",
      },
      "sameAs": [
        "https://github.com/nadeemalam178",
        "https://www.linkedin.com/in/nadeem-alam-2853b9232",
      ],
      "knowsAbout": [
        "Data Analytics",
        "Workflow Automation",
        "Google Apps Script",
        "SQL",
        "Looker Studio",
        "TypeScript",
        "Next.js",
        "Full-Stack Development",
        "MIS Reporting",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://nadeem-portfolio.vercel.app/#website",
      "url": "https://nadeem-portfolio.vercel.app",
      "name": "Nadeem Alam Portfolio",
      "description":
        "Operational analytics, workflow automation, and useful software built around real working problems.",
      "publisher": {
        "@id": "https://nadeem-portfolio.vercel.app/#person",
      },
    },
  ],
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen antialiased">
        {children}
      </body>
    </html>
  );
}
