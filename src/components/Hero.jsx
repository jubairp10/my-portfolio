import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiPhone, FiMapPin, FiDownload } from 'react-icons/fi';
import { SiFlutter, SiDart, SiFirebase } from 'react-icons/si';

const Hero = () => {
  const socialLinks = [
    { icon: FiGithub, href: 'https://github.com/jubairp10', label: 'GitHub' },
    { icon: FiLinkedin, href: 'http://www.linkedin.com/in/jubair-p', label: 'LinkedIn' },
    { icon: FiMail, href: 'mailto:jubijubairp@gmail.com', label: 'Email' },
  ];

  const floatingIcons = [
    { Icon: SiFlutter, delay: 0, color: 'text-blue-400' },
    { Icon: SiDart, delay: 0.2, color: 'text-cyan-400' },
    { Icon: SiFirebase, delay: 0.4, color: 'text-orange-400' },
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-cyan-400 rounded-full opacity-20"
            animate={{
              y: [0, -1000],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: 'linear',
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: '100%',
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-4"
            >
              <span className="text-cyan-400 text-lg font-semibold">Hello, I'm</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl md:text-7xl font-bold mb-4"
            >
              <span className="gradient-text">JUBAIR P</span>
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-2xl md:text-3xl text-gray-300 mb-6"
            >
              Flutter Developer
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-gray-400 text-lg mb-8 max-w-xl"
            >
              Passionate about building beautiful, cross-platform mobile applications with Flutter. 
              Experienced in creating seamless user experiences and scalable solutions.
            </motion.p>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4 mb-8 text-sm text-gray-400"
            >
              <div className="flex items-center gap-2">
                <FiMapPin className="text-cyan-400" />
                <span>Pattambi, Kerala</span>
              </div>
              <div className="flex items-center gap-2">
                <FiPhone className="text-cyan-400" />
                <span>+91 9072220239</span>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-wrap gap-4 mb-8"
            >
              <a href="#contact" className="btn-primary flex items-center gap-2">
                Get In Touch
              </a>
              <a 
                href="/resume.pdf" 
                download 
                className="btn-secondary flex items-center gap-2"
              >
                <FiDownload />
                Download Resume
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex gap-4"
            >
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-3 glass-effect rounded-full hover:bg-cyan-500/20 transition-all duration-300"
                  aria-label={label}
                >
                  <Icon size={24} className="text-cyan-400" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right side - Profile image with animated border */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative flex justify-center items-center"
          >
            <div className="relative">
              {/* Animated gradient border */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 blur-xl opacity-75"
                style={{ padding: '4px' }}
              />
              
              {/* Profile image container */}
              <div className="relative glass-effect rounded-full p-2 w-80 h-80 flex items-center justify-center">
                <div className="w-full h-full rounded-full overflow-hidden">
                  <img 
                    src="/my_photo.jpg" 
                    alt="Jubair P" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Floating tech icons */}
              {floatingIcons.map(({ Icon, delay, color }, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ 
                    opacity: 1, 
                    scale: 1,
                    y: [0, -20, 0],
                  }}
                  transition={{
                    opacity: { delay: 1 + delay },
                    scale: { delay: 1 + delay },
                    y: {
                      duration: 2,
                      repeat: Infinity,
                      ease: 'easeInOut',
                      delay: delay,
                    },
                  }}
                  className={`absolute glass-effect p-4 rounded-2xl ${color}`}
                  style={{
                    top: index === 0 ? '10%' : index === 1 ? '50%' : '80%',
                    right: index === 1 ? '-10%' : '80%',
                  }}
                >
                  <Icon size={32} />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ 
            opacity: { delay: 1.5 },
            y: { duration: 2, repeat: Infinity }
          }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-cyan-400 rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-3 bg-cyan-400 rounded-full mt-2"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
