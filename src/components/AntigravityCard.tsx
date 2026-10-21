"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

interface AntigravityCardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
  tiltIntensity?: number;
}

export default function AntigravityCard({
  children,
  className = "",
  glowColor = "rgba(56, 189, 248, 0.15)",
  tiltIntensity = 8,
}: AntigravityCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const isMotionOrTouchDisabled = () => {
    if (typeof window === "undefined") return true;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const touchPointer = window.matchMedia("(pointer: coarse)").matches || "ontouchstart" in window;
    return reducedMotion || touchPointer;
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isMotionOrTouchDisabled() || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = -((y - centerY) / centerY) * tiltIntensity;
    const rotateY = ((x - centerX) / centerX) * tiltIntensity;

    setCoords({ x: rotateY, y: rotateX });
  };

  const handleMouseEnter = () => {
    if (!isMotionOrTouchDisabled()) {
      setIsHovered(true);
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setCoords({ x: 0, y: 0 });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative group transition-all duration-300 w-full"
    >
      <div
        style={{
          transform: isHovered
            ? `perspective(1000px) rotateX(${coords.y}deg) rotateY(${coords.x}deg) scale3d(1.01, 1.01, 1.01)`
            : "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)",
          transition: isHovered ? "transform 0.1s ease-out" : "transform 0.4s ease-out",
          boxShadow: isHovered
            ? `0 20px 40px -15px rgba(0, 0, 0, 0.7), 0 0 25px ${glowColor}`
            : "0 8px 24px -10px rgba(0, 0, 0, 0.35)",
        }}
        className={`relative overflow-hidden rounded-2xl backdrop-blur-md border border-white/[0.08] transition-shadow duration-300 ${className}`}
      >
        {/* Subtle dynamic specular highlight for desktop pointer */}
        {isHovered && (
          <div
            className="pointer-events-none absolute inset-0 opacity-30 transition-opacity duration-300 mix-blend-overlay"
            style={{
              background: `radial-gradient(circle 300px at ${coords.x * 20 + 50}% ${
                coords.y * 20 + 50
              }%, rgba(255, 255, 255, 0.25), transparent 70%)`,
            }}
          />
        )}
        {children}
      </div>
    </motion.div>
  );
}
