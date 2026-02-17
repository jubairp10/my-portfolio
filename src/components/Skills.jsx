import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  SiFlutter,
  SiDart,
  SiFirebase,
  SiPython,
  SiHtml5,
  SiGithub,
  SiAndroidstudio,
  SiFigma,
  SiSqlite,
} from 'react-icons/si';
import { FiDatabase, FiCode, FiTerminal } from 'react-icons/fi';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: FiCode,
      gradient: 'from-blue-500 to-cyan-500',
      skills: [
        { name: 'Dart', icon: SiDart, color: 'text-blue-400' },
        { name: 'Python', icon: SiPython, color: 'text-yellow-400' },
        { name: 'HTML/CSS', icon: SiHtml5, color: 'text-orange-400' },
        { name: 'SQL', icon: FiDatabase, color: 'text-cyan-400' },
      ],
    },
    {
      title: 'Framework & Development',
      icon: SiFlutter,
      gradient: 'from-purple-500 to-pink-500',
      skills: [
        { name: 'Flutter', icon: SiFlutter, color: 'text-blue-400' },
        { name: 'REST API', icon: FiCode, color: 'text-green-400' },
        { name: 'MVVM Pattern', icon: FiCode, color: 'text-purple-400' },
        { name: 'Git & GitHub', icon: SiGithub, color: 'text-gray-400' },
      ],
    },
    {
      title: 'State Management',
      icon: FiCode,
      gradient: 'from-cyan-500 to-teal-500',
      skills: [
        { name: 'Provider', icon: SiFlutter, color: 'text-purple-400' },
        { name: 'Bloc', icon: SiFlutter, color: 'text-pink-400' },
        { name: 'GetX', icon: SiFlutter, color: 'text-cyan-400' },
        { name: 'Riverpod', icon: SiFlutter, color: 'text-blue-400' },
      ],
    },
    {
      title: 'Databases & Storage',
      icon: FiDatabase,
      gradient: 'from-orange-500 to-red-500',
      skills: [
        { name: 'Firebase', icon: SiFirebase, color: 'text-orange-400' },
        { name: 'Sqflite', icon: SiSqlite, color: 'text-blue-400' },
        { name: 'Hive', icon: FiDatabase, color: 'text-yellow-400' },
        { name: 'Shared Preferences', icon: FiDatabase, color: 'text-green-400' },
      ],
    },
    {
      title: 'Tools & Platforms',
      icon: SiGithub,
      gradient: 'from-green-500 to-emerald-500',
      skills: [
        { name: 'VS Code', icon: FiTerminal, color: 'text-blue-400' },
        { name: 'Android Studio', icon: SiAndroidstudio, color: 'text-green-400' },
        { name: 'Figma', icon: SiFigma, color: 'text-purple-400' },
        { name: 'Postman', icon: FiCode, color: 'text-orange-400' },
      ],
    },
    {
      title: 'Specialized Skills',
      icon: FiCode,
      gradient: 'from-indigo-500 to-purple-500',
      skills: [
        { name: 'Google Maps', icon: FiCode, color: 'text-red-400' },
        { name: 'Payment Gateway', icon: FiCode, color: 'text-green-400' },
        { name: 'Push Notifications', icon: FiCode, color: 'text-yellow-400' },
        { name: 'WhatsApp OTP', icon: FiCode, color: 'text-green-400' },
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const skillVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.3 },
    },
  };

  return (
    <section id="skills" className="py-20 relative" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title gradient-text">Skills & Technologies</h2>
          <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and the modern tools I use to build exceptional applications.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="glass-effect p-6 rounded-2xl border border-white/5 hover:border-cyan-500/30 transition-all duration-300"
            >
              {/* Category header */}
              <div className="flex items-center gap-3 mb-6">
                <div className={`p-3 bg-gradient-to-br ${category.gradient} rounded-xl shadow-lg`}>
                  <category.icon size={24} className="text-white" />
                </div>
                <h3 className="text-lg font-bold text-white">{category.title}</h3>
              </div>

              {/* Skills grid */}
              <div className="grid grid-cols-2 gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    variants={skillVariants}
                    whileHover={{ scale: 1.05 }}
                    className="flex flex-col items-center gap-2 p-3 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300 cursor-default"
                  >
                    <skill.icon className={`${skill.color}`} size={28} />
                    <span className="text-xs text-gray-300 font-medium text-center">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional expertise tags */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-12"
        >
          <h3 className="text-2xl font-bold text-center text-white mb-6">Additional Expertise</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'Cross-Platform Development',
              'App Store Deployment',
              'Google Play Console',
              'UI/UX Design',
              'Agile/Scrum',
              'Version Control',
              'Real-time Database',
              'Cloud Functions',
              'Authentication Systems',
              'Responsive Design',
            ].map((skill, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.8 + index * 0.05 }}
                whileHover={{ scale: 1.05, y: -2 }}
                className="px-4 py-2 glass-effect rounded-full text-sm text-cyan-400 border border-cyan-500/20 hover:bg-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 cursor-default"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
