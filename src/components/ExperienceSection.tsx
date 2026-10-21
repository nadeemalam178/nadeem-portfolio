"use client";

import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Award, CheckCircle2, Calendar, MapPin } from "lucide-react";
import { profile } from "@/data/profile";

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/[0.08] border border-indigo-500/20 text-indigo-400 text-xs font-medium mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Career & Academic Journey</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Work Experience & Education
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 max-w-xl mt-2">
            A track record of high-stakes analytical reporting, operational leadership, and mathematical rigor.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Work Experience Column */}
          <div>
            <div className="flex items-center gap-2.5 mb-8">
              <div className="p-2 rounded-xl bg-blue-500/10 text-cyan-400 border border-blue-500/20">
                <Briefcase className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-white">Professional Experience</h3>
            </div>

            <div className="relative pl-6 border-l border-white/[0.1] space-y-10">
              {profile.experience.map((exp, idx) => (
                <div key={idx} className="relative group">
                  {/* Dot on the timeline */}
                  <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-[#0d1017] border-2 border-cyan-400 group-hover:scale-125 transition-transform" />

                  <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/[0.08] group-hover:border-cyan-500/30 backdrop-blur-md transition-all group-hover:bg-white/[0.05]">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-1.5">
                      <h4 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors">
                        {exp.role}
                      </h4>
                      <div className="flex items-center gap-1.5 text-xs font-mono text-cyan-400 bg-cyan-950/40 px-2.5 py-0.5 rounded-full border border-cyan-800/40">
                        <Calendar className="w-3 h-3" />
                        <span>{exp.period}</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between text-xs text-zinc-400 mb-4">
                      <span className="font-semibold text-zinc-300">{exp.organization}</span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        {exp.location}
                      </span>
                    </div>

                    <ul className="space-y-2 mb-4">
                      {exp.description.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-zinc-300 leading-relaxed">
                          <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/[0.06]">
                      {exp.skills.map((skill) => (
                        <span
                          key={skill}
                          className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-white/[0.05] text-zinc-300"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Certifications Column */}
          <div className="flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2.5 mb-8">
                <div className="p-2 rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/20">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-white">Education & Academics</h3>
              </div>

              <div className="relative pl-6 border-l border-white/[0.1] space-y-6">
                {profile.education.map((edu, idx) => (
                  <div key={idx} className="relative group">
                    <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-[#0d1017] border-2 border-purple-400 group-hover:scale-125 transition-transform" />

                    <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/[0.08] group-hover:border-purple-500/30 backdrop-blur-md transition-all">
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                        <h4 className="text-base font-bold text-white group-hover:text-purple-300 transition-colors">
                          {edu.degree}
                        </h4>
                        <span className="text-xs font-mono text-purple-400 bg-purple-950/40 px-2 py-0.5 rounded-full border border-purple-800/40">
                          {edu.period}
                        </span>
                      </div>

                      <div className="text-xs font-medium text-zinc-300 mb-1">
                        {edu.institution}
                      </div>

                      {edu.details && (
                        <p className="text-xs text-zinc-300 leading-relaxed">
                          {edu.details}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications Card */}
            <div className="mt-8 p-6 rounded-2xl bg-gradient-to-br from-amber-500/[0.08] to-orange-500/[0.04] border border-amber-500/20 backdrop-blur-md">
              <div className="flex items-center gap-2 text-amber-400 text-xs font-mono uppercase tracking-wider mb-3">
                <Award className="w-4 h-4" />
                <span>Verified Qualifications & Certifications</span>
              </div>
              <div className="space-y-2">
                {profile.certifications.map((cert, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-zinc-200">
                    <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    <span>{cert}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
