'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import SectionHeader from '@/components/SectionHeader';

const categories = [
  {
    title: 'Languages',
    skills: ['Dart', 'Python', 'HTML / CSS', 'SQL'],
  },
  {
    title: 'Frameworks',
    skills: ['Flutter', 'REST API', 'MVVM Pattern', 'Git & GitHub'],
  },
  {
    title: 'State Management',
    skills: ['Provider', 'Bloc', 'GetX', 'Riverpod'],
  },
  {
    title: 'Data & Storage',
    skills: ['Firebase', 'Sqflite', 'Hive', 'Shared Preferences'],
  },
  {
    title: 'Tools',
    skills: ['VS Code', 'Android Studio', 'Figma', 'Postman'],
  },
  {
    title: 'Specialized',
    skills: ['Google Maps', 'Payment Gateways', 'Push Notifications', 'WhatsApp OTP'],
  },
];

const additional = [
  'Cross-Platform Development',
  'App Store Deployment',
  'Google Play Console',
  'UI/UX Design',
  'Agile / Scrum',
  'Real-time Database',
  'Cloud Functions',
  'Authentication Systems',
  'Responsive Design',
];

const Skills = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="skills" className="py-24 md:py-32" ref={ref}>
      <div className="section">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <SectionHeader
            index="04"
            label="Toolkit"
            title="Tools & technologies."
            intro="The stack and patterns I reach for to design and ship dependable apps."
          />
        </motion.div>

        <div className="mt-14 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((cat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.06 * i }}
            >
              <div className="flex items-baseline justify-between border-b border-ink/15 pb-3">
                <span className="label">{cat.title}</span>
                <span className="label text-ink-faint">{String(i + 1).padStart(2, '0')}</span>
              </div>
              <ul className="mt-4 space-y-2.5">
                {cat.skills.map((skill, j) => (
                  <li key={j} className="font-serif text-xl text-ink">
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 border-t border-ink/15 pt-8"
        >
          <span className="label">Also experienced with</span>
          <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2">
            {additional.map((item, i) => (
              <span key={i} className="tag text-ink">
                {item}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
