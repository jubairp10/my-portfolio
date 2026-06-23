'use client';

import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiArrowUpRight } from 'react-icons/fi';
import SectionHeader from '@/components/SectionHeader';

const projects = [
  {
    title: 'Gulf Eshara',
    description:
      'A modern digital magazine platform that brings together insightful writing, social commentary, and community-driven content. Carefully curated monthly editions cover culture, lifestyle, and social awareness, with a clean, easy-to-use interface and an optimized reading experience built to inspire readers and connect communities through powerful storytelling.',
    tags: ['Flutter', 'Dart', 'Digital Magazine', 'REST API', 'Firebase', 'iOS', 'Android'],
    links: {
      appstore: 'https://apps.apple.com/in/app/gulf-eshara/id6761815681',
      playstore: 'https://play.google.com/store/apps/details?id=com.codefiftyone.gulfesharaapp',
    },
    logo: 'https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/c1/bf/56/c1bf56ec-59a0-629d-6445-5a5e676cca96/AppIcon-0-0-1x_U007emarketing-0-11-0-85-220.png/256x256bb.jpg',
    featured: true,
  },
  {
    title: 'Coffee Labs E-Commerce',
    description:
      'A comprehensive coffee e-commerce app for a Saudi Arabia-based company. Features WhatsApp OTP authentication, Tamara payment gateway for Buy Now Pay Later, Firebase Authentication, FCM push notifications, and an intuitive UI with categorized browsing for coffee materials and brewing accessories.',
    tags: ['Flutter', 'Dart', 'GetX', 'Firebase', 'FCM', 'WhatsApp OTP', 'Payment Gateway', 'iOS', 'Android'],
    links: {
      appstore: 'https://apps.apple.com/in/app/coffee-labs/id6752988420',
      playstore: 'https://play.google.com/store/apps/details?id=com.codeedex.coffeelabs',
    },
    logo: 'https://play-lh.googleusercontent.com/ZLSISAuyiNygev03CY3FFhQyTLyrBREr7N2xIVpzdO1rV9x8l_rcjkJF9edxNqYb3iXuBcWPFvDrPj33-30CqA=w240-h480-rw',
    featured: true,
  },
  {
    title: 'Syopi Fashion Store',
    description:
      'A modern e-commerce fashion app offering trendy clothing, deals, and a seamless shopping experience. Includes product listings, authentication, cart, and order management with a clean architecture using Provider for state management.',
    tags: ['Flutter', 'Firebase', 'REST API', 'Provider', 'Node.js', 'iOS', 'Android'],
    links: {
      appstore: 'https://apps.apple.com/in/app/syopi/id6747420245',
      playstore: 'https://play.google.com/store/apps/details?id=com.syopi.usernew',
    },
    logo: 'https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/6a/42/b6/6a42b669-b9ba-4a06-6b4d-5a8ac4de8b2e/Placeholder.mill/200x200bb-75.webp',
    featured: true,
  },
  {
    title: 'KeyRoute',
    description:
      'Vendor & User apps built with Flutter featuring Google Maps integration, live tracking, and secure payment UI. Implemented REST APIs with an MVVM architecture for scalable, maintainable code.',
    tags: ['Flutter', 'Google Maps', 'REST API', 'MVVM', 'Payment Gateway'],
    links: {
      playstore: 'https://play.google.com/store/apps/details?id=com.keyroute.app',
    },
    logo: 'https://play-lh.googleusercontent.com/c-mgOAmRLY57utCyrOS02f3NOqoW3Tb2JqL_Vw1-Rz4Nv9lo-0cLjZMMA3CML9qBiLU=w240-h480-rw',
    featured: false,
  },
  {
    title: 'Adacode Student App',
    description:
      'A comprehensive student management app built with Flutter and a Firebase backend. Features YouTube player integration, real-time notifications, and Provider state management for efficient data handling.',
    tags: ['Flutter', 'Firebase', 'YouTube API', 'Provider', 'Real-time'],
    links: {},
    featured: false,
  },
  {
    title: 'Skill Free 2.0',
    description:
      'A daily job finder focused on day-labor workers. Simple, intuitive UI with real-time job listings, location-based search, and instant notifications for new opportunities.',
    tags: ['Flutter', 'Firebase', 'Geolocation', 'Push Notifications'],
    links: {
      github: 'https://github.com/jubairp10/skillfree',
    },
    featured: false,
  },
  {
    title: 'Simple Calculator',
    description:
      'A clean, efficient calculator app built with Flutter. Supports basic arithmetic with a modern, user-friendly interface and smooth animations.',
    tags: ['Flutter', 'Dart', 'UI/UX'],
    links: {
      github: 'https://github.com/jubairp10/calculator',
    },
    featured: false,
  },
];

const linkLabels = {
  appstore: 'App Store',
  playstore: 'Play Store',
  github: 'Code',
  demo: 'Live',
};

const Projects = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  const [expanded, setExpanded] = useState(null);

  return (
    <section id="projects" className="py-24 md:py-32" ref={ref}>
      <div className="section">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <SectionHeader
            index="03"
            label="Selected work"
            title="Apps I’ve shipped."
            intro="From e-commerce platforms to digital publishing — live on the App Store and Google Play."
          />
        </motion.div>

        <div className="mt-12">
          {projects.map((project, index) => {
            const isOpen = expanded === index;
            const no = String(index + 1).padStart(2, '0');
            return (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.08 * index }}
                className="group grid gap-6 border-t border-ink/15 py-8 last:border-b md:grid-cols-12 md:gap-8"
              >
                <div className="label hidden text-ink-faint md:col-span-1 md:block">{no}</div>

                <div className="md:col-span-7">
                  <div className="flex items-center gap-4">
                    {project.logo && (
                      <span className="shrink-0 border border-ink/15 bg-paper-100 p-1">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={project.logo}
                          alt={`${project.title} logo`}
                          className="h-9 w-9 object-contain"
                        />
                      </span>
                    )}
                    <h3 className="font-serif text-3xl text-ink transition-colors duration-300 group-hover:text-accent md:text-4xl">
                      {project.title}
                    </h3>
                    {project.featured && <span className="label text-accent">✦ Featured</span>}
                  </div>

                  <p className={`mt-4 max-w-xl text-ink-soft ${isOpen ? '' : 'line-clamp-2'}`}>
                    {project.description}
                  </p>
                  <button
                    onClick={() => setExpanded(isOpen ? null : index)}
                    className="label mt-2 hover:text-accent"
                  >
                    {isOpen ? '— Show less' : '+ Read more'}
                  </button>

                  <p className="tag mt-4">
                    {project.tags.join('  /  ')}
                  </p>
                </div>

                <div className="flex flex-wrap content-start gap-x-6 gap-y-2 md:col-span-4 md:justify-end">
                  {Object.keys(linkLabels)
                    .filter((k) => project.links[k])
                    .map((k) => (
                      <a
                        key={k}
                        href={project.links[k]}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="label inline-flex items-center gap-1 hover:text-accent"
                      >
                        {linkLabels[k]} <FiArrowUpRight className="text-[10px]" />
                      </a>
                    ))}
                  {Object.keys(project.links).length === 0 && (
                    <span className="label text-ink-faint">Private</span>
                  )}
                </div>
              </motion.article>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12"
        >
          <a
            href="https://github.com/jubairp10"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
          >
            More on GitHub <FiArrowUpRight />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
