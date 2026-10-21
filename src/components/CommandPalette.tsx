"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  FolderGit2,
  FileText,
  Terminal,
  Mail,
  Briefcase,
  X,
  Sparkles,
} from "lucide-react";
import { Github, Linkedin } from "@/components/Icons";
import { projects } from "@/data/projects";
import { profile } from "@/data/profile";

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenCv: () => void;
}

export default function CommandPalette({
  isOpen,
  onClose,
  onOpenCv,
}: CommandPaletteProps) {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);

  // Keyboard shortcut listener for Cmd+K / Ctrl+K
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        if (isOpen) {
          onClose();
        } else {
          const btn = document.getElementById("cmd-k-trigger");
          if (btn) btn.click();
        }
      }
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  const items = [
    {
      type: "Navigation",
      title: "Core Architecture & Competencies",
      icon: <Sparkles className="w-4 h-4 text-blue-400" />,
      action: () => {
        router.push("/#bento");
        onClose();
      },
    },
    {
      type: "Navigation",
      title: "Selected Applications & Data Platforms",
      icon: <FolderGit2 className="w-4 h-4 text-cyan-400" />,
      action: () => {
        router.push("/#projects");
        onClose();
      },
    },
    {
      type: "Navigation",
      title: "Interactive Data Simulation & SQL Explorer",
      icon: <Terminal className="w-4 h-4 text-emerald-400" />,
      action: () => {
        router.push("/#sandbox");
        onClose();
      },
    },
    {
      type: "Navigation",
      title: "Curriculum Vitae & Career History",
      icon: <Briefcase className="w-4 h-4 text-purple-400" />,
      action: () => {
        router.push("/#resume-section");
        onClose();
      },
    },
    ...projects.map((p) => ({
      type: "Case Study",
      title: `${p.title} (${p.category})`,
      icon: <FolderGit2 className="w-4 h-4 text-indigo-400" />,
      action: () => {
        router.push(`/projects/${p.id}`);
        onClose();
      },
    })),
    {
      type: "Action",
      title: "View & Print Full Curriculum Vitae",
      icon: <FileText className="w-4 h-4 text-amber-400" />,
      action: () => {
        onClose();
        onOpenCv();
      },
    },
    {
      type: "Action",
      title: `Copy Email Address (${profile.email})`,
      icon: <Mail className="w-4 h-4 text-rose-400" />,
      action: () => {
        navigator.clipboard.writeText(profile.email);
        onClose();
      },
    },
    {
      type: "External",
      title: "Open GitHub Profile (@nadeemalam178)",
      icon: <Github className="w-4 h-4 text-white" />,
      action: () => {
        window.open(profile.github, "_blank");
        onClose();
      },
    },
    {
      type: "External",
      title: "Open LinkedIn Profile",
      icon: <Linkedin className="w-4 h-4 text-blue-400" />,
      action: () => {
        window.open(profile.linkedin, "_blank");
        onClose();
      },
    },
  ];

  const filteredItems = items.filter((item) =>
    item.title.toLowerCase().includes(query.toLowerCase()) ||
    item.type.toLowerCase().includes(query.toLowerCase())
  );

  const handleKeyDownNav = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % (filteredItems.length || 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev - 1 + filteredItems.length) % (filteredItems.length || 1));
    } else if (e.key === "Enter" && filteredItems[selectedIndex]) {
      e.preventDefault();
      filteredItems[selectedIndex].action();
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 sm:pt-28 p-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/85 backdrop-blur-md"
        />

        {/* Palette Modal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97, y: -10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.97, y: -10 }}
          className="relative w-full max-w-xl rounded-2xl bg-[#0c0e18] border border-white/[0.12] shadow-2xl z-10 overflow-hidden"
        >
          {/* Search Input Bar */}
          <div className="flex items-center gap-3 px-4 py-3.5 border-b border-white/[0.08]">
            <Search className="w-4 h-4 text-cyan-400 shrink-0" />
            <input
              autoFocus
              type="text"
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                setSelectedIndex(0);
              }}
              onKeyDown={handleKeyDownNav}
              placeholder="Search case studies, SQL demo, CV, external links..."
              className="w-full bg-transparent text-xs font-mono text-white placeholder-zinc-500 focus:outline-none"
            />
            <button
              onClick={onClose}
              className="p-1 rounded text-zinc-500 hover:text-white"
              aria-label="Close command palette"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Items List */}
          <div className="max-h-72 overflow-y-auto p-2 space-y-1 custom-scrollbar">
            {filteredItems.map((item, idx) => (
              <button
                key={idx}
                onClick={item.action}
                onMouseEnter={() => setSelectedIndex(idx)}
                className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-left text-xs font-mono transition-all ${
                  selectedIndex === idx
                    ? "bg-white/[0.08] text-white"
                    : "text-zinc-300 hover:bg-white/[0.03]"
                }`}
              >
                <div className="flex items-center gap-2.5 truncate">
                  <div className="p-1 rounded bg-white/[0.05] shrink-0">
                    {item.icon}
                  </div>
                  <span className="truncate">{item.title}</span>
                </div>
                <span className="text-[10px] text-zinc-400 px-1.5 py-0.5 rounded bg-white/[0.04] shrink-0 ml-2">
                  {item.type}
                </span>
              </button>
            ))}

            {filteredItems.length === 0 && (
              <div className="py-6 text-center text-xs font-mono text-zinc-400">
                No matching commands or projects found.
              </div>
            )}
          </div>

          {/* Footer with keyboard hints */}
          <div className="px-4 py-2.5 border-t border-white/[0.06] bg-black/40 flex items-center justify-between text-[11px] font-mono text-zinc-400">
            <div className="flex items-center gap-3">
              <span>↑↓ to navigate</span>
              <span>↵ to select</span>
              <span>esc to close</span>
            </div>
            <span className="text-zinc-400">Navigation Hub</span>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
