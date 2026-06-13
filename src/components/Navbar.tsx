import { useEffect, useMemo, useRef, useState, type CSSProperties, type ComponentType } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { smoothScrollToSection } from '../lib/smoothScroll';
import {
  Briefcase,
  Layers3,
  Home,
  Mail,
  Menu,
  Sparkles,
  Zap,
  User,
  X,
} from 'lucide-react';

const navLinks: { name: string; href: string; icon: ComponentType<{ className?: string }> }[] = [
  { name: 'Home', href: 'home', icon: Home },
  { name: 'About', href: 'about', icon: User },
  { name: 'Skills', href: 'skills', icon: Zap },
  { name: 'Projects', href: 'projects', icon: Layers3 },
  { name: 'Experience', href: 'experience', icon: Briefcase },
  { name: 'Services', href: 'services', icon: Sparkles },
  { name: 'Contact', href: 'contact', icon: Mail },
];

type NavSwitchStyle = CSSProperties & {
  '--active-index': number;
  '--nav-count': number;
};

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
    clickedUntilRef.current = Date.now() + 720;
    setActive(id);
    setOpen(false);
    smoothScrollToSection(id, { offset: 84 });
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
            <span aria-hidden="true" className="nav-mobile-frame-glow" />

            {navLinks.map((link, index) => {
              const isActive = active === link.href;
              const Icon = link.icon;

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
                  <span className={`nav-mobile-icon-frame ${isActive ? 'nav-mobile-icon-frame-active' : ''}`}>
                    <Icon className="h-[1.15rem] w-[1.15rem]" />
                  </span>
                  <span className="nav-mobile-label">{link.name}</span>
                </motion.button>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
