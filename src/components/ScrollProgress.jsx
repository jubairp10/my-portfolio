'use client';

import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

/**
 * A thin electric-blue rule pinned to the top of the viewport that fills
 * as the page is scrolled.
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
      className="fixed inset-x-0 top-0 z-[60] h-0.5 origin-left bg-accent"
    />
  );
};

export default ScrollProgress;
