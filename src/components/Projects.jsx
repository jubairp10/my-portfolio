import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiGithub, FiExternalLink, FiCode } from 'react-icons/fi';
import { SiFlutter, SiFirebase, SiDart, SiGoogleplay } from 'react-icons/si';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const projects = [
    {
      title: 'KeyRoute',
      description: 'Vendor & User Apps built with Flutter featuring Google Maps integration, live tracking, and secure payment UI. Implemented REST APIs with MVVM architecture for scalable and maintainable code.',
      tags: ['Flutter', 'Google Maps', 'REST API', 'MVVM', 'Payment Gateway'],
      links: {
        playstore: 'https://play.google.com/store/apps/details?id=com.keyroute.app',
      },
      gradient: 'from-cyan-500 to-blue-600',
    },
    {
      title: 'Adacode Student App',
      description: 'Comprehensive student management app built with Flutter and Firebase backend. Features include YouTube player integration, real-time notifications, and Provider state management for efficient data handling.',
      tags: ['Flutter', 'Firebase', 'YouTube API', 'Provider', 'Real-time'],
      links: {},
      gradient: 'from-purple-500 to-pink-600',
    },
    {
      title: 'Skill Free 2.0',
      description: 'Daily job finder application focused on day-labor workers. Features simple, intuitive UI with real-time job listings, location-based search, and instant notifications for new opportunities.',
      tags: ['Flutter', 'Firebase', 'Geolocation', 'Push Notifications'],
      links: {
        github: 'https://github.com/jubairp10/skillfree',
      },
      gradient: 'from-orange-500 to-red-600',
    },
    {
      title: 'Simple Calculator App',
      description: 'Clean and efficient calculator application built with Flutter. Supports basic arithmetic operations with a modern, user-friendly interface and smooth animations.',
      tags: ['Flutter', 'Dart', 'UI/UX'],
      links: {
        github: 'https://github.com/jubairp10/calculator',
      },
      gradient: 'from-green-500 to-teal-600',
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
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="projects" className="py-20 relative" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title gradient-text">Featured Projects</h2>
          <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills in Flutter development, 
            API integration, and creating user-friendly mobile applications.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-2 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="glass-effect rounded-2xl overflow-hidden group"
            >
              {/* Project header with gradient */}
              <div className={`h-2 bg-gradient-to-r ${project.gradient}`} />

              <div className="p-6">
                {/* Title and icon */}
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                      {project.title}
                    </h3>
                  </div>
                  <div className="p-3 glass-effect rounded-xl">
                    <FiCode className="text-cyan-400" size={24} />
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-400 mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 text-sm bg-cyan-500/10 text-cyan-400 rounded-full border border-cyan-500/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  {project.links.github && (
                    <motion.a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 px-4 py-2 glass-effect rounded-lg hover:bg-cyan-500/20 transition-all duration-300"
                    >
                      <FiGithub size={20} />
                      <span className="text-sm">Code</span>
                    </motion.a>
                  )}
                  {project.links.playstore && (
                    <motion.a
                      href={project.links.playstore}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 px-4 py-2 glass-effect rounded-lg hover:bg-cyan-500/20 transition-all duration-300"
                    >
                      <SiGoogleplay size={20} />
                      <span className="text-sm">Play Store</span>
                    </motion.a>
                  )}
                  {project.links.demo && (
                    <motion.a
                      href={project.links.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 px-4 py-2 glass-effect rounded-lg hover:bg-cyan-500/20 transition-all duration-300"
                    >
                      <FiExternalLink size={20} />
                      <span className="text-sm">Demo</span>
                    </motion.a>
                  )}
                </div>
              </div>

              {/* Hover effect overlay */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none`}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* View more projects CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/jubairp10"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 btn-secondary"
          >
            <FiGithub size={20} />
            View More on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
