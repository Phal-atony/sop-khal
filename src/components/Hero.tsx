import { motion } from 'framer-motion';
import { ArrowRight, Check, Code2, Github, Globe2, Mail, Send, Zap } from 'lucide-react';
import { blurIn, fadeInUp, staggerContainer, staggerItem } from '../lib/animations';

const socials = [
  { label: 'GitHub', icon: Github, href: '#projects' },
  { label: 'Email', icon: Mail, href: '#contact' },
  { label: 'Facebook', text: 'f', href: '#contact' },
  { label: 'Website', icon: Globe2, href: 'https://www.jasmintopup.site' },
];

export default function Hero() {
  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  const openSocial = (href: string) => {
    if (href.startsWith('#')) {
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
      return;
    }
    window.open(href, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="home" className="relative min-h-screen overflow-hidden pt-28 sm:pt-32 lg:pt-36">
      <div className="absolute inset-0 hero-vignette" />
      <div className="hero-purple-glow left-[12%] top-[8%] h-80 w-80 opacity-45" />
      <div className="hero-purple-glow right-[-8%] top-[18%] h-[30rem] w-[30rem] opacity-30" />
      <div className="absolute right-0 top-20 hidden h-28 w-1 rounded-l-full bg-violet-500 sm:block" />

      <div className="section-shell relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="grid items-center gap-12 lg:grid-cols-[0.98fr_1fr] lg:gap-16"
        >
          <div className="max-w-3xl text-left">
            <motion.div
              variants={fadeInUp}
              className="mb-7 inline-flex items-center gap-3 rounded-full border border-violet-500/55 bg-violet-500/8 px-6 py-2 text-sm font-semibold text-violet-300 shadow-[0_0_40px_rgba(139,92,246,0.12)] backdrop-blur-md"
            >
              <span className="relative flex h-3 w-3 items-center justify-center" aria-hidden="true">
                <motion.span
                  className="absolute h-3 w-3 rounded-full bg-emerald-400"
                  animate={{ scale: [1, 2.05, 1], opacity: [0.55, 0, 0.55] }}
                  transition={{ duration: 1.65, repeat: Infinity, ease: 'easeInOut' }}
                />
                <motion.span
                  className="relative h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(74,222,128,0.9)]"
                  animate={{ scale: [1, 0.82, 1] }}
                  transition={{ duration: 1.65, repeat: Infinity, ease: 'easeInOut' }}
                />
              </span>
              Available for work
            </motion.div>

            <motion.h1 variants={blurIn} className="text-[3.2rem] font-black leading-[0.95] tracking-[-0.065em] text-white sm:text-7xl lg:text-8xl">
              Hi, I&apos;m
              <span className="mt-1 block text-violet-500">Sokphal</span>
            </motion.h1>

            <motion.p variants={fadeInUp} className="mt-8 text-lg font-bold leading-relaxed text-violet-400 sm:text-2xl">
              Full Stack Developer / Web Developer / Founder
            </motion.p>

            <motion.p variants={fadeInUp} className="mt-5 max-w-2xl text-lg leading-8 text-slate-400 sm:text-xl sm:leading-9">
              Building modern websites, payment systems, admin dashboards, and digital top-up platforms for real users.
            </motion.p>

            <motion.div variants={fadeInUp} className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
              <button onClick={() => scrollTo('projects')} className="hero-primary-button">
                View My Work <ArrowRight className="h-5 w-5" />
              </button>
              <button onClick={() => scrollTo('contact')} className="hero-secondary-button">
                Contact Me
              </button>
            </motion.div>

            <motion.div variants={staggerContainer} className="mt-10 flex flex-wrap gap-4">
              {socials.map((social) => {
                const Icon = social.icon;
                return (
                  <motion.button
                    key={social.label}
                    variants={staggerItem}
                    type="button"
                    onClick={() => openSocial(social.href)}
                    className="social-square"
                    aria-label={social.label}
                  >
                    {Icon ? <Icon className="h-5 w-5" /> : <span className="text-xl font-black">{social.text}</span>}
                  </motion.button>
                );
              })}
            </motion.div>
          </div>

          <motion.div variants={fadeInUp} className="relative mx-auto w-full max-w-[460px] pt-2 sm:pt-4 lg:max-w-[520px]">
            <div className="portrait-orbit">
              <div className="portrait-ring portrait-ring-one" />
              <div className="portrait-ring portrait-ring-two" />
              <div className="portrait-badge portrait-badge-top">
                <Zap className="h-4 w-4 text-yellow-300" />
                <span>1+ Years Exp</span>
              </div>
              <div className="portrait-badge portrait-badge-bottom">
                <Check className="h-4 w-4 text-emerald-400" />
                <span>6 Projects Done</span>
              </div>

              <div className="portrait-frame">
                <div className="avatar-art">
                  <div className="avatar-sky" />
                  <div className="avatar-head" />
                  <div className="avatar-hood" />
                  <div className="avatar-body" />
                  <div className="avatar-initials">SP</div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <button
        onClick={() => scrollTo('contact')}
        className="floating-telegram"
        aria-label="Contact"
        type="button"
      >
        <Send className="h-7 w-7 fill-white" />
      </button>
      <div className="floating-dot" />
      <Code2 className="absolute bottom-12 left-8 h-5 w-5 text-violet-400/35" />
    </section>
  );
}
