import { motion } from 'framer-motion';
<<<<<<< HEAD
import { Code, Server, Database, Shield } from 'lucide-react';
import { fadeInUp, staggerContainer, staggerItem } from '../lib/animations';

const categories = [
  {
    title: 'Frontend',
    icon: Code,
    color: 'from-fuchsia-500 to-pink-500',
    skills: [
      { name: 'HTML & CSS', level: 90 },
      { name: 'JavaScript', level: 85 },
      { name: 'React', level: 85 },
      { name: 'Next.js', level: 80 },
      { name: 'Tailwind CSS', level: 90 },
=======
import {
  Bot,
  BrainCircuit,
  Cloud,
  Code2,
  CreditCard,
  Database,
  Github,
  LayoutDashboard,
  Server,
  ShieldCheck,
  Sparkles,
  Smartphone,
  Wand2,
  Zap,
} from 'lucide-react';
import { fadeInUp, staggerContainer, staggerItem } from '../lib/animations';

const skillCategories = [
  {
    title: 'AI & ML',
    skills: [
      { name: 'LLM Integration', value: 85, icon: BrainCircuit },
      { name: 'Prompt Engineering', value: 82, icon: Sparkles },
      { name: 'AI Automation', value: 78, icon: Bot },
>>>>>>> ee6f415 (fixed damn)
    ],
  },
  {
    title: 'Backend',
<<<<<<< HEAD
    icon: Server,
    color: 'from-violet-500 to-purple-600',
    skills: [
      { name: 'Node.js', level: 80 },
      { name: 'Next.js API Routes', level: 85 },
      { name: 'REST APIs', level: 85 },
      { name: 'Prisma ORM', level: 80 },
      { name: 'PostgreSQL', level: 75 },
    ],
  },
  {
    title: 'Database & Hosting',
    icon: Database,
    color: 'from-emerald-500 to-teal-500',
    skills: [
      { name: 'Neon PostgreSQL', level: 80 },
      { name: 'Vercel', level: 85 },
      { name: 'Render', level: 75 },
      { name: 'Cloudflare', level: 80 },
      { name: 'Git & GitHub', level: 90 },
    ],
  },
  {
    title: 'Security & Payments',
    icon: Shield,
    color: 'from-orange-500 to-red-500',
    skills: [
      { name: 'Admin Authentication', level: 85 },
      { name: 'Rate Limiting', level: 80 },
      { name: 'Payment Webhooks', level: 80 },
      { name: 'KHQR Integration', level: 85 },
      { name: 'Security Headers', level: 75 },
=======
    skills: [
      { name: 'Node.js', value: 88, icon: Server },
      { name: 'REST APIs', value: 90, icon: Zap },
      { name: 'Payment APIs', value: 86, icon: CreditCard },
      { name: 'Database Design', value: 84, icon: Database },
    ],
  },
  {
    title: 'DevOps',
    skills: [
      { name: 'VPS & Deployment', value: 87, icon: Cloud },
      { name: 'Git & GitHub', value: 90, icon: Github },
      { name: 'Cloudflare Setup', value: 86, icon: ShieldCheck },
      { name: 'Vercel / Render', value: 88, icon: LayoutDashboard },
    ],
  },
  {
    title: 'Frontend',
    skills: [
      { name: 'React & TypeScript', value: 92, icon: Code2 },
      { name: 'Tailwind CSS', value: 94, icon: Wand2 },
      { name: 'Responsive UI', value: 91, icon: Smartphone },
>>>>>>> ee6f415 (fixed damn)
    ],
  },
];

export default function Skills() {
  return (
<<<<<<< HEAD
    <section id="skills" className="py-24 bg-slate-900 text-white relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `radial-gradient(circle at 25px 25px, rgba(255,255,255,0.1) 2px, transparent 0)`,
          backgroundSize: '50px 50px',
        }}
      />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="text-center mb-16"
        >
          <motion.span variants={fadeInUp} className="text-violet-400 font-semibold text-sm uppercase tracking-wider">
            Skills &amp; Expertise
          </motion.span>
          <motion.h2 variants={fadeInUp} className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4">
            Technologies I{' '}
            <span className="bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">Work With</span>
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Focused on modern web technologies for building scalable and secure applications that solve real business problems.
          </motion.p>
        </motion.div>

=======
    <section id="skills" className="relative overflow-hidden border-y border-white/[0.05] bg-[#07070d]/70 py-16 sm:py-20">
      <div className="absolute -right-40 top-24 h-96 w-96 rounded-full bg-violet-600/10 blur-3xl" />
      <div className="absolute left-1/3 top-1/2 h-80 w-80 rounded-full bg-purple-600/8 blur-3xl" />

      <div className="section-shell relative z-10">
>>>>>>> ee6f415 (fixed damn)
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
<<<<<<< HEAD
          className="grid md:grid-cols-2 gap-6 lg:gap-8"
        >
          {categories.map((cat, ci) => {
            const Icon = cat.icon;
            return (
              <motion.div
                key={ci}
                variants={staggerItem}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 lg:p-8 hover:border-violet-500/20 transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${cat.color} flex items-center justify-center`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold">{cat.title}</h3>
                </div>
                <div className="space-y-5">
                  {cat.skills.map((skill, si) => (
                    <div key={si}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-300">{skill.name}</span>
                        <span className="text-gray-400 text-sm">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                        <motion.div
                          className={`h-full bg-gradient-to-r ${cat.color} rounded-full`}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: ci * 0.1 + si * 0.05, ease: 'easeOut' }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
=======
          className="mb-12 max-w-3xl"
        >
          <motion.p variants={fadeInUp} className="eyebrow">Skills</motion.p>
          <motion.h2 variants={fadeInUp} className="mt-4 text-3xl font-black tracking-tight text-white sm:text-5xl">
            Tools I use to build <span className="gradient-text">modern products</span>
          </motion.h2>
          <motion.p variants={fadeInUp} className="mt-4 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
            Same card layout as the reference: purple icons, percentage labels, and smooth animated progress bars.
          </motion.p>
        </motion.div>

        <div className="space-y-14">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.18 }}
              variants={staggerContainer}
            >
              <motion.div variants={fadeInUp} className="mb-7 flex items-center gap-4">
                <span className="h-px w-6 bg-violet-500" />
                <h3 className="text-xl font-black tracking-tight text-slate-200 sm:text-2xl">{category.title}</h3>
              </motion.div>

              <div className="grid gap-4 sm:grid-cols-2 lg:gap-5">
                {category.skills.map((skill, index) => {
                  const Icon = skill.icon;
                  return (
                    <motion.div
                      key={skill.name}
                      variants={staggerItem}
                      whileHover={{ y: -4 }}
                      transition={{ duration: 0.25 }}
                      className="group rounded-[1.45rem] border border-white/[0.09] bg-[#101018]/88 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.035),0_18px_50px_rgba(0,0,0,0.22)] transition duration-300 hover:border-violet-500/35 hover:bg-[#13111f]"
                    >
                      <div className="mb-4 flex items-center justify-between gap-4">
                        <div className="flex min-w-0 items-center gap-4">
                          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-violet-500/14 text-violet-400 transition duration-300 group-hover:bg-violet-500/20 group-hover:text-violet-300">
                            <Icon className="h-5 w-5" />
                          </span>
                          <h4 className="truncate text-base font-black text-slate-100 sm:text-lg">{skill.name}</h4>
                        </div>
                        <span className="shrink-0 text-xs font-bold text-violet-400">{skill.value}%</span>
                      </div>

                      <div className="h-1.5 overflow-hidden rounded-full bg-white/[0.06]">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.value}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.95, ease: 'easeOut', delay: 0.12 + categoryIndex * 0.08 + index * 0.06 }}
                          className="h-full rounded-full bg-gradient-to-r from-violet-600 via-violet-500 to-purple-400 shadow-[0_0_24px_rgba(139,92,246,0.38)]"
                        />
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
>>>>>>> ee6f415 (fixed damn)
      </div>
    </section>
  );
}
