import React, { useEffect, useRef } from 'react';

/**
 * A lightweight canvas "constellation" of drifting particles connected by
 * lines when they get close. The nearest particles also lean gently toward
 * the cursor, adding depth and interactivity behind the page content.
 *
 * Performance notes:
 *  - Particle count scales with viewport size and is capped.
 *  - Honours `prefers-reduced-motion` (renders nothing).
 *  - Pauses the animation loop when the tab is hidden.
 */
const ParticleField = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    let width = 0;
    let height = 0;
    let particles = [];
    let rafId;
    const mouse = { x: -9999, y: -9999 };
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const config = {
      color: '6, 182, 212', // cyan-500 (rgb)
      maxParticles: 90,
      linkDistance: 130,
      speed: 0.35,
    };

    const resize = () => {
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      // Density based on area, capped for performance.
      const count = Math.min(
        config.maxParticles,
        Math.floor((width * height) / 16000)
      );
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * config.speed,
        vy: (Math.random() - 0.5) * config.speed,
        r: Math.random() * 1.6 + 0.6,
      }));
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Subtle attraction toward the cursor when nearby.
        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const distToMouse = Math.hypot(dx, dy);
        if (distToMouse < 160) {
          p.vx += (dx / distToMouse) * 0.02;
          p.vy += (dy / distToMouse) * 0.02;
        }

        p.x += p.vx;
        p.y += p.vy;

        // Gentle damping so the cursor pull doesn't run away.
        p.vx *= 0.99;
        p.vy *= 0.99;

        // Wrap around the edges.
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${config.color}, 0.6)`;
        ctx.fill();

        // Connect to nearby particles.
        for (let j = i + 1; j < particles.length; j++) {
          const q = particles[j];
          const dist = Math.hypot(p.x - q.x, p.y - q.y);
          if (dist < config.linkDistance) {
            const alpha = (1 - dist / config.linkDistance) * 0.25;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(q.x, q.y);
            ctx.strokeStyle = `rgba(${config.color}, ${alpha})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }

      rafId = requestAnimationFrame(draw);
    };

    const start = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(draw);
    };
    const stop = () => cancelAnimationFrame(rafId);

    const onMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    const onLeave = () => {
      mouse.x = -9999;
      mouse.y = -9999;
    };
    const onVisibility = () => (document.hidden ? stop() : start());

    resize();
    start();

    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseout', onLeave);
    document.addEventListener('visibilitychange', onVisibility);

    return () => {
      stop();
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseout', onLeave);
      document.removeEventListener('visibilitychange', onVisibility);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 h-full w-full opacity-60"
    />
  );
};

export default ParticleField;
