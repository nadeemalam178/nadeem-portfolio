"use client";

import { useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, CheckCircle2, Sparkles, Layers, BookOpen, ArrowUpRight } from "lucide-react";
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
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal Window (Double-Bezel hardware enclosure) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.2 }}
          className="relative w-full max-w-2xl rounded-[2rem] bg-gradient-to-b from-white/[0.12] to-white/[0.03] border border-white/[0.12] p-1.5 shadow-2xl z-10 max-h-[90vh] overflow-y-auto"
        >
          <div className="rounded-[calc(2rem-6px)] bg-[#0d101a] p-6 sm:p-8 shadow-inner">
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 p-2 rounded-full bg-white/[0.05] hover:bg-white/[0.1] text-zinc-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header */}
            <div className="mb-6">
              <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded-full bg-blue-500/15 border border-blue-500/30 text-cyan-400">
                {project.category}
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-3 mb-1">
                {project.title}
              </h2>
              <p className="text-sm font-mono text-zinc-400">
                {project.tagline}
              </p>
            </div>

            {/* Metrics */}
            {project.metrics && (
              <div className="flex items-center gap-2 p-3 rounded-xl bg-cyan-950/30 border border-cyan-800/30 text-cyan-300 text-xs font-mono mb-6">
                <Sparkles className="w-4 h-4 text-cyan-400" />
                <span>{project.metrics}</span>
              </div>
            )}

            {/* Overview */}
            <div className="mb-6">
              <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-2">
                System Overview
              </h4>
              <p className="text-sm text-zinc-300 leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Key Engineering Highlights */}
            <div className="mb-6">
              <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-3">
                Architectural & Technical Highlights
              </h4>
              <div className="space-y-2.5">
                {project.highlights.map((highlight, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-zinc-300">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack Chips */}
            <div className="mb-8">
              <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-2.5">
                Technologies & Frameworks
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-mono px-2.5 py-1 rounded-lg bg-white/[0.05] text-zinc-200 border border-white/[0.08]"
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
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600 text-white text-xs font-semibold shadow-lg shadow-blue-600/30 hover:scale-105 transition-all"
              >
                <BookOpen className="w-4 h-4" />
                <span>Open Dedicated Case Study Page</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>

              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/[0.08] hover:bg-white/[0.15] text-white text-xs font-medium border border-white/[0.1] transition-all"
              >
                <Github className="w-4 h-4" />
                <span>GitHub Repo</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
