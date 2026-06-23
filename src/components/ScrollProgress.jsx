import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

/**
 * A slim gradient bar pinned to the top of the viewport that fills
 * as the user scrolls down the page. Uses a spring so the motion
 * feels smooth instead of jumpy.
 */
const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      style={{ scaleX }}
      className="fixed top-0 left-0 right-0 z-[60] h-1 origin-left bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 shadow-[0_0_12px_rgba(6,182,212,0.6)]"
    />
  );
};

export default ScrollProgress;
