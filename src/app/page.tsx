"use client";

import { useState } from "react";
import FluidBackground from "@/components/FluidBackground";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import BentoGrid from "@/components/BentoGrid";
import ProjectsSection from "@/components/ProjectsSection";
import LiveSandbox from "@/components/LiveSandbox";
import ResumeSection from "@/components/ResumeSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import ProjectModal from "@/components/ProjectModal";
import CvModal from "@/components/CvModal";
import CommandPalette from "@/components/CommandPalette";
import SmoothScroll from "@/components/SmoothScroll";
import ScrollProgress from "@/components/ScrollProgress";
import MobileDock from "@/components/MobileDock";
import { projects } from "@/data/projects";

export default function Home() {
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);
  const [isCvOpen, setIsCvOpen] = useState<boolean>(false);
  const [isCmdOpen, setIsCmdOpen] = useState<boolean>(false);

  const selectedProject = selectedProjectId
    ? projects.find((p) => p.id === selectedProjectId) || null
    : null;

  return (
    <div className="relative min-h-screen flex flex-col justify-between overflow-x-hidden pb-16 sm:pb-0">
      {/* Inertial Momentum Scrolling */}
      <SmoothScroll />

      {/* Top Laser Scroll Progress Bar */}
      <ScrollProgress />

      {/* Dynamic Fluid Glow Mesh */}
      <FluidBackground />

      {/* Top Navigation */}
      <Navbar onOpenCmd={() => setIsCmdOpen(true)} />

      {/* Main Body Content */}
      <main className="flex-1">
        <Hero />
        <BentoGrid onSelectProject={(id) => setSelectedProjectId(id)} />
        <ProjectsSection onSelectProject={(id) => setSelectedProjectId(id)} />
        <LiveSandbox />
        <ResumeSection onOpenCvModal={() => setIsCvOpen(true)} />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Bottom Quick Dock (Mobile Only) */}
      <MobileDock
        onOpenCmd={() => setIsCmdOpen(true)}
        onOpenCv={() => setIsCvOpen(true)}
      />

      {/* Interactive Project Case Study Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProjectId(null)}
      />

      {/* Interactive Curriculum Vitae & Print Engine Modal */}
      <CvModal
        isOpen={isCvOpen}
        onClose={() => setIsCvOpen(false)}
      />

      {/* Interactive Command Palette (Cmd + K / Ctrl + K) */}
      <CommandPalette
        isOpen={isCmdOpen}
        onClose={() => setIsCmdOpen(false)}
        onOpenCv={() => setIsCvOpen(true)}
      />
    </div>
  );
}
