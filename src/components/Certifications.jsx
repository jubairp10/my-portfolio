'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import SectionHeader from '@/components/SectionHeader';

const certifications = [
  {
    title: 'Store Listing Certificate',
    issuer: 'Google Play Academy',
    year: '2024',
    description: 'Certified in creating effective store listings for Google Play Store applications.',
  },
  {
    title: 'Peer Educator',
    issuer: 'Rashtriya Kishor Swasthya Karyakaram',
    year: '2016',
    description: 'Recognized as a peer educator for youth health and wellness programs.',
  },
  {
    title: 'Junior Red Cross',
    issuer: 'Indian Red Cross Society',
    year: '2016 — 2018',
    description: 'Member participating in community service and health awareness programs.',
  },
  {
    title: 'Bharath Scout and Guides',
    issuer: 'The Bharat Scouts and Guides',
    year: '2018 — 2020',
    description: 'Scouting activities, leadership training, and community development programs.',
  },
];

const Certifications = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="certifications" className="py-24 md:py-32" ref={ref}>
      <div className="section">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <SectionHeader
            index="06"
            label="Recognition"
            title="Certifications & achievements."
          />
        </motion.div>

        <div className="mt-12 grid gap-x-10 gap-y-0 md:grid-cols-2">
          {certifications.map((cert, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.08 * i }}
              className="group border-t border-ink/15 py-7"
            >
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="font-serif text-2xl text-ink transition-colors duration-300 group-hover:text-accent">
                  {cert.title}
                </h3>
                <span className="label shrink-0 text-ink-faint">{cert.year}</span>
              </div>
              <p className="mt-1 font-serif text-lg text-accent">{cert.issuer}</p>
              <p className="mt-3 text-sm text-ink-soft">{cert.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
