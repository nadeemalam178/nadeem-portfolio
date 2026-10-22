"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, BookOpen, CheckCircle2, X } from "lucide-react";
import { Github } from "@/components/Icons";
import { Project } from "@/data/projects";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (!project) return;

    const previouslyFocused = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
        return;
      }

      if (event.key !== "Tab" || !dialogRef.current) return;
      const focusable = Array.from(
        dialogRef.current.querySelectorAll<HTMLElement>("a[href], button:not([disabled])"),
      );
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
      previouslyFocused?.focus();
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="project-modal-layer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.18, ease: [0.23, 1, 0.32, 1] }}
        >
          <motion.button
            type="button"
            className="project-modal-backdrop"
            aria-label="Close project details"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18, ease: [0.23, 1, 0.32, 1] }}
          />

          <motion.div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-modal-title"
            tabIndex={-1}
            className="project-modal-window"
            initial={{
              opacity: 0,
              transform: reduceMotion ? "none" : "translateY(12px) scale(.985)",
            }}
            animate={{ opacity: 1, transform: "translateY(0) scale(1)" }}
            exit={{
              opacity: 0,
              transform: reduceMotion ? "none" : "translateY(7px) scale(.99)",
            }}
            transition={{ duration: 0.24, ease: [0.23, 1, 0.32, 1] }}
          >
            <div className="project-modal-head">
              <div className="project-modal-kickers">
                <span className="project-modal-category">{project.category}</span>
                <span className="project-modal-status">{project.status}</span>
              </div>
              <h2 id="project-modal-title">{project.title}</h2>
              <p className="project-modal-tagline">{project.tagline}</p>
            </div>

            <button
              ref={closeButtonRef}
              type="button"
              className="project-modal-close"
              onClick={onClose}
              aria-label="Close project details"
            >
              <X size={18} />
            </button>

            <section className="project-modal-section">
              <span className="project-modal-label">THE PROJECT</span>
              <p className="project-modal-summary">{project.summary}</p>
            </section>

            <section className="project-modal-section">
              <span className="project-modal-label">WHAT IT INCLUDES</span>
              <ul className="project-modal-features">
                {project.verifiedFeatures.map((feature) => (
                  <li key={feature}><CheckCircle2 size={15} /><span>{feature}</span></li>
                ))}
              </ul>
            </section>

            <div className="project-modal-contribution">
              <span className="project-modal-label">MY CONTRIBUTION</span>
              <p>{project.roleAndContribution}</p>
            </div>

            <section className="project-modal-section project-modal-tech">
              <span className="project-modal-label">TOOLS & TECHNOLOGIES</span>
              <div className="project-modal-tags">
                {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
              </div>
            </section>

            <div className="project-modal-actions">
              <Link href={`/projects/${project.id}`} className="project-modal-primary" onClick={onClose}>
                <BookOpen size={15} /> Read the case study <ArrowUpRight size={14} />
              </Link>
              {project.demoUrl && project.demoUrl !== project.repoUrl && (
                <a href={project.demoUrl} target="_blank" rel="noreferrer" className="project-modal-secondary">
                  Open {project.id === "local-land-cordyline" ? "live dashboard" : "project"} <ArrowUpRight size={14} />
                </a>
              )}
              {project.repoUrl ? (
                <a href={project.repoUrl} target="_blank" rel="noreferrer" className="project-modal-secondary">
                  <Github size={14} /> Source repository <ArrowUpRight size={13} />
                </a>
              ) : project.id === "local-land-cordyline" ? (
                <span className="project-modal-private">Client project · private source</span>
              ) : null}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
