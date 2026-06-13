import { motion } from 'framer-motion';
<<<<<<< HEAD
import { Briefcase, Calendar, MapPin } from 'lucide-react';
import { fadeInUp, staggerContainer } from '../lib/animations';

const experiences = [
  {
    title: 'Founder / Developer',
    company: 'JASMINTOPUP',
    location: 'Cambodia',
    period: '2026 - Present',
    description: 'Built and managed a live game top-up website with payment flow, admin tools, and order tracking.',
    highlights: ['Full-stack development', 'Payment integration', 'Admin dashboard', 'Order management system'],
  },
  {
    title: 'Web Developer',
    company: 'Personal Projects',
    location: 'Cambodia',
    period: '2025 - Present',
    description: 'Built websites, dashboards, APIs, and responsive UI projects for various use cases.',
    highlights: ['React & Next.js projects', 'API development', 'Responsive design', 'Database management'],
=======
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
>>>>>>> ee6f415 (fixed damn)
  },
];

export default function Experience() {
  return (
<<<<<<< HEAD
    <section id="experience" className="py-24 bg-slate-900 text-white relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `radial-gradient(circle at 25px 25px, rgba(255,255,255,0.1) 2px, transparent 0)`,
          backgroundSize: '50px 50px',
        }}
      />
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="text-center mb-16"
        >
          <motion.span variants={fadeInUp} className="text-violet-400 font-semibold text-sm uppercase tracking-wider">
            Career Path
          </motion.span>
          <motion.h2 variants={fadeInUp} className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4">
            Work{' '}
            <span className="bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">Experience</span>
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-gray-400 mt-4 max-w-2xl mx-auto">
            My journey as a developer, building solutions from concept to production.
          </motion.p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-px w-0.5 h-full bg-gradient-to-b from-violet-500 via-purple-500 to-transparent" />
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className={`relative flex flex-col md:flex-row gap-8 mb-12 ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
            >
              <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-4 h-4">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.2 + 0.3 }}
                  className="w-4 h-4 bg-gradient-to-r from-violet-500 to-purple-600 rounded-full shadow-lg shadow-violet-500/50"
                />
              </div>

              <div className={`flex-1 ml-12 md:ml-0 ${i % 2 === 0 ? 'md:pl-12' : 'md:pr-12'}`}>
                <motion.div
                  whileHover={{ y: -5 }}
                  className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 lg:p-8 hover:border-violet-500/20 transition-all duration-300"
                >
                  <div className="flex items-start justify-between flex-wrap gap-4 mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-1">{exp.title}</h3>
                      <p className="text-violet-400 font-medium">{exp.company}</p>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-400">
                      <Calendar className="w-4 h-4" />
                      {exp.period}
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-400 mb-4">
                    <MapPin className="w-4 h-4" />
                    {exp.location}
                  </div>
                  <p className="text-gray-300 mb-4">{exp.description}</p>
                  <div className="space-y-2">
                    {exp.highlights.map((h, hi) => (
                      <motion.div
                        key={hi}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: i * 0.2 + hi * 0.1 + 0.4 }}
                        className="flex items-center gap-2 text-gray-400 text-sm"
                      >
                        <Briefcase className="w-4 h-4 text-violet-400" />
                        {h}
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
              <div className="hidden md:block flex-1" />
            </motion.div>
          ))}
=======
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
>>>>>>> ee6f415 (fixed damn)
        </div>
      </div>
    </section>
  );
}
