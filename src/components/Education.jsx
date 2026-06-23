'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import SectionHeader from '@/components/SectionHeader';

const education = [
  {
    degree: 'Bachelor of Computer Application',
    institution: 'Majlis Arts and Science College',
    location: 'Puramannur',
    period: '2020 — 2023',
    description: 'Focused on software development, programming, and computer applications.',
  },
  {
    degree: 'Plus Two — Biology Science',
    institution: 'GJHSS Naduvattam',
    location: 'Naduvattam',
    period: '2018 — 2020',
    description: 'Higher Secondary Education in the Biology Science stream.',
  },
  {
    degree: 'SSLC',
    institution: 'GJHSS Naduvattam',
    location: 'Naduvattam',
    period: '2017 — 2018',
    description: 'Secondary School Leaving Certificate.',
  },
];

const Education = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="education" className="py-24 md:py-32" ref={ref}>
      <div className="section">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <SectionHeader index="05" label="Education" title="Academic background." />
        </motion.div>

        <div className="mt-12">
          {education.map((edu, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
              className="grid gap-4 border-t border-ink/15 py-8 last:border-b md:grid-cols-12 md:gap-8"
            >
              <div className="md:col-span-3">
                <p className="label">{edu.period}</p>
                <p className="label mt-1 text-ink-faint">{edu.location}</p>
              </div>
              <div className="md:col-span-9">
                <h3 className="font-serif text-2xl text-ink md:text-3xl">{edu.degree}</h3>
                <p className="mt-1 font-serif text-lg text-accent">{edu.institution}</p>
                <p className="mt-3 text-sm text-ink-soft">{edu.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
