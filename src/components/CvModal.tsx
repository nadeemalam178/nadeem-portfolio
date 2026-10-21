"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Printer,
  Download,
  Mail,
  Phone,
  MapPin,
  CheckCircle2,
  Copy,
  Check,
  FileText,
} from "lucide-react";
import { Github, Linkedin } from "@/components/Icons";
import { profile } from "@/data/profile";

interface CvModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CvModal({ isOpen, onClose }: CvModalProps) {
  const [viewMode, setViewMode] = useState<"clean" | "formal">("formal");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  const handlePrint = () => {
    window.print();
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/85 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-4xl rounded-3xl bg-[#0d1017] border border-white/[0.12] p-4 sm:p-7 shadow-2xl z-10 max-h-[92vh] flex flex-col"
        >
          {/* Header Controls (Hidden during print) */}
          <div className="flex flex-wrap items-center justify-between gap-3 pb-4 mb-4 border-b border-white/[0.08] print:hidden">
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-xl bg-cyan-500/10 text-cyan-400">
                <FileText className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white leading-tight">
                  Curriculum Vitae — {profile.name}
                </h3>
                <p className="text-xs text-zinc-400 font-mono">
                  ATS-Friendly Professional Profile
                </p>
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-2">
              <button
                onClick={handlePrint}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white text-xs font-medium shadow-md shadow-blue-500/20 transition-all hover:scale-105"
                title="Print or Save as PDF"
              >
                <Printer className="w-4 h-4" />
                <span>Print / PDF</span>
              </button>

              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] text-zinc-300 text-xs font-medium border border-white/[0.08] transition-colors"
                title="Copy Email"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                <span className="hidden sm:inline">{copied ? "Copied" : "Copy Email"}</span>
              </button>

              <button
                onClick={onClose}
                className="p-1.5 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] text-zinc-400 hover:text-white transition-colors"
                aria-label="Close CV Modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* CV Content Container (Scrollable on screen, clean on print) */}
          <div className="overflow-y-auto flex-1 pr-1 custom-scrollbar">
            {/* The Formal White Paper Resume (A4 Style) */}
            <div className="bg-white text-zinc-900 p-6 sm:p-10 rounded-2xl shadow-xl font-sans max-w-3xl mx-auto print:shadow-none print:p-0 print:m-0 print:max-w-full">
              {/* Header */}
              <div className="text-center border-b border-zinc-300 pb-5 mb-5">
                <h1 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-wide text-zinc-900">
                  {profile.name}
                </h1>
                <p className="text-xs sm:text-sm font-semibold text-blue-800 mt-1">
                  {profile.title}
                </p>
                <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-xs text-zinc-600 mt-2">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-zinc-500" />
                    {profile.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <Phone className="w-3.5 h-3.5 text-zinc-500" />
                    {profile.phone}
                  </span>
                  <span className="flex items-center gap-1">
                    <Mail className="w-3.5 h-3.5 text-zinc-500" />
                    {profile.email}
                  </span>
                </div>
                <div className="flex items-center justify-center gap-4 text-xs text-blue-700 mt-1.5 font-medium">
                  <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="hover:underline">
                    linkedin.com/in/nadeem-alam-2853b9232
                  </a>
                  <span>•</span>
                  <a href={profile.github} target="_blank" rel="noopener noreferrer" className="hover:underline">
                    github.com/nadeemalam178
                  </a>
                </div>
              </div>

              {/* Profile Summary */}
              <div className="mb-5">
                <h2 className="text-xs font-bold uppercase tracking-wider text-zinc-900 border-b-2 border-zinc-800 pb-1 mb-2">
                  Professional Summary
                </h2>
                <p className="text-xs text-zinc-700 leading-relaxed text-justify">
                  {profile.bio}
                </p>
              </div>

              {/* Core Skills */}
              <div className="mb-5">
                <h2 className="text-xs font-bold uppercase tracking-wider text-zinc-900 border-b-2 border-zinc-800 pb-1 mb-2">
                  Technical & Analytical Skills
                </h2>
                <div className="grid grid-cols-1 gap-1.5 text-xs">
                  {profile.skillCategories.map((cat, i) => (
                    <div key={i} className="flex">
                      <span className="w-40 font-semibold text-zinc-800 shrink-0">
                        {cat.category}:
                      </span>
                      <span className="text-zinc-700">
                        {cat.skills.map((s) => s.name).join(", ")}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Work Experience */}
              <div className="mb-5">
                <h2 className="text-xs font-bold uppercase tracking-wider text-zinc-900 border-b-2 border-zinc-800 pb-1 mb-2.5">
                  Professional Experience
                </h2>
                <div className="space-y-4">
                  {profile.experience.map((exp, idx) => (
                    <div key={idx}>
                      <div className="flex justify-between items-baseline">
                        <span className="text-xs font-bold text-zinc-900">{exp.role}</span>
                        <span className="text-[11px] font-semibold text-zinc-600">{exp.period}</span>
                      </div>
                      <div className="flex justify-between items-baseline italic text-xs text-zinc-700 mb-1.5">
                        <span>{exp.organization}</span>
                        <span className="text-[11px]">{exp.location}</span>
                      </div>
                      <ul className="list-disc pl-4 text-xs text-zinc-700 space-y-1">
                        {exp.description.map((desc, i) => (
                          <li key={i}>{desc}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Projects in CV */}
              <div className="mb-5">
                <h2 className="text-xs font-bold uppercase tracking-wider text-zinc-900 border-b-2 border-zinc-800 pb-1 mb-2.5">
                  Flagship Software & Data Systems
                </h2>
                <div className="space-y-2 text-xs">
                  <div>
                    <span className="font-bold text-zinc-900">Radiant Hospitals HMS (TypeScript / Next.js)</span>: Full-scale hospital operations system covering OPD, IPD, pharmacy, pathology, and automated patient billing.
                  </div>
                  <div>
                    <span className="font-bold text-zinc-900">Kosi Voter Digitalization & Analytics (13 Districts)</span>: Extensive graduate constituency database digitalization, data cleansing, and live Looker / web analytics visualizer.
                  </div>
                  <div>
                    <span className="font-bold text-zinc-900">Data Automation Engine</span>: High-velocity automated reports and spreadsheet integration using Google Apps Script & Python.
                  </div>
                </div>
              </div>

              {/* Education */}
              <div className="mb-5">
                <h2 className="text-xs font-bold uppercase tracking-wider text-zinc-900 border-b-2 border-zinc-800 pb-1 mb-2.5">
                  Education & Qualifications
                </h2>
                <div className="space-y-2">
                  {profile.education.map((edu, idx) => (
                    <div key={idx} className="flex justify-between text-xs">
                      <div>
                        <div className="font-bold text-zinc-900">{edu.degree}</div>
                        <div className="italic text-zinc-700">{edu.institution}</div>
                      </div>
                      <span className="font-semibold text-zinc-600 text-[11px]">{edu.period}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Certifications & Languages */}
              <div>
                <h2 className="text-xs font-bold uppercase tracking-wider text-zinc-900 border-b-2 border-zinc-800 pb-1 mb-2">
                  Certifications & Languages
                </h2>
                <div className="text-xs text-zinc-700 space-y-1">
                  <div>
                    <span className="font-semibold text-zinc-800">Certifications: </span>
                    {profile.certifications.join(" | ")}
                  </div>
                  <div>
                    <span className="font-semibold text-zinc-800">Languages: </span>
                    {profile.languages.join(" • ")}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
