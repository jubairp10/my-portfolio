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
  SiAirtable
} from 'react-icons/si';
import { FiDatabase, FiCode, FiTerminal } from 'react-icons/fi';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: FiCode,
      skills: [
        { name: 'Dart', icon: SiDart, color: 'text-blue-400', level: 90 },
        { name: 'Python', icon: SiPython, color: 'text-yellow-400', level: 75 },
        { name: 'HTML', icon: SiHtml5, color: 'text-orange-400', level: 85 },
        { name: 'SQL', icon: FiDatabase, color: 'text-cyan-400', level: 80 },
      ],
    },
    {
      title: 'Framework & Development',
      icon: SiFlutter,
      skills: [
        { name: 'Flutter', icon: SiFlutter, color: 'text-blue-400', level: 90 },
        { name: 'REST API', icon: FiCode, color: 'text-green-400', level: 85 },
        { name: 'MVVM Pattern', icon: FiCode, color: 'text-purple-400', level: 85 },
        { name: 'Git & GitHub', icon: SiGithub, color: 'text-gray-400', level: 85 },
      ],
    },
    {
      title: 'State Management',
      icon: FiCode,
      skills: [
        { name: 'Provider', icon: SiFlutter, color: 'text-purple-400', level: 90 },
        { name: 'Bloc', icon: SiFlutter, color: 'text-pink-400', level: 60 },
        { name: 'GetX', icon: SiFlutter, color: 'text-cyan-400', level: 75 },

      ],
    },
    {
      title: 'Databases & Storage',
      icon: FiDatabase,
      skills: [
        { name: 'Firebase', icon: SiFirebase, color: 'text-orange-400', level: 85 },
        { name: 'Sqflite', icon: SiSqlite, color: 'text-blue-400', level: 80 },
        { name: 'Hive', icon: FiDatabase, color: 'text-yellow-400', level: 75 },
        { name: 'Shared Preferences', icon: FiDatabase, color: 'text-green-400', level: 85 },
      ],
    },
    {
      title: 'Tools & Platforms',
      icon: SiGithub,
      skills: [
        { name: 'VS Code', icon: FiTerminal, color: 'text-blue-400', level: 90 },
        { name: 'Android Studio', icon: SiAndroidstudio, color: 'text-green-400', level: 85 },
        { name: 'Figma', icon: SiFigma, color: 'text-purple-400', level: 75 },
        { name: 'Postman', icon: FiCode, color: 'text-orange-400', level: 80 },
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
            A comprehensive overview of my technical skills and the tools I use to build amazing applications.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-2 gap-8"
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              variants={itemVariants}
              className="glass-effect p-6 rounded-2xl"
            >
              {/* Category header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl">
                  <category.icon size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-white">{category.title}</h3>
              </div>

              {/* Skills list */}
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                  >
                    {/* Skill name and icon */}
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <skill.icon className={`${skill.color}`} size={20} />
                        <span className="text-gray-300 font-medium">{skill.name}</span>
                      </div>
                      <span className="text-sm text-gray-400">{skill.level}%</span>
                    </div>

                    {/* Progress bar */}
                    <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : {}}
                        transition={{ 
                          duration: 1, 
                          delay: categoryIndex * 0.1 + skillIndex * 0.05,
                          ease: 'easeOut'
                        }}
                        className="h-full bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional skills tags */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-12"
        >
          <h3 className="text-2xl font-bold text-center text-white mb-6">Other Skills</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'MVVM Architecture',
              'RESTful APIs',
              'State Management',
              'Version Control',
              'Agile/Scrum',
              'UI/UX Design',
              'Google Play Console',
              'App Store Deployment',
              'Push Notifications',
              'Google Maps Integration',
              'Payment Gateway Integration',
              'Real-time Database',
            ].map((skill, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.8 + index * 0.05 }}
                whileHover={{ scale: 1.1 }}
                className="px-4 py-2 glass-effect rounded-full text-sm text-cyan-400 border border-cyan-500/20 hover:bg-cyan-500/20 transition-all duration-300 cursor-default"
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
