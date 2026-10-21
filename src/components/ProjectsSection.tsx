"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FolderGit2,
  ExternalLink,
  Search,
  Filter,
  Sparkles,
  Layers,
  ArrowRight,
  Star,
} from "lucide-react";
import { Github } from "@/components/Icons";
import { projects, Project } from "@/data/projects";

interface ProjectsSectionProps {
  onSelectProject: (projectId: string) => void;
}

export default function ProjectsSection({ onSelectProject }: ProjectsSectionProps) {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const categories = ["All", "Full-Stack", "Data & Analytics", "Automation", "Mobile"];

  const filteredProjects = projects.filter((project) => {
    const matchesCategory =
      activeCategory === "All" || project.category === activeCategory;
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/[0.08] border border-cyan-500/20 text-cyan-400 text-xs font-medium mb-3">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Curated Portfolio Repositories</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Featured Projects & Implementations
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 max-w-xl mt-2">
            Explore live production systems, enterprise hospital suites, data pipelines, and educational platforms built from the ground up.
          </p>
        </div>

        {/* Filter and Search Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10 max-w-5xl mx-auto">
          {/* Category Chips */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all ${
                  activeCategory === cat
                    ? "bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-md shadow-blue-500/20 scale-105"
                    : "bg-white/[0.04] hover:bg-white/[0.08] text-zinc-400 hover:text-white border border-white/[0.06]"
                }`}
              >
                {cat}
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
              className="w-full pl-10 pr-4 py-2 text-xs rounded-xl bg-white/[0.03] border border-white/[0.08] text-white placeholder-zinc-300 focus:outline-none focus:border-cyan-500/50 transition-colors"
            />
          </div>
        </div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                key={project.id}
                className="group relative rounded-3xl bg-white/[0.03] border border-white/[0.08] hover:border-cyan-500/40 backdrop-blur-xl p-6 flex flex-col justify-between transition-all hover:bg-white/[0.05] hover:shadow-2xl hover:shadow-cyan-950/20"
              >
                <div>
                  {/* Card Header */}
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-white/[0.06] text-zinc-300 border border-white/[0.06]">
                      {project.category}
                    </span>
                    <div className="flex items-center gap-2">
                      <a
                        href={project.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 rounded-lg bg-white/[0.04] hover:bg-white/[0.1] text-zinc-400 hover:text-white transition-colors"
                        title="View GitHub Repository"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    </div>
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors mb-1.5">
                    {project.title}
                  </h3>
                  <p className="text-xs text-zinc-300 font-mono mb-3">
                    {project.tagline}
                  </p>

                  <p className="text-xs text-zinc-300 leading-relaxed line-clamp-3 mb-4">
                    {project.description}
                  </p>

                  {/* Metric Pill if present */}
                  {project.metrics && (
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-blue-500/[0.08] border border-blue-500/20 text-cyan-300 text-[11px] font-mono mb-4">
                      <Sparkles className="w-3 h-3 text-cyan-400" />
                      <span>{project.metrics}</span>
                    </div>
                  )}
                </div>

                {/* Card Footer: Tags & Button */}
                <div>
                  <div className="flex flex-wrap gap-1.5 mb-5 pt-3 border-t border-white/[0.06]">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-white/[0.04] text-zinc-300 border border-white/[0.03]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => onSelectProject(project.id)}
                    className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-semibold text-white bg-white/[0.05] hover:bg-white/[0.12] border border-white/[0.1] group-hover:border-cyan-500/40 transition-all group-hover:scale-[1.01]"
                  >
                    <span>View Case Study Details</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-16 text-zinc-300">
            No projects found matching your search.
          </div>
        )}
      </div>
    </section>
  );
}
