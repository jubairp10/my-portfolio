'use client';

import { FiArrowUp, FiArrowUpRight } from 'react-icons/fi';

const quickLinks = [
  { name: 'About', href: '#about' },
  { name: 'Work', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Skills', href: '#skills' },
  { name: 'Contact', href: '#contact' },
];

const socials = [
  { name: 'GitHub', href: 'https://github.com/jubairp10' },
  { name: 'LinkedIn', href: 'http://www.linkedin.com/in/jubair-p' },
  { name: 'Email', href: 'mailto:jubijubairp@gmail.com' },
];

const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="border-t border-ink/15">
      <div className="section py-16">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-6">
            <p className="font-serif text-4xl text-ink md:text-5xl">
              Jubair P<span className="text-accent">.</span>
            </p>
            <p className="mt-3 max-w-sm text-ink-soft">
              Flutter developer building beautiful, functional cross-platform mobile apps.
            </p>
          </div>

          <div className="md:col-span-3">
            <span className="label">Navigate</span>
            <ul className="mt-4 space-y-2">
              {quickLinks.map((l) => (
                <li key={l.name}>
                  <a href={l.href} className="text-ink transition-colors hover:text-accent">
                    {l.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <span className="label">Elsewhere</span>
            <ul className="mt-4 space-y-2">
              {socials.map((s) => (
                <li key={s.name}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-ink transition-colors hover:text-accent"
                  >
                    {s.name} <FiArrowUpRight className="text-xs" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex items-center justify-between border-t border-ink/15 pt-6">
          <p className="label">© {new Date().getFullYear()} Jubair P</p>
          <button
            onClick={scrollToTop}
            className="label inline-flex items-center gap-1 hover:text-accent"
            aria-label="Back to top"
          >
            Back to top <FiArrowUp />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
