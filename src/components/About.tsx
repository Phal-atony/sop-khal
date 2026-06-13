import { motion } from 'framer-motion';
import { MapPin, Mail, Briefcase, CheckCircle2 } from 'lucide-react';
import { slideInFromLeft, slideInFromRight } from '../lib/animations';

const highlights = [
  'Modern Web Applications',
  'Payment Systems',
  'Admin Dashboards',
  'E-commerce Platforms',
];

export default function About() {
  return (
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
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
