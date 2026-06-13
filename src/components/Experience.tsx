import { motion } from 'framer-motion';
import { Briefcase, CalendarDays, Rocket } from 'lucide-react';
import { fadeInUp, staggerContainer, staggerItem } from '../lib/animations';

const timeline = [
  {
    role: 'Founder / Developer',
    company: 'JASMINTOPUP',
    period: '2026 — Present',
    detail: 'Built and improved a real digital top-up website with product pages, order system, KHQR payment flow, and admin dashboard.',
  },
  {
    role: 'Full Stack Developer',
    company: 'Personal Projects',
    period: '2025 — 2026',
    detail: 'Created modern websites, dashboards, checkout interfaces, API integrations, and responsive portfolio layouts.',
  },
  {
    role: 'Web Development Learner',
    company: 'Self-taught Journey',
    period: 'Ongoing',
    detail: 'Continuously improving UI design, backend logic, database usage, deployment, and production security practices.',
  },
];

export default function Experience() {
  return (
    <section id="experience" className="section-pad relative overflow-hidden bg-[#07020f]/40">
      <div className="purple-orb right-10 top-20 h-80 w-80 opacity-50" />
      <div className="section-shell relative z-10">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.25 }} variants={staggerContainer} className="mx-auto max-w-3xl text-center">
          <motion.p variants={fadeInUp} className="eyebrow">Experience</motion.p>
          <motion.h2 variants={fadeInUp} className="mt-4 text-3xl font-black tracking-tight sm:text-5xl">
            Where the work has been <span className="gradient-text">growing</span>.
          </motion.h2>
          <motion.p variants={fadeInUp} className="mt-4 text-sm leading-7 text-violet-100/58 sm:text-base">
            Experience focused on building useful web products and learning through real business requirements.
          </motion.p>
        </motion.div>

        <div className="mx-auto mt-12 max-w-3xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={staggerContainer} className="relative space-y-5 before:absolute before:left-6 before:top-4 before:h-[calc(100%-2rem)] before:w-px before:bg-gradient-to-b before:from-violet-500 before:via-fuchsia-500/50 before:to-transparent sm:before:left-8">
            {timeline.map((item) => (
              <motion.article key={item.role + item.company} variants={staggerItem} className="glass-card relative ml-14 rounded-[2rem] p-5 sm:ml-20 sm:p-7">
                <div className="absolute -left-[3.25rem] top-6 flex h-12 w-12 items-center justify-center rounded-2xl border border-violet-300/20 bg-[#130824] text-violet-300 shadow-lg shadow-violet-950/40 sm:-left-[4.25rem] sm:h-14 sm:w-14">
                  <Briefcase className="h-5 w-5" />
                </div>
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3 className="text-lg font-black text-white sm:text-xl">{item.role}</h3>
                    <p className="mt-1 font-bold text-violet-300">{item.company}</p>
                  </div>
                  <div className="inline-flex items-center gap-2 rounded-full border border-violet-300/12 bg-white/[0.03] px-3 py-1.5 text-xs font-bold text-violet-100/58">
                    <CalendarDays className="h-3.5 w-3.5" /> {item.period}
                  </div>
                </div>
                <p className="mt-4 text-sm leading-7 text-violet-100/58">{item.detail}</p>
              </motion.article>
            ))}
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.55 }} className="glass-card mt-8 rounded-[2rem] p-6 text-center">
            <Rocket className="mx-auto h-8 w-8 text-violet-300" />
            <p className="mt-3 text-sm font-semibold leading-7 text-violet-100/65">
              Current focus: building better payment flows, cleaner dashboards, and a stronger JASMINTOPUP customer experience.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
