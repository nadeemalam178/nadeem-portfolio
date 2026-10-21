"use client";

import { useState } from "react";
import confetti from "canvas-confetti";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle2,
  Copy,
  Check,
  MessageSquare,
  Sparkles,
} from "lucide-react";
import { Github, Linkedin } from "@/components/Icons";
import { profile } from "@/data/profile";

export default function ContactSection() {
  const [copied, setCopied] = useState<string | null>(null);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleCopy = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopied(type);
    setTimeout(() => setCopied(null), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
    });

    setSubmitted(true);
    // Construct mailto link
    const subject = encodeURIComponent(`Portfolio Inquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/[0.08] border border-cyan-500/20 text-cyan-400 text-xs font-medium mb-3">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Connect & Collaborate</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Let&apos;s Build Something Impactful
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 max-w-xl mt-2">
            Interested in data analytics consulting, full-stack application development, or discussing a new role? Reach out anytime.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 max-w-5xl mx-auto">
          {/* Direct Contacts Card (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="p-6 rounded-3xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-xl">
              <h3 className="text-lg font-bold text-white mb-4">Direct Communication</h3>

              {/* Email */}
              <div className="group flex items-center justify-between p-3 rounded-xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/[0.05] transition-all mb-3">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="p-2 rounded-lg bg-blue-500/10 text-cyan-400 shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="truncate">
                    <div className="text-[11px] font-mono text-zinc-400">Email Address</div>
                    <div className="text-xs font-medium text-white truncate">{profile.email}</div>
                  </div>
                </div>
                <button
                  onClick={() => handleCopy(profile.email, "email")}
                  className="p-1.5 rounded-lg bg-white/[0.05] hover:bg-white/[0.1] text-zinc-400 hover:text-white transition-colors shrink-0"
                  title="Copy email"
                >
                  {copied === "email" ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* Phone / WhatsApp */}
              <div className="group flex items-center justify-between p-3 rounded-xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/[0.05] transition-all mb-3">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-zinc-400">Phone & WhatsApp</div>
                    <div className="text-xs font-medium text-white">{profile.phone}</div>
                  </div>
                </div>
                <button
                  onClick={() => handleCopy(profile.phone, "phone")}
                  className="p-1.5 rounded-lg bg-white/[0.05] hover:bg-white/[0.1] text-zinc-400 hover:text-white transition-colors"
                  title="Copy phone"
                >
                  {copied === "phone" ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* Location */}
              <div className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.03] border border-white/[0.05]">
                <div className="p-2 rounded-lg bg-purple-500/10 text-purple-400 shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] font-mono text-zinc-400">Location</div>
                  <div className="text-xs font-medium text-white">{profile.location}</div>
                </div>
              </div>
            </div>

            {/* Socials card */}
            <div className="p-6 rounded-3xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-xl">
              <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-3">
                Professional Networks
              </h4>
              <div className="grid grid-cols-2 gap-3">
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 p-3 rounded-xl bg-blue-600/10 hover:bg-blue-600/20 text-cyan-300 border border-blue-500/20 transition-all text-xs font-medium"
                >
                  <Linkedin className="w-4 h-4" />
                  <span>LinkedIn</span>
                </a>
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 p-3 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] text-white border border-white/[0.1] transition-all text-xs font-medium"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub</span>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Message Form (3 cols) */}
          <div className="lg:col-span-3">
            <div className="p-6 sm:p-8 rounded-3xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-xl">
              <h3 className="text-lg font-bold text-white mb-1">Send a Direct Message</h3>
              <p className="text-xs text-zinc-400 mb-6">
                Fill out the quick form below to dispatch an inquiry directly to Nadeem Alam.
              </p>

              {submitted ? (
                <div className="p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-center">
                  <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto mb-2" />
                  <h4 className="text-base font-bold text-white">Message Prepared</h4>
                  <p className="text-xs text-zinc-300 mt-1">
                    Your email client has been triggered. If it didn&apos;t open automatically, write directly to{" "}
                    <span className="text-emerald-300 font-mono">{profile.email}</span>.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-mono text-zinc-300 mb-1.5">
                      Your Full Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Jane Doe"
                      className="w-full px-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/[0.09] text-white text-xs placeholder-zinc-500 focus:outline-none focus:border-cyan-500/50"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-zinc-300 mb-1.5">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. jane@company.com"
                      className="w-full px-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/[0.09] text-white text-xs placeholder-zinc-500 focus:outline-none focus:border-cyan-500/50"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-zinc-300 mb-1.5">
                      Message / Project Details
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell me about your project, timeline, or open role..."
                      className="w-full px-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/[0.09] text-white text-xs placeholder-zinc-500 focus:outline-none focus:border-cyan-500/50 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600 text-white font-semibold text-xs shadow-lg shadow-blue-600/30 hover:shadow-cyan-500/20 transition-all hover:scale-[1.01] active:scale-95"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Send Inquiry to Nadeem</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
