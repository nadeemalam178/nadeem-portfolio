"use client";

import { useState } from "react";
import {
  Terminal,
  Layers,
  Code2,
  GraduationCap,
  ArrowUpRight,
  CheckCircle2,
} from "lucide-react";
import AntigravityCard from "@/components/AntigravityCard";

interface BentoGridProps {
  onSelectProject: (projectId: string) => void;
}

export default function BentoGrid({ onSelectProject }: BentoGridProps) {
  const [activeTab, setActiveTab] = useState<"sql" | "script">("sql");

  return (
    <section id="bento" className="py-20 border-b border-white/[0.06] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-cyan-400 text-xs font-mono mb-3">
            <Layers className="w-3.5 h-3.5" />
            <span>Architecture & Core Competencies</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight">
            How I Approach Engineering & Data Systems
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 max-w-2xl mt-2 leading-relaxed">
            Organized around three core engineering disciplines: quantitative data modeling, reliable spreadsheet automation, and modern full-stack web applications.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* Card 1: Data Analytics & Reporting (Spans 2 cols on tablet/desktop) */}
          <div className="md:col-span-2">
            <AntigravityCard
              glowColor="rgba(56, 189, 248, 0.15)"
              tiltIntensity={5}
              className="p-6 sm:p-7 bg-[#0b0d14] border-white/[0.08] h-full flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-semibold px-2.5 py-0.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
                    DATA ARCHITECTURE
                  </span>
                  <span className="text-xs text-zinc-400 font-mono">
                    JSPT & JOGGF Experience
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                  Operational Data Pipelines & Executive Dashboards
                </h3>
                <p className="text-sm text-zinc-300 leading-relaxed mb-4">
                  Consolidating fragmented field reports and spreadsheet logs into clean relational schemas. Designing Looker Studio dashboards that provide operational leadership with verifiable KPI tracking and territory coverage metrics.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 my-3">
                  <div className="flex items-start gap-2 text-xs text-zinc-300">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>Systematic multi-tier data validation & sanitation</span>
                  </div>
                  <div className="flex items-start gap-2 text-xs text-zinc-300">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>Hierarchical constituency directory structuring</span>
                  </div>
                  <div className="flex items-start gap-2 text-xs text-zinc-300">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>Cross-tabulation across municipal & rural blocks</span>
                  </div>
                  <div className="flex items-start gap-2 text-xs text-zinc-300">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>Executive briefs optimized for fast decision-making</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-white/[0.06] mt-4">
                <span className="text-xs font-mono text-zinc-400">
                  Featured Case Study: Kosi Voter Platform
                </span>
                <button
                  onClick={() => onSelectProject("kosi-voter-digitalize")}
                  className="inline-flex items-center gap-1 text-xs font-mono text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  <span>Read Breakdown</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </AntigravityCard>
          </div>

          {/* Card 2: Mathematical Foundation */}
          <div className="md:col-span-1">
            <AntigravityCard
              glowColor="rgba(168, 85, 247, 0.15)"
              tiltIntensity={6}
              className="p-6 bg-[#0b0d14] border-white/[0.08] h-full flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono text-zinc-400">ACADEMIC FOUNDATION</span>
                  <GraduationCap className="w-4 h-4 text-purple-400" />
                </div>
                <h4 className="text-lg font-bold text-white mb-2">Mathematics & MCA</h4>
                <p className="text-xs text-zinc-300 leading-relaxed mb-4">
                  B.Sc. Mathematics (Hons) background providing rigorous grounding in discrete math, probability, calculus, and quantitative modeling, complemented by ongoing Master of Computer Applications (MCA) studies.
                </p>

                <div className="space-y-2 text-xs font-mono text-zinc-300">
                  <div className="p-2 rounded-lg bg-white/[0.03] border border-white/[0.05]">
                    <div className="text-white font-bold">MCA (2026–2028)</div>
                    <div className="text-zinc-400 text-[11px]">Sikkim Manipal University</div>
                  </div>
                  <div className="p-2 rounded-lg bg-white/[0.03] border border-white/[0.05]">
                    <div className="text-white font-bold">B.Sc. Mathematics Hons</div>
                    <div className="text-zinc-400 text-[11px]">Magadh University (2017–2020)</div>
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-white/[0.06] mt-4 text-[11px] font-mono text-zinc-400">
                TCS NQT Cognitive Recognized
              </div>
            </AntigravityCard>
          </div>

          {/* Card 3: Automation & Scripting Workbench */}
          <div className="md:col-span-2">
            <AntigravityCard
              glowColor="rgba(16, 185, 129, 0.15)"
              tiltIntensity={5}
              className="p-6 bg-[#0b0d14] border-white/[0.08] h-full flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <Terminal className="w-4 h-4 text-emerald-400" />
                    <span className="text-xs font-mono text-zinc-300">Functional Automation Scripts</span>
                  </div>
                  <div className="flex rounded-lg bg-black/40 p-0.5 border border-white/[0.08]">
                    <button
                      onClick={() => setActiveTab("sql")}
                      className={`px-2.5 py-1 text-[11px] font-mono rounded-md transition-all ${
                        activeTab === "sql"
                          ? "bg-emerald-500/20 text-emerald-300 font-semibold"
                          : "text-zinc-400 hover:text-white"
                      }`}
                    >
                      SQL Aggregation
                    </button>
                    <button
                      onClick={() => setActiveTab("script")}
                      className={`px-2.5 py-1 text-[11px] font-mono rounded-md transition-all ${
                        activeTab === "script"
                          ? "bg-emerald-500/20 text-emerald-300 font-semibold"
                          : "text-zinc-400 hover:text-white"
                      }`}
                    >
                      Apps Script Workflow
                    </button>
                  </div>
                </div>

                <div className="rounded-xl bg-[#06070a] border border-white/[0.06] p-3.5 font-mono text-xs overflow-x-auto text-zinc-300">
                  {activeTab === "sql" ? (
                    <pre className="text-[11.5px] leading-5 text-emerald-400/90">
                      <code>{`-- Operational cross-tabulation query example
SELECT 
  territory_name,
  COUNT(DISTINCT entity_id) AS total_records,
  SUM(CASE WHEN verification_status = 'VERIFIED' THEN 1 ELSE 0 END) AS verified_count,
  ROUND(AVG(completion_pct), 1) AS avg_progress
FROM operational_registry
GROUP BY territory_name
ORDER BY total_records DESC;`}</code>
                    </pre>
                  ) : (
                    <pre className="text-[11.5px] leading-5 text-cyan-300/90">
                      <code>{`// Automated Daily MIS Pipeline & Spreadsheet Ingestion
function syncOperationalMetrics() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const rawSheet = ss.getSheetByName("Raw_Intake");
  const data = rawSheet.getDataRange().getValues();
  const validatedRows = sanitizeDataset(data);
  updateLookerDataFeed(validatedRows);
}`}</code>
                    </pre>
                  )}
                </div>
              </div>

              <div className="flex items-center justify-between text-xs text-zinc-400 mt-3 pt-2 border-t border-white/[0.05]">
                <span>Data Intake & Validation Workflows</span>
                <span className="font-mono text-emerald-400">Production Tested</span>
              </div>
            </AntigravityCard>
          </div>

          {/* Card 4: Full-Stack Web Development */}
          <div className="md:col-span-1">
            <AntigravityCard
              glowColor="rgba(59, 130, 246, 0.15)"
              tiltIntensity={6}
              className="p-6 bg-[#0b0d14] border-white/[0.08] h-full flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono text-zinc-400">APPLICATION ENGINEERING</span>
                  <Code2 className="w-4 h-4 text-blue-400" />
                </div>
                <h4 className="text-lg font-bold text-white mb-2">Modern Web Stack</h4>
                <p className="text-xs text-zinc-300 leading-relaxed mb-4">
                  Constructing responsive, type-safe web systems using TypeScript, Next.js, React, and Node.js with strict attention to semantic HTML and mobile usability.
                </p>

                <div className="flex flex-wrap gap-1.5">
                  {["TypeScript", "Next.js", "React", "PostgreSQL", "Tailwind CSS", "Node.js"].map((t) => (
                    <span
                      key={t}
                      className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-white/[0.04] text-zinc-300 border border-white/[0.06]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-3 border-t border-white/[0.06] mt-4 flex items-center justify-between text-xs">
                <span className="text-zinc-400">Flagship: Radiant HMS</span>
                <button
                  onClick={() => onSelectProject("radiant-hms")}
                  className="text-cyan-400 font-mono flex items-center gap-1 hover:underline"
                >
                  <span>Explore</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </AntigravityCard>
          </div>
        </div>
      </div>
    </section>
  );
}
