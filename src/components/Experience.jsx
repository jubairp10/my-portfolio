'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import SectionHeader from '@/components/SectionHeader';

const experiences = [
  {
    title: 'Flutter Developer',
    company: 'Code51',
    location: 'Mangalore',
    period: 'Jan 2026 — Present',
    current: true,
    logo: '/code51.png',
    responsibilities: [
      'Developing cross-platform mobile applications using Flutter and Dart',
      'Integrating REST APIs and third-party services for enhanced functionality',
      'Collaborating with cross-functional teams to deliver high-quality solutions',
    ],
  },
  {
    title: 'Jr. Flutter Developer',
    company: 'Codeedex Technologies',
    location: 'Perinthalmanna',
    period: 'Mar 2025 — Jan 2026',
    current: false,
    responsibilities: [
      'Developed and published Flutter e-commerce apps for iOS & Android',
      'Integrated Firebase Auth, FCM, and WhatsApp OTP for secure authentication',
      'Deployed cross-platform apps to Google Play Store and App Store',
    ],
  },
  {
    title: 'Flutter Developer',
    company: 'Adacode Solutions',
    location: 'Kozhikode',
    period: 'Jun 2024 — Sep 2024',
    current: false,
    responsibilities: [
      'Designed and developed cross-platform Flutter applications',
      'Collaborated with designers and backend developers on complete solutions',
      'Implemented modern UI/UX patterns and best practices',
    ],
  },
  {
    title: 'Android Flutter Developer Intern',
    company: 'Luminar Technolab',
    location: 'Kozhikode',
    period: 'Oct 2023 — Apr 2024',
    current: false,
    responsibilities: [
      'Built Flutter apps using Sqflite, Hive, and Firebase',
      'Integrated REST APIs and used GitHub for version control',
      'Applied Provider, GetX and Bloc for state management',
    ],
  },
];

const Experience = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="experience" className="py-24 md:py-32" ref={ref}>
      <div className="section">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <SectionHeader index="02" label="Experience" title="Where I’ve worked." />
        </motion.div>

        <div className="mt-12">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
              className="group grid gap-4 border-t border-ink/15 py-8 last:border-b md:grid-cols-12 md:gap-8"
            >
              <div className="md:col-span-3">
                <p className="label">{exp.period}</p>
                <p className="label mt-1 text-ink-faint">{exp.location}</p>
                {exp.current && (
                  <p className="label mt-1 text-accent">● Current</p>
                )}
              </div>

              <div className="md:col-span-9">
                <div className="flex items-center gap-3">
                  {exp.logo && (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={exp.logo} alt={`${exp.company} logo`} className="h-5 w-auto object-contain" />
                  )}
                  <h3 className="font-serif text-2xl text-ink transition-colors duration-300 group-hover:text-accent md:text-3xl">
                    {exp.title} <span className="text-ink-soft">— {exp.company}</span>
                  </h3>
                </div>
                <ul className="mt-4 space-y-1.5">
                  {exp.responsibilities.map((r, idx) => (
                    <li key={idx} className="flex gap-3 text-sm text-ink-soft">
                      <span className="text-accent">—</span>
                      <span>{r}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
