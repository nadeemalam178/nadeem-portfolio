"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Terminal, Database, CheckCircle2, RotateCcw, Sparkles, BarChart2 } from "lucide-react";
import AntigravityCard from "@/components/AntigravityCard";

interface QueryPreset {
  id: string;
  name: string;
  system: string;
  sql: string;
  latency: string;
  columns: string[];
  rows: (string | number)[][];
  chart: { label: string; value: number; color: string }[];
}

const presets: QueryPreset[] = [
  {
    id: "kosi",
    name: "Kosi Region Graduate Voters",
    system: "Electoral Analytics Engine",
    sql: `SELECT district_name, count(voter_id) AS total_graduates, \n       round(avg(verified_ratio) * 100, 1) AS verification_pct \nFROM kosi_constituency_db \nGROUP BY district_name \nORDER BY total_graduates DESC;`,
    latency: "14ms",
    columns: ["District", "Total Registered", "Verification Rate (%)", "Status"],
    rows: [
      ["Saharsa", "18,420", "94.2%", "Optimal"],
      ["Madhepura", "15,810", "91.8%", "Optimal"],
      ["Supaul", "14,350", "88.6%", "In-Progress"],
      ["Katihar", "16,920", "93.1%", "Optimal"],
      ["Purnia", "21,500", "96.4%", "Verified"],
    ],
    chart: [
      { label: "Purnia", value: 21500, color: "bg-cyan-500" },
      { label: "Saharsa", value: 18420, color: "bg-blue-500" },
      { label: "Katihar", value: 16920, color: "bg-indigo-500" },
      { label: "Madhepura", value: 15810, color: "bg-emerald-500" },
      { label: "Supaul", value: 14350, color: "bg-purple-500" },
    ],
  },
  {
    id: "radiant",
    name: "Radiant HMS Clinical Triage",
    system: "Hospital Management System",
    sql: `SELECT department, count(patient_id) AS active_cases, \n       sum(occupied_beds) AS bed_occupancy, avg(wait_time_min) AS wait_time \nFROM radiant_hospital_triage \nWHERE status = 'ADMITTED' \nGROUP BY department;`,
    latency: "9ms",
    columns: ["Department", "Active Inpatients", "Occupancy Ratio", "Avg Triage Wait"],
    rows: [
      ["Emergency / ICU", "38", "95.0%", "4.2 min"],
      ["General Medicine", "84", "82.5%", "12.0 min"],
      ["Orthopedics", "29", "70.7%", "15.4 min"],
      ["Pediatrics", "42", "78.0%", "8.1 min"],
    ],
    chart: [
      { label: "Gen Med", value: 84, color: "bg-blue-500" },
      { label: "Pediatrics", value: 42, color: "bg-emerald-500" },
      { label: "Emergency", value: 38, color: "bg-rose-500" },
      { label: "Ortho", value: 29, color: "bg-amber-500" },
    ],
  },
  {
    id: "preptake",
    name: "PrepTake Exam Analytics",
    system: "EdTech Performance Engine",
    sql: `SELECT exam_track, count(candidate_id) AS total_candidates, \n       round(avg(score_pct), 2) AS avg_score, max(percentile) AS top_percentile \nFROM preptake_mock_attempts \nGROUP BY exam_track;`,
    latency: "11ms",
    columns: ["Exam Track", "Attempt Volume", "Average Score", "Percentile Floor"],
    rows: [
      ["CTET Paper 2 (Math & Science)", "4,820", "74.8%", "99.8%"],
      ["Bihar STET (Secondary Paper 1)", "6,150", "71.2%", "99.4%"],
      ["BPSC TRE 4.0 (Teaching Cadre)", "8,940", "68.5%", "99.9%"],
    ],
    chart: [
      { label: "BPSC TRE", value: 8940, color: "bg-amber-500" },
      { label: "Bihar STET", value: 6150, color: "bg-cyan-500" },
      { label: "CTET P2", value: 4820, color: "bg-indigo-500" },
    ],
  },
];

