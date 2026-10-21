"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
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

  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 600], [0, 70]);
  const heroOpacity = useTransform(scrollY, [0, 500], [1, 0.88]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 18 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.55,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-20 border-b border-white/[0.06] overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          style={{ y: heroY, opacity: heroOpacity }}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center"
        >
          {/* Left Column: Headline, Bio, CTAs, Skills */}
          <div className="lg:col-span-7 xl:col-span-8">
            {/* Availability pill & Location */}
            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-3 mb-6">
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
              variants={itemVariants}
              className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mb-4"
            >
              {profile.name}
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-lg sm:text-xl md:text-2xl font-semibold text-zinc-200 mb-5 leading-snug"
            >
              {profile.title}
            </motion.p>

            {/* Concise Value Statement */}
            <motion.p
              variants={itemVariants}
              className="text-sm sm:text-base text-zinc-300 leading-relaxed mb-8 max-w-2xl"
            >
              Bridging quantitative mathematics, automated spreadsheet pipelines, and production web applications. I help teams eliminate repetitive reporting bottlenecks, model reliable database schemas, and deploy responsive software systems.
            </motion.p>

            {/* Action CTAs & Professional Links */}
            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-3 mb-10">
              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white text-zinc-950 font-semibold text-xs hover:bg-zinc-200 transition-colors shadow-sm"
              >
                <span>Explore Selected Work</span>
                <ArrowDown className="w-3.5 h-3.5" />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                href="#resume-section"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.1] text-zinc-200 hover:text-white font-medium text-xs transition-colors"
              >
                <FileText className="w-3.5 h-3.5 text-zinc-400" />
                <span>Review Resume & CV</span>
              </motion.a>

              <div className="flex items-center gap-2 ml-1">
                <motion.a
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.94 }}
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.09] border border-white/[0.08] text-zinc-300 hover:text-white transition-colors"
                  aria-label="GitHub Profile (@nadeemalam178)"
                  title="GitHub Profile"
                >
                  <Github className="w-4 h-4" />
                </motion.a>

                <motion.a
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.94 }}
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.09] border border-white/[0.08] text-zinc-300 hover:text-white transition-colors"
                  aria-label="LinkedIn Profile"
                  title="LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4" />
                </motion.a>
              </div>
            </motion.div>

            {/* Core Technical Foundation Pills */}
            <motion.div variants={itemVariants} className="pt-6 border-t border-white/[0.06]">
              <div className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 mb-3">
                Core Technical Competencies
              </div>
              <div className="flex flex-wrap gap-2">
                {verifiedQuickSkills.map((skill, idx) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.35 + idx * 0.05, duration: 0.4 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/[0.03] border border-white/[0.07] text-xs font-mono text-zinc-300 transition-colors hover:border-cyan-500/40"
                  >
                    <CheckCircle2 className="w-3 h-3 text-cyan-400" />
                    <span>{skill}</span>
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column: Studio Portrait in Double-Bezel Concentric Frame */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-5 xl:col-span-4 flex justify-center lg:justify-end mt-2 lg:mt-0"
          >
            <div className="relative group max-w-[280px] sm:max-w-[320px] lg:max-w-none w-full">
              {/* Subtle ambient breathing glow */}
              <div className="absolute -inset-2 rounded-[2.25rem] bg-gradient-to-tr from-cyan-500/25 via-blue-600/20 to-purple-600/25 blur-2xl opacity-60 group-hover:opacity-100 transition-opacity duration-700 -z-10" />

              {/* Double-bezel concentric frame */}
              <div className="p-1.5 rounded-[2.25rem] bg-gradient-to-b from-white/[0.16] via-white/[0.05] to-white/[0.02] border border-white/[0.1] shadow-2xl">
                <div className="relative rounded-[calc(2.25rem-6px)] overflow-hidden bg-[#0c0e17] aspect-[9/13] sm:aspect-[3/4]">
                  <Image
                    src="/nadeem-alam.jpg"
                    alt="Nadeem Alam | Data Analyst & Full-Stack Automation Engineer"
                    width={600}
                    height={800}
                    priority
                    className="w-full h-full object-cover object-top filter grayscale contrast-[1.08] brightness-[0.98] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                  />

                  {/* Subtle dark gradient overlay at the bottom for seamless contrast */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#08090d]/90 via-[#08090d]/25 to-transparent pointer-events-none" />

                  {/* Floating status badge */}
                  <div className="absolute bottom-3.5 inset-x-3.5 p-3 rounded-2xl bg-[#090b14]/85 backdrop-blur-xl border border-white/[0.12] shadow-xl flex items-center justify-between">
                    <div className="min-w-0 pr-2">
                      <div className="text-xs font-bold text-white truncate">{profile.name}</div>
                      <div className="text-[10.5px] text-cyan-400 font-mono truncate">Data Analyst & Developer</div>
                    </div>
                    <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[10px] font-mono shrink-0">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      <span>Active</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
