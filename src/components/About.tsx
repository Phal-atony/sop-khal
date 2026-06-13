import { motion } from 'framer-motion';
import { CheckCircle2, Globe2, MapPin, Zap } from 'lucide-react';
import { fadeInUp, staggerContainer, staggerItem } from '../lib/animations';

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
          className="mx-auto max-w-4xl"
        >
          <motion.p variants={fadeInUp} className="eyebrow">About Me</motion.p>
          <motion.h2 variants={fadeInUp} className="mt-4 max-w-3xl text-3xl font-black leading-tight tracking-tight sm:text-5xl">
            A Cambodian developer building <span className="gradient-text">business-ready websites</span>.
          </motion.h2>
          <motion.p variants={fadeInUp} className="mt-5 max-w-3xl text-sm leading-7 text-violet-100/62 sm:text-base">
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
      </div>
    </section>
  );
}
