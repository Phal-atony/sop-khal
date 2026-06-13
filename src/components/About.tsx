import { motion } from 'framer-motion';
<<<<<<< HEAD
import { MapPin, Mail, Briefcase, CheckCircle2 } from 'lucide-react';
import { slideInFromLeft, slideInFromRight } from '../lib/animations';

const highlights = [
  'Modern Web Applications',
  'Payment Systems',
  'Admin Dashboards',
  'E-commerce Platforms',
=======
import { CheckCircle2, Globe2, MapPin, Zap } from 'lucide-react';
import { fadeInUp, slideInFromLeft, slideInFromRight, staggerContainer, staggerItem } from '../lib/animations';

const highlights = [
  'Modern web applications',
  'Payment system integration',
  'Admin dashboard development',
  'Digital top-up platforms',
];

const aboutCards = [
  { icon: MapPin, title: 'Location', text: 'Cambodia' },
  { icon: Zap, title: 'Available', text: 'Open to new projects' },
>>>>>>> ee6f415 (fixed damn)
];

export default function About() {
  return (
<<<<<<< HEAD
    <section id="about" className="py-24 bg-slate-950 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center"
        >
          <motion.div variants={slideInFromLeft} className="relative">
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-8 border border-slate-700/50 shadow-2xl">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-violet-600/20 to-purple-600/20 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-48 h-48 rounded-full bg-gradient-to-br from-violet-500/30 to-purple-500/30 blur-3xl" />
                </div>
                <div className="relative z-10 text-center">
                  <div className="w-32 h-32 rounded-full bg-gradient-to-br from-violet-500 to-purple-600 mx-auto mb-4 flex items-center justify-center">
                    <span className="text-4xl font-bold text-white">YN</span>
                  </div>
                  <p className="text-gray-400 text-sm">Developer Profile</p>
                </div>
              </div>
            </div>
            <motion.div
              className="absolute -top-4 -right-4 bg-gradient-to-br from-violet-600 to-purple-600 rounded-2xl p-4 shadow-xl shadow-violet-500/20"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <Briefcase className="w-6 h-6 text-white" />
            </motion.div>
            <motion.div
              className="absolute -bottom-4 -left-4 bg-slate-800 border border-slate-700 rounded-2xl p-4 shadow-xl"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
            >
              <MapPin className="w-6 h-6 text-violet-400" />
            </motion.div>
          </motion.div>

          <motion.div variants={slideInFromRight}>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-violet-400 font-semibold text-sm uppercase tracking-wider"
            >
              About Me
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 mb-6"
            >
              The Person Behind{' '}
              <span className="bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">
                the Code
              </span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-gray-300 text-lg leading-relaxed mb-8"
            >
              I'm a developer from Cambodia who builds modern websites, dashboards, payment systems, and online store
              platforms. I focus on clean UI, secure backend logic, fast performance, and real business use cases.
            </motion.p>
            <div className="grid grid-cols-2 gap-3 mb-8">
              {highlights.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                  className="flex items-center gap-2"
                >
                  <CheckCircle2 className="w-5 h-5 text-violet-400 flex-shrink-0" />
                  <span className="text-gray-300">{item}</span>
                </motion.div>
              ))}
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-wrap gap-6"
            >
              <div className="flex items-center gap-2 text-gray-400">
                <MapPin className="w-5 h-5 text-violet-400" />
                <span>Cambodia</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <Mail className="w-5 h-5 text-violet-400" />
                <span>hello@example.com</span>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mt-8 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20"
            >
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-green-400 text-sm font-medium">Available for projects</span>
            </motion.div>
=======
    <section id="about" className="section-pad relative overflow-hidden">
      <div className="purple-orb left-1/4 top-1/4 h-72 w-72 opacity-60" />
      <div className="section-shell relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.22 }}
          variants={staggerContainer}
          className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14"
        >
          <motion.div variants={slideInFromLeft} className="relative mx-auto w-full max-w-lg">
            <div className="absolute -inset-6 rounded-[2rem] bg-violet-600/20 blur-3xl" />
            <div className="glass-card relative overflow-hidden rounded-[2rem] p-4 sm:p-5">
              <div className="relative overflow-hidden rounded-[1.6rem] border border-violet-300/10 bg-[#11071f] p-5">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_8%,rgba(168,85,247,0.38),transparent_56%)]" />
                <div className="relative mx-auto flex aspect-[4/3] max-w-md items-center justify-center">
                  <div className="absolute bottom-5 h-24 w-72 rounded-full bg-fuchsia-500/30 blur-3xl" />
                  <div className="relative w-full max-w-sm rounded-3xl border border-white/10 bg-black/35 p-4 shadow-2xl shadow-fuchsia-950/50">
                    <div className="mb-3 flex items-center justify-between">
                      <div className="flex gap-1.5">
                        <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                        <span className="h-2.5 w-2.5 rounded-full bg-yellow-300" />
                        <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-violet-200/60">Portfolio</span>
                    </div>
                    <div className="rounded-2xl bg-gradient-to-br from-violet-900/70 via-fuchsia-900/50 to-black p-5">
                      <div className="mb-4 h-4 w-28 rounded-full bg-white/15" />
                      <div className="mb-2 h-3 w-48 rounded-full bg-violet-300/40" />
                      <div className="mb-6 h-3 w-32 rounded-full bg-white/10" />
                      <div className="grid grid-cols-3 gap-2">
                        <span className="h-16 rounded-xl bg-white/10" />
                        <span className="h-16 rounded-xl bg-violet-500/25" />
                        <span className="h-16 rounded-xl bg-white/10" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-4 rounded-2xl border border-violet-300/10 bg-black/20 p-4">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-violet-200/60">Founder of JASMINTOPUP</p>
                <p className="mt-2 text-sm text-violet-100/65">Building real web platforms for customers, orders, payments, and digital delivery.</p>
              </div>
            </div>
          </motion.div>

          <motion.div variants={slideInFromRight}>
            <motion.p variants={fadeInUp} className="eyebrow">About Me</motion.p>
            <motion.h2 variants={fadeInUp} className="mt-4 text-3xl font-black leading-tight tracking-tight sm:text-5xl">
              A Cambodian developer building <span className="gradient-text">business-ready websites</span>.
            </motion.h2>
            <motion.p variants={fadeInUp} className="mt-5 text-sm leading-7 text-violet-100/62 sm:text-base">
              I focus on clean design, smooth animations, secure backend logic, payment flows, dashboards, and fast user experiences. My main project is JASMINTOPUP — a digital top-up platform for real customers.
            </motion.p>

            <motion.div variants={staggerContainer} className="mt-8 grid gap-3 sm:grid-cols-2">
              {aboutCards.map((item) => {
                const Icon = item.icon;
                return (
                  <motion.div key={item.title} variants={staggerItem} className="soft-card rounded-3xl p-5">
                    <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-violet-500/15 text-violet-300">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="font-black text-white">{item.title}</h3>
                    <p className="mt-1 text-sm text-violet-100/58">{item.text}</p>
                  </motion.div>
                );
              })}
            </motion.div>

            <motion.div variants={staggerContainer} className="mt-7 grid gap-3">
              {highlights.map((item) => (
                <motion.div key={item} variants={staggerItem} className="flex items-center gap-3 rounded-2xl border border-violet-300/10 bg-white/[0.025] px-4 py-3">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-violet-300" />
                  <span className="text-sm font-semibold text-violet-100/78">{item}</span>
                </motion.div>
              ))}
            </motion.div>

            <motion.a variants={fadeInUp} href="https://www.jasmintopup.site" target="_blank" rel="noopener noreferrer" className="purple-button mt-8">
              <Globe2 className="h-4 w-4" /> Visit JASMINTOPUP
            </motion.a>
>>>>>>> ee6f415 (fixed damn)
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
