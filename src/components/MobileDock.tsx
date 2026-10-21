"use client";

import { Search, FolderGit2, Terminal, FileText, Send } from "lucide-react";

interface MobileDockProps {
  onOpenCmd: () => void;
  onOpenCv: () => void;
}

export default function MobileDock({ onOpenCmd, onOpenCv }: MobileDockProps) {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="sm:hidden fixed bottom-4 inset-x-4 z-40 pointer-events-none flex justify-center">
      <div className="pointer-events-auto p-1.5 rounded-full bg-[#0a0d17]/85 border border-white/[0.12] backdrop-blur-2xl shadow-2xl shadow-black/80 flex items-center justify-between gap-1 max-w-sm w-full">
        {/* Search */}
        <button
          onClick={onOpenCmd}
          className="flex-1 flex flex-col items-center justify-center py-1.5 px-2 rounded-full hover:bg-white/[0.08] text-zinc-400 hover:text-cyan-400 active:scale-95 transition-all"
          aria-label="Search Command Palette"
        >
          <Search className="w-4 h-4" />
          <span className="text-[9px] font-mono mt-0.5">Search</span>
        </button>

        {/* Projects */}
        <button
          onClick={() => scrollTo("projects")}
          className="flex-1 flex flex-col items-center justify-center py-1.5 px-2 rounded-full hover:bg-white/[0.08] text-zinc-400 hover:text-white active:scale-95 transition-all"
          aria-label="Scroll to Projects"
        >
          <FolderGit2 className="w-4 h-4" />
          <span className="text-[9px] font-mono mt-0.5">Projects</span>
        </button>

        {/* SQL Sandbox */}
        <button
          onClick={() => scrollTo("sandbox")}
          className="flex-1 flex flex-col items-center justify-center py-1.5 px-2 rounded-full hover:bg-white/[0.08] text-zinc-400 hover:text-emerald-400 active:scale-95 transition-all"
          aria-label="Scroll to SQL Sandbox"
        >
          <Terminal className="w-4 h-4" />
          <span className="text-[9px] font-mono mt-0.5">SQL</span>
        </button>

        {/* Resume */}
        <button
          onClick={onOpenCv}
          className="flex-1 flex flex-col items-center justify-center py-1.5 px-2 rounded-full hover:bg-white/[0.08] text-zinc-400 hover:text-amber-400 active:scale-95 transition-all"
          aria-label="Open Resume"
        >
          <FileText className="w-4 h-4" />
          <span className="text-[9px] font-mono mt-0.5">CV</span>
        </button>

        {/* Contact */}
        <button
          onClick={() => scrollTo("contact")}
          className="flex-1 flex flex-col items-center justify-center py-1.5 px-2 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-md shadow-blue-500/20 active:scale-95 transition-all"
          aria-label="Scroll to Contact"
        >
          <Send className="w-3.5 h-3.5" />
          <span className="text-[9px] font-mono mt-0.5 font-bold">Chat</span>
        </button>
      </div>
    </div>
  );
}
