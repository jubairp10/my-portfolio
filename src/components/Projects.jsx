import React, { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { FiGithub, FiExternalLink, FiChevronDown, FiChevronUp } from 'react-icons/fi';
import { SiGoogleplay, SiAppstore } from 'react-icons/si';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [expandedProject, setExpandedProject] = useState(null);

  const projects = [
    {
      title: 'Coffee Labs E-Commerce',
      description: 'A comprehensive coffee e-commerce mobile application for a Saudi Arabia-based company. Features WhatsApp OTP authentication, Tamara payment gateway integration for Buy Now Pay Later, Firebase Authentication, FCM push notifications, and intuitive UI with categorized browsing for coffee materials and brewing accessories.',
      tags: ['Flutter', 'Dart', 'GetX', 'Firebase', 'FCM', 'WhatsApp OTP', 'REST API', 'Payment Gateway', 'iOS', 'Android'],
      links: {
        appstore: 'https://apps.apple.com/in/app/coffee-labs/id6752988420',
        playstore: 'https://play.google.com/store/apps/details?id=com.codeedex.coffeelabs'
      },
      logo: 'https://play-lh.googleusercontent.com/ZLSISAuyiNygev03CY3FFhQyTLyrBREr7N2xIVpzdO1rV9x8l_rcjkJF9edxNqYb3iXuBcWPFvDrPj33-30CqA=w240-h480-rw',
      gradient: 'from-amber-600 to-orange-700',
      featured: true,
    },
    {
      title: 'Syopi E-commerce Fashion Store',
      description: 'A modern e-commerce fashion app offering trendy clothing, deals, and seamless shopping experience. Features include product listings, authentication, cart, and order management with a clean architecture using Provider for state management.',
      tags: ['Flutter', 'Firebase', 'REST API', 'Provider', 'Node.js', 'iOS', 'Android'],
      links: {
        appstore: 'https://apps.apple.com/in/app/syopi/id6747420245',
        playstore: 'https://play.google.com/store/apps/details?id=com.syopi.usernew'
      },
      logo: 'https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/6a/42/b6/6a42b669-b9ba-4a06-6b4d-5a8ac4de8b2e/Placeholder.mill/200x200bb-75.webp',
      gradient: 'from-pink-500 to-rose-600',
      featured: true,
    },
    {
      title: 'KeyRoute',
      description: 'Vendor & User Apps built with Flutter featuring Google Maps integration, live tracking, and secure payment UI. Implemented REST APIs with MVVM architecture for scalable and maintainable code.',
      tags: ['Flutter', 'Google Maps', 'REST API', 'MVVM', 'Payment Gateway'],
      links: {
        playstore: 'https://play.google.com/store/apps/details?id=com.keyroute.app',
      },
      logo: 'https://play-lh.googleusercontent.com/c-mgOAmRLY57utCyrOS02f3NOqoW3Tb2JqL_Vw1-Rz4Nv9lo-0cLjZMMA3CML9qBiLU=w240-h480-rw',
      gradient: 'from-cyan-500 to-blue-600',
      featured: false,
    },
    {
      title: 'Adacode Student App',
      description: 'Comprehensive student management app built with Flutter and Firebase backend. Features include YouTube player integration, real-time notifications, and Provider state management for efficient data handling.',
      tags: ['Flutter', 'Firebase', 'YouTube API', 'Provider', 'Real-time'],
      links: {},
      gradient: 'from-purple-500 to-pink-600',
      featured: false,
    },
    {
      title: 'Skill Free 2.0',
      description: 'Daily job finder application focused on day-labor workers. Features simple, intuitive UI with real-time job listings, location-based search, and instant notifications for new opportunities.',
      tags: ['Flutter', 'Firebase', 'Geolocation', 'Push Notifications'],
      links: {
        github: 'https://github.com/jubairp10/skillfree',
      },
      gradient: 'from-orange-500 to-red-600',
      featured: false,
    },
    {
      title: 'Simple Calculator App',
      description: 'Clean and efficient calculator application built with Flutter. Supports basic arithmetic operations with a modern, user-friendly interface and smooth animations.',
      tags: ['Flutter', 'Dart', 'UI/UX'],
      links: {
        github: 'https://github.com/jubairp10/calculator',
      },
      gradient: 'from-green-500 to-teal-600',
      featured: false,
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  const toggleExpand = (index) => {
    setExpandedProject(expandedProject === index ? null : index);
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
            Showcasing my recent work in mobile development, from e-commerce platforms to utility applications.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              className={`glass-effect rounded-2xl overflow-hidden border border-white/5 hover:border-cyan-500/30 transition-all duration-300 flex flex-col ${project.featured ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
            >
              {/* Gradient header with logo */}
              <div className={`h-32 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/20" />

                {/* Logo */}
                {project.logo && (
                  <div className="absolute top-4 left-4">
                    <div className="w-16 h-16 bg-white rounded-xl p-2 shadow-lg">
                      <img
                        src={project.logo}
                        alt={`${project.title} logo`}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>
                )}

                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl font-bold text-white drop-shadow-lg">
                    {project.title}
                  </h3>
                </div>
                {project.featured && (
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-xs font-semibold rounded-full border border-white/30">
                      Featured
                    </span>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-6 flex-1 flex flex-col">
                {/* Description */}
                <div className="mb-4">
                  <p className={`text-gray-400 text-sm leading-relaxed ${expandedProject === index ? '' : 'line-clamp-2'}`}>
                    {project.description}
                  </p>
                  <button
                    onClick={() => toggleExpand(index)}
                    className="flex items-center gap-1 text-cyan-400 text-xs mt-2 hover:text-cyan-300 transition-colors"
                  >
                    {expandedProject === index ? (
                      <>
                        <span>Show less</span>
                        <FiChevronUp size={14} />
                      </>
                    ) : (
                      <>
                        <span>Read more</span>
                        <FiChevronDown size={14} />
                      </>
                    )}
                  </button>
                </div>

                {/* Tags */}
                <AnimatePresence>
                  {expandedProject === index ? (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="flex flex-wrap gap-2 mb-4"
                    >
                      {project.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 text-xs bg-cyan-500/10 text-cyan-400 rounded-md border border-cyan-500/20"
                        >
                          {tag}
                        </span>
                      ))}
                    </motion.div>
                  ) : (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.slice(0, 4).map((tag, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 text-xs bg-cyan-500/10 text-cyan-400 rounded-md border border-cyan-500/20"
                        >
                          {tag}
                        </span>
                      ))}
                      {project.tags.length > 4 && (
                        <span className="px-2 py-1 text-xs bg-white/5 text-gray-400 rounded-md">
                          +{project.tags.length - 4} more
                        </span>
                      )}
                    </div>
                  )}
                </AnimatePresence>

                {/* Links */}
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.links.github && (
                    <motion.a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-1.5 px-3 py-2 bg-white/5 hover:bg-white/10 rounded-lg text-xs text-gray-300 transition-all duration-300 border border-white/10"
                    >
                      <FiGithub size={14} />
                      <span>Code</span>
                    </motion.a>
                  )}
                  {project.links.playstore && (
                    <motion.a
                      href={project.links.playstore}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-1.5 px-3 py-2 bg-green-500/10 hover:bg-green-500/20 rounded-lg text-xs text-green-400 transition-all duration-300 border border-green-500/20"
                    >
                      <SiGoogleplay size={14} />
                      <span>Play Store</span>
                    </motion.a>
                  )}
                  {project.links.appstore && (
                    <motion.a
                      href={project.links.appstore}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-1.5 px-3 py-2 bg-blue-500/10 hover:bg-blue-500/20 rounded-lg text-xs text-blue-400 transition-all duration-300 border border-blue-500/20"
                    >
                      <SiAppstore size={14} />
                      <span>App Store</span>
                    </motion.a>
                  )}
                  {project.links.demo && (
                    <motion.a
                      href={project.links.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-1.5 px-3 py-2 bg-cyan-500/10 hover:bg-cyan-500/20 rounded-lg text-xs text-cyan-400 transition-all duration-300 border border-cyan-500/20"
                    >
                      <FiExternalLink size={14} />
                      <span>Demo</span>
                    </motion.a>
                  )}
                </div>
              </div>
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
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105"
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
