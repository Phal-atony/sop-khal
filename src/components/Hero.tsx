import { motion } from 'framer-motion';
<<<<<<< HEAD
import { ArrowDown, Mail } from 'lucide-react';
import { staggerContainer, blurIn, fadeInUp } from '../lib/animations';

const stats = [
  { label: 'Years Experience', value: '1+' },
  { label: 'Projects Built', value: '5+' },
  { label: 'Live Business Website', value: '1' },
  { label: 'Location', value: 'Cambodia' },
=======
import { ArrowRight, Check, Code2, Github, Globe2, Mail, Send, Zap } from 'lucide-react';
import { blurIn, fadeInUp, staggerContainer, staggerItem } from '../lib/animations';

const socials = [
  { label: 'GitHub', icon: Github, href: '#projects' },
  { label: 'Email', icon: Mail, href: '#contact' },
  { label: 'Facebook', text: 'f', href: '#contact' },
  { label: 'Website', icon: Globe2, href: 'https://www.jasmintopup.site' },
>>>>>>> ee6f415 (fixed damn)
];

export default function Hero() {
  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

<<<<<<< HEAD
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 text-white">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950" />
      <motion.div
        className="absolute inset-0 opacity-30"
        style={{ background: 'radial-gradient(circle at 50% 50%, rgba(139,92,246,0.18) 0%, transparent 55%)' }}
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.45, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="text-center">
          <motion.div variants={blurIn} className="mb-6">
            <motion.span
              className="inline-block px-4 py-2 rounded-full text-sm font-medium bg-violet-500/10 border border-violet-500/20 text-violet-400 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Welcome to my portfolio
            </motion.span>
          </motion.div>

          <motion.h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6" variants={blurIn}>
            <span className="text-white">Hi, I'm </span>
            <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-fuchsia-400 bg-clip-text text-transparent">
              Your Name
            </span>
          </motion.h1>

          <motion.p className="text-xl sm:text-2xl md:text-3xl text-gray-300 mb-4 font-medium" variants={fadeInUp}>
            Full Stack Developer &amp; Founder of{' '}
            <span className="text-violet-400">JASMINTOPUP</span>
          </motion.p>

          <motion.p className="text-gray-400 text-lg max-w-2xl mx-auto mb-10" variants={fadeInUp}>
            I build modern web applications, payment systems, admin dashboards, and digital top-up platforms.
          </motion.p>

          <motion.div className="flex flex-col sm:flex-row gap-4 justify-center mb-16" variants={fadeInUp}>
            <motion.button
              onClick={() => scrollTo('projects')}
              className="px-8 py-4 bg-gradient-to-r from-violet-600 to-purple-600 text-white rounded-xl font-semibold text-lg shadow-lg shadow-violet-500/25 hover:shadow-violet-500/40 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              View My Work
            </motion.button>
            <motion.button
              onClick={() => scrollTo('contact')}
              className="px-8 py-4 bg-white/5 border border-white/10 text-white rounded-xl font-semibold text-lg hover:bg-white/10 hover:border-white/20 transition-all duration-300 flex items-center justify-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <Mail className="w-5 h-5" />
              Contact Me
            </motion.button>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto"
            variants={staggerContainer}
          >
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-violet-500/20 transition-all duration-300"
              >
                <div className="text-3xl sm:text-4xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </motion.div>
            ))}
=======
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
>>>>>>> ee6f415 (fixed damn)
          </motion.div>
        </motion.div>
      </div>

<<<<<<< HEAD
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ArrowDown className="w-6 h-6 text-gray-400" />
      </motion.div>
=======
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
>>>>>>> ee6f415 (fixed damn)
    </section>
  );
}
