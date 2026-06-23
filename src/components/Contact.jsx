'use client';

import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiArrowUpRight } from 'react-icons/fi';
import SectionHeader from '@/components/SectionHeader';

const details = [
  { label: 'Phone', value: '+91 9072220239', href: 'tel:+919072220239' },
  { label: 'Location', value: 'Pattambi, Palakkad, Kerala', href: null },
  { label: 'GitHub', value: 'github.com/jubairp10', href: 'https://github.com/jubairp10' },
  { label: 'LinkedIn', value: 'linkedin.com/in/jubair-p', href: 'http://www.linkedin.com/in/jubair-p' },
];

const Contact = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('success');
    setTimeout(() => {
      setStatus('');
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  return (
    <section id="contact" className="py-24 md:py-32" ref={ref}>
      <div className="section">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <SectionHeader index="07" label="Contact" title="Let’s build something." />
        </motion.div>

        <div className="mt-12 grid gap-14 md:grid-cols-12 md:gap-10">
          {/* Signature + details */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="md:col-span-5"
          >
            <p className="text-ink-soft">Have a project in mind, or just want to say hi?</p>
            <a
              href="mailto:jubijubairp@gmail.com"
              className="mt-3 block break-all font-serif text-3xl leading-tight text-ink transition-colors duration-300 hover:text-accent md:text-4xl"
            >
              jubijubairp@gmail.com
            </a>

            <ul className="mt-10">
              {details.map((d, i) => (
                <li
                  key={i}
                  className="flex items-baseline justify-between gap-4 border-t border-ink/15 py-4"
                >
                  <span className="label">{d.label}</span>
                  {d.href ? (
                    <a
                      href={d.href}
                      target={d.href.startsWith('http') ? '_blank' : '_self'}
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-ink transition-colors hover:text-accent"
                    >
                      {d.value} <FiArrowUpRight className="text-xs" />
                    </a>
                  ) : (
                    <span className="text-ink">{d.value}</span>
                  )}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-7"
          >
            <form onSubmit={handleSubmit} className="grid gap-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="label">Name</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="field mt-2"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="label">Email</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="field mt-2"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="label">Subject</label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="field mt-2"
                  placeholder="Project inquiry"
                />
              </div>

              <div>
                <label htmlFor="message" className="label">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="field mt-2 resize-none"
                  placeholder="Tell me about your project…"
                />
              </div>

              <div className="flex items-center gap-5">
                <button type="submit" className="btn-solid">
                  Send message <FiArrowUpRight />
                </button>
                {status === 'success' && (
                  <motion.span
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="label text-accent"
                  >
                    ✦ Sent — talk soon
                  </motion.span>
                )}
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
