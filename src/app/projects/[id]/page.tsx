import { notFound } from "next/navigation";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowUpRight,
  CheckCircle2,
  Layers,
  Sparkles,
  Activity,
  AlertCircle,
  ArrowRight,
} from "lucide-react";
import { Github } from "@/components/Icons";
import { projects } from "@/data/projects";
import AntigravityCard from "@/components/AntigravityCard";
import FluidBackground from "@/components/FluidBackground";
import SmoothScroll from "@/components/SmoothScroll";
import ScrollProgress from "@/components/ScrollProgress";

export function generateStaticParams() {
  return projects.map((p) => ({ id: p.id }));
}

export default async function ProjectCaseStudyPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);

  if (!project) {
    notFound();
  }

  const currentIndex = projects.findIndex((p) => p.id === id);
  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null;
  const nextProject = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

  return (
    <div className="relative min-h-screen bg-[#07080c] text-zinc-100 overflow-x-hidden selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Smooth scrolling & progress bar */}
      <SmoothScroll />
      <ScrollProgress />
      <FluidBackground />

      {/* Top Floating Glass Navigation Header */}
      <header className="sticky top-0 z-40 backdrop-blur-2xl bg-[#090b12]/80 border-b border-white/[0.08] py-4">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          <Link
            href="/"
            className="group inline-flex items-center gap-2 text-xs font-mono text-zinc-400 hover:text-white transition-colors"
          >
            <div className="w-7 h-7 rounded-full bg-white/[0.05] border border-white/[0.08] flex items-center justify-center group-hover:-translate-x-1 transition-transform">
              <ArrowLeft className="w-3.5 h-3.5" />
            </div>
            <span>Back to Portfolio</span>
          </Link>

          <div className="flex items-center gap-3">
            <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
              {project.category}
            </span>
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium text-white bg-white/[0.06] hover:bg-white/[0.12] border border-white/[0.1] transition-all"
            >
              <Github className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </header>

      {/* Main Case Study Article */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-10 md:py-20 relative z-10">
        {/* Eyebrow & Title */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/[0.08] border border-blue-500/20 text-cyan-300 text-[11px] font-mono uppercase tracking-[0.2em] mb-4">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>Deep Dive Technical Case Study</span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white mb-4 leading-tight">
            {project.title}
          </h1>

          <p className="text-sm sm:text-lg md:text-xl text-zinc-300 font-mono max-w-3xl leading-relaxed">
            {project.tagline}
          </p>

          {/* Quick Technical Specification Cards (Double-Bezel concentric architecture) */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
            {project.technicalSpecifications.map((spec, i) => (
              <div
                key={i}
                className="p-1 rounded-[1.75rem] bg-gradient-to-b from-white/[0.12] to-white/[0.02] border border-white/[0.08] shadow-xl"
              >
                <div className="p-5 rounded-[calc(1.75rem-4px)] bg-[#0c0e17] h-full flex flex-col justify-between shadow-[inset_0_1px_1px_rgba(255,255,255,0.12)]">
                  <div className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider mb-1">
                    {spec.label}
                  </div>
                  <div className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent my-1">
                    {spec.value}
                  </div>
                  <div className="text-xs text-zinc-400">
                    {spec.detail}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section 1: The Problem & The Solution */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {/* Problem Card */}
          <AntigravityCard
            glowColor="rgba(244, 63, 94, 0.2)"
            tiltIntensity={6}
            className="p-6 sm:p-8 bg-gradient-to-br from-rose-950/20 to-black/40 border-rose-900/30"
          >
            <div className="flex items-center gap-2 text-rose-400 text-xs font-mono uppercase tracking-wider mb-3">
              <Activity className="w-4 h-4" />
              <span>The Problem & Constraints</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-3">What Needed Solving</h3>
            <p className="text-sm text-zinc-300 leading-relaxed">
              {project.problem}
            </p>
          </AntigravityCard>

          {/* Solution Card */}
          <AntigravityCard
            glowColor="rgba(16, 185, 129, 0.2)"
            tiltIntensity={6}
            className="p-6 sm:p-8 bg-gradient-to-br from-emerald-950/20 to-black/40 border-emerald-900/30"
          >
            <div className="flex items-center gap-2 text-emerald-400 text-xs font-mono uppercase tracking-wider mb-3">
              <CheckCircle2 className="w-4 h-4" />
              <span>The Architectural Solution</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-3">How We Solved It</h3>
            <p className="text-sm text-zinc-300 leading-relaxed">
              {project.solution}
            </p>
          </AntigravityCard>
        </div>

        {/* Section 2: Architectural Decision Records (ADR) */}
        <div className="mb-14">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-cyan-400 mb-2">
            <Layers className="w-4 h-4" />
            <span>Architecture Decision Record (ADR)</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-6">
            Technical Trade-Offs & Decisions
          </h2>

          <div className="space-y-4">
            {project.architectureDecisions.map((adr, idx) => (
              <div
                key={idx}
                className="p-5 sm:p-6 rounded-2xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-md"
              >
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <h4 className="text-base font-bold text-white flex items-center gap-2">
                    <span className="w-6 h-6 rounded-lg bg-blue-500/15 border border-blue-500/30 text-cyan-400 text-xs flex items-center justify-center font-mono shrink-0">
                      {idx + 1}
                    </span>
                    <span>{adr.decision}</span>
                  </h4>
                  <span className="text-[11px] font-mono text-emerald-400 bg-emerald-950/40 px-2.5 py-0.5 rounded-full border border-emerald-800/40">
                    Adopted Decision
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-zinc-300 mb-3 leading-relaxed">
                  <span className="text-zinc-400 font-semibold">Rationale: </span>
                  {adr.rationale}
                </p>
                <div className="text-xs font-mono text-zinc-400 bg-black/40 p-2.5 rounded-xl border border-white/[0.04]">
                  <span className="text-amber-400">Trade-Off Analysis: </span>
                  {adr.tradeoff}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section 3: Verified Features */}
        <div className="mb-14 p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-white/[0.04] to-white/[0.01] border border-white/[0.08]">
          <h3 className="text-xl font-bold text-white mb-4">Verified Technical Capabilities</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {project.verifiedFeatures.map((feat, i) => (
              <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span>{feat}</span>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-white/[0.06]">
            <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-3">
              Full Technology Stack
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-mono px-3 py-1 rounded-lg bg-white/[0.05] text-zinc-200 border border-white/[0.08]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Section 4: Current Limitations & Next Roadmap Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-14">
          <div className="p-6 rounded-2xl bg-amber-500/[0.03] border border-amber-500/20">
            <div className="flex items-center gap-2 text-amber-400 text-xs font-mono uppercase tracking-wider mb-3">
              <AlertCircle className="w-4 h-4" />
              <span>Current Limitations</span>
            </div>
            <ul className="space-y-2 text-xs sm:text-sm text-zinc-300">
              {project.currentLimitations.map((lim, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-amber-400 font-mono">•</span>
                  <span>{lim}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-6 rounded-2xl bg-blue-500/[0.03] border border-blue-500/20">
            <div className="flex items-center gap-2 text-cyan-400 text-xs font-mono uppercase tracking-wider mb-3">
              <ArrowRight className="w-4 h-4" />
              <span>Engineering Roadmap & Next Steps</span>
            </div>
            <ul className="space-y-2 text-xs sm:text-sm text-zinc-300">
              {project.nextSteps.map((step, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-cyan-400 font-mono">→</span>
                  <span>{step}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Section 5: Project CTAs & Next/Prev Navigation */}
        <div className="pt-8 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4">
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600 text-white text-xs font-semibold shadow-lg shadow-blue-500/20 hover:scale-105 transition-all"
          >
            <span>Inspect Source on GitHub</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>

          <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-end">
            {prevProject && (
              <Link
                href={`/projects/${prevProject.id}`}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-medium text-zinc-400 hover:text-white bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] transition-colors"
              >
                <span>← {prevProject.title.slice(0, 14)}...</span>
              </Link>
            )}
            {nextProject && (
              <Link
                href={`/projects/${nextProject.id}`}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-medium text-cyan-400 hover:text-cyan-300 bg-white/[0.04] hover:bg-white/[0.08] border border-cyan-500/20 transition-colors"
              >
                <span>{nextProject.title.slice(0, 14)}... →</span>
              </Link>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
