import { motion } from 'framer-motion';
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
];

export default function About() {
  return (
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
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
