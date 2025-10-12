import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiSend, FiLinkedin, FiGithub } from 'react-icons/fi';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [formStatus, setFormStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to a backend service
    // For now, we'll just show a success message
    setFormStatus('success');
    setTimeout(() => {
      setFormStatus('');
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: FiMail,
      title: 'Email',
      value: 'jubijubairp@gmail.com',
      link: 'mailto:jubijubairp@gmail.com',
      color: 'from-red-500 to-pink-600',
    },
    {
      icon: FiPhone,
      title: 'Phone',
      value: '+91 9072220239',
      link: 'tel:+919072220239',
      color: 'from-green-500 to-emerald-600',
    },
    {
      icon: FiMapPin,
      title: 'Location',
      value: 'Pattambi, Palakkad, Kerala',
      link: null,
      color: 'from-blue-500 to-cyan-600',
    },
    {
      icon: FiLinkedin,
      title: 'LinkedIn',
      value: 'linkedin.com/in/jubair-p',
      link: 'http://www.linkedin.com/in/jubair-p',
      color: 'from-blue-600 to-blue-800',
    },
  ];

  return (
    <section id="contact" className="py-20 relative" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title gradient-text">Get In Touch</h2>
          <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach out. 
            I'm always open to discussing new opportunities and ideas.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="glass-effect p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
              <p className="text-gray-400 mb-8">
                Feel free to reach out through any of these channels. I typically respond within 24 hours.
              </p>

              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    whileHover={{ x: 10 }}
                  >
                    {info.link ? (
                      <a
                        href={info.link}
                        target={info.link.startsWith('http') ? '_blank' : '_self'}
                        rel="noopener noreferrer"
                        className="flex items-start gap-4 p-4 glass-effect rounded-xl hover:bg-white/5 transition-all duration-300 group"
                      >
                        <div className={`p-3 bg-gradient-to-br ${info.color} rounded-lg group-hover:scale-110 transition-transform duration-300`}>
                          <info.icon size={24} className="text-white" />
                        </div>
                        <div>
                          <p className="text-sm text-gray-400 mb-1">{info.title}</p>
                          <p className="text-white font-medium group-hover:text-cyan-400 transition-colors duration-300">
                            {info.value}
                          </p>
                        </div>
                      </a>
                    ) : (
                      <div className="flex items-start gap-4 p-4 glass-effect rounded-xl">
                        <div className={`p-3 bg-gradient-to-br ${info.color} rounded-lg`}>
                          <info.icon size={24} className="text-white" />
                        </div>
                        <div>
                          <p className="text-sm text-gray-400 mb-1">{info.title}</p>
                          <p className="text-white font-medium">{info.value}</p>
                        </div>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>

              {/* Social Links */}
              <div className="mt-8 pt-8 border-t border-white/10">
                <p className="text-gray-400 mb-4">Connect with me on social media:</p>
                <div className="flex gap-4">
                  <motion.a
                    href="https://github.com/jubairp10"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-4 glass-effect rounded-xl hover:bg-cyan-500/20 transition-all duration-300"
                  >
                    <FiGithub size={24} className="text-cyan-400" />
                  </motion.a>
                  <motion.a
                    href="http://www.linkedin.com/in/jubair-p"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-4 glass-effect rounded-xl hover:bg-cyan-500/20 transition-all duration-300"
                  >
                    <FiLinkedin size={24} className="text-cyan-400" />
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <form onSubmit={handleSubmit} className="glass-effect p-8 rounded-2xl space-y-6">
              <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>

              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-cyan-500 text-white placeholder-gray-500 transition-colors duration-300"
                  placeholder="John Doe"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-cyan-500 text-white placeholder-gray-500 transition-colors duration-300"
                  placeholder="john@example.com"
                />
              </div>

              {/* Subject */}
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-cyan-500 text-white placeholder-gray-500 transition-colors duration-300"
                  placeholder="Project Inquiry"
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-cyan-500 text-white placeholder-gray-500 transition-colors duration-300 resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full btn-primary flex items-center justify-center gap-2"
              >
                <FiSend size={20} />
                Send Message
              </motion.button>

              {/* Success Message */}
              {formStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-green-500/20 border border-green-500/50 rounded-lg text-green-400 text-center"
                >
                  Message sent successfully! I'll get back to you soon.
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
