<<<<<<< HEAD
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
=======
import { useEffect, useMemo, useRef, useState, type CSSProperties } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
>>>>>>> ee6f415 (fixed damn)
import { Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'Home', href: 'home' },
  { name: 'About', href: 'about' },
  { name: 'Skills', href: 'skills' },
  { name: 'Projects', href: 'projects' },
  { name: 'Experience', href: 'experience' },
  { name: 'Services', href: 'services' },
  { name: 'Contact', href: 'contact' },
];

<<<<<<< HEAD
export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      const scrollPosition = window.scrollY + 100;
      for (const link of navLinks) {
        const el = document.getElementById(link.href);
        if (el) {
          if (scrollPosition >= el.offsetTop && scrollPosition < el.offsetTop + el.offsetHeight) {
            setActiveSection(link.href);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setIsMobileMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-slate-900/80 backdrop-blur-xl border-b border-slate-700/50 shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <motion.button onClick={() => scrollTo('home')} className="flex items-center gap-2" whileHover={{ scale: 1.05 }}>
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center">
              <span className="text-white font-bold text-lg">YN</span>
            </div>
            <span className="font-semibold text-white hidden sm:block">Portfolio</span>
          </motion.button>

          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <motion.button
                key={link.name}
                onClick={() => scrollTo(link.href)}
                className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  activeSection === link.href ? 'text-white' : 'text-gray-400 hover:text-white'
                }`}
                whileHover={{ x: 2 }}
              >
                {link.name}
                {activeSection === link.href && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute inset-0 rounded-lg bg-violet-500/10 border border-violet-500/20"
                    transition={{ type: 'spring', duration: 0.5 }}
                  />
                )}
              </motion.button>
            ))}
          </div>

          <motion.button
            onClick={() => scrollTo('contact')}
            className="hidden lg:flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-violet-600 to-purple-600 text-white rounded-xl text-sm font-medium shadow-lg shadow-violet-500/20 hover:shadow-violet-500/40 transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            Contact
          </motion.button>

          <motion.button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-gray-400 hover:text-white transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </motion.button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-slate-900/95 backdrop-blur-xl border-b border-slate-700/50"
          >
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link, index) => (
                <motion.button
                  key={link.name}
                  onClick={() => scrollTo(link.href)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2, delay: index * 0.05 }}
                  className={`block w-full text-left px-4 py-3 rounded-lg transition-colors ${
                    activeSection === link.href
                      ? 'bg-violet-500/10 text-violet-400 border border-violet-500/20'
                      : 'text-gray-400 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  {link.name}
                </motion.button>
              ))}
              <motion.button
                onClick={() => scrollTo('contact')}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.2, delay: navLinks.length * 0.05 }}
                className="block w-full px-4 py-3 bg-gradient-to-r from-violet-600 to-purple-600 text-white rounded-lg text-center font-medium mt-4"
              >
                Contact Me
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
=======
type NavSwitchStyle = CSSProperties & {
  '--active-index': number;
  '--nav-count': number;
};

let smoothScrollFrame: number | null = null;

const easeOutExpo = (value: number) => (value === 1 ? 1 : 1 - Math.pow(2, -10 * value));

function smoothScrollToSection(id: string) {
  const section = document.getElementById(id);
  if (!section) return;

  if (smoothScrollFrame) {
    window.cancelAnimationFrame(smoothScrollFrame);
    smoothScrollFrame = null;
  }

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const headerOffset = 92;
  const start = window.scrollY;
  const target = Math.max(0, section.getBoundingClientRect().top + window.scrollY - headerOffset);
  const distance = target - start;

  if (reduceMotion || Math.abs(distance) < 8) {
    window.scrollTo({ top: target });
    return;
  }

  const duration = Math.min(980, Math.max(520, Math.abs(distance) * 0.36));
  let startTime: number | null = null;

  const step = (time: number) => {
    startTime ??= time;
    const progress = Math.min((time - startTime) / duration, 1);

    window.scrollTo(0, start + distance * easeOutExpo(progress));

    if (progress < 1) {
      smoothScrollFrame = window.requestAnimationFrame(step);
    } else {
      smoothScrollFrame = null;
    }
  };

  smoothScrollFrame = window.requestAnimationFrame(step);
}

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('home');
  const clickedUntilRef = useRef(0);

  const activeIndex = useMemo(() => {
    const index = navLinks.findIndex((link) => link.href === active);
    return Math.max(index, 0);
  }, [active]);

  const switchStyle = useMemo(
    () => ({ '--active-index': activeIndex, '--nav-count': navLinks.length }) as NavSwitchStyle,
    [activeIndex],
  );

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 18);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const sections = navLinks
      .map((link) => document.getElementById(link.href))
      .filter((section): section is HTMLElement => Boolean(section));

    if (!sections.length) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        if (Date.now() < clickedUntilRef.current) return;

        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target.id) {
          setActive(visible.target.id);
        }
      },
      {
        root: null,
        rootMargin: '-34% 0px -54% 0px',
        threshold: [0, 0.12, 0.25, 0.5, 0.75, 1],
      },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    clickedUntilRef.current = Date.now() + 950;
    setActive(id);
    setOpen(false);
    smoothScrollToSection(id);
  };

  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
      className={`fixed inset-x-0 top-0 z-50 border-b transition-[background-color,border-color,box-shadow,backdrop-filter] duration-300 ${
        isScrolled
          ? 'border-white/10 bg-[#080811]/82 shadow-2xl shadow-black/25 backdrop-blur-2xl'
          : 'border-transparent bg-transparent'
      }`}
    >
      <nav className="mx-auto flex h-[72px] w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <button onClick={() => scrollTo('home')} className="group inline-flex items-center" aria-label="Go to home" type="button">
          <span className="font-mono text-2xl font-black tracking-tight text-violet-500 sm:text-3xl">&lt;</span>
          <span className="text-2xl font-black tracking-[-0.04em] text-white sm:text-3xl">Phal</span>
          <span className="font-mono text-2xl font-black tracking-tight text-violet-500 sm:text-3xl">/&gt;</span>
        </button>

        <div className="nav-switcher nav-switcher-desktop hidden lg:grid" style={switchStyle}>
          <span aria-hidden="true" className="nav-switch-pill" />

          {navLinks.map((link) => {
            const isActive = active === link.href;

            return (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className={`nav-switch-button ${isActive ? 'nav-switch-button-active' : ''}`}
                type="button"
              >
                {link.name}
              </button>
            );
          })}
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setOpen((value) => !value)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full text-slate-400 transition hover:bg-white/[0.05] hover:text-white lg:hidden"
            aria-label="Toggle menu"
            type="button"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10, filter: 'blur(8px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            exit={{ opacity: 0, y: -10, filter: 'blur(8px)' }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            className="nav-switcher nav-switcher-mobile lg:hidden"
            style={switchStyle}
          >
            <span aria-hidden="true" className="nav-switch-pill nav-switch-pill-mobile" />

            {navLinks.map((link, index) => {
              const isActive = active === link.href;

              return (
                <motion.button
                  key={link.href}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.025, duration: 0.24, ease: [0.16, 1, 0.3, 1] }}
                  onClick={() => scrollTo(link.href)}
                  className={`nav-switch-button nav-switch-button-mobile ${isActive ? 'nav-switch-button-active' : ''}`}
                  type="button"
                >
                  {link.name}
                </motion.button>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
>>>>>>> ee6f415 (fixed damn)
  );
}
