"use client";

import { motion } from "framer-motion";
import { ArrowDown, FileText, CheckCircle2, MapPin } from "lucide-react";
import { Github, Linkedin } from "@/components/Icons";
import { profile } from "@/data/profile";

export default function Hero() {
  const verifiedQuickSkills = [
    "SQL (MySQL / PostgreSQL)",
    "Google Apps Script Automation",
    "Looker Studio & MIS",
    "Advanced Excel & Sheets",
    "TypeScript & Next.js",
    "Python Data Pipelines",
  ];

  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-20 border-b border-white/[0.06] overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl">
          {/* Availability pill & Location */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="flex flex-wrap items-center gap-3 mb-6"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>{profile.availability}</span>
            </div>

            <div className="inline-flex items-center gap-1.5 text-xs text-zinc-400 font-mono">
              <MapPin className="w-3.5 h-3.5 text-zinc-500" />
              <span>{profile.location}</span>
            </div>
          </motion.div>

          {/* Name & Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mb-4"
          >
            {profile.name}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg sm:text-xl md:text-2xl font-semibold text-zinc-200 mb-5 leading-snug"
          >
            {profile.title}
          </motion.p>

          {/* Concise Value Statement */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="text-sm sm:text-base text-zinc-300 leading-relaxed mb-8 max-w-2xl"
          >
            Bridging quantitative mathematics, automated spreadsheet pipelines, and production web applications. I help teams eliminate repetitive reporting bottlenecks, model reliable database schemas, and deploy responsive software systems.
          </motion.p>

          {/* Action CTAs & Professional Links */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap items-center gap-3 mb-10"
          >
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white text-zinc-950 font-semibold text-xs hover:bg-zinc-200 transition-all hover:scale-[1.02] active:scale-95 shadow-sm"
            >
              <span>Explore Selected Work</span>
              <ArrowDown className="w-3.5 h-3.5" />
            </a>

            <a
              href="#resume-section"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.1] text-zinc-200 hover:text-white font-medium text-xs transition-all hover:scale-[1.02]"
            >
              <FileText className="w-3.5 h-3.5 text-zinc-400" />
              <span>Review Resume & CV</span>
            </a>

            <div className="flex items-center gap-2 ml-1">
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.09] border border-white/[0.08] text-zinc-300 hover:text-white transition-colors"
                aria-label="GitHub Profile (@nadeemalam178)"
                title="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>

              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.09] border border-white/[0.08] text-zinc-300 hover:text-white transition-colors"
                aria-label="LinkedIn Profile"
                title="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

          {/* Core Technical Foundation Pills */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="pt-6 border-t border-white/[0.06]"
          >
            <div className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 mb-3">
              Core Technical Competencies
            </div>
            <div className="flex flex-wrap gap-2">
              {verifiedQuickSkills.map((skill) => (
                <span
                  key={skill}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/[0.03] border border-white/[0.07] text-xs font-mono text-zinc-300"
                >
                  <CheckCircle2 className="w-3 h-3 text-cyan-400" />
                  <span>{skill}</span>
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
