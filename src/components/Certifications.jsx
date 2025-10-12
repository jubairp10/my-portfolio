import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiAward, FiCheckCircle } from 'react-icons/fi';
import { SiGoogleplay } from 'react-icons/si';

const Certifications = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const certifications = [
    {
      title: 'Store Listing Certificate',
      issuer: 'Google Play Academy',
      year: '2024',
      description: 'Certified in creating effective store listings for Google Play Store applications.',
      icon: SiGoogleplay,
      color: 'from-green-500 to-emerald-600',
    },
    {
      title: 'Peer Educator 2016',
      issuer: 'Rashtriya Kishor Swasthya Karyakaram',
      year: '2016',
      description: 'Recognized as a peer educator for youth health and wellness programs.',
      icon: FiAward,
      color: 'from-blue-500 to-cyan-600',
    },
    {
      title: 'Junior Red Cross',
      issuer: 'Indian Red Cross Society',
      year: '2016 – 2018',
      description: 'Active member of Junior Red Cross, participating in community service and health awareness programs.',
      icon: FiAward,
      color: 'from-red-500 to-pink-600',
    },
    {
      title: 'Bharath Scout and Guides',
      issuer: 'The Bharat Scouts and Guides',
      year: '2018 – 2020',
      description: 'Participated in scouting activities, leadership training, and community development programs.',
      icon: FiAward,
      color: 'from-purple-500 to-indigo-600',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="certifications" className="py-20 relative" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title gradient-text">Certifications & Achievements</h2>
          <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
            Professional certifications and recognitions that showcase my commitment to continuous learning.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-2 lg:grid-cols-2 gap-6"
        >
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              className="glass-effect rounded-2xl overflow-hidden group cursor-pointer"
            >
              {/* Gradient header */}
              <div className={`h-2 bg-gradient-to-r ${cert.color}`} />

              <div className="p-6">
                {/* Icon and title */}
                <div className="flex items-start gap-4 mb-4">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className={`p-4 bg-gradient-to-br ${cert.color} rounded-xl`}
                  >
                    <cert.icon size={28} className="text-white" />
                  </motion.div>

                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-1 group-hover:text-cyan-400 transition-colors duration-300">
                      {cert.title}
                    </h3>
                    <p className="text-cyan-400 font-semibold text-sm">{cert.issuer}</p>
                  </div>
                </div>

                {/* Year badge */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="px-3 py-1 bg-white/5 rounded-full text-sm text-gray-400 border border-white/10">
                    {cert.year}
                  </div>
                  <FiCheckCircle className="text-green-400" size={16} />
                </div>

                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed">
                  {cert.description}
                </p>
              </div>

              {/* Hover effect overlay */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${cert.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none`}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Additional info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-12 text-center"
        >
          <div className="glass-effect p-6 rounded-2xl inline-block">
            <p className="text-gray-300">
              <span className="text-cyan-400 font-semibold">Continuously learning</span> and staying updated with the latest technologies and best practices in mobile development.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;
