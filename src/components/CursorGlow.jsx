import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

/**
 * A soft radial glow plus a small dot that trail the cursor with spring
 * physics, giving the site a modern, interactive feel. Renders nothing on
 * touch devices or when the user prefers reduced motion.
 */
const CursorGlow = () => {
  const [enabled, setEnabled] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Soft, slightly laggy glow
  const glowX = useSpring(mouseX, { stiffness: 120, damping: 20, mass: 0.6 });
  const glowY = useSpring(mouseY, { stiffness: 120, damping: 20, mass: 0.6 });

  // Snappier dot that stays close to the real pointer
  const dotX = useSpring(mouseX, { stiffness: 500, damping: 40 });
  const dotY = useSpring(mouseY, { stiffness: 500, damping: 40 });

  useEffect(() => {
    const hasFinePointer = window.matchMedia('(pointer: fine)').matches;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!hasFinePointer || reducedMotion) return;

    setEnabled(true);

    const move = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, [mouseX, mouseY]);

  if (!enabled) return null;

  return (
    <>
      {/* Large soft glow */}
      <motion.div
        style={{ x: glowX, y: glowY }}
        className="pointer-events-none fixed -top-40 -left-40 z-[55] h-80 w-80 rounded-full bg-cyan-500/20 blur-3xl"
        aria-hidden="true"
      />
      {/* Crisp leading dot */}
      <motion.div
        style={{ x: dotX, y: dotY }}
        className="pointer-events-none fixed -top-1.5 -left-1.5 z-[55] h-3 w-3 rounded-full bg-cyan-300 mix-blend-screen shadow-[0_0_10px_rgba(34,211,238,0.9)]"
        aria-hidden="true"
      />
    </>
  );
};

export default CursorGlow;
