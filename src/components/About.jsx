'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import SectionHeader from '@/components/SectionHeader';

const highlights = [
  {
    no: '(a)',
    title: 'Mobile development',
    description: 'Cross-platform iOS & Android apps built with Flutter, shipped to production.',
  },
  {
    no: '(b)',
    title: 'Clean architecture',
    description: 'Maintainable, scalable code following MVVM / MVC and proven patterns.',
  },
  {
    no: '(c)',
    title: 'Fast learner',
    description: 'Quick to adopt new tools and frameworks, always tracking what’s next.',
  },
];

const stats = [
  { number: '2+', label: 'Years experience' },
  { number: '10+', label: 'Projects shipped' },
  { number: '4', label: 'Companies' },
];

const About = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="py-24 md:py-32" ref={ref}>
      <div className="section">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <SectionHeader index="01" label="About" title="A developer, not just a coder." />
        </motion.div>

        <div className="mt-14 grid gap-12 md:grid-cols-12 md:gap-10">
          {/* Lead + paragraphs */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="md:col-span-7"
          >
            <p className="font-serif text-2xl leading-snug text-ink md:text-3xl">
              I&apos;m a <span className="text-accent">Flutter developer</span> building and shipping
              cross-platform apps — currently at Code51 in Mangalore.
            </p>
            <div className="mt-8 space-y-5 text-ink-soft">
              <p>
                My journey started with an internship at Luminar Technolab, where I honed Flutter,
                Firebase, and state management. I then worked as a Jr. Flutter Developer at Codeedex
                Technologies, shipping production e-commerce apps for iOS and Android with payment
                gateway integration and real-time notifications.
              </p>
              <p>
                I&apos;m constantly exploring new technologies to deliver solutions that meet business
                goals while providing exceptional user experiences.
              </p>
            </div>
          </motion.div>

          {/* Highlights */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-5"
          >
            <ul>
              {highlights.map((h, i) => (
                <li
                  key={i}
                  className={`flex gap-4 py-5 ${i === 0 ? '' : 'border-t border-ink/15'}`}
                >
                  <span className="label pt-1 text-accent">{h.no}</span>
                  <div>
                    <h3 className="font-serif text-xl text-ink">{h.title}</h3>
                    <p className="mt-1 text-sm text-ink-soft">{h.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 grid grid-cols-3 border-t border-ink/15"
        >
          {stats.map((s, i) => (
            <div key={i} className={`py-7 ${i === 0 ? '' : 'border-l border-ink/15 pl-6'}`}>
              <div className="display text-5xl text-ink md:text-6xl">{s.number}</div>
              <div className="label mt-2">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
