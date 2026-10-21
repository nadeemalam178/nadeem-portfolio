"use client";

import React, { useRef, useState, useEffect } from "react";

interface AntigravityCardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
  tiltIntensity?: number;
}

export default function AntigravityCard({
  children,
  className = "",
  glowColor = "rgba(56, 189, 248, 0.25)",
  tiltIntensity = 12,
}: AntigravityCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);
    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (prefersReducedMotion || !cardRef.current) return;
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
    if (!prefersReducedMotion) setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setCoords({ x: 0, y: 0 });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        perspective: prefersReducedMotion ? "none" : "1000px",
        transformStyle: prefersReducedMotion ? "flat" : "preserve-3d",
      }}
      className="relative group transition-all duration-300"
    >
      <div
        style={{
          transform:
            isHovered && !prefersReducedMotion
              ? `rotateX(${coords.y}deg) rotateY(${coords.x}deg) translateZ(12px) scale3d(1.015, 1.015, 1.015)`
              : "rotateX(0deg) rotateY(0deg) translateZ(0px) scale3d(1, 1, 1)",
          transition: isHovered ? "transform 0.1s ease-out" : "transform 0.5s ease-out",
          boxShadow: isHovered
            ? `0 25px 50px -12px rgba(0, 0, 0, 0.6), 0 0 35px ${glowColor}`
            : "0 10px 30px -10px rgba(0, 0, 0, 0.3)",
        }}
        className={`relative overflow-hidden rounded-3xl backdrop-blur-xl border border-white/[0.09] transition-shadow duration-300 ${className}`}
      >
        {/* Dynamic Specular Glare Effect */}
        {isHovered && !prefersReducedMotion && (
          <div
            className="pointer-events-none absolute inset-0 opacity-40 transition-opacity duration-300 mix-blend-overlay"
            style={{
              background: `radial-gradient(circle 350px at ${coords.x * 20 + 50}% ${
                coords.y * 20 + 50
              }%, rgba(255, 255, 255, 0.3), transparent 70%)`,
            }}
          />
        )}
        {children}
      </div>
    </div>
  );
}
