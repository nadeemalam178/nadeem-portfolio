"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Briefcase, Clock3, FileText, Layers, Send } from "lucide-react";

interface MobileDockProps {
  onOpenCv: () => void;
  reduceMotion?: boolean;
  isHidden?: boolean;
}

export default function MobileDock({
  onOpenCv,
  reduceMotion = false,
  isHidden = false,
}: MobileDockProps) {
  const [activeSection, setActiveSection] = useState<string>("top");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 200);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    if (!("IntersectionObserver" in window)) {
      return () => window.removeEventListener("scroll", handleScroll);
    }

    const sectionIds = ["top", "work", "approach", "experience", "contact"];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-20% 0px -55% 0px",
        threshold: 0.05,
      }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  const handleNavClick = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth" });
    }
  };

  const navItems = [
    {
      id: "work",
      label: "Work",
      icon: Briefcase,
      onClick: () => handleNavClick("work"),
      isActive: activeSection === "work",
    },
    {
      id: "approach",
      label: "Approach",
      icon: Layers,
      onClick: () => handleNavClick("approach"),
      isActive: activeSection === "approach",
    },
    {
      id: "experience",
      label: "Experience",
      icon: Clock3,
      onClick: () => handleNavClick("experience"),
      isActive: activeSection === "experience",
    },
    {
      id: "cv",
      label: "CV",
      icon: FileText,
      onClick: onOpenCv,
      isActive: false,
    },
    {
      id: "contact",
      label: "Contact",
      icon: Send,
      onClick: () => handleNavClick("contact"),
      isActive: activeSection === "contact",
      isPrimary: true,
    },
  ];

  return (
    <AnimatePresence>
      {!isHidden && isScrolled && (
        <motion.nav
          role="navigation"
          aria-label="Mobile quick navigation dock"
          className="mobile-dock-wrap"
          initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 24, scale: 0.94 }}
          animate={reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0, scale: 1 }}
          exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 20, scale: 0.94 }}
          transition={{ type: "spring", stiffness: 320, damping: 28 }}
        >
          <div className="mobile-dock">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={item.onClick}
                  className={`mobile-dock-item ${item.isActive ? "is-active" : ""} ${
                    item.isPrimary ? "is-primary" : ""
                  }`}
                  aria-label={item.label}
                  aria-current={item.isActive ? "page" : undefined}
                >
                  {item.isActive && (
                    <motion.span
                      layoutId="mobile-dock-pill"
                      className="mobile-dock-pill"
                      transition={{ type: "spring", stiffness: 360, damping: 30 }}
                      aria-hidden="true"
                    />
                  )}
                  <Icon size={15} className="mobile-dock-icon" strokeWidth={1.9} />
                  <span className="mobile-dock-label">{item.label}</span>
                </button>
              );
            })}
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  );
}
