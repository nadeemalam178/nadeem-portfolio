"use client";

import Image from "next/image";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowUpRight,
  Check,
  Copy,
  FileText,
  Mail,
  MapPin,
  Phone,
  Printer,
  X,
} from "lucide-react";
import { profile } from "@/data/profile";

interface CvModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const skills = [
  { label: "Data & reporting", value: "SQL, Excel, Google Sheets, Looker Studio, Tally ERP 9" },
  { label: "Automation", value: "Google Apps Script, Python" },
  { label: "Web development", value: "TypeScript, React, Next.js, Node.js" },
  { label: "Mobile & backend", value: "Flutter, Supabase, PostgreSQL" },
];

const projects = [
  {
    title: "Local Land by CORDYLINE",
    description: "Built a buyer-facing Android app and a Next.js dashboard connected to a shared Supabase backend.",
    stack: "React Native · Next.js · Supabase",
    href: "https://local-land-by-cordyline.vercel.app",
    linkLabel: "View project",
  },
  {
    title: "Al-Qalam Public School App & Portal",
    description: "Built a Next.js school portal and Flutter app with role-based dashboards, backed by Supabase.",
    stack: "Next.js · Flutter · Supabase",
    href: "https://github.com/nadeemalam178/Al-Qalam-Public-School",
    linkLabel: "GitHub",
  },
  {
    title: "Kosi Region Data & Analytics",
    description: "Standardized multi-district records and built data-cleaning routines and interactive reporting views.",
    stack: "JavaScript · Looker Studio · Data cleaning",
    href: "https://github.com/nadeemalam178/kosi-voter-digitalize",
    linkLabel: "GitHub",
  },
  {
    title: "PrepTake Exam Preparation App",
    description: "Built a mobile-friendly practice-test app with timed quizzes and saved test progress.",
    stack: "Python · Flask · Tailwind CSS",
    href: "https://github.com/nadeemalam178/preptake",
    linkLabel: "GitHub",
  },
];

const experience = [
  {
    role: "Data Analyst",
    organization: "JSPT Consultants Pvt. Ltd.",
    period: "Apr 2025 — Present",
    location: "Patna, Bihar",
    points: [
      "Prepare constituency-level dashboards and MIS reports for leadership.",
      "Clean and cross-check incoming municipal and district data before reporting.",
      "Use Google Apps Script to automate recurring spreadsheet reports.",
      "Provide ad hoc analysis and KPI tracking for field teams.",
    ],
  },
  {
    role: "Executive Officer",
    organization: "JOGGF",
    period: "Apr 2024 — Mar 2025",
    location: "Patna, Bihar",
    points: [
      "Maintained operational datasets and validation checks across team logs.",
      "Built trackers for task progress, field coverage, and weekly deliverables.",
      "Created Looker Studio dashboards for director reviews.",
      "Standardized existing spreadsheets into structured workbooks.",
    ],
  },
];

const education = [
  { degree: "Master of Computer Applications (MCA)", institution: "Sikkim Manipal University", period: "2026 — 2028 · In progress" },
  { degree: "Bachelor of Education (B.Ed.)", institution: "F.S. University", period: "2022 — 2024" },
  { degree: "B.Sc. Mathematics (Honours)", institution: "Magadh University", period: "2017 — 2020" },
];

const certifications = ["STET Qualified", "CTET Qualified", "TCS NQT (Cognitive & Analytical)"];

function CvSection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="cv-section">
      <h2 className="cv-section-title">{title}</h2>
      {children}
    </section>
  );
}

