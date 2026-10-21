"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Database,
  Terminal,
  Activity,
  MapPin,
  Clock,
  Layers,
  ArrowUpRight,
  Sparkles,
  CheckCircle2,
  Code2,
  Cpu,
} from "lucide-react";
import { profile } from "@/data/profile";
import { projects } from "@/data/projects";

interface BentoGridProps {
  onSelectProject: (projectId: string) => void;
}

export default function BentoGrid({ onSelectProject }: BentoGridProps) {
  const [activeCodeTab, setActiveCodeTab] = useState<"sql" | "script">("sql");
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("en-IN", {
          timeZone: "Asia/Kolkata",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const featuredHms = projects.find((p) => p.id === "radiant-hms");
  const featuredKosi = projects.find((p) => p.id === "kosi-voter-digitalize");

  return (
    <section id="bento" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/[0.08] border border-blue-500/20 text-blue-400 text-xs font-medium mb-3">
            <Layers className="w-3.5 h-3.5" />
            <span>Interactive Bento Architecture</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Engineering & Analytics Highlights
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 max-w-xl mt-2">
            A real-time overview of core technical competencies, production systems, and operational automation.
          </p>
        </div>

        {/* Bento Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
          {/* Card 1: Featured Flagship (Spans 2 cols) */}
          <motion.div
            whileHover={{ y: -4 }}
            transition={{ duration: 0.2 }}
            className="md:col-span-2 lg:col-span-2 relative p-6 sm:p-7 rounded-3xl bg-gradient-to-br from-white/[0.05] to-white/[0.02] border border-white/[0.09] backdrop-blur-xl flex flex-col justify-between overflow-hidden group hover:border-blue-500/40"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl pointer-events-none group-hover:bg-blue-600/20 transition-colors" />

            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded-full bg-blue-500/15 border border-blue-500/30 text-blue-400">
                  FLAGSHIP FULL-STACK
                </span>
                <span className="text-xs text-zinc-400 flex items-center gap-1.5">
                  <Activity className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
                  Production Ready
                </span>
              </div>

              <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                {featuredHms?.title}
              </h3>
              <p className="text-zinc-300 text-sm leading-relaxed mb-4">
                {featuredHms?.description}
              </p>

              <div className="grid grid-cols-2 gap-2 my-4">
                {featuredHms?.highlights.slice(0, 2).map((item, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-zinc-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-white/[0.07] mt-3">
              <div className="flex flex-wrap gap-1.5">
                {featuredHms?.tags.slice(0, 4).map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-white/[0.06] text-zinc-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <button
                onClick={() => onSelectProject("radiant-hms")}
                className="inline-flex items-center gap-1 text-xs font-medium text-cyan-400 hover:text-cyan-300 group-hover:translate-x-1 transition-all"
              >
                <span>Deep Dive</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </motion.div>

          {/* Card 2: Interactive Code & Automation Engine */}
          <motion.div
            whileHover={{ y: -4 }}
            transition={{ duration: 0.2 }}
            className="md:col-span-1 lg:col-span-2 relative p-6 rounded-3xl bg-gradient-to-br from-white/[0.05] to-white/[0.02] border border-white/[0.09] backdrop-blur-xl flex flex-col justify-between overflow-hidden group hover:border-emerald-500/40"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-emerald-400" />
                  <span className="text-xs font-mono text-zinc-300">Automation & Query Hub</span>
                </div>
                {/* Code Tabs */}
                <div className="flex rounded-lg bg-black/40 p-0.5 border border-white/[0.07]">
                  <button
                    onClick={() => setActiveCodeTab("sql")}
                    className={`px-2.5 py-1 text-[11px] font-mono rounded-md transition-all ${
                      activeCodeTab === "sql"
                        ? "bg-emerald-500/20 text-emerald-300 font-semibold"
                        : "text-zinc-400 hover:text-white"
                    }`}
                  >
                    SQL
                  </button>
                  <button
                    onClick={() => setActiveCodeTab("script")}
                    className={`px-2.5 py-1 text-[11px] font-mono rounded-md transition-all ${
                      activeCodeTab === "script"
                        ? "bg-emerald-500/20 text-emerald-300 font-semibold"
                        : "text-zinc-400 hover:text-white"
                    }`}
                  >
                    AppsScript
                  </button>
                </div>
              </div>

              {/* Code Snippet Box */}
              <div className="rounded-xl bg-[#090b10] border border-white/[0.06] p-3.5 font-mono text-xs overflow-x-auto text-zinc-300 shadow-inner">
                {activeCodeTab === "sql" ? (
                  <pre className="text-[11.5px] leading-5 text-emerald-400/90">
                    <code>{`-- Constituency Data Aggregation & Cross-Tab
SELECT 
  district_name,
  COUNT(DISTINCT voter_id) AS total_graduates,
  SUM(CASE WHEN verified = 1 THEN 1 ELSE 0 END) AS verified_cadres,
  ROUND(AVG(turnout_rate), 2) AS avg_turnout
FROM constituency_master
GROUP BY district_name
ORDER BY total_graduates DESC;`}</code>
                  </pre>
                ) : (
                  <pre className="text-[11.5px] leading-5 text-cyan-400/90">
                    <code>{`// Automated Daily MIS Pipeline & Email Dispatch
function syncConstituencyMetrics() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet();
  const rawData = sheet.getSheetByName("Raw_Input").getDataRange().getValues();
  const cleaned = cleanDataset(rawData);
  buildLookerFeed(cleaned);
  MailApp.sendEmail("director@jspt.in", "Daily MIS Ready", "Automated sync complete.");
}`}</code>
                  </pre>
                )}
              </div>
            </div>

            <div className="flex items-center justify-between text-xs text-zinc-400 mt-3 pt-2 border-t border-white/[0.05]">
              <span>ETL Automation & Cross-tabulation</span>
              <span className="font-mono text-emerald-400">Automated 100%</span>
            </div>
          </motion.div>

          {/* Card 3: Live Time & Location */}
          <motion.div
            whileHover={{ y: -4 }}
            className="p-6 rounded-3xl bg-gradient-to-br from-white/[0.05] to-white/[0.02] border border-white/[0.09] backdrop-blur-xl flex flex-col justify-between group hover:border-cyan-500/40"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono text-zinc-400">GEOGRAPHY & TIME</span>
                <MapPin className="w-4 h-4 text-rose-400" />
              </div>
              <h4 className="text-lg font-bold text-white mb-1">Patna, Bihar</h4>
              <p className="text-xs text-zinc-400">India (IST GMT +5:30)</p>
            </div>

            <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center justify-between">
              <div className="flex items-center gap-1.5 text-xs text-zinc-300">
                <Clock className="w-3.5 h-3.5 text-cyan-400 animate-spin" style={{ animationDuration: "12s" }} />
                <span>Live Time:</span>
              </div>
              <div className="font-mono text-sm font-semibold text-cyan-300 bg-cyan-950/40 px-2.5 py-0.5 rounded-lg border border-cyan-800/40">
                {time || "Loading..."}
              </div>
            </div>
          </motion.div>

          {/* Card 4: Data & BI Spotlight (Kosi Digitalization) */}
          <motion.div
            whileHover={{ y: -4 }}
            className="md:col-span-2 lg:col-span-2 p-6 rounded-3xl bg-gradient-to-br from-white/[0.05] to-white/[0.02] border border-white/[0.09] backdrop-blur-xl flex flex-col justify-between group hover:border-indigo-500/40"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400">
                  DATA ANALYTICS IN PRODUCTION
                </span>
                <span className="text-xs font-mono text-zinc-400">13 Districts</span>
              </div>

              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-indigo-400 transition-colors">
                {featuredKosi?.title}
              </h3>
              <p className="text-zinc-300 text-sm leading-relaxed mb-3">
                Digitalizing voter hierarchies and constructing real-time analytical dashboards across 13 administrative districts for strategic leadership review.
              </p>
            </div>

            <div className="flex items-center justify-between pt-3 border-t border-white/[0.06] mt-2">
              <div className="flex items-center gap-2 text-xs text-zinc-300">
                <Database className="w-3.5 h-3.5 text-indigo-400" />
                <span>100K+ Tabular Rows Cleaned</span>
              </div>
              <button
                onClick={() => onSelectProject("kosi-voter-digitalize")}
                className="inline-flex items-center gap-1 text-xs font-medium text-indigo-400 hover:text-indigo-300 transition-colors"
              >
                <span>Case Study</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </motion.div>

          {/* Card 5: Core Tech Cloud */}
          <motion.div
            whileHover={{ y: -4 }}
            className="p-6 rounded-3xl bg-gradient-to-br from-white/[0.05] to-white/[0.02] border border-white/[0.09] backdrop-blur-xl flex flex-col justify-between group hover:border-amber-500/40"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono text-zinc-400">TECH STACK</span>
                <Cpu className="w-4 h-4 text-amber-400" />
              </div>
              <h4 className="text-base font-bold text-white mb-3">Core Toolset</h4>

              <div className="flex flex-wrap gap-1.5">
                {[
                  "SQL",
                  "Python",
                  "TypeScript",
                  "Next.js",
                  "Looker Studio",
                  "Apps Script",
                  "Excel / Sheets",
                  "Tailwind",
                ].map((item) => (
                  <span
                    key={item}
                    className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-white/[0.06] hover:bg-white/[0.12] text-zinc-300 border border-white/[0.05] transition-colors"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="text-[11px] text-zinc-300 mt-4 pt-2 border-t border-white/[0.05]">
              Full-Stack + Data Science Synergy
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
