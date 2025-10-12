import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiBook, FiCalendar, FiMapPin, FiAward } from 'react-icons/fi';

const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const education = [
    {
      degree: 'Bachelor of Computer Application',
      institution: 'Majlis Arts and Science College',
      location: 'Puramannur',
      period: '2020 – 2023',
      description: 'Completed BCA with focus on software development, programming, and computer applications.',
      icon: '🎓',
    },
    {
      degree: 'Plus Two (Biology Science)',
      institution: 'GJHSS Naduvattam',
      location: 'Naduvattam',
      period: '2018 – 2020',
      description: 'Higher Secondary Education with Biology Science stream.',
      icon: '📚',
    },
    {
      degree: 'SSLC',
      institution: 'GJHSS Naduvattam',
      location: 'Naduvattam',
      period: '2017 – 2018',
      description: 'Secondary School Leaving Certificate.',
      icon: '📖',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
    <section id="education" className="py-20 relative" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title gradient-text">Education</h2>
          <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
            My academic journey and educational background.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="relative max-w-4xl mx-auto"
        >
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 via-blue-500 to-purple-600 hidden md:block" />

          <div className="space-y-8">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                className="relative"
              >
                {/* Timeline dot */}
                <div className="absolute left-8 w-4 h-4 bg-cyan-400 rounded-full transform -translate-x-1/2 z-10 ring-4 ring-slate-900 hidden md:block" />

                {/* Content card */}
                <div className="glass-effect p-6 rounded-2xl ml-0 md:ml-20 card-hover">
                  <div className="flex items-start gap-4">
                    {/* Icon */}
                    <div className="text-4xl">{edu.icon}</div>

                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex items-start justify-between flex-wrap gap-2 mb-2">
                        <div>
                          <h3 className="text-xl font-bold text-white mb-1">{edu.degree}</h3>
                          <p className="text-lg text-cyan-400 font-semibold">{edu.institution}</p>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-400 bg-white/5 px-3 py-1 rounded-full">
                          <FiCalendar size={14} />
                          <span>{edu.period}</span>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 text-sm text-gray-400 mb-3">
                        <FiMapPin size={14} />
                        <span>{edu.location}</span>
                      </div>

                      <p className="text-gray-400">{edu.description}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
