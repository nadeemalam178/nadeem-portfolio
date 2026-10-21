"use client";

import { useEffect, useState } from "react";

export default function FluidBackground() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
      {/* Background base mesh */}
      <div className="absolute inset-0 bg-[#08090d] transition-colors duration-500" />

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.035] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"
      />

      {/* Primary fluid morphing orb */}
      <div
        className="absolute top-[-10%] left-[15%] w-[600px] h-[600px] rounded-full blur-[140px] opacity-25 mix-blend-screen transition-transform duration-1000 ease-out bg-gradient-to-tr from-cyan-500 via-blue-600 to-indigo-600 animate-pulse"
        style={{
          transform: `translate(${mousePos.x * 0.15}px, ${mousePos.y * 0.15}px)`,
        }}
      />

      {/* Secondary fluid morphing orb */}
      <div
        className="absolute top-[35%] right-[5%] w-[500px] h-[500px] rounded-full blur-[130px] opacity-20 mix-blend-screen transition-transform duration-1000 ease-out bg-gradient-to-br from-emerald-500 via-teal-600 to-indigo-700"
        style={{
          transform: `translate(${-mousePos.x * 0.12}px, ${mousePos.y * 0.1}px)`,
        }}
      />

      {/* Bottom accent glow */}
      <div
        className="absolute bottom-[-10%] left-[25%] w-[700px] h-[450px] rounded-full blur-[150px] opacity-20 mix-blend-screen bg-gradient-to-r from-violet-600 via-purple-700 to-blue-500"
        style={{
          transform: `translate(${mousePos.x * 0.08}px, ${-mousePos.y * 0.08}px)`,
        }}
      />
    </div>
  );
}