export default function CvModal({ isOpen, onClose }: CvModalProps) {
  const [copied, setCopied] = useState(false);
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;
    scrollAreaRef.current?.scrollTo({ top: 0 });
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  const handleCopyEmail = async () => {
    await navigator.clipboard.writeText(profile.email);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 2000);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="cv-modal-layer">
        <motion.button
          aria-label="Close CV preview"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="cv-modal-backdrop"
        />

        <motion.div
          role="dialog"
          aria-modal="true"
          aria-labelledby="cv-modal-title"
          initial={{ opacity: 0, scale: 0.97, y: 14 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.98, y: 10 }}
          className="cv-modal-window"
        >
          <div className="cv-toolbar">
            <div className="cv-toolbar-title">
              <span className="cv-toolbar-icon"><FileText size={17} /></span>
              <div>
                <h3 id="cv-modal-title">Curriculum Vitae</h3>
                <p>{profile.name}</p>
              </div>
            </div>
            <div className="cv-toolbar-actions">
              <button className="cv-action cv-action-print" onClick={() => window.print()}>
                <Printer size={15} /><span>Print / Save PDF</span>
              </button>
              <button className="cv-action cv-action-copy" onClick={handleCopyEmail}>
                {copied ? <Check size={15} /> : <Copy size={15} />}
                <span>{copied ? "Copied" : "Copy email"}</span>
              </button>
              <button className="cv-action cv-action-close" onClick={onClose} aria-label="Close CV preview">
                <X size={18} />
              </button>
            </div>
          </div>

          <div className="cv-scroll-area" ref={scrollAreaRef}>
            <article className="cv-document">
              <header className="cv-document-header">
                <div className="cv-identity">
                  <p className="cv-eyebrow">Curriculum Vitae</p>
                  <h1>{profile.name}</h1>
                  <p className="cv-role">Data Analyst <span>·</span> Software Developer</p>
                  <div className="cv-contact-list">
                    <span><MapPin size={13} />{profile.location}</span>
                    <a href={`tel:${profile.phone.replaceAll(" ", "")}`}><Phone size={13} />{profile.phone}</a>
                    <a href={`mailto:${profile.email}`}><Mail size={13} />{profile.email}</a>
                  </div>
                  <div className="cv-profile-links">
                    <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn <ArrowUpRight size={12} /></a>
                    <a href={profile.github} target="_blank" rel="noopener noreferrer">GitHub <ArrowUpRight size={12} /></a>
                  </div>
                </div>
                <div className="cv-portrait">
                  <Image
                    src="/nadeem-alam.jpg"
                    alt={profile.name}
                    width={96}
                    height={116}
                    className="cv-portrait-image"
                  />
                </div>
              </header>

              <CvSection title="Profile">
                <p className="cv-summary">
                  Data analyst and software developer based in Patna. At JSPT Consultants, I prepare constituency MIS reports and dashboards, check incoming data, and automate recurring reports. I also build web and mobile apps, including a client real-estate app and a school portal backed by Supabase.
                </p>
              </CvSection>

              <CvSection title="Experience">
                <div className="cv-experience-list">
                  {experience.map((item) => (
                    <div className="cv-experience-entry" key={item.organization}>
                      <div className="cv-entry-heading">
                        <div>
                          <h3>{item.role}</h3>
                          <p>{item.organization} <span>·</span> {item.location}</p>
                        </div>
                        <time>{item.period}</time>
                      </div>
                      <ul>{item.points.map((point) => <li key={point}>{point}</li>)}</ul>
                    </div>
                  ))}
                </div>
              </CvSection>

              <CvSection title="Selected Projects">
                <div className="cv-project-list">
                  {projects.map((project) => (
                    <article className="cv-project" key={project.title}>
                      <div className="cv-project-heading">
                        <h3>{project.title}</h3>
                        <a href={project.href} target="_blank" rel="noopener noreferrer" aria-label={`${project.linkLabel}: ${project.title}`}>
                          {project.linkLabel}<ArrowUpRight size={12} />
                        </a>
                      </div>
                      <p>{project.description}</p>
                      <span className="cv-project-stack">{project.stack}</span>
                    </article>
                  ))}
                </div>
              </CvSection>

              <CvSection title="Skills">
                <dl className="cv-skills">
                  {skills.map((skill) => (
                    <div key={skill.label}><dt>{skill.label}</dt><dd>{skill.value}</dd></div>
                  ))}
                </dl>
              </CvSection>

              <CvSection title="Education">
                <div className="cv-education-list">
                  {education.map((item) => (
                    <div className="cv-education-entry" key={item.degree}>
                      <div><h3>{item.degree}</h3><p>{item.institution}</p></div>
                      <time>{item.period}</time>
                    </div>
                  ))}
                </div>
              </CvSection>

              <footer className="cv-document-footer">
                <p><strong>Certifications</strong> {certifications.join(" · ")}</p>
                <p><strong>Languages</strong> English · Hindi · Urdu</p>
              </footer>
            </article>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
