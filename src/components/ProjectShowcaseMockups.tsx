"use client";

import { useState } from "react";
import {
  Activity,
  Bed,
  Users,
  Search,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  TrendingUp,
  ShieldCheck,
} from "lucide-react";

/**
 * Interactive Visual Preview for Radiant Hospitals HMS
 */
export function RadiantHmsPreview() {
  const [activeTab, setActiveTab] = useState<"opd" | "beds" | "pharmacy">("opd");

  return (
    <div className="rounded-2xl bg-[#090b12] border border-white/[0.08] p-4 text-xs font-mono shadow-inner overflow-hidden">
      {/* Mini App Header */}
      <div className="flex items-center justify-between pb-2.5 mb-3 border-b border-white/[0.06]">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="font-bold text-white tracking-wide">Radiant HMS Core</span>
          <span className="text-[10px] text-zinc-500 hidden sm:inline">• Live OPD Gateway</span>
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

      {/* Tab 1: OPD Triage Queue */}
      {activeTab === "opd" && (
        <div className="space-y-2">
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
              <div>Avg Wait Time</div>
            </div>
          </div>

          <div className="space-y-1.5">
            <div className="flex items-center justify-between p-2 rounded-lg bg-white/[0.03] border border-white/[0.04]">
              <div className="flex items-center gap-2">
                <span className="w-5 h-5 rounded bg-blue-500/20 text-cyan-300 text-[10px] flex items-center justify-center font-bold">
                  01
                </span>
                <div>
                  <div className="text-white font-medium text-[11px]">Rahul K. Sharma (M/34)</div>
                  <div className="text-[10px] text-zinc-400">Dr. Verma • Cardiology OPD</div>
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
                  <div className="text-white font-medium text-[11px]">Amina Khatun (F/28)</div>
                  <div className="text-[10px] text-zinc-400">Dr. S. Akhtar • General OPD</div>
                </div>
              </div>
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-amber-500/15 text-amber-300 border border-amber-500/30">
                Next in Queue
              </span>
            </div>
          </div>
        </div>
      )}

      {/* Tab 2: Bed Management */}
      {activeTab === "beds" && (
        <div className="space-y-2.5">
          <div className="flex justify-between items-center text-[11px]">
            <span className="text-zinc-300 flex items-center gap-1.5">
              <Bed className="w-3.5 h-3.5 text-cyan-400" />
              Total Hospital Capacity
            </span>
            <span className="text-white font-bold">120 / 140 Beds Occupied (85%)</span>
          </div>

          <div className="w-full h-2 rounded-full bg-white/[0.08] overflow-hidden flex">
            <div className="h-full bg-blue-500" style={{ width: "65%" }} title="General Ward" />
            <div className="h-full bg-purple-500" style={{ width: "20%" }} title="ICU" />
            <div className="h-full bg-emerald-500" style={{ width: "15%" }} title="Available" />
          </div>

          <div className="grid grid-cols-2 gap-2 text-[10px] pt-1">
            <div className="p-2 rounded-lg bg-white/[0.03] border border-white/[0.05]">
              <div className="text-zinc-400">ICU Bed Status</div>
              <div className="text-white font-bold text-xs mt-0.5">18 / 20 Occupied</div>
              <div className="text-emerald-400 text-[9px] mt-0.5">2 Critical Ventilators Free</div>
            </div>
            <div className="p-2 rounded-lg bg-white/[0.03] border border-white/[0.05]">
              <div className="text-zinc-400">Private Suite</div>
              <div className="text-white font-bold text-xs mt-0.5">12 / 16 Occupied</div>
              <div className="text-cyan-400 text-[9px] mt-0.5">4 Rooms Prepped</div>
            </div>
          </div>
        </div>
      )}

      {/* Tab 3: Pharmacy Dispensing */}
      {activeTab === "pharmacy" && (
        <div className="space-y-2">
          <div className="text-[11px] text-zinc-300 flex items-center justify-between">
            <span>Automated Inventory & GST Billing</span>
            <span className="text-emerald-400 font-bold">Sync: 100% Active</span>
          </div>
          <div className="space-y-1.5 text-[10px]">
            <div className="flex justify-between p-1.5 rounded bg-white/[0.03] border border-white/[0.05]">
              <span>Amoxicillin 500mg (Batch #AM-2026)</span>
              <span className="text-emerald-300">480 In Stock</span>
            </div>
            <div className="flex justify-between p-1.5 rounded bg-white/[0.03] border border-white/[0.05]">
              <span>Paracetamol 650mg (Batch #PC-901)</span>
              <span className="text-emerald-300">1,200 In Stock</span>
            </div>
            <div className="flex justify-between p-1.5 rounded bg-white/[0.03] border border-white/[0.05]">
              <span>Saline 0.9% IV (Batch #SL-88)</span>
              <span className="text-amber-300">Low Stock (28 left)</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

/**
 * Interactive Visual Preview for Kosi Voter Digitalization
 */
export function KosiVoterPreview() {
  const districts = [
    { name: "Purnia", voters: "21,500", verified: "96.4%", turnout: "78.2%", status: "Optimal" },
    { name: "Saharsa", voters: "18,420", verified: "94.2%", turnout: "74.8%", status: "Optimal" },
    { name: "Katihar", voters: "16,920", verified: "93.1%", turnout: "76.0%", status: "Optimal" },
    { name: "Madhepura", voters: "15,810", verified: "91.8%", turnout: "71.5%", status: "In-Progress" },
    { name: "Supaul", voters: "14,350", verified: "88.6%", turnout: "69.4%", status: "In-Progress" },
  ];

  const [selectedIdx, setSelectedIdx] = useState(0);
  const current = districts[selectedIdx];

  return (
    <div className="rounded-2xl bg-[#090b12] border border-white/[0.08] p-4 text-xs font-mono shadow-inner overflow-hidden">
      <div className="flex items-center justify-between pb-2 mb-3 border-b border-white/[0.06]">
        <div className="flex items-center gap-1.5">
          <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
          <span className="font-bold text-white">13-District Telemetry Hub</span>
        </div>
        <span className="text-[10px] text-cyan-400 bg-cyan-950/40 px-2 py-0.5 rounded-full border border-cyan-800/40">
          Graduate Roster
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

      {/* Selected District Stats Card */}
      <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06] space-y-2">
        <div className="flex justify-between items-baseline">
          <div>
            <div className="text-base font-bold text-white">{current.name} District</div>
            <div className="text-[10px] text-zinc-400">Total Enrolled Graduates</div>
          </div>
          <div className="text-lg font-bold text-emerald-400">{current.voters}</div>
        </div>

        {/* Progress verification meter */}
        <div>
          <div className="flex justify-between text-[10px] text-zinc-400 mb-1">
            <span>Voter Roll Verification</span>
            <span className="text-white font-bold">{current.verified}</span>
          </div>
          <div className="w-full h-2 rounded-full bg-white/[0.08] overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-emerald-500 to-teal-400 transition-all duration-500"
              style={{ width: current.verified }}
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2 pt-1 text-[10px]">
          <div className="p-1.5 rounded bg-black/40 border border-white/[0.04]">
            <span className="text-zinc-400">Estimated Turnout:</span>
            <span className="text-white font-bold ml-1.5">{current.turnout}</span>
          </div>
          <div className="p-1.5 rounded bg-black/40 border border-white/[0.04]">
            <span className="text-zinc-400">Database Status:</span>
            <span className="text-emerald-400 font-bold ml-1.5">{current.status}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * Interactive Visual Preview for PrepTake Exam Portal
 */
export function PrepTakePreview() {
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [score, setScore] = useState(1);

  const question = {
    text: "Which cognitive domain in Bloom's Revised Taxonomy involves making judgments based on criteria and standards?",
    options: ["Understanding", "Analyzing", "Evaluating", "Creating"],
    correct: 2, // Evaluating
    explanation: "Evaluating requires critiquing, judging, and assessing value based on criteria and standards.",
  };

  const handleSelect = (idx: number) => {
    setSelectedOption(idx);
    if (idx === question.correct) {
      setScore(2);
    }
  };

  return (
    <div className="rounded-2xl bg-[#090b12] border border-white/[0.08] p-4 text-xs font-mono shadow-inner overflow-hidden">
      <div className="flex items-center justify-between pb-2 mb-2.5 border-b border-white/[0.06]">
        <div className="flex items-center gap-1.5">
          <HelpCircle className="w-3.5 h-3.5 text-amber-400" />
          <span className="font-bold text-white">PrepTake Practice Engine</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-[10px] text-amber-300 bg-amber-950/40 px-2 py-0.5 rounded-full border border-amber-800/40">
            CTET / STET Paper 2
          </span>
          <span className="text-[10px] text-emerald-400 font-bold">Score: {score}/2</span>
        </div>
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
        <div className="p-2 rounded-lg bg-emerald-950/30 border border-emerald-800/40 text-[10px] text-emerald-300">
          <span className="font-bold">Correct Concept: </span>
          {question.explanation}
        </div>
      )}
    </div>
  );
}

/**
 * Interactive Visual Preview for SangathanSearch
 */
export function SangathanSearchPreview() {
  const cadres = [
    { name: "Manoj K. Singh", role: "District Coordinator", district: "Patna", phone: "+91 9835xxxxxx" },
    { name: "Priya Ranjan", role: "Block In-charge", district: "Danapur", phone: "+91 9431xxxxxx" },
    { name: "Tariq Anwar", role: "Youth Wing President", district: "Gaya", phone: "+91 9122xxxxxx" },
    { name: "Sunil Paswan", role: "Booth Committee Head", district: "Arwal", phone: "+91 9771xxxxxx" },
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
          <span className="font-bold text-white">Sangathan In-Memory Index</span>
        </div>
        <span className="text-[10px] text-zinc-400">Sub-15ms Latency</span>
      </div>

      {/* Live search input */}
      <div className="relative mb-3">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Try typing 'Patna', 'Gaya', or 'Block'..."
          className="w-full pl-8 pr-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/[0.08] text-white text-[11px] placeholder-zinc-500 focus:outline-none focus:border-cyan-500/50"
        />
        <Search className="w-3.5 h-3.5 text-zinc-400 absolute left-2.5 top-1/2 -translate-y-1/2" />
      </div>

      {/* Filtered list */}
      <div className="space-y-1.5 max-h-36 overflow-y-auto">
        {filtered.map((c, i) => (
          <div
            key={i}
            className="flex items-center justify-between p-2 rounded-lg bg-white/[0.02] border border-white/[0.04] text-[10px]"
          >
            <div>
              <div className="font-bold text-white text-[11px]">{c.name}</div>
              <div className="text-zinc-400">{c.role} • {c.district}</div>
            </div>
            <span className="text-cyan-400 font-mono bg-cyan-950/40 px-2 py-0.5 rounded border border-cyan-800/40">
              {c.phone}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