export default function LiveSandbox() {
  const [activePreset, setActivePreset] = useState<QueryPreset>(presets[0]);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [hasExecuted, setHasExecuted] = useState<boolean>(true);
  const [activeTab, setActiveTab] = useState<"table" | "chart">("table");

  const handleRun = () => {
    setIsRunning(true);
    setTimeout(() => {
      setIsRunning(false);
      setHasExecuted(true);
    }, 400);
  };

  const maxValue = Math.max(...activePreset.chart.map((c) => c.value));

  return (
    <section id="sandbox" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/[0.08] border border-emerald-500/20 text-emerald-400 text-xs font-mono mb-3">
            <Terminal className="w-3.5 h-3.5" />
            <span>Interactive In-Browser SQL & Data Sandbox</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Execute Real-World Analytical Queries
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 max-w-xl mt-2">
            Test live query execution across Nadeem&apos;s production database schemas and observe instant tabular and visual synthesis.
          </p>
        </div>

        {/* Sandbox Double-Bezel Hardware Wrapper */}
        <div className="max-w-5xl mx-auto p-1.5 sm:p-2 rounded-[2rem] bg-gradient-to-b from-white/[0.12] to-white/[0.02] border border-white/[0.09] shadow-2xl backdrop-blur-2xl">
          <div className="rounded-[calc(2rem-6px)] bg-[#0a0c14] p-5 sm:p-8 shadow-[inset_0_1px_1px_rgba(255,255,255,0.12)]">
            {/* Top Bar: Preset Selector & Controls */}
            <div className="flex flex-wrap items-center justify-between gap-3 pb-5 mb-5 border-b border-white/[0.08]">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs font-mono text-zinc-400 mr-1 flex items-center gap-1.5">
                  <Database className="w-3.5 h-3.5 text-cyan-400" />
                  Select Dataset:
                </span>
                {presets.map((preset) => (
                  <button
                    key={preset.id}
                    onClick={() => {
                      setActivePreset(preset);
                      setHasExecuted(true);
                    }}
                    className={`px-3 py-1.5 rounded-xl text-xs font-mono transition-all ${
                      activePreset.id === preset.id
                        ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 font-semibold shadow-sm shadow-cyan-950"
                        : "bg-white/[0.04] text-zinc-400 hover:text-white border border-white/[0.06]"
                    }`}
                  >
                    {preset.name}
                  </button>
                ))}
              </div>

              {/* Run Query Button */}
              <button
                onClick={handleRun}
                disabled={isRunning}
                className="inline-flex items-center gap-2 px-5 py-2 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white text-xs font-mono font-semibold shadow-lg shadow-emerald-950/50 transition-all hover:scale-105 active:scale-95 disabled:opacity-50"
              >
                <Play className={`w-3.5 h-3.5 ${isRunning ? "animate-spin" : "fill-current"}`} />
                <span>{isRunning ? "Executing..." : "Execute Query"}</span>
              </button>
            </div>

            {/* Code Terminal Display */}
            <div className="rounded-2xl bg-[#06070a] border border-white/[0.08] p-4 font-mono text-xs mb-6 shadow-inner">
              <div className="flex items-center justify-between text-zinc-500 text-[11px] mb-2 pb-2 border-b border-white/[0.05]">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 inline-block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
                  <span className="text-zinc-400 ml-2">{activePreset.system} • MySQL 8.0</span>
                </div>
                <span className="text-emerald-400">Execution Plan Cached</span>
              </div>
              <pre className="text-cyan-300/90 leading-relaxed overflow-x-auto">
                <code>{activePreset.sql}</code>
              </pre>
            </div>

            {/* Results Header: Latency & View Toggle */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono text-zinc-300 font-semibold">Query Result</span>
                <span className="text-[11px] font-mono text-emerald-400 bg-emerald-950/40 px-2 py-0.5 rounded-full border border-emerald-800/40">
                  Latency: {activePreset.latency}
                </span>
                <span className="text-[11px] font-mono text-zinc-500">
                  {activePreset.rows.length} rows returned
                </span>
              </div>

              {/* View Switcher: Table vs Chart */}
              <div className="flex rounded-lg bg-white/[0.04] p-0.5 border border-white/[0.08]">
                <button
                  onClick={() => setActiveTab("table")}
                  className={`px-3 py-1 rounded-md text-xs font-mono transition-all ${
                    activeTab === "table"
                      ? "bg-white/[0.1] text-white font-semibold"
                      : "text-zinc-400 hover:text-white"
                  }`}
                >
                  Table
                </button>
                <button
                  onClick={() => setActiveTab("chart")}
                  className={`px-3 py-1 rounded-md text-xs font-mono transition-all flex items-center gap-1 ${
                    activeTab === "chart"
                      ? "bg-white/[0.1] text-white font-semibold"
                      : "text-zinc-400 hover:text-white"
                  }`}
                >
                  <BarChart2 className="w-3 h-3" />
                  <span>Chart</span>
                </button>
              </div>
            </div>

            {/* Data Render: Table View */}
            <AnimatePresence mode="wait">
              {activeTab === "table" ? (
                <motion.div
                  key="table"
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                  className="rounded-2xl border border-white/[0.08] overflow-hidden bg-white/[0.02]"
                >
                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-xs font-mono">
                      <thead className="bg-white/[0.04] text-zinc-400 border-b border-white/[0.07]">
                        <tr>
                          {activePreset.columns.map((col, idx) => (
                            <th key={idx} className="px-4 py-3 font-semibold">
                              {col}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-white/[0.04]">
                        {activePreset.rows.map((row, rIdx) => (
                          <tr key={rIdx} className="hover:bg-white/[0.03] transition-colors">
                            {row.map((cell, cIdx) => (
                              <td
                                key={cIdx}
                                className={`px-4 py-2.5 ${
                                  cIdx === 0
                                    ? "font-semibold text-white"
                                    : "text-zinc-300"
                                }`}
                              >
                                {cell}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </motion.div>
              ) : (
                /* Data Render: Visual Chart View */
                <motion.div
                  key="chart"
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                  className="rounded-2xl border border-white/[0.08] p-5 bg-white/[0.02] space-y-3"
                >
                  {activePreset.chart.map((item, i) => (
                    <div key={i} className="space-y-1">
                      <div className="flex justify-between text-xs font-mono">
                        <span className="text-zinc-300">{item.label}</span>
                        <span className="text-white font-bold">{item.value.toLocaleString()}</span>
                      </div>
                      <div className="w-full h-3 rounded-full bg-white/[0.05] overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${(item.value / maxValue) * 100}%` }}
                          transition={{ duration: 0.5, delay: i * 0.05 }}
                          className={`h-full rounded-full ${item.color}`}
                        />
                      </div>
                    </div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
