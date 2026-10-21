"use client";

import { useState } from "react";
import FluidBackground from "@/components/FluidBackground";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import BentoGrid from "@/components/BentoGrid";
import ProjectsSection from "@/components/ProjectsSection";
import LiveSandbox from "@/components/LiveSandbox";
import ExperienceSection from "@/components/ExperienceSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import ProjectModal from "@/components/ProjectModal";
import CvModal from "@/components/CvModal";
import CommandPalette from "@/components/CommandPalette";
import { projects } from "@/data/projects";

export default function Home() {
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);
  const [isCvOpen, setIsCvOpen] = useState<boolean>(false);
  const [isCmdOpen, setIsCmdOpen] = useState<boolean>(false);

  const selectedProject = selectedProjectId
    ? projects.find((p) => p.id === selectedProjectId) || null
    : null;

  return (
    <div className="relative min-h-screen flex flex-col justify-between overflow-x-hidden">
      {/* Dynamic Fluid Glow Mesh */}
      <FluidBackground />

      {/* Navigation */}
      <Navbar
        onOpenCv={() => setIsCvOpen(true)}
        onOpenCmd={() => setIsCmdOpen(true)}
      />

      {/* Main Body Content */}
      <main className="flex-1">
        <Hero onOpenCv={() => setIsCvOpen(true)} />
        <BentoGrid onSelectProject={(id) => setSelectedProjectId(id)} />
        <ProjectsSection onSelectProject={(id) => setSelectedProjectId(id)} />
        <LiveSandbox />
        <ExperienceSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

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
