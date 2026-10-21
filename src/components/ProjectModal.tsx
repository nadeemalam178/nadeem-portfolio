"use client";

import { useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle2, BookOpen, ArrowUpRight } from "lucide-react";
import { Github } from "@/components/Icons";
import { Project } from "@/data/projects";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
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
          initial={{ opacity: 0, scale: 0.96, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 15 }}
          transition={{ duration: 0.2 }}
          className="relative w-full max-w-2xl rounded-2xl bg-[#0d101a] border border-white/[0.12] p-6 sm:p-8 shadow-2xl z-10 max-h-[90vh] overflow-y-auto"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-2 rounded-full bg-white/[0.05] hover:bg-white/[0.1] text-zinc-400 hover:text-white transition-colors"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Header */}
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-mono font-semibold px-2.5 py-0.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-cyan-400">
                {project.category}
              </span>
              <span className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-white/[0.04] text-zinc-400 border border-white/[0.06]">
                {project.status}
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-1">
              {project.title}
            </h2>
            <p className="text-xs sm:text-sm font-mono text-zinc-400">
              {project.tagline}
            </p>
          </div>

          {/* Technical Summary */}
          <div className="mb-6">
            <h3 className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-2">
              System Context & Summary
            </h3>
            <p className="text-sm text-zinc-300 leading-relaxed">
              {project.summary}
            </p>
          </div>

          {/* Verified Implemented Features */}
          <div className="mb-6">
            <h3 className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-3">
              Verified Implemented Features
            </h3>
            <div className="space-y-2">
              {project.verifiedFeatures.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs text-zinc-300">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Role & Contribution */}
          <div className="mb-6 p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06] text-xs text-zinc-300">
            <span className="font-semibold text-white">My Specific Contribution: </span>
            {project.roleAndContribution}
          </div>

          {/* Tech Stack Chips */}
          <div className="mb-8">
            <h3 className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-2.5">
              Technologies & Frameworks
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-mono px-2.5 py-1 rounded-lg bg-white/[0.04] text-zinc-300 border border-white/[0.06]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Modal Actions */}
          <div className="flex flex-wrap items-center justify-between gap-3 pt-5 border-t border-white/[0.08]">
            <Link
              href={`/projects/${project.id}`}
              onClick={onClose}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white text-zinc-950 text-xs font-semibold hover:bg-zinc-200 transition-all shadow-sm"
            >
              <BookOpen className="w-4 h-4" />
              <span>Read Full Technical Case Study</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>

            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/[0.06] hover:bg-white/[0.12] text-white text-xs font-medium border border-white/[0.1] transition-all"
            >
              <Github className="w-4 h-4" />
              <span>Inspect Source Repository</span>
            </a>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
