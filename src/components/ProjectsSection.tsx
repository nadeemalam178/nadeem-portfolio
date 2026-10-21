"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  FolderGit2,
  Search,
  ArrowRight,
  BookOpen,
  ArrowUpRight,
} from "lucide-react";
import { Github } from "@/components/Icons";
import { projects, ProjectCategory } from "@/data/projects";
import AntigravityCard from "@/components/AntigravityCard";
import {
  RadiantHmsPreview,
  KosiVoterPreview,
  PrepTakePreview,
  SangathanSearchPreview,
} from "@/components/ProjectShowcaseMockups";

interface ProjectsSectionProps {
  onSelectProject: (projectId: string) => void;
}

export default function ProjectsSection({ onSelectProject }: ProjectsSectionProps) {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const categories: (string | ProjectCategory)[] = ["All", "Full-Stack", "Data & Analytics", "Automation", "Mobile"];

  const filteredProjects = projects.filter((project) => {
    const matchesCategory =
      activeCategory === "All" || project.category === activeCategory;
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="projects" className="py-24 border-b border-white/[0.06] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono mb-3">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Verified Technical Work</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
            Selected Applications & Data Platforms
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 max-w-2xl mt-2 leading-relaxed">
            Real software systems, automated reporting pipelines, and interactive technical demonstrations with open-source repositories and verifiable architectural breakdowns.
          </p>
        </motion.div>

        {/* Filter and Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10 max-w-4xl mx-auto"
        >
          {/* Category Chips with sliding animated pill */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 p-1 rounded-full bg-white/[0.03] border border-white/[0.06]">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`relative px-3.5 py-1.5 rounded-full text-xs font-mono transition-colors ${
                  activeCategory === cat
                    ? "text-zinc-950 font-semibold"
                    : "text-zinc-400 hover:text-white"
                }`}
              >
                {activeCategory === cat && (
                  <motion.div
                    layoutId="project-category-pill"
                    className="absolute inset-0 bg-white rounded-full shadow-sm"
                    transition={{ type: "spring", stiffness: 450, damping: 32 }}
                  />
                )}
                <span className="relative z-10">{cat}</span>
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-zinc-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search tech, title, keyword..."
              className="w-full pl-10 pr-4 py-2 text-xs font-mono rounded-xl bg-white/[0.03] border border-white/[0.08] text-white placeholder-zinc-500 focus:outline-none focus:border-cyan-500/50 transition-colors"
            />
          </div>
        </motion.div>

        {/* Projects Grid with Interactive Visual Showcases */}
        <motion.div
          layout
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project, idx) => (
              <motion.div
                layout
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.45, delay: idx * 0.06, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -4, transition: { duration: 0.25 } }}
                key={project.id}
                className="w-full group"
              >
                <AntigravityCard
                  tiltIntensity={5}
                  glowColor="rgba(56, 189, 248, 0.15)"
                  className="p-6 sm:p-7 bg-[#0b0d14] border-white/[0.08] hover:border-white/[0.16] h-full flex flex-col justify-between"
                >
                  <div>
                    {/* Card Header: Category + Status */}
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-blue-500/10 text-cyan-400 border border-blue-500/20">
                          {project.category}
                        </span>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/[0.04] text-zinc-400 border border-white/[0.06]">
                          {project.status}
                        </span>
                      </div>

                      <div className="flex items-center gap-2">
                        <Link
                          href={`/projects/${project.id}`}
                          className="inline-flex items-center gap-1 text-[11px] font-mono text-zinc-400 hover:text-cyan-400 transition-colors"
                        >
                          <span>Case Study</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </Link>
                        <a
                          href={project.repoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-1.5 rounded-lg bg-white/[0.04] hover:bg-white/[0.1] text-zinc-400 hover:text-white transition-colors"
                          title="View GitHub Repository"
                          aria-label={`GitHub repo for ${project.title}`}
                        >
                          <Github className="w-4 h-4" />
                        </a>
                      </div>
                    </div>

                    {/* Title & Tagline */}
                    <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors mb-1">
                      {project.title}
                    </h3>
                    <p className="text-xs text-zinc-400 font-mono mb-4">
                      {project.tagline}
                    </p>

                    {/* Interactive Visual Showcase Mockup with subtle zoom */}
                    <div className="mb-5 overflow-hidden rounded-2xl transition-transform duration-500 ease-out group-hover:scale-[1.015]">
                      {project.id === "radiant-hms" && <RadiantHmsPreview />}
                      {project.id === "kosi-voter-digitalize" && <KosiVoterPreview />}
                      {project.id === "preptake" && <PrepTakePreview />}
                      {project.id === "sangathan-search" && <SangathanSearchPreview />}
                      {project.id !== "radiant-hms" &&
                        project.id !== "kosi-voter-digitalize" &&
                        project.id !== "preptake" &&
                        project.id !== "sangathan-search" && (
                          <div className="p-4 rounded-xl bg-black/40 border border-white/[0.06] text-xs text-zinc-300 leading-relaxed font-sans">
                            {project.summary}
                          </div>
                        )}
                    </div>

                    {/* My Role & Contribution Statement */}
                    <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.05] text-xs text-zinc-300 mb-4">
                      <span className="font-semibold text-zinc-200">Role: </span>
                      {project.roleAndContribution}
                    </div>
                  </div>

                  {/* Card Footer: Tags & Action Buttons */}
                  <div>
                    <div className="flex flex-wrap gap-1.5 mb-5 pt-3 border-t border-white/[0.06]">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-white/[0.04] text-zinc-400 border border-white/[0.04]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      <Link
                        href={`/projects/${project.id}`}
                        className="flex items-center justify-center gap-1.5 py-2 rounded-xl text-xs font-semibold text-white bg-white/[0.08] hover:bg-white/[0.15] border border-white/[0.1] transition-all"
                      >
                        <BookOpen className="w-3.5 h-3.5" />
                        <span>Case Study</span>
                      </Link>

                      <button
                        onClick={() => onSelectProject(project.id)}
                        className="flex items-center justify-center gap-1.5 py-2 rounded-xl text-xs font-medium text-zinc-400 bg-white/[0.03] hover:bg-white/[0.07] border border-white/[0.06] hover:text-white transition-all"
                      >
                        <span>Quick Details</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </AntigravityCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-16 text-xs font-mono text-zinc-400">
            No projects found matching your search.
          </div>
        )}
      </div>
    </section>
  );
}
