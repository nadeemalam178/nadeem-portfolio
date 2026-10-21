"use client";

import { useEffect, useState } from "react";

export default function FluidBackground() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrollY(window.scrollY);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
      {/* Background base mesh */}
      <div className="absolute inset-0 bg-[#08090d] transition-colors duration-500" />

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.035] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"
      />

      {/* Primary fluid morphing orb with subtle scroll parallax */}
      <div
        className="absolute top-[-10%] left-[15%] w-[600px] h-[600px] rounded-full blur-[140px] opacity-25 mix-blend-screen transition-transform duration-700 ease-out bg-gradient-to-tr from-cyan-500 via-blue-600 to-indigo-600"
        style={{
          transform: `translate3d(${mousePos.x * 0.15}px, ${mousePos.y * 0.15 - scrollY * 0.12}px, 0)`,
        }}
      />

      {/* Secondary fluid morphing orb with counter parallax */}
      <div
        className="absolute top-[35%] right-[5%] w-[500px] h-[500px] rounded-full blur-[130px] opacity-20 mix-blend-screen transition-transform duration-700 ease-out bg-gradient-to-br from-emerald-500 via-teal-600 to-indigo-700"
        style={{
          transform: `translate3d(${-mousePos.x * 0.12}px, ${mousePos.y * 0.1 + scrollY * 0.08}px, 0)`,
        }}
      />

      {/* Bottom accent glow */}
      <div
        className="absolute bottom-[-10%] left-[25%] w-[700px] h-[450px] rounded-full blur-[150px] opacity-20 mix-blend-screen transition-transform duration-700 ease-out bg-gradient-to-r from-violet-600 via-purple-700 to-blue-500"
        style={{
          transform: `translate3d(${mousePos.x * 0.08}px, ${-mousePos.y * 0.08 - scrollY * 0.05}px, 0)`,
        }}
      />
    </div>
  );
}
