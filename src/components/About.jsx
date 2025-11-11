import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiCode, FiSmartphone, FiZap } from 'react-icons/fi';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const highlights = [
    {
      icon: FiSmartphone,
      title: 'Mobile Development',
      description: 'Specialized in building cross-platform mobile applications using Flutter for iOS and Android.',
    },
    {
      icon: FiCode,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable code following best practices and design patterns like MVVM & MVC.',
    },
    {
      icon: FiZap,
      title: 'Fast Learner',
      description: 'Quick to adapt to new technologies and frameworks, always staying updated with industry trends.',
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="about" className="py-20 relative" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title gradient-text">About Me</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Description */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="glass-effect p-8 rounded-2xl">
              <p className="text-gray-300 text-lg leading-relaxed mb-4">
                I'm a passionate <span className="text-cyan-400 font-semibold">Flutter Developer</span> with 
                hands-on experience in building and deploying cross-platform mobile applications. Currently 
                working as a Jr. Flutter Developer at <span className="text-cyan-400 font-semibold">Codeedex Technologies</span>, 
                I specialize in creating seamless user experiences with clean, maintainable code.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed mb-4">
                My journey in mobile development started with an internship at Luminar Technolab, where I 
                honed my skills in Flutter, Firebase, and state management. Since then, I've worked on 
                multiple production apps, including apps published on the Google Play Store.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                I'm constantly learning and exploring new technologies to deliver innovative solutions. 
                My goal is to create applications that not only meet business requirements but also 
                provide exceptional user experiences.
              </p>
            </div>
          </motion.div>

          {/* Right side - Highlights */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="space-y-6"
          >
            {highlights.map((highlight, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                className="glass-effect p-6 rounded-2xl card-hover"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl">
                    <highlight.icon size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{highlight.title}</h3>
                    <p className="text-gray-400">{highlight.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Stats */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-3 gap-4"
            >
              {[
                { number: '2+', label: 'Years Experience' },
                { number: '10+', label: 'Projects Completed' },
                { number: '3', label: 'Companies Worked' },
              ].map((stat, index) => (
                <div key={index} className="glass-effect p-4 rounded-xl text-center">
                  <div className="text-3xl font-bold gradient-text mb-1">{stat.number}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
