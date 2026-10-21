"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Copy,
  Check,
  MessageSquare,
  ArrowUpRight,
} from "lucide-react";
import { Github, Linkedin } from "@/components/Icons";
import { profile } from "@/data/profile";

export default function ContactSection() {
  const [copiedType, setCopiedType] = useState<string | null>(null);
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });

  const handleCopy = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2500);
  };

  const handleComposeEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    const emailSubject = encodeURIComponent(
      formData.subject || `Professional Inquiry from ${formData.name}`
    );
    const emailBody = encodeURIComponent(
      `Sender Name: ${formData.name}\nSender Email: ${formData.email}\n\nMessage:\n${formData.message}`
    );

    window.location.href = `mailto:${profile.email}?subject=${emailSubject}&body=${emailBody}`;
  };

  return (
    <section id="contact" className="py-24 border-b border-white/[0.06] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono mb-3">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Direct Communication</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
            Get In Touch
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 max-w-xl mt-2 leading-relaxed">
            Open to discussing data analytics projects, automation workflows, full-stack application development, or full-time opportunities.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 max-w-5xl mx-auto">
          {/* Direct Channels Card (2 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-2 space-y-4"
          >
            <div className="p-6 rounded-2xl bg-[#0b0d14] border border-white/[0.08]">
              <h3 className="text-base font-bold text-white mb-4">Direct Contact Details</h3>

              {/* Email */}
              <div className="flex items-center justify-between p-3 rounded-xl bg-white/[0.02] border border-white/[0.05] mb-3">
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
                  aria-label="Copy email address"
                >
                  {copiedType === "email" ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* Phone */}
              <div className="flex items-center justify-between p-3 rounded-xl bg-white/[0.02] border border-white/[0.05] mb-3">
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
                  aria-label="Copy phone number"
                >
                  {copiedType === "phone" ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* Location */}
              <div className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                <div className="p-2 rounded-lg bg-purple-500/10 text-purple-400 shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] font-mono text-zinc-400">Location Base</div>
                  <div className="text-xs font-medium text-white">{profile.location}</div>
                </div>
              </div>
            </div>

            {/* Verified External Profiles */}
            <div className="p-6 rounded-2xl bg-[#0b0d14] border border-white/[0.08]">
              <div className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-3">
                Verified Online Profiles
              </div>
              <div className="grid grid-cols-2 gap-3">
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-blue-600/10 hover:bg-blue-600/20 text-cyan-300 border border-blue-500/20 transition-all text-xs font-medium"
                >
                  <div className="flex items-center gap-2">
                    <Linkedin className="w-4 h-4" />
                    <span>LinkedIn</span>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-cyan-400" />
                </a>

                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-white border border-white/[0.08] transition-all text-xs font-medium"
                >
                  <div className="flex items-center gap-2">
                    <Github className="w-4 h-4" />
                    <span>GitHub</span>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-zinc-400" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Email Composer Form (3 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-3"
          >
            <div className="p-6 sm:p-7 rounded-2xl bg-[#0b0d14] border border-white/[0.08]">
              <h3 className="text-base font-bold text-white mb-1">Direct Message Dispatch</h3>
              <p className="text-xs text-zinc-400 mb-5">
                Submitting this form drafts an email directly in your default email client addressed to{" "}
                <span className="text-zinc-300 font-mono">{profile.email}</span>.
              </p>

              <form onSubmit={handleComposeEmail} className="space-y-3.5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label htmlFor="name-input" className="block text-xs font-mono text-zinc-300 mb-1">
                      Your Name
                    </label>
                    <input
                      id="name-input"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Jane Doe"
                      className="w-full px-3.5 py-2 rounded-xl bg-white/[0.03] border border-white/[0.08] text-white text-xs placeholder-zinc-500 focus:outline-none focus:border-cyan-500/50"
                    />
                  </div>

                  <div>
                    <label htmlFor="email-input" className="block text-xs font-mono text-zinc-300 mb-1">
                      Your Email Address
                    </label>
                    <input
                      id="email-input"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="jane@company.com"
                      className="w-full px-3.5 py-2 rounded-xl bg-white/[0.03] border border-white/[0.08] text-white text-xs placeholder-zinc-500 focus:outline-none focus:border-cyan-500/50"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject-input" className="block text-xs font-mono text-zinc-300 mb-1">
                    Subject Line (Optional)
                  </label>
                  <input
                    id="subject-input"
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="Project Inquiry / Job Opportunity"
                    className="w-full px-3.5 py-2 rounded-xl bg-white/[0.03] border border-white/[0.08] text-white text-xs placeholder-zinc-500 focus:outline-none focus:border-cyan-500/50"
                  />
                </div>

                <div>
                  <label htmlFor="message-input" className="block text-xs font-mono text-zinc-300 mb-1">
                    Message Details
                  </label>
                  <textarea
                    id="message-input"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Briefly describe your inquiry, scope, or open role..."
                    className="w-full px-3.5 py-2 rounded-xl bg-white/[0.03] border border-white/[0.08] text-white text-xs placeholder-zinc-500 focus:outline-none focus:border-cyan-500/50 resize-none"
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-white text-zinc-950 font-semibold text-xs hover:bg-zinc-200 transition-colors shadow-sm"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Draft Email to Nadeem</span>
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
