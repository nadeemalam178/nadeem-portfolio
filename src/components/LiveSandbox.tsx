"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Terminal, Database, BarChart2, ShieldAlert } from "lucide-react";

interface QueryPreset {
  id: string;
  name: string;
  system: string;
  description: string;
  sql: string;
  latency: string;
  columns: string[];
  rows: (string | number)[][];
  chart: { label: string; value: number; color: string }[];
}

const presets: QueryPreset[] = [
  {
    id: "constituency",
    name: "Constituency Cross-Tabulation",
    system: "Electoral Demographics Sandbox",
    description: "Simulated aggregation query analyzing voter verification ratios across synthetic regional districts.",
    sql: `SELECT district_name, \n       COUNT(voter_id) AS total_enrolled, \n       ROUND(AVG(verified_ratio) * 100, 1) AS sanitation_rate_pct,\n       CASE WHEN AVG(verified_ratio) >= 0.9 THEN 'Optimal' ELSE 'Pending' END AS audit_state\nFROM synthetic_district_registry\nGROUP BY district_name\nORDER BY total_enrolled DESC;`,
    latency: "14ms",
    columns: ["District Node", "Synthetic Enrolled", "Sanitation Rate (%)", "Audit State"],
    rows: [
      ["Territory Alpha", "21,500", "96.4%", "Optimal"],
      ["Territory Beta", "18,420", "94.2%", "Optimal"],
      ["Territory Gamma", "16,920", "93.1%", "Optimal"],
      ["Territory Delta", "15,810", "91.8%", "Optimal"],
      ["Territory Epsilon", "14,350", "88.6%", "Pending"],
    ],
    chart: [
      { label: "Alpha", value: 21500, color: "bg-cyan-500" },
      { label: "Beta", value: 18420, color: "bg-blue-500" },
      { label: "Gamma", value: 16920, color: "bg-indigo-500" },
      { label: "Delta", value: 15810, color: "bg-emerald-500" },
      { label: "Epsilon", value: 14350, color: "bg-purple-500" },
    ],
  },
  {
    id: "hospital",
    name: "Clinical Triage & Bed Allocation",
    system: "Radiant HMS Schema Sandbox",
    description: "Relational query aggregating inpatient bed allocation and triage wait times across clinical departments.",
    sql: `SELECT department_name, \n       COUNT(patient_id) AS active_cases, \n       ROUND(SUM(occupied_beds) * 100.0 / SUM(total_beds), 1) AS occupancy_pct,\n       ROUND(AVG(triage_minutes), 1) AS avg_wait_min\nFROM hospital_triage_log\nWHERE encounter_status = 'ACTIVE'\nGROUP BY department_name;`,
    latency: "9ms",
    columns: ["Clinical Unit", "Active Inpatients", "Occupancy (%)", "Avg Wait (Min)"],
    rows: [
      ["Emergency / ICU", "38", "95.0%", "4.2 min"],
      ["General Medicine", "84", "82.5%", "12.0 min"],
      ["Pediatrics Unit", "42", "78.0%", "8.1 min"],
      ["Orthopedics", "29", "70.7%", "15.4 min"],
    ],
    chart: [
      { label: "Gen Med", value: 84, color: "bg-blue-500" },
      { label: "Pediatrics", value: 42, color: "bg-emerald-500" },
      { label: "Emergency", value: 38, color: "bg-rose-500" },
      { label: "Ortho", value: 29, color: "bg-amber-500" },
    ],
  },
  {
    id: "edtech",
    name: "Assessment Analytics Query",
    system: "PrepTake Analytics Sandbox",
    description: "Performance breakdown across pedagogical exam attempts with percentile floor aggregation.",
    sql: `SELECT exam_track, \n       COUNT(attempt_id) AS total_mock_attempts, \n       ROUND(AVG(score_pct), 1) AS mean_score_pct, \n       MAX(score_pct) AS peak_score_pct\nFROM assessment_attempts\nGROUP BY exam_track;`,
    latency: "11ms",
    columns: ["Exam Track", "Synthetic Volume", "Mean Score (%)", "Peak Score (%)"],
    rows: [
      ["CTET Paper 2 (Math & Science)", "4,820", "74.8%", "98.5%"],
      ["Bihar STET (Secondary Paper 1)", "6,150", "71.2%", "99.0%"],
      ["BPSC TRE Teaching Cadre", "8,940", "68.5%", "97.5%"],
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
  const [activeTab, setActiveTab] = useState<"table" | "chart">("table");

  const handleRun = () => {
    setIsRunning(true);
    setTimeout(() => {
      setIsRunning(false);
    }, 350);
  };

  const maxValue = Math.max(...activePreset.chart.map((c) => c.value));

  return (
    <section id="sandbox" className="py-24 border-b border-white/[0.06] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono mb-3">
            <Terminal className="w-3.5 h-3.5" />
            <span>Interactive Data Simulation</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Data Analytics & Automation Demonstrations
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 max-w-2xl mt-2 leading-relaxed">
            Execute analytical queries across realistic synthetic schemas. All data presented below is strictly anonymized sample data illustrating real relational aggregation techniques.
          </p>

          <div className="inline-flex items-center gap-2 px-3 py-1 mt-4 rounded-lg bg-zinc-900 border border-zinc-800 text-xs text-zinc-400 font-mono">
            <ShieldAlert className="w-3.5 h-3.5 text-amber-400" />
            <span>Synthetic Demonstration Environment • No Confidential Records Exposed</span>
          </div>
        </div>

        {/* Workflow Diagram: Data Intake -> Validation -> Transformation -> Reporting */}
        <div className="mb-10 p-5 rounded-2xl bg-[#0b0d14] border border-white/[0.08]">
          <div className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-3 text-center sm:text-left">
            Typical Data Lifecycle & Reporting Workflow
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 text-xs font-mono">
            <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.05]">
              <div className="text-cyan-400 font-bold mb-1">01. Intake</div>
              <div className="text-zinc-300">Raw multi-district spreadsheets & CSV rosters</div>
            </div>
            <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.05]">
              <div className="text-blue-400 font-bold mb-1">02. Validation</div>
              <div className="text-zinc-300">Sanitation scripts, duplicate removal & regex checks</div>
            </div>
            <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.05]">
              <div className="text-purple-400 font-bold mb-1">03. Transformation</div>
              <div className="text-zinc-300">SQL grouping, cross-tabulation & relational indexing</div>
            </div>
            <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.05]">
              <div className="text-emerald-400 font-bold mb-1">04. Delivery</div>
              <div className="text-zinc-300">Looker Studio dashboards & automated daily MIS</div>
            </div>
          </div>
        </div>

        {/* Sandbox Hardware Enclosure */}
        <div className="p-1 rounded-2xl bg-gradient-to-b from-white/[0.1] to-white/[0.02] border border-white/[0.08] shadow-2xl">
          <div className="rounded-[calc(1rem-2px)] bg-[#090b12] p-5 sm:p-7">
            {/* Top Bar: Preset Selector & Controls */}
            <div className="flex flex-wrap items-center justify-between gap-3 pb-4 mb-5 border-b border-white/[0.08]">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs font-mono text-zinc-400 mr-1 flex items-center gap-1.5">
                  <Database className="w-3.5 h-3.5 text-cyan-400" />
                  Select Schema:
                </span>
                {presets.map((preset) => (
                  <button
                    key={preset.id}
                    onClick={() => setActivePreset(preset)}
                    className={`px-3 py-1 rounded-lg text-xs font-mono transition-all ${
                      activePreset.id === preset.id
                        ? "bg-white text-zinc-950 font-bold shadow-sm"
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
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-mono font-semibold transition-all hover:scale-105 active:scale-95 disabled:opacity-50"
              >
                <Play className={`w-3.5 h-3.5 ${isRunning ? "animate-spin" : "fill-current"}`} />
                <span>{isRunning ? "Executing..." : "Execute Query"}</span>
              </button>
            </div>

            {/* Code Terminal Display */}
            <div className="rounded-xl bg-[#06070a] border border-white/[0.08] p-4 font-mono text-xs mb-5 shadow-inner">
              <div className="flex items-center justify-between text-zinc-500 text-[11px] mb-2 pb-2 border-b border-white/[0.05]">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block" />
                  <span className="text-zinc-300">{activePreset.system} • Sample Engine</span>
                </div>
                <span className="text-zinc-400">{activePreset.description}</span>
              </div>
              <pre className="text-cyan-300 leading-relaxed overflow-x-auto text-[11.5px]">
                <code>{activePreset.sql}</code>
              </pre>
            </div>

            {/* Results Header: Latency & View Toggle */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono text-zinc-200 font-semibold">Simulated Execution</span>
                <span className="text-[11px] font-mono text-emerald-400 bg-emerald-950/40 px-2 py-0.5 rounded border border-emerald-800/40">
                  Execution Latency: {activePreset.latency}
                </span>
              </div>

              {/* View Switcher: Table vs Chart */}
              <div className="flex rounded-lg bg-white/[0.04] p-0.5 border border-white/[0.08]">
                <button
                  onClick={() => setActiveTab("table")}
                  className={`px-3 py-1 rounded-md text-xs font-mono transition-all ${
                    activeTab === "table"
                      ? "bg-white/[0.12] text-white font-semibold"
                      : "text-zinc-400 hover:text-white"
                  }`}
                >
                  Table
                </button>
                <button
                  onClick={() => setActiveTab("chart")}
                  className={`px-3 py-1 rounded-md text-xs font-mono transition-all flex items-center gap-1 ${
                    activeTab === "chart"
                      ? "bg-white/[0.12] text-white font-semibold"
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
                  className="rounded-xl border border-white/[0.08] overflow-hidden bg-white/[0.02]"
                >
                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-xs font-mono">
                      <thead className="bg-white/[0.04] text-zinc-300 border-b border-white/[0.07]">
                        <tr>
                          {activePreset.columns.map((col, idx) => (
                            <th key={idx} className="px-4 py-2.5 font-semibold">
                              {col}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-white/[0.04]">
                        {activePreset.rows.map((row, rIdx) => (
                          <tr key={rIdx} className="hover:bg-white/[0.02] transition-colors">
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
                  className="rounded-xl border border-white/[0.08] p-5 bg-white/[0.02] space-y-3"
                >
                  {activePreset.chart.map((item, i) => (
                    <div key={i} className="space-y-1">
                      <div className="flex justify-between text-xs font-mono">
                        <span className="text-zinc-300">{item.label}</span>
                        <span className="text-white font-bold">{item.value.toLocaleString()}</span>
                      </div>
                      <div className="w-full h-2.5 rounded-full bg-white/[0.05] overflow-hidden">
                        <div
                          style={{ width: `${(item.value / maxValue) * 100}%` }}
                          className={`h-full rounded-full ${item.color} transition-all duration-500`}
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
