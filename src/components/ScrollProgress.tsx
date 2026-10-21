"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
    restDelta: 0.001,
  });

  return (
    <div className="fixed top-0 left-0 right-0 z-50 pointer-events-none h-[3px]">
      <motion.div
        className="h-full bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 origin-left"
        style={{
          scaleX,
          boxShadow: "0 0 12px rgba(56, 189, 248, 0.8), 0 0 20px rgba(99, 102, 241, 0.4)",
        }}
      />
    </div>
  );
}
