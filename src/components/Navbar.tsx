"use client";

import { useState, useEffect } from "react";
import { Sparkles, Menu, X, ArrowUpRight, Search } from "lucide-react";
import { profile } from "@/data/profile";

interface NavbarProps {
  onOpenCmd: () => void;
}

export default function Navbar({ onOpenCmd }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToContact = () => {
    const contactEl = document.getElementById("contact");
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navLinks = [
    { label: "Overview", href: "#bento" },
    { label: "Projects", href: "#projects" },
    { label: "SQL Sandbox", href: "#sandbox" },
    { label: "CV & Impact", href: "#resume-section" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-[#080a12]/80 backdrop-blur-2xl border-b border-white/[0.08] shadow-lg shadow-black/50 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo with Concentric glow */}
          <a
            href="#"
            className="flex items-center gap-3 group focus:outline-none"
          >
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-cyan-400 p-[1px] shadow-lg shadow-blue-500/20 group-hover:shadow-cyan-400/30 transition-shadow">
              <div className="w-full h-full bg-[#0d1017] rounded-[15px] flex items-center justify-center font-bold text-white tracking-wider text-xs font-mono group-hover:scale-105 transition-transform">
                NA
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-semibold text-white tracking-tight text-sm group-hover:text-cyan-400 transition-colors">
                {profile.name}
              </span>
              <span className="text-[10px] text-zinc-400 font-mono tracking-wider -mt-0.5">
                Data Analyst & Dev
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-white/[0.04] border border-white/[0.08] rounded-full px-4 py-1.5 backdrop-blur-xl shadow-inner">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-3.5 py-1 text-xs font-medium text-zinc-300 hover:text-white hover:bg-white/[0.07] rounded-full transition-all"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop Actions + Cmd+K Trigger */}
          <div className="hidden sm:flex items-center gap-2.5">
            {/* Command Palette Button */}
            <button
              id="cmd-k-trigger"
              onClick={onOpenCmd}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-mono text-zinc-300 bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.09] transition-all hover:scale-105"
              title="Open Command Palette (Cmd + K / Ctrl + K)"
            >
              <Search className="w-3.5 h-3.5 text-cyan-400" />
              <span className="hidden md:inline text-[11px]">Search</span>
              <kbd className="px-1.5 py-0.5 text-[10px] rounded bg-white/[0.08] border border-white/[0.1] text-zinc-300">
                ⌘K
              </kbd>
            </button>

            {/* Hire / Contact Action with nested trailing icon */}
            <button
              onClick={scrollToContact}
              className="group inline-flex items-center gap-2 pl-4 pr-1.5 py-1.5 rounded-full text-xs font-semibold text-white bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 shadow-md shadow-blue-600/30 transition-all hover:scale-[1.02] active:scale-95"
            >
              <span>Get in Touch</span>
              <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center group-hover:translate-x-0.5 transition-transform">
                <ArrowUpRight className="w-3.5 h-3.5 text-white" />
              </div>
            </button>
          </div>

          {/* Mobile menu toggle */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={onOpenCmd}
              className="p-2 rounded-xl bg-white/[0.05] border border-white/[0.1] text-zinc-200"
              aria-label="Search Command Palette"
            >
              <Search className="w-4 h-4 text-cyan-400" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-white/[0.05] border border-white/[0.1] text-zinc-300 hover:text-white"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-[#0a0d16]/95 border-b border-white/[0.1] backdrop-blur-2xl px-6 py-5 transition-all">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-medium text-zinc-300 hover:text-cyan-400 py-1"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 border-t border-white/[0.08] flex flex-col gap-2.5">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenCmd();
                }}
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-mono text-zinc-200 bg-white/[0.06] border border-white/[0.1]"
              >
                <Search className="w-4 h-4 text-cyan-400" />
                Quick Search (Cmd + K)
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  scrollToContact();
                }}
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-blue-600 to-cyan-600"
              >
                <Sparkles className="w-4 h-4 text-amber-300" />
                Get in Touch
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
