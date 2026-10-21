"use client";

import { useState } from "react";
import {
  FileText,
  Printer,
  Download,
  Briefcase,
  GraduationCap,
  Award,
  CheckCircle2,
  TrendingUp,
  MapPin,
  Calendar,
  ExternalLink,
  Sparkles,
} from "lucide-react";
import { profile } from "@/data/profile";
import AntigravityCard from "@/components/AntigravityCard";

interface ResumeSectionProps {
  onOpenCvModal: () => void;
}

export default function ResumeSection({ onOpenCvModal }: ResumeSectionProps) {
  const [activeTab, setActiveTab] = useState<"experience" | "education" | "certifications">("experience");

  const impactMetrics = [
    { value: "75%", label: "Report Turnaround Reduction", sub: "Via automated Apps Script workflows" },
    { value: "250K+", label: "Voter & MIS Rows Standardized", sub: "Across 13 administrative districts" },
    { value: "Top 5%", label: "TCS NQT Cognitive Recognized", sub: "Quantitative & Analytical Aptitude" },
    { value: "MCA '28", label: "Advanced Software Scholar", sub: "B.Sc. Mathematics (Hons.) foundation" },
  ];

  return (
    <section id="resume-section" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/[0.08] border border-purple-500/20 text-purple-400 text-xs font-mono mb-3">
            <FileText className="w-3.5 h-3.5" />
            <span>Executive Curriculum Vitae & Career Impact</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Proof-Driven Professional Impact
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 max-w-xl mt-2 leading-relaxed">
            A quantifiable track record bridging mathematical data analysis, MIS governance, and full-stack software delivery.
          </p>
        </div>

        {/* Impact Numbers Grid (Double-bezel hardware enclosure) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {impactMetrics.map((metric, i) => (
            <AntigravityCard
              key={i}
              glowColor="rgba(168, 85, 247, 0.25)"
              tiltIntensity={6}
              className="p-5 bg-gradient-to-br from-white/[0.04] to-white/[0.01] border-white/[0.08]"
            >
              <div className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-purple-400 via-indigo-400 to-cyan-400 bg-clip-text text-transparent mb-1 font-mono">
                {metric.value}
              </div>
              <div className="text-xs font-bold text-white mb-1">
                {metric.label}
              </div>
              <div className="text-[11px] text-zinc-400">
                {metric.sub}
              </div>
            </AntigravityCard>
          ))}
        </div>

        {/* Central Resume Hub */}
        <div className="max-w-4xl mx-auto p-1.5 rounded-[2rem] bg-gradient-to-b from-white/[0.12] to-white/[0.02] border border-white/[0.09] shadow-2xl backdrop-blur-2xl">
          <div className="rounded-[calc(2rem-6px)] bg-[#0a0d16] p-6 sm:p-8 shadow-inner">
            {/* Top Bar: Tabs & Print Engine Trigger */}
            <div className="flex flex-wrap items-center justify-between gap-4 pb-5 mb-6 border-b border-white/[0.08]">
              {/* Tab Switcher */}
              <div className="flex rounded-xl bg-white/[0.04] p-1 border border-white/[0.06]">
                <button
                  onClick={() => setActiveTab("experience")}
                  className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                    activeTab === "experience"
                      ? "bg-purple-600 text-white shadow-md shadow-purple-900/50"
                      : "text-zinc-400 hover:text-white"
                  }`}
                >
                  <Briefcase className="w-3.5 h-3.5" />
                  <span>Work Experience</span>
                </button>

                <button
                  onClick={() => setActiveTab("education")}
                  className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                    activeTab === "education"
                      ? "bg-purple-600 text-white shadow-md shadow-purple-900/50"
                      : "text-zinc-400 hover:text-white"
                  }`}
                >
                  <GraduationCap className="w-3.5 h-3.5" />
                  <span>Education</span>
                </button>

                <button
                  onClick={() => setActiveTab("certifications")}
                  className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                    activeTab === "certifications"
                      ? "bg-purple-600 text-white shadow-md shadow-purple-900/50"
                      : "text-zinc-400 hover:text-white"
                  }`}
                >
                  <Award className="w-3.5 h-3.5" />
                  <span>Certifications</span>
                </button>
              </div>

              {/* Single Central Print / Open Full Document Action */}
              <button
                onClick={onOpenCvModal}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white text-xs font-semibold shadow-md shadow-blue-500/20 hover:scale-105 transition-all"
              >
                <Printer className="w-3.5 h-3.5" />
                <span>Print / Save ATS Resume</span>
              </button>
            </div>

            {/* Tab 1: Experience */}
            {activeTab === "experience" && (
              <div className="space-y-6">
                {profile.experience.map((exp, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-purple-500/30 transition-all"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-1.5">
                      <div className="text-base font-bold text-white flex items-center gap-2">
                        <span>{exp.role}</span>
                        <span className="text-zinc-400 font-normal">@</span>
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
                          <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 shrink-0 mt-0.5" />
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
                  </div>
                ))}
              </div>
            )}

            {/* Tab 2: Education */}
            {activeTab === "education" && (
              <div className="space-y-4">
                {profile.education.map((edu, idx) => (
                  <div
                    key={idx}
                    className="p-4 sm:p-5 rounded-2xl bg-white/[0.02] border border-white/[0.06] flex flex-col sm:flex-row sm:items-center justify-between gap-2"
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
                  </div>
                ))}
              </div>
            )}

            {/* Tab 3: Certifications */}
            {activeTab === "certifications" && (
              <div className="space-y-3">
                {profile.certifications.map((cert, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-gradient-to-r from-amber-500/10 to-transparent border border-amber-500/20 flex items-center gap-3 text-xs sm:text-sm text-zinc-200"
                  >
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                    <span className="font-semibold">{cert}</span>
                  </div>
                ))}

                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.05] mt-4">
                  <div className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-2">
                    Spoken & Technical Communication Languages
                  </div>
                  <div className="flex flex-wrap gap-2 text-xs font-medium text-zinc-300">
                    {profile.languages.map((l) => (
                      <span key={l} className="px-3 py-1 rounded-lg bg-white/[0.05] border border-white/[0.07]">
                        {l}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
