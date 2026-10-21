"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FileText,
  Printer,
  Briefcase,
  GraduationCap,
  Award,
  CheckCircle2,
  MapPin,
  Calendar,
} from "lucide-react";
import { profile } from "@/data/profile";
import AntigravityCard from "@/components/AntigravityCard";

interface ResumeSectionProps {
  onOpenCvModal: () => void;
}

export default function ResumeSection({ onOpenCvModal }: ResumeSectionProps) {
  const [activeTab, setActiveTab] = useState<"experience" | "education" | "certifications" | "skills">("experience");

  const verifiedMilestones = [
    { value: "JSPT & JOGGF", label: "Operational Experience", sub: "Data Analyst & Executive Officer roles" },
    { value: "MCA '28", label: "Advanced Computing Scholar", sub: "B.Sc. Mathematics (Hons) analytical foundation" },
    { value: "TCS NQT", label: "Cognitive Performance Recognized", sub: "Standardized quantitative assessment" },
    { value: "STET & CTET", label: "State & National Qualifications", sub: "Teaching eligibility credential verified" },
  ];

  const tabItems = [
    { id: "experience", label: "Work Experience", icon: Briefcase },
    { id: "education", label: "Education", icon: GraduationCap },
    { id: "certifications", label: "Certifications", icon: Award },
    { id: "skills", label: "Skills Matrix", icon: CheckCircle2 },
  ] as const;

  return (
    <section id="resume-section" className="py-24 border-b border-white/[0.06] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-mono mb-3">
            <FileText className="w-3.5 h-3.5" />
            <span>Verified Credentials & Experience</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
            Curriculum Vitae & Career History
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 max-w-xl mt-2 leading-relaxed">
            Substantiated employment history, academic qualifications in mathematics and computer applications, and verified technical credentials.
          </p>
        </motion.div>

        {/* Milestone Cards Grid with staggered entrance */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {verifiedMilestones.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -3, transition: { duration: 0.2 } }}
            >
              <AntigravityCard
                glowColor="rgba(168, 85, 247, 0.15)"
                tiltIntensity={5}
                className="p-5 bg-[#0b0d14] border-white/[0.08] h-full"
              >
                <div className="text-xl sm:text-2xl font-bold text-white mb-1 font-mono">
                  {m.value}
                </div>
                <div className="text-xs font-bold text-purple-400 mb-1">
                  {m.label}
                </div>
                <div className="text-[11px] text-zinc-400">
                  {m.sub}
                </div>
              </AntigravityCard>
            </motion.div>
          ))}
        </div>

        {/* Central Resume Hub */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.65, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl mx-auto p-1 rounded-2xl bg-gradient-to-b from-white/[0.1] to-white/[0.02] border border-white/[0.08] shadow-2xl"
        >
          <div className="rounded-[calc(1rem-2px)] bg-[#090b12] p-5 sm:p-8">
            {/* Top Bar: Tabs & Print Trigger */}
            <div className="flex flex-wrap items-center justify-between gap-3 pb-5 mb-6 border-b border-white/[0.08]">
              {/* Tab Switcher with sliding animated indicator */}
              <div className="flex flex-wrap rounded-xl bg-white/[0.04] p-1 border border-white/[0.06]">
                {tabItems.map((tab) => {
                  const Icon = tab.icon;
                  const isActive = activeTab === tab.id;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`relative flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                        isActive ? "text-zinc-950 font-bold" : "text-zinc-400 hover:text-white"
                      }`}
                    >
                      {isActive && (
                        <motion.div
                          layoutId="resume-tab-active"
                          className="absolute inset-0 bg-white rounded-lg shadow-sm"
                          transition={{ type: "spring", stiffness: 450, damping: 32 }}
                        />
                      )}
                      <span className="relative z-10 flex items-center gap-1.5">
                        <Icon className="w-3.5 h-3.5" />
                        <span>{tab.label}</span>
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Single Central Print Action */}
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={onOpenCvModal}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/[0.06] hover:bg-white/[0.12] text-white text-xs font-semibold border border-white/[0.1] transition-colors"
              >
                <Printer className="w-3.5 h-3.5 text-zinc-300" />
                <span>Full ATS Resume View & Print</span>
              </motion.button>
            </div>

            {/* Tab Contents with AnimatePresence */}
            <AnimatePresence mode="wait">
              {activeTab === "experience" && (
                <motion.div
                  key="experience"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                  className="space-y-6"
                >
                  {profile.experience.map((exp, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -16 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-30px" }}
                      transition={{ duration: 0.45, delay: idx * 0.08 }}
                      className="p-5 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-white/[0.12] transition-colors"
                    >
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-1.5">
                        <div className="text-base font-bold text-white flex items-center gap-2">
                          <span>{exp.role}</span>
                          <span className="text-zinc-500 font-normal">@</span>
                          <span className="text-cyan-400 font-semibold">{exp.organization}</span>
                        </div>
                        <div className="flex items-center gap-1.5 text-xs font-mono text-purple-400 bg-purple-950/40 px-2.5 py-0.5 rounded-full border border-purple-800/40">
                          <Calendar className="w-3 h-3" />
                          <span>{exp.period}</span>
                        </div>
                      </div>

                      <div className="text-xs text-zinc-400 mb-3 flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        <span>{exp.location} • {exp.type}</span>
                      </div>

                      <ul className="space-y-2 mb-4">
                        {exp.description.map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-xs text-zinc-300 leading-relaxed">
                            <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/[0.04]">
                        {exp.skills.map((s) => (
                          <span
                            key={s}
                            className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-white/[0.04] text-zinc-300"
                          >
                            {s}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              )}

              {activeTab === "education" && (
                <motion.div
                  key="education"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                  className="space-y-4"
                >
                  {profile.education.map((edu, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -16 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-30px" }}
                      transition={{ duration: 0.45, delay: idx * 0.08 }}
                      className="p-4 sm:p-5 rounded-xl bg-white/[0.02] border border-white/[0.06] flex flex-col sm:flex-row sm:items-center justify-between gap-2"
                    >
                      <div>
                        <div className="text-sm sm:text-base font-bold text-white">{edu.degree}</div>
                        <div className="text-xs text-cyan-400 font-medium">{edu.institution}</div>
                        {edu.details && (
                          <div className="text-[11px] text-zinc-400 mt-1">{edu.details}</div>
                        )}
                      </div>
                      <span className="text-xs font-mono text-purple-400 bg-purple-950/40 px-3 py-1 rounded-full border border-purple-800/40 shrink-0 self-start sm:self-auto">
                        {edu.period}
                      </span>
                    </motion.div>
                  ))}
                </motion.div>
              )}

              {activeTab === "certifications" && (
                <motion.div
                  key="certifications"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                  className="space-y-3"
                >
                  {profile.certifications.map((cert, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] flex items-center gap-3 text-xs sm:text-sm text-zinc-200"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span className="font-semibold">{cert}</span>
                    </div>
                  ))}

                  <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.05] mt-4">
                    <div className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-2">
                      Verified Languages
                    </div>
                    <div className="flex flex-wrap gap-2 text-xs font-medium text-zinc-300">
                      {profile.languages.map((l) => (
                        <span key={l} className="px-3 py-1 rounded-lg bg-white/[0.04] border border-white/[0.06]">
                          {l}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === "skills" && (
                <motion.div
                  key="skills"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                  className="grid grid-cols-1 md:grid-cols-2 gap-4"
                >
                  {profile.skillGroups.map((group, idx) => (
                    <div key={idx} className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                      <div className="text-xs font-bold text-white mb-2 pb-1 border-b border-white/[0.06]">
                        {group.category}
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {group.skills.map((s) => (
                          <span
                            key={s}
                            className="text-[11px] font-mono px-2 py-0.5 rounded bg-white/[0.04] text-zinc-300 border border-white/[0.04]"
                          >
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
