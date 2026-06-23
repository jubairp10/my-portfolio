'use client';

import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import { FiArrowDownRight, FiArrowUpRight, FiDownload } from 'react-icons/fi';

const Hero3D = dynamic(() => import('@/components/three/Hero3D'), {
  ssr: false,
  loading: () => (
    <div className="absolute inset-0 grid place-items-center">
      <div className="h-28 w-28 rounded-full border border-accent/40" />
    </div>
  ),
});

const socials = [
  { label: 'GitHub', href: 'https://github.com/jubairp10' },
  { label: 'LinkedIn', href: 'http://www.linkedin.com/in/jubair-p' },
  { label: 'Email', href: 'mailto:jubijubairp@gmail.com' },
];

const fade = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] },
  }),
};

const Hero = () => {
  return (
    <section id="home" className="relative flex min-h-screen flex-col justify-center pb-16 pt-28">
      <div className="section w-full">
        {/* Kicker */}
        <motion.div
          variants={fade}
          initial="hidden"
          animate="show"
          className="flex items-center justify-between border-b border-ink/15 pb-4"
        >
          <span className="label">Jubair&nbsp;P — Portfolio ’26</span>
          <span className="label hidden sm:inline">Flutter Developer · Kerala, India</span>
        </motion.div>

        <div className="grid gap-12 pt-10 md:grid-cols-12 md:gap-10">
          {/* Left — statement */}
          <div className="md:col-span-8">
            <motion.h1
              variants={fade}
              custom={1}
              initial="hidden"
              animate="show"
              className="display text-balance text-[clamp(2.75rem,8vw,7rem)] text-ink"
            >
              Flutter developer crafting{' '}
              <span className="italic text-accent">cross-platform</span> mobile apps.
            </motion.h1>

            <motion.p
              variants={fade}
              custom={2}
              initial="hidden"
              animate="show"
              className="mt-8 max-w-xl text-lg leading-relaxed text-ink-soft"
            >
              I design and build beautiful, high-performance apps for iOS and Android —
              turning ideas into seamless, production-ready experiences.
            </motion.p>

            <motion.div
              variants={fade}
              custom={3}
              initial="hidden"
              animate="show"
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <a href="#contact" className="btn-solid">
                Get in touch <FiArrowUpRight />
              </a>
              <a href="/resume.pdf" download className="btn-outline">
                Résumé <FiDownload />
              </a>
            </motion.div>

            <motion.div
              variants={fade}
              custom={4}
              initial="hidden"
              animate="show"
              className="mt-10 flex flex-wrap gap-x-6 gap-y-2"
            >
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="label inline-flex items-center gap-1 hover:text-accent"
                >
                  {s.label} <FiArrowUpRight className="text-[10px]" />
                </a>
              ))}
            </motion.div>
          </div>

          {/* Right rail — wireframe + portrait */}
          <motion.div
            variants={fade}
            custom={2}
            initial="hidden"
            animate="show"
            className="md:col-span-4"
          >
            <div className="relative aspect-square w-full">
              <Hero3D />
            </div>

            <figure className="mt-2">
              <div className="relative aspect-[4/5] w-full overflow-hidden border border-ink/20">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/my_photo.jpg"
                  alt="Jubair P"
                  className="h-full w-full object-cover grayscale transition-all duration-700 hover:grayscale-0"
                />
              </div>
              <figcaption className="label mt-3 flex items-center justify-between">
                <span>Based in Kerala</span>
                <span className="text-accent">Available ’26</span>
              </figcaption>
            </figure>
          </motion.div>
        </div>
      </div>

      {/* Scroll hint */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="section mt-14 flex w-full items-center gap-2"
      >
        <span className="label inline-flex items-center gap-1 hover:text-accent">
          Scroll to explore <FiArrowDownRight />
        </span>
      </motion.a>
    </section>
  );
};

export default Hero;
