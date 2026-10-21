"use client";

import { useState, useEffect } from "react";
import confetti from "canvas-confetti";
import { Sparkles, FileText, Menu, X, ArrowUpRight, Mail } from "lucide-react";
import { Github, Linkedin } from "@/components/Icons";
import { profile } from "@/data/profile";

interface NavbarProps {
  onOpenCv: () => void;
}

export default function Navbar({ onOpenCv }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const triggerCelebration = () => {
    confetti({
      particleCount: 70,
      spread: 60,
      origin: { y: 0.15 },
      colors: ["#38bdf8", "#818cf8", "#34d399", "#f43f5e"],
    });

    const contactEl = document.getElementById("contact");
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navLinks = [
    { label: "Overview", href: "#bento" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0b0d14]/80 backdrop-blur-xl border-b border-white/[0.08] shadow-lg shadow-black/40 py-3.5"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            className="flex items-center gap-3 group focus:outline-none"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-cyan-400 p-[1px] shadow-lg shadow-blue-500/20 group-hover:shadow-blue-500/40 transition-shadow">
              <div className="w-full h-full bg-[#0d1017] rounded-[11px] flex items-center justify-center font-bold text-white tracking-wider text-sm group-hover:scale-105 transition-transform">
                NA
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-semibold text-white tracking-tight text-base group-hover:text-cyan-400 transition-colors">
                {profile.name}
              </span>
              <span className="text-[11px] text-zinc-400 font-mono tracking-wide -mt-0.5">
                Data Analyst & Dev
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-1 bg-white/[0.04] border border-white/[0.08] rounded-full px-4 py-1.5 backdrop-blur-md">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-3.5 py-1.5 text-xs font-medium text-zinc-300 hover:text-white hover:bg-white/[0.06] rounded-full transition-all"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenCv}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium text-zinc-200 bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.1] transition-all hover:scale-105"
            >
              <FileText className="w-3.5 h-3.5 text-cyan-400" />
              <span>Resume / CV</span>
            </button>

            <button
              onClick={triggerCelebration}
              className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-medium text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 shadow-md shadow-blue-600/30 transition-all hover:scale-105 active:scale-95"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-300 animate-spin" style={{ animationDuration: "4s" }} />
              <span>Get in Touch</span>
            </button>
          </div>

          {/* Mobile menu toggle */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={onOpenCv}
              className="p-2 rounded-lg bg-white/[0.05] border border-white/[0.1] text-zinc-200"
              aria-label="View CV"
            >
              <FileText className="w-4 h-4 text-cyan-400" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-white/[0.05] border border-white/[0.1] text-zinc-300 hover:text-white"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-[#0b0d14]/95 border-b border-white/[0.1] backdrop-blur-2xl px-6 py-5 transition-all">
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
                  onOpenCv();
                }}
                className="w-full flex items-center justify-center gap-2 py-2 rounded-lg text-xs font-medium text-zinc-200 bg-white/[0.06] border border-white/[0.1]"
              >
                <FileText className="w-4 h-4 text-cyan-400" />
                View & Download Curriculum Vitae
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  triggerCelebration();
                }}
                className="w-full flex items-center justify-center gap-2 py-2 rounded-lg text-xs font-medium text-white bg-gradient-to-r from-blue-600 to-indigo-600"
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
