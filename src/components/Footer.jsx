import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiHeart, FiArrowUp } from 'react-icons/fi';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { icon: FiGithub, href: 'https://github.com/jubairp10', label: 'GitHub' },
    { icon: FiLinkedin, href: 'http://www.linkedin.com/in/jubair-p', label: 'LinkedIn' },
    { icon: FiMail, href: 'mailto:jubijubairp@gmail.com', label: 'Email' },
  ];

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="relative py-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div>
            <motion.h3
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-bold gradient-text mb-4"
            >
              JUBAIR P
            </motion.h3>
            <p className="text-gray-400 mb-4">
              Flutter Developer passionate about creating beautiful, functional mobile applications.
            </p>
            <div className="flex gap-4">
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
                  <Icon size={20} className="text-cyan-400" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 flex items-center gap-2"
                  >
                    <span className="text-cyan-400">▹</span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Get In Touch</h4>
            <ul className="space-y-3 text-gray-400">
              <li>
                <a 
                  href="mailto:jubijubairp@gmail.com"
                  className="hover:text-cyan-400 transition-colors duration-300"
                >
                  jubijubairp@gmail.com
                </a>
              </li>
              <li>
                <a 
                  href="tel:+919072220239"
                  className="hover:text-cyan-400 transition-colors duration-300"
                >
                  +91 9072220239
                </a>
              </li>
              <li>Pattambi, Palakkad, Kerala</li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {new Date().getFullYear()} Jubair P. All rights reserved.
            </p>

            {/* Back to top button */}
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 glass-effect rounded-full hover:bg-cyan-500/20 transition-all duration-300"
              aria-label="Scroll to top"
            >
              <FiArrowUp size={20} className="text-cyan-400" />
            </motion.button>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-50" />
    </footer>
  );
};

export default Footer;
