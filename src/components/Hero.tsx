import { motion } from 'framer-motion';
import { ArrowDown, Mail } from 'lucide-react';
import { staggerContainer, blurIn, fadeInUp } from '../lib/animations';

const stats = [
  { label: 'Years Experience', value: '1+' },
  { label: 'Projects Built', value: '5+' },
  { label: 'Live Business Website', value: '1' },
  { label: 'Location', value: 'Cambodia' },
];

export default function Hero() {
  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

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
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ArrowDown className="w-6 h-6 text-gray-400" />
      </motion.div>
    </section>
  );
}
