"use client";

import { motion } from "framer-motion";
import { ArrowRight, FileText, Database, BarChart3, Code2, Sparkles } from "lucide-react";
import { Github, Linkedin } from "@/components/Icons";
import { profile } from "@/data/profile";

interface HeroProps {
  onOpenCv: () => void;
}

export default function Hero({ onOpenCv }: HeroProps) {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-emerald-500/[0.08] border border-emerald-500/20 text-emerald-400 text-xs font-medium mb-6 shadow-sm shadow-emerald-950/40"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>{profile.status}</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.1] mb-6"
          >
            Transforming Complex Data into{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-400 bg-clip-text text-transparent">
              Fluid Digital Systems
            </span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl text-zinc-300 max-w-2xl mx-auto leading-relaxed mb-8"
          >
            Hi, I&apos;m <span className="text-white font-semibold">Nadeem Alam</span>. Data Analyst & Full-Stack Automation Engineer with a background in Mathematics & MCA. I build interactive BI dashboards, automated data pipelines, and production web applications.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-3.5 mb-14"
          >
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600 text-white font-medium text-sm shadow-lg shadow-blue-600/30 hover:shadow-cyan-500/25 transition-all hover:scale-[1.03] active:scale-95"
            >
              <span>Explore Projects</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <button
              onClick={onOpenCv}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.12] text-zinc-200 hover:text-white font-medium text-sm backdrop-blur-md transition-all hover:scale-[1.03] active:scale-95"
            >
              <FileText className="w-4 h-4 text-cyan-400" />
              <span>Curriculum Vitae</span>
            </button>

            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.08] text-zinc-300 hover:text-white transition-all hover:scale-105"
              aria-label="GitHub Profile"
            >
              <Github className="w-4 h-4" />
              <span className="text-xs font-mono">nadeemalam178</span>
            </a>
          </motion.div>

          {/* Quick Metrics Bar */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="w-full grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-4xl"
          >
            {profile.stats.map((stat, i) => (
              <div
                key={stat.label}
                className="relative group p-4 rounded-2xl bg-white/[0.03] border border-white/[0.07] hover:border-cyan-500/30 backdrop-blur-md transition-all hover:bg-white/[0.05]"
              >
                <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-br from-white via-zinc-100 to-zinc-400 bg-clip-text text-transparent mb-1">
                  {stat.value}
                </div>
                <div className="text-xs font-medium text-zinc-200">
                  {stat.label}
                </div>
                <div className="text-[11px] text-zinc-300 mt-0.5">
                  {stat.subtext}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
