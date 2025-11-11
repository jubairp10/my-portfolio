import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiBriefcase, FiCalendar, FiMapPin } from 'react-icons/fi';

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const experiences = [
    {
      title: 'Flutter Developer',
      company: 'Codeedex Technologies',
      location: 'Perinthalmanna',
      period: 'Mar 2025 – Present',
      current: true,
      responsibilities: [
        'Worked collaboratively with designers and backend engineers to develop Flutter apps aligned with business goals',
        'Built and deployed cross-platform mobile apps for iOS & Android',
        'Published apps on Google Play Console',
      ],
    },
    {
      title: 'Flutter Developer',
      company: 'Adacode Solutions',
      location: 'Kozhikode',
      period: 'Jun 2024 – Sep 2024',
      current: false,
      responsibilities: [
        'Designed and developed cross-platform Flutter applications',
        'Collaborated with designers and backend developers for complete solutions',
        'Implemented modern UI/UX patterns and best practices',
      ],
    },
    {
      title: 'Android Flutter Developer Intern',
      company: 'Luminar Technolab',
      location: 'Kozhikode',
      period: 'Oct 2023 – Apr 2024',
      current: false,
      responsibilities: [
        'Built Flutter apps using Sqflite, Hive, and Firebase',
        'Integrated REST APIs and used GitHub for version control',
        'Applied Provider,Getx and Bloc for state management',
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="experience" className="py-20 relative" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title gradient-text">Work Experience</h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="relative"
        >
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 via-blue-500 to-purple-600" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-cyan-400 rounded-full transform -translate-x-1/2 z-10 ring-4 ring-slate-900" />

                {/* Content card */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className={`glass-effect p-6 rounded-2xl ml-20 md:ml-0 md:w-5/12 ${
                    index % 2 === 0 ? 'md:mr-auto md:pr-12' : 'md:ml-auto md:pl-12'
                  } card-hover`}
                >
                  {/* Header */}
                  <div className="mb-4">
                    <div className="flex items-center gap-2 mb-2">
                      <FiBriefcase className="text-cyan-400" />
                      <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                      {exp.current && (
                        <span className="px-2 py-1 text-xs bg-green-500/20 text-green-400 rounded-full">
                          Current
                        </span>
                      )}
                    </div>
                    <p className="text-lg text-cyan-400 font-semibold">{exp.company}</p>
                  </div>

                  {/* Details */}
                  <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-400">
                    <div className="flex items-center gap-2">
                      <FiCalendar size={14} />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FiMapPin size={14} />
                      <span>{exp.location}</span>
                    </div>
                  </div>

                  {/* Responsibilities */}
                  <ul className="space-y-2">
                    {exp.responsibilities.map((resp, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-gray-300">
                        <span className="text-cyan-400 mt-1">▹</span>
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
