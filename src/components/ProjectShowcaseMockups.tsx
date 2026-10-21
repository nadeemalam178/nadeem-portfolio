"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Bed,
  Search,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  TrendingUp,
} from "lucide-react";

/**
 * Interactive Visual Preview for Radiant Hospitals HMS
 * Clearly labeled as an architectural technical demonstration with synthetic sample data.
 */
export function RadiantHmsPreview() {
  const [activeTab, setActiveTab] = useState<"opd" | "beds" | "pharmacy">("opd");

  return (
    <div className="rounded-2xl bg-[#090b12] border border-white/[0.08] p-4 text-xs font-mono shadow-inner overflow-hidden">
      {/* Mini App Header */}
      <div className="flex items-center justify-between pb-2.5 mb-3 border-b border-white/[0.06]">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-emerald-400" />
          <span className="font-bold text-white tracking-wide">Radiant HMS Architecture</span>
          <span className="text-[10px] text-zinc-400 hidden sm:inline">(Interactive Prototype Demo)</span>
        </div>

        {/* Module Switcher */}
        <div className="flex rounded-lg bg-white/[0.04] p-0.5 border border-white/[0.06]">
          {(["opd", "beds", "pharmacy"] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-2 py-0.5 text-[10px] uppercase font-bold rounded-md transition-all ${
                activeTab === tab
                  ? "bg-blue-600 text-white shadow-sm"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Module Content with smooth crossfade */}
      <AnimatePresence mode="wait">
        {activeTab === "opd" && (
          <motion.div
            key="opd"
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.2 }}
            className="space-y-2"
          >
            <div className="grid grid-cols-3 gap-2 text-center text-[10px] mb-2">
              <div className="p-1.5 rounded-lg bg-blue-500/10 border border-blue-500/20 text-cyan-300">
                <div className="font-bold text-xs text-white">42</div>
                <div>Waiting OPD</div>
              </div>
              <div className="p-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-300">
                <div className="font-bold text-xs text-white">18</div>
                <div>Consulting</div>
              </div>
              <div className="p-1.5 rounded-lg bg-purple-500/10 border border-purple-500/20 text-purple-300">
                <div className="font-bold text-xs text-white">4.2m</div>
                <div>Avg Triage Wait</div>
              </div>
            </div>

            <div className="space-y-1.5">
              <div className="flex items-center justify-between p-2 rounded-lg bg-white/[0.03] border border-white/[0.04]">
                <div className="flex items-center gap-2">
                  <span className="w-5 h-5 rounded bg-blue-500/20 text-cyan-300 text-[10px] flex items-center justify-center font-bold">
                    01
                  </span>
                  <div>
                    <div className="text-white font-medium text-[11px]">Synthetic Patient A (M/34)</div>
                    <div className="text-[10px] text-zinc-400">Cardiology OPD • Triage Level 2</div>
                  </div>
                </div>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">
                  In Consultation
                </span>
              </div>

              <div className="flex items-center justify-between p-2 rounded-lg bg-white/[0.02] border border-white/[0.04]">
                <div className="flex items-center gap-2">
                  <span className="w-5 h-5 rounded bg-white/[0.05] text-zinc-400 text-[10px] flex items-center justify-center font-bold">
                    02
                  </span>
                  <div>
                    <div className="text-white font-medium text-[11px]">Synthetic Patient B (F/28)</div>
                    <div className="text-[10px] text-zinc-400">General OPD • Triage Level 3</div>
                  </div>
                </div>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-amber-500/15 text-amber-300 border border-amber-500/30">
                  Next in Queue
                </span>
              </div>
            </div>
          </motion.div>
        )}

        {/* Tab 2: Bed Management */}
        {activeTab === "beds" && (
          <motion.div
            key="beds"
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.2 }}
            className="space-y-2.5"
          >
            <div className="flex justify-between items-center text-[11px]">
              <span className="text-zinc-300 flex items-center gap-1.5">
                <Bed className="w-3.5 h-3.5 text-cyan-400" />
                Simulated Bed Allocation
              </span>
              <span className="text-white font-bold">120 / 140 Beds Active (85%)</span>
            </div>

            <div className="w-full h-2 rounded-full bg-white/[0.08] overflow-hidden flex">
              <div className="h-full bg-blue-500" style={{ width: "65%" }} title="General Ward" />
              <div className="h-full bg-purple-500" style={{ width: "20%" }} title="ICU" />
              <div className="h-full bg-emerald-500" style={{ width: "15%" }} title="Available" />
            </div>

            <div className="grid grid-cols-2 gap-2 text-[10px] pt-1">
              <div className="p-2 rounded-lg bg-white/[0.03] border border-white/[0.05]">
                <div className="text-zinc-400">ICU Bed Tracking</div>
                <div className="text-white font-bold text-xs mt-0.5">18 / 20 Allocated</div>
                <div className="text-emerald-400 text-[9px] mt-0.5">2 Ventilator Beds Free</div>
              </div>
              <div className="p-2 rounded-lg bg-white/[0.03] border border-white/[0.05]">
                <div className="text-zinc-400">Private Recovery</div>
                <div className="text-white font-bold text-xs mt-0.5">12 / 16 Allocated</div>
                <div className="text-cyan-400 text-[9px] mt-0.5">4 Rooms Sanitized</div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Tab 3: Pharmacy Dispensing */}
        {activeTab === "pharmacy" && (
          <motion.div
            key="pharmacy"
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.2 }}
            className="space-y-2"
          >
            <div className="text-[11px] text-zinc-300 flex items-center justify-between">
              <span>Automated Inventory Schema</span>
              <span className="text-emerald-400 font-bold">Relational Sync</span>
            </div>
            <div className="space-y-1.5 text-[10px]">
              <div className="flex justify-between p-1.5 rounded bg-white/[0.03] border border-white/[0.05]">
                <span>Sample Item: Amoxicillin 500mg (Batch #AM-Demo)</span>
                <span className="text-emerald-300">480 In Stock</span>
              </div>
              <div className="flex justify-between p-1.5 rounded bg-white/[0.03] border border-white/[0.05]">
                <span>Sample Item: Paracetamol 650mg (Batch #PC-Demo)</span>
                <span className="text-emerald-300">1,200 In Stock</span>
              </div>
              <div className="flex justify-between p-1.5 rounded bg-white/[0.03] border border-white/[0.05]">
                <span>Sample Item: Saline 0.9% IV (Batch #SL-Demo)</span>
                <span className="text-amber-300">Low Stock Warning (28 left)</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/**
 * Interactive Visual Preview for Kosi Voter Digitalization
 * Clearly labeled as an aggregated demographic directory demonstration.
 */
export function KosiVoterPreview() {
  const districts = [
    { name: "Purnia", verified: "96.4%", turnout: "78.2%", status: "Sanitized" },
    { name: "Saharsa", verified: "94.2%", turnout: "74.8%", status: "Sanitized" },
    { name: "Katihar", verified: "93.1%", turnout: "76.0%", status: "Sanitized" },
    { name: "Madhepura", verified: "91.8%", turnout: "71.5%", status: "In-Progress" },
    { name: "Supaul", verified: "88.6%", turnout: "69.4%", status: "In-Progress" },
  ];

  const [selectedIdx, setSelectedIdx] = useState(0);
  const current = districts[selectedIdx];

  return (
    <div className="rounded-2xl bg-[#090b12] border border-white/[0.08] p-4 text-xs font-mono shadow-inner overflow-hidden">
      <div className="flex items-center justify-between pb-2 mb-3 border-b border-white/[0.06]">
        <div className="flex items-center gap-1.5">
          <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
          <span className="font-bold text-white">Regional Directory Hierarchy</span>
        </div>
        <span className="text-[10px] text-cyan-400 bg-cyan-950/40 px-2 py-0.5 rounded-full border border-cyan-800/40">
          Aggregated Telemetry
        </span>
      </div>

      {/* District Pill Selector */}
      <div className="flex gap-1.5 overflow-x-auto pb-2 mb-2 custom-scrollbar">
        {districts.map((d, idx) => (
          <button
            key={d.name}
            onClick={() => setSelectedIdx(idx)}
            className={`px-2.5 py-1 text-[10px] font-semibold rounded-lg shrink-0 transition-all ${
              selectedIdx === idx
                ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 shadow-sm"
                : "bg-white/[0.03] text-zinc-400 hover:text-white border border-white/[0.05]"
            }`}
          >
            {d.name}
          </button>
        ))}
      </div>

      {/* Selected District Stats Card with smooth transition */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current.name}
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -5 }}
          transition={{ duration: 0.2 }}
          className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06] space-y-2"
        >
          <div className="flex justify-between items-baseline">
            <div>
              <div className="text-base font-bold text-white">{current.name} District</div>
              <div className="text-[10px] text-zinc-400">Territory Directory Node</div>
            </div>
            <div className="text-xs font-bold text-emerald-400 bg-emerald-950/40 px-2 py-0.5 rounded border border-emerald-800/40">
              Status: {current.status}
            </div>
          </div>

          {/* Progress verification meter */}
          <div>
            <div className="flex justify-between text-[10px] text-zinc-400 mb-1">
              <span>Data Sanitation Coverage</span>
              <span className="text-white font-bold">{current.verified}</span>
            </div>
            <div className="w-full h-2 rounded-full bg-white/[0.08] overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: current.verified }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="h-full bg-gradient-to-r from-emerald-500 to-teal-400"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2 pt-1 text-[10px]">
            <div className="p-1.5 rounded bg-black/40 border border-white/[0.04]">
              <span className="text-zinc-400">Electoral Segment:</span>
              <span className="text-white font-bold ml-1.5">Graduate</span>
            </div>
            <div className="p-1.5 rounded bg-black/40 border border-white/[0.04]">
              <span className="text-zinc-400">Historical Turnout:</span>
              <span className="text-cyan-400 font-bold ml-1.5">{current.turnout}</span>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

/**
 * Interactive Visual Preview for PrepTake Exam Portal
 */
export function PrepTakePreview() {
  const [selectedOption, setSelectedOption] = useState<number | null>(null);

  const question = {
    text: "Which cognitive domain in Bloom's Revised Taxonomy involves making judgments based on criteria and standards?",
    options: ["Understanding", "Analyzing", "Evaluating", "Creating"],
    correct: 2, // Evaluating
    explanation: "Evaluating requires critiquing, judging, and assessing value against predefined standards.",
  };

  const handleSelect = (idx: number) => {
    setSelectedOption(idx);
  };

  return (
    <div className="rounded-2xl bg-[#090b12] border border-white/[0.08] p-4 text-xs font-mono shadow-inner overflow-hidden">
      <div className="flex items-center justify-between pb-2 mb-2.5 border-b border-white/[0.06]">
        <div className="flex items-center gap-1.5">
          <HelpCircle className="w-3.5 h-3.5 text-amber-400" />
          <span className="font-bold text-white">PrepTake Practice Engine</span>
        </div>
        <span className="text-[10px] text-amber-300 bg-amber-950/40 px-2 py-0.5 rounded-full border border-amber-800/40">
          CTET / STET Paper 2
        </span>
      </div>

      <div className="text-[11px] text-zinc-200 font-sans leading-relaxed mb-3">
        <span className="font-bold text-cyan-400 font-mono mr-1.5">Q1.</span>
        {question.text}
      </div>

      {/* Interactive Options */}
      <div className="space-y-1.5 mb-2.5">
        {question.options.map((opt, idx) => {
          const isSelected = selectedOption === idx;
          const isCorrect = idx === question.correct;
          let btnStyle = "bg-white/[0.03] text-zinc-300 border-white/[0.06] hover:bg-white/[0.08]";

          if (selectedOption !== null) {
            if (isCorrect) {
              btnStyle = "bg-emerald-500/20 text-emerald-300 border-emerald-500/50 font-bold";
            } else if (isSelected) {
              btnStyle = "bg-rose-500/20 text-rose-300 border-rose-500/50";
            }
          }

          return (
            <button
              key={idx}
              onClick={() => handleSelect(idx)}
              className={`w-full text-left p-2 rounded-lg border text-[11px] flex items-center justify-between transition-all ${btnStyle}`}
            >
              <div className="flex items-center gap-2">
                <span className="w-4 h-4 rounded-full bg-white/[0.08] flex items-center justify-center text-[9px] font-bold">
                  {String.fromCharCode(65 + idx)}
                </span>
                <span>{opt}</span>
              </div>
              {selectedOption !== null && isCorrect && (
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              )}
              {selectedOption === idx && !isCorrect && (
                <AlertCircle className="w-3.5 h-3.5 text-rose-400" />
              )}
            </button>
          );
        })}
      </div>

      {selectedOption !== null && (
        <motion.div
          initial={{ opacity: 0, y: 4 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25 }}
          className="p-2 rounded-lg bg-emerald-950/30 border border-emerald-800/40 text-[10px] text-emerald-300"
        >
          <span className="font-bold">Pedagogical Concept: </span>
          {question.explanation}
        </motion.div>
      )}
    </div>
  );
}

/**
 * Interactive Visual Preview for SangathanSearch
 */
export function SangathanSearchPreview() {
  const cadres = [
    { name: "Anil K. Sinha", role: "District Coordinator", district: "Patna", contact: "Verified Cadre Node" },
    { name: "Priya Ranjan", role: "Block Representative", district: "Danapur", contact: "Verified Cadre Node" },
    { name: "Tariq Anwar", role: "Youth Wing Coordinator", district: "Gaya", contact: "Verified Cadre Node" },
    { name: "Sunil Paswan", role: "Booth Committee Lead", district: "Arwal", contact: "Verified Cadre Node" },
  ];

  const [search, setSearch] = useState("");

  const filtered = cadres.filter(
    (c) =>
      c.name.toLowerCase().includes(search.toLowerCase()) ||
      c.district.toLowerCase().includes(search.toLowerCase()) ||
      c.role.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="rounded-2xl bg-[#090b12] border border-white/[0.08] p-4 text-xs font-mono shadow-inner overflow-hidden">
      <div className="flex items-center justify-between pb-2 mb-2.5 border-b border-white/[0.06]">
        <div className="flex items-center gap-1.5">
          <Search className="w-3.5 h-3.5 text-cyan-400" />
          <span className="font-bold text-white">In-Memory Index Filter</span>
        </div>
        <span className="text-[10px] text-zinc-400">Synthetic Directory Data</span>
      </div>

      {/* Live search input */}
      <div className="relative mb-3">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Type 'Patna', 'Gaya', or 'Block'..."
          className="w-full pl-8 pr-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/[0.08] text-white text-[11px] placeholder-zinc-500 focus:outline-none focus:border-cyan-500/50"
        />
        <Search className="w-3.5 h-3.5 text-zinc-400 absolute left-2.5 top-1/2 -translate-y-1/2" />
      </div>

      {/* Filtered list */}
      <div className="space-y-1.5 max-h-36 overflow-y-auto">
        <AnimatePresence>
          {filtered.map((c, i) => (
            <motion.div
              layout
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2, delay: i * 0.03 }}
              key={c.name}
              className="flex items-center justify-between p-2 rounded-lg bg-white/[0.02] border border-white/[0.04] text-[10px]"
            >
              <div>
                <div className="font-bold text-white text-[11px]">{c.name}</div>
                <div className="text-zinc-400">{c.role} • {c.district}</div>
              </div>
              <span className="text-cyan-400 font-mono bg-cyan-950/40 px-2 py-0.5 rounded border border-cyan-800/40">
                {c.contact}
              </span>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
